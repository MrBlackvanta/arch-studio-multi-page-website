import tower228bDesktop from "@/assets/portfolio/desktop/image-228b.webp";
import delSolDesktop from "@/assets/portfolio/desktop/image-del-sol.webp";
import edelweissDesktop from "@/assets/portfolio/desktop/image-edelweiss.webp";
import eeboxDesktop from "@/assets/portfolio/desktop/image-eebox.webp";
import federalDesktop from "@/assets/portfolio/desktop/image-federal.webp";
import hypersDesktop from "@/assets/portfolio/desktop/image-hypers.webp";
import netcryDesktop from "@/assets/portfolio/desktop/image-netcry.webp";
import paramourDesktop from "@/assets/portfolio/desktop/image-paramour.webp";
import prototypeDesktop from "@/assets/portfolio/desktop/image-prototype.webp";
import seraphDesktop from "@/assets/portfolio/desktop/image-seraph.webp";
import sxivDesktop from "@/assets/portfolio/desktop/image-sxiv.webp";
import trinityDesktop from "@/assets/portfolio/desktop/image-trinity.webp";
import tower228bMobile from "@/assets/portfolio/mobile/image-228b.webp";
import delSolMobile from "@/assets/portfolio/mobile/image-del-sol.webp";
import edelweissMobile from "@/assets/portfolio/mobile/image-edelweiss.webp";
import eeboxMobile from "@/assets/portfolio/mobile/image-eebox.webp";
import federalMobile from "@/assets/portfolio/mobile/image-federal.webp";
import hypersMobile from "@/assets/portfolio/mobile/image-hypers.webp";
import netcryMobile from "@/assets/portfolio/mobile/image-netcry.webp";
import paramourMobile from "@/assets/portfolio/mobile/image-paramour.webp";
import prototypeMobile from "@/assets/portfolio/mobile/image-prototype.webp";
import seraphMobile from "@/assets/portfolio/mobile/image-seraph.webp";
import sxivMobile from "@/assets/portfolio/mobile/image-sxiv.webp";
import trinityMobile from "@/assets/portfolio/mobile/image-trinity.webp";
import tower228bTablet from "@/assets/portfolio/tablet/image-228b.webp";
import delSolTablet from "@/assets/portfolio/tablet/image-del-sol.webp";
import edelweissTablet from "@/assets/portfolio/tablet/image-edelweiss.webp";
import eeboxTablet from "@/assets/portfolio/tablet/image-eebox.webp";
import federalTablet from "@/assets/portfolio/tablet/image-federal.webp";
import hypersTablet from "@/assets/portfolio/tablet/image-hypers.webp";
import netcryTablet from "@/assets/portfolio/tablet/image-netcry.webp";
import paramourTablet from "@/assets/portfolio/tablet/image-paramour.webp";
import prototypeTablet from "@/assets/portfolio/tablet/image-prototype.webp";
import seraphTablet from "@/assets/portfolio/tablet/image-seraph.webp";
import sxivTablet from "@/assets/portfolio/tablet/image-sxiv.webp";
import trinityTablet from "@/assets/portfolio/tablet/image-trinity.webp";

import type { Project } from "./types";

const seraph: Project = {
  slug: "seraph",
  name: "Seraph Station",
  date: "September 2019",
  dateTime: "2019-09",
  photo: {
    image: {
      mobile: seraphMobile,
      tablet: seraphTablet,
      desktop: seraphDesktop,
    },
    alt: "Two figures far down the white concourse of Seraph Station, a neon ribbon zig-zagging across its dark ceiling.",
  },
};

const eebox: Project = {
  slug: "eebox",
  name: "Eebox Building",
  date: "August 2017",
  dateTime: "2017-08",
  photo: {
    image: { mobile: eeboxMobile, tablet: eeboxTablet, desktop: eeboxDesktop },
    alt: "A folded magenta and violet flank of the Eebox Building meeting pale blue sky at a knife-sharp edge.",
  },
};

