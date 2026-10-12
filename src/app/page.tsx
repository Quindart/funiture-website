import { HeroBanner } from "@/components/hero-banner";
import { NewFurniture } from "@/components/new-furniture";
import { PromoMarquee } from "@/components/promo-marquee";
import { SectionChair } from "@/components/section-chair";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <PromoMarquee />
      <NewFurniture />
      <SectionChair />
    </main>
  );
}
