"use client";

import { usePathname } from "next/navigation";

import { getPageNavigation } from "@/app/siteMap";
import { Button } from "@/app/ui/Button";

export function PageNavigation() {
  const pathname = usePathname();
  const { previous, next } = getPageNavigation(pathname);

  if (!previous && !next) {
    return null;
  }

  return (
    <nav aria-label="Page navigation" className="mt-16 flex gap-4">
      {previous ? (
        <Button href={previous.href} className="mr-auto text-left">
          <span aria-hidden="true">←</span>
          <span>
            <span className="block text-xs font-medium">Previous</span>
            {previous.title}
          </span>
        </Button>
      ) : null}

      {next ? (
        <Button href={next.href} className="ml-auto text-right">
          <span>
            <span className="block text-xs font-medium">Next</span>
            {next.title}
          </span>
          <span aria-hidden="true">→</span>
        </Button>
      ) : null}
    </nav>
  );
}
