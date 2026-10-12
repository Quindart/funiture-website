import { ListProducts } from "@/components/ListProducts";
import { newFurnitureProducts } from "@/lib/products";

export function NewFurniture() {
  return (
    <section id="new-furniture" aria-labelledby="new-furniture-heading">
      <header className="flex flex-col items-center justify-center bg-[#f5f5f5] px-4 pt-8 sm:pt-10">
        <h2
          id="new-furniture-heading"
          className="text-center text-2xl font-semibold uppercase leading-tight tracking-[-0.025em] sm:text-[32px]"
        >
          New Furniture
        </h2>
      </header>
      <ListProducts products={newFurnitureProducts} />
    </section>
  );
}
