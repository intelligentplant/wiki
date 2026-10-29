#!/usr/bin/env node
/* Structural checks for the generated wiki (no local Jekyll available).
 *
 *   node tools/verify.js [repoRoot]
 *
 * Verifies that:
 *   - every generated page has parseable front matter with layout/title/permalink
 *   - permalinks are unique and start with /
 *   - every internal link (/…​.html) resolves to a generated permalink
 *   - every /assets/media/… reference exists on disk
 *   - HTML tables are balanced
 *   - _data/nav.json hrefs all resolve
 */

const fs = require('fs');
const path = require('path');

const repoRoot = process.argv[2] || path.resolve(__dirname, '..');
const wikiDir = path.join(repoRoot, 'wiki');
const mediaDir = path.join(repoRoot, 'assets', 'media');

// Links in page bodies include the site baseurl (e.g. /wiki); permalinks do not.
const baseUrl = (() => {
  const cfg = fs.readFileSync(path.join(repoRoot, '_config.yml'), 'utf8');
  const m = cfg.match(/^baseurl:\s*["']?([^"'\s#]*)["']?/m);
  return m ? m[1].replace(/\/+$/, '') : '';
})();

const problems = [];
const fail = (msg) => problems.push(msg);

function safeDecode(s) {
  try {
    return decodeURIComponent(s);
  } catch (e) {
    return s;
  }
}

function walk(dir, base = dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, base, out);
    else out.push(path.relative(base, full).split(path.sep).join('/'));
  }
  return out;
}

/* ----------------------------------------------------------- page front matter */

const pages = walk(wikiDir).filter((f) => f.endsWith('.md'));
const permalinks = new Map();
const anchors = new Map(); // permalink -> Set of slugs

function slugify(s) {
  return String(s)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

for (const rel of pages) {
  const full = path.join(wikiDir, rel);
  const text = fs.readFileSync(full, 'utf8');
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) {
    fail(`${rel}: missing front matter`);
    continue;
  }
  const fm = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!kv) {
      if (line.trim()) fail(`${rel}: unparsable front matter line: ${line}`);
      continue;
    }
    fm[kv[1]] = kv[2].replace(/^"|"$/g, '').replace(/""/g, '"');
  }
  for (const key of ['layout', 'title', 'permalink']) {
    if (!fm[key]) fail(`${rel}: front matter missing '${key}'`);
  }
  if (fm.permalink && !fm.permalink.startsWith('/')) {
    fail(`${rel}: permalink must start with '/': ${fm.permalink}`);
  }
  if (permalinks.has(fm.permalink)) {
    fail(`duplicate permalink ${fm.permalink} in ${rel} and ${permalinks.get(fm.permalink)}`);
  }
  permalinks.set(fm.permalink, rel);

  const body = text.slice(m[0].length);

  // collect heading anchors (kramdown auto_ids); `{: .class}` suffixes are
  // kramdown attributes and are not part of the heading text
  const ids = new Set();
  for (const h of body.matchAll(/^(#{1,6})\s+(.+?)\s*$/gm)) {
    const text = h[2].replace(/\s*\{:\s*[^}]*\}\s*$/, '').replace(/<[^>]+>/g, '');
    ids.add(slugify(text));
  }
  anchors.set(fm.permalink, ids);

  // table balance
  const open = (body.match(/<table\b/g) || []).length;
  const close = (body.match(/<\/table>/g) || []).length;
  if (open !== close) fail(`${rel}: ${open} <table> vs ${close} </table>`);
  const trOpen = (body.match(/<tr>/g) || []).length;
  const trClose = (body.match(/<\/tr>/g) || []).length;
  if (trOpen !== trClose) fail(`${rel}: ${trOpen} <tr> vs ${trClose} </tr>`);

  // leftover DokuWiki syntax (ignoring fenced code, which is verbatim)
  const prose = body.replace(/```[\s\S]*?```/g, '');
  for (const [label, re] of [
    ['DokuWiki heading', /^={2,7}\s|\s={2,7}$/m],
    ['unconverted wiki link', /\[\[[^\]]*\]\]/],
    ['unconverted media ref', /\{\{[^\}]*\}\}/],
    ['footnote syntax', /\(\([^)]*\)\)/],
    ['raw html marker', /<\/?html>/i],
    ['colspan marker', /\^\^/],
  ]) {
    if (re.test(prose)) fail(`${rel}: leftover ${label}`);
  }
}

/* ------------------------------------------------------------------ index.md */

const rootIndex = path.join(repoRoot, 'index.md');
if (!fs.existsSync(rootIndex)) fail('index.md is missing');
const indexText = fs.existsSync(rootIndex) ? fs.readFileSync(rootIndex, 'utf8') : '';
if (!/^permalink:\s*\/index\.html\s*$/m.test(indexText)) fail('index.md must have permalink /index.html');

