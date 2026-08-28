import Link from "next/link";

import Button from "@/components/button";
import { featured } from "@/data";

const cascade = [
  "lg:[--reveal-start:0px]",
  "lg:[--reveal-start:40px]",
  "lg:[--reveal-start:80px]",
];

export default function Featured() {
  const { heading, cta, cardLabel, projects } = featured;

  return (
    <section className="pt-18.25 md:pt-50">
      <div className="v-container">
        <div className="flex items-end justify-between">
          <h2 className="text-h2-sm font-bold text-very-dark-blue md:text-h2">
            <span className="block v-clip">
              <span className="block v-reveal">{heading}</span>
            </span>
          </h2>
          <Button
            href={cta.href}
            className="hidden v-reveal [--rise-shift:1.5rem] md:inline-flex"
          >
            {cta.label}
          </Button>
        </div>

        <ul className="mt-10.75 grid gap-6 md:mt-21.25 lg:mt-16 lg:grid-cols-3 lg:gap-7.5">
          {projects.map(({ slug, name, photo }, index) => (
            <li key={slug} className={cascade[index]}>
              <Link
                href={cta.href}
                className="relative block h-60 overflow-clip lg:h-140"
              >
                <picture>
                  <source
                    media="(min-width: 64rem)"
                    srcSet={photo.image.desktop.src}
                  />
                  <source
                    media="(min-width: 48rem)"
                    srcSet={photo.image.tablet.src}
                  />
                  <img
                    src={photo.image.mobile.src}
                    width={photo.image.mobile.width}
                    height={photo.image.mobile.height}
                    alt={photo.alt}
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover v-reveal [--rise-scale:1.06] [--rise-shift:0]"
                  />
                </picture>

                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-full bg-linear-to-b/srgb from-black/0 to-black/75 lg:h-1/2"
                />

                <span
                  aria-hidden="true"
                  className="absolute hidden text-numeral font-bold text-white/50 md:top-7.25 md:right-4 md:block lg:top-11.25 lg:-right-4"
                >
                  {index + 1}
                </span>

                <div className="absolute bottom-6 left-6 v-clip md:bottom-10 md:left-10">
                  <div className="v-reveal [--reveal-span:8rem]">
                    <h3 className="text-h3 font-bold text-white">{name}</h3>
                    <span className="block text-white">{cardLabel}</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <Button
          href={cta.href}
          className="mt-6 w-full justify-center v-reveal [--rise-shift:1.5rem] md:hidden"
        >
          {cta.label}
        </Button>
      </div>
    </section>
  );
}
