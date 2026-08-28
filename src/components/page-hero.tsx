import type { PageHeroCopy } from "@/data";

type PageHeroProps = PageHeroCopy & {
  watermark: string;
};

export default function PageHero({
  watermark,
  heading,
  body,
  photo,
}: PageHeroProps) {
  return (
    <section className="md:px-24">
      <div className="relative mx-auto max-w-277.5 md:grid md:grid-cols-[58fr_515fr] md:grid-rows-[289px_1fr] lg:grid-cols-[482fr_153fr_475fr] lg:grid-rows-[217px_1fr]">
        <div className="relative h-60 overflow-clip md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3 md:h-180">
          <picture>
            <source
              media="(min-width: 64rem)"
              srcSet={photo.image.desktop.src}
            />
            <source
              media="(min-width: 48rem)"
              srcSet={photo.image.tablet.src}
            />
            <img
              src={photo.image.mobile.src}
              width={photo.image.mobile.width}
              height={photo.image.mobile.height}
              alt={photo.alt}
              fetchPriority="high"
              className="size-full object-cover"
            />
          </picture>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-b/srgb from-black/35 to-black/70 to-60%"
          />
        </div>

        <div className="relative -mt-11.25 mr-8 bg-white pt-16.25 pl-8 md:col-start-2 md:col-end-3 md:row-start-2 md:mt-0 md:mr-0 md:pt-22 md:pl-0 lg:col-end-4 lg:pt-40">
          <div className="md:ml-auto md:max-w-113.75 lg:max-w-111.25">
            <div className="hidden h-px w-16.25 bg-light-grey md:block" />
            <h1 className="text-h1-sm font-bold text-very-dark-blue md:mt-18.25 md:text-h2">
              {heading}
            </h1>
            <p className="mt-5.25 md:mt-10.75">{body}</p>
          </div>
        </div>

        <span
          aria-hidden="true"
          data-label={watermark}
          className="absolute right-0 hidden pr-[0.02em] text-watermark font-bold text-very-light-grey before:content-[attr(data-label)] md:top-51 md:block lg:top-32.5"
        />
      </div>
    </section>
  );
}
