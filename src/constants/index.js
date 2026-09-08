import productImgAmbre from "../assets/product-1.webp";
import productImgFumee from "../assets/product-2.webp";
import productImgRose from "../assets/product-3.webp";
import productImgMousse from "../assets/product-4.webp";
import productImgCedre from "../assets/product-5.webp";
import productImgIris from "../assets/product-6.webp";
import productImgNeroli from "../assets/product-7.webp";
import productImgBergamote from "../assets/product-8.webp";
import productImgResine from "../assets/product-9.webp";
import productImgMousson from "../assets/product-10.webp";
import productImgVanille from "../assets/product-11.webp";
import productImgFeve from "../assets/product-12.webp";

export const featuredCollection = [
  {
    id: "featured-01",
    perfumeName: "Ambre Nu — Eau de Parfum",
    perfumeImg: productImgAmbre,
  },
  {
    id: "featured-02",
    perfumeName: "Fumée Noire — Eau de Parfum",
    perfumeImg: productImgFumee,
  },
  {
    id: "featured-03",
    perfumeName: "Rose Voilée — Eau de Parfum",
    perfumeImg: productImgRose,
  },
  {
    id: "featured-04",
    perfumeName: "Sel & Mousse — Eau de Parfum",
    perfumeImg: productImgMousse,
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

export const products = [
  {
    id: "fumee-noire",
    name: "Fumée Noire",
    eauType: "Eau de Parfum",
    familyGroup: "Woody",
    family: "Woody / Smoked Amber",
    img: productImgFumee,
    tagline:
      "Vetiver and burnt cedar wrapped around a single thread of incense.",
    description:
      "A smoked amber built around vetiver and burnt cedar — the kind of fragrance that announces itself once, then goes quiet.",
    about:
      "Fumée Noire opens on a wisp of smoked tea before settling into dry vetiver and charred cedar, with a low current of incense running underneath. Wears close to the skin; best from early evening onward.",
    bottleColor: "Black smoked glass with a brushed gold cap",
    imagePrompt:
      "minimalist glass perfume bottle, black smoked glass, brushed gold cap, no label, warm neutral studio background, soft directional light, editorial product photography, 4:5 portrait",
    notes: {
      top: ["Bergamot", "Pink Pepper", "Smoked Tea"],
      heart: ["Vetiver", "Cedar", "Iris"],
      base: ["Amber", "Labdanum", "Musk"],
    },
    profile: {
      freshness: 2,
      sweetness: 1,
      warmth: 4,
      intensity: 4,
      longevity: 5,
    },
    sizes: [
      { size: "30ml", price: 5900 },
      { size: "50ml", price: 8900 },
      { size: "100ml", price: 13400 },
    ],
    concentration: "Eau de Parfum, 18-20%",
    longevity: "8-10 hours",
    sillage: "Moderate to strong",
    occasions: ["Evening", "Formal", "Date Night"],
    rating: 4.8,
    reviewCount: 126,
  },
  {
    id: "cedre-sauvage",
    name: "Cèdre Sauvage",
    eauType: "Eau de Parfum",
    familyGroup: "Woody",
    family: "Woody / Green",
    img: productImgCedre,
    tagline: "Cedar split open, still damp, still green.",
    description:
      "Raw cedarwood and crushed galbanum, built to smell like a forest floor rather than a furniture shop.",
    about:
      "Cèdre Sauvage begins sharp and resinous — galbanum and cypress cutting through the air — before the cedar itself takes over, sanded but never polished. A fragrance for people who find comfort in the woods rather than the drawing room.",
    bottleColor: "Deep forest-green glass with a matte black cap",
    imagePrompt:
      "minimalist glass perfume bottle, deep forest-green glass, matte black cap, no label, warm neutral studio background, soft directional light, editorial product photography, 4:5 portrait",
    notes: {
      top: ["Galbanum", "Cypress", "Juniper Berry"],
      heart: ["Cedarwood", "Violet Leaf"],
      base: ["Oakmoss", "Vetiver", "Musk"],
    },
    profile: {
      freshness: 3,
      sweetness: 1,
      warmth: 3,
      intensity: 3,
      longevity: 4,
    },
    sizes: [
      { size: "30ml", price: 5600 },
      { size: "50ml", price: 8400 },
      { size: "100ml", price: 12600 },
    ],
    concentration: "Eau de Parfum, 16-18%",
    longevity: "7-9 hours",
    sillage: "Moderate",
    occasions: ["Everyday", "Formal"],
    rating: 4.6,
    reviewCount: 84,
  },
  {
    id: "rose-voilee",
    name: "Rose Voilée",
    eauType: "Eau de Parfum",
    familyGroup: "Floral",
    family: "Powdery Floral",
    img: productImgRose,
    tagline: "A single rose, seen through gauze rather than held in the hand.",
    description:
      "Rose petals softened with powdery iris and musk — never sweet, never loud.",
    about:
      "Rose Voilée treats rose as a texture, not a statement. The petal is there, but muted — filtered through orris powder and a veil of clean musk so it reads as intimate rather than floral in the traditional sense. Better suited to daylight than a gala.",
    bottleColor: "Blush pink glass with a rose-gold cap",
    imagePrompt:
      "minimalist glass perfume bottle, blush pink glass, rose-gold cap, no label, warm neutral studio background, soft directional light, editorial product photography, 4:5 portrait",
    notes: {
      top: ["Pink Pepper", "Litchi"],
      heart: ["Rose Petal", "Iris Root", "Peony"],
      base: ["White Musk", "Sandalwood"],
    },
    profile: {
      freshness: 3,
      sweetness: 2,
      warmth: 2,
      intensity: 2,
      longevity: 3,
    },
    sizes: [
      { size: "30ml", price: 5100 },
      { size: "50ml", price: 7600 },
      { size: "100ml", price: 11400 },
    ],
    concentration: "Eau de Parfum, 15-18%",
    longevity: "6-8 hours",
    sillage: "Light to moderate",
    occasions: ["Everyday", "Date Night"],
    rating: 4.7,
    reviewCount: 112,
  },
  {
    id: "iris-gris",
    name: "Iris Gris",
    eauType: "Eau de Parfum",
    familyGroup: "Floral",
    family: "Powdery Floral",
    img: productImgIris,
    tagline: "Iris root and white musk, cool as the inside of a glove.",
    description:
      "A colder, quieter floral built almost entirely on iris — powdery, mineral, restrained.",
    about:
      "Iris Gris is deliberately austere. Where Rose Voilée is soft, this one is cool — orris butter, ambrette seed, and a whisper of violet leaf, kept at a careful distance from anything sweet. Reads as considered rather than romantic.",
    bottleColor: "Smoked grey glass with a silver cap",
    imagePrompt:
      "minimalist glass perfume bottle, smoked grey glass, silver cap, no label, warm neutral studio background, soft directional light, editorial product photography, 4:5 portrait",
    notes: {
      top: ["Violet Leaf", "Coriander"],
      heart: ["Iris Butter", "Ambrette Seed"],
      base: ["White Musk", "Cashmeran"],
    },
    profile: {
      freshness: 3,
      sweetness: 1,
      warmth: 1,
      intensity: 2,
      longevity: 4,
    },
    sizes: [
      { size: "30ml", price: 5700 },
      { size: "50ml", price: 8600 },
      { size: "100ml", price: 12900 },
    ],
    concentration: "Eau de Parfum, 18-20%",
    longevity: "8-9 hours",
    sillage: "Light",
    occasions: ["Everyday", "Formal"],
    rating: 4.5,
    reviewCount: 67,
  },
  {
    id: "neroli-vif",
    name: "Néroli Vif",
    eauType: "Eau de Parfum",
    familyGroup: "Citrus",
    family: "Citrus",
    img: productImgNeroli,
    tagline: "Orange blossom caught mid-bloom, before it turns sweet.",
    description:
      "Bright neroli and green mandarin over a clean musk base — an opening that never quite fades.",
    about:
      "Most citrus fragrances fade within the hour. Néroli Vif is built to resist that — a high dose of neroli absolute held up by petitgrain and a quiet cedar base, so the brightness lasts well past the first twenty minutes.",
    bottleColor: "Pale yellow-green glass with a brass cap",
    imagePrompt:
      "minimalist glass perfume bottle, pale yellow-green glass, brass cap, no label, warm neutral studio background, soft directional light, editorial product photography, 4:5 portrait",
    notes: {
      top: ["Green Mandarin", "Petitgrain"],
      heart: ["Neroli", "Orange Blossom"],
      base: ["Cedarwood", "White Musk"],
    },
    profile: {
      freshness: 5,
      sweetness: 1,
      warmth: 1,
      intensity: 2,
      longevity: 2,
    },
    sizes: [
      { size: "30ml", price: 4800 },
      { size: "50ml", price: 6900 },
      { size: "100ml", price: 10200 },
    ],
    concentration: "Eau de Parfum, 14-16%",
    longevity: "5-6 hours",
    sillage: "Light",
    occasions: ["Everyday"],
    rating: 4.6,
    reviewCount: 95,
  },
  {
    id: "bergamote-sauvage",
    name: "Bergamote Sauvage",
    eauType: "Eau de Parfum",
    familyGroup: "Citrus",
    family: "Citrus / Aromatic",
    img: productImgBergamote,
    tagline: "Bergamot rind, crushed rosemary, and not much else.",
    description:
      "A sharper, more herbal citrus — bergamot leaning on rosemary and elemi rather than sugar.",
    about:
      "Bergamote Sauvage skips the usual citrus-into-vanilla arc entirely. Bergamot rind opens into rosemary and elemi resin, staying dry and green from first spray to last. Built for someone who wants freshness without sweetness.",
    bottleColor: "Light olive-green glass with a matte gold cap",
    imagePrompt:
      "minimalist glass perfume bottle, light olive-green glass, matte gold cap, no label, warm neutral studio background, soft directional light, editorial product photography, 4:5 portrait",
    notes: {
      top: ["Bergamot", "Lemon Rind"],
      heart: ["Rosemary", "Elemi"],
      base: ["Vetiver", "Ambroxan"],
    },
    profile: {
      freshness: 5,
      sweetness: 1,
      warmth: 1,
      intensity: 2,
      longevity: 3,
    },
    sizes: [
      { size: "30ml", price: 4900 },
      { size: "50ml", price: 7100 },
      { size: "100ml", price: 10600 },
    ],
    concentration: "Eau de Parfum, 15-17%",
    longevity: "6-7 hours",
    sillage: "Light to moderate",
    occasions: ["Everyday"],
    rating: 4.4,
    reviewCount: 58,
  },
  {
    id: "ambre-nu",
    name: "Ambre Nu",
    eauType: "Eau de Parfum",
    familyGroup: "Amber",
    family: "Oriental Amber",
    img: productImgAmbre,
    tagline: "Labdanum and tonka, worn like a second skin.",
    description:
      "A warm, skin-close amber — resinous and soft rather than sweet or heavy.",
    about:
      "Ambre Nu is built on labdanum and tonka bean, warmed further by a trace of benzoin, but kept from turning syrupy by a dry vetiver base. Reads as bare skin in cold weather — warm, not perfumed.",
    bottleColor: "Amber-orange glass with a brushed gold cap",
    imagePrompt:
      "minimalist glass perfume bottle, amber-orange tinted glass, brushed gold cap, no label, warm neutral studio background, soft directional light, editorial product photography, 4:5 portrait",
    notes: {
      top: ["Cardamom", "Bergamot"],
      heart: ["Labdanum", "Benzoin"],
      base: ["Tonka Bean", "Vetiver", "Amber"],
    },
    profile: {
      freshness: 1,
      sweetness: 3,
      warmth: 5,
      intensity: 4,
      longevity: 5,
    },
    sizes: [
      { size: "30ml", price: 6400 },
      { size: "50ml", price: 9600 },
      { size: "100ml", price: 14400 },
    ],
    concentration: "Eau de Parfum, 20-22%",
    longevity: "9-11 hours",
    sillage: "Strong",
    occasions: ["Evening", "Date Night", "Formal"],
    rating: 4.9,
    reviewCount: 158,
  },
  {
    id: "resine-doree",
    name: "Résine Dorée",
    eauType: "Eau de Parfum",
    familyGroup: "Amber",
    family: "Oriental Amber",
    img: productImgResine,
    tagline: "Frankincense and gold leaf, kept at a low simmer.",
    description:
      "A denser, more resinous amber built on frankincense and myrrh rather than tonka.",
    about:
      "Résine Dorée is the heavier of the two ambers in the collection — frankincense and myrrh over a base of dark amber and oud accord, built for the coldest months. Sits close and lasts long; a little goes further than expected.",
    bottleColor: "Deep golden amber glass with an antique brass cap",
    imagePrompt:
      "minimalist glass perfume bottle, deep golden amber glass, antique brass cap, no label, warm neutral studio background, soft directional light, editorial product photography, 4:5 portrait",
    notes: {
      top: ["Saffron", "Pink Pepper"],
      heart: ["Frankincense", "Myrrh"],
      base: ["Amber", "Oud Accord", "Vanilla"],
    },
    profile: {
      freshness: 1,
      sweetness: 3,
      warmth: 5,
      intensity: 5,
      longevity: 5,
    },
    sizes: [
      { size: "30ml", price: 6900 },
      { size: "50ml", price: 10400 },
      { size: "100ml", price: 15600 },
    ],
    concentration: "Eau de Parfum, 20-22%",
    longevity: "10-12 hours",
    sillage: "Strong",
    occasions: ["Evening", "Formal"],
    rating: 4.8,
    reviewCount: 73,
  },
  {
    id: "sel-et-mousse",
    name: "Sel & Mousse",
    eauType: "Eau de Parfum",
    familyGroup: "Fresh",
    family: "Fresh Aromatic",
    img: productImgMousse,
    tagline: "Sea salt, moss and a green fig leaf caught mid-breeze.",
    description:
      "A clean, airy fragrance built around sea salt and fig leaf rather than the usual ozonic accord.",
    about:
      "Sel & Mousse avoids the sharp, synthetic edge most 'fresh' fragrances lean on. Instead it pairs a soft ambrette-salt accord with green fig leaf and a low note of oakmoss, so it feels closer to a walk near the coast than a shower gel.",
    bottleColor: "Pale sea-glass green glass with a silver cap",
    imagePrompt:
      "minimalist glass perfume bottle, pale sea-glass green tinted glass, silver cap, no label, warm neutral studio background, soft directional light, editorial product photography, 4:5 portrait",
    notes: {
      top: ["Sea Salt Accord", "Bergamot"],
      heart: ["Fig Leaf", "Violet Leaf"],
      base: ["Oakmoss", "Ambrette Seed"],
    },
    profile: {
      freshness: 5,
      sweetness: 1,
      warmth: 1,
      intensity: 2,
      longevity: 3,
    },
    sizes: [
      { size: "30ml", price: 4600 },
      { size: "50ml", price: 6900 },
      { size: "100ml", price: 10200 },
    ],
    concentration: "Eau de Parfum, 14-16%",
    longevity: "6-7 hours",
    sillage: "Light",
    occasions: ["Everyday"],
    rating: 4.7,
    reviewCount: 141,
  },
  {
    id: "mousson",
    name: "Mousson",
    eauType: "Eau de Parfum",
    familyGroup: "Fresh",
    family: "Fresh Aquatic",
    img: productImgMousson,
    tagline: "The air before rain, held in a bottle.",
    description:
      "A cooler, greyer freshness — rain-on-stone accord over a quiet vetiver base.",
    about:
      "Mousson is named for the first minutes of a monsoon — that specific mineral, wet-stone smell just before the rain itself arrives. Built on a petrichor accord with cool vetiver and a trace of ambergris, it's the most understated fragrance in the collection.",
    bottleColor: "Blue-grey glass with a matte silver cap",
    imagePrompt:
      "minimalist glass perfume bottle, blue-grey tinted glass, matte silver cap, no label, warm neutral studio background, soft directional light, editorial product photography, 4:5 portrait",
    notes: {
      top: ["Petrichor Accord", "Cardamom"],
      heart: ["Violet Leaf", "Iris"],
      base: ["Vetiver", "Ambergris"],
    },
    profile: {
      freshness: 4,
      sweetness: 1,
      warmth: 2,
      intensity: 2,
      longevity: 4,
    },
    sizes: [
      { size: "30ml", price: 5300 },
      { size: "50ml", price: 7900 },
      { size: "100ml", price: 11800 },
    ],
    concentration: "Eau de Parfum, 16-18%",
    longevity: "7-8 hours",
    sillage: "Light to moderate",
    occasions: ["Everyday", "Formal"],
    rating: 4.5,
    reviewCount: 49,
  },
  {
    id: "vanille-fumee",
    name: "Vanille Fumée",
    eauType: "Eau de Parfum",
    familyGroup: "Gourmand",
    family: "Gourmand",
    img: productImgVanille,
    tagline: "Vanilla, smoked rather than sugared.",
    description:
      "A restrained gourmand — real vanilla pod paired with smoke and leather instead of caramel.",
    about:
      "Vanille Fumée takes the sweetest note in perfumery and deliberately withholds the sugar. Vanilla absolute is paired with birch tar and a suede accord, so what should read as dessert instead reads as something closer to a leather jacket left near a fireplace.",
    bottleColor: "Warm chestnut-brown glass with a black cap",
    imagePrompt:
      "minimalist glass perfume bottle, warm chestnut-brown tinted glass, black cap, no label, warm neutral studio background, soft directional light, editorial product photography, 4:5 portrait",
    notes: {
      top: ["Pink Pepper", "Cinnamon Bark"],
      heart: ["Vanilla Absolute", "Suede Accord"],
      base: ["Birch Tar", "Tonka Bean", "Musk"],
    },
    profile: {
      freshness: 1,
      sweetness: 3,
      warmth: 4,
      intensity: 4,
      longevity: 5,
    },
    sizes: [
      { size: "30ml", price: 5800 },
      { size: "50ml", price: 8700 },
      { size: "100ml", price: 13000 },
    ],
    concentration: "Eau de Parfum, 18-20%",
    longevity: "9-10 hours",
    sillage: "Moderate to strong",
    occasions: ["Evening", "Date Night"],
    rating: 4.7,
    reviewCount: 102,
  },
  {
    id: "feve-tonka",
    name: "Fève Tonka",
    eauType: "Eau de Parfum",
    familyGroup: "Gourmand",
    family: "Gourmand",
    img: productImgFeve,
    tagline: "Tonka bean, almond, and a single note of dry hay.",
    description:
      "A warm, nutty gourmand built on tonka bean rather than vanilla, kept dry with a hay accord.",
    about:
      "Fève Tonka leans into tonka bean's natural almond-hay character rather than pushing it toward dessert. Bitter almond and dry hay keep the sweetness in check, while a base of soft leather and musk gives it enough weight to last the day.",
    bottleColor: "Warm caramel-tan glass with a bronze cap",
    imagePrompt:
      "minimalist glass perfume bottle, warm caramel-tan tinted glass, bronze cap, no label, warm neutral studio background, soft directional light, editorial product photography, 4:5 portrait",
    notes: {
      top: ["Bitter Almond", "Bergamot"],
      heart: ["Tonka Bean", "Dry Hay Accord"],
      base: ["Soft Leather", "Musk", "Sandalwood"],
    },
    profile: {
      freshness: 2,
      sweetness: 3,
      warmth: 4,
      intensity: 3,
      longevity: 4,
    },
    sizes: [
      { size: "30ml", price: 5400 },
      { size: "50ml", price: 8100 },
      { size: "100ml", price: 12100 },
    ],
    concentration: "Eau de Parfum, 17-19%",
    longevity: "8-9 hours",
    sillage: "Moderate",
    occasions: ["Everyday", "Date Night"],
    rating: 4.6,
    reviewCount: 71,
  },
];

export const navMenu = [
  { id: "home-01", title: "Home", toHref: "/" },
  { id: "products-02", title: "Store", toHref: "/store" },
  { id: "cart-03", title: "Cart", toHref: "/cart" },
];
