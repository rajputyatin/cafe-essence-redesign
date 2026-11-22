import { ArrowUpRight, Car, MapPin } from "lucide-react";
import { HOURS, LINKS } from "@/lib/site-data";
import { cafeClock, cafeStatus } from "@/lib/hours";
import { cn } from "@/lib/utils";
import { SectionLabel } from "./Logo";
import { useNow, useReveal } from "./hooks";

export function Visit() {
  const now = useNow();
  const status = now ? cafeStatus(now) : null;
  const today = now ? cafeClock(now).day : -1;
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="location" className="scroll-mt-20 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="reveal">
            <SectionLabel index="\n" className="text-muted-foreground">Plan your visit</SectionLabel>
            <h2 className="mt-5 font-serif text-[clamp(2.4rem,5vw,4rem)] leading-[1.05] tracking-tight">
              Find us in <em className="text-primary">Bodakdev</em>
            </h2>
          </div>
          <p className="reveal max-w-sm text-muted-foreground" style={{ ["--delay" as string]: "120ms" }}>
            Join us for an intimate afternoon coffee, an evening dinner board, or a midnight dessert craving.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.35fr]">
          <div className="reveal flex flex-col gap-8 rounded-3xl bg-card p-7 md:p-10">
            <div
              className={cn(
                "flex items-center gap-3 rounded-full px-4 py-2.5 text-sm font-bold transition-colors duration-500",
                !status && "bg-sand",
                status?.open && "bg-espresso text-espresso-foreground",
                status && !status.open && "bg-sand text-foreground",
              )}
              aria-live="polite"
            >
              <span className="relative flex size-2.5">
                {status?.open && <span className="anim-ping absolute inset-0 rounded-full bg-success" />}
                <span className={cn("relative size-2.5 rounded-full", status ? (status.open ? "bg-success" : "bg-ember") : "bg-taupe")} />
              </span>
              {status ? `${status.headline} · ${status.detail}` : "Checking opening status…"}
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                <MapPin className="size-4 text-primary" /> Address
              </h3>
              <address className="mt-3 not-italic leading-relaxed">
                <span className="font-serif text-xl">B-101, Shivalik Platinum</span>
                <br />
                Judges Bunglow Road, Bodakdev, Satellite
                <br />
                Ahmedabad, Gujarat 380015
              </address>
            </div>

            <div>
              <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-muted-foreground">Opening hours</h3>
              <ul className="mt-3 divide-y divide-border">
                {HOURS.map((h) => {
                  const isToday = h.day === today;
                  return (
                    <li
                      key={h.day}
                      className={cn(
                        "flex items-center justify-between py-2.5 text-sm transition-colors",
                        isToday && "-mx-3 rounded-lg border-none bg-primary px-3 font-bold text-primary-foreground",
                      )}
                    >
                      <span>
                        {h.label}
                        {isToday && <span className="ml-2 text-[0.65rem] uppercase tracking-[0.16em]">Today</span>}
                      </span>
                      <span className="tabular-nums">{h.time}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <p className="flex gap-3 rounded-2xl border border-border bg-background p-4 text-sm leading-relaxed text-muted-foreground">
              <Car className="mt-0.5 size-5 shrink-0 text-primary" />
              <span>
                <strong className="text-foreground">Parking &amp; transit.</strong> Valet and convenient street parking
                available right in front of Shivalik Platinum on Judges Bunglow Road. Easily accessible from SG Highway
                and Satellite crossroads.
              </span>
            </p>
          </div>

          <div className="reveal flex flex-col overflow-hidden rounded-3xl bg-espresso" style={{ ["--delay" as string]: "150ms" }}>
            <div className="relative min-h-[380px] flex-1">
              <iframe
                title="The Yellow Oven location map"
                src={LINKS.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0 grayscale-[35%] sepia-[20%]"
              />
            </div>
            <div className="flex flex-col gap-4 p-6 text-espresso-foreground sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm">
                <span className="text-espresso-foreground/60">Landmark:</span> Near Judges Bunglow Cross Road, Bodakdev
              </p>
              <a
                href={LINKS.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-yolk"
              >
                Open in Google Maps
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
