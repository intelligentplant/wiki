---
layout: wiki
title: "Logical operators"
permalink: /taggle/querysyntax.html
---
The query string is parsed into a series of terms and operators. A term can be a single word — quick or brown — or a phrase, surrounded by double quotes — "quick brown" — which searches for all the words in the phrase, in the same order.

Operators allow you to customize the search — the available options are explained below.

<code>AND</code> - The default operator used if no explicit operator is specified. For example, with a default operator of AND, the query capital of Hungary is translated to capital AND of AND Hungary.

#### Fuzziness

We can search for terms that are similar to, but not exactly like our search terms, using the “fuzzy” operator:

<code>quikc~ brwn~ foks~</code>
This uses the Damerau-Levenshtein distance to find all terms with a maximum of two changes, where a change is the insertion, deletion or substitution of a single character, or transposition of two adjacent characters.

The default edit distance is 2, but an edit distance of 1 should be sufficient to catch 80% of all human misspellings. It can be specified as:

<code>quikc~1</code>

#### Wildcards

Wildcard searches can be run on individual terms, using <code>?</code> to replace a single character, and <code>*</code> to replace zero or more characters:

<code>qu?ck bro*</code>
Be aware that wildcard queries can use an enormous amount of memory and perform very badly — just think how many terms need to be queried to match the query string <code>"a* b* c*"</code>.
