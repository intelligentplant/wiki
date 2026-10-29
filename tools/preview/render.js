/* Local stand-in for `jekyll build`: parses front matter, renders Markdown with
   markdown-it (GFM-like) and renders the Liquid layouts/includes with liquidjs.
   Output goes to ./_site so the site can be eyeballed in a browser with
   `node serve.js`. Use this when you do not have Ruby/Jekyll installed; it is a
   close approximation, not a replacement for the GitHub Pages build. */
const fs = require('fs');
const path = require('path');
const { Liquid } = require('liquidjs');
const MarkdownIt = require('markdown-it');
const anchor = require('markdown-it-anchor');

const repo = path.resolve(process.argv[2] || path.join(__dirname, '..', '..'));
const outDir = path.join(__dirname, '_site');

const md = new MarkdownIt({ html: true, linkify: false, typographer: false });
md.use(anchor, {
  level: [2, 3, 4, 5, 6],
  slugify: (s) => String(s).trim().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-'),
});

// NOTE: no `{: .class}` handling here on purpose. GitHub Pages uses
// `kramdown-parser-gfm`, which does NOT apply block-level inline attribute lists,
// so a trailing `{: .title}` stays literal text and leaks into the anchor id. The
// converter emits plain headings and wiki.css styles h2/h3 directly; emulating
// kramdown's class handling here would only make the local render disagree with
// the published site.

const engine = new Liquid({
  root: [path.join(repo, '_includes'), path.join(repo, '_layouts')],
  dynamicPartials: false,
});
engine.registerFilter('relative_url', (u) => u);
engine.registerFilter('strip_html', (s) => String(s).replace(/<[^>]*>/g, ''));
engine.registerFilter('normalize_whitespace', (s) => String(s).replace(/\s+/g, ' ').trim());
engine.registerFilter('truncate', (s, n) => (String(s).length > n ? String(s).slice(0, n) : String(s)));
engine.registerFilter('escape', (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'));

function readFrontMatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) throw new Error('no front matter');
  const fm = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!kv) continue;
    let v = kv[2].trim();
    if (/^".*"$/.test(v)) v = v.slice(1, -1);
    fm[kv[1]] = v;
  }
  return { fm, body: text.slice(m[0].length) };
}

function walk(dir, base = dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, base, out);
    else out.push(path.relative(base, full));
  }
  return out;
}

const site = {
  title: 'Industrial App Store Wiki',
  description: 'Documentation for the Industrial App Store.',
  data: { nav: JSON.parse(fs.readFileSync(path.join(repo, '_data', 'nav.json'), 'utf8')) },
};

const layouts = {};
for (const f of fs.readdirSync(path.join(repo, '_layouts'))) {
  const raw = fs.readFileSync(path.join(repo, '_layouts', f), 'utf8');
  // layout files carry their own front matter (`layout: default`), which Jekyll
  // consumes rather than emitting.
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  layouts[f.replace(/\.html$/, '')] = m ? raw.slice(m[0].length) : raw;
}

const sources = [
  ...walk(path.join(repo, 'wiki')).map((r) => path.join(repo, 'wiki', r)),
  path.join(repo, 'index.md'),
];

fs.rmSync(outDir, { recursive: true, force: true });
let rendered = 0;
const errors = [];

(async () => {
  for (const file of sources) {
    const rel = path.relative(repo, file);
    let fm;
    let htmlBody;
    try {
      const parsed = readFrontMatter(fs.readFileSync(file, 'utf8'));
      fm = parsed.fm;
      htmlBody = md.render(parsed.body);
    } catch (e) {
      errors.push(`${rel}: ${e.message}`);
      continue;
    }
    const page = { ...fm, url: fm.permalink, content: htmlBody, excerpt: '' };
    let tpl = layouts[fm.layout];
    if (!tpl) { errors.push(`${rel}: unknown layout ${fm.layout}`); continue; }
    // Resolve layout inheritance (`layout:` in a layout's own front matter).
    const chain = [fm.layout];
    while (true) {
      const raw = fs.readFileSync(path.join(repo, '_layouts', chain[chain.length - 1] + '.html'), 'utf8');
      const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
      const parent = m && m[1].match(/^layout:\s*(.+)$/m);
      if (!parent) break;
      const name = parent[1].trim();
      if (!layouts[name]) { errors.push(`${rel}: unknown parent layout ${name}`); break; }
      chain.push(name);
    }
    let html;
    let content = htmlBody;
    try {
      for (const name of chain) {
        html = await engine.parseAndRender(layouts[name], { page, site, content });
        content = html;
      }
    } catch (e) {
      errors.push(`${rel}: liquid error ${e.message}`);
      continue;
    }
    const out = path.join(outDir, String(fm.permalink).replace(/^\/+/, ''));
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, html, 'utf8');
    rendered++;
  }

  for (const rel of walk(path.join(repo, 'assets'))) {
    const dest = path.join(outDir, 'assets', rel);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(path.join(repo, 'assets', rel), dest);
  }

  console.log(`rendered ${rendered} pages -> ${outDir}`);
  if (errors.length) {
    console.log('ERRORS:');
    for (const e of errors) console.log('  - ' + e);
    process.exit(1);
  }
})();
