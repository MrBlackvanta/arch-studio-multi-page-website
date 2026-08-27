import Link from "next/link";

import Button from "@/components/button";
import { Logo } from "@/components/icons";

import Attribution from "./attribution";
import NavLinks from "./nav-links";

export default function SiteFooter() {
  return (
    <footer>
      <div className="relative pt-15 md:pt-0 lg:v-container">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-15 bottom-0 bg-very-light-grey md:top-0 md:right-39 lg:right-31.5"
        />
        <div className="relative flex flex-col items-center px-8 pb-12 md:flex-row md:px-0 md:pb-0">
          <Link
            href="/"
            aria-label="Arch Studio, home"
            className="-mt-15 grid size-30 shrink-0 place-items-center bg-very-dark-blue text-white md:mt-0 lg:size-50"
          >
            <Logo className="h-6 lg:h-10" />
          </Link>
          <NavLinks variant="footer" />
          <Button href="/portfolio" className="mt-8 md:mt-0 md:ml-auto">
            See Our Portfolio
          </Button>
        </div>
      </div>
      <Attribution />
    </footer>
  );
}
