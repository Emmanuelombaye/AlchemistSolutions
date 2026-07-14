export type Locale = "en" | "sw" | "fr" | "es";

export type Dictionary = {
  welcome: string;
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
    news: string;
    contact: string;
    allServices: string;
    allProjects: string;
  };
  common: {
    getInTouch: string;
    moreAbout: string;
    exploreService: string;
    allProjects: string;
    readMore: string;
    whatsApp: string;
    whatsAppUs: string;
    call: string;
    sendMessage: string;
    yearsExperience: string;
    openMenu: string;
    closeMenu: string;
    language: string;
    formNote: string;
  };
  hero: {
    slides: { title: string; text: string; cta: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    text: string;
    checklist: string[];
    yearsLabel: string;
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { slug: string; title: string; excerpt: string }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    items: { slug: string; title: string; category: string; excerpt: string }[];
  };
  counters: { value: string; label: string }[];
  testimonials: {
    eyebrow: string;
    title: string;
    items: { name: string; role: string; text: string }[];
  };
  team: {
    eyebrow: string;
    title: string;
    items: { name: string; role: string }[];
  };
  partners: string;
  news: {
    eyebrow: string;
    title: string;
    items: { slug: string; title: string; excerpt: string }[];
  };
  cta: { title: string; text: string; button: string };
  footer: {
    about: string;
    quickLinks: string;
    contactUs: string;
    tagline: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    chatWhatsApp: string;
  };
  hours: string;
};

