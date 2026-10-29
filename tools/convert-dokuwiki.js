#!/usr/bin/env node
/**
 * Converts the DokuWiki export in intelligentplant/root (DokuWiki/data) into
 * Markdown pages for the Jekyll site in this repository.
 *
 * Usage:
 *   node tools/convert-dokuwiki.js <dokuwikiDataDir> [<repoRoot>]
 *
 *   <dokuwikiDataDir>  folder containing `pages` and `media` from root/DokuWiki/data
 *   <repoRoot>         this repository root (defaults to the parent of tools/)
 *
 * Outputs:
 *   wiki/<ns>/<page>.md      converted pages (with Jekyll front matter)
 *   assets/media/...         copied media files
 *   _data/nav.json           sidebar navigation model
 *   index.md                 the DokuWiki `start` page, used as the site home
 */

const fs = require('fs');
const path = require('path');
const { buildTree } = require('./build-nav');

const dataDir = process.argv[2];
const repoRoot = process.argv[3] || path.resolve(__dirname, '..');
if (!dataDir || !fs.existsSync(dataDir)) {
  console.error('Usage: node tools/convert-dokuwiki.js <dokuWikiDataDir> [repoRoot]');
  process.exit(1);
}
const pagesDir = path.join(dataDir, 'pages');
const mediaDir = path.join(dataDir, 'media');
const outWiki = path.join(repoRoot, 'wiki');
const outMedia = path.join(repoRoot, 'assets', 'media');
const outData = path.join(repoRoot, '_data');

// The site is served under `baseurl` (e.g. /wiki). Links written into page bodies
// are plain Markdown, so they carry it themselves; permalinks and nav.json do not,
// because Jekyll and the `relative_url` filter add it there.
const baseUrl = (() => {
  const cfg = fs.readFileSync(path.join(repoRoot, '_config.yml'), 'utf8');
  const m = cfg.match(/^baseurl:\s*["']?([^"'\s#]*)["']?/m);
  return m ? m[1].replace(/\/+$/, '') : '';
})();

/* ---------------------------------------------------------------- helpers */

// Some DokuWiki pages were saved with UTF-8 bytes that had been double-encoded.
const MOJIBAKE = [
  [/\u00e2\u0080\u0094/g, '\u2014'],
  [/\u00e2\u0080\u0099/g, '\u2019'],
  [/\u00e2\u0080\u009c/g, '\u201c'],
  [/\u00e2\u0080\u009d/g, '\u201d'],
  [/\u00e2\u0080\u00a6/g, '\u2026'],
  [/\u00e2\u0080\u0093/g, '\u2013'],
  [/\u00e2\u0080\u0098/g, '\u2018'],
  [/\u00e2\u0080\u009a/g, '\u201a'],
  [/\u00e2\u0088\u0092/g, '\u2212'],
  [/\u00c2\u00a0/g, '\u00a0'],
  [/\u00c2\u00b0/g, '\u00b0'],
  [/\u00c3\u00a9/g, '\u00e9'],
  [/\u00c3\u00b1/g, '\u00f1'],
  [/\u00c3\u00bc/g, '\u00fc'],
  [/\u00c3\u00b6/g, '\u00f6'],
  [/\u00c3\u00a4/g, '\u00e4'],
];

