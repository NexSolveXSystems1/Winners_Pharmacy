import { Globe, Package, Pill, Hospital, MapPin, Phone, Mail, Clock } from "lucide-react";

export const COLOR = {
  navy: "#22577A",
  teal: "#38A3A5",
  green: "#57CC99",
  lgreen: "#80ED99",
  base: "#C7F9CC",
};

export const NAV_LINKS = [
  "Home",
  "About",
  "Founders",
  "Services",
  "Branches",
  "Gallery",
  "Partners",
  "Contact",
];

/* -------------------------------------------------------------------
   GALLERY — images served from /public
   Keep `category` as one of: "Events" | "Products" | "Facilities".
   ------------------------------------------------------------------- */
export const GALLERY_CATEGORIES = [
  { id: "All", label: "All" },
  { id: "Events", label: "Events" },
  { id: "Products", label: "Products & Medicines" },
  { id: "Facilities", label: "Facilities & Team" },
];

export const GALLERY = [
  // Facilities & Team
  {
    id: "g1",
    src: "/winner2.jpeg",
    alt: "Winner Pharmaceuticals storefront in Paynesville",
    caption: "Winner Pharmaceuticals — wholesale & retail branch",
    category: "Facilities",
  },
  {
    id: "g2",
    src: "/winner.jpeg",
    alt: "Fully stocked pharmacy interior with shelves and display counters",
    caption: "Fully stocked retail pharmacy shelves",
    category: "Facilities",
  },
  {
    id: "g3",
    src: "/p10.jpeg",
    alt: "Pharmacy interior with organized medicine shelves and glass counters",
    caption: "Our retail pharmacy floor",
    category: "Facilities",
  },
  {
    id: "g4",
    src: "/p11.jpeg",
    alt: "Staff member working at the pharmacy desk",
    caption: "Our pharmaceutical staff at work",
    category: "Facilities",
  },
  {
    id: "g5",
    src: "/WhatsApp%20Image%202026-06-02%20at%2018.34.08.jpeg",
    alt: "Pharmacy staff member holding medicine products",
    caption: "Dispensing trusted pharmaceutical products",
    category: "Facilities",
  },
  {
    id: "g6",
    src: "/bg1.jpg",
    alt: "Pharmacy operations and distribution",
    caption: "Distribution & operations",
    category: "Facilities",
  },
  {
    id: "g7",
    src: "/bg3.jpg",
    alt: "Winner Pharmaceuticals facility",
    caption: "Serving communities across Liberia",
    category: "Facilities",
  },

  // Events
  {
    id: "g8",
    src: "/p14.jpeg",
    alt: "Winner Pharmaceutical team at the 2022 year-end awards",
    caption: "Year-end party ceremony 2025",
    category: "Events",
  },
  {
    id: "g9",
    src: "/p15.jpeg",
    alt: "Large Winner Pharmaceutical team group photo",
    caption: "Year-end party ceremony 2025",
    category: "Events",
  },
  {
    id: "g10",
    src: "/p16.jpeg",
    alt: "Winner Pharmaceutical staff at the 2023 year-end party",
    caption: "Year-end party ceremony 2025",
    category: "Events",
  },
  {
    id: "g11",
    src: "/bg2.jpg",
    alt: "Community outreach event",
    caption: "Community outreach",
    category: "Events",
  },

  // Products & Medicines
  {
    id: "g12",
    src: "/p0.jpeg",
    alt: "HAVAX FORTE Artemether / Lumefantrine antimalarial tablets",
    caption: "HAVAX FORTE — antimalarial tablets",
    category: "Products",
  },
  {
    id: "g13",
    src: "/p1.jpeg",
    alt: "MEBZOLE Mebendazole chewable worm expeller tablets",
    caption: "MEBZOLE — broad-spectrum anthelmintic",
    category: "Products",
  },
  {
    id: "g14",
    src: "/p2.jpeg",
    alt: "LAB MEBZOLE Mebendazole tablets",
    caption: "LAB MEBZOLE — Mebendazole 100 mg",
    category: "Products",
  },
  {
    id: "g15",
    src: "/p3.jpeg",
    alt: "Fair & Soft Clobetasol cream",
    caption: "Fair & Soft — dermatological cream",
    category: "Products",
  },
  {
    id: "g16",
    src: "/p4.jpeg",
    alt: "MIRACLE Shine & Glow medicated skin cream",
    caption: "MIRACLE Shine & Glow cream",
    category: "Products",
  },
  {
    id: "g17",
    src: "/p5.jpeg",
    alt: "Hungry Cyproheptadine appetite stimulant tablets",
    caption: "Hungry — appetite stimulant tablets",
    category: "Products",
  },
  {
    id: "g18",
    src: "/p6.jpeg",
    alt: "LABTONE multivitamin tablets",
    caption: "LABTONE — multivitamin tablets",
    category: "Products",
  },
  {
    id: "g19",
    src: "/p7.jpeg",
    alt: "Lomezole-20 Omeprazole delayed-release capsules",
    caption: "Lomezole-20 — acid relief capsules",
    category: "Products",
  },
  {
    id: "g20",
    src: "/p8.jpeg",
    alt: "RELIEF pain and fever relief tablets by Laborate",
    caption: "RELIEF — pain & fever tablets",
    category: "Products",
  },
  {
    id: "g21",
    src: "/p9.jpeg",
    alt: "EAT FIN Cyproheptadine appetite stimulant caplets",
    caption: "EAT FIN — appetite stimulant caplets",
    category: "Products",
  },
];

