# Industrial App Store Wiki

Source of [https://intelligentplant.github.io/](https://intelligentplant.github.io/), the
knowledge base for the Industrial App Store.

The site is a Jekyll static site published with GitHub Pages. Content is generated from the
DokuWiki data in
[`intelligentplant/root`](https://github.com/intelligentplant/root/tree/main/DokuWiki) and the
styling follows
[`IntelligentPlant-UI-Library`](https://github.com/intelligentplant/IntelligentPlant-UI-Library/tree/main/Guides).

## Layout

```
_config.yml                Jekyll configuration (kramdown/GFM, no plugins)
index.md                   Wiki landing page
_layouts/default.html      App shell: toolbar, nav rail, page body, theme menu
_layouts/wiki.html         Per-page layout (title, breadcrumbs, table of contents)
_includes/nav.html         Left navigation built from _data/nav.json
_data/nav.json             Navigation tree (generated)
wiki/                      Content pages, one per DokuWiki page (generated)
assets/css/wiki.css        Wiki styling — UI Library tokens only
assets/js/theme.js         Theme switcher (System / Light / Dark / Blue)
assets/js/wiki.js          Nav toggle, table of contents, link handling
assets/ui-library/         Vendored UI Library stylesheet + icon font
assets/media/              Images copied from the DokuWiki (generated)
tools/convert-dokuwiki.js  DokuWiki -> Markdown converter
tools/verify.js            Structural validator for the generated output
```

Everything under `wiki/`, `_data/`, and `assets/media/` is **generated** — change the converter or
the DokuWiki source instead of editing those files by hand.

## Regenerating the content

You need Node.js only; the scripts use the standard library.

```powershell
# 1. Get the DokuWiki source
git clone --depth 1 --filter=blob:none --sparse https://github.com/intelligentplant/root ../_root_clone
cd ../_root_clone
git sparse-checkout set DokuWiki/data

# 2. Convert it into wiki/, _data/nav.json and assets/media/
cd ../intelligentplant.github.io
node tools/convert-dokuwiki.js "../_root_clone/DokuWiki/data" .

# 3. Check the result
node tools/verify.js .
```

`verify.js` reports the page count, duplicate permalinks, broken internal links, and media files
that are referenced but missing (or present but unused). It must print
`OK — no structural problems found.` before you commit.

## Previewing locally

GitHub Pages builds the site with Jekyll. To preview it locally you need Ruby and Jekyll:

```powershell
bundle install
bundle exec jekyll serve
```

## Styling

`assets/ui-library/index.css` is a copy of the UI Library stylesheet, and the theme switcher in
`assets/js/theme.js` sets the same theme variables the library defines. Project styles in
`assets/css/wiki.css` use the library tokens (`--primaryColour`, `--fontSizeBase`,
`--borderWidth`, …) and library components (`.header`, `.title`, `.item`,
`.clickable`, `.border`, `.rounded`) instead of hard-coded colours or sizes. See the
[AI Instructions guide](https://github.com/intelligentplant/IntelligentPlant-UI-Library/blob/main/Guides/AI%20Instructions.md)
for the full contract.

## Publishing

Push to the `wiki-2026` branch. GitHub Pages builds it with the built-in Jekyll engine (no custom
build step), so the generated Markdown, data and media must be committed.
