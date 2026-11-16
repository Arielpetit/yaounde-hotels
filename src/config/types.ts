export type IconName =
  | "wifi"
  | "snowflake"
  | "tv"
  | "shower"
  | "bath"
  | "desk"
  | "sofa"
  | "bed"
  | "car"
  | "shield"
  | "camera"
  | "flame"
  | "utensils"
  | "wine"
  | "glass"
  | "party"
  | "briefcase"
  | "clock"
  | "concierge"
  | "plane"
  | "spa"
  | "sun"
  | "mountain"
  | "building"
  | "key"
  | "chef"
  | "home"
  | "map"
  | "users"
  | "sparkles"
  | "accessible"
  | "music";

/** Pages of every hotel site. The key is also the URL segment. */
export type PageKey = "hotel" | "chambres" | "services" | "galerie" | "contact";

export interface PageHead {
  /** Short label used in the navigation and breadcrumb. */
  nav: string;
  kicker: string;
  title: string;
  intro: string;
  image: string;
}

export interface Room {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  price?: string;
  priceNote?: string;
  capacity?: string;
  size?: string;
  features: { icon: IconName; label: string }[];
}

export interface Experience {
  id: string;
  kicker: string;
  title: string;
  description: string;
  image: string;
  points: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface HotelConfig {
  name: string;
  shortName: string;
  monogram: string;
  tagline: string;
  description: string;
  locale: string;
  pages: Record<PageKey, PageHead>;
  hero: {
    eyebrow: string;
    titleLines: string[];
    subtitle: string;
    image: string;
    /** Button to the rooms page. */
    cta: string;
  };
  intro: {
    kicker: string;
    statement: string;
    body: string;
    image: string;
    imageCaption: string;
    stats: Stat[];
  };
  /** Longer story shown on the hotel page. */
  story: { kicker: string; title: string; paragraphs: string[]; image: string };
  roomsSection: { kicker: string; title: string; intro: string };
  rooms: Room[];
  experiencesSection: { kicker: string; title: string; intro: string };
  experiences: Experience[];
  amenitiesSection: { kicker: string; title: string; intro: string };
  amenities: { icon: IconName; title: string; text: string }[];
  gallery: { src: string; alt: string; tall?: boolean }[];
  location: {
    kicker: string;
    title: string;
    address: string[];
    mapQuery: string;
    landmarks: { label: string; value: string }[];
    note?: string;
  };
  contactSection: { kicker: string; title: string; intro: string; image: string };
  contact: {
    phones: { label: string; value: string; href: string }[];
    /** International number without "+", e.g. 237657390112. */
    whatsapp?: string;
    email?: string;
    hours: string;
    postal?: string;
    socials: { label: string; href: string }[];
  };
  /** Closing band shown above the footer on every page. */
  cta: { title: string; text: string; image: string };
  footer: { line: string; credit: string };
  testimonials?: {
    kicker: string;
    title: string;
    intro?: string;
    items: { quote: string; author: string; date: string; source: string }[];
  };
  faq?: { kicker: string; title: string; items: { q: string; a: string }[] };
  seo: {
    streetAddress: string;
    locality: string;
    region: string;
    country: string;
    telephone: string;
    lat?: number;
    lng?: number;
    priceRange?: string;
    amenities: string[];
  };
}
