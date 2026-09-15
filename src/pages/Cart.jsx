import CartItem from "../components/cart/CartItem";
import OrderSummary from "../components/cart/OrderSummary";
import Button from "../components/ui/Button";
import { useCart } from "../hooks/useCart";
import { Link } from "react-router";

export default function Cart() {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <>
      <section className="mt-10 section" aria-labelledby="cart-title">
        <div className="page-container">
          {cartItems.length > 0 ? (
            <>
              <div className="flex items-end gap-8">
                <h2 id="cart-title">Your Cart</h2>
                <span className="text-2xl opacity-70">
                  ( {totalItems} items )
                </span>
              </div>
              <ul className="divide-y divide-amber-950/20 flex flex-col py-16">
                {cartItems.map((item) => (
                  <CartItem item={item} key={item.id} />
                ))}
              </ul>
              <OrderSummary />
            </>
          ) : (
            <div className="flex flex-col gap-4 items-start">
              <h2>Your bag is holding its breath.</h2>
              <p className="text-2xl opacity-70">
                Nothing here yet. When you find something worth wearing, it'll
                wait for you right here.
              </p>
              <Link to="/store">
                <Button type="primary">Continue Shopping</Button>
              </Link>
            </div>
          )}
        </div>
      </section>
      ;
      <div className="h-px w-full bg-amber-950/10" />
    </>
  );
}
