import productImg1 from "../assets/product-1.webp";
import productImg2 from "../assets/product-2.webp";
import productImg3 from "../assets/product-3.webp";
import productImg4 from "../assets/product-4.webp";

export const featuredCollection = [
  {
    id: "featured-01",
    perfumeName: "Ambre Nu — Eau de Parfum",
    perfumeImg: productImg1,
  },
  {
    id: "featured-02",
    perfumeName: "Fumée Noire — Eau de Parfum",
    perfumeImg: productImg2,
  },
  {
    id: "featured-03",
    perfumeName: "Rose Voilée — Eau de Parfum",
    perfumeImg: productImg3,
  },
  {
    id: "featured-04",
    perfumeName: "Sel & Mousse — Eau de Parfum",
    perfumeImg: productImg4,
  },
];

export const footerLinks = [
  {
    title: "Shop",
    links: [
      { label: "All Fragrances", href: "/shop" },
      { label: "New Arrivals", href: "/shop?sort=new" },
      { label: "Best Sellers", href: "/shop?sort=bestsellers" },
      { label: "Collections", href: "/collections" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Ingredients", href: "/ingredients" },
      { label: "Journal", href: "/journal" },
      { label: "Gift Guide", href: "/gift" },
    ],
  },
  {
    title: "Customer Care",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Shipping", href: "/shipping" },
      { label: "Returns", href: "/returns" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];
