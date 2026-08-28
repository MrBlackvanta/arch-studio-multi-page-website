import type { NavLink } from "./types";

export const siteUrl =
  "https://arch-studio-multi-page-website.abdelrhman-ahmed8881.workers.dev";

export const routes = ["/", "/portfolio", "/about", "/contact"];

export const navLinks: NavLink[] = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];
