import Button from "@/components/button";
import { smallTeam } from "@/data";

export default function SmallTeam() {
  const { lines, cta, photo } = smallTeam;

  return (
    <section className="pt-28.25 md:px-24 md:pt-58.25 lg:pt-52.75">
      <div className="relative mx-auto h-140 max-w-277.5 overflow-clip">
        <picture>
          <source media="(min-width: 64rem)" srcSet={photo.image.desktop.src} />
          <source media="(min-width: 48rem)" srcSet={photo.image.tablet.src} />
          <img
            src={photo.image.mobile.src}
            width={photo.image.mobile.width}
            height={photo.image.mobile.height}
            alt={photo.alt}
            loading="lazy"
            className="absolute inset-0 size-full object-cover v-reveal [--reveal-span:30rem] [--rise-scale:1.08] [--rise-shift:0]"
          />
        </picture>

        <div className="relative flex h-full flex-col items-start justify-center gap-6 bg-black/50 pl-8 md:pl-14.5 lg:pl-47.5">
          <h2 className="text-h2-sm font-bold text-white md:text-h2">
            <span className="block v-clip">
              <span className="block v-reveal">{lines[0]}</span>
            </span>{" "}
            <span className="block v-clip">
              <span className="block v-reveal">{lines[1]}</span>
            </span>
          </h2>

          <Button href={cta.href} className="v-reveal [--rise-shift:1.5rem]">
            {cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
