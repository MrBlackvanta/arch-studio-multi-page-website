import { ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "watermark",
            "numeral",
            "h1",
            "h1-sm",
            "hero-sm",
            "h2",
            "h2-sm",
            "h3",
            "field",
            "body",
            "label",
            "error",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
