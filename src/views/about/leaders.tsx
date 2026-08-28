import { aboutLeaders, socialLinks } from "@/data";
import { cn } from "@/lib/utils";

export default function Leaders() {
  const { lines, people } = aboutLeaders;

  return (
    <section className="pt-28 pb-27.75 md:pt-57.75 md:pb-59.75 lg:pt-50 lg:pb-39.75">
      <div className="v-container lg:grid lg:grid-cols-[380fr_730fr]">
        <h2 className="text-h2-sm font-bold text-very-dark-blue md:text-h2">
          <span className="block v-clip">
            <span className="block v-reveal">{lines[0]}</span>
          </span>{" "}
          <span className="block v-clip">
            <span className="block v-reveal">{lines[1]}</span>
          </span>
        </h2>

        <ul className="mt-13.75 grid gap-x-3 gap-y-19.75 md:mt-12.25 md:grid-cols-2 md:gap-y-25.75 lg:mt-0 lg:gap-x-7.5 lg:gap-y-15.75">
          {people.map(({ name, role, avatar }, index) => (
            <li
              key={name}
              className={cn(
                "v-reveal [--rise-shift:2rem]",
                index % 2 === 1 && "md:[--reveal-start:40px]",
              )}
            >
              <div className="group relative">
                <img
                  src={avatar.src}
                  width={avatar.width}
                  height={avatar.height}
                  alt=""
                  loading="lazy"
                  className="w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-8 bg-black/50 opacity-0 transition-opacity duration-300 group-focus-within:opacity-100 group-hover:opacity-100">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={`${name} on ${label}`}
                      className="translate-y-1.5 text-white transition-transform duration-500 group-focus-within:translate-y-0 group-hover:translate-y-0 focus-visible:outline-current"
                    >
                      <Icon className="w-10" />
                    </a>
                  ))}
                </div>
              </div>

              <h3 className="mt-3.75 text-h3 font-bold text-very-dark-blue">
                {name}
              </h3>
              <p className="text-very-dark-blue/75">{role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
