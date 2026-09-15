import { useNavigate } from "react-router";
import Button from "../components/ui/Button";

export default function PageNotFound({ renderFor }) {
  const navigate = useNavigate();
  return (
    <>
      <section className="section">
        <div className="page-container">
          <div className="flex flex-col items-start gap-4">
            {renderFor === "product" ? (
              <>
                <span className="eyebrow">Not Found</span>
                <h2>We couldn't find that fragrance.</h2>
                <p className="text-2xl">
                  It may have been retired from the collection, or the link may
                  be outdated. Here's what's still available.
                </p>
                <Button type="primary" onClick={() => navigate("/store")}>
                  Browse All Fragrances
                </Button>
              </>
            ) : (
              <>
                <span className="eyebrow">LOST</span>
                <h2>This page doesn't exist.</h2>
                <p className="text-2xl">
                  The page you're looking for may have moved, or the link might
                  be off. Let's get you back to something real.
                </p>
                <div className="flex items-center gap-8">
                  <Button type="primary" onClick={() => navigate("/")}>
                    Return Home
                  </Button>
                  <Button type="tertiary" onClick={() => navigate("/store")}>
                    Shop Fragrances
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-amber-950/10" />
    </>
  );
}
