#!/usr/bin/env node
/* Builds the client-side search index for the wiki.
 *
 *   node tools/build-search-index.js [repoRoot]
 *
 * GitHub Pages runs Jekyll in `build_type: legacy`, so there is no plugin step
 * that could index the pages at build time. Instead this script walks the
 * generated markdown and writes a static JSON file that assets/js/search.js
 * fetches once and filters in the browser.
 *
 * The index deliberately holds titles, headings and a short excerpt rather than
 * full page text: the corpus is ~670 KB of markdown, which would be a heavy
 * download for a sidebar search box.
 */

const fs = require('fs');
const path = require('path');

const repoRoot = process.argv[2] || path.resolve(__dirname, '..');
const wikiDir = path.join(repoRoot, 'wiki');
const outPath = path.join(repoRoot, 'assets', 'js', 'search-index.json');
const EXCERPT_LENGTH = 160;

function walk(dir, base = dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, base, out);
    else if (entry.name.endsWith('.md')) out.push(full);
  }
  return out;
}

function readFrontMatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return [{}, text];
  const fm = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!kv) continue;
    let v = kv[2].trim();
    if (/^".*"$/.test(v) || /^'.*'$/.test(v)) v = v.slice(1, -1);
    fm[kv[1]] = v;
  }
  return [fm, text.slice(m[0].length)];
}

/** kramdown's `auto_ids` slug, used to link straight at a heading. */
function slugify(s) {
  return String(s)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/** Strip the wiki markup that would otherwise show up in results. */
function plain(text) {
  return String(text)
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[\[([^\]|]*\|)?([^\]]+)\]\]/g, '$2')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_`>]+/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function buildEntry(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const [fm, body] = readFrontMatter(raw);
  if (!fm.permalink) return null;

  const headings = [];
  for (const m of body.matchAll(/^(#{2,3})\s+(.+?)\s*$/gm)) {
    const text = plain(m[2]);
    if (!text) continue;
    headings.push({ t: text, a: slugify(m[2]) });
  }

  // First block of real prose, skipping headings, tables, lists and html blocks.
  let excerpt = '';
  for (const block of body.split(/\r?\n\s*\r?\n/)) {
    const line = block.trim();
    if (!line) continue;
    if (/^(#{1,6}\s|\||<|\{|!|\*|-|\d+\.|===)/.test(line)) continue;
    excerpt = plain(line);
    if (excerpt) break;
  }
  if (excerpt.length > EXCERPT_LENGTH) excerpt = excerpt.slice(0, EXCERPT_LENGTH).trimEnd() + '…';

  return {
    u: fm.permalink,
    t: plain(fm.title || ''),
    h: headings,
    e: excerpt,
  };
}

function main() {
  const files = walk(wikiDir).sort();
  const entries = files.map(buildEntry).filter(Boolean);
  entries.sort((a, b) => a.u.localeCompare(b.u));
  const json = JSON.stringify(entries) + '\n';
  fs.writeFileSync(outPath, json);
  console.log(`pages:  ${entries.length}`);
  console.log(`headings: ${entries.reduce((n, e) => n + e.h.length, 0)}`);
  console.log(`size:   ${(json.length / 1024).toFixed(1)} KB -> ${path.relative(repoRoot, outPath)}`);
}

main();
