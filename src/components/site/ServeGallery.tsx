import { useRef, useState } from "react";
import { SERVE_ITEMS } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { SectionLabel } from "./Logo";
import { useReveal } from "./hooks";

export function ServeGallery() {
  const [active, setActive] = useState(2);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const sectionRef = useReveal<HTMLElement>();

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const step = ({ ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 } as Record<string, number>)[e.key];
    if (!step) return;
    e.preventDefault();
    refs.current[(i + step + SERVE_ITEMS.length) % SERVE_ITEMS.length]?.focus();
  };

  return (
    <section ref={sectionRef} id="what-we-serve" className="scroll-mt-20 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="reveal">
            <SectionLabel index="\n" className="text-muted-foreground">Fresh from our Ahmedabad kitchen</SectionLabel>
            <h2 className="mt-5 font-serif text-[clamp(2.4rem,5vw,4rem)] leading-[1.05] tracking-tight">
              What we <em className="text-primary">serve</em>
            </h2>
          </div>
          <p className="reveal max-w-sm text-muted-foreground" style={{ ["--delay" as string]: "120ms" }}>
            Every item is handcrafted with pure ingredients, authentic Callebaut chocolate, and zero palm oil.
          </p>
        </div>

        <div
          role="group"
          aria-label="What we serve gallery"
          className="reveal mt-14 flex h-[680px] flex-col gap-3 md:h-[540px] md:flex-row"
          style={{ ["--delay" as string]: "200ms" }}
        >
          {SERVE_ITEMS.map((item, i) => {
            const on = active === i;
            return (
              <button
                key={item.title}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                type="button"
                aria-pressed={on}
                aria-label={`${item.title}, ₹${item.price}`}
                onPointerEnter={(e) => e.pointerType === "mouse" && setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                onKeyDown={(e) => onKey(e, i)}
                style={{ flexGrow: on ? 5 : 1 }}
                className="group relative min-h-0 min-w-0 basis-0 overflow-hidden rounded-2xl bg-primary text-left outline-none transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:ring-4 focus-visible:ring-ring/60"
              >
                <img
                  src={item.img}
                  alt=""
                  loading="lazy"
                  draggable={false}
                  style={{ objectPosition: item.position }}
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                    on ? "scale-100" : "scale-110",
                  )}
                />
                <span
                  className={cn(
                    "absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/10 to-transparent transition-opacity duration-700",
                    on ? "opacity-100" : "opacity-60",
                  )}
                />
                <span
                  className={cn(
                    "absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-popover transition-all duration-700",
                    on ? "translate-y-0 opacity-100 delay-200" : "translate-y-6 opacity-0",
                  )}
                >
                  <span className="max-w-xs font-serif text-2xl leading-tight md:text-3xl">{item.title}</span>
                  <span className="shrink-0 rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-primary-foreground">₹{item.price}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
