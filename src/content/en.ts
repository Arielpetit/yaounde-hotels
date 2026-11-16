import type { HotelConfig } from "@/config/types";
import { fr } from "./fr";

/** English edition. Non-text data (images, phones, prices) is shared with the French file. */
export const en: HotelConfig = {
  ...fr,
  name: "Massao Palace Hotel",
  tagline: "Elegance in the heart of Tsinga",
  description:
    "A 27-room hotel in Tsinga, Yaoundé: rooms with balconies and hill views, restaurant, bar, terrace, massage room, airport shuttle and free private parking.",
  locale: "en",
  nav: [
    { label: "The Palace", href: "#hotel" },
    { label: "Rooms", href: "#chambres" },
    { label: "Lifestyle", href: "#experiences" },
    { label: "Services", href: "#services" },
    { label: "Location", href: "#acces" },
  ],
  hero: {
    ...fr.hero,
    eyebrow: "Tsinga · Yaoundé · Cameroon",
    titleLines: ["A palace", "on a human scale,", "facing the hills."],
    subtitle:
      "Twenty-seven rooms with balconies, a terrace open morning and evening, and an attentive team, steps from Avenue Jean-Paul II.",
    cta: "Contact us",
  },
  intro: {
    ...fr.intro,
    kicker: "The Palace",
    statement:
      "Here, luxury is measured in thoughtful touches: a terrace at sunrise, a room open to the hills of Yaoundé, a welcome that remembers you.",
    body:
      "Tucked into the residential district of Tsinga, between the sub-prefecture and the leafy avenues of Bastos, Massao Palace combines the calm of a home with the services of a larger hotel: 24-hour front desk, restaurant, bar, massage room, airport shuttle and private parking. Our team welcomes you in French and English.",
    imageCaption: "Air-conditioned room with balcony",
    stats: [
      { value: 27, label: "Air-conditioned rooms with balcony" },
      { value: 24, suffix: "/7", label: "Front desk and room service" },
      { value: 2, suffix: " min", label: "From Tsinga Grand Mosque" },
      { value: 2, label: "Languages spoken: French and English" },
    ],
  },
  marquee: ["Hill views", "Terrace", "Massage room", "Restaurant & bar", "Airport shuttle", "Free Wi-Fi", "Private parking"],
  roomsSection: {
    kicker: "Rooms & suites",
    title: "Your balcony over Yaoundé.",
    intro: "Every room has a balcony, a private bathroom, air conditioning and a flat-screen satellite TV.",
  },
  rooms: [
    {
      ...fr.rooms[0],
      name: "Mini Suite",
      tagline: "Room for three",
      description:
        "Twenty square metres designed for families or small groups: up to three guests, mountain view, private balcony and all the comfort of the Palace.",
      priceNote: "per night",
      capacity: "3 guests",
      features: [
        { icon: "mountain", label: "Mountain view" },
        { icon: "users", label: "Up to 3 guests" },
        { icon: "snowflake", label: "Air conditioning" },
        { icon: "tv", label: "Flat-screen satellite TV" },
        { icon: "sun", label: "Balcony" },
        { icon: "wifi", label: "Free Wi-Fi" },
      ],
    },
    {
      ...fr.rooms[1],
      name: "Standard Twin Room",
      tagline: "Two beds, one balcony",
      description:
        "Two 90 cm single beds, a private bathroom and views of the hills: ideal for colleagues on assignment or friends travelling together.",
      priceNote: "per night",
      capacity: "2 guests",
      features: [
        { icon: "bed", label: "2 single beds, 90 cm" },
        { icon: "mountain", label: "Mountain view" },
        { icon: "shower", label: "Private bathroom" },
        { icon: "desk", label: "Desk and wardrobe" },
        { icon: "snowflake", label: "Air conditioning" },
      ],
    },
    {
      ...fr.rooms[2],
      name: "Double Room",
      tagline: "A stay for two",
      description: "A large bed, a desk to work at, a wardrobe and a balcony for the end of the day: the Palace's essential comfort.",
      priceNote: "Rate on request",
      capacity: "2 guests",
      features: [
        { icon: "bed", label: "Double bed" },
        { icon: "sun", label: "Balcony" },
        { icon: "tv", label: "Flat-screen satellite TV" },
        { icon: "desk", label: "Desk" },
        { icon: "concierge", label: "Room service" },
      ],
    },
  ],
  experiencesSection: { kicker: "Lifestyle", title: "Take your time." },
  experiences: [
    {
      ...fr.experiences[0],
      kicker: "Morning & evening",
      title: "The Terrace",
      description:
        "On the ground floor, the terrace hosts morning coffee and evening conversations, sheltered from the bustle of the capital.",
      points: ["Open morning and evening", "Barbecue area", "Shared lounge to meet up"],
    },
    {
      ...fr.experiences[1],
      kicker: "Flavours",
      title: "Restaurant & Bar",
      description:
        "Taste local cuisine at the restaurant, then carry on the evening at the bar. Room service takes over when you'd rather stay in.",
      points: ["Local cuisine", "Bar and lounge", "Room service"],
    },
    {
      ...fr.experiences[2],
      kicker: "Wellness",
      title: "Massage room",
      description: "After a day of meetings or a long flight, treat yourself to a moment of relaxation in our massage room.",
      points: ["Massages by appointment", "Soothing atmosphere", "Ideal after travelling"],
    },
    {
      ...fr.experiences[3],
      kicker: "Business",
      title: "Conference room",
      description: "A conference room and business centre for your meetings and seminars, minutes from the city centre.",
      points: ["Conference room", "Business centre", "Free Wi-Fi throughout"],
    },
  ],
  amenitiesSection: {
    kicker: "Services",
    title: "Everything is taken care of.",
    intro: "Services designed for business travellers and families alike, included or available on request.",
  },
  amenities: [
    { icon: "plane", title: "Airport shuttle", text: "Transfers to Yaoundé-Nsimalen Airport." },
    { icon: "car", title: "Free private parking", text: "On site, with valet service." },
    { icon: "wifi", title: "Free Wi-Fi", text: "In rooms and common areas." },
    { icon: "concierge", title: "24-hour front desk", text: "A team on hand day and night." },
    { icon: "utensils", title: "Room service", text: "Meals served in your room." },
    { icon: "spa", title: "Massages", text: "Massage room on site." },
    { icon: "flame", title: "Barbecue", text: "Outdoor grill area." },
    { icon: "briefcase", title: "Business centre", text: "Equipped conference room." },
  ],
  gallery: [
    { src: "/images/hero.jpg", alt: "Room opening onto the hills", tall: true },
    { src: "/images/terrasse.jpg", alt: "Terrace" },
    { src: "/images/massage.jpg", alt: "Massage room" },
    { src: "/images/cuisine.jpg", alt: "Local cuisine", tall: true },
    { src: "/images/mini-suite.jpg", alt: "Mini Suite" },
    { src: "/images/bath.jpg", alt: "Bathroom" },
    { src: "/images/bar.jpg", alt: "At the bar", tall: true },
    { src: "/images/restaurant.jpg", alt: "Restaurant" },
    { src: "/images/dining.jpg", alt: "Dinner" },
  ],
  location: {
    ...fr.location,
    kicker: "Location",
    title: "Tsinga, between city and hills.",
    address: ["160 rue Nana Tchakounté", "Tsinga, near Avenue Jean-Paul II", "Yaoundé, Cameroon"],
    landmarks: [
      { label: "Tsinga Grand Mosque", value: "2 min" },
      { label: "Yaoundé Multipurpose Sports Hall", value: "1.9 km" },
      { label: "City centre", value: "3 km" },
      { label: "Yaoundé railway station", value: "3.3 km" },
      { label: "Yaoundé-Nsimalen Airport", value: "≈ 19 km" },
    ],
    note: "Approximate straight-line distances.",
  },
  contactSection: {
    ...fr.contactSection,
    title: "Your room is waiting.",
    intro:
      "A question about our rooms, the shuttle or a business stay? Our 24-hour front desk answers by phone or WhatsApp, in French or English.",
  },
  contact: {
    ...fr.contact,
    phones: [
      { label: "Front desk", value: "+237 677 81 28 81", href: "tel:+237677812881" },
      { label: "Reservations", value: "+237 699 28 35 29", href: "tel:+237699283529" },
    ],
    hours: "24-hour front desk · Check-out until 12 noon",
  },
  footer: { line: "Elegance in the heart of Tsinga.", credit: "Illustrative photography." },
  faq: {
    kicker: "Good to know",
    title: "Practical information.",
    items: [
      {
        q: "Where is Massao Palace?",
        a: "At 160 rue Nana Tchakounté in the Tsinga district, near Avenue Jean-Paul II and two minutes from Tsinga Grand Mosque. The city centre is about 3 km away.",
      },
      {
        q: "What are the rates?",
        a: "The Standard Twin Room is 30,000 FCFA per night and the Mini Suite (up to 3 guests, 20 m²) is 45,000 FCFA. Contact the front desk for other categories and long stays.",
      },
      {
        q: "What time is check-out?",
        a: "Check-out is until 12 noon. The front desk is open 24/7: let us know your arrival time so everything is ready.",
      },
      {
        q: "Do you offer airport transfers?",
        a: "Yes, a shuttle connects the hotel with Yaoundé-Nsimalen Airport. Send us your flight number when you get in touch.",
      },
      { q: "Are parking and Wi-Fi included?", a: "Yes. Private parking and Wi-Fi are free for hotel guests." },
      {
        q: "Are children and pets welcome?",
        a: "Children of all ages are welcome; the Mini Suite sleeps up to three. Pets are not allowed. The main guest must be at least 18 years old.",
      },
      { q: "Which languages does your team speak?", a: "Our team welcomes you in French and English." },
    ],
  },
  seo: {
    ...fr.seo,
    amenities: ["Free Wi-Fi", "Free private parking", "Airport shuttle", "Restaurant", "Bar", "Terrace", "Massage", "Conference room", "Air conditioning", "24-hour front desk", "Room service"],
  },
};
