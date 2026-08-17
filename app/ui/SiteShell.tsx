"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { GiNotebook } from "react-icons/gi";
import { IoClose, IoMenu } from "react-icons/io5";

import {
  getNavigationPages,
  type NavigationPage,
} from "@/app/siteMap";

const SIDEBAR_ID = "site-navigation";

type NavigationListProps = {
  pages: readonly NavigationPage[];
  pathname: string;
  onNavigate: () => void;
  depth?: number;
};

function NavigationList({
  pages,
  pathname,
  onNavigate,
  depth = 0,
}: NavigationListProps) {
  return (
    <ul className="sidebar-list">
      {pages.map((page) => (
        <li key={page.href}>
          <Link
            href={page.href}
            className={depth === 0 ? "sidebar-root-link" : undefined}
            aria-current={pathname === page.href ? "page" : undefined}
            onClick={onNavigate}
          >
            {page.title}
          </Link>

          {page.children?.length ? (
            <NavigationList
              pages={page.children}
              pathname={pathname}
              onNavigate={onNavigate}
              depth={depth + 1}
            />
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const navigationPages = getNavigationPages(pathname);

  useEffect(() => {
    function closeAfterHistoryNavigation() {
      setIsOpen(false);
    }

    window.addEventListener("popstate", closeAfterHistoryNavigation);

    return () =>
      window.removeEventListener("popstate", closeAfterHistoryNavigation);
  }, []);

  function closeSidebar({ restoreFocus = false } = {}) {
    setIsOpen(false);

    if (restoreFocus) {
      toggleButtonRef.current?.focus();
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape" && isOpen) {
      event.preventDefault();
      closeSidebar({ restoreFocus: true });
    }
  }

  return (
    <div
      className="site-shell"
      data-open={isOpen ? "true" : "false"}
      onKeyDown={handleKeyDown}
    >
      <div className="site-content">
        <header className="center-wrapper flex items-center justify-between shadow p-2 gap-4 text-bold-foreground sticky top-0 bg-surface z-50 font-bold text-xl">
          <Link href="/" className="icon-text" onClick={() => closeSidebar()}>
            <GiNotebook /> Casual Docs
          </Link>

          <button
            ref={toggleButtonRef}
            type="button"
            className="menu-button"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-controls={SIDEBAR_ID}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((currentState) => !currentState)}
          >
            {isOpen ? <IoClose aria-hidden /> : <IoMenu aria-hidden />}
          </button>
        </header>

        <main className="center-wrapper flex flex-1 flex-col py-16">
          {children}
        </main>
      </div>

      <aside
        id={SIDEBAR_ID}
        className="site-sidebar"
        aria-label="Page navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <h2 className="sr-only">Page navigation</h2>

        <nav aria-label="Site pages">
          <NavigationList
            pages={navigationPages}
            pathname={pathname}
            onNavigate={() => closeSidebar()}
          />
        </nav>
      </aside>
    </div>
  );
}
