export const siteConfig = {
  name: "Alchemist Solutions",
  shortName: "ALCHEMIST",
  tagline: "Transforming Spaces. Engineered to Perfection.",
  domain: "alchemisttile.com",

  hours: "Mon - Sat / 8am : 6pm",
  location: {
    city: "Nairobi",
    country: "Kenya",
    address: "Nairobi, Kenya",
    mapQuery: "Nairobi, Kenya",
  },

  contact: {
    whatsapp: "+25476290213",
    phone: "+25476290213",
    phoneDisplay: "+254 762 902 13",
    email: "hello@alchemisttile.com",
    whatsappMessage:
      "Hi Alchemist Solutions, I'd like a flooring assessment...",
  },

  social: [
    { label: "Facebook", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Services",
      href: "/services",
      children: [
        { label: "All Services", href: "/services" },
        { label: "Porcelain Tiling", href: "/services/porcelain-tiling" },
        { label: "Marble & Stone", href: "/services/marble-stone" },
        { label: "Hardwood Flooring", href: "/services/hardwood-flooring" },
        { label: "Luxury Vinyl", href: "/services/luxury-vinyl" },
        { label: "Bath & Wet Areas", href: "/services/bath-wet-areas" },
        { label: "Floor Restoration", href: "/services/floor-restoration" },
      ],
    },
    {
      label: "Projects",
      href: "/projects",
      children: [
        { label: "All Projects", href: "/projects" },
        { label: "Villa Marble Suite", href: "/projects/villa-marble-suite" },
        { label: "Hotel Lobby Porcelain", href: "/projects/hotel-lobby-porcelain" },
      ],
    },
    { label: "News", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],

  hero: {
    slides: [
      {
        title: "Craft floors that elevate every room",
        text: "Engineer-led tile and flooring installation — precision layouts, premium materials, flawless finishes.",
        image: "/images/hero-1.webp",
        cta: "Discover More",
        ctaHref: "/about",
      },
      {
        title: "Porcelain, marble & hardwood done right",
        text: "From showrooms to residences, we deliver durable surfaces with architectural precision.",
        image: "/images/hero-2.webp",
        cta: "View Projects",
        ctaHref: "/projects",
      },
      {
        title: "Your dream floors, engineered to last",
        text: "Licensed construction engineering expertise behind every tile line and floor plane.",
        image: "/images/hero-3.webp",
        cta: "Get In Touch",
        ctaHref: "/contact",
      },
    ],
  },

  about: {
    eyebrow: "About Us",
    title: "We install everything your floors need",
    text: "Alchemist Solutions blends construction engineering with artisan tiling craft. Founded by Felix Kajunior, we specialize in porcelain, marble, stone, hardwood, and luxury vinyl — measured, set, and finished to exacting standards.",
    image: "/images/about-1.webp",
    imageSecondary: "/images/about-2.webp",
    checklist: [
      "Licensed construction engineer oversight",
      "Premium tile & flooring materials",
      "Waterproofing and substrate prep",
      "Clean, on-schedule site delivery",
    ],
    years: "12+",
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
        body: "We specify and install porcelain for homes, wet areas, and commercial lobbies. Every job starts with substrate survey and leveling, then membrane systems where needed, precision cutting, and lippage-controlled setting. You get floors that look architectural and perform under traffic, moisture, and daily use.",
        highlights: [
          "Large-format slabs up to 1200×1200",
          "Laser-straight joints and lippage control",
          "Wet-area and high-traffic specifications",
          "Pattern layouts and feature banding",
        ],
        process: [
          "Site survey, levels, and movement joint plan",
          "Substrate prep, membranes, and adhesive selection",
          "Dry-lay, cutting, setting, and grouting",
          "Protection, clean-down, and handover checklist",
        ],
        image: "/images/service-1.webp",
        icon: "grid",
      },
      {
        slug: "marble-stone",
        title: "Marble & Stone",
        excerpt:
          "Natural stone floors and feature walls with careful matching, bookmatching, and long-term sealing.",
        body: "From Carrara-inspired marble to local stone, we sequence dry-lays, match veining, and seal for stain resistance. Edges, thresholds, and wall returns are detailed so the finish reads continuous — not patched. Ideal for villas, lobbies, and statement interiors that need craft and engineering together.",
        highlights: [
          "Vein matching and bookmatched layouts",
          "Protective sealing for daily wear",
          "Feature walls, stairs, and floors",
          "Underfloor heating coordination",
        ],
        process: [
          "Stone selection and finish samples",
          "Dry-lay approval and cut list",
          "Setting, jointing, and edge detailing",
          "Honing/polish options and seal application",
        ],
        image: "/images/service-2.webp",
        icon: "layers",
      },
      {
        slug: "hardwood-flooring",
        title: "Hardwood Flooring",
        excerpt:
          "Engineered and solid hardwood with refined finishes, quiet underfoot feel, and correct expansion detailing.",
        body: "Timber floors fail when humidity, subfloor, and expansion are ignored. We acclimate material, level substrates, and install engineered or solid hardwood with professional sanding and finishing where required. The result is a warm, quiet floor that stays stable in Nairobi homes and boutique commercial spaces.",
        highlights: [
          "Engineered and solid timber options",
          "Subfloor leveling and moisture checks",
          "Expansion detailing at walls and doors",
          "Sand, stain, and finish packages",
        ],
        process: [
          "Moisture and subfloor assessment",
          "Acclimation and layout planning",
          "Install, sanding, and finishing",
          "Care guidance and maintenance plan",
        ],
        image: "/images/service-3.webp",
        icon: "wood",
      },
      {
        slug: "luxury-vinyl",
        title: "Luxury Vinyl",
        excerpt:
          "SPC and LVP systems that look premium, resist spills, and perform in apartments, clinics, and retail.",
        body: "Click-lock and glue-down vinyl with acoustic underlays deliver wood and stone looks without the maintenance load. We specify wear layers for traffic class, prepare substrates for a flat plane, and detail transitions so the floor feels continuous across rooms. Fast install, strong durability, clean modern finish.",
        highlights: [
          "SPC and LVP for heavy traffic",
          "Acoustic underlay options",
          "Waterproof core systems",
          "Fast turnaround with minimal mess",
        ],
        process: [
          "Traffic class and style selection",
          "Substrate leveling and underlay",
          "Click-lock or glue-down install",
          "Transitions, skirting, and handover",
        ],
        image: "/images/service-4.webp",
        icon: "square",
      },
      {
        slug: "bath-wet-areas",
        title: "Bath & Wet Areas",
        excerpt:
          "Watertight showers, bathrooms, and balconies with correct falls to drain and anti-slip finishes.",
        body: "Wet areas need more than nice tile — they need tanking, falls, and detailing that keeps water where it belongs. We install full wet-room systems: membranes, niches, linear drains, and anti-slip selections that stay safe without looking institutional. Perfect for ensuite upgrades, hotel bathrooms, and balcony waterproofing.",
        highlights: [
          "Tanking membranes and wet-room systems",
          "Falls to drain and linear drains",
          "Niche, shelf, and bench detailing",
          "Anti-slip tile and safety finishes",
        ],
        process: [
          "Waterproofing design and drain plan",
          "Membrane install and flood test where required",
          "Tile setting with wet-area adhesives",
          "Silicone, fittings coordination, and clean finish",
        ],
        image: "/images/service-5.webp",
        icon: "droplet",
      },
      {
        slug: "floor-restoration",
        title: "Floor Restoration",
        excerpt:
          "Grind, hone, polish, and reseal tired stone and tile — often faster and greener than full replacement.",
        body: "Existing marble, terrazzo, and tile can look new again with diamond grinding, honing, polishing, and protective resealing. We assess damage, lippage, and stain depth, then restore the surface while protecting adjacent finishes. Ideal for lobbies, corridors, and homes that need a refresh without demolition.",
        highlights: [
          "Diamond grind, hone, and polish",
          "Stain treatment and crack repair",
          "Lippage reduction where feasible",
          "Protective seal for lasting clarity",
        ],
        process: [
          "Condition survey and sample polish",
          "Grind / hone / polish sequence",
          "Repair, densify, and seal",
          "Aftercare kit and maintenance schedule",
        ],
        image: "/images/service-6.webp",
        icon: "sparkles",
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
        body: "A full-villa marble package with continuous veining across living, corridor, and ensuite zones. Includes underfloor heating coordination and matte sealing.",
        image: "/images/project-1.webp",
      },
      {
        slug: "hotel-lobby-porcelain",
        title: "Hotel Lobby Porcelain",
        category: "Hospitality",
        excerpt: "Large-format porcelain with feature mosaic insert.",
        body: "Night works for a boutique hotel lobby: 1200×1200 porcelain slabs, recessed LED thresholds, and high-traffic grout systems.",
        image: "/images/project-2.webp",
      },
      {
        slug: "penthouse-hardwood",
        title: "Penthouse Hardwood",
        category: "Residential",
        excerpt: "Wide-plank engineered oak with custom stain.",
        body: "Open-plan penthouse flooring with herringbone accent in the dining zone and seamless transitions to tiled wet areas.",
        image: "/images/project-3.webp",
      },
      {
        slug: "spa-wet-room",
        title: "Spa Wet Room",
        category: "Wellness",
        excerpt: "Anti-slip porcelain with linear drains.",
        body: "Steam room and spa wet zones with epoxy grout, waterproof boards, and precisely set linear drainage.",
        image: "/images/project-4.webp",
      },
      {
        slug: "retail-showroom",
        title: "Retail Showroom",
        category: "Commercial",
        excerpt: "Mixed porcelain and vinyl zones for brand experience.",
        body: "Showroom zoning that guides customer flow — polished porcelain at entry, warm vinyl in consult rooms.",
        image: "/images/project-5.webp",
      },
      {
        slug: "kitchen-stone-island",
        title: "Kitchen Stone Island",
        category: "Residential",
        excerpt: "Stone floor paired with waterfall island cladding.",
        body: "Kitchen flooring and island cladding in matching quartzite with microbevel edges and sealed joints.",
        image: "/images/project-6.webp",
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
        image: "/images/team-1.webp",
      },
      {
        name: "David K.",
        role: "Hotel Manager",
        text: "They managed overnight works without disrupting guests. The lobby porcelain looks exceptional.",
        image: "/images/team-2.webp",
      },
      {
        name: "Grace M.",
        role: "Interior Designer",
        text: "Alchemist is my go-to for tiling. Engineering precision with a designer's eye for detail.",
        image: "/images/team-3.webp",
      },
    ],
  },

  team: {
    eyebrow: "Leadership",
    title: "Meet our leadership",
    items: [
      {
        name: "Felix Kajunior",
        role: "Founder & Construction Engineer",
        image: "/images/team-1.webp",
      },
      {
        name: "Sarah Njeri",
        role: "Lead Tiling Specialist",
        image: "/images/team-2.webp",
      },
      {
        name: "James Otieno",
        role: "Project Manager",
        image: "/images/team-3.webp",
      },
      {
        name: "Lydia Chebet",
        role: "Design Consultant",
        image: "/images/team-4.webp",
      },
    ],
  },

  partners: [
    "Porcelanosa",
    "Quick-Step",
    "Mapei",
    "Schluter",
    "Daltile",
    "Armstrong",
  ],

  blog: {
    eyebrow: "News",
    title: "Recent news and events",
    items: [
      {
        slug: "choosing-porcelain-vs-ceramic",
        title: "Porcelain vs ceramic: what to specify",
        date: "12 Jun 2026",
        excerpt:
          "A practical guide to absorption rates, traffic ratings, and finish choices.",
        image: "/images/blog-1.webp",
        body: "Porcelain generally offers lower water absorption and higher durability for wet and commercial areas. Ceramic remains cost-effective for light-duty walls. We help you match the right body and finish to each zone — including PEI ratings, slip resistance, and rectified edges for tight joints.",
      },
      {
        slug: "substrate-prep-matters",
        title: "Why substrate prep decides your floor's life",
        date: "28 May 2026",
        excerpt:
          "Leveling, membranes, and movement joints — the invisible work that prevents failure.",
        image: "/images/blog-2.webp",
        body: "Most flooring failures start below the surface. We flatten slabs, install decoupling membranes where needed, and honor movement joints so tiles and timber stay stable through seasons and heavy use.",
      },
      {
        slug: "luxury-vinyl-trends-2026",
        title: "Luxury vinyl trends for 2026 interiors",
        date: "04 May 2026",
        excerpt:
          "Wide planks, soft matte textures, and acoustic-ready cores.",
        image: "/images/blog-3.webp",
        body: "SPC cores with realistic embossing dominate residential refreshes this year. Pair them with quality underlays for sound control in multi-storey buildings — a smart upgrade path when full stone isn't required.",
      },
    ],
  },

  cta: {
    title: "Have a flooring project in mind?",
    text: "Contact us today for a site assessment and material guidance.",
    button: "Get In Touch",
    href: "/contact",
  },

  footer: {
    about:
      "Alchemist Solutions delivers engineer-led tile and flooring installation for homes, hospitality, and commercial spaces.",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Projects", href: "/projects" },
      { label: "News", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },

  seo: {
    title: "Alchemist Solutions | Premium Tiles & Flooring",
    description:
      "Engineer-led porcelain, marble, hardwood, and luxury vinyl installation. Precision floors for homes and commercial spaces.",
  },
} as const;

export type ServiceItem = (typeof siteConfig.services.items)[number];
export type ProjectItem = (typeof siteConfig.projects.items)[number];
export type BlogItem = (typeof siteConfig.blog.items)[number];

export function getWhatsAppUrl(message?: string) {
  const text = encodeURIComponent(
    message ?? siteConfig.contact.whatsappMessage,
  );
  const phone = siteConfig.contact.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${text}`;
}

export function getService(slug: string) {
  return siteConfig.services.items.find((s) => s.slug === slug);
}

export function getProject(slug: string) {
  return siteConfig.projects.items.find((p) => p.slug === slug);
}

export function getPost(slug: string) {
  return siteConfig.blog.items.find((p) => p.slug === slug);
}
