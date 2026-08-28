import Button from "@/components/button";
import ProjectCard from "@/components/project-card";
import { featured } from "@/data";

const cascade = [
  "lg:[--reveal-start:0px]",
  "lg:[--reveal-start:40px]",
  "lg:[--reveal-start:80px]",
];

export default function Featured() {
  const { heading, cta, cardLabel, projects } = featured;

  return (
    <section className="pt-18.25 pb-18 md:pt-50 md:pb-50">
      <div className="v-container">
        <div className="flex items-end justify-between">
          <h2 className="text-h2-sm font-bold text-very-dark-blue md:text-h2">
            <span className="block v-clip">
              <span className="block v-reveal">{heading}</span>
            </span>
          </h2>
          <Button
            href={cta.href}
            className="hidden v-reveal [--rise-shift:1.5rem] md:inline-flex"
          >
            {cta.label}
          </Button>
        </div>

        <ul className="mt-10.75 grid gap-6 md:mt-21.25 lg:mt-16 lg:grid-cols-3 lg:gap-7.5">
          {projects.map(({ slug, name, photo }, index) => (
            <li key={slug} className={cascade[index]}>
              <ProjectCard
                href={cta.href}
                photo={photo}
                name={name}
                meta={cardLabel}
                heading="h3"
              >
                <span
                  aria-hidden="true"
                  className="absolute hidden text-numeral font-bold text-white/50 md:top-7.25 md:right-4 md:block lg:top-11.25 lg:-right-4"
                >
                  {index + 1}
                </span>
              </ProjectCard>
            </li>
          ))}
        </ul>

        <Button
          href={cta.href}
          className="mt-6 w-full justify-center v-reveal [--rise-shift:1.5rem] md:hidden"
        >
          {cta.label}
        </Button>
      </div>
    </section>
  );
}
