/* Wiki page behaviour: contents menu toggle, in-page outline, external links. */

(function () {
  'use strict';

  const STORAGE_KEY = 'wikiNavHidden';
  // Below this width the library makes the menu a full-screen overlay that
  // starts closed and closes itself when a page is chosen (guide §4.8).
  const MOBILE_QUERY = '(max-width: 767.98px)';

  function isMobile() {
    return window.matchMedia(MOBILE_QUERY).matches;
  }

  function isNavHidden() {
    // On a phone the open menu is a full-screen overlay, so it always starts
    // closed (guide §4.8) even if a desktop visit left it open.
    if (isMobile()) return true;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored !== null) return stored === 'true';
    } catch (e) {}
    return false;
  }

  // `closed` is the library's own state for `ipLeftMenu wrapper collapsible`:
  // the panel slides to the width of the burger and everything else fades out.
  function setNavHidden(hidden, remember) {
    const nav = document.getElementById('wikiNav');
    const toggle = document.getElementById('wikiNavToggle');
    if (!nav || !toggle) return;
    nav.classList.toggle('closed', hidden);
    toggle.setAttribute('aria-expanded', hidden ? 'false' : 'true');
    const label = hidden ? 'Open menu' : 'Close menu';
    toggle.title = label;
    toggle.setAttribute('aria-label', label);
    if (remember) {
      try { localStorage.setItem(STORAGE_KEY, String(hidden)); } catch (e) {}
    }
  }

  // Runs while the document is still being parsed so a stored "closed" state is
  // applied before the first paint and therefore does not animate.
  setNavHidden(isNavHidden(), false);

  document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('wikiNav');
    const toggle = document.getElementById('wikiNavToggle');

    if (toggle) {
      toggle.addEventListener('click', () => {
        setNavHidden(!nav.classList.contains('closed'), true);
      });
    }

    // The search box pins itself under the sticky header, so it needs to know
    // how tall that header is (the library sets a min-height, not a height).
    const header = nav ? nav.querySelector('.ipLeftMenu.header') : null;
    if (header) {
      const measure = () =>
        document.documentElement.style.setProperty(
          '--wiki-nav-header-height', header.offsetHeight + 'px');
      measure();
      window.addEventListener('resize', measure);
    }

    if (nav) {
      // Section rows: the library shows a submenu only while its group has the
      // `open` class, so a click has to toggle that class (guide §4.8).
      nav.addEventListener('click', (event) => {
        const group = event.target.closest('.ipLeftMenu.group');
        if (group) {
          const open = group.classList.toggle('open');
          group.setAttribute('aria-expanded', String(open));
          return;
        }
        // On a phone the open menu covers the page, so choosing a page closes it.
        if (event.target.closest('a.ipLeftMenu.item') && isMobile()) setNavHidden(true, true);
      });
    }

    // Scroll the selected page into view. The branch containing it is already
    // `open` in the markup. Only the panel is scrolled — `scrollIntoView` would
    // scroll the page too, which pushes the pinned search box out of sight.
    const current = document.querySelector('.ipLeftMenu.item.selected');
    if (current && nav) {
      const target =
        current.getBoundingClientRect().top -
        nav.getBoundingClientRect().top -
        (nav.clientHeight - current.clientHeight) / 2;
      nav.scrollTop = Math.max(0, nav.scrollTop + target);
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

  // One `ipLeftMenu` row: a group button or a link, always just a label
  // (guide §4.8 — no icons and no arrows in the rows). The `title` carries the
  // whole text, because the library truncates long labels with an ellipsis.
  function menuRow(className, text, href) {
    const row = document.createElement(href ? 'a' : 'button');
    if (href) row.href = href;
    else row.type = 'button';
    row.className = 'ipLeftMenu ' + className;
    row.title = text;
    const label = document.createElement('span');
    label.className = 'ipLeftMenu label';
    label.textContent = text;
    row.appendChild(label);
    return row;
  }

  function menuItem(row, sublist) {
    const li = document.createElement('li');
    li.appendChild(row);
    if (sublist) li.appendChild(sublist);
    return li;
  }

  // "On this page" sub-menu: the current page's headings, nested inside its own
  // entry in the contents menu as a group shaped exactly like the library's own
  // sections. Built here because the headings only exist once the article has
  // been rendered.
  function buildTableOfContents() {
    const host = document.getElementById('wikiPageToc');
    const article = document.querySelector('.wiki-article');
    if (!host || !article) return;
    const pageTitle = ((article.querySelector('h1') || {}).textContent || '').trim();
    // Skip a heading that just repeats the page title, and anything without an
    // anchor to jump to.
    const outline = Array.from(article.querySelectorAll('h2, h3')).filter((h) => {
      const text = (h.textContent || '').trim();
      return h.id && text && text !== pageTitle;
    });
    if (outline.length < 2) return;

    const group = menuRow('group open', 'On this page');
    group.setAttribute('aria-expanded', 'true');
    host.appendChild(group);

    const list = document.createElement('ul');
    list.className = 'ipLeftMenu submenu';
    // Each h2 gets a submenu holding the h3s under it; the ones that end up
    // empty are dropped so the tree shows no empty branches.
    const sections = [];
    outline.forEach((h) => {
      const row = menuRow('item', h.textContent.trim(), '#' + h.id);
      if (h.tagName === 'H2') {
        const sublist = document.createElement('ul');
        sublist.className = 'ipLeftMenu submenu';
        list.appendChild(menuItem(row, sublist));
        sections.push({ li: list.lastElementChild, sublist: sublist });
      } else if (sections.length) {
        sections[sections.length - 1].sublist.appendChild(menuItem(row));
      } else {
        list.appendChild(menuItem(row));
      }
    });
    sections.forEach((s) => {
      if (!s.sublist.children.length) s.li.removeChild(s.sublist);
    });
    if (!list.children.length) return;
    host.appendChild(list);
    trackActiveHeading(list, outline);
  }

  // Highlight the sub-menu entry for the heading currently being read.
  function trackActiveHeading(list, headings) {
    const items = Array.from(list.querySelectorAll('a.ipLeftMenu.item'));
    if (!items.length) return;
    // The article scrolls inside `.wiki-content`, not the window, so that is the
    // scroll host whose geometry matters.
    const root = document.querySelector('.wiki-content') || window;
    const isElement = root !== window;
    // A heading counts as "reached" once it passes this far below the top of the
    // scroll area, which keeps the highlight on a heading while you read it.
    const OFFSET = 100;

    const topOf = (el) => el.getBoundingClientRect().top;

    function currentHeading() {
      const viewTop = isElement ? topOf(root) : 0;
      const viewBottom = viewTop + (isElement ? root.clientHeight : window.innerHeight);
      const line = viewTop + OFFSET;
      const max = isElement
        ? root.scrollHeight - root.clientHeight
        : document.documentElement.scrollHeight - window.innerHeight;
      const pos = isElement ? root.scrollTop : window.scrollY;

      // The last headings of a page can sit in the final screenful and never
      // rise above the line, so the plain rule would freeze the highlight on an
      // earlier one. Once the scroll is at the end, take the last heading that
      // has come into view instead.
      if (pos >= max - 2) {
        let last = null;
        headings.forEach((h) => { if (topOf(h) < viewBottom) last = h; });
        return last || headings[headings.length - 1];
      }

      let current = headings[0];
      headings.forEach((h) => { if (topOf(h) <= line) current = h; });
      return current;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const current = currentHeading();
      items.forEach((a) => {
        const active = a.hash === '#' + current.id;
        a.classList.toggle('selected', active);
        if (active) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    root.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
  }
})();