const en: Dictionary = {
  welcome: "Welcome to Alchemist Solutions",
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    projects: "Projects",
    news: "News",
    contact: "Contact",
    allServices: "All Services",
    allProjects: "All Projects",
  },
  common: {
    getInTouch: "Get In Touch",
    moreAbout: "More About Us",
    exploreService: "Explore service",
    allProjects: "All Projects",
    readMore: "Read More",
    whatsApp: "WhatsApp",
    whatsAppUs: "WhatsApp Us",
    call: "Call",
    sendMessage: "Send Message",
    yearsExperience: "Years Experience",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    formNote: "Form is display-only for now — use WhatsApp for fastest response.",
  },
  hero: {
    slides: [
      {
        title: "Craft floors that elevate every room",
        text: "Engineer-led tile and flooring installation — precision layouts, premium materials, flawless finishes.",
        cta: "Discover More",
      },
      {
        title: "Porcelain, marble & hardwood done right",
        text: "From showrooms to residences, we deliver durable surfaces with architectural precision.",
        cta: "View Projects",
      },
      {
        title: "Your dream floors, engineered to last",
        text: "Licensed construction engineering expertise behind every tile line and floor plane.",
        cta: "Get In Touch",
      },
    ],
  },
  about: {
    eyebrow: "About Us",
    title: "We install everything your floors need",
    text: "Alchemist Solutions blends construction engineering with artisan tiling craft. Founded by Felix Kajunior, we specialize in porcelain, marble, stone, hardwood, and luxury vinyl — measured, set, and finished to exacting standards.",
    checklist: [
      "Licensed construction engineer oversight",
      "Premium tile & flooring materials",
      "Waterproofing and substrate prep",
      "Clean, on-schedule site delivery",
    ],
    yearsLabel: "Years Experience",
  },
  services: {
    eyebrow: "What we do",
    title: "Engineered flooring for every space",
    intro:
      "From porcelain and marble to hardwood, vinyl, wet rooms, and restoration — every service is planned by a construction engineer and finished by specialist installers.",
    items: [
      {
        slug: "porcelain-tiling",
        title: "Porcelain Tiling",
        excerpt:
          "Large-format and patterned porcelain with laser-straight joints, correct falls, and lobby-grade durability.",
      },
      {
        slug: "marble-stone",
        title: "Marble & Stone",
        excerpt:
          "Natural stone floors and feature walls with careful matching, bookmatching, and long-term sealing.",
      },
      {
        slug: "hardwood-flooring",
        title: "Hardwood Flooring",
        excerpt:
          "Engineered and solid hardwood with refined finishes, quiet underfoot feel, and correct expansion detailing.",
      },
      {
        slug: "luxury-vinyl",
        title: "Luxury Vinyl",
        excerpt:
          "SPC and LVP systems that look premium, resist spills, and perform in apartments, clinics, and retail.",
      },
      {
        slug: "bath-wet-areas",
        title: "Bath & Wet Areas",
        excerpt:
          "Watertight showers, bathrooms, and balconies with correct falls to drain and anti-slip finishes.",
      },
      {
        slug: "floor-restoration",
        title: "Floor Restoration",
        excerpt:
          "Grind, hone, polish, and reseal tired stone and tile — often faster and greener than full replacement.",
      },
    ],
  },
  projects: {
    eyebrow: "Portfolio",
    title: "Check our latest projects",
    items: [
      {
        slug: "villa-marble-suite",
        title: "Villa Marble Suite",
        category: "Residential",
        excerpt: "Bookmatched marble throughout living and master suite.",
      },
      {
        slug: "hotel-lobby-porcelain",
        title: "Hotel Lobby Porcelain",
        category: "Hospitality",
        excerpt: "Large-format porcelain with feature mosaic insert.",
      },
      {
        slug: "penthouse-hardwood",
        title: "Penthouse Hardwood",
        category: "Residential",
        excerpt: "Wide-plank engineered oak with custom stain.",
      },
      {
        slug: "spa-wet-room",
        title: "Spa Wet Room",
        category: "Wellness",
        excerpt: "Anti-slip porcelain with linear drains.",
      },
      {
        slug: "retail-showroom",
        title: "Retail Showroom",
        category: "Commercial",
        excerpt: "Mixed porcelain and vinyl zones for brand experience.",
      },
      {
        slug: "kitchen-stone-island",
        title: "Kitchen Stone Island",
        category: "Residential",
        excerpt: "Stone floor paired with waterfall island cladding.",
      },
    ],
  },
  counters: [
    { value: "480+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "12+", label: "Years Experience" },
    { value: "35+", label: "Skilled Installers" },
  ],
  testimonials: {
    eyebrow: "Testimonials",
    title: "Our happy customers",
    items: [
      {
        name: "Amina W.",
        role: "Homeowner",
        text: "The marble installation was flawless. Straight lines, quiet floors, and the crew left the site spotless.",
      },
      {
        name: "David K.",
        role: "Hotel Manager",
        text: "They managed overnight works without disrupting guests. The lobby porcelain looks exceptional.",
      },
      {
        name: "Grace M.",
        role: "Interior Designer",
        text: "Alchemist is my go-to for tiling. Engineering precision with a designer's eye for detail.",
      },
    ],
  },
  team: {
    eyebrow: "Leadership",
    title: "Meet our leadership",
    items: [
      { name: "Felix Kajunior", role: "Founder & Construction Engineer" },
      { name: "Sarah Njeri", role: "Lead Tiling Specialist" },
      { name: "James Otieno", role: "Project Manager" },
      { name: "Lydia Chebet", role: "Design Consultant" },
    ],
  },
  partners: "Our trusted partners",
  news: {
    eyebrow: "News",
    title: "Recent news and events",
    items: [
      {
        slug: "choosing-porcelain-vs-ceramic",
        title: "Porcelain vs ceramic: what to specify",
        excerpt:
          "A practical guide to absorption rates, traffic ratings, and finish choices.",
      },
      {
        slug: "substrate-prep-matters",
        title: "Why substrate prep decides your floor's life",
        excerpt:
          "Leveling, membranes, and movement joints — the invisible work that prevents failure.",
      },
      {
        slug: "luxury-vinyl-trends-2026",
        title: "Luxury vinyl trends for 2026 interiors",
        excerpt: "Wide planks, soft matte textures, and acoustic-ready cores.",
      },
    ],
  },
  cta: {
    title: "Have a flooring project in mind?",
    text: "Contact us today for a site assessment and material guidance.",
    button: "Get In Touch",
  },
  footer: {
    about:
      "Alchemist Solutions delivers engineer-led tile and flooring installation for homes, hospitality, and commercial spaces.",
    quickLinks: "Quick Links",
    contactUs: "Contact Us",
    tagline: "Transforming Spaces. Engineered to Perfection.",
  },
  contact: {
    eyebrow: "Get In Touch",
    title: "Ready to transform your floors?",
    text: "Book a site assessment, request material guidance, or send project drawings — we respond quickly on WhatsApp and email.",
    name: "Your name",
    email: "Email address",
    subject: "Subject",
    message: "Tell us about your project",
    chatWhatsApp: "Chat on WhatsApp",
  },
  hours: "Mon - Sat / 8am : 6pm",
};

