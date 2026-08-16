import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { GiNotebook } from "react-icons/gi";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";

const notoSans = Noto_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Casual Docs",
  description: "A library of docs for casual players.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${notoSans.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <header className="center-wrapper flex items-center justify-between shadow p-2 gap-4 text-bold-foreground sticky top-0 bg-surface z-50 font-bold text-xl">
          <Link href="/" className="icon-text">
            <GiNotebook /> Casual Docs
          </Link>

          <IoMenu />
        </header>

        <main className="center-wrapper py-16">{children}</main>
      </body>
    </html>
  );
}
