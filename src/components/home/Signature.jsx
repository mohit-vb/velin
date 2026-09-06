import signatureImg from "../../assets/signature.webp";
import Button from "../ui/Button";
export default function Signature() {
  return (
    <section
      style={{ backgroundImage: `url(${signatureImg})` }}
      className={`relative w-full min-h-[60vh] bg-no-repeat bg-center bg-cover overflow-hidden`}
    >
      <div className="absolute inset-0 bg-linear-to-r bg-black/60" />
      <div className="page-container">
        <div className="text-amber-50 absolute bottom-0 p-12 flex flex-col items-start gap-4 ">
          <span className="eyebrow">NEW — THE NOCTURNE COLLECTION</span>
          <h2 className="max-w-2xl md:max-w-full lg:max-w-5xl">
            Composed for evenings that deserve to be remembered.
          </h2>
          <p className="text-xl sm:text-2xl opacity-85">
            Three fragrances built around a single hour: the last light of a
            dinner, the walk home, the door closing behind you.
          </p>
          <Button type="primary">Explore the Collection</Button>
        </div>
      </div>
    </section>
  );
}
