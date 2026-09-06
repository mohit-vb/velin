import { Navbar, Footer } from "./components/layout";
import { Home } from "./pages";

export default function App() {
  return (
    <div className="bg-amber-50">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
