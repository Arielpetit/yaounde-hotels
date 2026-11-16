import type { HotelConfig } from "./types";

/**
 * La Cave Simson Hôtel — Nkolbisson, Yaoundé VII, Cameroun.
 * Facts sourced from the hotel's own website (lacavesimsonhotel.com, archived 2023)
 * and public map listings. Photos are illustrative placeholders (Unsplash licence):
 * replace the files in /public/images with the hotel's own photography.
 */
export const site: HotelConfig = {
  name: "La Cave Simson Hôtel",
  shortName: "La Cave Simson",
  monogram: "CS",
  tagline: "Toujours disponible à votre service",
  description:
    "Hôtel chic et calme sur les hauteurs de Nkolbisson, à Yaoundé. Chambres haut standing, suites, bar-restaurant, salle de banquets et sécurité 24h/24, avec vue sur le centre-ville.",
  locale: "fr",
  nav: [
    { label: "L'hôtel", href: "#hotel" },
    { label: "Chambres", href: "#chambres" },
    { label: "Expériences", href: "#experiences" },
    { label: "Services", href: "#services" },
    { label: "Accès", href: "#acces" },
  ],
  hero: {
    eyebrow: "Yaoundé · Nkolbisson · Depuis 2015",
    titleLines: ["Au-dessus", "de la ville,", "à votre service."],
    subtitle:
      "Un refuge chic et calme sur la route de Nkolbisson, d'où le regard embrasse presque tout le centre-ville de Yaoundé.",
    image: "/images/hero.jpg",
    cta: "Réserver un séjour",
  },
  intro: {
    kicker: "L'hôtel",
    statement:
      "Trois bâtiments, une seule promesse : un cadre propre, chic, calme et séduisant, porté par une équipe formée pour répondre à cent pour cent à vos attentes.",
    body:
      "Installée dans l'arrondissement de Yaoundé VII, à cinquante mètres du carrefour MEEC, La Cave Simson domine la capitale. Depuis votre fenêtre, la ville se déploie d'un seul regard. Nos équipes cumulent des années d'expérience hôtelière : elles connaissent les besoins de nos hôtes d'aujourd'hui et anticipent ceux de demain.",
    image: "/images/suite-junior.jpg",
    imageCaption: "Suite Junior — lumière douce et espace de travail",
    stats: [
      { value: 3, label: "Bâtiments, dont un avec sous-sol" },
      { value: 24, suffix: "h/24", label: "Réception, sécurité et assistance" },
      { value: 50, suffix: " m", label: "Du carrefour MEEC" },
      { value: 3, suffix: " km", label: "Du Stade Omnisports" },
    ],
  },
  marquee: [
    "Chambres haut standing",
    "Suites",
    "Bar & Restaurant",
    "Salle de banquets",
    "Salle de réunion",
    "Parking sécurisé",
    "Vue sur Yaoundé",
  ],
  roomsSection: {
    kicker: "Hébergement",
    title: "Des chambres pensées pour le repos.",
    intro:
      "Du confort essentiel aux suites avec salon, chaque catégorie offre eau chaude, télévision câblée et calme absolu.",
  },
  rooms: [
    {
      id: "suite-senior",
      name: "Suite Senior",
      tagline: "Le grand séjour",
      description:
        "Notre catégorie la plus généreuse : une chambre et un salon séparé pour recevoir, travailler ou simplement s'étendre. Idéale pour les longs séjours et les voyages d'affaires.",
      image: "/images/suite-senior.jpg",
      priceNote: "Tarif sur demande",
      capacity: "2 personnes",
      features: [
        { icon: "sofa", label: "Salon séparé" },
        { icon: "snowflake", label: "Climatisation" },
        { icon: "tv", label: "TV câblée, 150 chaînes" },
        { icon: "bath", label: "Baignoire" },
        { icon: "desk", label: "Bureau" },
      ],
    },
    {
      id: "suite-junior",
      name: "Suite Junior",
      tagline: "L'élégance fonctionnelle",
      description:
        "Une suite lumineuse avec un vrai espace de travail, pour ceux qui viennent à Yaoundé pour affaires sans renoncer au confort.",
      image: "/images/suite-junior.jpg",
      priceNote: "Tarif sur demande",
      capacity: "2 personnes",
      features: [
        { icon: "desk", label: "Table de travail" },
        { icon: "snowflake", label: "Climatisation" },
        { icon: "tv", label: "TV câblée, 150 chaînes" },
        { icon: "shower", label: "Douche à eau chaude" },
      ],
    },
    {
      id: "haut-standing",
      name: "Chambre Haut Standing",
      tagline: "Le confort premium",
      description:
        "Literie confortable, salle d'eau propre avec eau chaude et climatisation : l'essentiel, exécuté avec soin.",
      image: "/images/haut-standing.jpg",
      priceNote: "Tarif sur demande",
      capacity: "1 à 2 personnes",
      features: [
        { icon: "snowflake", label: "Climatisation" },
        { icon: "tv", label: "TV câblée" },
        { icon: "shower", label: "Eau chaude" },
        { icon: "wifi", label: "Wi-Fi" },
      ],
    },
    {
      id: "moyen-standing",
      name: "Chambre Moyen Standing",
      tagline: "L'essentiel, bien fait",
      description:
        "Ventilée ou climatisée, avec lit, table de chevet, bureau et placard à miroir. Le bon choix pour les séjours courts.",
      image: "/images/moyen-standing.jpg",
      priceNote: "Tarif sur demande",
      capacity: "1 à 2 personnes",
      features: [
        { icon: "bed", label: "Lit confortable" },
        { icon: "desk", label: "Bureau" },
        { icon: "shower", label: "Douche ou baignoire" },
        { icon: "snowflake", label: "Ventilée ou climatisée" },
      ],
    },
  ],
  experiencesSection: {
    kicker: "Expériences",
    title: "Bien plus qu'une nuit.",
  },
  experiences: [
    {
      id: "restaurant",
      kicker: "Gastronomie",
      title: "Le Restaurant",
      description:
        "Du déjeuner de travail au dîner en tête-à-tête, notre salle accueille hôtes et visiteurs dans une atmosphère feutrée.",
      image: "/images/restaurant.jpg",
      points: ["Déjeuners d'affaires et dîners", "Cadre feutré, service attentionné", "Ouvert aux hôtes et aux visiteurs"],
    },
    {
      id: "bar",
      kicker: "La Cave",
      title: "Le Bar",
      description:
        "Fidèle à son nom, La Cave Simson est aussi un lieu où l'on prend le temps : un verre en fin de journée, une conversation qui se prolonge.",
      image: "/images/bar.jpg",
      points: ["Vins, spiritueux et rafraîchissements", "Ambiance chaleureuse et discrète", "Le rendez-vous de fin de journée"],
    },
    {
      id: "banquets",
      kicker: "Service banquets",
      title: "Salle de fêtes",
      description:
        "Mariages, galas de Saint-Sylvestre, anniversaires : notre grande salle de fêtes transforme vos moments en souvenirs, avec le concours de nos partenaires.",
      image: "/images/banquet.jpg",
      points: ["Mariages et réceptions", "Soirées de gala", "Parking spacieux et sécurisé"],
    },
    {
      id: "reunions",
      kicker: "Affaires",
      title: "Salle de réunion",
      description:
        "Conseils d'administration, séminaires et réunions d'équipe : un espace calme et équipé, à quelques minutes du centre-ville.",
      image: "/images/meeting.jpg",
      points: ["Réunions et conseils d'administration", "Séminaires et formations", "Pauses et repas organisés sur place"],
    },
  ],
  amenitiesSection: {
    kicker: "Services & sécurité",
    title: "Votre tranquillité, notre priorité.",
    intro:
      "La Cave Simson a investi dans des dispositifs de sécurité rarement réunis dans un même hôtel de la capitale.",
  },
  amenities: [
    { icon: "shield", title: "Portique de sécurité", text: "Détecteurs de métaux à l'entrée de l'établissement." },
    { icon: "camera", title: "Vidéosurveillance", text: "Caméras de surveillance dans les espaces communs." },
    { icon: "flame", title: "Sécurité incendie", text: "Alarmes, détecteurs de fumée et extincteurs." },
    { icon: "car", title: "Parking sécurisé", text: "Spacieux et surveillé 24h/24." },
    { icon: "key", title: "Portes magnétiques", text: "Accès aux chambres par carte." },
    { icon: "wifi", title: "Wi-Fi", text: "Connexion dans l'établissement." },
    { icon: "tv", title: "TV câblée", text: "Plus de 150 chaînes en chambre." },
    { icon: "concierge", title: "Assistance 24h/24", text: "Une équipe joignable jour et nuit." },
  ],
  gallery: [
    { src: "/images/hero.jpg", alt: "Chambre aux tons chauds", tall: true },
    { src: "/images/bar.jpg", alt: "Bar en bois sombre" },
    { src: "/images/suite-senior.jpg", alt: "Suite Senior" },
    { src: "/images/cocktail.jpg", alt: "Cocktail servi au bar", tall: true },
    { src: "/images/banquet.jpg", alt: "Salle de fêtes dressée" },
    { src: "/images/bath.jpg", alt: "Salle de bain avec baignoire" },
    { src: "/images/dining.jpg", alt: "Dîner au restaurant", tall: true },
    { src: "/images/events.jpg", alt: "Table de réception" },
    { src: "/images/wine.jpg", alt: "Verres de vin rouge" },
  ],
  location: {
    kicker: "Accès",
    title: "Sur la route de Nkolbisson.",
    address: ["Route de Nkolbisson", "À 50 m du carrefour MEEC", "Yaoundé VII, Cameroun"],
    mapQuery: "3.870501,11.482723",
    landmarks: [
      { label: "Carrefour MEEC", value: "50 m" },
      { label: "Stade Omnisports de Yaoundé", value: "3 km" },
      { label: "Centre-ville", value: "Vue panoramique" },
      { label: "Arrondissement", value: "Yaoundé VII" },
    ],
    note: "Coordonnées GPS : 3.8705, 11.4827",
  },
  booking: {
    kicker: "Réservation",
    title: "Préparez votre séjour.",
    intro:
      "Indiquez vos dates et vos préférences : notre réception vous répond rapidement pour confirmer la disponibilité et le tarif.",
    channel: "email",
    email: "contact@lacavesimsonhotel.com",
  },
  contact: {
    phones: [
      { label: "Réception 24h/24", value: "+237 222 22 75 74", href: "tel:+237222227574" },
      { label: "Ligne 2", value: "+237 242 71 14 66", href: "tel:+237242711466" },
    ],
    email: "contact@lacavesimsonhotel.com",
    hours: "Réception ouverte 24h/24, 7j/7",
    postal: "BP 15 139 Yaoundé",
    socials: [],
  },
  footer: {
    line: "Un cadre propre, chic, calme et séduisant.",
    credit: "Photographies d'illustration.",
  },
};
