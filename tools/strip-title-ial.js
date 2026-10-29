#!/usr/bin/env node
// One-off maintenance script: remove the `{: .title}` inline attribute lists that
// the converter used to emit on headings. GitHub Pages parses markdown with
// `kramdown-parser-gfm`, which does not apply block-level inline attribute lists,
// so the marker rendered as literal text and polluted the auto-generated anchor
// id. `assets/css/wiki.css` now styles h2/h3 by element instead.
//
// Usage: node tools/strip-title-ial.js [--dry-run]

const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const wikiDir = path.join(root, 'wiki');
const dryRun = process.argv.includes('--dry-run');

// Only strip the marker when it trails a markdown heading line, and never inside
// a fenced code block.
const HEADING = /^(#{1,6})[ \t]+(.+?)[ \t]*$/;
const MARKER = /\s*\{:\s*\.title\s*\}\s*$/;
const FENCE = /^\s*(```|~~~)/;

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else if (entry.name.endsWith('.md')) out.push(p);
  }
  return out;
}

let filesChanged = 0;
let markersRemoved = 0;

for (const file of walk(wikiDir).sort()) {
  const original = fs.readFileSync(file, 'utf8');
  const eol = original.includes('\r\n') ? '\r\n' : '\n';
  const lines = original.split(/\r?\n/);
  let inFence = false;
  let changed = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (FENCE.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence || !HEADING.test(line)) continue;
    if (!MARKER.test(line)) continue;
    lines[i] = line.replace(MARKER, '');
    changed++;
  }

  if (!changed) continue;
  filesChanged++;
  markersRemoved += changed;
  process.stdout.write(`${path.relative(root, file)}: ${changed}\n`);
  if (!dryRun) fs.writeFileSync(file, lines.join(eol), 'utf8');
}

process.stdout.write(
  `\n${dryRun ? 'Would remove' : 'Removed'} ${markersRemoved} marker(s) in ${filesChanged} file(s).\n`
);
