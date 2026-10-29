---
layout: wiki
title: "Preflight Kramdown Check"
permalink: /preflight-kramdown.html
---

Throwaway page used to confirm how GitHub Pages' kramdown parser renders each
heading variant. Delete once the `.title` fix is verified.

## Plain Heading

Body text for the plain heading.

## Heading With Colon: Subtitle

Body text.

## Heading With An Apostrophe's Text

Body text.

## Duplicate Heading

First occurrence.

## Duplicate Heading

Second occurrence — check whether the id gets a `-1` suffix.

### Sub Level Heading {: .title}

Control: this one keeps the `{: .title}` marker so the difference is visible.

## Anchor target here

A link to a clean anchor: [colon heading](#heading-with-colon-subtitle).

<h2 class="title" id="raw-html-heading">Raw HTML heading with class</h2>

Body text directly followed by a fence with no blank line (GFM quirk check):

```text
fenced block after paragraph
```

Body text directly followed by raw HTML with no blank line:

<img src="/wiki/assets/media/alarm_analysis/dataretention02.png" alt="preflight" style="max-width:120px" loading="lazy" />
