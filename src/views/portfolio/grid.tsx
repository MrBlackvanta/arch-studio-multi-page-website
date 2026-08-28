import ProjectCard from "@/components/project-card";
import { projects } from "@/data";

const cascade = [
  "lg:[--reveal-start:0px]",
  "lg:[--reveal-start:40px]",
  "lg:[--reveal-start:80px]",
];

export default function ProjectGrid() {
  return (
    <section className="pt-14 pb-18 md:pt-0 md:pb-50 lg:pb-40">
      <div className="v-container">
        <h1 className="sr-only">Portfolio</h1>

        <ul className="grid gap-6 lg:grid-cols-3 lg:gap-x-7.5 lg:gap-y-8">
          {projects.map(({ slug, name, date, dateTime, photo }, index) => (
            <li key={slug} className={cascade[index % cascade.length]}>
              <ProjectCard
                href="#"
                photo={photo}
                name={name}
                meta={<time dateTime={dateTime}>{date}</time>}
                heading="h2"
                eager={index < cascade.length}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
