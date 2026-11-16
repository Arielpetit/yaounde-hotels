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
  | "sparkles";

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
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export interface HotelConfig {
  name: string;
  shortName: string;
  monogram: string;
  tagline: string;
  description: string;
  locale: string;
  nav: { label: string; href: string }[];
  hero: {
    eyebrow: string;
    titleLines: string[];
    subtitle: string;
    image: string;
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
  marquee: string[];
  roomsSection: { kicker: string; title: string; intro: string };
  rooms: Room[];
  experiencesSection: { kicker: string; title: string };
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
  booking: {
    kicker: string;
    title: string;
    intro: string;
    channel: "whatsapp" | "email";
    whatsapp?: string;
    email?: string;
  };
  contact: {
    phones: { label: string; value: string; href: string }[];
    email?: string;
    hours: string;
    postal?: string;
    socials: { label: string; href: string }[];
  };
  footer: { line: string; credit: string };
}
