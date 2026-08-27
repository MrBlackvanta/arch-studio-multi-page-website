import heroFederalDesktop from "@/assets/home/desktop/image-hero-federal.webp";
import heroParamourDesktop from "@/assets/home/desktop/image-hero-paramour.webp";
import heroSeraphDesktop from "@/assets/home/desktop/image-hero-seraph.webp";
import heroTrinityDesktop from "@/assets/home/desktop/image-hero-trinity.webp";
import heroFederalMobile from "@/assets/home/mobile/image-hero-federal.webp";
import heroParamourMobile from "@/assets/home/mobile/image-hero-paramour.webp";
import heroSeraphMobile from "@/assets/home/mobile/image-hero-seraph.webp";
import heroTrinityMobile from "@/assets/home/mobile/image-hero-trinity.webp";
import heroFederalTablet from "@/assets/home/tablet/image-hero-federal.webp";
import heroParamourTablet from "@/assets/home/tablet/image-hero-paramour.webp";
import heroSeraphTablet from "@/assets/home/tablet/image-hero-seraph.webp";
import heroTrinityTablet from "@/assets/home/tablet/image-hero-trinity.webp";

import type { HeroSlide } from "./types";

export const heroSlides: HeroSlide[] = [
  {
    slug: "paramour",
    lines: ["Project", "Paramour"],
    description:
      "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
    alt: "Looking up the faceted blue glass ridge of Project Paramour against a clear sky.",
    image: {
      mobile: heroParamourMobile,
      tablet: heroParamourTablet,
      desktop: heroParamourDesktop,
    },
  },
  {
    slug: "seraph",
    lines: ["Seraph", "Station"],
    description:
      "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
    alt: "The white concourse of Seraph Station, lit by a single ribbon of neon across its dark ceiling.",
    image: {
      mobile: heroSeraphMobile,
      tablet: heroSeraphTablet,
      desktop: heroSeraphDesktop,
    },
  },
  {
    slug: "federal",
    lines: ["Federal II", "Tower"],
    description:
      "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
    alt: "Looking up the deeply ribbed dark facade of Federal II Tower against a pale sky.",
    image: {
      mobile: heroFederalMobile,
      tablet: heroFederalTablet,
      desktop: heroFederalDesktop,
    },
  },
  {
    slug: "trinity",
    lines: ["Trinity Bank", "Tower"],
    description:
      "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
    alt: "The curving steel lattice of Trinity Bank Tower rising against a deep teal sky.",
    image: {
      mobile: heroTrinityMobile,
      tablet: heroTrinityTablet,
      desktop: heroTrinityDesktop,
    },
  },
];
