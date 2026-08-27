import { welcome } from "@/data";

export default function Welcome() {
  const { lines, paragraphs, photo } = welcome;

  return (
    <section className="pt-18 md:pt-22.25 lg:pt-27">
      <div className="v-container">
        <div className="h-px w-16.25 bg-light-grey md:hidden" />
        <span
          aria-hidden="true"
          className="hidden text-watermark font-bold text-very-light-grey md:block"
        >
          Welcome
        </span>
        <div className="relative mt-17 md:-mt-10.25 lg:-mt-9.75 lg:grid lg:grid-cols-[190fr_445px_125fr_350px]">
          <h2 className="text-h2-sm font-bold text-very-dark-blue [--rise-shift:2.5rem] md:text-h2 lg:col-start-2">
            <span className="block v-reveal">{lines[0]}</span>{" "}
            <span className="block v-reveal">{lines[1]}</span>
          </h2>
          <div className="mt-5.5 space-y-6 [--rise-shift:1.5rem] md:mt-10.75 lg:col-start-2 lg:row-start-2">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="v-reveal">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="relative hidden lg:col-start-4 lg:row-start-1 lg:block">
            <img
              src={photo.image.src}
              width={photo.image.width}
              height={photo.image.height}
              alt={photo.alt}
              loading="lazy"
              className="absolute inset-x-0 -top-18.5 w-full v-reveal [--rise-shift:3rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
