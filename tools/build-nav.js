#!/usr/bin/env node
/**
 * Re-shape _data/nav.json into a nested tree.
 *
 * The DokuWiki export is a flat namespace dump, so the generated nav was a flat
 * list of 57 sections - 41 of them holding a single page. This tool groups those
 * sections into a handful of top-level families and nests dotted namespaces
 * under their parent namespace, without moving a single file: every href in the
 * output is byte-identical to one in the input.
 *
 * Usage:
 *   node tools/build-nav.js --apply          # place hand-authored pages declared
 *                                           # with `nav:` in their front matter
 *                                           # into _data/nav.json (in place)
 *   node tools/build-nav.js --list-sections  # valid section keys for `nav:`
 *   node tools/build-nav.js --check          # --apply without writing
 *   node tools/build-nav.js                  # rebuild from a FLAT nav.json
 *
 * `--apply` is the mode to run after re-converting the DokuWiki: the converter
 * regenerates _data/nav.json from the DokuWiki alone, which drops every page that
 * only lives in this repository. Those pages declare their own place in the tree
 * in their front matter instead, so their position survives every re-sync:
 *
 *   nav: excel                      # key of the section that owns this page
 *   nav-title: "Short label"        # optional, defaults to `title`
 *   nav: none                       # keep the page out of the sidebar
 *
 * tools/convert-dokuwiki.js requires buildTree() and applyDeclaredNav() from
 * here so both paths produce the same shape.
 */

const fs = require('fs');
const path = require('path');

const REPO = path.join(__dirname, '..');

/**
 * Top-level families, in display order. `members` lists the source section keys
 * that belong to the family; a member whose key is a dotted extension of another
 * member's key is nested under it (see nestByKey). `releaseNotes` maps an owner
 * section key to the namespaces holding that app's release notes.
 */
const FAMILIES = [
  {
    key: 'general',
    title: 'General',
    members: [
      'general',
      'general.organization_user_and_data_management',
      'general.organization_user_and_data_management.trust_management',
    ],
  },
  {
    key: 'app_store_connect',
    title: 'App Store Connect',
    members: ['app_store_connect'],
    releaseNotes: {
      app_store_connect: [
        'general.apps.appstore',
        'general.apps.appstoreconnect',
        'general.apps.dataapi',
      ],
    },
  },
  {
    key: 'data',
    title: 'Data',
    members: [
      'data_core',
      'datacore',
      'big_data_service',
      'alarm_analysis',
      'alarm_analysis.reports',
      'alarm_analysis.reports.disabledalarms',
      'alarm_analysis.reports.stalealarms',
      'alarm_analysis.assettimezone',
    ],
    releaseNotes: {
      alarm_analysis: ['general.apps.alarmanalysis'],
    },
  },
  {
    key: 'apps',
    title: 'Apps',
    members: [
      'aperture',
      'azimuth',
      'compressor_consultant',
      'contoller_consultant',
      'dashboarding',
      'excel',
      'facit',
      'gestaltpnid',
      'gestaltpnid.gestalt_pnid',
      'gestaltpnid.gestalt_pnid.event_manager_reference',
      'gestalttrend',
      'hydraulic_usage',
      'iphist',
      'jupyter_hub',
      'opmode',
      'power_bi_connector',
      'seer',
      'soe',
      'surge',
      'taggle',
      'valve_signature',
      'wax_intelligence',
      'well_intelligence',
    ],
    releaseNotes: {
      aperture: ['general.apps.aperture'],
      azimuth: ['general.apps.azimuth'],
      compressor_consultant: ['general.apps.compressorconsultant'],
      contoller_consultant: ['general.apps.controllerconsultant'],
      facit: ['general.apps.facit'],
      gestaltpnid: ['general.apps.gestaltpnid'],
      gestalttrend: ['general.apps.gestalttrend'],
      hydraulic_usage: ['general.apps.hydraulicusage'],
      opmode: ['general.apps.opmode'],
      power_bi_connector: ['general.apps.powerbi', 'general.apps.powerautomate'],
      soe: ['general.apps.soex'],
      valve_signature: ['general.apps.valvesignature'],
      wax_intelligence: ['general.apps.wax_intelligence'],
      well_intelligence: ['general.apps.well_intelligence'],
    },
  },
  { key: 'developers', title: 'Developers', members: ['dev'] },
  { key: 'playground', title: 'Playground', members: ['playground'] },
  { key: 'support', title: 'Support', members: ['support'] },
];

