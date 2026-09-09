export default function Product({ product }) {
  const { name, family, img, sizes } = product;
  return (
    <div className=" group cursor-pointer">
      <figure className="w-full overflow-hidden">
        <img
          src={img}
          alt={`Image of perfume - ${name}`}
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-110"
        />
      </figure>
      <div className="flex flex-col items-start gap-4 py-4">
        <h4 className="text-3xl inline border-b border-transparent transition-colors duration-300 group-hover:border-amber-950/80">
          {name}
        </h4>
        <span className="uppercase tracking-wide font-semibold text-xl opacity-40">
          {family}
        </span>
        <div className="flex items-center justify-between w-full">
          <span className="text-3xl"> &#8377;{sizes[0].price}</span>
          <span className="text-xl opacity-60">{sizes[0].size}</span>
        </div>
      </div>
    </div>
  );
}
