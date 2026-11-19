import type { HotelConfig } from "@/config/types";
import { fr } from "./fr";

/** English edition. Non-text data (images, phones, sizes) is shared with the French file. */
export const en: HotelConfig = {
  ...fr,
  name: "Hotel Mo'o Sa'a",
  tagline: "Live a unique experience",
  description:
    "Upscale hotel in Nkolbisson, Yaoundé: air-conditioned rooms up to the 120 m² Mini Suite, furnished apartments, restaurant, party hall and catering.",
  locale: "en",
  pages: {
    hotel: { ...fr.pages.hotel, nav: "The hotel", kicker: "The hotel", title: "A restful, modern setting on the new Nkolbisson road.", intro: "Air-conditioned rooms, furnished apartments, a restaurant and a party hall, all in one place." },
    chambres: { ...fr.pages.chambres, nav: "Rooms", kicker: "Accommodation", title: "Our rooms and suites", intro: "Four categories, from the Classic Room to the 120 m² Mini Suite, all air-conditioned, with a private bathroom and cable TV." },
    services: { ...fr.pages.services, nav: "Services", kicker: "Our services", title: "Restaurant, parties, catering and apartments", intro: "Traditional and exotic cuisine, an elegant party hall, a catering service and furnished apartments for long stays." },
    galerie: { ...fr.pages.galerie, nav: "Gallery", kicker: "Gallery", title: "The hotel in pictures", intro: "Rooms, restaurant, party hall and apartments: a glimpse of Mo'o Sa'a." },
    contact: { ...fr.pages.contact, nav: "Contact", kicker: "Contact", title: "Contact and directions", intro: "On the new Nkolbisson road, opposite Collège Excellence. Call us or message us on WhatsApp." },
  },
  hero: {
    ...fr.hero,
    eyebrow: "Nkolbisson · Yaoundé · Upscale",
    titleLines: ["The perfect", "place for", "an unforgettable stay."],
    subtitle:
      "A restful, modern setting on the new Nkolbisson road: spacious rooms, furnished apartments, a restaurant and a party hall, all in one place.",
    cta: "View the rooms",
  },
  intro: {
    ...fr.intro,
    kicker: "The hotel",
    statement:
      "Comfort without compromise, in a refined atmosphere.",
    body:
      "On the new Nkolbisson road, opposite Collège Excellence and a few metres from the MEEC junction, Hotel Mo'o Sa'a welcomes business travellers, families and long stays across two floors. Air-conditioned rooms, flat-screen cable TV, private bathrooms and free Wi-Fi throughout: whether you are here for business or pleasure, our dedicated team does everything to exceed your expectations.",
    imageCaption: "A restful, modern setting",
    stats: [
      { value: "4", label: "Room categories" },
      { value: "120 m²", label: "For the Mini Suite" },
      { value: "39", label: "Air-conditioned rooms" },
      { value: "2", label: "Quiet floors" },
    ],
  },
  facade: {
    ...fr.facade,
    caption: "Hotel Mo'o Sa'a at night, new Nkolbisson road",
    kicker: "The property",
    title: "A building that lights up at nightfall.",
    text: "Several floors of balconies, a glowing trim along the roof and palm trees at the entrance: Hotel Mo'o Sa'a is easy to find on the new Nkolbisson road, opposite Collège Excellence, a few metres from the MEEC junction.",
  },
  practical: {
    kicker: "Good to know",
    title: "The essentials before your stay.",
    items: [
      { icon: "bed", label: "Rooms", value: "39 air-conditioned rooms on two floors" },
      { icon: "wifi", label: "Wi-Fi", value: "Free throughout the property" },
      { icon: "tv", label: "In the room", value: "Flat-screen cable TV, private bathroom" },
      { icon: "plane", label: "Airport", value: "Pick-up and drop-off on request, luggage handled" },
      { icon: "utensils", label: "Restaurant & bar", value: "Traditional and exotic cuisine" },
      { icon: "party", label: "Events", value: "Party hall and catering" },
      { icon: "home", label: "Long stays", value: "Furnished apartments" },
      { icon: "users", label: "Capacity", value: "2 adults + 1 child, Mini Suite up to 5 guests" },
      { icon: "concierge", label: "Contact", value: "Phone, WhatsApp or email" },
    ],
  },
  story: {
    ...fr.story,
    kicker: "Our house",
    title: "Business trips, families and long stays.",
    paragraphs: [
      "On the new Nkolbisson road, opposite Collège Excellence and a few metres from the MEEC junction, Hotel Mo'o Sa'a welcomes business travellers, families and long-stay guests across two floors.",
      "Every room is air-conditioned, with a flat-screen cable TV and a private bathroom. Free Wi-Fi covers the whole property.",
      "Whether you are here for business or pleasure, our team does everything to meet your needs and exceed your expectations: restaurant, party hall, catering, furnished apartments and airport pick-up.",
    ],
  },
  roomsSection: {
    kicker: "Accommodation",
    title: "Space to breathe.",
    intro:
      "Four categories, from the Classic Room to the 120 m² Mini Suite, all air-conditioned, with a private bathroom and flat-screen cable TV.",
  },
  rooms: [
    {
      ...fr.rooms[0],
      name: "Mini Suite",
      tagline: "120 m² for the family",
      description:
        "Our largest space: 120 m² for up to three adults and two children, with a generous living area and a quiet bedroom. Ideal for families and long stays.",
      priceNote: "per night · indicative",
      capacity: "3 adults + 2 children",
      features: [
        { icon: "sofa", label: "Large living area" },
        { icon: "users", label: "3 adults + 2 children" },
        { icon: "snowflake", label: "Air conditioning" },
        { icon: "tv", label: "Flat-screen cable TV" },
        { icon: "bath", label: "Private bathroom" },
        { icon: "wifi", label: "Free Wi-Fi" },
      ],
    },
    {
      ...fr.rooms[1],
      name: "Grand Comfort Room",
      tagline: "Generous space, 70 m²",
      description: "Seventy square metres of calm and light, designed for resting as well as working. Sleeps two adults and one child.",
      priceNote: "per night · indicative",
      capacity: "2 adults + 1 child",
      features: [
        { icon: "bed", label: "Large bed" },
        { icon: "snowflake", label: "Air conditioning" },
        { icon: "tv", label: "Flat-screen cable TV" },
        { icon: "shower", label: "Private bathroom" },
        { icon: "wifi", label: "Free Wi-Fi" },
      ],
    },
    {
      ...fr.rooms[2],
      name: "Comfort Room",
      tagline: "The right balance, 55 m²",
      description: "A spacious, well-appointed room with the best balance of comfort and price, for two adults and one child.",
      priceNote: "per night · indicative",
      capacity: "2 adults + 1 child",
      features: [
        { icon: "bed", label: "Double bed" },
        { icon: "snowflake", label: "Air conditioning" },
        { icon: "tv", label: "Flat-screen cable TV" },
        { icon: "shower", label: "Private bathroom" },
      ],
    },
    {
      ...fr.rooms[3],
      name: "Classic Room",
      tagline: "The essentials, with care",
      description: "All the Mo'o Sa'a comfort in a practical, welcoming room, ideal for a stopover in Yaoundé.",
      priceNote: "per night · indicative",
      capacity: "2 adults + 1 child",
      features: [
        { icon: "bed", label: "Comfortable bed" },
        { icon: "snowflake", label: "Air conditioning" },
        { icon: "tv", label: "Flat-screen cable TV" },
        { icon: "wifi", label: "Free Wi-Fi" },
      ],
    },
  ],
  experiencesSection: {
    kicker: "Our services",
    title: "Make your stay memorable.",
    intro: "Restaurant, party hall, catering and furnished apartments: everything you need to stay and celebrate.",
  },
  experiences: [
    {
      ...fr.experiences[0],
      kicker: "Restaurant & bar",
      title: "A table for every taste",
      description:
        "Our restaurant welcomes you in a warm, friendly setting. Whether you love traditional dishes or are looking for new flavours, our varied menu, traditional and exotic, has something for you.",
      points: ["Traditional and exotic cuisine", "Bar and refreshments", "Warm, friendly setting"],
    },
    {
      ...fr.experiences[1],
      kicker: "Events",
      title: "The Party Hall",
      description: "An elegant atmosphere and a spacious layout: the ideal place for weddings, birthdays, receptions and ceremonies of all kinds.",
      points: ["Weddings and birthdays", "Receptions and ceremonies", "Spacious, elegant layout"],
    },
    {
      ...fr.experiences[2],
      kicker: "Catering",
      title: "We cook for your guests",
      description: "For your parties and receptions, our catering service takes care of your guests' meals, with the same standards as our restaurant.",
      points: ["Event meals", "Traditional and exotic dishes", "Paired with our party hall"],
    },
    {
      ...fr.experiences[3],
      kicker: "Long stays",
      title: "Furnished apartments",
      description:
        "Work assignments, family holidays, time between two homes: our furnished apartments give you the independence of a home with the services of a hotel.",
      points: ["Fully furnished", "Hotel services available", "Ideal for extended stays"],
    },
  ],
  amenitiesSection: {
    kicker: "Amenities",
    title: "Total comfort, no effort.",
    intro: "Upscale services and modern facilities for a comfortable, pleasant stay.",
  },
  amenities: [
    { icon: "plane", title: "Drop-off & pick-up", text: "Airport welcome and drop-off, luggage handled." },
    { icon: "wifi", title: "Free Wi-Fi", text: "Throughout the property." },
    { icon: "snowflake", title: "Air conditioning", text: "In every room." },
    { icon: "tv", title: "Flat-screen cable TV", text: "In every room." },
    { icon: "bath", title: "Private bathroom", text: "For every room." },
    { icon: "utensils", title: "Restaurant & bar", text: "Traditional and exotic cuisine." },
    { icon: "party", title: "Party hall", text: "Weddings, birthdays, receptions." },
    { icon: "chef", title: "Catering", text: "For your events." },
  ],
  gallery: [
    { src: "/images/facade.jpg", alt: "The hotel at night", tall: true },
    { src: "/images/real-hall.jpg", alt: "The party hall set for a reception" },
    { src: "/images/real-decor.jpg", alt: "Wedding decor in the party hall" },
    { src: "/images/hero.jpg", alt: "Contemporary bedroom", tall: true },
    { src: "/images/restaurant.jpg", alt: "Restaurant" },
    { src: "/images/intro.jpg", alt: "Apartment living room" },
    { src: "/images/cuisine.jpg", alt: "Traditional and exotic cuisine", tall: true },
    { src: "/images/bath.jpg", alt: "Bathroom" },
    { src: "/images/bar.jpg", alt: "Bar and restaurant", tall: true },
    { src: "/images/appartement.jpg", alt: "Furnished apartment kitchen" },
    { src: "/images/grand-confort.jpg", alt: "Grand Comfort Room" },
  ],
  location: {
    ...fr.location,
    kicker: "Location",
    title: "On the new Nkolbisson road.",
    address: ["New Nkolbisson road", "Opposite Collège Excellence", "Yaoundé, Cameroon"],
    landmarks: [
      { label: "Collège Excellence", value: "Opposite" },
      { label: "MEEC junction", value: "A few metres" },
      { label: "Yaoundé Omnisports Stadium", value: "≈ 3 km" },
      { label: "Yaoundé-Nsimalen Airport", value: "≈ 45 min by car" },
    ],
    note: "Travel times are indicative and depend on traffic. Airport pick-up on request.",
  },
  contactSection: {
    ...fr.contactSection,
    title: "Your stay starts here.",
    intro:
      "A room, a furnished apartment, a party to plan or an airport pick-up? Call us or message us on WhatsApp and we'll get back to you quickly.",
  },
  contact: {
    ...fr.contact,
    phones: [
      { label: "Front desk", value: "+237 696 87 70 45", href: "tel:+237696877045" },
      { label: "Landline", value: "+237 222 23 41 47", href: "tel:+237222234147" },
    ],
    hours: "Enquiries by phone, WhatsApp or email",
  },
  cta: { ...fr.cta, title: "A room, a party, an extended stay?", text: "Call us or message us on WhatsApp and we'll get back to you quickly." },
  footer: { line: "A restful, modern setting.", credit: "Illustrative photography." },
  faq: {
    kicker: "Good to know",
    title: "Practical information.",
    items: [
      {
        q: "Where is the hotel?",
        a: "On the new Nkolbisson road, opposite Collège Excellence and a few metres from the MEEC junction, in Yaoundé.",
      },
      {
        q: "How can I contact the hotel?",
        a: "Call or message us on WhatsApp at +237 696 87 70 45, or email hotelmoosaapalace@gmail.com. We'll tell you about availability and rates.",
      },
      {
        q: "Do you pick guests up at the airport?",
        a: "Yes. Our drop-off and pick-up service meets you at the airport and handles your luggage. Send us your flight number in advance.",
      },
      {
        q: "Do you offer long stays?",
        a: "Yes, our furnished apartments are designed for extended stays, with the hotel's services available.",
      },
      {
        q: "Can I host a wedding or a reception?",
        a: "Yes. Our party hall hosts weddings, birthdays and ceremonies, and our catering service takes care of your guests' meals.",
      },
      { q: "Is Wi-Fi free?", a: "Yes, free Wi-Fi is available throughout the property." },
      {
        q: "What are the rates?",
        a: "As a guide, nights start at 15,000 FCFA for the Classic Room, 20,000 FCFA for the Comfort Room, 25,000 FCFA for the Grand Comfort Room and 40,000 FCFA for the Mini Suite. Contact us for the exact rate on your dates.",
      },
      {
        q: "How many people can a room sleep?",
        a: "The Classic, Comfort and Grand Comfort rooms sleep two adults and one child. The 120 m² Mini Suite sleeps up to three adults and two children.",
      },
    ],
  },
  seo: {
    ...fr.seo,
    amenities: ["Free Wi-Fi", "Air conditioning", "Restaurant", "Bar", "Party hall", "Catering", "Furnished apartments", "Airport shuttle", "Cable TV"],
  },
};
