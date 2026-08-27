import type { Metadata } from "next";

import { PageRail } from "@/components/layout";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  shareTitle: "Arch Studio | About Us",
  description:
    "Founded in 2007 as a trio of architects, Arch Studio is a boutique urban design practice led by a small team of world-class professionals.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageRail label="About Us" />
      <h1 className="v-container text-h2-sm font-bold text-very-dark-blue lg:text-h2">
        About Us
      </h1>
    </>
  );
}
