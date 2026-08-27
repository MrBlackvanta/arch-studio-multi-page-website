import type { Metadata } from "next";

import { PageRail } from "@/components/layout";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Portfolio",
  shareTitle: "Arch Studio | Portfolio",
  description:
    "Twelve years of Arch Studio projects, from Seraph Station to Project Del Sol — stations, towers, museums and homes.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageRail label="Portfolio" />
      <h1 className="v-container text-h2-sm font-bold text-very-dark-blue lg:text-h2">
        Portfolio
      </h1>
    </>
  );
}
