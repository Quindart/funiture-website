import type { Product } from "@/types/product";

const sofaImage = "/images/products/product-1.avif";
const sofaHoverImage = "/images/products/product-1-hover.avif";

export const newFurnitureProducts: Product[] = [
  {
    id: "kara-sofa",
    category: "sofa",
    brand: "Hommes Studio",
    name: "Kara Sofa",
    description:
      "Kara Sofa is an art deco-style sofa. Its art deco inspirations are reflected in its shapes, revealing an eclectic, luxurious style.",
    image: sofaImage,
    hoverImage: sofaHoverImage,
    price: "$1,800.00 – $4,500.00",
  },
  {
    id: "ajui-sofa",
    category: "sofa",
    brand: "Hommes Studio",
    name: "Ajui Sofa",
    description:
      "Ajui Sofa is inspired by the iconic Memphis style. The sofa combines an artsy interpretation of a cactus shape and is upholstered in velvet.",
    image: sofaImage,
    hoverImage: sofaHoverImage,
    price: "$4,500.00",
    originalPrice: "$5,000.00",
    discount: "-10%",
  },
  {
    id: "lisola-sofa-white-khaki",
    category: "sofa",
    brand: "Lisola",
    name: "Lisola Sofa White Khaki",
    description:
      "Lisola Sofa Khaki & White is a modern outdoor seating piece for a comfortable outdoor living area.",
    image: sofaImage,
    hoverImage: sofaHoverImage,
    price: "$2,500.00",
  },
  {
    id: "moa-sofa",
    category: "sofa",
    brand: "Moa",
    name: "Moa Sofa",
    description:
      "Moa Sofa is a luxury sofa for modern living room design projects. This stunning modern sofa represents the latest designs of sofas.",
    image: sofaImage,
    hoverImage: sofaHoverImage,
    price: "$2,800.00",
    originalPrice: "$3,000.00",
    discount: "-7%",
    rating: "4.5",
  },
  {
    id: "lisola-sofa-retro",
    category: "sofa",
    brand: "Lisola",
    name: "Lisola Sofa Retro",
    description:
      "Lisola Sofa Retro is a modern seating piece. A modern outdoor sofa created with refined design and delicate materials.",
    image: sofaImage,
    hoverImage: sofaHoverImage,
    price: "$1,800.00",
    rating: "4.7",
  },
  {
    id: "kara-lounge-chair",
    category: "chair",
    brand: "Hommes Studio",
    name: "Kara Lounge Chair",
    description:
      "A sculptural lounge chair with soft upholstery and a distinctive art deco silhouette.",
    image: sofaImage,
    hoverImage: sofaHoverImage,
    price: "$1,250.00",
    originalPrice: "$1,400.00",
    discount: "-11%",
  },
  {
    id: "lisola-dining-chair",
    category: "chair",
    brand: "Lisola",
    name: "Lisola Dining Chair",
    description:
      "A comfortable dining chair with clean lines and durable materials for everyday use.",
    image: sofaImage,
    hoverImage: sofaHoverImage,
    price: "$680.00",
    rating: "4.8",
  },
  {
    id: "moa-dining-table",
    category: "table",
    brand: "Moa",
    name: "Moa Dining Table",
    description:
      "A modern dining table with a generous surface and a balanced, architectural base.",
    image: sofaImage,
    hoverImage: sofaHoverImage,
    price: "$2,200.00",
  },
  {
    id: "kara-coffee-table",
    category: "table",
    brand: "Hommes Studio",
    name: "Kara Coffee Table",
    description:
      "A compact statement table that pairs geometric details with a warm polished finish.",
    image: sofaImage,
    hoverImage: sofaHoverImage,
    price: "$1,150.00",
    originalPrice: "$1,300.00",
    discount: "-12%",
  },
  {
    id: "lisola-side-table",
    category: "sidetable",
    brand: "Lisola",
    name: "Lisola Side Table",
    description:
      "A versatile side table designed to sit neatly beside a lounge chair or sofa.",
    image: sofaImage,
    hoverImage: sofaHoverImage,
    price: "$520.00",
  },
  {
    id: "moa-pedestal-table",
    category: "sidetable",
    brand: "Moa",
    name: "Moa Pedestal Table",
    description:
      "A refined pedestal table with a compact footprint and a simple contemporary profile.",
    image: sofaImage,
    hoverImage: sofaHoverImage,
    price: "$740.00",
    rating: "4.6",
  },
];