/**
 * Titles the converter derived mechanically from the namespace and that read
 * badly in the sidebar.
 */
const TITLE_OVERRIDES = {
  'gestaltpnid.gestalt_pnid': 'Gestalt PnID Reference',
  'gestaltpnid.gestalt_pnid.event_manager_reference': 'Event Manager Reference',
};

/**
 * Pages that live outside every namespace and still need a home in the tree,
 * keyed by the section that should own them.
 */
const EXTRA_ITEMS = {
  general: [{ title: 'Welcome', href: '/start.html' }],
  excel: [{ title: 'Excel Query Add-In', href: '/excel.html' }],
};

/** Attach declared extra pages to the section that should own them. */
function applyExtras(section) {
  const extra = EXTRA_ITEMS[section.key];
  if (!extra) return;
  const have = new Set(section.items.map((i) => i.href));
  extra.forEach((item) => {
    if (!have.has(item.href)) section.items.push({ ...item });
  });
  section.items.sort((a, b) => a.title.localeCompare(b.title));
}

/* ------------------------------------------------- front-matter nav declarations
 *
 * A page that only lives in this repository (it has no DokuWiki counterpart) has
 * no namespace to inherit a position from, and _data/nav.json is regenerated
 * from the DokuWiki alone. So such a page declares its own place in the tree:
 *
 *   nav: excel                  # key of the section that owns it
 *   nav-title: "Short label"    # optional sidebar label, defaults to `title`
 *   nav: none                   # deliberately absent from the sidebar
 *
 * Keeping the position next to the content is what makes it survive a re-sync,
 * and it means an author only has to know one section key, not the whole tree.
 */

/** Minimal front-matter reader: the pages only use flat `key: "value"` lines. */
function readFrontMatter(text) {
  // A leading BOM (editors on Windows add one) would stop the `---` matching.
  const m = text.replace(/^\uFEFF/, '').match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return null;
  const fm = {};
  for (const line of m[1].split(/\r?\n/)) {
    if (!line.trim() || /^\s/.test(line)) continue;
    const kv = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!kv) continue;
    fm[kv[1]] = kv[2].trim().replace(/^["']|["']$/g, '');
  }
  return fm;
}

function walkMarkdown(dir, base = dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkMarkdown(full, base, out);
    else if (entry.name.endsWith('.md')) out.push(path.relative(base, full).replace(/\\/g, '/'));
  }
  return out;
}

/**
 * Read every `nav:` declaration under wiki/.
 * @returns {{declared: Array<{key: string, item: object, rel: string}>,
 *            hidden: Array<{href: string, rel: string}>,
 *            errors: string[]}}
 */
function collectDeclaredNav(repoRoot = REPO) {
  const wikiDir = path.join(repoRoot, 'wiki');
  const declared = [];
  const hidden = [];
  const errors = [];

  for (const rel of walkMarkdown(wikiDir)) {
    const text = fs.readFileSync(path.join(wikiDir, rel), 'utf8');
    const fm = readFrontMatter(text);
    if (!fm) continue;
    if (!fm.nav) continue;

    const key = fm.nav.trim();
    if (key === 'none') {
      if (fm.permalink) hidden.push({ href: fm.permalink, rel });
      continue;
    }
    if (!fm.permalink) {
      errors.push(`${rel}: declares 'nav: ${key}' but has no permalink`);
      continue;
    }
    const title = (fm['nav-title'] || fm.title || '').trim();
    if (!title) {
      errors.push(`${rel}: declares 'nav: ${key}' but has neither nav-title nor title`);
      continue;
    }
    declared.push({ key, item: { title, href: fm.permalink }, rel });
  }

  return { declared, hidden, errors };
}

