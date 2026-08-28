"use client";

import { useState } from "react";

import Button from "@/components/button";
import { heroSlides } from "@/data";
import { cn } from "@/lib/utils";

import HeroPager from "./hero-pager";

const rise = "motion-safe:v-enter";

export default function Hero() {
  const [{ current, moves }, setSlide] = useState({ current: 0, moves: 0 });
  const { lines, description } = heroSlides[current];
  const entering = moves > 0;

  const select = (index: number) => {
    if (index === current) return;
    setSlide(({ moves }) => ({ current: index, moves: moves + 1 }));
  };

  return (
    <section className="md:px-24">
      <div className="relative mx-auto h-140 max-w-277.5 md:h-180">
        <div className="absolute inset-0 overflow-clip">
          {heroSlides.map(({ slug, alt, image }, index) => (
            <picture key={slug}>
              <source media="(min-width: 64rem)" srcSet={image.desktop.src} />
              <source media="(min-width: 48rem)" srcSet={image.tablet.src} />
              <img
                src={image.mobile.src}
                width={image.mobile.width}
                height={image.mobile.height}
                alt={alt}
                fetchPriority={index === 0 ? "high" : "low"}
                loading={index === 0 ? "eager" : "lazy"}
                className={cn(
                  "absolute inset-0 size-full object-cover transition-opacity duration-700 ease-out motion-reduce:transition-none",
                  index === current ? "opacity-100" : "opacity-0",
                )}
              />
            </picture>
          ))}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-b/srgb from-black/35 to-black/70 to-60%"
          />
        </div>

        <div className="relative flex h-full flex-col pt-29 pr-8 pb-27.5 pl-8 md:pt-46.5 md:pr-0 md:pb-44.75 md:pl-14.5 lg:pl-47.5">
          <div aria-live="polite" aria-atomic="true">
            <div key={moves}>
              <h1 className="text-hero-sm font-bold text-white md:text-h1">
                <span className="block v-clip">
                  <span className={cn("block", entering && rise)}>
                    {lines[0]}
                  </span>
                </span>{" "}
                <span className="block v-clip">
                  <span
                    className={cn(
                      "block [--rise-delay:110ms]",
                      entering && rise,
                    )}
                  >
                    {lines[1]}
                  </span>
                </span>
              </h1>
              <div className="mt-2.5 v-clip">
                <p
                  className={cn(
                    "text-white [--rise-delay:220ms] md:max-w-114.25 lg:max-w-111.25",
                    entering && rise,
                  )}
                >
                  {description}
                </p>
              </div>
            </div>
          </div>

          <Button href="/portfolio" className="mt-auto self-start">
            See Our Portfolio
          </Button>
        </div>

        <HeroPager slides={heroSlides} current={current} onSelect={select} />
      </div>
    </section>
  );
}
