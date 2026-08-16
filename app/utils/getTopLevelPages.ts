import { readdir } from "node:fs/promises";
import path from "node:path";

const PAGE_FILE_PATTERN = /^page\.(?:js|jsx|ts|tsx)$/;
const SPECIAL_SEGMENT_PREFIXES = ["(", "@", "_", "["];

export type TopLevelPage = {
  href: `/${string}`;
  title: string;
};

function isPublicRouteSegment(segment: string) {
  return !SPECIAL_SEGMENT_PREFIXES.some((prefix) => segment.startsWith(prefix));
}

function titleFromSegment(segment: string) {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function getTopLevelPages(): Promise<TopLevelPage[]> {
  const appDirectory = path.join(process.cwd(), "app");
  const entries = await readdir(appDirectory, { withFileTypes: true });

  const pages = await Promise.all(
    entries
      .filter(
        (entry) => entry.isDirectory() && isPublicRouteSegment(entry.name),
      )
      .map(async (entry) => {
        const files = await readdir(path.join(appDirectory, entry.name));

        if (!files.some((file) => PAGE_FILE_PATTERN.test(file))) {
          return null;
        }

        return {
          href: `/${entry.name}` as const,
          title: titleFromSegment(entry.name),
        };
      }),
  );

  return pages
    .filter((page): page is TopLevelPage => page !== null)
    .sort((a, b) => a.title.localeCompare(b.title));
}
