import { Navbar, Footer } from "./components/layout";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <div className="bg-amber-50">
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}
