import Image from "next/image";
import type { Product } from "@/types/product";

type ProductcardProps = {
  product: Product;
};

export function Productcard({ product }: ProductcardProps) {
  return (
    <article className="group flex min-w-0 flex-col border-r border-b border-[#dedede]">
      <div className="relative aspect-square overflow-hidden bg-white">
        {product.discount && (
          <span className="absolute top-3 right-3 z-10 border border-[#d69b54] bg-white px-3 py-1.5 text-sm leading-none text-[#c38a43] sm:top-4 sm:right-4 sm:px-3.5 sm:py-2">
            {product.discount}
          </span>
        )}
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 767px) 50vw, (max-width: 1279px) 33vw, 20vw"
          className="object-contain p-3 transition-opacity duration-500 ease-in-out sm:p-5 group-hover:opacity-0 group-focus-within:opacity-0"
        />
        <Image
          src={product.hoverImage}
          alt=""
          fill
          sizes="(max-width: 767px) 50vw, (max-width: 1279px) 33vw, 20vw"
          className="object-contain p-3 opacity-0 transition-opacity duration-500 ease-in-out sm:p-5 group-hover:opacity-100 group-focus-within:opacity-100"
        />
      </div>

      <div className="flex flex-1 flex-col bg-[#f5f5f5] p-4 sm:p-5 lg:p-6">
        <p className="text-xs font-medium uppercase tracking-wide text-[#333] sm:text-sm">
          {product.brand}
        </p>
        <div className="mt-3 flex items-start justify-between gap-2">
          <h3 className="text-base font-normal leading-snug text-[#171717] sm:text-lg">
            {product.name}
          </h3>
          {product.rating && (
            <span className="shrink-0 text-xs text-[#171717] sm:text-sm">
              <span aria-hidden="true">★</span> {product.rating}
            </span>
          )}
        </div>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#686868] sm:text-[15px] sm:leading-[1.65]">
          {product.description}
        </p>
        <div className="mt-4 flex flex-wrap items-baseline gap-x-2.5 gap-y-1 text-sm sm:mt-5 sm:text-base">
          <span className="font-medium text-[#171717]">{product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-[#999] line-through sm:text-sm">
              {product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
