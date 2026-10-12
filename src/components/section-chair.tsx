import Image from "next/image";
import Link from "next/link";

export function SectionChair() {
  return (
    <section
      aria-labelledby="chair-catalog-heading"
      className="overflow-hidden bg-[#f5f5f5]"
    >
      <div className="mx-auto max-w-[1920px] px-4 pt-14 sm:px-7 lg:pt-14">
        <p className="text-[clamp(0.75rem,3vw,1.5rem)] mx-4 font-medium uppercase leading-none tracking-[-0.04em] lg:text-4xl">
          Our catalog
        </p>
        <h2
          id="chair-catalog-heading"
          className="mt-1 text-[clamp(5rem,20vw,8.5rem)] font-normal uppercase leading-[0.78] tracking-[-0.075em] text-black lg:text-[200px]"
        >
          Chairs
        </h2>

        <div className="relative mt-6 min-h-[520px] sm:mt-7 sm:min-h-[550px] lg:mt-5 lg:min-h-0 lg:h-[min(58vw,520px)]">
          <div className="absolute top-0 right-0 h-[min(86vw,380px)] min-h-[310px] w-[68%] sm:h-[min(58vw,420px)] sm:min-h-0 lg:h-full lg:w-[77%]">
            <Image
              src="/banner-chair.avif"
              alt="White sculptural lounge chair in a calm, modern interior"
              fill
              sizes="(max-width: 1023px) 68vw, 77vw"
              className="object-cover"
            />
          </div>

          <div className="absolute top-[57%] left-0 z-10 w-[92%] bg-white px-2 pt-3 pb-7 sm:w-[85%] sm:px-2 lg:top-1/2 lg:left-[8%] lg:w-[36%] lg:-translate-y-1/2 lg:bg-transparent lg:px-0 lg:pt-0 lg:pb-0">
            <p className="text-[clamp(0.75rem,3vw,1.5rem)] font-medium uppercase leading-tight tracking-[-0.04em] lg:text-lg">
              From collection
            </p>
            <h3 className="mt-1 text-[clamp(3.5rem,12.5vw,5.5rem)] font-normal leading-[0.98] tracking-[-0.07em] text-black lg:mt-2 lg:whitespace-nowrap text-7xl lg:leading-none lg:tracking-[-0.055em]">
              Casual Comforts
            </h3>
            <Link
              href="#new-furniture"
              className="mt-7 inline-flex lg:py-4 lg:px-12 lg:w-44 items-center justify-center border border-[#d69b54] text-[19px] font-medium uppercase tracking-wide text-[#c38a43] transition-colors hover:bg-[#d69b54] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c38a43] lg:mt-5 lg:text-sm"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
