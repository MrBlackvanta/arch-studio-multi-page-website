import heroDesktop from "@/assets/about/desktop/image-hero.webp";
import heroMobile from "@/assets/about/mobile/image-hero.webp";
import heroTablet from "@/assets/about/tablet/image-hero.webp";

import type { AboutHeroCopy } from "./types";

export const aboutHero: AboutHeroCopy = {
  heading: "Your team of professionals",
  body: "Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.",
  photo: {
    image: { mobile: heroMobile, tablet: heroTablet, desktop: heroDesktop },
    alt: "Hands typing at a laptop on a desk strewn with printed floor plans, a phone and drafting pens.",
  },
};
