export type ProductCategory = "sofa" | "chair" | "table" | "sidetable";

export type Product = {
  id: string;
  category: ProductCategory;
  brand: string;
  name: string;
  description: string;
  image: string;
  hoverImage: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  rating?: string;
};
