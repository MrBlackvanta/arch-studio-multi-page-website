import type { Metadata, Viewport } from "next";
import { League_Spartan } from "next/font/google";

import { SiteFooter, SiteHeader } from "@/components/layout";
import { siteUrl } from "@/data";
import { pageMetadata } from "@/lib/metadata";

import "./globals.css";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const homeTitle = "Arch Studio | Small team, big ideas";
const description =
  "Arch Studio is a small architecture practice with a large network, designing stations, towers and museums that inspire and delight.";

export const metadata: Metadata = {
  ...pageMetadata({
    title: homeTitle,
    shareTitle: homeTitle,
    description,
    path: "/",
  }),
  metadataBase: new URL(siteUrl),
  title: { default: homeTitle, template: "%s | Arch Studio" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1b1d23",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${leagueSpartan.variable} antialiased`}>
      <body className="font-sans">
        <SiteHeader />
        <main className="relative">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
