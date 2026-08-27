import { LinkedInIcon, TwitterIcon } from "@/components/icons";
import type { NavLink, SocialLink } from "./types";

export const siteUrl =
  "https://arch-studio-multi-page-website.abdelrhman-ahmed8881.workers.dev";

export const routes = ["/", "/portfolio", "/about", "/contact"];

export const navLinks: NavLink[] = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "#", icon: LinkedInIcon },
  { label: "Twitter", href: "#", icon: TwitterIcon },
];
