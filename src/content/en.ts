import type { HotelConfig } from "@/config/types";
import { fr } from "./fr";

/** English edition. Non-text data (images, phones, coordinates) is shared with the French file. */
export const en: HotelConfig = {
  ...fr,
  tagline: "Always at your service",
  description:
    "A chic, quiet hotel in Nkolbisson, Yaoundé: air-conditioned rooms and suites, restaurant-bar, a party hall for 300+ guests and 24/7 secure parking.",
  locale: "en",
  pages: {
    hotel: {
      ...fr.pages.hotel,
      nav: "The hotel",
      kicker: "The hotel",
      title: "Clean, chic and calm, above Yaoundé.",
      intro: "Three buildings on the Nkolbisson road, a team on hand day and night, and security thought through to the last detail.",
    },
    chambres: {
      ...fr.pages.chambres,
      nav: "Rooms",
      kicker: "Accommodation",
      title: "Our rooms and suites",
      intro: "Four categories, from the Standard Room to the Senior Suite with lounge, all with hot water and cable TV.",
    },
    services: {
      ...fr.pages.services,
      nav: "Services",
      kicker: "Services",
      title: "Restaurant, bar, parties and meetings",
      intro: "Local cuisine served with care, a bar to end the day, a party hall for 300+ guests and a modular conference room.",
    },
    galerie: {
      ...fr.pages.galerie,
      nav: "Gallery",
      kicker: "Gallery",
      title: "The hotel in pictures",
      intro: "Rooms, party hall, restaurant and bar: a glimpse of La Cave Simson.",
    },
    contact: {
      ...fr.pages.contact,
      nav: "Contact",
      kicker: "Contact",
      title: "Contact and directions",
      intro: "Our front desk answers 24/7 by phone or WhatsApp. The hotel is on the new Nkolbisson road, near the MEEC junction.",
    },
  },
  hero: {
    ...fr.hero,
    eyebrow: "Yaoundé · Nkolbisson · Since 2015",
    titleLines: ["Above", "the city,", "at your service."],
    subtitle: "A chic and peaceful retreat on the Nkolbisson road, with views over almost all of downtown Yaoundé.",
    cta: "View the rooms",
  },
  intro: {
    ...fr.intro,
    kicker: "The hotel",
    statement:
      "Clean, chic and calm, with the city at your feet.",
    body:
      "Set in Yaoundé's 7th district, on the new Nkolbisson road close to the MEEC junction and the N3 national road, La Cave Simson overlooks the capital: from your window the whole city unfolds at a glance. The hotel is wheelchair accessible, and our uniformed team brings years of hospitality experience. They know what today's guests need and anticipate what tomorrow's will.",
    imageCaption: "Junior Suite — soft light and a proper workspace",
    stats: [
      { value: "3", label: "Buildings, one with a lower level" },
      { value: "24/7", label: "Front desk and security" },
      { value: "300+", label: "Guests in the party hall" },
      { value: "3 km", label: "From the Omnisports Stadium" },
    ],
  },
  facade: {
    ...fr.facade,
    caption: "The hotel seen from the Nkolbisson road",
    kicker: "The property",
    title: "Three buildings facing the hills of Yaoundé.",
    text: "A light facade with wrought-iron balconies, red roofs and a gate with diamond motifs: La Cave Simson is easy to spot on the new Nkolbisson road. Behind the gate are a large guarded car park and the reception entrance.",
  },
  practical: {
    kicker: "Good to know",
    title: "The essentials before your stay.",
    items: [
      { icon: "concierge", label: "Front desk", value: "Open 24/7" },
      { icon: "car", label: "Parking", value: "Spacious and guarded 24/7" },
      { icon: "accessible", label: "Accessibility", value: "Wheelchair-accessible property" },
      { icon: "wifi", label: "Connection", value: "Wi-Fi on the premises" },
      { icon: "utensils", label: "Dining", value: "Restaurant, bar and snack bar on site" },
      { icon: "shield", label: "Security", value: "Security gate, CCTV, fire safety" },
    ],
  },
  story: {
    ...fr.story,
    kicker: "Our house",
    title: "Three buildings, one promise.",
    paragraphs: [
      "La Cave Simson Hotel stands in Yaoundé's 7th district, on the new Nkolbisson road, steps from the MEEC junction and the N3 national road. Its elevated position gives views over almost all of the city centre.",
      "The property has three buildings: Building A with two lower levels, and Buildings B and C over three floors. It is wheelchair accessible and has a large car park guarded 24/7.",
      "Our uniformed team brings years of hospitality experience. Their aim is simple: a clean, chic, calm and inviting setting, and service that meets every one of your expectations.",
    ],
  },
  roomsSection: {
    kicker: "Accommodation",
    title: "Rooms designed for rest.",
    intro: "From essential comfort to suites with a lounge, every category offers hot water, cable TV and complete calm.",
  },
  rooms: [
    {
      ...fr.rooms[0],
      name: "Senior Suite",
      tagline: "The long stay",
      description:
        "Our most generous category: a bedroom and a separate lounge to receive guests, work or simply unwind. Ideal for long stays and business trips.",
      priceNote: "Rate on request",
      capacity: "2 guests",
      features: [
        { icon: "sofa", label: "Separate lounge" },
        { icon: "snowflake", label: "Air conditioning" },
        { icon: "tv", label: "Cable TV, 150 channels" },
        { icon: "bath", label: "Bathtub" },
        { icon: "desk", label: "Desk" },
      ],
    },
    {
      ...fr.rooms[1],
      name: "Junior Suite",
      tagline: "Functional elegance",
      description: "A bright suite with a real workspace, for those in Yaoundé on business who won't compromise on comfort.",
      priceNote: "Rate on request",
      capacity: "2 guests",
      features: [
        { icon: "desk", label: "Work table" },
        { icon: "snowflake", label: "Air conditioning" },
        { icon: "tv", label: "Cable TV, 150 channels" },
        { icon: "shower", label: "Hot shower" },
      ],
    },
    {
      ...fr.rooms[2],
      name: "Premium Room",
      tagline: "Premium comfort",
      description: "Comfortable bedding, a clean bathroom with hot water and air conditioning: the essentials, done with care.",
      priceNote: "Rate on request",
      capacity: "1 to 2 guests",
      features: [
        { icon: "snowflake", label: "Air conditioning" },
        { icon: "tv", label: "Cable TV" },
        { icon: "shower", label: "Hot water" },
        { icon: "wifi", label: "Wi-Fi" },
      ],
    },
    {
      ...fr.rooms[3],
      name: "Standard Room",
      tagline: "The essentials, done well",
      description: "Fan-cooled or air-conditioned, with bed, bedside table, desk and mirrored wardrobe. The right choice for short stays.",
      priceNote: "Rate on request",
      capacity: "1 to 2 guests",
      features: [
        { icon: "bed", label: "Comfortable bed" },
        { icon: "desk", label: "Desk" },
        { icon: "shower", label: "Shower or bathtub" },
        { icon: "snowflake", label: "Fan or air conditioning" },
      ],
    },
  ],
  experiencesSection: {
    kicker: "Services",
    title: "Much more than a night.",
    intro: "Restaurant, bar, party hall and meeting room: everything you need to stay, host or work.",
  },
  experiences: [
    {
      ...fr.experiences[0],
      kicker: "Dining",
      title: "The Restaurant",
      description:
        "Cameroonian cuisine and everyday favourites, served by a uniformed team: from business lunches to dinners for two, our dining room welcomes guests and visitors in a friendly atmosphere.",
      points: ["Well-prepared local dishes", "Snack bar and minibar", "Open to guests and visitors"],
    },
    {
      ...fr.experiences[1],
      kicker: "La Cave",
      title: "The Bar",
      description:
        "True to its name, La Cave Simson is also a place to take your time: a drink at the end of the day, a conversation that lingers.",
      points: ["Wines, spirits and soft drinks", "Warm, discreet atmosphere", "The end-of-day meeting place"],
    },
    {
      ...fr.experiences[2],
      kicker: "Banquets",
      title: "Party hall",
      description:
        "Weddings, New Year's Eve galas, birthdays: our large party hall welcomes more than 300 guests and turns your moments into memories, with the help of our partners.",
      points: ["More than 300 guests", "Weddings, receptions and galas", "Large, secure parking"],
    },
    {
      ...fr.experiences[3],
      kicker: "Business",
      title: "Meetings & conferences",
      description:
        "Board meetings, seminars and team sessions: a modular meeting and conference room, quiet, just minutes from the city centre.",
      points: ["Modular room", "Board meetings and seminars", "Catering on site"],
    },
  ],
  amenitiesSection: {
    kicker: "Services & security",
    title: "Your peace of mind, our priority.",
    intro: "La Cave Simson has invested in security features rarely found together in a single hotel in the capital.",
  },
  amenities: [
    { icon: "shield", title: "Security gate", text: "Metal detectors at the entrance." },
    { icon: "camera", title: "CCTV", text: "Surveillance cameras in common areas." },
    { icon: "flame", title: "Fire safety", text: "Alarms, smoke detectors and extinguishers." },
    { icon: "car", title: "Secure parking", text: "Spacious and guarded 24/7." },
    { icon: "key", title: "Key-card doors", text: "Room access by card." },
    { icon: "wifi", title: "Wi-Fi", text: "Connection throughout the hotel." },
    { icon: "tv", title: "Cable TV", text: "Over 150 channels in your room." },
    { icon: "concierge", title: "24/7 assistance", text: "A team on hand day and night." },
    { icon: "accessible", title: "Step-free access", text: "Wheelchair-accessible property." },
    { icon: "shower", title: "Hot water", text: "Hot and cold water, bathtub in some rooms." },
    { icon: "utensils", title: "Restaurant & snack bar", text: "Local dishes and refreshments." },
    { icon: "party", title: "Party hall", text: "More than 300 guests, modular." },
  ],
  gallery: [
    { src: "/images/hero.jpg", alt: "Warm-toned bedroom", tall: true },
    { src: "/images/bar.jpg", alt: "Dark wood bar" },
    { src: "/images/suite-senior.jpg", alt: "Senior Suite" },
    { src: "/images/cocktail.jpg", alt: "Drink served at the bar", tall: true },
    { src: "/images/banquet.jpg", alt: "Party hall set for an event" },
    { src: "/images/bath.jpg", alt: "Bathroom with bathtub" },
    { src: "/images/dining.jpg", alt: "Dinner at the restaurant", tall: true },
    { src: "/images/events.jpg", alt: "Reception table" },
    { src: "/images/wine.jpg", alt: "Glasses of red wine" },
  ],
  location: {
    ...fr.location,
    kicker: "Location",
    title: "On the Nkolbisson road.",
    address: ["New Nkolbisson road", "Near the MEEC junction", "Yaoundé VII, Cameroon"],
    landmarks: [
      { label: "MEEC junction", value: "Steps away" },
      { label: "N3 national road", value: "Nearby" },
      { label: "Yaoundé Omnisports Stadium", value: "3 km" },
      { label: "Oyom-Abang district", value: "A few minutes" },
      { label: "Yaoundé-Nsimalen Airport", value: "≈ 45 min by car" },
    ],
    note: "GPS: 3.8705, 11.4827. Travel times are indicative and depend on traffic.",
  },
  contactSection: {
    ...fr.contactSection,
    kicker: "Contact",
    title: "Let's talk about your stay.",
    intro: "A question about our rooms, an event to plan? Our front desk answers 24/7, by phone or on WhatsApp.",
  },
  contact: {
    ...fr.contact,
    phones: [
      { label: "Front desk 24/7", value: "+237 222 22 75 74", href: "tel:+237222227574" },
      { label: "Mobile", value: "+237 657 39 01 12", href: "tel:+237657390112" },
      { label: "Line 2", value: "+237 242 71 14 66", href: "tel:+237242711466" },
    ],
    hours: "Front desk open 24/7",
    postal: "PO Box 15 139 Yaoundé",
  },
  cta: {
    ...fr.cta,
    title: "A question, a stay, an event?",
    text: "Our front desk answers day and night, by phone or on WhatsApp.",
  },
  footer: { line: "A clean, chic, calm and inviting setting.", credit: "Illustrative photography." },
  testimonials: {
    kicker: "Guest reviews",
    title: "They say it better than we do.",
    intro: "Excerpts from reviews posted by our guests on Africabz. French reviews are translated.",
    items: [
      { quote: "A benchmark hotel for welcome and cleanliness, and above all excellent value for money.", author: "Pierre", date: "May 2019", source: "Africabz · translated" },
      { quote: "Clean and welcoming. The service is good and they genuinely care about the guest.", author: "Brice", date: "May 2021", source: "Africabz · translated" },
      { quote: "The location is strategic, big and comfortable rooms and their services are adorable.", author: "Suh", date: "July 2022", source: "Africabz" },
      { quote: "Lovely hotel, nice decor, friendly place, large secure parking, premium air-conditioned rooms.", author: "Audrey", date: "May 2021", source: "Africabz · translated" },
      { quote: "Accessible even by wheelchair, with good parking and a hall for ceremonies.", author: "Emmanuel", date: "March 2023", source: "Africabz · translated" },
    ],
  },
  faq: {
    kicker: "Good to know",
    title: "Practical information.",
    items: [
      {
        q: "Where is the hotel?",
        a: "On the new Nkolbisson road, near the MEEC junction, in Yaoundé's 7th district. The Omnisports Stadium is about 3 km away and the N3 national road is close by.",
      },
      {
        q: "How can I contact the hotel?",
        a: "Call the front desk, open 24/7, on +237 222 22 75 74, or message us on WhatsApp at +237 657 39 01 12. We'll tell you about availability and rates.",
      },
      {
        q: "What are the rates?",
        a: "Rates depend on the room category and length of stay. Our front desk will give you the exact price and availability when you get in touch.",
      },
      {
        q: "Can I host a wedding or a conference?",
        a: "Yes. Our party hall seats more than 300 guests and our modular meeting room hosts board meetings and seminars. Catering can be provided on site.",
      },
      {
        q: "Is the hotel accessible for guests with reduced mobility?",
        a: "Yes, the property is wheelchair accessible. Let us know your needs before you arrive so we can prepare.",
      },
      { q: "Is there parking?", a: "Yes, a large parking area, guarded and secure 24/7." },
      {
        q: "What security measures are in place?",
        a: "A security gate with metal detectors, CCTV, fire alarms and smoke detectors, extinguishers, and key-card access to rooms.",
      },
    ],
  },
  seo: {
    ...fr.seo,
    amenities: ["Wi-Fi", "Secure parking", "Restaurant", "Bar", "Party hall", "Conference room", "Air conditioning", "Wheelchair access", "24-hour front desk"],
  },
};
