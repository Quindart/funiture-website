import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroBanner() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[min(84vh,860px)] items-center justify-center overflow-hidden bg-[#f4f2f1] px-5 py-20 sm:px-8"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden"
      >
        <picture className="absolute inset-0 block">
          <source
            media="(min-width: 1280px)"
            srcSet="/hero-banner-xl.jpg"
          />
          <Image
            src="/hero-banner.avif"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </picture>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-white/15"
      />

      <div className="relative z-10 -translate-y-8 text-center sm:-translate-y-10">
        <h1 id="hero-heading" className="text-balance text-[clamp(2.5rem,5.3vw,6rem)] font-normal leading-[1.08] tracking-[-0.045em] text-black">
          Furniture Collection 2023
        </h1>
        <Button
          nativeButton={false}
          render={<Link href="/shop" />}
          className="mt-10 h-[68px] min-w-[232px] rounded-none bg-white px-8 text-[15px] font-medium text-black shadow-none hover:bg-white/90 sm:mt-12"
        >
          SHOP NOW
        </Button>
      </div>
    </section>
  );
}
