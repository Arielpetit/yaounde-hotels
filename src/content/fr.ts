import type { HotelConfig } from "@/config/types";

/**
 * La Cave Simson Hôtel — Nkolbisson, Yaoundé VII, Cameroun.
 * Facts sourced from the hotel's own website (lacavesimsonhotel.com, archived 2023),
 * public map listings (Maps.me, Mapcarta) and 18 public guest reviews on Africabz (2018–2023). Photos are illustrative placeholders (Unsplash licence):
 * replace the files in /public/images with the hotel's own photography.
 */
export const fr: HotelConfig = {
  name: "La Cave Simson Hôtel",
  shortName: "La Cave Simson",
  monogram: "CS",
  tagline: "Toujours disponible à votre service",
  description:
    "Hôtel chic et calme sur la route de Nkolbisson, à Yaoundé : chambres climatisées haut standing, suites, bar-restaurant de cuisine locale, salle de fêtes de plus de 300 places, salle de conférence modulable, parking sécurisé 24h/24 et accès en fauteuil roulant.",
  locale: "fr",
  pages: {
    hotel: {
      nav: "L'hôtel",
      kicker: "L'hôtel",
      title: "Un cadre propre, chic et calme, au-dessus de Yaoundé.",
      intro: "Trois bâtiments sur la route de Nkolbisson, une équipe disponible jour et nuit et une sécurité pensée dans les moindres détails.",
      image: "/images/hero.jpg",
    },
    chambres: {
      nav: "Chambres",
      kicker: "Hébergement",
      title: "Nos chambres et suites",
      intro: "Quatre catégories, de la chambre moyen standing à la Suite Senior avec salon, toutes avec eau chaude et télévision câblée.",
      image: "/images/haut-standing.jpg",
    },
    services: {
      nav: "Services",
      kicker: "Services",
      title: "Restaurant, bar, fêtes et réunions",
      intro: "Une cuisine locale servie avec soin, un bar pour finir la journée, une salle de fêtes de plus de 300 places et une salle de conférence modulable.",
      image: "/images/banquet.jpg",
    },
    galerie: {
      nav: "Galerie",
      kicker: "Galerie",
      title: "L'hôtel en images",
      intro: "Chambres, salle de fêtes, restaurant et bar : un aperçu de La Cave Simson.",
      image: "/images/dining.jpg",
    },
    contact: {
      nav: "Contact",
      kicker: "Contact",
      title: "Contact et accès",
      intro: "Notre réception vous répond 24h/24, par téléphone ou sur WhatsApp. L'hôtel se trouve sur la nouvelle route de Nkolbisson, près du carrefour MEEC.",
      image: "/images/events.jpg",
    },
  },
  hero: {
    eyebrow: "Yaoundé · Nkolbisson · Depuis 2015",
    titleLines: ["Au-dessus", "de la ville,", "à votre service."],
    subtitle:
      "Un refuge chic et calme sur la route de Nkolbisson, d'où le regard embrasse presque tout le centre-ville de Yaoundé.",
    image: "/images/suite-senior.jpg",
    cta: "Voir les chambres",
  },
  intro: {
    kicker: "L'hôtel",
    statement:
      "Un cadre propre, chic et calme, avec la ville à vos pieds.",
    body:
      "Installée dans l'arrondissement de Yaoundé VII, sur la nouvelle route de Nkolbisson, tout près du carrefour MEEC et de la route nationale N3, La Cave Simson domine la capitale : depuis votre fenêtre, la ville se déploie d'un seul regard. L'hôtel est accessible en fauteuil roulant et nos équipes, en uniforme, cumulent des années d'expérience hôtelière. Elles connaissent les besoins de nos hôtes d'aujourd'hui et anticipent ceux de demain.",
    image: "/images/suite-junior.jpg",
    imageCaption: "Suite Junior — lumière douce et espace de travail",
    stats: [
      { value: "3", label: "Bâtiments, dont un avec sous-sol" },
      { value: "24h/24", label: "Réception et sécurité" },
      { value: "300+", label: "Invités en salle de fêtes" },
      { value: "3 km", label: "Du Stade Omnisports" },
    ],
  },
  story: {
    kicker: "Notre maison",
    title: "Trois bâtiments, une seule promesse.",
    paragraphs: [
      "La Cave Simson Hôtel est installé dans l'arrondissement de Yaoundé VII, sur la nouvelle route de Nkolbisson, à deux pas du carrefour MEEC et de la route nationale N3. Sa position en hauteur offre, depuis les fenêtres, une vue sur la quasi-totalité du centre-ville.",
      "L'établissement compte trois bâtiments : le bâtiment A avec deux niveaux en sous-sol, le bâtiment B et le bâtiment C sur trois niveaux. Il est accessible en fauteuil roulant et dispose d'un grand parking surveillé 24h/24.",
      "Notre équipe, en uniforme, cumule des années d'expérience hôtelière. Son objectif est simple : un cadre propre, chic, calme et séduisant, et un service qui répond à cent pour cent à vos attentes.",
    ],
    image: "/images/moyen-standing.jpg",
  },
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
    kicker: "Services",
    title: "Bien plus qu'une nuit.",
    intro: "Restaurant, bar, salle de fêtes et salle de réunion : tout ce qu'il faut pour séjourner, recevoir ou travailler.",
  },
  experiences: [
    {
      id: "restaurant",
      kicker: "Gastronomie",
      title: "Le Restaurant",
      description:
        "Cuisine camerounaise et plats du quotidien, servis par un personnel en uniforme : du déjeuner de travail au dîner en tête-à-tête, notre salle accueille hôtes et visiteurs dans une atmosphère conviviale.",
      image: "/images/restaurant.jpg",
      points: ["Plats locaux bien préparés", "Snack-bar et mini-bar", "Ouvert aux hôtes et aux visiteurs"],
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
        "Mariages, galas de Saint-Sylvestre, anniversaires : notre grande salle de fêtes accueille plus de 300 invités et transforme vos moments en souvenirs, avec le concours de nos partenaires.",
      image: "/images/banquet.jpg",
      points: ["Plus de 300 invités", "Mariages, réceptions et galas", "Parking spacieux et sécurisé"],
    },
    {
      id: "reunions",
      kicker: "Affaires",
      title: "Réunions & conférences",
      description:
        "Conseils d'administration, séminaires et réunions d'équipe : une salle de réunion et de conférence modulable, au calme, à quelques minutes du centre-ville.",
      image: "/images/meeting.jpg",
      points: ["Salle modulable", "Conseils d'administration et séminaires", "Restauration sur place"],
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
    { icon: "accessible", title: "Accès PMR", text: "Établissement accessible en fauteuil roulant." },
    { icon: "shower", title: "Eau chaude", text: "Eau chaude et froide, baignoire dans certaines chambres." },
    { icon: "utensils", title: "Restaurant & snack-bar", text: "Plats locaux et rafraîchissements." },
    { icon: "party", title: "Salle de fêtes", text: "Plus de 300 invités, modulable." },
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
    address: ["Nouvelle route de Nkolbisson", "Près du carrefour MEEC", "Yaoundé VII, Cameroun"],
    mapQuery: "3.870501,11.482723",
    landmarks: [
      { label: "Carrefour MEEC", value: "À deux pas" },
      { label: "Route nationale N3", value: "À proximité" },
      { label: "Stade Omnisports de Yaoundé", value: "3 km" },
      { label: "Quartier Oyom-Abang", value: "Quelques minutes" },
      { label: "Aéroport de Yaoundé-Nsimalen", value: "≈ 45 min en voiture" },
    ],
    note: "Coordonnées GPS : 3.8705, 11.4827. Temps de trajet indicatifs, selon la circulation.",
  },
  contactSection: {
    kicker: "Contact",
    title: "Parlons de votre séjour.",
    intro:
      "Une question sur nos chambres, un événement à organiser ? Notre réception vous répond 24h/24, par téléphone ou sur WhatsApp.",
    image: "/images/suite-senior.jpg",
  },
  contact: {
    phones: [
      { label: "Réception 24h/24", value: "+237 222 22 75 74", href: "tel:+237222227574" },
      { label: "Mobile", value: "+237 657 39 01 12", href: "tel:+237657390112" },
      { label: "Ligne 2", value: "+237 242 71 14 66", href: "tel:+237242711466" },
    ],
    whatsapp: "237657390112",
    email: "contact@lacavesimsonhotel.com",
    hours: "Réception ouverte 24h/24, 7j/7",
    postal: "BP 15 139 Yaoundé",
    socials: [],
  },
  cta: {
    title: "Une question, un séjour, un événement ?",
    text: "Notre réception vous répond jour et nuit, par téléphone ou sur WhatsApp.",
    image: "/images/bar.jpg",
  },
  footer: {
    line: "Un cadre propre, chic, calme et séduisant.",
    credit: "Photographies d'illustration.",
  },
  testimonials: {
    kicker: "Avis clients",
    title: "Ils en parlent mieux que nous.",
    intro: "Extraits d'avis publiés par nos hôtes sur Africabz.",
    items: [
      {
        quote: "Hôtel de référence en terme d'accueil, de propreté, et surtout très bon rapport qualité prix.",
        author: "Pierre",
        date: "Mai 2019",
        source: "Africabz",
      },
      {
        quote: "Cadre propre et accueillant. Le service est de qualité et on s'intéresse au client véritablement.",
        author: "Brice",
        date: "Mai 2021",
        source: "Africabz",
      },
      {
        quote: "The location is strategic, big and comfortable rooms and their services are adorable.",
        author: "Suh",
        date: "Juillet 2022",
        source: "Africabz",
      },
      {
        quote: "Bel hôtel, jolie déco, lieu convivial, grand parking sécurisé, chambres climatisées haut standing.",
        author: "Audrey",
        date: "Mai 2021",
        source: "Africabz",
      },
      {
        quote: "Accessible même en fauteuil roulant, avec une bonne place de parking et une salle pour les cérémonies.",
        author: "Emmanuel",
        date: "Mars 2023",
        source: "Africabz",
      },
    ],
  },
  faq: {
    kicker: "Infos pratiques",
    title: "Bon à savoir.",
    items: [
      {
        q: "Où se trouve l'hôtel ?",
        a: "Sur la nouvelle route de Nkolbisson, près du carrefour MEEC, dans l'arrondissement de Yaoundé VII. Le Stade Omnisports est à environ 3 km et la route nationale N3 tout proche.",
      },
      {
        q: "Comment contacter l'hôtel ?",
        a: "Appelez la réception, joignable 24h/24 au +237 222 22 75 74, ou écrivez-nous sur WhatsApp au +237 657 39 01 12. Nous vous renseignons sur les disponibilités et les tarifs.",
      },
      {
        q: "Quels sont les tarifs ?",
        a: "Les tarifs dépendent de la catégorie de chambre et de la durée du séjour. Notre réception vous communique le prix exact et la disponibilité dès réception de votre demande.",
      },
      {
        q: "Peut-on organiser un mariage ou une conférence ?",
        a: "Oui. Notre salle de fêtes accueille plus de 300 invités et notre salle de réunion modulable reçoit conseils d'administration et séminaires. La restauration peut être assurée sur place.",
      },
      {
        q: "L'hôtel est-il accessible aux personnes à mobilité réduite ?",
        a: "Oui, l'établissement est accessible en fauteuil roulant. Signalez vos besoins lors de la réservation afin que nous préparions votre arrivée.",
      },
      {
        q: "Y a-t-il un parking ?",
        a: "Oui, un parking spacieux, surveillé et sécurisé 24h/24.",
      },
      {
        q: "Quelles mesures de sécurité sont en place ?",
        a: "Portique avec détecteurs de métaux, vidéosurveillance, alarmes et détecteurs incendie, extincteurs et accès aux chambres par porte magnétique.",
      },
    ],
  },
  seo: {
    streetAddress: "Nouvelle route de Nkolbisson, près du carrefour MEEC, BP 15 139",
    locality: "Yaoundé",
    region: "Centre",
    country: "CM",
    telephone: "+237222227574",
    lat: 3.870501,
    lng: 11.482723,
    priceRange: "FCFA",
    amenities: ["Wi-Fi", "Parking sécurisé", "Restaurant", "Bar", "Salle de fêtes", "Salle de conférence", "Climatisation", "Accès fauteuil roulant", "Réception 24h/24"],
  },
};
