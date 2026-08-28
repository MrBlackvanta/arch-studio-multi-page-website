"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/data";
import { cn } from "@/lib/utils";

type NavLinksVariant = "header" | "footer" | "menu";

type Variant = {
  landmark: string;
  nav?: string;
  list: string;
  link: string;
  underline?: boolean;
};

const variants: Record<NavLinksVariant, Variant> = {
  header: {
    landmark: "Main",
    nav: "ml-20 hidden md:block lg:ml-24",
    list: "flex gap-14",
    link: "v-nav-link text-label font-bold",
    underline: true,
  },
  footer: {
    landmark: "Footer",
    nav: "mt-8 md:mt-0 md:ml-10 xl:ml-21",
    list: "flex flex-col items-center gap-8 md:flex-row md:gap-14",
    link: "v-nav-link text-label font-bold",
  },
  menu: {
    landmark: "Main",
    list: "flex flex-col gap-4",
    link: "text-h3 font-bold text-very-dark-blue transition-[color] duration-200 hover:text-dark-grey",
  },
};

type NavLinksProps = {
  variant: NavLinksVariant;
  onNavigate?: () => void;
};

export default function NavLinks({ variant, onNavigate }: NavLinksProps) {
  const pathname = usePathname();
  const route = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const { landmark, nav, list, link, underline } = variants[variant];

  return (
    <nav aria-label={landmark} className={nav}>
      <ul className={list}>
        {navLinks.map(({ label, href }) => {
          const current = route === href;

          return (
            <li key={href}>
              <Link
                href={href}
                onClick={onNavigate}
                aria-current={current ? "page" : undefined}
                className={cn("relative inline-block", link)}
              >
                {label}
                {underline && current && (
                  <span className="absolute -bottom-1.75 left-1/2 h-px w-6 -translate-x-1/2 bg-very-dark-blue" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
