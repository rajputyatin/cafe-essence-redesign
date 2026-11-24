import { ArrowUpRight, Navigation } from "lucide-react";
import { LINKS } from "@/lib/site-data";
import { OvenArch } from "./OvenArch";
import { useScrollY } from "./hooks";

const FACTS = [
  { value: "11 AM – 1 AM", label: "Late-night sanctuary, every day" },
  { value: "Pure Callebaut", label: "100% palm-oil free kitchen" },
  { value: "Bodakdev", label: "Judges Bunglow Road" },
];

export function Hero() {
  const y = useScrollY();

  return (
    <section id="top" className="grain relative overflow-hidden bg-espresso text-espresso-foreground">
      {/* faint warm wash from the oven side */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/4 size-[720px] rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-14 px-5 pb-16 pt-32 md:px-8 lg:grid-cols-[1.15fr_1fr] lg:pt-28">
        <div>
          <p className="soft-in flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.24em] text-primary" style={{ animationDelay: "0.1s" }}>
            <span className="h-px w-10 bg-primary" />
            Dessert bar &amp; café · Ahmedabad
          </p>

          <h1 className="mt-7 font-serif text-[clamp(2.9rem,7vw,5.6rem)] leading-[1.02] tracking-[-0.02em] text-popover">
            <span className="line-mask"><span style={{ animationDelay: "0.2s" }}>Your daily ritual,</span></span>
            <span className="line-mask"><span style={{ animationDelay: "0.35s" }} className="italic text-primary">baked &amp; brewed</span></span>
            <span className="line-mask"><span style={{ animationDelay: "0.5s" }}>with care.</span></span>
          </h1>

          <p className="soft-in mt-8 max-w-xl text-lg leading-relaxed text-espresso-foreground/80" style={{ animationDelay: "0.75s" }}>
            A warm corner of Bodakdev where the ovens stay lit until 1 AM. Plated Callebaut desserts,
            sourdough pizzas, gathering boards and freshly pulled espresso, all made with pure ingredients and
            zero palm oil.
          </p>

          <div className="soft-in mt-10 flex flex-wrap gap-3" style={{ animationDelay: "0.9s" }}>
            <a
              href="#menu"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-yolk"
            >
              View the menu
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
            </a>
            <a
              href={LINKS.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-espresso-foreground/30 px-7 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              <Navigation className="size-4" />
              Get directions
            </a>
          </div>

          <dl className="soft-in mt-14 grid max-w-2xl grid-cols-1 border-t border-espresso-foreground/15 sm:grid-cols-3" style={{ animationDelay: "1.05s" }}>
            {FACTS.map((f, i) => (
              <div key={f.value} className={i > 0 ? "border-espresso-foreground/15 py-5 sm:border-l sm:pl-6 sm:pt-5" : "py-5 sm:pr-6"}>
                <dt className="font-serif text-xl text-popover">{f.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-espresso-foreground/60">{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="soft-in" style={{ animationDelay: "0.4s", transform: `translateY(${Math.min(y, 800) * -0.08}px)` }}>
          <OvenArch />
        </div>
      </div>

      {/* scroll cue */}
      <a
        href="#what-we-serve"
        aria-label="Scroll to what we serve"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-espresso-foreground/50 lg:flex"
      >
        <span className="relative h-10 w-px overflow-hidden bg-espresso-foreground/20">
          <span className="anim-steam absolute inset-x-0 bottom-0 h-4 bg-primary" />
        </span>
      </a>
    </section>
  );
}
