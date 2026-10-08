<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Working in this repository

- This is a reader-facing guide for casual game players. Read a nearby page before editing an article, and explain unfamiliar terms before using shorthand. Keep instructions concrete and easy to follow.
- When changing game rules or mechanics, check the relevant official rules or patch notes for the version being discussed. Link to the source where a reader can verify the claim.
- `app/siteMap.ts` is the source for page titles, descriptions, sidebar links, breadcrumbs, and sibling navigation. When adding or moving a route, update its entry there and use `getPage(route)` to supply the page heading and exported metadata, as existing pages do.
- Keep article content in the route's `page.tsx`. Reuse components in `app/ui` and styles in `app/globals.css` for shared presentation. Give section headings stable IDs so they can be linked directly.
- For page prose work, use `.agents/skills/refactor-page-from-sources/SKILL.md` when rewriting from sources and `.agents/skills/proofread-page-prose/SKILL.md` when proofreading.
- After changing TSX or shared UI, run `npm run lint`. Run `npm run build` when changing routes, metadata, or application behavior, and check the affected pages in the browser when layout or navigation changes.
