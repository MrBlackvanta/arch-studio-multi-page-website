type PageRailProps = {
  label: string;
};

export default function PageRail({ label }: PageRailProps) {
  return (
    <span
      aria-hidden="true"
      data-label={label}
      className="absolute top-0 left-15.5 hidden text-body tracking-rail whitespace-nowrap text-light-grey uppercase [writing-mode:vertical-rl] before:content-[attr(data-label)] md:block lg:left-21.75"
    />
  );
}
