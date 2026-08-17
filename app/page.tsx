import Link from "next/link";

import { getTopLevelPages } from "@/app/siteMap";

export default function Home() {
  const pages = getTopLevelPages();

  return (
    <div className="flex flex-1 flex-col items-center justify-around text-center">
      <h1 className="text-5xl">
        Docs for <span className="text-primary">casual</span> players
      </h1>

      <p className="text-lg">
        Games can be fun. They can be hard. They can be both.
      </p>

      <nav aria-labelledby="game-pages-heading">
        <ul className="list list-none p-0 font-bold text-xl">
          {pages.map((page) => (
            <li key={page.href}>
              <Link href={page.href}>{page.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
