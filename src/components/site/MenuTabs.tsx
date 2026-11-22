import { useLayoutEffect, useRef, useState } from "react";
import { MENU } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { useReveal } from "./hooks";

const useIsoLayoutEffect = typeof window === "undefined" ? () => {} : useLayoutEffect;

export function MenuTabs() {
  const [active, setActive] = useState(MENU[0]!.id);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const ref = useReveal<HTMLDivElement>();
  const current = MENU.find((m) => m.id === active) ?? MENU[0]!;

  useIsoLayoutEffect(() => {
    const el = tabRefs.current[active];
    if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
  }, [active]);

  const onKey = (e: React.KeyboardEvent) => {
    const idx = MENU.findIndex((m) => m.id === active);
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = MENU[(idx + step + MENU.length) % MENU.length]!;
    setActive(next.id);
    tabRefs.current[next.id]?.focus();
  };

  return (
    <div ref={ref} className="reveal mt-24 rounded-3xl bg-sand p-6 md:p-12">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-muted-foreground">The Yellow Oven menu</p>
          <h3 className="mt-3 font-serif text-3xl md:text-4xl">Explore our kitchen &amp; bar</h3>
        </div>
        <p className="max-w-sm text-sm text-muted-foreground">From savory fondue gathering tables to stone-baked sourdough pizzas.</p>
      </div>

      <div className="relative -mx-6 mt-10 overflow-x-auto px-6 md:mx-0 md:px-0">
        <div role="tablist" aria-label="Menu categories" onKeyDown={onKey} className="relative flex w-max gap-1 border-b border-taupe/60 md:w-auto">
          {MENU.map((m) => (
            <button
              key={m.id}
              ref={(el) => {
                tabRefs.current[m.id] = el;
              }}
              role="tab"
              id={`tab-${m.id}`}
              aria-selected={active === m.id}
              aria-controls={`panel-${m.id}`}
              tabIndex={active === m.id ? 0 : -1}
              onClick={() => setActive(m.id)}
              className={cn(
                "whitespace-nowrap px-4 pb-4 pt-2 text-sm font-bold transition-colors duration-300",
                active === m.id ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {m.label}
            </button>
          ))}
          <span
            aria-hidden="true"
            className="absolute -bottom-px h-0.5 bg-primary transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ left: indicator.left, width: indicator.width }}
          />
        </div>
      </div>

      <div key={current.id} role="tabpanel" id={`panel-${current.id}`} aria-labelledby={`tab-${current.id}`} className="mt-10">
        <p className="soft-in font-serif text-lg italic text-muted-foreground">{current.blurb}</p>
        <ul className="mt-8 grid gap-x-14 gap-y-8 md:grid-cols-2">
          {current.items.map((item, i) => (
            <li key={item.name} className="soft-in" style={{ animationDelay: `${i * 60}ms` }}>
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-xl">{item.name}</span>
                <span className="menu-leader" aria-hidden="true" />
                <span className="font-serif text-lg text-primary-foreground">₹{item.price}</span>
              </div>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
