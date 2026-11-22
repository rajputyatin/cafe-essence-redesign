const WORDS = [
  "Pure Callebaut chocolate",
  "Zero palm oil",
  "Slow sourdough crust",
  "Ovens lit till 1 AM",
  "Freshly pulled espresso",
  "Plated to order",
];

function Star() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 shrink-0" aria-hidden="true">
      <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" fill="currentColor" />
    </svg>
  );
}

export function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <div className="overflow-hidden border-y border-espresso/10 bg-primary py-4 text-primary-foreground" aria-label="What makes us different">
      <div className="anim-marquee flex w-max items-center gap-8">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-8 font-serif text-xl italic md:text-2xl" aria-hidden={i >= WORDS.length}>
            {w}
            <Star />
          </span>
        ))}
      </div>
    </div>
  );
}
