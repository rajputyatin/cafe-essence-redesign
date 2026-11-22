import { SIGNATURES } from "@/lib/site-data";
import { SectionLabel } from "./Logo";
import { useReveal } from "./hooks";

export function Signatures() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref}>
      <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div className="reveal">
          <SectionLabel index="03" className="text-muted-foreground">Plated to delight</SectionLabel>
          <h2 className="mt-5 font-serif text-[clamp(2.4rem,5vw,4rem)] leading-[1.05] tracking-tight">
            Signature <em className="text-primary">masterpieces</em>
          </h2>
        </div>
        <p className="reveal max-w-md text-muted-foreground" style={{ ["--delay" as string]: "120ms" }}>
          Each plated confectionery is built with premium Belgian Callebaut chocolate, fine hazelnut praline, and
          aromatic infusions, crafted for lingering moments.
        </p>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {SIGNATURES.map((s, i) => (
          <article
            key={s.title}
            className="reveal group relative flex flex-col bg-card p-7 transition-colors duration-500 hover:bg-espresso hover:text-espresso-foreground"
            style={{ ["--delay" as string]: `${i * 90}ms` }}
          >
            <div className="flex items-start justify-between">
              <span className="font-serif text-5xl italic text-primary/80 transition-transform duration-500 group-hover:-translate-y-1">
                0{i + 1}
              </span>
              <span className="text-[0.66rem] font-bold uppercase tracking-[0.18em] opacity-60">{s.tag}</span>
            </div>
            <h3 className="mt-10 font-serif text-2xl leading-tight group-hover:text-popover">{s.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed opacity-80">{s.desc}</p>
            <div className="mt-8 flex items-end justify-between gap-3 border-t border-current/15 pt-5">
              <span className="text-xs italic opacity-70">{s.notes}</span>
              <span className="font-serif text-xl text-primary">₹{s.price}</span>
            </div>
            <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
          </article>
        ))}
      </div>
    </div>
  );
}
