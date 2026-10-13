import Link from "next/link";

import type { NavigationPage } from "@/app/siteMap";

function ContentsList({ pages }: { pages: readonly NavigationPage[] }) {
  return (
    <ul>
      {pages.map((page) => (
        <li key={page.href}>
          <Link href={page.href}>{page.title}</Link>
          {page.children?.length ? <ContentsList pages={page.children} /> : null}
        </li>
      ))}
    </ul>
  );
}

export function PageContents({ pages }: { pages: readonly NavigationPage[] }) {
  if (pages.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 id="contents">Contents</h2>
      <nav aria-label="Page contents">
        <ContentsList pages={pages} />
      </nav>
    </section>
  );
}
