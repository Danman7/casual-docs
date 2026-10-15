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

export type PageNavigation = {
  readonly previous?: Pick<SitePage, "href" | "title">;
  readonly next?: Pick<SitePage, "href" | "title">;
};

export type BreadcrumbPage = Pick<SitePage, "href" | "title">;

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
      title: "Mortal Kombat Fundamentals",
      metadata: {
        title: "Mortal Kombat Fundamentals",
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
      href: "/mortal-kombat-1",
      title: "Mortal Kombat 1",
      metadata: {
        title: "Mortal Kombat 1",
        description: "Learn the mechanics and characters of Mortal Kombat 1.",
      },
      children: [
        {
          href: "/mortal-kombat-1/scorpion",
          title: "Scorpion",
          metadata: {
            title: "Scorpion",
            description: "Learn how Scorpion plays in Mortal Kombat 1.",
          },
        },
        {
          href: "/mortal-kombat-1/general-shao",
          title: "General Shao",
          metadata: {
            title: "General Shao",
            description:
              "Learn General Shao's Axe spacing, No Axe pressure, stance transitions, and starting combos in Mortal Kombat 1.",
          },
        },
        {
          href: "/mortal-kombat-1/sub-zero",
          title: "Sub-Zero",
          metadata: {
            title: "Sub-Zero",
            description:
              "Learn Sub-Zero's spacing, Ice Klone setups, counterzoning, and starting combos in Mortal Kombat 1.",
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
              "Learn the battle-round structure, turn steps, and five phases of Warhammer 40,000.",
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
          href: "/warhammer-40k/archetypes",
          title: "Archetypes",
          metadata: {
            title: "Archetypes",
            description:
              "Learn the common Warhammer 40,000 unit profile archetypes and what their characteristics mean.",
          },
        },
        {
          href: "/warhammer-40k/space-marines",
          title: "Space Marines",
          metadata: {
            title: "Space Marines",
            description:
              "The faction of Space Marines in WH40k, their playstyle, pros and cons.",
          },
          children: [
            {
              href: "/warhammer-40k/space-marines/infantry",
              title: "Infantry",
              metadata: {
                title: "Space Marines Infantry",
                description:
                  "Units of the Space Marines faction in Warhammer 40,000.",
              },
            },
          ],
        },
        {
          href: "/warhammer-40k/orks",
          title: "Orks",
          metadata: {
            title: "Orks",
            description:
              "The faction of Orks in WH40k, their playstyle, pros and cons.",
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

function findPageTrail(
  page: SitePage,
  href: string,
  trail: readonly SitePage[] = [],
): readonly SitePage[] | undefined {
  const nextTrail = [...trail, page];

  if (page.href === href) {
    return nextTrail;
  }

  for (const child of page.children ?? []) {
    const match = findPageTrail(child, href, nextTrail);

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

export function getBreadcrumbs(href: string): readonly BreadcrumbPage[] {
  const trail = findPageTrail(siteMap, href);

  return trail?.slice(1) ?? [];
}

export function getPageNavigation(href: string): PageNavigation {
  const section = siteMap.children.find((page) =>
    href.startsWith(`${page.href}/`),
  );

  if (!section) {
    return {};
  }

  const pages = flattenPages(section.children).map((page) => {
    const title = page.metadata.title;

    return {
      href: page.href,
      title:
        typeof title === "string"
          ? title
          : "absolute" in title
            ? title.absolute
            : title.default,
    };
  });
  const currentPageIndex = pages.findIndex((page) => page.href === href);

  if (currentPageIndex === -1) {
    return {};
  }

  return {
    ...(currentPageIndex > 0 ? { previous: pages[currentPageIndex - 1] } : {}),
    ...(currentPageIndex < pages.length - 1
      ? { next: pages[currentPageIndex + 1] }
      : {}),
  };
}

function flattenPages(pages: readonly SitePage[]): readonly SitePage[] {
  return pages.flatMap((page) => [page, ...flattenPages(page.children ?? [])]);
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
