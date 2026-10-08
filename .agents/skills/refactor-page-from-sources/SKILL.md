---
name: refactor-page-from-sources
description: Rewrite a reader-facing Next.js, TSX, JSX, MDX, or Markdown page from optional factual sources and local style references. Use when a page must be simplified, updated, or reshaped without changing its route or behavior.
---

# Refactor a Page from Sources

Use this skill to make a content page accurate, compact, and consistent with
the selected reference pages. The finished page should teach the same job more
clearly, rather than merely paraphrasing the old prose.

## Inputs

- Read the complete target page and applicable repository instructions first.
- Treat pages named by the user as style references. Identify their opening
  pattern, heading depth, paragraph length, terminology, examples, and visual
  conventions before editing.
- Sources are optional. When the user provides a source for factual changes,
  read the relevant section and make a short change ledger: what is retained,
  corrected, added, or removed. Prefer the current primary source. Paraphrase
  source material; do not copy it wholesale.

## Refactor

Start with the reader&apos;s question or the concept&apos;s purpose. Then introduce the
smallest useful vocabulary and explain the sequence, comparison, or decision in
direct language.

Use the reference pages&apos; simple tutorial style:

- one clear claim per paragraph;
- short headings that say what the reader learns;
- compact ordered steps for a real sequence;
- examples immediately after the rule they demonstrate;
- explicit practical consequences such as why a profile, order, or breakpoint
  matters.

Keep rules and explanations distinct. Explain new or changed mechanics in the
place where the reader uses them. Remove obsolete steps, duplicated explanations,
and speculative advice that does not support the page&apos;s teaching job.

## Preserve the Page

Preserve metadata, route paths, heading IDs, links and their destinations,
component APIs, accessibility text, and unrelated user edits. Keep existing
components when they still communicate the idea; remove an import only when the
refactor makes it unused.

Do not introduce a design system, new components, or unrelated factual updates.
Ask before changing the page&apos;s scope beyond the provided sources and style
references.

## Finish

Read the rendered JSX/MDX mentally for punctuation around inline elements and
for accurate whitespace. Review the diff against the change ledger, run the
repository validation that applies to the edited page, and report any validation
blocked by the environment separately from code failures.
