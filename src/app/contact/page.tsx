import type { Metadata } from "next";

import { PageRail } from "@/components/layout";
import { pageMetadata } from "@/lib/metadata";
import { Details, Form, Hero, Map } from "@/views/contact";

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
      <Hero />
      <Details />
      <Map />
      <Form />
    </>
  );
}
