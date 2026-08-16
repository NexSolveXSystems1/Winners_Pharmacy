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
  "Team",
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
    src: "/pharmacy.jpg",
    alt: "Winner Pharmaceuticals storefront in Paynesville",
    caption: "Winner Pharmaceuticals — wholesale & retail branch",
    category: "Facilities",
  },
    {
    id: "g1",
    src: "/ceo.jpeg",
    alt: "CEO Celebrated his Birthday Laborate",
    caption: "CEO Celebrated his Birthday at Laborate",
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
    src: "/staff.jpeg",
    alt: "Pharmacy interior with organized medicine shelves and glass counters",
    caption: "Our Staff at work",
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
    src: "/winner.jpeg",
    alt: "Pharmacy operations and distribution",
    caption: "Distribution & operations",
    category: "Facilities",
  },
  {
    id: "g7",
    src: "/serving.jpeg",
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
    name: "Coca-Cola Factory Kakata Highway",
    location: "Montserrado County",
    phone: "+231776346338",
    status: "HQ & Flagship",
    managerName: "Rita Queh",
    managerPhoto: "/rita-queh.jpeg",
  },
  {
    id: 2,
    name: "Kuwait Branch",
    location: "Duala Bushrod Island, Monrovia, Liberia",
    phone: "+231 777168007",
    status: "Active",
    managerName: "Fannie Peah",
    managerPhoto: "co.jpeg",
  },
  {
    id: 3,
    name: "Pipeline Red Light Branch",
    location: "Red Light Market, Paynesville",
    phone: "+23177795219",
    status: "Active",
    managerName: "Watta Kamara",
    managerPhoto: null, 
  },
  {
    id: 4,
    name: "Caldwell Branch",
    location: "Bongport Market, Monserrado",
    phone: "+231777955476",
    status: "Active",
    managerName: "Iking Howard",
    managerPhoto: "/caldwell-manager.jpeg",
  },
  {
    id: 5,
    name: "Dolo's Town Branch",
    location: "Lower Margibi County",
    phone: "+231770350518",
    status: "Active",
    managerName: "Chris Blegay",
    managerPhoto: "/dolos-town-manager.jpeg",
  },
  {
    id: 6,
    name: "Ganta Branch",
    location: "nimba County",
    phone: "+231770484711",
    status: "Active",
    managerName: "Naomie Sackie",
    managerPhoto: "/ganta-manager.jpeg",
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
    desc: "High-volume distribution to hospitals, clinics, pharmacies, and NGOs across Liberia. Operating at large-scale weekly distribution capacity with full cold-chain integrity.",
  },
  {
    icon: Pill,
    title: "Retail Pharmacy Operations",
    desc: "Six licensed retail pharmacy outlets serving communities across Liberia. Dispensing prescription and OTC medicines with trained pharmaceutical staff.",
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
      "Diversified into real estate; expanded to nationwide wholesale distribution scale",
  },
  {
    year: "2024",
    event:
      "Consolidated position as one of Liberia's leading pharma distributors",
  },
];

export const TRUST_STATS = [
  { label: "Established", value: "2005" },
  { label: "Branches Nationwide", value: "6" },
  { label: "Regulatory Status", value: "LMHRA Licensed" },
  { label: "Distribution Reach", value: "Nationwide" },
];

export const FEATURE_STATS = [
  { n: "20+", label: "Years of Operation" },
  { n: "6", label: "Pharmacy Branches" },
  { n: "LMHRA", label: "Licensed Importer" },
  { n: "Large", label: "Distribution Scale" },
];

export const TEAM = [
  {
    name: "Victor Peah",
    role: "Co-Founder & Chief Executive Officer",
    bio: "Visionary leader with 20+ years in pharmaceutical distribution. Drives the strategic growth and expansion of Winner Pharmaceuticals across Liberia.",
    initials: "VP",
    color: "#22577A",
    photo: "/ceo1.jpeg",
  },
  {
    name: "Fannie Peah",
    role: "Co-Founder & Executive Director",
    bio: "Instrumental in building Winner Pharmaceuticals from the ground up. Oversees corporate governance, partnerships, and community health initiatives.",
    initials: "FP",
    color: "#38A3A5",
    photo: "/co.jpeg",
  },
  {
    name: "Rita Queh",
    role: "Branch Manager",
    bio: "Licensed pharmaceutical professional ensuring the highest standards of drug quality, dispensing, and regulatory compliance across all retail branches.",
    initials: "RQ",
    color: "#57CC99",
    photo: "/rita-queh.jpeg",
  },
  {
    name: "Victor Peah JR",
    role: "Managing Director",
    bio: "Manages day-to-day logistics and supply chain operations, ensuring timely delivery of medicines to hospitals, clinics, and NGOs nationwide.",
    initials: "VJ",
    color: "#22577A",
    photo: "/victor-peah-jr.jpeg",
  },
  {
    name: "Francis Gobah",
    role: "Human resources & Finance Manager",
    bio: "Manages financial reporting, budgeting, and accounts for Winner Pharmaceuticals, ensuring accuracy and compliance across all branches.",
    initials: "FG",
    color: "#57CC99",
    photo: "/HR.jpeg",
  },
   {
    name: "Toby Queh",
    role: "Marketing Director",
    bio: "Oversees marketing strategy and business development initiatives, strengthening brand visibility, attracting customers, and driving sustainable revenue growth.",
    initials: "VJ",
    color: "#22577A",
    photo: "",
  },
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
