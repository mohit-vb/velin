import { Routes, Route } from "react-router";
import { Home, Store, ProductDetails, Cart, Checkout } from "../pages";
import PageNotFound from "../components/layout/PageNotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
