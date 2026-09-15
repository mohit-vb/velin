import { useNavigate } from "react-router";
import Button from "../components/ui/Button";
const randomNum = Math.floor(10000 + Math.random() * 90000);

export default function OrderSuccess() {
  const orderInfo = JSON.parse(localStorage.getItem("order-info"));
  const navigate = useNavigate();

  const handleBackToShop = function () {
    navigate("/store");
    localStorage.removeItem("order-info");
  };

  return (
    <>
      <section className="section">
        <div className="page-container">
          {orderInfo ? (
            <>
              <div className="flex flex-col items-start gap-4">
                <h2>Thank you, {orderInfo.fullname}.</h2>
                <p className="text-3xl">Your order is confirmed.</p>
                <p className="text-2xl opacity-70">
                  Order <strong>#VN-{randomNum}</strong> is being prepared. A
                  confirmation note is on its way to {orderInfo.email}.
                </p>
              </div>
              <div className="bg-amber-100 mt-8 p-12 flex flex-col items-start gap-1">
                <h4 className="text-3xl">Delivering to</h4>
                <p className="text-2xl italic opacity-80">
                  {orderInfo.fullname}, {orderInfo.address}, {orderInfo.city},
                  {orderInfo.pin}, {orderInfo.country}
                </p>
                <h4 className="text-3xl mt-8">Estimated Delivery</h4>
                <p className="text-2xl italic opacity-80 mb-6">
                  3-5 business days.
                </p>

                <Button type="primary" onClick={handleBackToShop}>
                  Continue Shopping
                </Button>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-start gap-4">
              <span className="eyebrow">Lost</span>
              <h2>Order First</h2>
              <p className="text-2xl opacity-80">
                You will be automatically redirected to this page after you
                successfully place your order.
              </p>
              <Button type="primary" onClick={handleBackToShop}>
                Continue Shopping
              </Button>
            </div>
          )}
        </div>
      </section>
      <div className="h-px w-full bg-amber-950/10" />
    </>
  );
}
