/* Wiki page behaviour: contents panel toggle, in-page outline, external links. */

(function () {
  'use strict';

  const STORAGE_KEY = 'wikiNavHidden';

  function isNavHidden() {
    try { return localStorage.getItem(STORAGE_KEY) === 'true'; } catch (e) { return false; }
  }

  function setNavHidden(hidden) {
    document.body.classList.toggle('wiki-nav-hidden', hidden);
    try { localStorage.setItem(STORAGE_KEY, String(hidden)); } catch (e) {}
    // The single toolbar burger reflects the state of the panel it controls.
    const toggle = document.getElementById('wikiNavToggle');
    if (toggle) toggle.setAttribute('aria-expanded', hidden ? 'false' : 'true');
  }

  document.addEventListener('DOMContentLoaded', () => {
    setNavHidden(isNavHidden());

    // Both the search box and the "Contents" title are pinned to the top of the
    // scrolling panel; the title needs to know how tall the box above it is.
    const search = document.getElementById('wikiSearch');
    if (search) {
      const measure = () =>
        document.documentElement.style.setProperty('--wiki-search-height', search.offsetHeight + 'px');
      measure();
      window.addEventListener('resize', measure);
    }

    // Enable the open/close transition only after the stored state has been
    // applied, so loading a page with the panel closed does not animate.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => document.body.classList.add('wiki-nav-ready'));
    });

    const toggle = document.getElementById('wikiNavToggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        setNavHidden(!document.body.classList.contains('wiki-nav-hidden'));
      });
    }

    // Open the contents section for the current page and scroll it into view.
    // The sections on the path to the page are already `open` in the markup.
    // Only the panel is scrolled — `scrollIntoView` would scroll the page too,
    // which pushes the pinned search box out of sight.
    const current = document.querySelector('.wiki-nav-current');
    const panel = document.getElementById('wikiNav');
    if (current && panel) {
      const target =
        current.getBoundingClientRect().top -
        panel.getBoundingClientRect().top -
        (panel.clientHeight - current.clientHeight) / 2;
      panel.scrollTop = Math.max(0, panel.scrollTop + target);
    }

    // Links leaving the wiki open in a new tab.
    document.querySelectorAll('.wiki-content a[href^="http"]').forEach((a) => {
      if (a.hostname !== window.location.hostname) {
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      }
    });

    // Images get a caption from their alt text and a click-through to full size.
    document.querySelectorAll('.wiki-content img').forEach((img) => {
      if (!img.parentElement.querySelector('a')) {
        const link = document.createElement('a');
        link.href = img.src;
        link.target = '_blank';
        link.rel = 'noopener';
        link.title = 'Open image full size';
        img.parentNode.insertBefore(link, img);
        link.appendChild(img);
      }
    });

    applyHeadingClasses();
    buildTableOfContents();
  });

  // The converter marks section headings with the library text classes
  // (`## Heading {: .title}` / `### Heading {: .title}`). kramdown normally
  // puts those classes on the heading element, but wraps the text in a span in
  // some versions, so normalise both shapes here; the styling lives on the
  // heading element.
  function applyHeadingClasses() {
    const wanted = { H2: 'title', H3: 'title' };
    document.querySelectorAll('.wiki-article h2, .wiki-article h3').forEach((h) => {
      const cls = wanted[h.tagName];
      const inner = h.children.length === 1 ? h.children[0] : null;
      if (inner && inner.tagName === 'SPAN' && inner.className) {
        h.className = h.className ? h.className + ' ' + inner.className : inner.className;
        while (inner.firstChild) h.insertBefore(inner.firstChild, inner);
        inner.remove();
      }
      if (!h.classList.contains(cls)) h.classList.add(cls);
    });
  }

  // "On this page" sub-menu: the current page's headings, nested inside its own
  // entry in the contents panel (built here because the headings only exist
  // after the article is rendered).
  function buildTableOfContents() {
    const host = document.getElementById('wikiPageToc');
    const article = document.querySelector('.wiki-article');
    if (!host || !article) return;
    const headings = Array.from(article.querySelectorAll('h2, h3'));
    const pageTitle = (article.querySelector('h1') || {}).textContent;
    // Skip a leading heading that just repeats the page title.
    const outline = headings.filter((h) => {
      const text = (h.textContent || '').trim();
      return text && text !== (pageTitle || '').trim();
    });
    if (outline.length < 2) return;

    const details = document.createElement('details');
    details.className = 'wiki-page-toc';
    details.open = true;

    const summary = document.createElement('summary');
    summary.textContent = 'On this page';
    details.appendChild(summary);

    const list = document.createElement('ul');
    list.className = 'wiki-page-toc-list';
    outline.forEach((h) => {
      if (!h.id) return;
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = h.textContent;
      if (h.tagName === 'H3') li.classList.add('wiki-page-toc-sub');
      li.appendChild(a);
      list.appendChild(li);
    });
    if (!list.children.length) return;
    details.appendChild(list);
    host.appendChild(details);
    trackActiveHeading(list, outline);
  }

  // Highlight the sub-menu entry for the heading currently in view (Gestalt `.active`).
  function trackActiveHeading(list, headings) {
    const items = Array.from(list.children);
    if (!items.length) return;
    const root = document.querySelector('.wiki-content') || window;
    const offset = 100;
    let frame = 0;
    const update = () => {
      frame = 0;
      const top = root.getBoundingClientRect ? root.getBoundingClientRect().top + offset : offset;
      let current = headings[0];
      headings.forEach((h) => {
        if (h.getBoundingClientRect().top <= top) current = h;
      });
      items.forEach((li) => {
        li.classList.toggle('active', li.querySelector('a').hash === '#' + current.id);
      });
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    (root.addEventListener ? root : window).addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
  }
})();
