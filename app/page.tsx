import Link from "next/link";

import { getTopLevelPages } from "@/app/utils/getTopLevelPages";

export default async function Home() {
  const pages = await getTopLevelPages();

  return (
    <div className="h-dvh flex flex-col items-center text-center justify-around">
      <h1 className="text-6xl">
        Docs for <span className="text-primary">casual</span> players
      </h1>

      <p>Games can be fun. They can be hard. They can be both.</p>

      <nav aria-labelledby="game-pages-heading">
        <ul className="list list-none p-0">
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
