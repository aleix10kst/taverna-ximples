import { Product } from "../lib/types/product";
import { getBeverages, getMeals } from "../lib/utils/products.functions";
import { ProductsList } from "./ProductsList";

export type TavernProductsProps = {
  id: string;
  title: string;
  products: Product[];
};

export const TavernProducts = ({
  id,
  title,
  products,
}: TavernProductsProps) => {
  const meals = getMeals(products);
  const beverages = getBeverages(products);
  return (
    <div id={id} className="flex flex-col px-4 py-5">
      <h2 className="mb-4 font-metamorphous text-3xl md:text-center">
        {title}
      </h2>
      <div className="flex flex-col md:mx-auto md:w-3/4 ">
        {!!meals.length && (
          <div>
            <h3 className="mb-3 font-metamorphous text-2xl text-red-800/90">
              Menjar
            </h3>
            <ProductsList products={meals} />
          </div>
        )}
        {!!beverages.length && (
          <div className="pt-4">
            <h3 className="mb-3 font-metamorphous text-2xl text-red-800/90">
              Beuratges
            </h3>
            <ProductsList products={beverages} />
          </div>
        )}
      </div>
    </div>
  );
};
