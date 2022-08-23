import { Product } from "../lib/types/product";

type ProductLineProps = { product: Product };

export const ProductLine = ({
  product: { name, description, price },
}: ProductLineProps) => {
  return (
    <div className="flex items-center space-x-6">
      <div className="flex flex-1 flex-col md:flex-row">
        <span className="font-metamorphous text-lg md:w-2/6">{name}</span>
        <span className="flex-1 font-metamorphous md:text-center">
          {description}
        </span>
      </div>

      <span className="font-metamorphous text-lg">{price}</span>
    </div>
  );
};
