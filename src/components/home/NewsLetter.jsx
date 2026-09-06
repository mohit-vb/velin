import Button from "../ui/Button";

export default function NewsLetter() {
  return (
    <section className="section border-b-amber-950/10">
      <div className="flex flex-col items-center gap-4">
        <span className="eyebrow">STAY CLOSE</span>
        <h2>Notes worth remembering</h2>
        <p className="text-2xl sm:text-3xl w-1/2 text-center opacity-70">
          Once or twice a month: a new composition, a scent note worth knowing,
          occasionally a bottle before anyone else can buy it.
        </p>
        <form className="flex items-center gap-2 w-1/3 h-20 mt-8">
          <input
            className="border border-amber-900/20 w-2/3 h-full px-4 placeholder:text-xl focus:outline-amber-900/80 focus:shadow-sm"
            placeholder="Your Email"
          />
          <Button type="primary" className="w-1/3">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