const federal: Project = {
  slug: "federal",
  name: "Federal II Tower",
  date: "March 2017",
  dateTime: "2017-03",
  photo: {
    image: {
      mobile: federalMobile,
      tablet: federalTablet,
      desktop: federalDesktop,
    },
    alt: "The ribbed dark flank of Federal II Tower running away into a cream-coloured sky.",
  },
};

const delSol: Project = {
  slug: "del-sol",
  name: "Project Del Sol",
  date: "January 2016",
  dateTime: "2016-01",
  photo: {
    image: {
      mobile: delSolMobile,
      tablet: delSolTablet,
      desktop: delSolDesktop,
    },
    alt: "A pale tiled walkway beside a turquoise reflecting pool, with a domed hall and a slender white mast beyond.",
  },
};

const lePrototype: Project = {
  slug: "prototype",
  name: "Le Prototype",
  date: "October 2015",
  dateTime: "2015-10",
  photo: {
    image: {
      mobile: prototypeMobile,
      tablet: prototypeTablet,
      desktop: prototypeDesktop,
    },
    alt: "Stacked white terraces and a slim glass balustrade set against a bright turquoise sky.",
  },
};

const tower228b: Project = {
  slug: "228b",
  name: "228B Tower",
  date: "April 2015",
  dateTime: "2015-04",
  photo: {
    image: {
      mobile: tower228bMobile,
      tablet: tower228bTablet,
      desktop: tower228bDesktop,
    },
    alt: "A polished steel arch soaring into a cloudless sky, sunlight catching its curved inner edge.",
  },
};

const edelweiss: Project = {
  slug: "edelweiss",
  name: "Grand Edelweiss Hotel",
  date: "December 2013",
  dateTime: "2013-12",
  photo: {
    image: {
      mobile: edelweissMobile,
      tablet: edelweissTablet,
      desktop: edelweissDesktop,
    },
    alt: "The glazed tower of the Grand Edelweiss Hotel tapering to a point, one bronze flank warm against a pale sky.",
  },
};

const netcry: Project = {
  slug: "netcry",
  name: "Netcry Tower",
  date: "August 2012",
  dateTime: "2012-08",
  photo: {
    image: {
      mobile: netcryMobile,
      tablet: netcryTablet,
      desktop: netcryDesktop,
    },
    alt: "Looking up into Netcry Tower's white atrium roof, its glazed lattice fanning out from a curved beam.",
  },
};

const hypers: Project = {
  slug: "hypers",
  name: "Hypers",
  date: "January 2012",
  dateTime: "2012-01",
  photo: {
    image: {
      mobile: hypersMobile,
      tablet: hypersTablet,
      desktop: hypersDesktop,
    },
    alt: "Red steel beams crossing overhead at Hypers, an aeroplane passing through the slice of bright sky between them.",
  },
};

const sxiv: Project = {
  slug: "sxiv",
  name: "SXIV Tower",
  date: "March 2011",
  dateTime: "2011-03",
  photo: {
    image: { mobile: sxivMobile, tablet: sxivTablet, desktop: sxivDesktop },
    alt: "The banded facade of SXIV Tower curving away in black and white, ribbon windows following the sweep.",
  },
};

const trinity: Project = {
  slug: "trinity",
  name: "Trinity Bank Tower",
  date: "September 2010",
  dateTime: "2010-09",
  photo: {
    image: {
      mobile: trinityMobile,
      tablet: trinityTablet,
      desktop: trinityDesktop,
    },
    alt: "The white steel lattice of Trinity Bank Tower curving upward against a deep teal sky.",
  },
};

const paramour: Project = {
  slug: "paramour",
  name: "Project Paramour",
  date: "February 2008",
  dateTime: "2008-02",
  photo: {
    image: {
      mobile: paramourMobile,
      tablet: paramourTablet,
      desktop: paramourDesktop,
    },
    alt: "The triangulated blue glass skin of Project Paramour, its ridge catching the light against a clear sky.",
  },
};

export const projects: Project[] = [
  seraph,
  eebox,
  federal,
  delSol,
  lePrototype,
  tower228b,
  edelweiss,
  netcry,
  hypers,
  sxiv,
  trinity,
  paramour,
];

export const featuredProjects: Project[] = [delSol, tower228b, lePrototype];
