import type { HotelConfig } from "@/config/types";

/**
 * Massao Palace Hôtel — Tsinga, Yaoundé, Cameroun.
 * Facts sourced from the hotel's website (massaopalacehotel.com, via search index), its public
 * Facebook page and booking listings (Trip.com, Ease Travel, Exploreo). Photos are illustrative
 * placeholders (Unsplash licence): replace the files in /public/images with the hotel's own photography.
 */
export const fr: HotelConfig = {
  name: "Massao Palace Hôtel",
  shortName: "Massao Palace",
  monogram: "MP",
  tagline: "L'élégance au cœur de Tsinga",
  description:
    "Hôtel de 27 chambres à Tsinga, Yaoundé : balcon, climatisation, restaurant, bar, terrasse, salle de fêtes de 350+ places, navette aéroport et parking gratuit.",
  locale: "fr",
  pages: {
    hotel: {
      nav: "L'hôtel",
      kicker: "Le Palace",
      title: "Un palace à taille humaine, au cœur de Tsinga.",
      intro: "Vingt-sept chambres avec balcon, une terrasse ouverte matin et soir et une équipe qui vous accueille en français comme en anglais.",
      image: "/images/facade.jpg",
    },
    chambres: {
      nav: "Chambres",
      kicker: "Chambres & suites",
      title: "Nos chambres et suites",
      intro: "Toutes nos chambres ont un balcon, une salle de bain privative, la climatisation et une télévision satellite à écran plat.",
      image: "/images/real-suite.jpg",
    },
    services: {
      nav: "Services",
      kicker: "Art de vivre",
      title: "Terrasse, table, fêtes, bien-être et affaires",
      intro: "Une terrasse pour le café du matin, une cuisine africaine et internationale, une salle de fêtes de plus de 350 places, une salle de massage et un espace pour vos réunions.",
      image: "/images/restaurant.jpg",
    },
    galerie: {
      nav: "Galerie",
      kicker: "Galerie",
      title: "Le Palace en images",
      intro: "Chambres, terrasse, restaurant et salle de massage : un aperçu de Massao Palace.",
      image: "/images/mini-suite.jpg",
    },
    contact: {
      nav: "Contact",
      kicker: "Contact",
      title: "Contact et accès",
      intro: "160, rue Nana Tchakounté, à Tsinga. Notre réception vous répond 24h/24, par téléphone ou sur WhatsApp.",
      image: "/images/dining.jpg",
    },
  },
  hero: {
    eyebrow: "Tsinga · Yaoundé · Cameroun",
    titleLines: ["Un palace", "à taille humaine,", "face aux collines."],
    subtitle:
      "Vingt-sept chambres avec balcon, une terrasse ouverte matin et soir et une équipe attentive, à deux pas de l'avenue Jean-Paul II.",
    image: "/images/hero.jpg",
    cta: "Voir les chambres",
  },
  intro: {
    kicker: "Le Palace",
    statement:
      "Le luxe se mesure ici en attentions.",
    body:
      "Niché dans le quartier résidentiel de Tsinga, entre la sous-préfecture et les avenues arborées de Bastos, Massao Palace réunit le calme d'une maison et les services d'un grand hôtel : réception 24h/24, restaurant, bar, salle de massage, navette aéroport et parking privé. Nos équipes vous accueillent en français comme en anglais.",
    image: "/images/intro.jpg",
    imageCaption: "Chambre climatisée avec balcon",
    stats: [
      { value: "27", label: "Chambres avec balcon" },
      { value: "24h/24", label: "Réception et service en chambre" },
      { value: "2 min", label: "De la Grande Mosquée de Tsinga" },
      { value: "FR · EN", label: "Langues d'accueil" },
    ],
  },
  facade: {
    image: "/images/facade.jpg",
    focus: "50% 45%",
    caption: "La façade de Massao Palace, rue Nana Tchakounté",
    kicker: "L'établissement",
    title: "Une façade blanche aux fenêtres en arc.",
    text: "Quatre étages de balcons arrondis, des fenêtres vertes en arc et une marquise d'entrée : Massao Palace se reconnaît au premier regard dans le quartier de Tsinga. Un large escalier mène à la réception, ouverte jour et nuit.",
  },
  practical: {
    kicker: "Infos pratiques",
    title: "L'essentiel avant votre séjour.",
    items: [
      { icon: "concierge", label: "Réception", value: "Ouverte 24h/24, 7j/7" },
      { icon: "clock", label: "Départ", value: "Chambre à libérer avant 12h" },
      { icon: "utensils", label: "Petit-déjeuner", value: "Continental et buffet, servi chaque matin" },
      { icon: "car", label: "Parking", value: "Privé, gratuit et surveillé 24h/24" },
      { icon: "wifi", label: "Wi-Fi", value: "Gratuit dans les chambres et les espaces communs" },
      { icon: "plane", label: "Aéroport", value: "Navette vers Yaoundé-Nsimalen" },
      { icon: "users", label: "Langues", value: "Français et anglais" },
      { icon: "sparkles", label: "Services", value: "Blanchisserie, pressing, service en chambre" },
      { icon: "home", label: "Animaux", value: "Non admis" },
    ],
  },
  story: {
    kicker: "Notre maison",
    title: "Le calme d'une maison, les services d'un grand hôtel.",
    paragraphs: [
      "Massao Palace se trouve au 160, rue Nana Tchakounté, dans le quartier résidentiel de Tsinga, près de l'avenue Jean-Paul II, entre la sous-préfecture et les avenues arborées de Bastos. La Grande Mosquée de Tsinga est à deux minutes et le centre-ville à environ 3 km.",
      "Derrière sa façade blanche aux fenêtres en arc, l'hôtel compte vingt-sept chambres climatisées, toutes avec balcon et salle de bain privative ; certaines ont vue sur les collines.",
      "Réception 24h/24, restaurant, bar, terrasse, salle de massage, navette pour l'aéroport de Nsimalen et parking privé gratuit : notre équipe vous accueille en français comme en anglais.",
    ],
    image: "/images/intro.jpg",
  },
  roomsSection: {
    kicker: "Chambres & suites",
    title: "Votre balcon sur Yaoundé.",
    intro:
      "Toutes nos chambres disposent d'un balcon, d'une salle de bain privative, de la climatisation et d'une télévision satellite à écran plat.",
  },
  rooms: [
    {
      id: "mini-suite",
      name: "Mini Suite",
      tagline: "Pour trois",
      description:
        "Vingt mètres carrés pensés pour les familles ou les petits groupes : jusqu'à trois personnes, vue sur la montagne, balcon privatif et tout le confort du Palace.",
      image: "/images/real-suite.jpg",
      price: "45 000 FCFA",
      priceNote: "par nuit",
      capacity: "3 personnes",
      size: "20 m²",
      features: [
        { icon: "mountain", label: "Vue sur la montagne" },
        { icon: "users", label: "Jusqu'à 3 personnes" },
        { icon: "snowflake", label: "Climatisation" },
        { icon: "tv", label: "TV satellite écran plat" },
        { icon: "sun", label: "Balcon" },
        { icon: "wifi", label: "Wi-Fi gratuit" },
      ],
    },
    {
      id: "double-standard",
      name: "Chambre Double Standard",
      tagline: "Deux lits, un balcon",
      description:
        "Deux lits simples de 90 cm, une salle de bain privative et la vue sur les collines : idéale pour les collègues en mission ou les amis en voyage.",
      image: "/images/real-twin.jpg",
      price: "30 000 FCFA",
      priceNote: "par nuit",
      capacity: "2 personnes",
      size: "15 m²",
      features: [
        { icon: "bed", label: "2 lits simples de 90 cm" },
        { icon: "mountain", label: "Vue sur la montagne" },
        { icon: "shower", label: "Salle de bain privative" },
        { icon: "desk", label: "Bureau et armoire" },
        { icon: "snowflake", label: "Climatisation" },
      ],
    },
    {
      id: "chambre-double",
      name: "Chambre Double",
      tagline: "Le séjour à deux",
      description:
        "Un grand lit, un bureau pour travailler, une armoire et un balcon pour les fins de journée : le confort essentiel du Palace.",
      image: "/images/real-double.jpg",
      priceNote: "Tarif sur demande",
      capacity: "2 personnes",
      features: [
        { icon: "bed", label: "Lit double" },
        { icon: "sun", label: "Balcon" },
        { icon: "tv", label: "TV satellite écran plat" },
        { icon: "desk", label: "Bureau" },
        { icon: "concierge", label: "Service en chambre" },
      ],
    },
    {
      id: "suite",
      name: "Suite",
      tagline: "L'espace, 60 m²",
      description:
        "Notre plus grand logement : soixante mètres carrés pour séjourner en famille ou recevoir, avec un vrai coin salon, la climatisation et un balcon.",
      image: "/images/mini-suite.jpg",
      priceNote: "Tarif sur demande",
      capacity: "Famille",
      size: "60 m²",
      features: [
        { icon: "sofa", label: "Coin salon" },
        { icon: "snowflake", label: "Climatisation" },
        { icon: "tv", label: "TV satellite écran plat" },
        { icon: "sun", label: "Balcon" },
        { icon: "wifi", label: "Wi-Fi gratuit" },
      ],
    }
  ],
  experiencesSection: {
    kicker: "Art de vivre",
    title: "Prendre le temps.",
    intro: "La terrasse, la table, le bien-être et les affaires : tout se trouve sous le même toit.",
  },
  experiences: [
    {
      id: "terrasse",
      kicker: "Matin & soir",
      title: "La Terrasse",
      description:
        "Au rez-de-chaussée, la terrasse accueille le café du matin et les conversations du soir, à l'abri de l'agitation de la capitale.",
      image: "/images/terrasse.jpg",
      points: ["Ouverte matin et soir", "Espace barbecue", "Salon commun pour se retrouver"],
    },
    {
      id: "restaurant",
      kicker: "Saveurs",
      title: "Restaurant & Bar",
      description:
        "Le restaurant sert une cuisine africaine et internationale, du petit-déjeuner buffet au dîner ; le bar prolonge la soirée. Le service en chambre prend le relais quand vous préférez rester chez vous.",
      image: "/images/restaurant.jpg",
      points: ["Cuisine africaine et internationale", "Petit-déjeuner continental et buffet", "Bar, salon et service en chambre"],
    },
    {
      id: "salle-de-fetes",
      kicker: "Événements",
      title: "Salle de fêtes",
      description:
        "Mariages, anniversaires, dîners de gala : notre salle de fêtes reçoit plus de 350 invités assis. La location est proposée à partir de 700 000 FCFA, couverts compris.",
      image: "/images/salle-de-fete.jpg",
      points: ["Plus de 350 places assises", "À partir de 700 000 FCFA, couverts compris", "Restauration et parking sur place"],
    },
    {
      id: "massage",
      kicker: "Bien-être",
      title: "Salle de massage",
      description:
        "Après une journée de rendez-vous ou un long vol, offrez-vous un moment de détente dans notre salle de massage.",
      image: "/images/massage.jpg",
      points: ["Massages sur réservation", "Atmosphère apaisante", "Idéal après un voyage"],
    },
    {
      id: "affaires",
      kicker: "Affaires",
      title: "Salle de conférence",
      description:
        "Salle de conférence et centre d'affaires pour vos réunions et séminaires, à quelques minutes du centre-ville.",
      image: "/images/conference.jpg",
      points: ["Salle de conférence", "Centre d'affaires", "Wi-Fi gratuit dans tout l'hôtel"],
    },
  ],
  amenitiesSection: {
    kicker: "Services",
    title: "Tout est prévu.",
    intro: "Des services pensés pour les voyageurs d'affaires comme pour les familles, inclus ou disponibles sur simple demande.",
  },
  amenities: [
    { icon: "plane", title: "Navette aéroport", text: "Transferts vers l'aéroport de Yaoundé-Nsimalen." },
    { icon: "car", title: "Parking privé gratuit", text: "Sur place, avec service voiturier." },
    { icon: "wifi", title: "Wi-Fi gratuit", text: "Dans les chambres et les espaces communs." },
    { icon: "concierge", title: "Réception 24h/24", text: "Une équipe à votre écoute jour et nuit." },
    { icon: "utensils", title: "Service en chambre", text: "Vos repas servis dans votre chambre." },
    { icon: "spa", title: "Massages", text: "Salle de massage sur place." },
    { icon: "flame", title: "Barbecue", text: "Espace grillades en plein air." },
    { icon: "briefcase", title: "Centre d'affaires", text: "Salle de conférence équipée." },
    { icon: "party", title: "Salle de fêtes", text: "Plus de 350 invités assis." },
    { icon: "shield", title: "Sécurité 24h/24", text: "Vidéosurveillance et gardiennage." },
    { icon: "sparkles", title: "Blanchisserie", text: "Lavage et pressing." },
    { icon: "car", title: "Location de voiture", text: "Sur demande à la réception." }
  ],
  gallery: [
    { src: "/images/facade.jpg", alt: "La façade de Massao Palace" },
    { src: "/images/real-suite.jpg", alt: "Mini Suite" },
    { src: "/images/real-twin.jpg", alt: "Chambre Double Standard" },
    { src: "/images/real-double.jpg", alt: "Chambre Double" },
    { src: "/images/hero.jpg", alt: "Chambre ouverte sur les collines", tall: true },
    { src: "/images/terrasse.jpg", alt: "Terrasse" },
    { src: "/images/massage.jpg", alt: "Salle de massage" },
    { src: "/images/cuisine.jpg", alt: "Cuisine locale", tall: true },
    { src: "/images/salle-de-fete.jpg", alt: "Salle de fêtes dressée" },
    { src: "/images/bath.jpg", alt: "Salle de bain" },
    { src: "/images/bar.jpg", alt: "Au bar", tall: true },
    { src: "/images/restaurant.jpg", alt: "Restaurant" },
    { src: "/images/dining.jpg", alt: "Dîner" },
  ],
  location: {
    kicker: "Accès",
    title: "Tsinga, entre ville et collines.",
    address: ["160, rue Nana Tchakounté", "Tsinga, près de l'avenue Jean-Paul II", "Yaoundé, Cameroun"],
    mapQuery: "Massao Palace Hotel, Tsinga, Yaoundé",
    landmarks: [
      { label: "Grande Mosquée de Tsinga", value: "2 min" },
      { label: "Palais polyvalent des sports", value: "1,9 km" },
      { label: "Centre-ville", value: "3 km" },
      { label: "Gare voyageurs de Yaoundé", value: "3,3 km" },
      { label: "Zoo de Mvog-Betsi", value: "≈ 2,7 km" },
      { label: "Aéroport de Yaoundé-Nsimalen", value: "≈ 19 km" },
    ],
    note: "Distances indicatives, à vol d'oiseau.",
  },
  contactSection: {
    kicker: "Contact",
    title: "Votre chambre vous attend.",
    intro:
      "Une question sur nos chambres, la navette ou un séjour d'affaires ? Notre réception, ouverte 24h/24, vous répond par téléphone ou sur WhatsApp, en français comme en anglais.",
    image: "/images/real-suite.jpg",
  },
  contact: {
    phones: [
      { label: "Réception", value: "+237 677 81 28 81", href: "tel:+237677812881" },
      { label: "Réservations", value: "+237 699 28 35 29", href: "tel:+237699283529" },
    ],
    whatsapp: "237677812881",
    email: "sohisti@yahoo.fr",
    hours: "Réception ouverte 24h/24 · Départ jusqu'à 12h",
    socials: [{ label: "Facebook", href: "https://www.facebook.com/massaopalacehotel/" }],
  },
  cta: {
    title: "Votre chambre avec balcon vous attend.",
    text: "Notre réception vous répond jour et nuit, en français comme en anglais.",
    image: "/images/terrasse.jpg",
  },
  footer: {
    line: "L'élégance au cœur de Tsinga.",
    credit: "Photographies d'illustration.",
  },
  faq: {
    kicker: "Infos pratiques",
    title: "Bon à savoir.",
    items: [
      {
        q: "Où se trouve Massao Palace ?",
        a: "Au 160, rue Nana Tchakounté, dans le quartier de Tsinga, près de l'avenue Jean-Paul II et à deux minutes de la Grande Mosquée de Tsinga. Le centre-ville est à environ 3 km.",
      },
      {
        q: "Quels sont les tarifs ?",
        a: "La Chambre Double Standard est à 30 000 FCFA la nuit et la Mini Suite (jusqu'à 3 personnes, 20 m²) à 45 000 FCFA. Contactez la réception pour les autres catégories et les séjours longs.",
      },
      {
        q: "Le petit-déjeuner est-il servi ?",
        a: "Oui, un petit-déjeuner continental et buffet est servi chaque matin au restaurant.",
      },
      {
        q: "Peut-on louer la salle de fêtes ?",
        a: "Oui. La salle accueille plus de 350 invités assis, à partir de 700 000 FCFA couverts compris. Contactez la réception pour vérifier la date et établir un devis.",
      },
      {
        q: "À quelle heure dois-je libérer la chambre ?",
        a: "Le départ se fait jusqu'à 12h. La réception est ouverte 24h/24 : prévenez-nous de votre heure d'arrivée pour que tout soit prêt.",
      },
      {
        q: "Proposez-vous un transfert depuis l'aéroport ?",
        a: "Oui, une navette relie l'hôtel à l'aéroport de Yaoundé-Nsimalen. Indiquez votre numéro de vol au moment de la réservation.",
      },
      {
        q: "Le parking et le Wi-Fi sont-ils inclus ?",
        a: "Oui. Le parking privé et le Wi-Fi sont gratuits pour les clients de l'hôtel.",
      },
      {
        q: "Les enfants et les animaux sont-ils acceptés ?",
        a: "Les enfants de tout âge sont les bienvenus ; la Mini Suite accueille jusqu'à trois personnes. Les animaux de compagnie ne sont pas admis. Le titulaire de la réservation doit avoir au moins 18 ans.",
      },
      {
        q: "Quelles langues parle votre équipe ?",
        a: "Notre équipe vous accueille en français et en anglais.",
      },
    ],
  },
  seo: {
    streetAddress: "160, rue Nana Tchakounté, Tsinga",
    locality: "Yaoundé",
    region: "Centre",
    country: "CM",
    telephone: "+237677812881",
    priceRange: "30 000 – 45 000 FCFA",
    amenities: ["Wi-Fi gratuit", "Parking privé gratuit", "Navette aéroport", "Restaurant", "Bar", "Terrasse", "Massage", "Salle de conférence", "Climatisation", "Réception 24h/24", "Service en chambre"],
  },
};
