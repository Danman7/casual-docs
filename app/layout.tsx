import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

import { getPage } from "@/app/siteMap";
import { SiteShell } from "@/app/ui/SiteShell";

const notoSans = Noto_Sans({
  subsets: ["latin"],
});

const homePage = getPage("/");

export const metadata: Metadata = homePage.metadata;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${notoSans.className} h-full antialiased`}>
      <body className="min-h-full">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
