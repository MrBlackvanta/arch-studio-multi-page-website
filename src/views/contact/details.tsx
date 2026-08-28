import { Fragment } from "react";

import { ArrowIcon } from "@/components/icons";
import { contactDetails } from "@/data";
import { cn } from "@/lib/utils";

export default function Details() {
  const { lines, mapLabel, offices } = contactDetails;

  return (
    <section className="pt-25 md:pt-50">
      <div className="v-container lg:grid lg:grid-cols-3 lg:gap-x-7.5">
        <div className="lg:col-start-1 lg:row-start-1">
          <div className="h-px w-16.25 bg-light-grey" />
          <h2 className="mt-17 text-h2-sm font-bold text-very-dark-blue md:mt-12.25 md:text-h2 lg:mt-18.25">
            <span className="block v-clip">
              <span className="block md:v-reveal">{lines[0]}</span>
            </span>{" "}
            <span className="block v-clip">
              <span className="block md:v-reveal">{lines[1]}</span>
            </span>
          </h2>
        </div>

        <ul className="mt-10 md:mt-10.5 lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:mt-19 lg:grid lg:grid-cols-2 lg:gap-x-7.5">
          {offices.map(({ name, rows }, index) => (
            <li
              key={name}
              className={cn(
                "v-reveal [--rise-shift:2rem] md:flex md:justify-between lg:grid lg:grid-rows-[1fr_auto]",
                index === 1 &&
                  "mt-10 md:mt-10.75 lg:mt-0 lg:[--reveal-start:40px]",
              )}
            >
              <div>
                <h3 className="leading-8.75 font-bold">{name}</h3>
                <dl className="mt-3.5 grid grid-cols-[max-content_minmax(0,1fr)] gap-x-6">
                  {rows.map(({ label, value, href }) => (
                    <Fragment key={label}>
                      <dt>{label}</dt>
                      <dd>
                        {href ? (
                          <a
                            href={href}
                            className="transition-[color] duration-200 hover:text-very-dark-blue"
                          >
                            {value}
                          </a>
                        ) : (
                          value
                        )}
                      </dd>
                    </Fragment>
                  ))}
                </dl>
              </div>

              <a
                href="#map"
                className="group mt-10.75 flex w-fit items-center gap-6 text-label font-bold text-very-dark-blue md:mt-20.75 md:self-start lg:mt-14.75"
              >
                <span>
                  {mapLabel}
                  <span className="sr-only"> ({name})</span>
                </span>
                <ArrowIcon className="h-5 w-6.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
