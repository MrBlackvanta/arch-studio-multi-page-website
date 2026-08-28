import { aboutHeritage } from "@/data";

export default function Heritage() {
  const { lines, paragraphs, photo } = aboutHeritage;

  return (
    <section className="pt-19 md:pt-50">
      <div className="v-container lg:grid lg:grid-cols-[445fr_125fr_540fr]">
        <div className="lg:col-start-1 lg:row-start-1">
          <div className="h-px w-16.25 bg-light-grey" />
          <h2 className="mt-17 text-h2-sm font-bold text-very-dark-blue [--rise-shift:2.5rem] md:mt-12.25 md:text-h2 lg:mt-20.5">
            <span className="block v-reveal">{lines[0]}</span>{" "}
            <span className="block v-reveal">{lines[1]}</span>
          </h2>
          <div className="mt-5.5 space-y-6 [--rise-shift:1.5rem] md:mt-16.75 lg:mt-14.75">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="v-reveal">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="hidden lg:col-start-3 lg:row-start-1 lg:block">
          <img
            src={photo.image.src}
            width={photo.image.width}
            height={photo.image.height}
            alt={photo.alt}
            loading="lazy"
            className="h-142 w-full object-cover v-reveal [--rise-shift:3rem]"
          />
        </div>
      </div>
    </section>
  );
}
