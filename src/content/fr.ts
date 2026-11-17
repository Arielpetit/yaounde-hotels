import type { HotelConfig } from "@/config/types";

/**
 * Hôtel Mo'o Sa'a — Nouvelle route de Nkolbisson, Yaoundé, Cameroun.
 * Facts sourced from the hotel's own website (hotelmoosaapalace.com, archived May 2024),
 * its Facebook page, Ayila'a and PNBooking listings. Photos are illustrative placeholders
 * (Unsplash licence): replace the files in /public/images with the hotel's own photography.
 */
export const fr: HotelConfig = {
  name: "Hôtel Mo'o Sa'a",
  shortName: "Mo'o Sa'a",
  monogram: "MS",
  tagline: "Vivez une expérience unique",
  description:
    "Hôtel haut standing sur la nouvelle route de Nkolbisson à Yaoundé : chambres climatisées jusqu'à la Mini Suite de 120 m², appartements meublés, restaurant-bar, salle de fêtes, service traiteur et accueil à l'aéroport.",
  locale: "fr",
  pages: {
    hotel: {
      nav: "L'hôtel",
      kicker: "L'hôtel",
      title: "Un cadre reposant et moderne, sur la nouvelle route de Nkolbisson.",
      intro: "Chambres climatisées, appartements meublés, restaurant et salle de fêtes réunis dans un seul établissement.",
      image: "/images/intro.jpg",
    },
    chambres: {
      nav: "Chambres",
      kicker: "Nos hébergements",
      title: "Nos chambres et suites",
      intro: "Quatre catégories, de la Chambre Classique à la Mini Suite de 120 m², toutes climatisées, avec salle de bains privative et télévision par câble.",
      image: "/images/grand-confort.jpg",
    },
    services: {
      nav: "Services",
      kicker: "Nos services",
      title: "Restaurant, fêtes, traiteur et appartements",
      intro: "Une cuisine traditionnelle et exotique, une salle de fêtes élégante, un service traiteur et des appartements meublés pour les longs séjours.",
      image: "/images/real-decor.jpg",
    },
    galerie: {
      nav: "Galerie",
      kicker: "Galerie",
      title: "L'hôtel en images",
      intro: "Chambres, restaurant, salle de fêtes et appartements : un aperçu de Mo'o Sa'a.",
      image: "/images/restaurant.jpg",
    },
    contact: {
      nav: "Contact",
      kicker: "Contact",
      title: "Contact et accès",
      intro: "Sur la nouvelle route de Nkolbisson, en face du collège Excellence. Appelez-nous ou écrivez-nous sur WhatsApp.",
      image: "/images/hero.jpg",
    },
  },
  hero: {
    eyebrow: "Nkolbisson · Yaoundé · Haut standing",
    titleLines: ["Le complexe", "parfait pour", "un séjour inoubliable."],
    subtitle:
      "Un cadre reposant et moderne sur la nouvelle route de Nkolbisson : chambres spacieuses, appartements meublés, restaurant et salle de fêtes réunis en un seul lieu.",
    image: "/images/hero.jpg",
    cta: "Voir les chambres",
  },
  intro: {
    kicker: "L'hôtel",
    statement:
      "Le confort sans compromis, dans une ambiance raffinée.",
    body:
      "Situé sur la nouvelle route de Nkolbisson, en face du collège Excellence et à quelques mètres du carrefour MEEC, l'hôtel Mo'o Sa'a accueille voyageurs d'affaires, familles et longs séjours sur deux niveaux. Chambres climatisées, télévision par câble à écran plat, salle de bains privative et Wi-Fi gratuit dans tout l'établissement : que vous soyez ici pour affaires ou pour le plaisir, notre équipe dévouée met tout en œuvre pour dépasser vos attentes.",
    image: "/images/intro.jpg",
    imageCaption: "Un cadre reposant et moderne",
    stats: [
      { value: "4", label: "Catégories de chambres" },
      { value: "120 m²", label: "Pour la Mini Suite" },
      { value: "39", label: "Chambres climatisées" },
      { value: "2", label: "Niveaux au calme" },
    ],
  },
  facade: {
    image: "/images/facade.jpg",
    portrait: true,
    focus: "50% 40%",
    caption: "L'hôtel Mo'o Sa'a de nuit, nouvelle route de Nkolbisson",
    kicker: "L'établissement",
    title: "Un bâtiment qui s'illumine à la tombée de la nuit.",
    text: "Plusieurs étages de balcons, un liseré lumineux sur le toit et des palmiers à l'entrée : l'hôtel Mo'o Sa'a se repère facilement sur la nouvelle route de Nkolbisson, en face du collège Excellence, à quelques mètres du carrefour MEEC.",
  },
  practical: {
    kicker: "Infos pratiques",
    title: "L'essentiel avant votre séjour.",
    items: [
      { icon: "bed", label: "Chambres", value: "39 chambres climatisées sur deux niveaux" },
      { icon: "wifi", label: "Wi-Fi", value: "Gratuit dans tout l'établissement" },
      { icon: "tv", label: "En chambre", value: "TV câble écran plat, salle de bains privative" },
      { icon: "plane", label: "Aéroport", value: "Accueil et dépôt sur demande, bagages pris en charge" },
      { icon: "utensils", label: "Restaurant & bar", value: "Cuisine traditionnelle et exotique" },
      { icon: "party", label: "Événements", value: "Salle de fêtes et service traiteur" },
      { icon: "home", label: "Longs séjours", value: "Appartements meublés" },
      { icon: "users", label: "Capacité", value: "2 adultes + 1 enfant, Mini Suite jusqu'à 5 personnes" },
      { icon: "concierge", label: "Contact", value: "Téléphone, WhatsApp ou e-mail" },
    ],
  },
  story: {
    kicker: "Notre maison",
    title: "Voyages d'affaires, familles et longs séjours.",
    paragraphs: [
      "Situé sur la nouvelle route de Nkolbisson, en face du collège Excellence et à quelques mètres du carrefour MEEC, l'hôtel Mo'o Sa'a accueille voyageurs d'affaires, familles et clients en long séjour sur deux niveaux.",
      "Chaque chambre est climatisée, avec télévision par câble à écran plat et salle de bains privative. Une connexion Wi-Fi gratuite couvre tout l'établissement.",
      "Que vous soyez ici pour affaires ou pour le plaisir, notre équipe met tout en œuvre pour répondre à vos besoins et dépasser vos attentes : restaurant, salle de fêtes, service traiteur, appartements meublés et accueil à l'aéroport.",
    ],
    image: "/images/appartement.jpg",
  },
  roomsSection: {
    kicker: "Nos hébergements",
    title: "De l'espace pour respirer.",
    intro:
      "Quatre catégories, de la Chambre Classique à la Mini Suite de 120 m², toutes climatisées, avec salle de bains privative et télévision par câble à écran plat.",
  },
  rooms: [
    {
      id: "mini-suite",
      name: "Mini Suite",
      tagline: "120 m² pour la famille",
      description:
        "Notre plus grand espace : 120 m² pour accueillir jusqu'à trois adultes et deux enfants, avec séjour généreux et chambre au calme. Idéale pour les familles et les longs séjours.",
      image: "/images/mini-suite.jpg",
      price: "40 000 FCFA",
      priceNote: "par nuit · indicatif",
      capacity: "3 adultes + 2 enfants",
      size: "120 m²",
      features: [
        { icon: "sofa", label: "Grand espace de séjour" },
        { icon: "users", label: "3 adultes + 2 enfants" },
        { icon: "snowflake", label: "Climatisation" },
        { icon: "tv", label: "TV câble écran plat" },
        { icon: "bath", label: "Salle de bains privative" },
        { icon: "wifi", label: "Wi-Fi gratuit" },
      ],
    },
    {
      id: "grand-confort",
      name: "Chambre Grand Confort",
      tagline: "L'ampleur, 70 m²",
      description:
        "Soixante-dix mètres carrés de calme et de lumière, pensés pour se reposer comme pour travailler. Accueille deux adultes et un enfant.",
      image: "/images/grand-confort.jpg",
      price: "25 000 FCFA",
      priceNote: "par nuit · indicatif",
      capacity: "2 adultes + 1 enfant",
      size: "70 m²",
      features: [
        { icon: "bed", label: "Grand lit" },
        { icon: "snowflake", label: "Climatisation" },
        { icon: "tv", label: "TV câble écran plat" },
        { icon: "shower", label: "Salle de bains privative" },
        { icon: "wifi", label: "Wi-Fi gratuit" },
      ],
    },
    {
      id: "moyen-confort",
      name: "Chambre Moyen Confort",
      tagline: "L'équilibre, 55 m²",
      description:
        "Une chambre spacieuse et bien aménagée, au meilleur rapport confort-prix, pour deux adultes et un enfant.",
      image: "/images/moyen-confort.jpg",
      price: "20 000 FCFA",
      priceNote: "par nuit · indicatif",
      capacity: "2 adultes + 1 enfant",
      size: "55 m²",
      features: [
        { icon: "bed", label: "Lit double" },
        { icon: "snowflake", label: "Climatisation" },
        { icon: "tv", label: "TV câble écran plat" },
        { icon: "shower", label: "Salle de bains privative" },
      ],
    },
    {
      id: "classique",
      name: "Chambre Classique",
      tagline: "L'essentiel, soigné",
      description:
        "Tout le confort Mo'o Sa'a dans une chambre fonctionnelle et chaleureuse, idéale pour une escale à Yaoundé.",
      image: "/images/classique.jpg",
      price: "15 000 FCFA",
      priceNote: "par nuit · indicatif",
      capacity: "2 adultes + 1 enfant",
      features: [
        { icon: "bed", label: "Lit confortable" },
        { icon: "snowflake", label: "Climatisation" },
        { icon: "tv", label: "TV câble écran plat" },
        { icon: "wifi", label: "Wi-Fi gratuit" },
      ],
    },
  ],
  experiencesSection: {
    kicker: "Nos services",
    title: "Rendez votre séjour mémorable.",
    intro: "Restaurant, salle de fêtes, traiteur et appartements meublés : tout ce qu'il faut pour séjourner et célébrer.",
  },
  experiences: [
    {
      id: "restaurant",
      kicker: "Restaurant & bar",
      title: "Une table pour tous les palais",
      description:
        "Notre restaurant vous accueille dans un cadre chaleureux et convivial. Amateur de plats traditionnels ou à la recherche de nouvelles saveurs, notre menu varié, traditionnel et exotique, saura vous satisfaire.",
      image: "/images/restaurant.jpg",
      points: ["Cuisine traditionnelle et exotique", "Bar et rafraîchissements", "Cadre chaleureux et convivial"],
    },
    {
      id: "salle-de-fete",
      kicker: "Événements",
      title: "La Salle de Fêtes",
      description:
        "Ambiance élégante et aménagement spacieux : l'endroit idéal pour vos mariages, anniversaires, réceptions et cérémonies diverses.",
      image: "/images/real-hall.jpg",
      points: ["Mariages et anniversaires", "Réceptions et cérémonies", "Aménagement spacieux et élégant"],
    },
    {
      id: "traiteur",
      kicker: "Service traiteur",
      title: "Nous cuisinons pour vos invités",
      description:
        "Pour vos fêtes et réceptions, notre service traiteur prend en charge les repas de vos invités, avec la même exigence que notre restaurant.",
      image: "/images/traiteur.jpg",
      points: ["Repas d'événements", "Plats traditionnels et exotiques", "Associé à notre salle de fêtes"],
    },
    {
      id: "appartements",
      kicker: "Longs séjours",
      title: "Appartements meublés",
      description:
        "Missions professionnelles, vacances en famille, transition entre deux logements : nos appartements meublés vous offrent l'autonomie d'un chez-soi et les services d'un hôtel.",
      image: "/images/appartement.jpg",
      points: ["Entièrement meublés", "Services de l'hôtel à disposition", "Idéal pour les séjours prolongés"],
    },
  ],
  amenitiesSection: {
    kicker: "Équipements",
    title: "Tout le confort, sans effort.",
    intro: "Des services haut de gamme et des installations modernes pour un séjour confortable et agréable.",
  },
  amenities: [
    { icon: "plane", title: "Dépôt & réception", text: "Accueil et dépôt à l'aéroport, bagages pris en charge." },
    { icon: "wifi", title: "Wi-Fi gratuit", text: "Dans tout l'établissement." },
    { icon: "snowflake", title: "Climatisation", text: "Dans toutes les chambres." },
    { icon: "tv", title: "TV câble écran plat", text: "Dans chaque chambre." },
    { icon: "bath", title: "Salle de bains privative", text: "Pour chaque chambre." },
    { icon: "utensils", title: "Restaurant & bar", text: "Cuisine traditionnelle et exotique." },
    { icon: "party", title: "Salle de fêtes", text: "Mariages, anniversaires, réceptions." },
    { icon: "chef", title: "Service traiteur", text: "Pour vos événements." },
  ],
  gallery: [
    { src: "/images/facade.jpg", alt: "L'hôtel de nuit", tall: true },
    { src: "/images/real-hall.jpg", alt: "La salle de fêtes dressée pour une réception" },
    { src: "/images/real-decor.jpg", alt: "Décoration de mariage dans la salle de fêtes" },
    { src: "/images/hero.jpg", alt: "Chambre au design contemporain", tall: true },
    { src: "/images/restaurant.jpg", alt: "Restaurant" },
    { src: "/images/intro.jpg", alt: "Salon d'appartement" },
    { src: "/images/cuisine.jpg", alt: "Cuisine traditionnelle et exotique", tall: true },
    { src: "/images/bath.jpg", alt: "Salle de bains" },
    { src: "/images/bar.jpg", alt: "Bar et restaurant", tall: true },
    { src: "/images/appartement.jpg", alt: "Cuisine d'appartement meublé" },
    { src: "/images/grand-confort.jpg", alt: "Chambre Grand Confort" },
  ],
  location: {
    kicker: "Accès",
    title: "Sur la nouvelle route de Nkolbisson.",
    address: ["Nouvelle route de Nkolbisson", "En face du collège Excellence", "Yaoundé, Cameroun"],
    mapQuery: "Hôtel Mo'o Sa'a, Nouvelle route Nkolbisson, Yaoundé",
    landmarks: [
      { label: "Collège Excellence", value: "En face" },
      { label: "Carrefour MEEC", value: "Quelques mètres" },
      { label: "Stade Omnisports de Yaoundé", value: "≈ 3 km" },
      { label: "Aéroport de Yaoundé-Nsimalen", value: "≈ 45 min en voiture" },
    ],
    note: "Temps de trajet indicatifs, selon la circulation. Accueil à l'aéroport sur demande.",
  },
  contactSection: {
    kicker: "Contact",
    title: "Votre séjour commence ici.",
    intro:
      "Une chambre, un appartement meublé, une fête à organiser ou un accueil à l'aéroport ? Appelez-nous ou écrivez-nous sur WhatsApp, nous vous répondons rapidement.",
    image: "/images/mini-suite.jpg",
  },
  contact: {
    phones: [
      { label: "Réception", value: "+237 696 87 70 45", href: "tel:+237696877045" },
      { label: "Fixe", value: "+237 222 23 41 47", href: "tel:+237222234147" },
    ],
    whatsapp: "237696877045",
    email: "hotelmoosaapalace@gmail.com",
    hours: "Renseignements par téléphone, WhatsApp ou e-mail",
    socials: [{ label: "Facebook", href: "https://www.facebook.com/hotelmoosaapalace/" }],
  },
  cta: {
    title: "Une chambre, une fête, un séjour prolongé ?",
    text: "Appelez-nous ou écrivez-nous sur WhatsApp, nous vous répondons rapidement.",
    image: "/images/real-decor.jpg",
  },
  footer: {
    line: "Un cadre reposant et moderne.",
    credit: "Photographies d'illustration.",
  },
  faq: {
    kicker: "Infos pratiques",
    title: "Bon à savoir.",
    items: [
      {
        q: "Où se trouve l'hôtel ?",
        a: "Sur la nouvelle route de Nkolbisson, en face du collège Excellence et à quelques mètres du carrefour MEEC, à Yaoundé.",
      },
      {
        q: "Comment contacter l'hôtel ?",
        a: "Appelez-nous ou écrivez-nous sur WhatsApp au +237 696 87 70 45, ou envoyez un e-mail à hotelmoosaapalace@gmail.com. Nous vous renseignons sur les disponibilités et les tarifs.",
      },
      {
        q: "Venez-vous me chercher à l'aéroport ?",
        a: "Oui. Notre service de dépôt et réception vous accueille à l'aéroport et prend en charge vos bagages. Communiquez-nous votre numéro de vol à l'avance.",
      },
      {
        q: "Proposez-vous des séjours longue durée ?",
        a: "Oui, nos appartements meublés sont pensés pour les séjours prolongés, avec les services de l'hôtel à disposition.",
      },
      {
        q: "Puis-je organiser un mariage ou une réception ?",
        a: "Oui. Notre salle de fêtes accueille mariages, anniversaires et cérémonies, et notre service traiteur s'occupe des repas de vos invités.",
      },
      {
        q: "Le Wi-Fi est-il gratuit ?",
        a: "Oui, une connexion Wi-Fi gratuite est disponible dans tout l'établissement.",
      },
      {
        q: "Quels sont les tarifs ?",
        a: "À titre indicatif, les nuits démarrent à 15 000 FCFA en Chambre Classique, 20 000 FCFA en Moyen Confort, 25 000 FCFA en Grand Confort et 40 000 FCFA en Mini Suite. Contactez-nous pour le tarif exact à vos dates.",
      },
      {
        q: "Combien de personnes peut accueillir une chambre ?",
        a: "Les Chambres Classique, Moyen Confort et Grand Confort accueillent deux adultes et un enfant. La Mini Suite de 120 m² reçoit jusqu'à trois adultes et deux enfants.",
      },
    ],
  },
  seo: {
    streetAddress: "Nouvelle route de Nkolbisson, en face du collège Excellence",
    locality: "Yaoundé",
    region: "Centre",
    country: "CM",
    telephone: "+237696877045",
    priceRange: "FCFA",
    amenities: ["Wi-Fi gratuit", "Climatisation", "Restaurant", "Bar", "Salle de fêtes", "Service traiteur", "Appartements meublés", "Navette aéroport", "TV câble"],
  },
};