const sw: Dictionary = {
  welcome: "Karibu Alchemist Solutions",
  nav: {
    home: "Nyumbani",
    about: "Kuhusu",
    services: "Huduma",
    projects: "Miradi",
    news: "Habari",
    contact: "Wasiliana",
    allServices: "Huduma Zote",
    allProjects: "Miradi Yote",
  },
  common: {
    getInTouch: "Wasiliana Nasi",
    moreAbout: "Zaidi Kutuhusu",
    exploreService: "Chunguza huduma",
    allProjects: "Miradi Yote",
    readMore: "Soma Zaidi",
    whatsApp: "WhatsApp",
    whatsAppUs: "WhatsApp Sisi",
    call: "Piga",
    sendMessage: "Tuma Ujumbe",
    yearsExperience: "Miaka ya Uzoefu",
    openMenu: "Fungua menyu",
    closeMenu: "Funga menyu",
    language: "Lugha",
    formNote: "Fomu ni ya kuonyesha tu — tumia WhatsApp kwa majibu ya haraka.",
  },
  hero: {
    slides: [
      {
        title: "Sakafu zinazoinua kila chumba",
        text: "Ufungaji wa tiles na sakafu unaoongozwa na mhandisi — mpangilio sahihi, vifaa bora, na finish maridadi.",
        cta: "Gundua Zaidi",
      },
      {
        title: "Porcelain, marble na hardwood kwa usahihi",
        text: "Kutoka showroom hadi nyumbani, tunatoa nyuso zenye nguvu na usahihi wa usanifu.",
        cta: "Angalia Miradi",
      },
      {
        title: "Sakafu za ndoto, zilizoundwa kudumu",
        text: "Utaalamu wa uhandisi wa ujenzi nyuma ya kila mstari wa tile na sakafu.",
        cta: "Wasiliana Nasi",
      },
    ],
  },
  about: {
    eyebrow: "Kuhusu Sisi",
    title: "Tunaweka kila kitu sakafu zako zinahitaji",
    text: "Alchemist Solutions inaunganisha uhandisi wa ujenzi na ufundi wa tiles. Ilianzishwa na Felix Kajunior, tunabobea kwenye porcelain, marble, jiwe, hardwood na vinyl — kwa viwango vya juu.",
    checklist: [
      "Usimamizi wa mhandisi wa ujenzi aliyeidhinishwa",
      "Vifaa bora vya tile na sakafu",
      "Kuzuia maji na kuandaa substrate",
      "Utekelezaji safi na kwa ratiba",
    ],
    yearsLabel: "Miaka ya Uzoefu",
  },
  services: {
    eyebrow: "Tunachofanya",
    title: "Sakafu zilizoundwa kwa kila nafasi",
    intro:
      "Kutoka porcelain na marble hadi hardwood, vinyl, maeneo ya maji na urekebishaji — kila huduma inapangwa na mhandisi na kukamilishwa na wataalamu.",
    items: [
      {
        slug: "porcelain-tiling",
        title: "Porcelain Tiling",
        excerpt:
          "Porcelain ya ukubwa mkubwa na mifumo yenye joints sawa, mteremko sahihi, na uimara wa lobby.",
      },
      {
        slug: "marble-stone",
        title: "Marble na Jiwe",
        excerpt:
          "Sakafu za jiwe asilia na kuta maalum kwa matching makini, bookmatching, na sealing ya muda mrefu.",
      },
      {
        slug: "hardwood-flooring",
        title: "Hardwood Flooring",
        excerpt:
          "Hardwood ya engineered na solid yenye finish safi, utulivu chini ya miguu, na expansion sahihi.",
      },
      {
        slug: "luxury-vinyl",
        title: "Luxury Vinyl",
        excerpt:
          "Mifumo ya SPC na LVP inayoonekana ya hali ya juu, inayostahimili maji, kwa vyumba, kliniki na maduka.",
      },
      {
        slug: "bath-wet-areas",
        title: "Bafu na Maeneo ya Maji",
        excerpt:
          "Showers, bafu na balcony zisizoingiza maji zenye mteremko sahihi na finish zisizoteleza.",
      },
      {
        slug: "floor-restoration",
        title: "Urejesho wa Sakafu",
        excerpt:
          "Grind, hone, polish na reseal jiwe na tile zilizochoka — mara nyingi haraka na salama kuliko kubadilisha.",
      },
    ],
  },
  projects: {
    eyebrow: "Portfolio",
    title: "Angalia miradi yetu ya hivi karibuni",
    items: [
      {
        slug: "villa-marble-suite",
        title: "Villa Marble Suite",
        category: "Makazi",
        excerpt: "Marble bookmatched katika sebule na master suite.",
      },
      {
        slug: "hotel-lobby-porcelain",
        title: "Hotel Lobby Porcelain",
        category: "Ukarimu",
        excerpt: "Porcelain kubwa yenye feature mosaic.",
      },
      {
        slug: "penthouse-hardwood",
        title: "Penthouse Hardwood",
        category: "Makazi",
        excerpt: "Oak ya planki pana yenye stain maalum.",
      },
      {
        slug: "spa-wet-room",
        title: "Spa Wet Room",
        category: "Wellness",
        excerpt: "Porcelain isiyoteleza yenye linear drains.",
      },
      {
        slug: "retail-showroom",
        title: "Retail Showroom",
        category: "Biashara",
        excerpt: "Porcelain na vinyl kwa uzoefu wa brand.",
      },
      {
        slug: "kitchen-stone-island",
        title: "Kitchen Stone Island",
        category: "Makazi",
        excerpt: "Sakafu ya jiwe pamoja na island cladding.",
      },
    ],
  },
  counters: [
    { value: "480+", label: "Miradi Iliyokamilika" },
    { value: "98%", label: "Kuridhika kwa Wateja" },
    { value: "12+", label: "Miaka ya Uzoefu" },
    { value: "35+", label: "Wafundi Wenye Ujuzi" },
  ],
  testimonials: {
    eyebrow: "Ushuhuda",
    title: "Wateja wetu wenye furaha",
    items: [
      {
        name: "Amina W.",
        role: "Mmiliki wa Nyumba",
        text: "Ufungaji wa marble ulikuwa mkamilifu. Mistari sawa, sakafu tulivu, na timu iliacha eneo safi.",
      },
      {
        name: "David K.",
        role: "Meneja wa Hoteli",
        text: "Walifanya kazi usiku bila kuzuia wageni. Porcelain ya lobby inaonekana bora sana.",
      },
      {
        name: "Grace M.",
        role: "Mbunifu wa Interiors",
        text: "Alchemist ni chaguo langu la tiles. Usahihi wa uhandisi na jicho la design.",
      },
    ],
  },
  team: {
    eyebrow: "Uongozi",
    title: "Kutana na uongozi wetu",
    items: [
      { name: "Felix Kajunior", role: "Mwanzilishi & Mhandisi wa Ujenzi" },
      { name: "Sarah Njeri", role: "Mtaalamu Mkuu wa Tiles" },
      { name: "James Otieno", role: "Meneja wa Miradi" },
      { name: "Lydia Chebet", role: "Mshauri wa Design" },
    ],
  },
  partners: "Washirika wetu wa kuaminika",
  news: {
    eyebrow: "Habari",
    title: "Habari na matukio ya hivi karibuni",
    items: [
      {
        slug: "choosing-porcelain-vs-ceramic",
        title: "Porcelain dhidi ya ceramic: nini cha kuchagua",
        excerpt: "Mwongozo wa absorption, traffic ratings na finish.",
      },
      {
        slug: "substrate-prep-matters",
        title: "Kwa nini substrate prep inaamua maisha ya sakafu",
        excerpt: "Leveling, membranes na movement joints — kazi isiyoonekana inayozuia kushindwa.",
      },
      {
        slug: "luxury-vinyl-trends-2026",
        title: "Mwelekeo wa luxury vinyl 2026",
        excerpt: "Planki pana, matte laini, na cores za acoustic.",
      },
    ],
  },
  cta: {
    title: "Una mradi wa sakafu akilini?",
    text: "Wasiliana nasi leo kwa tathmini ya tovuti na mwongozo wa vifaa.",
    button: "Wasiliana Nasi",
  },
  footer: {
    about:
      "Alchemist Solutions hutoa ufungaji wa tiles na sakafu unaoongozwa na mhandisi kwa nyumba, hoteli na biashara.",
    quickLinks: "Viungo vya Haraka",
    contactUs: "Wasiliana Nasi",
    tagline: "Kubadilisha Nafasi. Kuumba kwa Ukamilifu.",
  },
  contact: {
    eyebrow: "Wasiliana",
    title: "Uko tayari kubadilisha sakafu zako?",
    text: "Weka tathmini ya tovuti, omba mwongozo wa vifaa, au tuma michoro — tunajibu haraka WhatsApp na barua pepe.",
    name: "Jina lako",
    email: "Barua pepe",
    subject: "Mada",
    message: "Tuambie kuhusu mradi wako",
    chatWhatsApp: "Ongea WhatsApp",
  },
  hours: "Jumatatu - Jumamosi / 8am : 6pm",
};

