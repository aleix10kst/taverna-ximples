export type Establishment = "ximple" | "ximpleta" | "all";
export type ProductType = "meal" | "beverage";

export type Product = {
  name: string;
  description?: string;
  price: number;
  type: ProductType;
  establishment: Establishment;
};
