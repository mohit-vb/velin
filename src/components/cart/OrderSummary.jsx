import Button from "../ui/Button";
import { useCart } from "../../hooks/useCart";
import { useNavigate } from "react-router";

const groupClasses = "flex items-center justify-between text-2xl";
const valueClasses = "opacity-70";

export default function OrderSummary({ onFormSubmit, forForm = false }) {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0,
  );

  const shippingFee = totalPrice >= 6000 ? 0 : 300;

  return (
    <div className="bg-amber-100 p-16 flex flex-col gap-4">
      <h3 className="text-5xl mb-8">Order Summary</h3>
      <div className={groupClasses}>
        <span>Subtotal</span>
        <span className={valueClasses}>&#8377;{totalPrice}</span>
      </div>
      <div className={`${groupClasses} pb-8`}>
        <span>Shipping</span>
        <span className={valueClasses}>
          {shippingFee === 0 ? "Free" : shippingFee}
        </span>
      </div>
      <div
        className={`${groupClasses} text-4xl tracking-wider border-t border-t-amber-950/20 py-8`}
      >
        <h4>Total</h4>
        <h4>&#8377;{totalPrice + shippingFee}</h4>
      </div>
      {forForm ? (
        <Button type="primary" onClick={() => onFormSubmit()}>
          Place Order
        </Button>
      ) : (
        <Button type="primary" onClick={() => navigate("/checkout")}>
          Proceed to checkout
        </Button>
      )}

      <p className="text-center text-xl opacity-60">
        Complimentary shipping on orders over ₹6,000
      </p>
    </div>
  );
}
