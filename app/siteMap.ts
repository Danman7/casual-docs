import type { Metadata } from "next";

type SiteMetadata = {
  readonly title: NonNullable<Metadata["title"]>;
  readonly description: string;
};

export type SitePage = {
  readonly href: `/${string}`;
  readonly title: string;
  readonly metadata: SiteMetadata;
  readonly children?: readonly SitePage[];
};

export type NavigationPage = Pick<SitePage, "href" | "title"> & {
  readonly children?: readonly NavigationPage[];
};

export const siteMap = {
  href: "/",
  title: "Casual Docs",
  metadata: {
    title: {
      default: "Casual Docs",
      template: "%s | Casual Docs",
    },
    description: "A library of docs for casual players.",
  },
  children: [
    {
      href: "/mortal-kombat",
      title: "Mortal Kombat",
      metadata: {
        title: "Mortal Kombat",
        description:
          "Learn the fundamentals, notation, and strategy of modern Mortal Kombat.",
      },
      children: [
        {
          href: "/mortal-kombat/neutral",
          title: "Neutral",
          metadata: {
            title: "Neutral",
            description:
              "Learn how neutral, spacing, footsies, zoning, pokes, and pressure work in modern Mortal Kombat.",
          },
        },
      ],
    },
    {
      href: "/warhammer-40k",
      title: "Warhammer 40,000",
      metadata: {
        title: "Warhammer 40,000",
        description:
          "Learn the core rules, units, and battle flow of Warhammer 40,000.",
      },
      children: [
        {
          href: "/warhammer-40k/battle-round",
          title: "Battle Round",
          metadata: {
            title: "Battle Round",
            description:
              "Learn the five phases and core flow of a Warhammer 40,000 battle round.",
          },
        },
        {
          href: "/warhammer-40k/attack-sequence",
          title: "Attack Sequence",
          metadata: {
            title: "Attack Sequence",
            description:
              "Follow the hit, wound, save, and damage steps of a Warhammer 40,000 attack.",
          },
        },
        {
          href: "/warhammer-40k/profile-archetypes",
          title: "Profile Archetypes",
          metadata: {
            title: "Profile Archetypes",
            description:
              "Learn the common Warhammer 40,000 unit profile archetypes and what their characteristics mean.",
          },
        },
      ],
    },
  ],
} as const satisfies SitePage;

type RoutesIn<Page> = Page extends {
  readonly href: infer Href;
  readonly children: readonly (infer Child)[];
}
  ? Href | RoutesIn<Child>
  : Page extends { readonly href: infer Href }
    ? Href
    : never;

export type SiteRoute = RoutesIn<typeof siteMap>;

function findPage(page: SitePage, href: string): SitePage | undefined {
  if (page.href === href) {
    return page;
  }

  for (const child of page.children ?? []) {
    const match = findPage(child, href);

    if (match) {
      return match;
    }
  }
}

export function getPage(href: SiteRoute): SitePage {
  const page = findPage(siteMap, href);

  if (!page) {
    throw new Error(`Page is not registered in the site map: ${href}`);
  }

  return page;
}

export function getTopLevelPages(): readonly SitePage[] {
  return siteMap.children;
}

function toNavigationPage(
  page: SitePage,
  includeChildren: boolean,
): NavigationPage {
  return {
    href: page.href,
    title: page.title,
    ...(includeChildren && page.children
      ? {
          children: page.children.map((child) => toNavigationPage(child, true)),
        }
      : {}),
  };
}

export function getNavigationPages(
  pathname: string,
): readonly NavigationPage[] {
  const topLevelPages = getTopLevelPages();
  const activeSection = topLevelPages.find(
    (page) => pathname === page.href || pathname.startsWith(`${page.href}/`),
  );

  return topLevelPages.map((page) =>
    toNavigationPage(page, page === activeSection),
  );
}
