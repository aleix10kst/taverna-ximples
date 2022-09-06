import { Product } from "../lib/types/product";
import { ProductLine } from "./ProductLine";

export type ProductListProps = { products: Product[] };

export const ProductsList = ({ products }: ProductListProps) => {
  return (
    <div className="space-y-4">
      {products.map((product, idx) => (
        <ProductLine key={idx} product={product} />
      ))}
    </div>
  );
};
