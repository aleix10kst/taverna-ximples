import { Product } from "../lib/types/product";

type ProductLineProps = { product: Product };

export const ProductLine = ({
  product: { name, description, price },
}: ProductLineProps) => {
  return (
    <div className="flex w-full items-end justify-between">
      <div>
        <p className="font-metamorphous text-lg">{name}</p>
        {description && (
          <p className="font-metamorphous text-sm">{description}</p>
        )}
      </div>
      <span className="font-metamorphous text-lg">{price}€</span>
    </div>
  );
};
