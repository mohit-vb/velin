import { featuredCollection } from "../../constants";
export default function Featured() {
  return (
    <section className="min-h-screen">
      <span className="eyebrow block text-center">The Collection</span>
      <h2 className="text-center">Four ways to be remembered.</h2>
      <div className="page-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-amber-100 p-8 md:p-16 my-16">
          {featuredCollection.map(({ id, perfumeName, perfumeImg }) => (
            <figure className="relative group overflow-hidden h-72" key={id}>
              <img
                src={perfumeImg}
                className="absolute inset-0 h-full w-full object-cover transition-all duration-300 group-hover:opacity-80 group-hover:scale-110"
              />
              <figcaption className="absolute w-full text-balance left-1/2 bottom-4 -translate-x-1/2 text-amber-50 bg-stone-950/20 px-2 sm:px-4 text-base sm:text-xl font-bold">
                {perfumeName}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
