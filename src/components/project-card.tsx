import Link from "next/link";
import type { ReactNode } from "react";

import type { ResponsivePhoto } from "@/data";

type ProjectCardProps = {
  href: string;
  photo: ResponsivePhoto;
  name: string;
  meta: ReactNode;
  heading: "h2" | "h3";
  eager?: boolean;
  children?: ReactNode;
};

export default function ProjectCard({
  href,
  photo,
  name,
  meta,
  heading: Heading,
  eager = false,
  children,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group relative block h-60 overflow-clip lg:h-140"
    >
      <picture>
        <source media="(min-width: 64rem)" srcSet={photo.image.desktop.src} />
        <source media="(min-width: 48rem)" srcSet={photo.image.tablet.src} />
        <img
          src={photo.image.mobile.src}
          width={photo.image.mobile.width}
          height={photo.image.mobile.height}
          alt={photo.alt}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : undefined}
          className="absolute inset-0 size-full object-cover v-reveal [--rise-scale:1.06] [--rise-shift:0]"
        />
      </picture>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-white/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-full bg-linear-to-b/srgb from-black/0 to-black/60 to-50% lg:h-1/2"
      />

      {children}

      <div className="absolute bottom-6 left-6 v-clip md:bottom-10 md:left-10">
        <div className="v-reveal [--reveal-span:8rem]">
          <Heading className="text-h3 font-bold text-white">{name}</Heading>
          <span className="block text-white">{meta}</span>
        </div>
      </div>
    </Link>
  );
}