/** Depth-first walk over every node of a nested tree. */
function eachNode(nodes, fn, depth = 0) {
  for (const node of nodes) {
    fn(node, depth);
    if (node.children) eachNode(node.children, fn, depth + 1);
  }
}

/** Every section key present in a nested tree, in display order. */
function listSectionKeys(nodes) {
  const out = [];
  eachNode(nodes, (n, depth) => out.push({ key: n.key, title: n.title, depth }));
  return out;
}

/**
 * Apply the front-matter declarations to a nested tree: insert each declared page
 * into its section, remove the pages declared `nav: none`, then recompute the
 * `depth`/`hrefs` bookkeeping the sidebar template needs.
 *
 * Returns the errors for unknown section keys; the tree is still returned so the
 * caller can report every problem at once instead of one per run.
 */
function applyDeclaredNav(tree, repoRoot = REPO) {
  const { declared, hidden, errors } = collectDeclaredNav(repoRoot);
  if (!declared.length && !hidden.length) return errors;

  const byKey = new Map();
  eachNode(tree, (n) => byKey.set(n.key, n));

  const unknown = new Set();
  for (const { key, item, rel } of declared) {
    const section = byKey.get(key);
    if (!section) {
      unknown.add(key);
      errors.push(`${rel}: 'nav: ${key}' is not a section key (run: node tools/build-nav.js --list-sections)`);
      continue;
    }
    section.items = section.items || [];
    const existing = section.items.find((i) => i.href === item.href);
    if (existing) existing.title = item.title;
    else section.items.push({ ...item });
    section.items.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (hidden.length) {
    const drop = new Set(hidden.map((h) => h.href));
    eachNode(tree, (n) => {
      if (!n.items) return;
      n.items = n.items.filter((i) => !drop.has(i.href));
    });
  }

  // A section emptied by `nav: none` would render an empty group button.
  const prune = (nodes) =>
    nodes.filter((n) => {
      if (n.children) {
        n.children = prune(n.children);
        if (!n.children.length) delete n.children;
      }
      return (n.items && n.items.length) || (n.children && n.children.length);
    });
  const kept = prune(tree);
  kept.length && tree.splice(0, tree.length, ...kept);

  // The template cannot look ahead, so depth and descendant hrefs are data.
  indexHrefs(tree, 0);

  if (unknown.size) {
    errors.push(`unknown section keys: ${[...unknown].sort().join(', ')}`);
  }
  return errors;
}


/** Nest sections whose key is a dotted extension of another section's key. */
function nestByKey(list) {
  const byKey = new Map();
  list.forEach((s) => {
    // keep children attached earlier (e.g. release notes), only seed missing ones
    s.children = s.children || [];
    byKey.set(s.key, s);
  });
  const roots = [];
  // longest prefix wins, so a.b.c attaches to a.b rather than a
  const sorted = [...list].sort((a, b) => b.key.length - a.key.length);
  sorted.forEach((s) => {
    const parts = s.key.split('.');
    let parent = null;
    for (let i = parts.length - 1; i > 0; i -= 1) {
      const candidate = byKey.get(parts.slice(0, i).join('.'));
      if (candidate && candidate !== s) {
        parent = candidate;
        break;
      }
    }
    if (parent) parent.children.unshift(s);
    else roots.push(s);
  });
  return roots;
}

function sortTree(nodes) {
  nodes.sort((a, b) => a.title.localeCompare(b.title));
  nodes.forEach((n) => {
    if (n.children && n.children.length) sortTree(n.children);
  });
}

function clean(nodes) {
  nodes.forEach((n) => {
    if (n.children && n.children.length) clean(n.children);
    else delete n.children;
  });
  return nodes;
}

/**
 * Give every node its own depth plus the list of hrefs reachable below it. The
 * sidebar template is recursive and Liquid cannot look ahead (or keep local
 * state across a recursive include), so the template needs both precomputed.
 */
function indexHrefs(nodes, depth) {
  const d = depth || 0;
  nodes.forEach((n) => {
    n.depth = d;
    const hrefs = (n.items || []).map((i) => i.href);
    if (n.children) {
      indexHrefs(n.children, d + 1);
      n.children.forEach((c) => hrefs.push.apply(hrefs, c.hrefs));
    }
    n.hrefs = hrefs;
  });
  return nodes;
}

/**
 * A family that ended up wrapping exactly one section (e.g. Support > Support)
 * is one level of clicking for nothing, so merge the wrapper away.
 */
function collapseSingleChildFamilies(families) {
  return families.map((family) => {
    const only = family.children && family.children.length === 1 ? family.children[0] : null;
    if (!only) return family;
    const merged = { key: only.key, title: family.title, items: only.items };
    if (only.children) merged.children = only.children;
    return merged;
  });
}

/**
 * Turn the flat section list produced by the converter into the nested tree.
 * @param {Array<{key: string, title: string, items: Array<object>}>} flat
 * @returns {Array<object>} the top-level families
 */
function buildTree(flat) {
  const byKey = new Map(flat.map((s) => [s.key, { ...s, items: s.items.map((i) => ({ ...i })) }]));
  const consumed = new Set();
  const take = (key) => {
    const section = byKey.get(key);
    if (!section || consumed.has(key)) return null;
    consumed.add(key);
    if (TITLE_OVERRIDES[key]) section.title = TITLE_OVERRIDES[key];
    applyExtras(section);
    return section;
  };

  const families = FAMILIES.map((family) => {
    const members = family.members.map(take).filter(Boolean);
    const releaseNotes = family.releaseNotes || {};

    // hang each app's release-notes namespaces under the app itself
    Object.entries(releaseNotes).forEach(([ownerKey, notesKeys]) => {
      const owner = members.find((m) => m.key === ownerKey);
      const notes = notesKeys.map(take).filter(Boolean);
      if (!notes.length) return;
      if (!owner) {
        members.push(...notes);
        return;
      }
      notes.forEach((notesSection) => {
        notesSection.title =
          notes.length === 1 ? 'Release Notes' : releaseNotesTitle(notesSection) || 'Release Notes';
        notesSection.key = ownerKey + '.release_notes.' + notesSection.key.split('.').pop();
        (owner.children = owner.children || []).push(notesSection);
      });
    });

    sortTree(members);
    const children = nestByKey(members);
    sortTree(children);
    return { key: family.key, title: family.title, children: clean(children) };
  });

  return indexHrefs(collapseSingleChildFamilies(families).map((family) => clean([family])[0]));
}

/** Full page title of a single-page release-notes namespace. */
function releaseNotesTitle(section) {
  const first = section && section.items && section.items[0];
  return first ? first.title : section && section.title;
}

function collectHrefs(nodes, out = []) {
  nodes.forEach((n) => {
    (n.items || []).forEach((i) => out.push(i.href));
    if (n.children) collectHrefs(n.children, out);
  });
  return out;
}

function countSections(nodes) {
  return nodes.reduce((acc, n) => acc + 1 + (n.children ? countSections(n.children) : 0), 0);
}

function depthOf(nodes, depth) {
  const d = depth || 1;
  return nodes.reduce(
    (max, n) =>
      Math.max(max, n.children && n.children.length ? depthOf(n.children, d + 1) : d),
    d,
  );
}

/** Re-read the nested tree and re-apply the front-matter declarations. */
function runApply(check) {
  const navPath = path.join(REPO, '_data', 'nav.json');
  const tree = JSON.parse(fs.readFileSync(navPath, 'utf8'));
  if (!tree.some((s) => s.children || s.depth !== undefined)) {
    console.error('nav.json looks flat; run the converter first, or use no flags to nest it.');
    process.exit(1);
  }

  const before = collectHrefs(tree).length;
  const errors = applyDeclaredNav(tree);
  const after = collectHrefs(tree).length;

  console.log('sections: ' + countSections(tree) + ' (depth ' + depthOf(tree, 1) + ')');
  console.log('links:    ' + before + ' -> ' + after);
  if (errors.length) {
    console.log(`\n${errors.length} PROBLEM(S):`);
    for (const e of errors) console.log('  - ' + e);
    process.exit(1);
  }

  const json = JSON.stringify(tree, null, 2) + '\n';
  if (check) {
    const same = json === fs.readFileSync(navPath, 'utf8');
    console.log(same ? '--check: nav.json is up to date' : '--check: nav.json would change');
    return;
  }
  fs.writeFileSync(navPath, json);
  console.log('wrote ' + path.relative(REPO, navPath));
}

/** Print the section keys a page may point its `nav:` at. */
function runListSections() {
  const navPath = path.join(REPO, '_data', 'nav.json');
  const tree = JSON.parse(fs.readFileSync(navPath, 'utf8'));
  const rows = listSectionKeys(tree);
  console.log('section keys for the `nav:` front matter (use `nav: none` to hide a page):\n');
  const width = Math.min(70, Math.max(...rows.map((r) => r.key.length)) + 2);
  for (const r of rows) {
    console.log('  ' + '  '.repeat(r.depth) + r.key.padEnd(width) + r.title);
  }
  console.log(`\n${rows.length} sections.`);
}

/**
 * Rebuild the nested tree from a FLAT nav.json. This is the historical mode, used
 * by nothing except a manual regrouping of the DokuWiki namespaces; the converter
 * calls buildTree() directly instead.
 */
function runNest(check) {
  const navPath = path.join(REPO, '_data', 'nav.json');
  const flat = JSON.parse(fs.readFileSync(navPath, 'utf8'));
  if (flat.some((s) => s.children)) {
    console.error('nav.json already looks nested; restore the flat version first.');
    process.exit(1);
  }

  const tree = buildTree(flat);
  const before = collectHrefs(flat).sort();
  const after = collectHrefs(tree).sort();
  const expected = Object.values(EXTRA_ITEMS)
    .reduce((acc, list) => acc.concat(list), [])
    .map((i) => i.href);
  const missing = before.filter((h) => !after.includes(h));
  const added = after.filter((h) => !before.includes(h) && !expected.includes(h));

  console.log('sections: ' + flat.length + ' -> ' + countSections(tree) + ' (depth ' + depthOf(tree, 1) + ')');
  console.log('links:    ' + before.length + ' -> ' + after.length);

  if (missing.length) console.log('DROPPED:', missing);
  if (added.length) console.log('UNEXPECTED ADDED:', added);
  if (missing.length || added.length) {
    console.error('href set changed - aborting');
    process.exit(1);
  }

  if (check) {
    console.log('--check: no files written');
    return;
  }
  fs.writeFileSync(navPath, JSON.stringify(tree, null, 2) + '\n');
  console.log('wrote ' + path.relative(REPO, navPath));
}

function main() {
  const argv = process.argv.slice(2);
  const check = argv.includes('--check');
  if (argv.includes('--list-sections')) return runListSections();
  if (argv.includes('--apply')) return runApply(check);
  if (argv.length && !check) {
    console.error('Unknown argument: ' + argv[0]);
    console.error('Usage: node tools/build-nav.js [--apply|--check|--list-sections]');
    process.exit(1);
  }
  return runNest(check);
}

if (require.main === module) main();

module.exports = {
  buildTree,
  FAMILIES,
  EXTRA_ITEMS,
  applyDeclaredNav,
  collectDeclaredNav,
  listSectionKeys,
  readFrontMatter,
};

