import Link from "next/link";
import type { ReactNode } from "react";

import { ArrowIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children?: ReactNode;
  className?: string;
} & (
  { href: string; type?: never } | { href?: never; type: "button" | "submit" }
);

export default function Button({ children, className, ...rest }: ButtonProps) {
  const classes = cn(
    "v-btn shrink-0",
    children ? "h-18 gap-6 px-8" : "size-20 justify-center",
    className,
  );

  const content = (
    <>
      {children}
      <ArrowIcon className="h-5 w-6.5 shrink-0" />
    </>
  );

  if ("href" in rest && rest.href) {
    return (
      <Link href={rest.href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={rest.type} className={classes}>
      {content}
    </button>
  );
}
