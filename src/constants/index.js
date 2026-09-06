import featuredImg1 from "../assets/featured-1.webp";
import featuredImg2 from "../assets/featured-2.webp";
import featuredImg3 from "../assets/featured-3.webp";
import featuredImg4 from "../assets/featured-4.webp";

export const featuredCollection = [
  {
    id: "featured-01",
    perfumeName: "Arabiyat Prestige Marwa",
    perfumeImg: featuredImg1,
  },
  {
    id: "featured-02",
    perfumeName: "Afnan Supremacy Collector's Edition",
    perfumeImg: featuredImg2,
  },
  {
    id: "featured-03",
    perfumeName: "Afnan Rare Reef Extrait",
    perfumeImg: featuredImg3,
  },
  {
    id: "featured-04",
    perfumeName: "Afnan Turathi Blue Pour Homme",
    perfumeImg: featuredImg4,
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
