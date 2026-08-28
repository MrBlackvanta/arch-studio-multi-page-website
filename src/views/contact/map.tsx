import { contactMap } from "@/data";

export default function Map() {
  const { image, alt } = contactMap;

  return (
    <section className="pt-17.75 md:px-24 md:pt-56.5 lg:pt-49.75">
      <div id="map" className="mx-auto max-w-277.5 scroll-mt-8 overflow-clip">
        <picture>
          <source media="(min-width: 64rem)" srcSet={image.desktop.src} />
          <source media="(min-width: 48rem)" srcSet={image.tablet.src} />
          <img
            src={image.mobile.src}
            width={image.mobile.width}
            height={image.mobile.height}
            alt={alt}
            loading="lazy"
            className="h-91.75 w-full object-cover v-reveal [--rise-scale:1.06] [--rise-shift:0] md:h-140"
          />
        </picture>
      </div>
    </section>
  );
}