const fr: Dictionary = {
  welcome: "Bienvenue chez Alchemist Solutions",
  nav: {
    home: "Accueil",
    about: "À propos",
    services: "Services",
    projects: "Projets",
    news: "Actualités",
    contact: "Contact",
    allServices: "Tous les services",
    allProjects: "Tous les projets",
  },
  common: {
    getInTouch: "Nous contacter",
    moreAbout: "En savoir plus",
    exploreService: "Découvrir le service",
    allProjects: "Tous les projets",
    readMore: "Lire plus",
    whatsApp: "WhatsApp",
    whatsAppUs: "WhatsApp",
    call: "Appeler",
    sendMessage: "Envoyer",
    yearsExperience: "Ans d'expérience",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    language: "Langue",
    formNote: "Formulaire indicatif — utilisez WhatsApp pour une réponse rapide.",
  },
  hero: {
    slides: [
      {
        title: "Des sols qui élèvent chaque pièce",
        text: "Pose de carrelage et de sols dirigée par un ingénieur — tracés précis, matériaux premium, finitions parfaites.",
        cta: "Découvrir",
      },
      {
        title: "Porcelain, marbre et bois faits correctement",
        text: "Des showrooms aux résidences, des surfaces durables avec précision architecturale.",
        cta: "Voir les projets",
      },
      {
        title: "Vos sols de rêve, conçus pour durer",
        text: "Expertise d'ingénierie de construction derrière chaque ligne et plan de sol.",
        cta: "Nous contacter",
      },
    ],
  },
  about: {
    eyebrow: "À propos",
    title: "Nous installons tout ce dont vos sols ont besoin",
    text: "Alchemist Solutions allie ingénierie de construction et savoir-faire artisanal. Fondée par Felix Kajunior, spécialisée en porcelain, marbre, pierre, bois et vinyl — mesurés et finis aux plus hauts standards.",
    checklist: [
      "Supervision par ingénieur agréé",
      "Matériaux premium carrelage & sols",
      "Étanchéité et préparation du support",
      "Chantier propre et dans les délais",
    ],
    yearsLabel: "Ans d'expérience",
  },
  services: {
    eyebrow: "Notre métier",
    title: "Des sols techniques pour chaque espace",
    intro:
      "Du porcelain au marbre, bois, vinyl, pièces humides et restauration — chaque service est planifié par un ingénieur et achevé par des spécialistes.",
    items: [
      {
        slug: "porcelain-tiling",
        title: "Carrelage porcelain",
        excerpt:
          "Grands formats et motifs avec joints droits, pentes correctes et durabilité lobby.",
      },
      {
        slug: "marble-stone",
        title: "Marbre & pierre",
        excerpt:
          "Sols et murs en pierre naturelle avec matching, bookmatching et protection durable.",
      },
      {
        slug: "hardwood-flooring",
        title: "Parquet bois",
        excerpt:
          "Bois massif et contrecollé, finitions raffinées et détails d'expansion corrects.",
      },
      {
        slug: "luxury-vinyl",
        title: "Vinyl de luxe",
        excerpt:
          "Systèmes SPC et LVP premium, résistants aux taches, pour appartements et commerces.",
      },
      {
        slug: "bath-wet-areas",
        title: "Salles d'eau",
        excerpt:
          "Douches, bains et balcons étanches avec pentes et finitions antidérapantes.",
      },
      {
        slug: "floor-restoration",
        title: "Restauration de sols",
        excerpt:
          "Ponçage, honage, polissage et reseal — souvent plus rapide que le remplacement.",
      },
    ],
  },
  projects: {
    eyebrow: "Portfolio",
    title: "Découvrez nos derniers projets",
    items: [
      {
        slug: "villa-marble-suite",
        title: "Suite de marbre villa",
        category: "Résidentiel",
        excerpt: "Marbre bookmatché dans le séjour et la suite parentale.",
      },
      {
        slug: "hotel-lobby-porcelain",
        title: "Lobby hôtel en porcelain",
        category: "Hôtellerie",
        excerpt: "Grands formats avec insert mosaïque.",
      },
      {
        slug: "penthouse-hardwood",
        title: "Penthouse parquet",
        category: "Résidentiel",
        excerpt: "Chêne large teinté sur mesure.",
      },
      {
        slug: "spa-wet-room",
        title: "Spa wet room",
        category: "Bien-être",
        excerpt: "Porcelain antidérapant et drains linéaires.",
      },
      {
        slug: "retail-showroom",
        title: "Showroom retail",
        category: "Commercial",
        excerpt: "Zones porcelain et vinyl pour l'expérience de marque.",
      },
      {
        slug: "kitchen-stone-island",
        title: "Îlot cuisine en pierre",
        category: "Résidentiel",
        excerpt: "Sol pierre et habillage waterfall de l'îlot.",
      },
    ],
  },
  counters: [
    { value: "480+", label: "Projets réalisés" },
    { value: "98%", label: "Satisfaction client" },
    { value: "12+", label: "Ans d'expérience" },
    { value: "35+", label: "Poseurs qualifiés" },
  ],
  testimonials: {
    eyebrow: "Témoignages",
    title: "Nos clients satisfaits",
    items: [
      {
        name: "Amina W.",
        role: "Propriétaire",
        text: "Pose de marbre impeccable. Lignes droites, sols silencieux, chantier impeccable.",
      },
      {
        name: "David K.",
        role: "Directeur d'hôtel",
        text: "Travaux de nuit sans gêner les clients. Le porcelain du lobby est exceptionnel.",
      },
      {
        name: "Grace M.",
        role: "Architecte d'intérieur",
        text: "Alchemist est mon référence carrelage. Précision d'ingénieur et œil design.",
      },
    ],
  },
  team: {
    eyebrow: "Direction",
    title: "Notre équipe dirigeante",
    items: [
      { name: "Felix Kajunior", role: "Fondateur & Ingénieur construction" },
      { name: "Sarah Njeri", role: "Spécialiste carrelage" },
      { name: "James Otieno", role: "Chef de projet" },
      { name: "Lydia Chebet", role: "Consultante design" },
    ],
  },
  partners: "Nos partenaires de confiance",
  news: {
    eyebrow: "Actualités",
    title: "Dernières nouvelles",
    items: [
      {
        slug: "choosing-porcelain-vs-ceramic",
        title: "Porcelain vs céramique : que spécifier",
        excerpt: "Guide pratique absorption, trafic et finitions.",
      },
      {
        slug: "substrate-prep-matters",
        title: "Pourquoi la préparation du support décide la durée de vie",
        excerpt: "Nivellement, membranes et joints de dilatation.",
      },
      {
        slug: "luxury-vinyl-trends-2026",
        title: "Tendances vinyl luxe 2026",
        excerpt: "Larges lames, mat doux et âmes acoustiques.",
      },
    ],
  },
  cta: {
    title: "Un projet de sol en tête ?",
    text: "Contactez-nous pour une visite de site et des conseils matériaux.",
    button: "Nous contacter",
  },
  footer: {
    about:
      "Alchemist Solutions livre la pose technique de carrelage et de sols pour maisons, hôtels et commerces.",
    quickLinks: "Liens rapides",
    contactUs: "Contact",
    tagline: "Transformer les espaces. L'ingénierie de la perfection.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Prêt à transformer vos sols ?",
    text: "Réservez une visite, demandez un conseil matériaux ou envoyez vos plans — réponse rapide WhatsApp et email.",
    name: "Votre nom",
    email: "Adresse e-mail",
    subject: "Sujet",
    message: "Parlez-nous de votre projet",
    chatWhatsApp: "Discuter sur WhatsApp",
  },
  hours: "Lun - Sam / 8h : 18h",
};

