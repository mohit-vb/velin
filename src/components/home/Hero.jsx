import heroImg from "../../assets/hero.webp";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <picture className="absolute inset-0">
        <img
          src={heroImg}
          alt="hero-banner image of perfumes"
          className="w-full h-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 sm:via-black/40 to-transparent" />

      <div className="relative page-container">
        <div className="relative z-10 min-h-screen text-amber-50 flex flex-col items-center text-center sm:text-left sm:items-start justify-center gap-8">
          <span className="eyebrow">New house of scent</span>
          <h1 className="max-w-2xl md:max-w-full lg:max-w-5xl text-7xl md:text-8xl text-balance">
            Fragrance that lingers long after you leave.
          </h1>
          <p className="text-2xl sm:max-w-2xl leading-8 opacity-80">
            Velin fragrances are composed in small batches, built around a
            single idea rather than a season's trend. Six compositions. No
            filler. Nothing you'll want to explain.
          </p>
          <div className="flex flex-col w-full sm:flex-row gap-4 sm:gap-8 mt-4">
            <Button type="primary">Shop Fragrances</Button>
            <Button type="secondary">Find Your Signature</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
