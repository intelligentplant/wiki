/* Sidebar search over the static index written by tools/build-search-index.js.
 *
 * The whole index (~370 KB, compressed in transit) is fetched on first use and
 * filtered in the browser, which keeps GitHub Pages a plain static host. Matching
 * is a simple substring score: title beats heading beats excerpt beats page text.
 */
(function () {
  'use strict';

  var MAX_RESULTS = 20;
  var MIN_QUERY = 2;
  // Resolve both the index and the page hrefs against this script's own URL so
  // the site baseurl (/wiki) is honoured without hard-coding it here.
  var SITE_ROOT = (function () {
    var own = document.currentScript && document.currentScript.src;
    if (!own) return '/wiki/';
    return own.replace(/assets\/js\/search\.js(\?.*)?$/, '');
  })();
  var INDEX_URL = SITE_ROOT + 'assets/js/search-index.json';

  var input = document.getElementById('wikiSearchInput');
  var list = document.getElementById('wikiSearchResults');
  var clearBtn = document.getElementById('wikiSearchClear');
  if (!input || !list) return;

  var pages = null;
  var loading = null;

  // The index is ~370 KB of text and every keystroke would otherwise lower-case all
  // of it again, which is what made typing stutter. So each searchable field is
  // lower-cased once, when the index arrives, and kept beside the original. Keeping
  // the pair together also means a snippet cut at an index found in the lower-cased
  // text cannot drift: some characters (Turkish İ, for example) do not lower-case to
  // a single character, so lower-casing the two copies separately could misalign them.
  function prepare(list) {
    list.forEach(function (entry) {
      entry._t = (entry.t || '').toLowerCase();
      entry._e = (entry.e || '').toLowerCase();
      entry._x = (entry.x || '').toLowerCase();
      entry._h = (entry.h || []).map(function (h) { return h.t.toLowerCase(); });
    });
    return list;
  }

  function load() {
    if (pages) return Promise.resolve(pages);
    if (!loading) {
      loading = fetch(INDEX_URL)
        .then(function (r) { return r.ok ? r.json() : []; })
        .then(function (data) { pages = prepare(data); return pages; })
        .catch(function () { pages = []; return []; });
    }
    return loading;
  }

  function score(entry, terms) {
    var total = 0;
    for (var i = 0; i < terms.length; i++) {
      var term = terms[i];
      var best = 0;
      if (entry._t.indexOf(term) !== -1) best = 5;
      for (var h = 0; h < entry._h.length; h++) {
        if (entry._h[h].indexOf(term) !== -1) { best = Math.max(best, 3); break; }
      }
      if (!best && entry._e.indexOf(term) !== -1) best = 2;
      // Page text is the weakest signal: it matches far more often than a title
      // or heading does, so it must not outrank them.
      if (!best && entry._x.indexOf(term) !== -1) best = 1;
      if (!best) return 0; // every term must appear somewhere
      total += best;
    }
    return total;
  }

  // A short window of page text around the first term that appears in it, so a
  // body match shows the visitor why the page was found. The position comes from
  // the same lower-cased copy that was searched, and is applied to the original.
  function snippet(entry, terms) {
    var lower = entry._x;
    var at = -1;
    for (var i = 0; i < terms.length; i++) {
      at = lower.indexOf(terms[i]);
      if (at !== -1) break;
    }
    if (at === -1) return '';
    var body = entry.x || '';
    var from = Math.max(0, at - 40);
    var to = Math.min(body.length, at + 120);
    return (from > 0 ? '…' : '') +
      body.slice(from, to).trim() +
      (to < body.length ? '…' : '');
  }

  function render(query, hits) {
    list.innerHTML = '';
    if (!hits.length) {
      var empty = document.createElement('li');
      empty.className = 'wiki-search-empty';
      empty.textContent = 'No results for “' + query + '”';
      list.appendChild(empty);
    } else {
      hits.forEach(function (hit) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = hit.url;
        a.textContent = hit.title;
        if (hit.heading) {
          var sub = document.createElement('div');
          sub.className = 'wiki-search-heading';
          sub.textContent = hit.heading;
          a.appendChild(sub);
        }
        if (hit.snippet) {
          var ctx = document.createElement('div');
          ctx.className = 'wiki-search-snippet';
          ctx.textContent = hit.snippet;
          a.appendChild(ctx);
        }
        li.appendChild(a);
        list.appendChild(li);
      });
    }
    list.hidden = false;
    input.setAttribute('aria-expanded', 'true');
  }

  function hide() {
    list.hidden = true;
    list.innerHTML = '';
    input.setAttribute('aria-expanded', 'false');
  }

  // The clear button mirrors the content of the field.
  function syncClear() {
    if (clearBtn) clearBtn.hidden = input.value.length === 0;
  }

  function clearInput() {
    input.value = '';
    syncClear();
    hide();
    input.focus();
  }

  function search(raw) {
    var query = raw.trim();
    if (query.length < MIN_QUERY) { hide(); return; }
    var terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    var hits = (pages || [])
      .map(function (entry) { return { entry: entry, s: score(entry, terms) }; })
      .filter(function (r) { return r.s > 0; })
      .sort(function (a, b) { return b.s - a.s || a.entry.t.localeCompare(b.entry.t); })
      .slice(0, MAX_RESULTS)
      .map(function (r) {
        var e = r.entry;
        // Link straight at a matching heading when one exists.
        var heading = null;
        for (var h = 0; h < e._h.length; h++) {
          for (var i = 0; i < terms.length; i++) {
            if (e._h[h].indexOf(terms[i]) !== -1) { heading = e.h[h].t; break; }
          }
          if (heading) break;
        }
        var inTitle = false;
        for (var i = 0; i < terms.length; i++) {
          if (e._t.indexOf(terms[i]) !== -1) { inTitle = true; break; }
        }
        return {
          title: e.t,
          heading: heading,
          // Show the page-text snippet only when neither the title nor a heading
          // matched — otherwise that text already explains the hit.
          snippet: heading || inTitle ? '' : snippet(e, terms),
          url: SITE_ROOT + e.u.replace(/^\//, '') + (heading ? '#' + slug(heading) : ''),
        };
      });
    render(query, hits);
  }

  function slug(text) {
    return text.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
  }

  var timer = null;
  input.addEventListener('input', function () {
    var value = input.value;
    syncClear();
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () { load().then(function () { search(value); }); }, 120);
  });

  input.addEventListener('search', function () { syncClear(); if (!input.value) hide(); });

  if (clearBtn) clearBtn.addEventListener('click', clearInput);

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') clearInput();
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('#wikiSearch')) hide();
  });

  syncClear();
})();
