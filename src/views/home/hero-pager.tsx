import type { HeroSlide } from "@/data";
import { cn } from "@/lib/utils";

type HeroPagerProps = {
  slides: HeroSlide[];
  current: number;
  onSelect: (index: number) => void;
};

export default function HeroPager({
  slides,
  current,
  onSelect,
}: HeroPagerProps) {
  return (
    <div className="absolute bottom-0 left-0 flex lg:-left-20">
      {slides.map(({ slug, lines }, index) => (
        <button
          key={slug}
          type="button"
          aria-current={index === current ? "true" : undefined}
          onClick={() => onSelect(index)}
          className={cn(
            "grid size-20 place-items-center text-label font-bold transition-[background-color,color] duration-200",
            index === current
              ? "bg-very-dark-blue text-white"
              : "bg-white text-medium-grey hover:bg-very-light-grey",
          )}
        >
          {`0${index + 1}`} <span className="sr-only">{lines.join(" ")}</span>
        </button>
      ))}
    </div>
  );
}
