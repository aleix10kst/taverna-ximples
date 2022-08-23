export type Product = {
  name: string;
  description?: string;
  price: string;
};

export type Products = {
  meals: Product[];
  beverages: Product[];
};
