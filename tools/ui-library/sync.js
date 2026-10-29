#!/usr/bin/env node
/**
 * Copy the UI Library stylesheet and icon fonts out of the npm package and into
 * assets/ui-library/, so GitHub Pages (which builds with plain Jekyll and cannot
 * run npm) serves the real library CSS.
 *
 * Usage, from the repository root:
 *   node tools/ui-library/sync.js                 # from node_modules
 *   node tools/ui-library/sync.js --check         # verify without writing
 *   node tools/ui-library/sync.js --from <path>   # from a UI Library clone
 *
 * Before the first run, npm needs a GitHub token that can read the private
 * package. Create a classic personal access token with the `read:packages`
 * scope and put it in tools/ui-library/.npmrc (that file is git-ignored):
 *
 *   @intelligentplant:registry=https://npm.pkg.github.com/
 *   //npm.pkg.github.com/:_authToken=<YOUR_TOKEN>
 *
 *   cd tools/ui-library && npm install
 *
 * The copied files are committed on purpose: they are the build input for
 * GitHub Pages. Anything the wiki adds on top of the library goes in
 * assets/css/ui-overrides.css, never in the copied stylesheet.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const REPO_ROOT = path.resolve(__dirname, '..', '..');
const DEST = path.join(REPO_ROOT, 'assets', 'ui-library');
const PKG_NAME = '@intelligentplant/react-ui-library';

/** Files taken from the package's dist/ folder. index.js is the React bundle,
 *  which a static wiki does not need, and the .map files point at sources that
 *  are not published, so neither is copied. */
const FILES = [
  'index.css',
  '39204061014fb552f7ab.eot',
  '34b3c9360fd006ab187b.ttf',
  'be08856ed04f2254a741.woff',
  'c9010002e65769fbe05f.svg',
];

function parseArgs(argv) {
  const args = { check: false, from: null };
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--check') args.check = true;
    else if (argv[i] === '--from') {
      i += 1;
      args.from = argv[i];
      if (!args.from) fail('--from needs a path to the UI Library repository.');
    } else fail(`Unknown argument: ${argv[i]}`);
  }
  return args;
}

function fail(message) {
  console.error(`\n${message}\n`);
  process.exit(1);
}

function readPackageJson(file) {
  // A leading BOM would make JSON.parse throw.
  return JSON.parse(fs.readFileSync(file, 'utf8').replace(/^\uFEFF/, ''));
}

/** Locate the package. A clone passed with --from is accepted as well, because
 *  the package lives on GitHub Packages and needs a token that not everyone
 *  working on the wiki has. */
function resolveSource(args) {
  if (args.from) {
    const root = path.resolve(args.from);
    const dist = path.join(root, 'dist');
    if (!fs.existsSync(path.join(dist, 'index.css'))) {
      fail(`${dist} has no index.css. Run \`npm run build\` in ${root} first.`);
    }
    const pkg = readPackageJson(path.join(root, 'package.json'));
    return { dir: dist, version: pkg.version, label: `clone ${root}` };
  }

  const pkgDir = path.join(__dirname, 'node_modules', ...PKG_NAME.split('/'));
  const pkgJson = path.join(pkgDir, 'package.json');
  if (!fs.existsSync(pkgJson)) {
    fail(
      `${PKG_NAME} is not installed.\n` +
      '  cd tools/ui-library\n' +
      '  npm install\n' +
      'needs a .npmrc with a token that has the read:packages scope, see the header of this file.\n' +
      'Without a token you can sync from a clone of the library instead:\n' +
      '  node tools/ui-library/sync.js --from ../IntelligentPlant-UI-Library'
    );
  }
  const pkg = readPackageJson(pkgJson);
  const dist = path.join(pkgDir, 'dist');
  if (!fs.existsSync(path.join(dist, 'index.css'))) {
    fail(`${dist} has no index.css. Remove tools/ui-library/node_modules and run npm install again.`);
  }
  return { dir: dist, version: pkg.version, label: `${PKG_NAME}@${pkg.version}` };
}

function sha256(buffer) {
  return crypto.createHash('sha256').update(buffer).digest('hex').slice(0, 16);
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const source = resolveSource(args);

  const plan = FILES.map((name) => {
    const from = path.join(source.dir, name);
    if (!fs.existsSync(from)) fail(`${source.label} does not contain dist/${name}.`);
    let contents = fs.readFileSync(from);
    // The package points at index.css.map, which is not copied, so the comment
    // would only produce a 404 in the browser console.
    if (name === 'index.css') {
      contents = Buffer.from(
        contents.toString('utf8').replace(/\n?\/\*# sourceMappingURL=.*\*\/\s*$/, '\n'),
        'utf8'
      );
    }
    const to = path.join(DEST, name);
    const current = fs.existsSync(to) ? fs.readFileSync(to) : null;
    return { name, contents, to, changed: !current || !current.equals(contents) };
  });

  const changed = plan.filter((f) => f.changed);
  if (args.check) {
    if (changed.length) {
      console.error(`Out of date with ${source.label}: ${changed.map((f) => f.name).join(', ')}`);
      console.error('Run: node tools/ui-library/sync.js');
      process.exit(1);
    }
    console.log(`assets/ui-library matches ${source.label}.`);
    return;
  }

  fs.mkdirSync(DEST, { recursive: true });
  for (const file of changed) fs.writeFileSync(file.to, file.contents);

  // ip-logo.png is not part of the package; keep whatever is already committed.
  const manifest = [
    '# Generated by tools/ui-library/sync.js - do not edit by hand.',
    '',
    `package: ${PKG_NAME}`,
    `version: ${source.version}`,
    `synced: ${new Date().toISOString().slice(0, 10)}`,
    '',
    'sha256/16  file',
    ...plan.map((f) => `${sha256(f.contents)}  ${f.name}`),
    '',
  ].join('\n');
  fs.writeFileSync(path.join(DEST, 'SOURCE'), manifest);

  console.log(`Synced ${source.label} into assets/ui-library (${changed.length} of ${plan.length} files updated).`);
  console.log('Wiki-specific additions live in assets/css/ui-overrides.css.');
}

main();
