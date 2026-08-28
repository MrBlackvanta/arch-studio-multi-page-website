import heroDesktop from "@/assets/contact/desktop/image-hero.webp";
import mapDesktop from "@/assets/contact/desktop/image-map.webp";
import heroMobile from "@/assets/contact/mobile/image-hero.webp";
import mapMobile from "@/assets/contact/mobile/image-map.webp";
import heroTablet from "@/assets/contact/tablet/image-hero.webp";
import mapTablet from "@/assets/contact/tablet/image-map.webp";

import type {
  ContactDetailsCopy,
  ContactFormCopy,
  PageHeroCopy,
  ResponsivePhoto,
} from "./types";

export const contactHero: PageHeroCopy = {
  heading: "Tell us about your project",
  body: "We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!",
  photo: {
    image: { mobile: heroMobile, tablet: heroTablet, desktop: heroDesktop },
    alt: "A black vintage rotary telephone on a desk, its dial labelled for reception and room service.",
  },
};

export const contactDetails: ContactDetailsCopy = {
  lines: ["Contact", "Details"],
  mapLabel: "View on Map",
  offices: [
    {
      name: "Main Office",
      rows: [
        {
          label: "Mail :",
          value: "archone@mail.com",
          href: "mailto:archone@mail.com",
        },
        { label: "Address :", value: "1892  Chenoweth Drive TN" },
        { label: "Phone :", value: "123-456-3451", href: "tel:+11234563451" },
      ],
    },
    {
      name: "Office II",
      rows: [
        {
          label: "Mail :",
          value: "archtwo@mail.com",
          href: "mailto:archtwo@mail.com",
        },
        { label: "Address :", value: "3399  Wines Lane TX" },
        { label: "Phone :", value: "832-123-4321", href: "tel:+18321234321" },
      ],
    },
  ],
};

export const contactMap: ResponsivePhoto = {
  image: { mobile: mapMobile, tablet: mapTablet, desktop: mapDesktop },
  alt: "Map of the southern United States with a pin on each Arch Studio office, one east of Knoxville in Tennessee and one near Fort Worth in Texas.",
};

export const contactForm: ContactFormCopy = {
  lines: ["Connect", "with us"],
  fields: [
    { name: "name", label: "Name", autoComplete: "name" },
    { name: "email", label: "Email", type: "email", autoComplete: "email" },
    { name: "message", label: "Message", multiline: true },
  ],
  submitLabel: "Send message",
  emptyError: "Can’t be empty",
  emailError: "Invalid email",
  success: "Thanks! We’ll be in touch soon.",
};
