# Industrial App Store Wiki

Source of [https://intelligentplant.github.io/](https://intelligentplant.github.io/), the
knowledge base for the Industrial App Store.

The site is a Jekyll static site published with GitHub Pages. Content is plain Markdown under
`wiki/`, and the styling follows
[`IntelligentPlant-UI-Library`](https://github.com/intelligentplant/IntelligentPlant-UI-Library/tree/main/Guides).

## Layout

```
_config.yml                Jekyll configuration (kramdown/GFM, no plugins)
index.md                   Wiki landing page
_layouts/default.html      App shell: toolbar, nav rail, page body, theme menu
_layouts/wiki.html         Per-page layout (title, breadcrumbs, table of contents)
_includes/nav.html         Left navigation built from _data/nav.json
_includes/nav-tree.html     Recursive renderer for one nav node (calls itself for children)
_includes/search.html       Sidebar search box
_data/nav.json              Navigation tree (generated)
wiki/                      Content pages (converted + hand-authored)
assets/css/wiki.css        Wiki styling — UI Library tokens only
assets/js/theme.js         Theme switcher (System / Light / Dark / Blue)
assets/js/wiki.js          Nav toggle, table of contents, link handling
assets/js/search.js        Client-side search over the static index
assets/js/search-index.json Static search index (generated)
assets/ui-library/         Vendored UI Library stylesheet + icon font
assets/media/              Images referenced by the pages
tools/build-nav.js         Builds the nested nav tree; --apply reads each page's
                           `nav:` front matter into _data/nav.json
tools/build-search-index.js Builds assets/js/search-index.json from wiki/
tools/verify.js            Structural validator for the generated output
tools/preview/             Local preview (Node stand-in for `jekyll serve`)
tools/convert-dokuwiki.js  Legacy DokuWiki -> Markdown converter (not in use)
```

`_data/nav.json` and `assets/js/search-index.json` are **generated** — regenerate them with the
commands below instead of editing them by hand. Everything in `wiki/` is ordinary Markdown you can
edit directly; see [Adding or updating a page](#adding-or-updating-a-page).

## Adding or updating a page

Every page is a Markdown file under `wiki/` with front matter. Say where it belongs in the sidebar
with `nav:`:

```markdown
---
layout: wiki
title: "Troubleshooting Excel"
nav: excel
nav-title: "Troubleshooting"
permalink: /excel/troubleshooting.html
---

Open with `##` headings — they build the "On this page" contents. Do not add your own
`# heading`; the layout prints the `title` for you.

## Common errors

...
```

- `nav:` is the **section key** the page should appear under. Run `node tools/build-nav.js --list-sections`
  to see the current keys and their hierarchy. A key that does not exist is an error.
- `nav-title:` is the label shown in the sidebar; omit it to use `title`.
- `nav: none` keeps the page out of the sidebar on purpose (it stays reachable by link and search).
- `permalink` starts with `/` and must be unique. Internal links must be written with the site
  baseurl, e.g. `[Excel](/wiki/excel.html)`.

After editing, regenerate the derived files and check them:

```powershell
node tools/build-nav.js --apply   # reads every page's nav: and rewrites _data/nav.json
node tools/build-search-index.js  # so the new page is searchable
node tools/verify.js .            # must print OK before you commit
```

You need Node.js only; the scripts use the standard library.

`verify.js` reports the page count, duplicate permalinks, broken internal links, and media files
that are referenced but missing (or present but unused). It also fails if a page is not reachable
from the sidebar, if `nav:` names an unknown section, or if `nav.json` is out of date with the
front matter — so a forgotten `--apply` cannot slip through. It must print
`OK — no structural problems found.` before you commit.

### Navigation tree

`tools/build-nav.js` writes the nested `_data/nav.json` that `_includes/nav-tree.html` renders.
Pages declare their own position with `nav:` front matter, so the tree is rebuilt from the pages
themselves and there is nothing to keep in sync by hand. Every node carries its own `depth` and the
`hrefs` of all its descendants, because the recursive include cannot compute either (Liquid
`assign` inside a recursive include leaks between levels).

### Search

`tools/build-search-index.js` writes `assets/js/search-index.json` — page title, headings and a
short excerpt for every page (~58 KB). `assets/js/search.js` fetches it on the first keystroke and
filters it in the browser, so GitHub Pages stays a plain static host with no build step or plugin.

## Previewing locally

### Option A — Node only (no Ruby required)

`tools/preview/` renders the site the same way Jekyll roughly does (front matter + kramdown-style
Markdown + Liquid layouts) and serves it on <http://localhost:8099>. It is a stand-in for
`jekyll serve`, not a replacement — use it to check layout, styling and navigation quickly.

```powershell
cd tools/preview
npm install
npm run preview        # renders ./_site then serves http://localhost:8099
```

Or run the two steps separately (useful while editing content — re-render, then refresh):

```powershell
cd tools/preview
npm run render         # renders every page in wiki/ + index.md into tools/preview/_site
npm run serve          # serves it on http://localhost:8099
```

`render.js` takes the repo root as an optional argument (`node render.js ../..`) and exits non-zero
with a list of pages that failed to render. Its output and `node_modules/` are git-ignored.

### Option B — real Jekyll

GitHub Pages builds the site with Jekyll, so for a final check use Ruby and Jekyll:

```powershell
bundle install
bundle exec jekyll serve
```

## Styling

`assets/ui-library/index.css` is a byte-for-byte copy of the stylesheet published by the
UI Library, and the theme switcher in `assets/js/theme.js` sets the same theme variables the
library defines. Project styles in `assets/css/wiki.css` use the library tokens
(`--primaryColour`, `--fontSizeBase`, `--borderWidth`, …) and library components (`.header`,
`.title`, `.item`, `.clickable`, `.border`, `.rounded`) instead of hard-coded colours or sizes.
See the
[AI Instructions guide](https://github.com/intelligentplant/IntelligentPlant-UI-Library/blob/main/Guides/AI%20Instructions.md)
for the full contract.

Load order matters: `assets/ui-library/index.css`, then `assets/css/ui-overrides.css`, then
`assets/css/wiki.css`.

### Updating the UI Library stylesheet

GitHub Pages builds with plain Jekyll and cannot run `npm install`, so the stylesheet has to be
committed. `tools/ui-library/sync.js` copies it (and the icon fonts) out of the npm package into
`assets/ui-library/`, and writes `assets/ui-library/SOURCE` with the version and checksums.
Never edit `assets/ui-library/index.css` by hand — anything the wiki needs on top of the library
goes in `assets/css/ui-overrides.css`, which keeps the copy replaceable.

The package is private, so npm needs a **classic** personal access token with the
`read:packages` scope (fine-grained tokens are not accepted by GitHub Packages):

1. Create the token at
   <https://github.com/settings/tokens/new?scopes=read:packages&description=UI%20Library>.
2. Copy `tools/ui-library/.npmrc.example` to `tools/ui-library/.npmrc` and paste the token in.
   That file is git-ignored; never commit it.
3. Sync:

```powershell
cd tools/ui-library
npm install
npm run sync            # or: node tools/ui-library/sync.js from the repo root
```

To bump the version, change the pin in `tools/ui-library/package.json`, then `npm install` and
`npm run sync`. `node tools/ui-library/sync.js --check` fails if the committed copy is out of
date, and `--from ../IntelligentPlant-UI-Library` syncs from a clone of the library instead, for
anyone without access to the package.

Only the stylesheet and the icon fonts are copied; the React bundle in the package is never
served or executed by the wiki. `npm audit` therefore reports advisories (currently some
moderate ones in `react-router-dom`) that cannot affect the published site — they are dev-time
dependencies of the sync step only.

## Publishing

Push to the `wiki-2026` branch. GitHub Pages builds it with the built-in Jekyll engine (no custom
build step), so the generated Markdown, data and media must be committed.

---

## Legacy: the DokuWiki converter (not in use)

> [!WARNING]
> `tools/convert-dokuwiki.js` is kept for reference only and is **no longer part of the workflow**.
> Do not run it without reading this section first — a re-sync **overwrites `_data/nav.json` and
> `index.md` completely**, so anything you changed in those two files by hand is lost. It also
> copies media into `assets/media/` and can overwrite a page or an image that has the same name as
> one in the DokuWiki. Pages you added yourself under `wiki/` are left alone (the converter only
> writes files, it never deletes them), but a page deleted upstream will stay here forever.

The site started as a conversion of the DokuWiki data in
[`intelligentplant/root`](https://github.com/intelligentplant/root/tree/main/DokuWiki). That
content is now the Markdown in `wiki/` and the images in `assets/media/`, and it is edited in
place like any other page.

If you ever do need to pull in more of the DokuWiki:

```powershell
# 1. Get the DokuWiki source
git clone --depth 1 --filter=blob:none --sparse https://github.com/intelligentplant/root ../_root_clone
cd ../_root_clone
git sparse-checkout set DokuWiki/data

# 2. Convert it into wiki/, _data/nav.json and assets/media/
cd ../intelligentplant.github.io
node tools/convert-dokuwiki.js "../_root_clone/DokuWiki/data" .

# 3. Rebuild the derived files and check the result
node tools/build-search-index.js
node tools/verify.js .
```

The converter calls `build-nav.js` to rebuild the tree and then re-applies every `nav:` front
matter declaration, so hand-authored pages keep their place in the sidebar. Commit before running
it, and review `git diff` afterwards — that is your only safety net for `nav.json` and `index.md`.