const es: Dictionary = {
  welcome: "Bienvenido a Alchemist Solutions",
  nav: {
    home: "Inicio",
    about: "Nosotros",
    services: "Servicios",
    projects: "Proyectos",
    news: "Noticias",
    contact: "Contacto",
    allServices: "Todos los servicios",
    allProjects: "Todos los proyectos",
  },
  common: {
    getInTouch: "Contáctanos",
    moreAbout: "Más sobre nosotros",
    exploreService: "Explorar servicio",
    allProjects: "Todos los proyectos",
    readMore: "Leer más",
    whatsApp: "WhatsApp",
    whatsAppUs: "WhatsApp",
    call: "Llamar",
    sendMessage: "Enviar mensaje",
    yearsExperience: "Años de experiencia",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    language: "Idioma",
    formNote: "Formulario solo visual — usa WhatsApp para respuesta rápida.",
  },
  hero: {
    slides: [
      {
        title: "Suelos que elevan cada habitación",
        text: "Instalación de azulejos y suelos dirigida por ingenieros — trazados precisos, materiales premium y acabados impecables.",
        cta: "Descubrir más",
      },
      {
        title: "Porcelain, mármol y madera bien hechos",
        text: "De showrooms a residencias, superficies duraderas con precisión arquitectónica.",
        cta: "Ver proyectos",
      },
      {
        title: "Tus suelos soñados, hechos para durar",
        text: "Experiencia en ingeniería de construcción detrás de cada línea y plano de suelo.",
        cta: "Contáctanos",
      },
    ],
  },
  about: {
    eyebrow: "Nosotros",
    title: "Instalamos todo lo que tus suelos necesitan",
    text: "Alchemist Solutions une ingeniería de construcción y oficio artesanal. Fundada por Felix Kajunior, especialistas en porcelain, mármol, piedra, madera y vinyl — medidos y acabados con excelencia.",
    checklist: [
      "Supervisión de ingeniero autorizado",
      "Materiales premium de azulejo y suelo",
      "Impermeabilización y preparación del sustrato",
      "Obra limpia y a tiempo",
    ],
    yearsLabel: "Años de experiencia",
  },
  services: {
    eyebrow: "Qué hacemos",
    title: "Suelos ingenierados para cada espacio",
    intro:
      "De porcelain y mármol a madera, vinyl, zonas húmedas y restauración — cada servicio lo planifica un ingeniero y lo terminan especialistas.",
    items: [
      {
        slug: "porcelain-tiling",
        title: "Azulejo porcelain",
        excerpt:
          "Gran formato y patrones con juntas rectas, pendientes correctas y durabilidad de lobby.",
      },
      {
        slug: "marble-stone",
        title: "Mármol y piedra",
        excerpt:
          "Suelos y muros de piedra natural con matching, bookmatching y sellado duradero.",
      },
      {
        slug: "hardwood-flooring",
        title: "Suelos de madera",
        excerpt:
          "Madera maciza e ingenierada con acabados refinados y detalle de expansión correcto.",
      },
      {
        slug: "luxury-vinyl",
        title: "Vinyl de lujo",
        excerpt:
          "Sistemas SPC y LVP premium, resistentes a derrames, para apartamentos y retail.",
      },
      {
        slug: "bath-wet-areas",
        title: "Baños y zonas húmedas",
        excerpt:
          "Duchas, baños y balcones estancos con pendientes y acabados antideslizantes.",
      },
      {
        slug: "floor-restoration",
        title: "Restauración de suelos",
        excerpt:
          "Rectificado, hone, pulido y resellado — a menudo más rápido que reemplazar.",
      },
    ],
  },
  projects: {
    eyebrow: "Portfolio",
    title: "Mira nuestros últimos proyectos",
    items: [
      {
        slug: "villa-marble-suite",
        title: "Suite de mármol villa",
        category: "Residencial",
        excerpt: "Mármol bookmatched en salón y suite principal.",
      },
      {
        slug: "hotel-lobby-porcelain",
        title: "Lobby hotel porcelain",
        category: "Hospitalidad",
        excerpt: "Gran formato con inserto de mosaico.",
      },
      {
        slug: "penthouse-hardwood",
        title: "Penthouse madera",
        category: "Residencial",
        excerpt: "Roble ancho con tinte a medida.",
      },
      {
        slug: "spa-wet-room",
        title: "Spa wet room",
        category: "Bienestar",
        excerpt: "Porcelain antideslizante con desagües lineales.",
      },
      {
        slug: "retail-showroom",
        title: "Showroom retail",
        category: "Comercial",
        excerpt: "Zonas de porcelain y vinyl para la marca.",
      },
      {
        slug: "kitchen-stone-island",
        title: "Isla de cocina en piedra",
        category: "Residencial",
        excerpt: "Suelo de piedra con revestimiento waterfall.",
      },
    ],
  },
  counters: [
    { value: "480+", label: "Proyectos completados" },
    { value: "98%", label: "Satisfacción del cliente" },
    { value: "12+", label: "Años de experiencia" },
    { value: "35+", label: "Instaladores expertos" },
  ],
  testimonials: {
    eyebrow: "Testimonios",
    title: "Clientes felices",
    items: [
      {
        name: "Amina W.",
        role: "Propietaria",
        text: "Instalación de mármol impecable. Líneas rectas, suelos silenciosos y obra limpia.",
      },
      {
        name: "David K.",
        role: "Gerente de hotel",
        text: "Trabajos nocturnos sin molestar huéspedes. El porcelain del lobby es excepcional.",
      },
      {
        name: "Grace M.",
        role: "Diseñadora de interiores",
        text: "Alchemist es mi referencia en azulejos. Precisión de ingeniería y ojo de diseño.",
      },
    ],
  },
  team: {
    eyebrow: "Liderazgo",
    title: "Conoce nuestro liderazgo",
    items: [
      { name: "Felix Kajunior", role: "Fundador e ingeniero de construcción" },
      { name: "Sarah Njeri", role: "Especialista en azulejos" },
      { name: "James Otieno", role: "Gerente de proyectos" },
      { name: "Lydia Chebet", role: "Consultora de diseño" },
    ],
  },
  partners: "Nuestros socios de confianza",
  news: {
    eyebrow: "Noticias",
    title: "Noticias y eventos recientes",
    items: [
      {
        slug: "choosing-porcelain-vs-ceramic",
        title: "Porcelain vs cerámica: qué especificar",
        excerpt: "Guía práctica de absorción, tránsito y acabados.",
      },
      {
        slug: "substrate-prep-matters",
        title: "Por qué la preparación del sustrato decide la vida del suelo",
        excerpt: "Nivelación, membranas y juntas de movimiento.",
      },
      {
        slug: "luxury-vinyl-trends-2026",
        title: "Tendencias vinyl de lujo 2026",
        excerpt: "Tablones anchos, mate suave y núcleos acústicos.",
      },
    ],
  },
  cta: {
    title: "¿Tienes un proyecto de suelos en mente?",
    text: "Contáctanos hoy para una visita de obra y guía de materiales.",
    button: "Contáctanos",
  },
  footer: {
    about:
      "Alchemist Solutions ofrece instalación ingenierizada de azulejos y suelos para hogares, hoteles y comercios.",
    quickLinks: "Enlaces rápidos",
    contactUs: "Contacto",
    tagline: "Transformando espacios. Ingeniería de la perfección.",
  },
  contact: {
    eyebrow: "Contacto",
    title: "¿Listo para transformar tus suelos?",
    text: "Reserva una visita, pide guía de materiales o envía planos — respondemos rápido por WhatsApp y email.",
    name: "Tu nombre",
    email: "Correo electrónico",
    subject: "Asunto",
    message: "Cuéntanos sobre tu proyecto",
    chatWhatsApp: "Chatear en WhatsApp",
  },
  hours: "Lun - Sáb / 8am : 6pm",
};

export const dictionaries: Record<Locale, Dictionary> = { en, sw, fr, es };
