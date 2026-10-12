import Marquee from "react-fast-marquee";

const benefits = [
  "Free delivery to your home",
  "Money back guarantee",
  "24/7 support",
  "High quality materials",
];

export function PromoMarquee() {
  return (
    <section
      aria-label="Store benefits"
      className="flex h-14 items-center overflow-hidden bg-white text-black"
    >
      <p className="sr-only">
        {benefits.join(". ")}.
      </p>
      <div aria-hidden="true" className="w-full">
        <Marquee
          autoFill
          direction="left"
          gradient={false}
          speed={42}
          className="h-14"
        >
          <div className="flex items-center gap-6 whitespace-nowrap py-3 text-[17px] font-semibold uppercase leading-none sm:text-[18px]">
            {benefits.map((benefit) => (
              <span key={benefit} className="inline-flex items-center gap-6">
                <span>{benefit}</span>
                <span className="text-[13px]" aria-hidden="true">
                  •
                </span>
              </span>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
