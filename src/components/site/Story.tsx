import { HeartHandshake, Leaf, Moon, Star } from "lucide-react";
import { REVIEWS } from "@/lib/site-data";
import { SectionLabel } from "./Logo";
import { useReveal } from "./hooks";

const VALUES = [
  {
    icon: Leaf,
    title: "Pure ingredients, zero palm oil",
    body: "We source authentic Callebaut Belgian chocolate, fresh herbs, and pure dairy. No shortcuts, no palm oil, and no artificial compromises in our kitchen.",
  },
  {
    icon: HeartHandshake,
    title: "Warm, honest hospitality",
    body: "Every guest is part of our journey. From tableside dessert presentations to personal chef check-ins, you are welcomed with authentic warmth.",
  },
  {
    icon: Moon,
    title: "Late-night sanctuary",
    body: "Ahmedabad comes alive after dusk. We keep our ovens running and coffee grinding until 1:00 AM every single night for your post-dinner gatherings.",
  },
];

export function Story() {
  const ref = useReveal<HTMLElement>();
  const reviews = [...REVIEWS, ...REVIEWS];

  return (
    <section ref={ref} id="story" className="grain scroll-mt-20 overflow-hidden bg-espresso py-24 text-espresso-foreground md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="reveal">
              <SectionLabel index="\n" className="text-espresso-foreground/60">Our story &amp; values</SectionLabel>
              <h2 className="mt-5 font-serif text-[clamp(2.4rem,5vw,4rem)] leading-[1.05] tracking-tight text-popover">
                Crafted from passion,
                <br />
                <em className="text-primary">baked with love.</em>
              </h2>
            </div>

            <figure className="reveal relative mt-20" style={{ ["--delay" as string]: "150ms" }}>
              <span aria-hidden="true" className="absolute -left-1 -top-16 font-serif text-[8rem] leading-none text-primary/25">
                &ldquo;
              </span>
              <blockquote className="relative font-serif text-xl leading-relaxed text-espresso-foreground/90 md:text-[1.4rem]">
                What started with a love for baking cakes slowly turned into something much bigger. The Yellow Oven
                was built on the values of quality, honesty, warmth, and the belief that every product should be made
                with care. Whether it&rsquo;s a handcrafted dessert, a fresh sourdough pizza, or your daily cup of
                coffee, we want every visit to feel as special as the very first cake baked for a customer.
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span className="flex size-14 items-center justify-center rounded-full border border-primary font-serif text-2xl italic text-primary">
                  S
                </span>
                <span>
                  <span className="block font-serif text-lg text-popover">Shweta Chauhan</span>
                  <span className="block text-xs uppercase tracking-[0.16em] text-espresso-foreground/60">
                    Founder &amp; Head Baker
                  </span>
                </span>
              </figcaption>
            </figure>
          </div>

          <ol className="flex flex-col">
            {VALUES.map((v, i) => (
              <li
                key={v.title}
                className="reveal group grid grid-cols-[auto_1fr] gap-6 border-t border-espresso-foreground/15 py-8 last:border-b"
                style={{ ["--delay" as string]: `${200 + i * 120}ms` }}
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-espresso-surface text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                  <v.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-serif text-xl text-popover">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-espresso-foreground/70">{v.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* community reviews */}
      <div className="reveal mt-24">
        <p className="mx-auto max-w-7xl px-5 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-espresso-foreground/60 md:px-8">
          From our Ahmedabad community
        </p>
        <div className="group mt-8 overflow-hidden">
          <ul className="anim-marquee flex w-max gap-5 px-5 group-hover:[animation-play-state:paused]" style={{ ["--marquee-speed" as string]: "55s" }}>
            {reviews.map((r, i) => (
              <li
                key={i}
                aria-hidden={i >= REVIEWS.length}
                className="w-[340px] shrink-0 rounded-2xl border border-espresso-foreground/10 bg-espresso-surface p-7 md:w-[420px]"
              >
                <div className="flex gap-1 text-primary" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 font-serif text-lg leading-relaxed text-espresso-foreground/90">&ldquo;{r.quote}&rdquo;</p>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-primary">{r.author}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