function fixEncoding(text) {
  for (const [re, rep] of MOJIBAKE) text = text.replace(re, rep);
  return text;
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

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function titleCaseWords(s) {
  return String(s)
    .replace(/[_\-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function stripInlineNoise(s) {
  return String(s)
    .replace(/<[^>]*>/g, '')
    .replace(/\{\{([^}|]*)(\|[^}]*)?\}\}/g, (_m, a, b) => (b ? b.slice(1) : a))
    .replace(/\[\[([^\]|]*)(\|[^\]]*)?\]\]/g, (_m, a, b) => (b ? b.slice(1) : a))
    .replace(/\(\(.*?\)\)/g, '')
    .replace(/\*\*|\/\/|__|''/g, '')
    .replace(/\\{2}/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** kramdown-compatible heading id. */
function slug(s) {
  return String(s || '')
    .toLowerCase()
    .trim()
    .replace(/_/g, ' ')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-|-$/g, '');
}

function encodeUrl(u) {
  return String(u).replace(/ /g, '%20');
}

function hrefFor(ns, name, anchor) {
  const nsPath = ns ? '/' + ns.split('.').join('/') : '';
  return `${nsPath}/${name}.html${anchor ? '#' + anchor : ''}`;
}

/* ------------------------------------------------------- page index build */

const relFiles = walk(pagesDir).filter((f) => f.endsWith('.txt'));

/** id = "ns:page" where namespace segments are dot separated. */
const pages = new Map(); // id -> page
const nsIndex = new Map(); // ns -> representative page

for (const rel of relFiles) {
  const noExt = rel.replace(/\.txt$/, '');
  const idx = noExt.lastIndexOf('/');
  const dirNs = idx === -1 ? '' : noExt.slice(0, idx);
  const name = idx === -1 ? noExt : noExt.slice(idx + 1);
  // A folder called `a.b` is the namespace `a.b`; nested folders add segments.
  const ns = dirNs.split('/').join('.');
  const id = (ns ? ns + ':' : '') + name;
  const raw = fixEncoding(fs.readFileSync(path.join(pagesDir, rel), 'utf8'));
  let title = null;
  const m = raw.match(/^\s*={2,7}[ \t]*([^=].*?)[ \t]*={2,}[ \t]*$/m);
  if (m) title = stripInlineNoise(m[1]);
  if (!title) title = titleCaseWords(name);
  pages.set(id.toLowerCase(), { id, ns, name, rel, title, href: hrefFor(ns, name) });
}

for (const page of pages.values()) {
  const key = page.ns.toLowerCase();
  if (!key) continue;
  const last = page.ns.split('.').pop();
  if (!nsIndex.has(key) || page.name.toLowerCase() === last.toLowerCase()) {
    nsIndex.set(key, page);
  }
}

/** Resolve a DokuWiki page reference (lower-cased, no anchor) to a page. */
function resolvePage(ref, currentNs) {
  ref = String(ref)
    .toLowerCase()
    .replace(/\.txt$/, '')
    .replace(/:{2,}/g, ':')
    .replace(/:$/, '')
    // DokuWiki page ids cannot contain spaces; authors write them anyway.
    .replace(/ /g, '_');
  if (!ref) return null;
  if (pages.has(ref)) return pages.get(ref);

  if (ref.startsWith(':')) {
    const abs = ref.slice(1);
    return pages.get(abs) || nsIndex.get(abs) || null;
  }

  if (ref.includes(':')) {
    const parts = ref.split(':');
    const pageName = parts.pop();
    const ns = parts.join('.');
    const direct = (ns ? ns + ':' : '') + pageName;
    if (pages.has(direct)) return pages.get(direct);
    // `alarm_analysis.reports:Reports` may also be written `alarm_analysis:reports:Reports`
    const alt = parts.concat([parts[parts.length - 1], pageName]).join('.');
    if (pages.has(alt)) return pages.get(alt);
    return nsIndex.get(ns) || null;
  }

  if (currentNs && pages.has(currentNs + ':' + ref)) return pages.get(currentNs + ':' + ref);
  if (pages.has(ref + ':' + ref)) return pages.get(ref + ':' + ref);
  return nsIndex.get(ref) || null;
}

/* --------------------------------------------------------- inline convert */

const DOC_EXTS = new Set(['.pdf', '.zip', '.xlsx', '.xls', '.docx', '.doc', '.txt', '.csv']);

function convertMedia(inner, currentNs) {
  let target = String(inner).trim();
  let title = '';
  const bar = target.indexOf('|');
  if (bar !== -1) {
    title = target.slice(bar + 1).trim();
    target = target.slice(0, bar).trim();
  }
  let dims = '';
  const q = target.indexOf('?');
  if (q !== -1) {
    dims = target.slice(q + 1);
    target = target.slice(0, q);
  }

  if (/^https?:/i.test(target)) return `[${title || target}](${encodeUrl(target)})`;

  let mediaPath = target
    .replace(/^:/, '')
    .replace(/\\/g, '/')
    .replace(/:+/g, '/')
    .replace(/^\/+/, '');
  if (!mediaPath.includes('/')) mediaPath = (currentNs ? currentNs + '/' : '') + mediaPath;
  mediaPath = mediaPath.toLowerCase();

  // References to DokuWiki's own logo/media are not part of the wiki content.
  if (mediaPath.startsWith('wiki/')) return stripInlineNoise(title);

  const ext = path.extname(mediaPath).toLowerCase();
  const url = `${baseUrl}/assets/media/${mediaPath}`;
  const alt = stripInlineNoise(title) || path.basename(mediaPath, ext);
  const flags = dims.split('&').map((p) => p.trim().toLowerCase());

  if (DOC_EXTS.has(ext) || flags.includes('linkonly')) {
    return `[${stripInlineNoise(title) || path.basename(mediaPath)}](${encodeUrl(url)})`;
  }

  let width = null;
  let height = null;
  for (const part of flags) {
    if (!part || ['nolink', 'direct', 'cache', 'linkonly', 'nolink&'].includes(part)) continue;
    const m = part.match(/^(\d+)(?:x(\d+))?$/);
    if (m) {
      width = m[1];
      height = m[2] || null;
    }
  }
  const style = [width ? `max-width:${width}px` : '', height ? `height:${height}px` : '']
    .filter(Boolean)
    .join(';');
  if (style) {
    return `<img src="${encodeUrl(url)}" alt="${alt.replace(/"/g, "'")}" style="${style}" loading="lazy" />`;
  }
  return `![${alt}](${encodeUrl(url)})`;
}

const INTERWIKI = {
  wp: (t) => ['https://en.wikipedia.org/wiki/' + encodeURIComponent(t.replace(/ /g, '_')), t],
  wpfr: (t) => ['https://fr.wikipedia.org/wiki/' + encodeURIComponent(t.replace(/ /g, '_')), t],
  doku: (t) => ['https://www.dokuwiki.org/' + t.replace(/ /g, ':'), t],
  this: () => ['/index.html', 'this wiki'],
};

function convertLink(body, currentNs) {
  body = String(body).trim();
  let target = body;
  let title = '';
  const bar = body.indexOf('|');
  if (bar !== -1) {
    target = body.slice(0, bar).trim();
    title = body.slice(bar + 1).trim();
  }

  if (/^https?:/i.test(target) || /^mailto:/i.test(target)) {
    if (/^\{\{.*\}\}$/.test(title)) return convertMedia(title, currentNs);
    return `[${title || target}](${encodeUrl(target)})`;
  }

  const iw = target.match(/^([a-z]+)>(.*)$/);
  if (iw) {
    const handler = INTERWIKI[iw[1]];
    if (handler) {
      const [url, fallback] = handler(iw[2].trim());
      return `[${title || stripInlineNoise(fallback)}](${encodeUrl(url)})`;
    }
    return title || iw[2].trim();
  }

  let anchor = '';
  const hash = target.indexOf('#');
  if (hash !== -1) {
    anchor = target.slice(hash + 1);
    target = target.slice(0, hash);
  }

  if (target === '') {
    return `[${title || stripInlineNoise(anchor)}](#${slug(anchor || title)})`;
  }

  const page = resolvePage(target, currentNs);
  if (!page) return title || stripInlineNoise(target);
  if (/^\{\{.*\}\}$/.test(title)) {
    return `[${convertMedia(title, currentNs)}](${encodeUrl(baseUrl + hrefFor(page.ns, page.name))})`;
  }
  return `[${title || page.title}](${encodeUrl(baseUrl + hrefFor(page.ns, page.name, slug(anchor)))})`;
}

// Inline markup is converted in one pass so that already-generated HTML and
// Markdown links are never re-scanned. That matters for `//` inside URLs:
// `https://example.com` used to look like an italic pair.
const INLINE_RE =
  /\(\((?:[^()]|\([^()]*\))*\)\)|\{\{[^{}]*\}\}|\[\[[^\]]*\]\]|\*\*[\s\S]+?\*\*|(?<![:\w])\/\/(?![ \t/])[^\n]+?(?<=[^\s:/])\/\/|(?<![\w:])__[^\n]+?__|''[^'\n]+?''|\\{2}/g;

function convertInline(text, currentNs, state) {
  return String(text).replace(INLINE_RE, (match) => {
    if (match.startsWith('((')) {
      const note = convertInline(match.slice(2, -2), currentNs, state);
      state.n += 1;
      return `<sup class="wiki-footnote" title="${stripInlineNoise(note).replace(/"/g, '&quot;')}">[${state.n}]</sup>`;
    }
    if (match.startsWith('{{')) return convertMedia(match.slice(2, -2), currentNs);
    if (match.startsWith('[[')) return convertLink(match.slice(2, -2), currentNs);
    // emphasis can wrap links and media, so convert the payload as well
    if (match.startsWith('**')) return '<strong>' + convertInline(match.slice(2, -2), currentNs, state) + '</strong>';
    if (match.startsWith('//')) return '<em>' + convertInline(match.slice(2, -2), currentNs, state) + '</em>';
    if (match.startsWith('__')) return '<u>' + convertInline(match.slice(2, -2), currentNs, state) + '</u>';
    if (match.startsWith("''")) return '<code>' + match.slice(2, -2) + '</code>';
    return '<br />';
  });
}

/* ---------------------------------------------------------- block convert */

/** Split a DokuWiki table row into cells; `^` cells are header cells. */
function splitRow(line) {
  const s = line.trim();
  const cells = [];
  let cur = '';
  let depth = 0;
  let i = 0;
  while (i < s.length) {
    const ch = s[i];
    const pair = s.slice(i, i + 2);
    // `|` inside [[link|title]] or {{media|caption}} is not a cell delimiter.
    if (pair === '[[' || pair === '{{') {
      depth += 1;
      cur += pair;
      i += 2;
      continue;
    }
    if (depth > 0 && (pair === ']]' || pair === '}}')) {
      depth -= 1;
      cur += pair;
      i += 2;
      continue;
    }
    if ((ch === '^' || ch === '|') && depth === 0) {
      let run = 0;
      while (i < s.length && s[i] === ch) {
        run += 1;
        i += 1;
      }
      cells.push({ text: cur.trim(), header: ch === '^', span: run });
      cur = '';
    } else {
      cur += ch;
      i += 1;
    }
  }
  cells.shift(); // text before the leading delimiter (always empty)
  if (cur.trim()) cells.push({ text: cur.trim(), header: false, span: 1 });
  for (const c of cells) c.text = c.text.replace(/^::+/, '').replace(/::+$/, '').trim();
  return cells;
}

// Inside an HTML block (a table cell) kramdown does not evaluate Markdown, so
// anything convertInline produced as Markdown has to be turned into HTML here.
function mdToHtml(s) {
  return String(s)
    .replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, '<img src="$2" alt="$1" loading="lazy" />')
    .replace(/\[([^\]]*)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>');
}

function renderTable(block, currentNs, state) {
  const rows = block.map(splitRow);
  const width = Math.max(1, ...rows.map((r) => r.reduce((a, c) => a + c.span, 0)));
  const out = ['<table class="wiki-table">', '<tbody>'];
  for (const row of rows) {
    const used = row.reduce((a, c) => a + c.span, 0);
    const parts = ['<tr>'];
    for (const cell of row) {
      const tag = cell.header ? 'th' : 'td';
      const span = cell.span > 1 ? ` colspan="${cell.span}"` : '';
      parts.push(`<${tag}${span}>${mdToHtml(convertInline(cell.text, currentNs, state))}</${tag}>`);
    }
    if (used < width) parts.push(`<td colspan="${width - used}"></td>`);
    parts.push('</tr>');
    out.push(parts.join(''));
  }
  out.push('</tbody>', '</table>');
  return out;
}

function convertTables(lines, currentNs, tokens, state) {
  const out = [];
  let i = 0;
  const isRow = (l) => {
    const t = (l || '').trim();
    return t.length > 1 && /^[|^]/.test(t) && /[|^]$/.test(t);
  };
  while (i < lines.length) {
    if (!isRow(lines[i])) {
      out.push(lines[i]);
      i += 1;
      continue;
    }
    const block = [];
    while (i < lines.length && isRow(lines[i])) {
      block.push(lines[i]);
      i += 1;
    }
    const token = `\u0000TABLE${tokens.length}\u0000`;
    tokens.push({ token, body: renderTable(block, currentNs, state).join('\n') });
    out.push(token);
  }
  return out;
}

function convertPage(raw, page) {
  const ns = page.ns;
  const state = { n: 0 };

  // 1. protect fenced code / file blocks. An inline `<code>` (no line break in the
  //    body) becomes inline code so the surrounding sentence stays intact.
  let text = raw.replace(
    /<(code|file)([^>]*)>([^\n<]*?)<\/\1>/gi,
    (_m, tag, attrs, body) => '`' + body.trim() + '`'
  );
  const fences = [];
  text = text.replace(/<(code|file)([^>]*)>([\s\S]*?)<\/\1>/gi, (_m, tag, attrs, body) => {
    let lang = '';
    let caption = '';
    const am = attrs.trim().match(/^([^\s-][^\s]*)(?:\s+-\s+(.+))?$/);
    if (am) {
      lang = am[1].trim();
      caption = (am[2] || '').trim();
    }
    if (tag.toLowerCase() === 'file' && !lang) {
      const guess = caption.match(/\.([a-z0-9]+)$/i);
      if (guess) lang = guess[1].toLowerCase();
    }
    if (lang.toLowerCase() === 'c#') lang = 'csharp';
    const code = body.replace(/^\r?\n/, '').replace(/\s+$/, '');
    const token = `\u0000CODE${fences.length}\u0000`;
    fences.push({ token, lang, caption, code });
    return token;
  });

  // 2. inline nowiki
  text = text.replace(/<nowiki>([\s\S]*?)<\/nowiki>/gi, (_m, c) => '`' + c.trim() + '`');

  // 2b. DokuWiki "protected" text {{{ ... }}} is literal inline text
  text = text.replace(/\{\{\{([\s\S]*?)\}\}\}/g, (_m, c) => '`' + c.trim() + '`');

  // 2c. a [[link]] or {{media}} split over lines is joined back together
  text = text.replace(/(\[\[[^\]\n]*?)\r?\n([^\[\n]*?\]\])/g, (_m, a, b) => a + ' ' + b);

  // 2d. a stray line of only `=` characters is a heading with no text; drop it
  text = text.replace(/^[ \t]*={2,7}[ \t]*$/gm, '');

  // 3. raw html wrappers: keep the payload, drop the markers
  text = text.replace(/<\/?html>/gi, '');

  // 4. <center> blocks
  text = text
    .replace(/<center>/gi, '<div class="wiki-centre">')
    .replace(/<\/center>/gi, '</div>');

  let lines = text.split(/\r?\n/);

  // 5. blockquotes (`>`, `>>`, ...)
  lines = lines.map((l) => l.replace(/^(\s*)(>{1,6})\s?/g, (_m, sp, q) => sp + '> '.repeat(q.length)));

  // 6. headings: DokuWiki ====== is level 1 .. == is level 5 (authors sometimes
  //    write seven equals, and the trailing run need not match the leading one).
  //    The layout renders the page title as <h1>, so body headings start at <h2>.
  //    Headings are emitted bare: GitHub Pages parses with `kramdown-parser-gfm`,
  //    which ignores `{: .class}` inline attribute lists (the marker would show up
  //    as literal text and pollute the auto-generated anchor id). The library
  //    `.title` look for h2/h3 is applied by `assets/css/wiki.css` instead.
  lines = lines.map((l) =>
    l.replace(/^(={2,7})[ \t]*([^=].*?)[ \t]*={2,}[ \t]*$/, (_m, eq, body) => {
      const level = Math.max(2, Math.min(6, 8 - eq.length));
      return '#'.repeat(level) + ' ' + stripInlineNoise(body);
    })
  );

  // 6b. DokuWiki pages often repeat the page title as the first body heading; the
  //     layout already renders the title as <h1>, so drop the duplicate.
  {
    const firstHeading = lines.findIndex((l) => /^#{2,6} /.test(l));
    if (firstHeading !== -1) {
      const text = lines[firstHeading]
        .replace(/^#{2,6} /, '')
        .replace(/\s*\{:\s*[^}]*\}\s*$/, '')
        .trim();
      if (text.localeCompare(page.title, undefined, { sensitivity: 'accent' }) === 0) {
        lines.splice(firstHeading, 1);
      }
    }
  }

  // 7. horizontal rules — the library `.title` band is the divider style, so the
  // rule is a `<div class="title">` rather than a bare <hr>.
  lines = lines.map((l) => (/^\s*-{4,}\s*$/.test(l) ? '<div class="title wiki-divider" aria-hidden="true"></div>' : l));

  // 8. lists: DokuWiki indents 2 spaces per level; bullets and numbers alternate
  // In DokuWiki `*` is an unordered item and `-` an ordered one; two spaces per level.
  lines = lines.map((l) =>
    l.replace(/^(\s*)([-*])[ \t]+/, (_m, sp, marker) => {
      const width = sp.replace(/\t/g, '  ').length;
      // Authors occasionally add a stray leading space; floor() keeps those at level 0.
      const level = Math.max(0, Math.floor(width / 2) - 1);
      return '  '.repeat(level) + (marker === '*' ? '- ' : '1. ');
    })
  );

  // 9. tables (rendered as HTML so colspan and in-cell markup survive)
  const tableTokens = [];
  lines = convertTables(lines, ns, tableTokens, state);

  // 10. inline conversion (skip protected placeholders)
  lines = lines.map((l) =>
    l.includes('\u0000CODE') || l.includes('\u0000TABLE') ? l : convertInline(l, ns, state)
  );

  text = lines.join('\n');

  // 11. restore code fences and tables
  for (const f of fences) {
    const fence = '```' + (f.lang || '') + '\n' + f.code + '\n```';
    const cap = f.caption ? `\n_${f.caption}_\n` : '';
    text = text.replace(f.token, '\n' + fence + cap + '\n');
  }
  for (const t of tableTokens) text = text.replace(t.token, '\n' + t.body + '\n');

  // 12. tidy
  text = text.replace(/[ \t]+$/gm, '');
  text = text.replace(/\n{3,}/g, '\n\n');
  return text.trim() + '\n';
}

/* ------------------------------------------------------------- nav config */

const SECTION_ORDER = [
  'general',
  'general.apps',
  'general.organization_user_and_data_management',
  'general.organization_user_and_data_management.trust_management',
  'app_store_connect',
  'data_core',
  'datacore',
  'big_data_service',
  'alarm_analysis',
  'alarm_analysis.reports',
  'alarm_analysis.reports.disabledalarms',
  'alarm_analysis.reports.stalealarms',
  'alarm_analysis.assettimezone',
  'azimuth',
  'aperture',
  'facit',
  'gestalttrend',
  'gestaltpnid',
  'opmode',
  'seer',
  'soe',
  'taggle',
  'power_bi_connector',
  'excel',
  'hydraulic_usage',
  'compressor_consultant',
  'contoller_consultant',
  'surge',
  'valve_signature',
  'wax_intelligence',
  'well_intelligence',
  'iphist',
  'jupyter_hub',
  'dashboarding',
  'dev',
  'support',
  'playground',
];

const SECTION_TITLES = {
  general: 'General',
  'general.apps': 'Apps',
  'general.organization_user_and_data_management': 'Organization, User and Data Management',
  'general.organization_user_and_data_management.trust_management': 'Trust Management',
  app_store_connect: 'App Store Connect',
  data_core: 'Data Core',
  datacore: 'Data Core (legacy)',
  big_data_service: 'Big Data Service',
  alarm_analysis: 'Alarm Analysis',
  'alarm_analysis.reports': 'Alarm Analysis Reports',
  'alarm_analysis.reports.disabledalarms': 'Disabled Alarms Report',
  'alarm_analysis.reports.stalealarms': 'Stale Alarms Report',
  'alarm_analysis.assettimezone': 'Alarm Analysis Asset Time Zone',
  azimuth: 'Azimuth',
  aperture: 'Aperture',
  facit: 'Facit',
  gestalttrend: 'Gestalt Trend',
  gestaltpnid: 'Gestalt PnID',
  opmode: 'OpMode',
  seer: 'SEER',
  soe: 'Sequence of Events Explorer',
  taggle: 'Taggle',
  power_bi_connector: 'Power BI Connector',
  excel: 'Excel',
  hydraulic_usage: 'Hydraulic Usage',
  compressor_consultant: 'Compressor Consultant',
  'contoller_consultant': 'Controller Consultant',
  surge: 'Surge',
  valve_signature: 'Valve Signature',
  wax_intelligence: 'Wax Intelligence',
  well_intelligence: 'Well Intelligence',
  iphist: 'IP.Hist',
  jupyter_hub: 'Jupyter Hub',
  dashboarding: 'Dashboarding',
  dev: 'Developers',
  support: 'Support',
  playground: 'Playground',
};

const SKIP_PAGES = new Set(['wiki:dokuwiki', 'wiki:syntax', 'wiki:welcome']);

/* ------------------------------------------------------------------ main */

ensureDir(outWiki);
ensureDir(outData);

const converted = [];
for (const page of pages.values()) {
  if (SKIP_PAGES.has(page.id.toLowerCase())) continue;
  const raw = fixEncoding(fs.readFileSync(path.join(pagesDir, page.rel), 'utf8'));
  const body = convertPage(raw, page);
  const outPath = path.join(outWiki, ...page.ns.split('.').filter(Boolean), page.name + '.md');
  ensureDir(path.dirname(outPath));
  const fm = [
    '---',
    'layout: wiki',
    `title: ${JSON.stringify(page.title)}`,
    `permalink: ${page.href}`,
    '---',
    '',
  ].join('\n');
  fs.writeFileSync(outPath, fm + body, 'utf8');
  converted.push(page);
}

/* media — copy only the files actually referenced by the generated pages */

let mediaCount = 0;
let mediaSkipped = 0;
if (fs.existsSync(mediaDir)) {
  const referenced = new Set();
  const scanTargets = [
    path.join(repoRoot, 'index.md'),
    ...walk(outWiki).map((rel) => path.join(outWiki, rel)),
  ].filter((f) => f.endsWith('.md') && fs.existsSync(f));
  for (const f of scanTargets) {
    const text = fs.readFileSync(f, 'utf8');
    for (const m of text.matchAll(/\/assets\/media\/([^")\s?#]+)/g)) {
      let rel = m[1];
      try { rel = decodeURIComponent(rel); } catch { /* leave as-is */ }
      referenced.add(rel.replace(/^\/+/, '').toLowerCase());
    }
  }

  // `walk` yields POSIX-style paths relative to `mediaDir`; the source tree can
  // contain names that differ only by case, which collapse once lower-cased.
  const sources = walk(mediaDir)
    .map((rel) => ({ rel: rel.toLowerCase(), src: path.join(mediaDir, rel) }))
    .sort((a, b) => a.rel.localeCompare(b.rel));

  const seen = new Set();
  for (const { rel, src } of sources) {
    if (seen.has(rel)) continue;
    seen.add(rel);
    if (!referenced.has(rel)) { mediaSkipped++; continue; }
    const dest = path.join(outMedia, rel);
    ensureDir(path.dirname(dest));
    fs.copyFileSync(src, dest);
    mediaCount++;
  }
}

/* nav */

const byNs = new Map();
for (const p of converted) {
  if (!p.ns) continue;
  if (!byNs.has(p.ns)) byNs.set(p.ns, []);
  byNs.get(p.ns).push(p);
}
const nsKeys = [...byNs.keys()];
const ordered = [
  ...SECTION_ORDER.filter((s) => byNs.has(s)),
  ...nsKeys.filter((k) => !SECTION_ORDER.includes(k)).sort(),
];
const nav = [];
for (const ns of ordered) {
  const last = ns.split('.').pop();
  const items = byNs
    .get(ns)
    .sort((a, b) => {
      if (a.name === last) return -1;
      if (b.name === last) return 1;
      return a.title.localeCompare(b.title);
    })
    .map((p) => ({ title: p.title, href: p.href }));
  nav.push({ key: ns, title: SECTION_TITLES[ns] || titleCaseWords(ns), items });
}

const releaseNotes = converted
  .filter((p) => /^general:apps:[^:]+:releasenotes$/i.test(p.id))
  .map((p) => ({ title: p.title, href: p.href, app: titleCaseWords(p.id.split(':')[2]) }))
  .sort((a, b) => a.app.localeCompare(b.app));
if (releaseNotes.length) {
  nav.push({ key: 'release_notes', title: 'Release Notes', items: releaseNotes });
}

/* Nest the flat namespace list into the family tree the sidebar renders. The
 * grouping lives in tools/build-nav.js so the shipped _data/nav.json can be
 * regenerated from the flat file without re-running this converter. */
const flatHrefs = nav.reduce((n, s) => n + s.items.length, 0);
const tree = buildTree(nav);
const treeHrefs = (function count(nodes) {
  return nodes.reduce(
    (n, s) => n + (s.items ? s.items.length : 0) + (s.children ? count(s.children) : 0),
    0,
  );
})(tree);
if (treeHrefs !== flatHrefs) {
  throw new Error(`nav nesting lost links: ${flatHrefs} -> ${treeHrefs}`);
}
fs.writeFileSync(path.join(outData, 'nav.json'), JSON.stringify(tree, null, 2) + '\n', 'utf8');

/* start page */
const startPage = pages.get('start');
if (startPage) {
  const raw = fixEncoding(fs.readFileSync(path.join(pagesDir, startPage.rel), 'utf8'));
  const body = convertPage(raw, { ns: '' });
  const fm = ['---', 'layout: home', 'title: "Industrial App Store Wiki"', 'permalink: /index.html', '---', ''].join('\n');
  fs.writeFileSync(path.join(repoRoot, 'index.md'), fm + body, 'utf8');
}

console.log(`Converted ${converted.length} pages, copied ${mediaCount} media files, ${nav.length} nav sections.`);
