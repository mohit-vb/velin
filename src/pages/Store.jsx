import Product from "../components/product/Product";
import { products } from "../constants";

export default function Store() {
  return (
    <>
      <section className="mt-10 section">
        <div className="page-container">
          <div className="flex flex-col items-center  gap-4">
            <span className="eyebrow">ALL FRAGRANCES</span>
            <h2 className="text-center w-svw">
              Every composition, in one place.
            </h2>
            <p className="text-2xl sm:text-3xl text-center sm:w-1/2 opacity-80">
              Twelve fragrances, six families. No seasonal drops, no
              seven-hundred-SKU catalogue — just the compositions we're standing
              behind right now.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-16 ">
            <input
              type="text"
              placeholder=""
              className="w-full text-amber-950 border border-amber-900/20 sm:w-1/2 p-6 placeholder:text-xl focus:outline-amber-900/50 focus:shadow-sm text-xl"
            />
            <select className="w-full sm:w-auto text-amber-950 border border-amber-900/20 p-6 placeholder:text-xl focus:outline-amber-900/50 focus:shadow-sm text-xl cursor-pointer">
              <option>Sort By Newest</option>
              <option>Sort By Low Price</option>
              <option>Sort By High Price</option>
            </select>
          </div>

          {/* products rendering start */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-24">
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
          {/* products rendering end */}
        </div>
      </section>
      <div className="h-px w-full bg-amber-950/10" />
    </>
  );
}
