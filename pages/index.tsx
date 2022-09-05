import type { NextPage } from "next";
import { HomeSection } from "../components/HomeSection";
import products from "../public/products.json";
import { Products } from "../lib/types/product";
import { ProductsList } from "../components/ProductsList";
import { LocationMap } from "../components/Location";

const Home: NextPage<{}> = () => {
  const { meals, beverages } = products as Products;

  return (
    <div className="relative divide-y-2 divide-red-800">
      <section
        id="inici"
        className="mx-auto max-w-3xl space-y-2 py-5 px-4 text-center md:py-32"
      >
        <p className="font-metamorphous text-3xl md:text-5xl">
          A la taverna dels ximples i la ximpleta!
        </p>
        <p className="font-metamorphous">
          Sabeu a on es van conèixer el noble cavaller i la princesa?
        </p>
      </section>
      <HomeSection id="menjars" title="Menjar">
        <ProductsList products={meals} />
      </HomeSection>
      <HomeSection id="brevatges" title="Beuratges" reverse={false}>
        <ProductsList products={beverages} />
      </HomeSection>
      <HomeSection id="on-som" title="On som?">
        <div className="space-y-4 p-4">
          <div className="flex flex-col space-y-3">
            <p className="text-center font-medievalSharp text-xl font-bold">
              Taverna dels ximples - Plaça Josefina Gambús
            </p>
            <LocationMap
              center={{ lat: 42.25843688631673, lng: 3.073867627880463 }}
            />
          </div>
          <div className="flex flex-col space-y-3">
            <p className="text-center font-medievalSharp text-xl font-bold">
              La ximpleta - Passeig de les oques
            </p>
            <LocationMap center={{ lat: 42.257298, lng: 3.070171 }} />
          </div>
        </div>
      </HomeSection>
    </div>
  );
};

export default Home;
