/* Sidebar search over the static index written by tools/build-search-index.js.
 *
 * The whole index (~58 KB) is fetched on first use and filtered in the browser,
 * which keeps GitHub Pages a plain static host. Matching is a simple
 * substring score: title beats heading beats excerpt.
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
  if (!input || !list) return;

  var pages = null;
  var loading = null;

  function load() {
    if (pages) return Promise.resolve(pages);
    if (!loading) {
      loading = fetch(INDEX_URL)
        .then(function (r) { return r.ok ? r.json() : []; })
        .then(function (data) { pages = data; return data; })
        .catch(function () { pages = []; return []; });
    }
    return loading;
  }

  function score(entry, terms) {
    var title = entry.t.toLowerCase();
    var excerpt = (entry.e || '').toLowerCase();
    var total = 0;
    for (var i = 0; i < terms.length; i++) {
      var term = terms[i];
      var best = 0;
      if (title.indexOf(term) !== -1) best = 5;
      for (var h = 0; h < entry.h.length; h++) {
        if (entry.h[h].t.toLowerCase().indexOf(term) !== -1) { best = Math.max(best, 3); break; }
      }
      if (!best && excerpt.indexOf(term) !== -1) best = 1;
      if (!best) return 0; // every term must appear somewhere
      total += best;
    }
    return total;
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
        for (var h = 0; h < e.h.length; h++) {
          var t = e.h[h].t.toLowerCase();
          for (var i = 0; i < terms.length; i++) {
            if (t.indexOf(terms[i]) !== -1) { heading = e.h[h].t; break; }
          }
          if (heading) break;
        }
        return {
          title: e.t,
          heading: heading,
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
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () { load().then(function () { search(value); }); }, 120);
  });

  input.addEventListener('search', function () { if (!input.value) hide(); });

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { input.value = ''; hide(); }
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('#wikiSearch')) hide();
  });
})();
