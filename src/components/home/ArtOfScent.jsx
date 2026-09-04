import artOfScentImg from "../../assets/art-of-scent.webp";
import artOfScentImg2 from "../../assets/art-of-scent-2.webp";
import Button from "../ui/Button";
export default function ArtOfScent() {
  return (
    <section className="py-32">
      <div className="page-container">
        <div className="flex items-center justify-center gap-8">
          <div className=" relative w-2/5">
            <figure className="w-2/4">
              <img src={artOfScentImg} />
            </figure>
            <figure className="w-2/4 absolute right-0 top-0 scale-80">
              <img src={artOfScentImg2} />
            </figure>
          </div>
          <div className="w-3/5 flex flex-col items-start gap-8">
            <span className="eyebrow">New house of scent</span>
            <h2 className="text-7xl">
              Scent is the only sense with a direct line to memory.
            </h2>
            <p className="text-3xl">
              We don't design fragrances to be liked immediately. We design them
              to be recognized — the way a familiar room, or a familiar person,
              is recognized before it's understood. Every Velin composition is
              built to reveal itself in stages: an opening that invites, a heart
              that settles, a base that stays behind on a scarf or a sleeve long
              after the wearer has gone.
            </p>
            <p className="text-2xl">
              This is why we release slowly. Six fragrances, each composed over
              a period of months, each tested against the same question: does it
              still feel true a year from now?
            </p>
            <Button type="primary">Read Our Story →</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
