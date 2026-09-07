import { Menu, X } from "lucide-react";
import { navMenu } from "../../constants";
import Logo from "../ui/Logo";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-amber-200/50 shadow-sm backdrop-blur-md bg-amber-50/80">
      <div className="page-container">
        {/* Header */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block" href="#">
              <Logo />
            </a>
          </div>

          {/* Desktop Navigation + Mobile Button */}
          <div className="flex items-center gap-6 md:gap-12">
            {/* Desktop Navigation */}
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-20 text-sm">
                {navMenu.map(({ id, title }) => (
                  <li key={id}>
                    <a
                      className="text-3xl text-stone-950 transition-colors hover:text-stone-950/75"
                      href="#"
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="cursor-pointer rounded-sm p-2 text-stone-950 transition-colors hover:text-stone-950/75 md:hidden"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav
          aria-label="Mobile navigation"
          className={`
            absolute top-full right-0 left-0
            border-t border-stone-200 bg-amber-50
            px-4 py-6 shadow-lg
            transition-all duration-300 ease-out
            md:hidden
            ${
              isMenuOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-2 pointer-events-none opacity-0"
            }
          `}
        >
          <ul className="flex flex-col items-center gap-8 text-sm">
            {navMenu.map(({ id, title }) => (
              <li key={id}>
                <a
                  className="text-3xl text-stone-950 transition-colors hover:text-stone-950/75"
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