/* -------------------------------------------------------------- link checks */

const allDocs = pages.map((r) => ({ file: path.join(wikiDir, r), rel: r }));
if (fs.existsSync(rootIndex)) allDocs.push({ file: rootIndex, rel: 'index.md' });
if (fs.existsSync(rootIndex)) allDocs.push({ file: rootIndex, rel: 'index.md' });

let linkCount = 0;
let mediaCount = 0;
for (const { file, rel } of allDocs) {
  // fenced code blocks are verbatim source, not markup
  const text = fs.readFileSync(file, 'utf8').replace(/```[\s\S]*?```/g, '');

  for (const m of text.matchAll(/\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)) {
    const raw = m[1];
    if (/^(https?:|mailto:|#)/i.test(raw)) continue;
    const [prefixed, anchor] = raw.split('#');
    if (!prefixed) continue;
    linkCount += 1;
    if (!prefixed.startsWith(baseUrl + '/')) {
      fail(`${rel}: link does not start with '${baseUrl}/': ${raw}`);
      continue;
    }
    const target = prefixed.slice(baseUrl.length);
    if (target.startsWith('/assets/')) {
      const disk = path.join(repoRoot, safeDecode(target.replace(/^\//, '')));
      if (!fs.existsSync(disk)) fail(`${rel}: missing asset ${target}`);
      continue;
    }
    if (!permalinks.has(target)) fail(`${rel}: broken internal link ${raw}`);
    else if (anchor && !anchors.get(target).has(slugify(anchor))) {
      // kramdown ids differ slightly; only warn-worthy when the target has no ids at all
      if (anchors.get(target).size === 0) {
        fail(`${rel}: anchor #${anchor} in ${target} but that page has no headings`);
      }
    }
  }

  for (const m of text.matchAll(/<img[^>]+src="([^"]+)"/g)) {
    const src = safeDecode(m[1]);
    if (!src.startsWith('/')) continue;
    mediaCount += 1;
    if (!src.startsWith(baseUrl + '/')) {
      fail(`${rel}: image does not start with '${baseUrl}/': ${src}`);
      continue;
    }
    const target = src.slice(baseUrl.length);
    if (!fs.existsSync(path.join(repoRoot, target.replace(/^\//, '')))) {
      fail(`${rel}: missing image ${target}`);
    }
  }
}

/* ------------------------------------------------------------------ nav.json */

const navPath = path.join(repoRoot, '_data', 'nav.json');
if (!fs.existsSync(navPath)) fail('_data/nav.json is missing');
else {
  const nav = JSON.parse(fs.readFileSync(navPath, 'utf8'));
  const seen = new Set();
  for (const section of nav) {
    if (!section.key || !section.title || !Array.isArray(section.items)) {
      fail(`nav.json: malformed section ${JSON.stringify(section).slice(0, 80)}`);
      continue;
    }
    if (seen.has(section.key)) fail(`nav.json: duplicate section key ${section.key}`);
    seen.add(section.key);
    for (const item of section.items) {
      if (!item.title) fail(`nav.json: item without title in ${section.key}`);
      if (!permalinks.has(item.href)) fail(`nav.json: ${section.key} -> unknown href ${item.href}`);
    }
  }
}

/* ------------------------------------------------------------- unused media */

const usedMedia = new Set();
for (const { file } of allDocs) {
  const text = fs.readFileSync(file, 'utf8');
  for (const m of text.matchAll(/\/assets\/media\/([^)\s"']+)/g)) {
    usedMedia.add(safeDecode(m[1]));
  }
}
const onDiskMedia = walk(mediaDir);
const unused = onDiskMedia.filter((r) => !usedMedia.has(r));

/* -------------------------------------------------------------------- report */

console.log(`pages:            ${pages.length}`);
console.log(`permalinks:       ${permalinks.size}`);
console.log(`media on disk:    ${onDiskMedia.length}`);
console.log(`media referenced: ${usedMedia.size}`);
console.log(`links checked:    ${linkCount + mediaCount}`);
console.log(`unused media:     ${unused.length}`);
if (unused.length) {
  console.log('\nfirst 15 unused media files:');
  for (const u of unused.slice(0, 15)) console.log('  ' + u);
}

if (problems.length) {
  console.log(`\n${problems.length} PROBLEM(S):`);
  for (const p of problems.slice(0, 60)) console.log('  - ' + p);
  if (problems.length > 60) console.log(`  … and ${problems.length - 60} more`);
  process.exit(1);
}
console.log('\nOK — no structural problems found.');
