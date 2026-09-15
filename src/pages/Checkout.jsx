import { useState } from "react";
import OrderSummary from "../components/cart/OrderSummary";
const inputClasses =
  "border border-amber-900/20 w-full py-6 px-4 text-xl placeholder:text-xl focus:outline-amber-900/80 focus:shadow-sm";
export default function Checkout() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    fullname: "",
    address: "",
    city: "",
    country: "India",
  });

  const handleChange = function (e) {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = function () {
    console.log(formData);
    setFormData({
      email: "",
      phone: "",
      fullname: "",
      address: "",
      city: "",
      country: "India",
    });
  };

  return (
    <>
      <section className="section">
        <div className="page-container">
          <div className="flex flex-col gap-4">
            <span className="eyebrow">CHECKOUT</span>
            <h2>Where should this find you?</h2>

            <div>
              <form>
                <div className="grid grid-cols-2 gap-16 p-12">
                  <div>
                    <h3 className="text-4xl mb-8">Contact Information</h3>
                    <div className="flex flex-col gap-8">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xl">
                          Email
                        </label>
                        <input
                          className={inputClasses}
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          placeholder="you@email.com"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-xl">
                          Phone
                        </label>
                        <input
                          className={inputClasses}
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="For delivery updates only"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-4xl mb-8">Shipping Address</h3>
                    <div className="flex flex-col gap-8">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="fullname" className="text-xl">
                          Full Name
                        </label>
                        <input
                          className={inputClasses}
                          type="text"
                          id="fullname"
                          name="fullname"
                          value={formData.fullname}
                          onChange={handleChange}
                          placeholder="eg. Ajay Kumar"
                          required
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="address" className="text-xl">
                          Address Line
                        </label>
                        <input
                          className={inputClasses}
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="eg. Flat / House no., Building, Street"
                          required
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="city" className="text-xl">
                          City
                        </label>
                        <input
                          className={inputClasses}
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="e.g. Mumbai"
                          required
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="country" className="text-xl">
                          Country
                        </label>
                        <input
                          className={inputClasses}
                          type="text"
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <OrderSummary onFormSubmit={handleFormSubmit} forForm={true} />
          </div>
        </div>
      </section>
      <div className="h-px w-full bg-amber-950/10" />
    </>
  );
}
