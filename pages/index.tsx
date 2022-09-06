import type { NextPage } from "next";
import { HomeSection } from "../components/HomeSection";
import products from "../public/products.json";
import { LocationMap } from "../components/Location";
import { Product } from "../lib/types/product";
import { TavernProducts } from "../components/TavernProducts";

const productsList = products as Product[];

const Home: NextPage<{}> = () => {
  const ximpletaProducts = productsList.filter(({ establishment }) =>
    ["all", "ximpleta"].includes(establishment)
  );
  const ximpleProducts = productsList.filter(({ establishment }) =>
    ["all", "ximple"].includes(establishment)
  );
  return (
    <div className="relative divide-y-2 divide-red-800">
      <section
        id="inici"
        className="mx-auto max-w-3xl space-y-2 py-8 px-4 text-center md:py-32"
      >
        <p className="font-metamorphous text-4xl md:text-5xl">
          A la taverna dels ximples i la ximpleta!
        </p>
        <p className="font-metamorphous">
          Sabeu a on es van conèixer el noble cavaller i la princesa?
        </p>
      </section>
      <TavernProducts
        id="els-ximples"
        title="Taverna dels ximples"
        products={ximpleProducts}
      />
      <TavernProducts
        id="la-ximpleta"
        title="La ximpleta"
        products={ximpletaProducts}
      />
      <HomeSection id="activitats" title="Activitats">
        <div className="px-4 pb-4 text-center">
          <p className="font-metamorphous text-xl">Divendres</p>
          <p className="font-metamorphous text-xl">Dissabte</p>
          <p className="font-metamorphous text-xl">Diumenge</p>
        </div>
      </HomeSection>
      <HomeSection id="on-som" title="On som?">
        <div className="space-y-4">
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