export const FOUNDERS = {
  image: "/Founder.jpeg",
  imageAlt: "Mr. Victor Peah and Mrs. Fannie Peah, founders of Winner Pharmaceuticals",
  names: "Mr. Victor Peah & Mrs. Fannie Peah",
  bio: "In 2005, Mr. Victor Peah and Mrs. Fannie Peah established Winner Pharmaceuticals at Gobachop Market in Paynesville Red Light, Monrovia. What started as a small pharmaceutical outlet grew into a fully Liberian-owned enterprise — importing, distributing, and retailing medicines across Liberia for more than two decades.",
  highlights: [
    "Founders",
    "Fully Liberian-Owned",
    "20+ Years of Service",
  ],
};

export const BRANCHES = [
  {
    id: 1,
    name: "Gobachop Market",
    location: "Monrovia Central, Montserrado County",
    phone: "+231 77 000 001",
    status: "HQ & Flagship",
  },
  {
    id: 2,
    name: "Waterside Branch",
    location: "Waterside Market, Monrovia",
    phone: "+231 77 000 002",
    status: "Active",
  },
  {
    id: 3,
    name: "Red Light Branch",
    location: "Red Light Market, Paynesville",
    phone: "+231 77 000 003",
    status: "Active",
  },
  {
    id: 4,
    name: "Duala Market Branch",
    location: "Duala Market, Monrovia",
    phone: "+231 77 000 004",
    status: "Active",
  },
  {
    id: 5,
    name: "Kakata Branch",
    location: "Kakata City, Margibi County",
    phone: "+231 77 000 005",
    status: "Active",
  },
  {
    id: 6,
    name: "Buchanan Branch",
    location: "Buchanan City, Grand Bassa County",
    phone: "+231 77 000 006",
    status: "Active",
  },
  {
    id: 7,
    name: "Ganta Branch",
    location: "Ganta City, Nimba County",
    phone: "+231 77 000 007",
    status: "Active",
  },
];

export const SERVICES = [
  {
    icon: Globe,
    title: "Pharmaceutical Importation",
    desc: "Licensed by LMHRA to import certified pharmaceutical products directly from WHO-approved international manufacturers. End-to-end regulatory compliance at every stage.",
  },
  {
    icon: Package,
    title: "Wholesale Distribution",
    desc: "High-volume distribution to hospitals, clinics, pharmacies, and NGOs across Liberia. Capable of processing ~$70,000 weekly distribution volume with full cold-chain integrity.",
  },
  {
    icon: Pill,
    title: "Retail Pharmacy Operations",
    desc: "Seven licensed retail pharmacy outlets serving communities across Liberia. Dispensing prescription and OTC medicines with trained pharmaceutical staff.",
  },
  {
    icon: Hospital,
    title: "Medical Supply Chain",
    desc: "Comprehensive supply chain solutions for medical consumables, hospital supplies, and surgical equipment to public and private healthcare institutions.",
  },
];

export const TIMELINE = [
  {
    year: "2005",
    event: "Founded by Victor & Fannie Peah at Gobachop Market, Monrovia",
  },
  {
    year: "2008",
    event:
      "Opened second retail branch, expanding footprint in Montserrado County",
  },
  {
    year: "2012",
    event:
      "Entered wholesale distribution, supplying hospitals and clinics nationwide",
  },
  {
    year: "2016",
    event: "Achieved LMHRA-licensed pharmaceutical importer status",
  },
  {
    year: "2019",
    event: "Expanded to 7 branches across four counties in Liberia",
  },
  {
    year: "2022",
    event:
      "Diversified into real estate; reached ~$70K weekly distribution scale",
  },
  {
    year: "2024",
    event:
      "Consolidated position as one of Liberia's leading pharma distributors",
  },
];

export const TRUST_STATS = [
  { label: "Established", value: "2005" },
  { label: "Branches Nationwide", value: "7" },
  { label: "Regulatory Status", value: "LMHRA Licensed" },
  { label: "Weekly Distribution", value: "~$70K Scale" },
];

export const FEATURE_STATS = [
  { n: "20+", label: "Years of Operation" },
  { n: "7", label: "Pharmacy Branches" },
  { n: "LMHRA", label: "Licensed Importer" },
  { n: "~$70K", label: "Weekly Sales Scale" },
];

export const PHONE = "+231770128959";

export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Kakata-Highway, Monrovia, Liberia",
  },
  { icon: Phone, label: "Phone", value: PHONE },
  { icon: Mail, label: "Email", value: "winnerspharm@gmail.com" },
  { icon: Clock, label: "Hours", value: "Mon–Sat: 8:00 AM – 6:00 PM" },
];

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/share/1LVyJVrraa/?mibextid=wwXIfr",
  whatsapp: `https://wa.me/${PHONE.replace(/\D/g, "")}`,
};

export function buildWhatsAppContactUrl({ name, email, message }) {
  const text = [
    "Hello Winner Pharmaceuticals,",
    "",
    `My name is ${name.trim()}`,
    `Email: ${email.trim()}`,
    "",
    "Message:",
    message.trim(),
  ].join("\n");

  return `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const PARTNER_TAGS = [
  "WHO-GMP Certified",
  "Branded Generics",
  "Full Product Range",
];
