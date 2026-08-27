"use client";

import { useEffect, useRef, useState } from "react";

import { CloseIcon, MenuIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

import NavLinks from "./nav-links";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const dismiss = () => setOpen(false);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };

    const { scrollY } = window;
    const { style } = document.body;
    const behind = document.querySelectorAll("main, footer");

    style.position = "fixed";
    style.top = `-${scrollY}px`;
    style.insetInline = "0";
    behind.forEach((element) => element.setAttribute("inert", ""));
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("popstate", dismiss);

    return () => {
      style.position = "";
      style.top = "";
      style.insetInline = "";
      behind.forEach((element) => element.removeAttribute("inert"));
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("popstate", dismiss);
      window.scrollTo({ top: scrollY, behavior: "instant" });
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    toggleRef.current?.focus();
  };

  return (
    <div className="contents md:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
        className="-my-3.5 -mr-3.5 ml-auto p-3.5 text-very-dark-blue"
      >
        {open ? (
          <CloseIcon className="h-5.25 w-5" />
        ) : (
          <MenuIcon className="h-4.25 w-6" />
        )}
      </button>

      <button
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        onClick={close}
        className={cn(
          "fixed inset-x-0 top-24 bottom-0 bg-black/50 transition-[opacity,visibility] duration-500 ease-out motion-reduce:transition-none",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      />

      <div
        id="mobile-menu"
        className={cn(
          "fixed top-24 right-0 left-8 bg-very-light-grey py-10 pl-12 transition-[clip-path,visibility] duration-500 ease-out motion-reduce:transition-none",
          open
            ? "visible [clip-path:inset(0)]"
            : "invisible [clip-path:inset(0_0_100%_0)]",
        )}
      >
        <NavLinks variant="menu" onNavigate={() => setOpen(false)} />
      </div>
    </div>
  );
}
