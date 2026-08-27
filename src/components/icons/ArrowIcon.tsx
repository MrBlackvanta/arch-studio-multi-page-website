import type { SVGProps } from "react";

export default function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 26 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M15 1l9 9-9 9M0 10h24" />
    </svg>
  );
}
