import { useParams } from "react-router";
import { products } from "../constants";

import Button from "../components/ui/Button";
import QuantityCounter from "../components/product/QuantityCounter";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const {
    about,
    concentration,
    description,
    family,
    familyGroup,
    img,
    longevity,
    name,
    notes,
    occasions,
    profile,
    rating,
    reviewCount,
    sillage,
    sizes,
    tagline,
  } = product;
  console.log(product);

  return (
    <section className="mt-10 section">
      <div className="page-container">
        <div className="grid grid-cols-2 gap-16">
          <div
            className="w-full h-[80vh] bg-no-repeat bg-center bg-cover bg-amber-100"
            style={{ backgroundImage: `url(${img})` }}
          />

          <div className="flex flex-col gap-4">
            <h2>{name}</h2>
            <p className="text-2xl opacity-70">{tagline}</p>
            <span className="uppercase tracking-wide font-semibold text-xl opacity-40">
              {family}
            </span>
            <span className="text-4xl">&#8377;{sizes[0].price}</span>
            <span className="mt-8 uppercase tracking-wider font-bold text-xl opacity-60">
              Size
            </span>
            <div className="flex items-center gap-4 ">
              {sizes.map(({ size, price }) => (
                <span className="border border-amber-700/20 py-2 px-4 text-xl hover:bg-amber-700 hover:text-amber-50 cursor-pointer">
                  {size}
                </span>
              ))}
            </div>
            <span className="mt-8 uppercase tracking-wider font-bold text-xl opacity-60">
              Quantity
            </span>
            <QuantityCounter />
            <Button type="primary" className="mt-8">
              Add To Cart
            </Button>
            <p className="text-3xl opacity-70 mt-8">{description}</p>
          </div>

          <div className="col-span-3 border-t border-t-amber-950/10 py-16"></div>
        </div>
      </div>
    </section>
  );
}
