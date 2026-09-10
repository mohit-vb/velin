import { useParams } from "react-router";
import { products } from "../constants";

import Button from "../components/ui/Button";
import QuantityCounter from "../components/product/QuantityCounter";
import { labelForScore } from "../utils";
import NoteRow from "../components/product/NoteRow";
import { Star } from "lucide-react";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const {
    about,
    concentration,
    description,
    family,
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

  const profileFacts = [
    { id: 1, label: "Warmth", value: labelForScore(profile.warmth) },
    { id: 2, label: "Sweetness", value: labelForScore(profile.sweetness) },
    { id: 3, label: "Intensity", value: labelForScore(profile.intensity) },
    { id: 4, label: "Longevity", value: longevity },
    { id: 5, label: "Sillage", value: sillage },
    { id: 6, label: "Concentration", value: concentration.match(/\d+-\d+%/) },
  ];

  return (
    <>
      <section className="mt-10 section">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="w-full aspect-square md:aspect-auto md:h-[80vh] overflow-hidden rounded-lg">
              <img
                src={img}
                alt={name}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="flex flex-col gap-4">
              <h2>{name}</h2>
              <p className="text-2xl opacity-70">{tagline}</p>
              <span className="uppercase tracking-wide font-semibold text-xl opacity-40">
                {family}
              </span>
              <div className="flex items-center gap-2 text-xl font-semibold">
                <Star className="h-8 fill-amber-600 stroke-0" />
                {rating} <span>( {reviewCount} )</span>
              </div>
              <span className="text-4xl mt-4">&#8377;{sizes[0].price}</span>
              <span className="mt-8 uppercase tracking-wider font-bold text-xl opacity-60">
                Size
              </span>
              <div className="flex items-center gap-4 ">
                {sizes.map(({ size, price }) => (
                  <button
                    className="border border-amber-700/20 py-2 px-4 text-xl hover:bg-amber-700 hover:text-amber-50 cursor-pointer active:bg-amber-700 active:text-amber-50"
                    key={size}
                  >
                    {size}
                  </button>
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

            <div className="col-span-1 md:col-span-2 border-t border-t-amber-950/10 py-16">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6  items-center gap-16">
                {profileFacts.map(({ id, label, value }) => (
                  <div className="flex flex-col items-center gap-4" key={id}>
                    <span className="uppercase text-2xl tracking-wide opacity-50">
                      {label}
                    </span>
                    <span className="text-xl">{value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-16 border-t border-t-amber-950/10 pt-16">
                <h3 className="text-4xl mb-8">What it's made of?</h3>
                <NoteRow stage="Top" notes={notes.top} />
                <NoteRow stage="Heart" notes={notes.heart} />
                <NoteRow stage="Base" notes={notes.base} />
              </div>

              <div className="flex flex-col gap-8 mt-16 border-t border-t-amber-950/10 pt-16">
                <div>
                  <span className="text-2xl">About</span>
                  <p className="text-xl opacity-70">{about}</p>
                </div>
                <div>
                  <span className="text-2xl">Occassion</span>
                  <p className="text-xl opacity-70">{occasions.join(", ")}</p>
                </div>
                <div>
                  <span className="text-2xl">Shipping</span>
                  <p className="text-xl opacity-70">
                    Complimentary shipping on orders over ₹6,000. Dispatched
                    within 1–2 business days, delivered within 3–5 business
                    days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="h-px w-full bg-amber-950/10" />
    </>
  );
}
