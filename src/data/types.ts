import type { StaticImageData } from "next/image";
import type { ComponentType, SVGProps } from "react";

export type ResponsiveImage = {
  mobile: StaticImageData;
  tablet: StaticImageData;
  desktop: StaticImageData;
};

export type Photo = {
  image: StaticImageData;
  alt: string;
};

export type WelcomeCopy = {
  lines: [string, string];
  paragraphs: string[];
  photo: Photo;
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
