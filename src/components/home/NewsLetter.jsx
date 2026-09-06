import Button from "../ui/Button";

export default function NewsLetter() {
  return (
    <section className="section">
      <div className="flex flex-col items-center gap-4">
        <span className="eyebrow">STAY CLOSE</span>
        <h2 className="text-center">Notes worth remembering</h2>
        <p className="text-2xl sm:text-3xl sm:w-1/2 text-center opacity-70">
          Once or twice a month: a new composition, a scent note worth knowing,
          occasionally a bottle before anyone else can buy it.
        </p>
        <form className="flex flex-col sm:flex-row items-center gap-4 sm:gap-2 sm:w-1/3 sm:h-20 mt-8">
          <input
            className="border border-amber-900/20 w-100 sm:w-2/3 sm:h-full py-6 sm:py-0 px-4 placeholder:text-xl focus:outline-amber-900/80 focus:shadow-sm"
            placeholder="Your Email"
          />
          <Button type="primary" className="sm:w-1/3">
            Subscribe
          </Button>
        </form>
        <p className="text-xl  text-stone-500">
          No spam, ever. Unsubscribe in one click.
        </p>
      </div>
    </section>
  );
}
