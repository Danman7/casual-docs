"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getBreadcrumbs } from "@/app/siteMap";

export function Breadcrumbs() {
  const breadcrumbs = getBreadcrumbs(usePathname());

  if (breadcrumbs.length < 2) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 p-0 list-none">
        {breadcrumbs.map((page, index) => {
          const isCurrentPage = index === breadcrumbs.length - 1;

          return (
            <li key={page.href} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {isCurrentPage ? (
                <span aria-current="page">{page.title}</span>
              ) : (
                <Link href={page.href}>{page.title}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
