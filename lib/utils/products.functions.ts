import { Product } from "../types/product";

export const getBeverages = (products: Product[]) =>
  products.filter((product) => product.type === "beverage");

export const getMeals = (products: Product[]) =>
  products.filter((product) => product.type === "meal");
