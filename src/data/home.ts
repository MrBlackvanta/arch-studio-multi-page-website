import heroFederalDesktop from "@/assets/home/desktop/image-hero-federal.webp";
import heroParamourDesktop from "@/assets/home/desktop/image-hero-paramour.webp";
import heroSeraphDesktop from "@/assets/home/desktop/image-hero-seraph.webp";
import heroTrinityDesktop from "@/assets/home/desktop/image-hero-trinity.webp";
import smallTeamDesktop from "@/assets/home/desktop/image-small-team.webp";
import welcomePhoto from "@/assets/home/desktop/image-welcome.webp";
import heroFederalMobile from "@/assets/home/mobile/image-hero-federal.webp";
import heroParamourMobile from "@/assets/home/mobile/image-hero-paramour.webp";
import heroSeraphMobile from "@/assets/home/mobile/image-hero-seraph.webp";
import heroTrinityMobile from "@/assets/home/mobile/image-hero-trinity.webp";
import smallTeamMobile from "@/assets/home/mobile/image-small-team.webp";
import heroFederalTablet from "@/assets/home/tablet/image-hero-federal.webp";
import heroParamourTablet from "@/assets/home/tablet/image-hero-paramour.webp";
import heroSeraphTablet from "@/assets/home/tablet/image-hero-seraph.webp";
import heroTrinityTablet from "@/assets/home/tablet/image-hero-trinity.webp";
import smallTeamTablet from "@/assets/home/tablet/image-small-team.webp";
import featured228bDesktop from "@/assets/portfolio/desktop/image-228b.webp";
import featuredDelSolDesktop from "@/assets/portfolio/desktop/image-del-sol.webp";
import featuredPrototypeDesktop from "@/assets/portfolio/desktop/image-prototype.webp";
import featured228bMobile from "@/assets/portfolio/mobile/image-228b.webp";
import featuredDelSolMobile from "@/assets/portfolio/mobile/image-del-sol.webp";
import featuredPrototypeMobile from "@/assets/portfolio/mobile/image-prototype.webp";
import featured228bTablet from "@/assets/portfolio/tablet/image-228b.webp";
import featuredDelSolTablet from "@/assets/portfolio/tablet/image-del-sol.webp";
import featuredPrototypeTablet from "@/assets/portfolio/tablet/image-prototype.webp";

import type {
  FeaturedCopy,
  HeroSlide,
  SmallTeamCopy,
  WelcomeCopy,
} from "./types";

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

export const welcome: WelcomeCopy = {
  lines: ["Welcome to", "Arch Studio"],
  paragraphs: [
    "We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.",
    "Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.",
    "We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.",
  ],
  photo: {
    image: welcomePhoto,
    alt: "Two curved, steel-panelled walls of a building meeting at a knife-sharp edge under a pale sky.",
  },
};

export const smallTeam: SmallTeamCopy = {
  lines: ["Small team,", "big ideas"],
  cta: { label: "About Us", href: "/about" },
  photo: {
    image: {
      mobile: smallTeamMobile,
      tablet: smallTeamTablet,
      desktop: smallTeamDesktop,
    },
    alt: "White cubic museum pavilions standing in still, shallow water, a perforated steel dome rising behind them.",
  },
};

export const featured: FeaturedCopy = {
  heading: "Featured",
  cta: { label: "See All", href: "/portfolio" },
  cardLabel: "View All Projects",
  projects: [
    {
      slug: "del-sol",
      name: "Project Del Sol",
      photo: {
        image: {
          mobile: featuredDelSolMobile,
          tablet: featuredDelSolTablet,
          desktop: featuredDelSolDesktop,
        },
        alt: "A pale tiled walkway beside a turquoise reflecting pool, with a domed hall and a slender white mast beyond.",
      },
    },
    {
      slug: "228b",
      name: "228B Tower",
      photo: {
        image: {
          mobile: featured228bMobile,
          tablet: featured228bTablet,
          desktop: featured228bDesktop,
        },
        alt: "A polished steel arch soaring into a cloudless sky, sunlight catching its curved inner edge.",
      },
    },
    {
      slug: "prototype",
      name: "Le Prototype",
      photo: {
        image: {
          mobile: featuredPrototypeMobile,
          tablet: featuredPrototypeTablet,
          desktop: featuredPrototypeDesktop,
        },
        alt: "Stacked white terraces and a slim glass balustrade set against a bright turquoise sky.",
      },
    },
  ],
};
