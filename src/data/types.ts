import type { StaticImageData } from "next/image";
import type { ComponentType, SVGProps } from "react";

export type ResponsiveImage = {
  mobile: StaticImageData;
  tablet: StaticImageData;
  desktop: StaticImageData;
};

export type HeroSlide = {
  slug: string;
  lines: [string, string];
  description: string;
  alt: string;
  image: ResponsiveImage;
};

export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = NavLink & {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};
