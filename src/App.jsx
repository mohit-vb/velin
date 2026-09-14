import { Navbar, Footer } from "./components/layout";
import AppRoutes from "./routes/AppRoutes";
import CartProvider from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <div className="bg-amber-50 selection:bg-amber-500 selection:text-amber-50">
        <Navbar />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
