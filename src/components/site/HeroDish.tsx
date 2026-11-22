import { SectionLabel } from "./Logo";
import { useReveal } from "./hooks";

/**
 * The rotating "current hero dish". Swap the copy below whenever the
 * kitchen's showstopper changes; the rest of the site stays the same.
 */
const CURRENT_DISH = {
  kicker: "Ahmedabad's viral icon",
  title: "The Strawberry Fire Dessert",
  description:
    "Delicate sponge and velvety cream, ignited live at your table with luscious fresh berries. An unforgettable sensory experience, and the reason half the room turns around.",
  tags: ["Tableside show", "Torched live", "Fresh berries"],
};

const SPARKS = [
  { x: 186, dx: "-16px", dur: "2.8s", delay: "0s" },
  { x: 206, dx: "14px", dur: "3.2s", delay: "0.7s" },
  { x: 196, dx: "-6px", dur: "2.5s", delay: "1.3s" },
  { x: 214, dx: "22px", dur: "3.5s", delay: "1.9s" },
  { x: 180, dx: "-24px", dur: "3s", delay: "2.4s" },
];

function FireDessertIllustration() {
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" role="img" aria-label="Illustration of a dessert flaming at the table">
      <defs>
        <linearGradient id="flameOuter" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" style={{ stopColor: "var(--ember)" }} />
          <stop offset="60%" style={{ stopColor: "var(--primary)" }} />
          <stop offset="100%" style={{ stopColor: "var(--yolk)", stopOpacity: 0.2 }} />
        </linearGradient>
        <linearGradient id="flameInner" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" style={{ stopColor: "var(--primary)" }} />
          <stop offset="100%" style={{ stopColor: "var(--popover)" }} />
        </linearGradient>
        <radialGradient id="plateGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{ stopColor: "var(--yolk)", stopOpacity: 0.55 }} />
          <stop offset="100%" style={{ stopColor: "var(--yolk)", stopOpacity: 0 }} />
        </radialGradient>
      </defs>

      <ellipse cx="200" cy="292" rx="190" ry="70" fill="url(#plateGlow)" className="anim-glow" />

      {/* plate */}
      <ellipse cx="200" cy="300" rx="160" ry="40" className="fill-popover" />
      <ellipse cx="200" cy="296" rx="118" ry="26" className="fill-card" />

      {/* dessert dome */}
      <path d="M128 296 C128 230 160 196 200 196 C240 196 272 230 272 296 Z" className="fill-popover" />
      <path d="M131 266 C150 258 250 258 269 266 L271 282 C250 274 150 274 129 282 Z" className="fill-berry-soft" />
      <path d="M150 220 C170 206 196 204 214 208" fill="none" className="stroke-card" strokeWidth="6" strokeLinecap="round" />

      {/* berries */}
      {[
        [146, 300],
        [256, 302],
        [176, 312],
        [228, 313],
        [200, 194],
      ].map(([cx, cy], i) => (
        <g key={i} transform={`translate(${cx} ${cy})`}>
          <path d="M0 -9 C7 -9 10 -3 8 3 C6 8 2 11 0 12 C-2 11 -6 8 -8 3 C-10 -3 -7 -9 0 -9 Z" className="fill-berry" />
          <path d="M-4 -9 L0 -13 L4 -9" fill="none" className="stroke-success" strokeWidth="2" strokeLinecap="round" />
        </g>
      ))}

      {/* flames */}
      <g>
        <path className="anim-flame" style={{ ["--dur" as string]: "1.9s" }} fill="url(#flameOuter)" d="M200 192 C160 170 168 120 186 96 C186 120 196 128 200 132 C204 110 214 84 236 66 C226 100 250 130 238 164 C232 180 218 190 200 192 Z" />
        <path className="anim-flame" style={{ ["--dur" as string]: "1.4s", animationDelay: "0.3s" }} fill="url(#flameOuter)" opacity="0.8" d="M178 192 C150 180 150 148 162 128 C164 148 172 156 178 160 C176 172 178 184 178 192 Z" />
        <path className="anim-flame" style={{ ["--dur" as string]: "1.6s", animationDelay: "0.5s" }} fill="url(#flameOuter)" opacity="0.8" d="M224 192 C250 182 254 150 244 130 C240 150 232 158 226 162 C228 174 226 184 224 192 Z" />
        <path className="anim-flame" style={{ ["--dur" as string]: "1.1s" }} fill="url(#flameInner)" d="M200 192 C184 184 184 160 194 140 C196 156 202 160 206 162 C208 150 212 142 218 136 C222 160 218 186 200 192 Z" />
      </g>

      {SPARKS.map((s, i) => (
        <circle
          key={i}
          cx={s.x}
          cy={150}
          r={1.8}
          className="anim-ember fill-yolk"
          style={{ ["--dx" as string]: s.dx, ["--dur" as string]: s.dur, animationDelay: s.delay }}
        />
      ))}
    </svg>
  );
}

export function HeroDish() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="hero-dish" className="relative overflow-hidden bg-primary py-24 text-primary-foreground md:py-32">
      {/* giant outlined word behind */}
      <p
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 left-0 select-none whitespace-nowrap font-serif text-[15vw] italic leading-none text-espresso/[0.06]"
      >
        now serving
      </p>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1fr_1.05fr]">
        <div className="reveal order-2 lg:order-1">
          <div className="relative mx-auto aspect-square w-full max-w-[480px] rounded-full bg-espresso shadow-[0_40px_80px_-30px_var(--espresso)]">
            <div className="absolute inset-[6%] rounded-full border border-dashed border-primary/30" />
            <div className="absolute inset-[10%]">
              <FireDessertIllustration />
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="reveal">
            <SectionLabel index="02" className="text-primary-foreground/70" indexClassName="text-primary-foreground">
              <span className="text-primary-foreground">{"OUR LATEST \n"}</span>
            </SectionLabel>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-espresso/25 px-3.5 py-1 text-[0.7rem] font-bold uppercase tracking-[0.18em]">
              <span className="size-1.5 rounded-full bg-ember" />
              {CURRENT_DISH.kicker}
            </p>
          </div>

          <h2 className="reveal mt-6 font-serif text-[clamp(2.6rem,5.5vw,4.6rem)] leading-[1.02] tracking-tight" style={{ ["--delay" as string]: "100ms" }}>
            {CURRENT_DISH.title}
          </h2>
          <p className="reveal mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/80" style={{ ["--delay" as string]: "200ms" }}>
            {CURRENT_DISH.description}
          </p>

          <ul className="reveal mt-8 flex flex-wrap gap-2" style={{ ["--delay" as string]: "300ms" }}>
            {CURRENT_DISH.tags.map((t) => (
              <li key={t} className="rounded-full bg-espresso px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                {t}
              </li>
            ))}
          </ul>

          <p className="reveal mt-10 max-w-md border-l-2 border-espresso/30 pl-4 font-serif text-sm italic text-primary-foreground/70" style={{ ["--delay" as string]: "400ms" }}>
            Our showstopper changes with the seasons. Ask your server what&rsquo;s lighting up the room tonight.
          </p>
        </div>
      </div>
    </section>
  );
}
