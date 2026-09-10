import Button from "../ui/Button";
const groupClasses = "flex items-center justify-between text-2xl";
const valueClasses = "opacity-70";

export default function OrderSummary() {
  return (
    <div className="bg-amber-100 p-16 flex flex-col gap-4">
      <h3 className="text-5xl mb-8">Order Summary</h3>
      <div className={groupClasses}>
        <span>Subtotal</span>
        <span className={valueClasses}>23500</span>
      </div>
      <div className={`${groupClasses} pb-8`}>
        <span>Shipping</span>
        <span className={valueClasses}>Free</span>
      </div>
      <div
        className={`${groupClasses} text-4xl tracking-wider border-t border-t-amber-950/20 py-8`}
      >
        <h4>Total</h4>
        <h4>23500</h4>
      </div>
      <Button type="primary">Proceed to checkout</Button>
      <p className="text-center text-xl opacity-60">
        Complimentary shipping on orders over ₹6,000
      </p>
    </div>
  );
}
