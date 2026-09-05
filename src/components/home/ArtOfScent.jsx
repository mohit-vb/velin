import artOfScentImg from "../../assets/art-of-scent.webp";
import artOfScentImg2 from "../../assets/art-of-scent-2.webp";
import Button from "../ui/Button";
export default function ArtOfScent() {
  return (
    <section>
      <div className="page-container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className=" relative sm:w-2/3 lg:w-2/5">
            <figure className="md:w-2/4">
              <img src={artOfScentImg} />
            </figure>
            <figure className="opacity-0 md:opacity-100 w-2/4 absolute right-0 top-0 scale-80">
              <img src={artOfScentImg2} />
            </figure>
          </div>
          <div className="sm:w-2/3 lg:w-3/5 text-center md:text-left flex flex-col items-center md:items-start gap-8">
            <span className="eyebrow">New house of scent</span>
            <h2>Scent is the only sense with a direct line to memory.</h2>
            <p className="text-3xl  text-justify md:text-left">
              We don't design fragrances to be liked immediately. We design them
              to be recognized — the way a familiar room, or a familiar person,
              is recognized before it's understood. Every Velin composition is
              built to reveal itself in stages: an opening that invites, a heart
              that settles, a base that stays behind on a scarf or a sleeve long
              after the wearer has gone.
            </p>
            <p className="text-2xl text-justify md:text-left">
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
