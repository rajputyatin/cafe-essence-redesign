import { useNow } from "./hooks";
import { formatCafeTime, cafeStatus } from "@/lib/hours";

const EMBERS = [
  { x: 150, dx: "18px", dur: "6.5s", delay: "0s", r: 2.2 },
  { x: 205, dx: "-14px", dur: "7.2s", delay: "1.4s", r: 1.6 },
  { x: 250, dx: "22px", dur: "5.8s", delay: "2.6s", r: 2 },
  { x: 180, dx: "-20px", dur: "8s", delay: "3.3s", r: 1.4 },
  { x: 228, dx: "10px", dur: "6.8s", delay: "4.5s", r: 1.8 },
  { x: 132, dx: "26px", dur: "7.6s", delay: "5.2s", r: 1.3 },
  { x: 268, dx: "-8px", dur: "6.1s", delay: "0.8s", r: 1.5 },
];

/**
 * The hero's motion graphic: the glowing mouth of a yellow oven.
 * It's the brand, not a dish, so it never goes out of date.
 */
export function OvenArch() {
  const now = useNow();
  const status = now ? cafeStatus(now) : null;

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[440px]">
      {/* rotating seal */}
      <svg viewBox="0 0 200 200" className="anim-spin-slow absolute -right-6 -top-6 z-20 size-32 text-primary md:-right-10 md:size-36" aria-hidden="true">
        <defs>
          <path id="seal" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <circle cx="100" cy="100" r="96" className="fill-espresso" />
        <text className="fill-current font-sans text-[15px] font-bold uppercase" letterSpacing="5.2">
          <textPath href="#seal">Baked with love · Bodakdev · Ahmedabad ·</textPath>
        </text>
        <circle cx="100" cy="100" r="5" className="fill-current" />
      </svg>

      <svg viewBox="0 0 400 500" className="relative z-10 h-full w-full" role="img" aria-label="Illustration of a glowing yellow oven">
        <defs>
          <clipPath id="arch">
            <path d="M60 488 V210 A140 140 0 0 1 340 210 V488 Z" />
          </clipPath>
          <radialGradient id="ovenGlow" cx="50%" cy="78%" r="70%">
            <stop offset="0%" style={{ stopColor: "var(--yolk)" }} />
            <stop offset="38%" style={{ stopColor: "var(--primary)" }} />
            <stop offset="75%" style={{ stopColor: "var(--ember)", stopOpacity: 0.55 }} />
            <stop offset="100%" style={{ stopColor: "var(--espresso-surface)" }} />
          </radialGradient>
          <radialGradient id="halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: "var(--yolk)", stopOpacity: 0.45 }} />
            <stop offset="100%" style={{ stopColor: "var(--yolk)", stopOpacity: 0 }} />
          </radialGradient>
        </defs>

        {/* outer halo */}
        <ellipse cx="200" cy="330" rx="200" ry="190" fill="url(#halo)" className="anim-glow" />

        {/* brick rim */}
        <path
          d="M36 500 V210 A164 164 0 0 1 364 210 V500"
          fill="none"
          className="stroke-taupe/40"
          strokeWidth="16"
          strokeDasharray="22 6"
        />
        <path
          d="M48 500 V210 A152 152 0 0 1 352 210 V500"
          fill="none"
          className="anim-draw stroke-primary"
          strokeWidth="1.5"
          style={{ ["--len" as string]: 1300 }}
        />

        <g clipPath="url(#arch)">
          <rect x="0" y="0" width="400" height="500" className="fill-espresso-surface" />
          <rect x="0" y="0" width="400" height="500" fill="url(#ovenGlow)" className="anim-glow" />
          {/* oven racks */}
          <g className="stroke-espresso/35" strokeWidth="2">
            <line x1="60" y1="360" x2="340" y2="360" />
            <line x1="60" y1="430" x2="340" y2="430" />
          </g>
          {/* embers */}
          {EMBERS.map((e, i) => (
            <circle
              key={i}
              cx={e.x}
              cy={470}
              r={e.r}
              className="anim-ember fill-yolk"
              style={{ ["--dx" as string]: e.dx, ["--dur" as string]: e.dur, animationDelay: e.delay }}
            />
          ))}
        </g>

        {/* hearth ledge */}
        <rect x="16" y="486" width="368" height="14" rx="3" className="fill-taupe/50" />
        <rect x="16" y="486" width="368" height="2" className="fill-primary/70" />

        {/* steam leaving the oven */}
        <g fill="none" className="stroke-espresso-foreground/50" strokeWidth="2" strokeLinecap="round">
          <path className="anim-steam" d="M170 70 q-10 -14 0 -28 q10 -14 0 -28" />
          <path className="anim-steam" style={{ animationDelay: "2s" }} d="M200 64 q-10 -14 0 -28 q10 -14 0 -28" />
          <path className="anim-steam" style={{ animationDelay: "4s" }} d="M230 70 q-10 -14 0 -28 q10 -14 0 -28" />
        </g>
      </svg>

      {/* live tag inside the oven mouth */}
      <div className="absolute inset-x-0 bottom-[12%] z-20 flex justify-center">
        <div className="rounded-full border border-espresso/15 bg-espresso/85 px-5 py-2.5 text-center text-espresso-foreground backdrop-blur">
          <p className="flex items-center justify-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.2em]">
            <span className="relative flex size-2">
              {status?.open && <span className="anim-ping absolute inset-0 rounded-full bg-success" />}
              <span className={status ? (status.open ? "relative size-2 rounded-full bg-success" : "relative size-2 rounded-full bg-ember") : "relative size-2 rounded-full bg-taupe"} />
            </span>
            {status ? status.headline : "Ahmedabad"}
          </p>
          <p className="mt-0.5 font-serif text-sm italic">
            {now ? `${formatCafeTime(now)} in Ahmedabad` : "Open 11 AM – 1 AM"}
          </p>
        </div>
      </div>
    </div>
  );
}
