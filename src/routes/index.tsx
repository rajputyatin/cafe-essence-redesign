import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { ServeGallery } from "@/components/site/ServeGallery";
import { HeroDish } from "@/components/site/HeroDish";
import { Signatures } from "@/components/site/Signatures";
import { MenuTabs } from "@/components/site/MenuTabs";
import { Story } from "@/components/site/Story";
import { Visit } from "@/components/site/Visit";
import { SiteFooter } from "@/components/site/SiteFooter";

const TITLE = "The Yellow Oven | Dessert Bar & Café in Bodakdev, Ahmedabad";
const DESCRIPTION =
  "Ahmedabad's late-night dessert café in Bodakdev. Plated Callebaut desserts, sourdough pizzas, gathering boards and specialty coffee, open 11 AM – 1 AM daily.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <div className="bg-primary py-5" aria-hidden="true">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="h-px bg-espresso/40" />
          </div>
        </div>
        <ServeGallery />
        <HeroDish />
        <section id="menu" className="scroll-mt-20 bg-background py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Signatures />
            <MenuTabs />
          </div>
        </section>
        <Story />
        <Visit />
      </main>
      <SiteFooter />
    </>
  );
}
