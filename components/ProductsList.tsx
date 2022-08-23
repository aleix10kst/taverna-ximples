import { Product } from "../lib/types/product";
import { ProductLine } from "./ProductLine";

export type ProductListProps = { products: Product[] };

export const ProductsList = ({ products }: ProductListProps) => {
  return (
    <div className="mx-auto space-y-4 px-4 pb-8 md:w-3/4 md:py-8">
      {products.map((product, idx) => (
        <ProductLine key={idx} product={product} />
      ))}
    </div>
  );
};
