import type { Metadata } from "next";

import { PageRail } from "@/components/layout";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  shareTitle: "Arch Studio | Contact",
  description:
    "Tell us about your project. Arch Studio has offices in Tennessee and Texas — leave a message or give us a call.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageRail label="Contact" />
      <h1 className="v-container text-h2-sm font-bold text-very-dark-blue lg:text-h2">
        Contact
      </h1>
    </>
  );
}
