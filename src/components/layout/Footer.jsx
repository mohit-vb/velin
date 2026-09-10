import Logo from "../ui/Logo";
import { footerLinks } from "../../constants";

export default function Footer() {
  return (
    <footer className="section">
      <div className="page-container">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
          <div className="footer-col sm:row-span-3">
            <Logo />
          </div>
          {footerLinks.map((group) => (
            <div className="flex flex-col text-2xl gap-6" key={group.title}>
              <p className="opacity-60 uppercase font-medium">{group.title}</p>
              {group.links.map((link) => (
                <a
                  href={link.href}
                  key={link.label}
                  className="opacity-80 hover:opacity-100"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
