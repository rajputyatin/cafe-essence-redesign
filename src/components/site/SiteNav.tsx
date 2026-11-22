import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { LogoMark } from "./Logo";

const NAV = [
  { href: "#menu", label: "Menu" },
  { href: "#story", label: "Our Story" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,color,border-color,backdrop-filter] duration-500",
        solid
          ? "border-border bg-background/90 text-foreground backdrop-blur-md"
          : "border-transparent bg-transparent text-espresso-foreground",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 md:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="The Yellow Oven home">
          <LogoMark />
          <span className="leading-tight">
            <span className="block font-serif text-[1.05rem] font-bold tracking-[0.06em]">THE YELLOW OVEN</span>
            <span className="block text-[0.66rem] uppercase tracking-[0.2em] opacity-70">Baked with love · Ahmedabad</span>
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-9 text-sm font-medium">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="group relative py-1">
                  {n.label}
                  <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#location"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
          >
            Visit us
          </a>
          <button
            type="button"
            className="relative flex size-10 items-center justify-center md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={cn("absolute h-0.5 w-6 bg-current transition-transform duration-300", open ? "rotate-45" : "-translate-y-1.5")} />
            <span className={cn("absolute h-0.5 w-6 bg-current transition-opacity duration-300", open && "opacity-0")} />
            <span className={cn("absolute h-0.5 w-6 bg-current transition-transform duration-300", open ? "-rotate-45" : "translate-y-1.5")} />
          </button>
        </div>
      </div>

      <div
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows] duration-500 md:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0">
          <div className="flex flex-col gap-1 px-5 pb-6 pt-2">
            {[...NAV.slice(0, 2), { href: "#location", label: "Location & Hours" }, NAV[3]!].map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 font-serif text-2xl"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#location"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-primary py-3 text-center text-sm font-bold text-primary-foreground"
            >
              Visit us in Bodakdev
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
