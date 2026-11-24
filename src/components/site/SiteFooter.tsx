import { useState } from "react";
import { Facebook, Instagram, Star } from "lucide-react";
import { LINKS } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { LogoMark } from "./Logo";

const LINKS_NAV = [
  { href: "#menu", label: "Desserts & pizzas" },
  { href: "#menu", label: "The Gathering Table" },
  { href: "#story", label: "Founder's story" },
  { href: "#location", label: "Hours & location" },
  { href: "#location", label: "Parking & directions" },
];

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState<{ ok: boolean; text: string } | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = email.trim();
    if (!v || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
      setFeedback({ ok: false, text: "Please enter a valid email address." });
      return;
    }
    setFeedback({ ok: true, text: "Thank you! You're on our private guest list." });
    setEmail("");
    window.setTimeout(() => setFeedback(null), 6000);
  };

  return (
    <footer id="contact" className="grain scroll-mt-20 overflow-hidden bg-espresso text-espresso-foreground">
      <div className="mx-auto max-w-7xl px-5 pt-20 md:px-8">
        <div className="grid gap-12 border-b border-espresso-foreground/15 pb-14 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.3fr]">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark className="size-9" />
              <span className="font-serif text-lg font-bold tracking-[0.06em] text-popover">THE YELLOW OVEN</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-espresso-foreground/70">
              Ahmedabad&rsquo;s late-night haven for viral fire desserts, sourdough crust pizzas, and specialty coffee.
              Crafted with honest ingredients and boundless care.
            </p>
            <div className="mt-6 flex gap-2">
              {[
                { href: LINKS.instagram, label: "Instagram", Icon: Instagram },
                { href: LINKS.facebook, label: "Facebook", Icon: Facebook },
                { href: LINKS.googleReviews, label: "Google reviews", Icon: Star },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-11 items-center justify-center rounded-full border border-espresso-foreground/20 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary">Café navigation</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {LINKS_NAV.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="group inline-flex items-center gap-2 text-espresso-foreground/80 transition-colors hover:text-popover">
                    <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary">Stay in the circle</h4>
            <p className="mt-5 text-sm leading-relaxed text-espresso-foreground/70">
              Receive seasonal tasting invitations, secret weekend dessert drops, and festival specials.
            </p>
            <form onSubmit={submit} noValidate className="mt-5">
              <div className="flex rounded-full border border-espresso-foreground/20 bg-espresso-surface p-1.5 focus-within:border-primary">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  aria-label="Email address for newsletter"
                  className="min-w-0 flex-1 bg-transparent px-4 text-sm text-popover outline-none placeholder:text-espresso-foreground/40"
                />
                <button type="submit" className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-yolk">
                  Join
                </button>
              </div>
              <p aria-live="polite" className={cn("mt-3 min-h-5 text-sm", feedback?.ok ? "text-success" : "text-ember")}>
                {feedback?.text}
              </p>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-2 py-6 text-xs text-espresso-foreground/50 md:flex-row md:justify-between">
          <p>&copy; 2026 The Yellow Oven. All rights reserved.</p>
          <p>Pure Callebaut · Zero palm oil · Handcrafted with pride</p>
        </div>
      </div>

      <p aria-hidden="true" className="select-none whitespace-nowrap text-center font-serif text-[11.6vw] font-bold leading-[0.8] tracking-tight text-espresso-surface">
        The Yellow Oven
      </p>
    </footer>
  );
}
