---
name: proofread-page-prose
description: Proofread a reader-facing Next.js, TSX, JSX, MDX, or Markdown page for spelling, grammar, and punctuation while preserving its meaning, terminology, structure, and behavior.
---

# Page Prose Proofreading

Use this skill for a narrow, minimal-diff proofread of one or more content pages.

## Scope

Read each complete target file and correct only visible prose: headings, paragraphs, list items, captions, blockquotes, table text, and reader-facing UI labels.

Correct clear spelling mistakes, punctuation, agreement, hyphenation, and word order that makes a sentence ungrammatical. Preserve each sentence's intended meaning. Do not replace words or rewrite sentences unless an evident error has broken their meaning.

Treat game names, domain terms, proper nouns, quotes, and mechanical notation as intentional unless they are unmistakably misspelled.

## Preserve the Page

Leave imports, identifiers, code, component structure, metadata, route paths, links and their destinations, heading IDs, accessibility attributes, styles, data, examples, and types unchanged. Preserve JSX and HTML syntax exactly apart from corrected reader-facing text.

Prefer the smallest textual diff. Do not edit for style, tone, concision, consistency preferences, or factual accuracy.

## Finish

Review the diff and run `git diff --check`. Confirm every changed line is a necessary prose correction. Report the files reviewed and a concise summary; if no correction is needed, make no change.
