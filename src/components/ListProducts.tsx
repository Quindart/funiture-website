"use client";

import { useState } from "react";
import { Productcard } from "@/components/Productcard";
import type { Product, ProductCategory } from "@/types/product";

const categories: { label: string; value: ProductCategory }[] = [
  { label: "Sofa", value: "sofa" },
  { label: "Chairs", value: "chair" },
  { label: "Tables", value: "table" },
  { label: "Sidetables", value: "sidetable" },
];

type ListProductsProps = {
  products: Product[];
};

export function filterProductsByCategory(
  products: Product[],
  category: ProductCategory,
) {
  return products.filter((product) => product.category === category);
}

export function ListProducts({ products }: ListProductsProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("sofa");
  const filteredProducts = filterProductsByCategory(products, activeCategory);

  return (
    <>
      <nav
        aria-label="New furniture categories"
        className="flex items-center justify-center gap-6 bg-[#f5f5f5] px-4 pt-6 pb-8 sm:gap-12 sm:pt-8 sm:pb-10"
      >
        {categories.map(({ label, value }) => {
          const isActive = activeCategory === value;

          return (
            <button
              key={value}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveCategory(value)}
              className={`relative pb-1.5 text-xs font-medium uppercase tracking-wide transition-colors sm:text-base ${
                isActive ? "text-[#171717]" : "text-[#8a8a8a] hover:text-[#333]"
              }`}
            >
              {label}
              {isActive && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#171717]" />
              )}
            </button>
          );
        })}
      </nav>
      <div
        aria-live="polite"
        className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5"
      >
        {filteredProducts.map((product) => (
          <Productcard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
