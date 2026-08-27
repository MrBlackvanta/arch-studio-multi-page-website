import Link from "next/link";

import { Logo } from "@/components/icons";

import MobileMenu from "./mobile-menu";
import NavLinks from "./nav-links";

export default function SiteHeader() {
  return (
    <header className="relative z-50 h-24 bg-white md:h-38">
      <span
        aria-hidden="true"
        className="absolute top-0 left-13 hidden h-26 w-px bg-light-grey md:block lg:left-19.25"
      />
      <div className="v-container flex h-full items-center">
        <Link
          href="/"
          aria-label="Arch Studio, home"
          className="shrink-0 text-very-dark-blue"
        >
          <Logo className="h-8 md:h-10" />
        </Link>
        <NavLinks variant="header" />
        <MobileMenu />
      </div>
    </header>
  );
}
