import { Routes, Route } from "react-router";
import {
  Home,
  Store,
  ProductDetails,
  Cart,
  Checkout,
  PageNotFound,
  OrderSuccess,
} from "../pages";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-success" element={<OrderSuccess />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
