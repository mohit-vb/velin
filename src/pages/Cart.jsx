import CartItem from "../components/cart/CartItem";
import OrderSummary from "../components/cart/OrderSummary";

export default function Cart() {
  return (
    <>
      <section className="mt-10 section">
        <div className="page-container">
          <div className="flex items-end gap-8">
            <h2>Your Cart</h2>
            <span className="text-2xl opacity-70">( 3 items )</span>
          </div>
          <ul className="divide-y divide-amber-950/20 flex flex-col py-16">
            <CartItem />
            <CartItem />
          </ul>
          <OrderSummary />
        </div>
      </section>
      ;
      <div className="h-px w-full bg-amber-950/10" />
    </>
  );
}
