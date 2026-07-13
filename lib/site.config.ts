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
        text: "Engineer-led tile and flooring installation ΓÇö precision layouts, premium materials, flawless finishes.",
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
    text: "Alchemist Solutions blends construction engineering with artisan tiling craft. Founded by Felix Kajunior, we specialize in porcelain, marble, stone, hardwood, and luxury vinyl ΓÇö measured, set, and finished to exacting standards.",
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
    title: "Our services that we provide",
    items: [
      {
        slug: "porcelain-tiling",
        title: "Porcelain Tiling",
        excerpt:
          "Large-format and patterned porcelain with laser-straight joints and perfect falls.",
        body: "We specify and install porcelain for wet areas, living spaces, and commercial lobbies. Substrate preparation, membrane systems, and precision cutting are standard on every job.",
        image: "/images/service-1.webp",
        icon: "grid",
      },
      {
        slug: "marble-stone",
        title: "Marble & Stone",
        excerpt:
          "Natural stone floors and feature walls with careful matching and sealing.",
        body: "From Carrara-inspired marble to local stone, we handle dry-lay sequencing, bookmatching, and protective sealing so your surfaces stay beautiful for years.",
        image: "/images/service-2.webp",
        icon: "layers",
      },
      {
        slug: "hardwood-flooring",
        title: "Hardwood Flooring",
        excerpt:
          "Engineered and solid hardwood with refined finishes and expansion detailing.",
        body: "Acclimation, subfloor leveling, and professional sanding/finishing deliver quiet, stable timber floors for homes and boutique commercial spaces.",
        image: "/images/service-3.webp",
        icon: "wood",
      },
      {
        slug: "luxury-vinyl",
        title: "Luxury Vinyl",
        excerpt:
          "SPC and LVP systems that look premium and perform in high-traffic areas.",
        body: "Click-lock and glue-down vinyl with acoustic underlays ΓÇö ideal for apartments, clinics, and retail where durability meets design.",
        image: "/images/service-4.webp",
        icon: "square",
      },
      {
        slug: "bath-wet-areas",
        title: "Bath & Wet Areas",
        excerpt:
          "Watertight showers, bathrooms, and balconies with correct falls to drain.",
        body: "Full wet-area systems including tanking membranes, niche detailing, and anti-slip selections for safety without sacrificing style.",
        image: "/images/service-5.webp",
        icon: "droplet",
      },
      {
        slug: "floor-restoration",
        title: "Floor Restoration",
        excerpt:
          "Grind, polish, and revive tired stone and tile surfaces.",
        body: "Diamond grinding, honing, polishing, and resealing bring existing floors back to life ΓÇö often faster and greener than full replacement.",
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
        body: "Night works for a boutique hotel lobby: 1200├ù1200 porcelain slabs, recessed LED thresholds, and high-traffic grout systems.",
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
        body: "Showroom zoning that guides customer flow ΓÇö polished porcelain at entry, warm vinyl in consult rooms.",
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
        body: "Porcelain generally offers lower water absorption and higher durability for wet and commercial areas. Ceramic remains cost-effective for light-duty walls. We help you match the right body and finish to each zone ΓÇö including PEI ratings, slip resistance, and rectified edges for tight joints.",
      },
      {
        slug: "substrate-prep-matters",
        title: "Why substrate prep decides your floor's life",
        date: "28 May 2026",
        excerpt:
          "Leveling, membranes, and movement joints ΓÇö the invisible work that prevents failure.",
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
        body: "SPC cores with realistic embossing dominate residential refreshes this year. Pair them with quality underlays for sound control in multi-storey buildings ΓÇö a smart upgrade path when full stone isn't required.",
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
