// Nav links. `href` doubles as the route. "About Me" is the home view.
export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  // { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/" },
  // { label: "Blog", href: "/blog" },
];

export const contactLink: NavLink = { label: "Contact", href: "/contact" };

// "About" accordion (the home right-hand square). Each section expands to a
// short description of how the studio works.
export type PortfolioCategory = { title: string; quote: string };

export const portfolioCategories: PortfolioCategory[] = [
  {
    title: "Collaboration",
    quote:
      "I reach out directly to people whose work inspires me — for collaborations, for promotion, and to understand the real challenges of what they do. The ambition: useful products, built together with the people who use them.",
  },
  {
    title: "Design",
    quote:
      "Less, but better. Minimal, functional design where every element earns its place — restraint over decoration, clarity over clutter. The result feels calm, confident, and effortless to use.",
  },
  {
    title: "Content control",
    quote:
      "Update your own content, simply and independently.",
  },
  {
    title: "Fast navigation",
    quote:
      "Clear, fast navigation designed mobile-first — fluid even with galleries and heavy media.",
  },
  {
    title: "Automation",
    quote:
      "The admin work that eats your time, simplified: bookings and forms, communicating and delivering to clients, keeping the portfolio current, generating .pdf contracts, and more.",
  },
];

export const aboutBlurb =
  "An early-stage web studio working alongside the local creative scene — architecture, design, photography, events, education. Building useful products, together with the people who use them.";

// Generic panels for the other nav routes. They reuse the same right-hand
// square, swapping the heading + a short list of dummy entries.
export type PanelEntry = { title: string; body: string };
export type PanelContent = {
  heading: string;
  entries: PanelEntry[];
  blurb: string;
};

export const panels: Record<string, PanelContent> = {
  services: {
    heading: "Services",
    entries: [
      { title: "Editorial Sessions", body: "Half- and full-day shoots for magazines, brands and lookbooks." },
      { title: "Commercial Campaigns", body: "Concept to final grade, art-directed alongside your team." },
      { title: "Fine Art Prints", body: "Hand-finished archival prints, signed and numbered." },
      { title: "Licensing", body: "Flexible usage rights for print, web and out-of-home." },
    ],
    blurb:
      "Every commission begins with a conversation. Tell me the story you want to tell, and I will find the light for it.",
  },
  portfolio: {
    heading: "Portfolio",
    entries: [
      { title: "Omotesando Flagship", body: "Retail interior and visual identity for a Tokyo boutique." },
      { title: "Kitzbühel Residence", body: "Architectural photography and brand book for an alpine home." },
      { title: "Atelier Product Series", body: "Studio product set for a furniture and objects collection." },
      { title: "Editorial Portraits", body: "Ongoing portrait commissions for press and lookbooks." },
    ],
    blurb:
      "A selection of recent work across architecture, interiors, product and portraiture — each shaped end to end with the client.",
  },
  blog: {
    heading: "Blog",
    entries: [
      { title: "On Chasing Soft Light", body: "Why overcast mornings are a portrait photographer’s secret weapon." },
      { title: "Packing for Omotesando", body: "A minimalist kit for shooting clean retail interiors." },
      { title: "Reading a Room", body: "Finding the one line of geometry that anchors an architectural frame." },
      { title: "The Patience of Product", body: "Slowing down until the object tells you where the light belongs." },
    ],
    blurb:
      "Notes from the road, the studio and the darkroom — short essays on seeing before shooting.",
  },
  contact: {
    heading: "Contact",
    entries: [
      { title: "WhatsApp", body: "The easiest way — a short, no-pressure chat." },
      { title: "Email", body: "salut@uxstudiosibiu.ro" },
      { title: "Area", body: "Sibiu — and online, wherever it makes sense." },
      { title: "Instagram", body: "@ux.studio.sibiu" },
    ],
    blurb:
      "I’d love to understand how your work flows and what could make it easier. Let’s talk.",
  },
};
