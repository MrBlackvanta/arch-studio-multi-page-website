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

export type ResponsivePhoto = {
  image: ResponsiveImage;
  alt: string;
};

export type WelcomeCopy = {
  lines: [string, string];
  paragraphs: string[];
  photo: Photo;
};

export type SmallTeamCopy = {
  lines: [string, string];
  cta: NavLink;
  photo: ResponsivePhoto;
};

export type FeaturedProject = {
  slug: string;
  name: string;
  photo: ResponsivePhoto;
};

export type FeaturedCopy = {
  heading: string;
  cta: NavLink;
  cardLabel: string;
  projects: FeaturedProject[];
};

export type AboutHeroCopy = {
  heading: string;
  body: string;
  photo: ResponsivePhoto;
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
