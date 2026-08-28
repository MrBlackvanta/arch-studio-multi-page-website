import heritage from "@/assets/about/desktop/image-heritage.webp";
import heroDesktop from "@/assets/about/desktop/image-hero.webp";
import heroMobile from "@/assets/about/mobile/image-hero.webp";
import heroTablet from "@/assets/about/tablet/image-hero.webp";

import type { AboutHeritageCopy, AboutHeroCopy } from "./types";

export const aboutHero: AboutHeroCopy = {
  heading: "Your team of professionals",
  body: "Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.",
  photo: {
    image: { mobile: heroMobile, tablet: heroTablet, desktop: heroDesktop },
    alt: "Hands typing at a laptop on a desk strewn with printed floor plans, a phone and drafting pens.",
  },
};

export const aboutHeritage: AboutHeritageCopy = {
  lines: ["Our", "Heritage"],
  paragraphs: [
    "Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.",
    "Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs.",
    "Our small team of world-class professionals provides input on every project.",
  ],
  photo: {
    image: heritage,
    alt: "The curved glass facade of a high-rise, its banded windows sweeping away across a pale sky.",
  },
};
