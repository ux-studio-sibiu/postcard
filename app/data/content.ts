// Nav links. `href` doubles as the route. "About Me" is the home view.
export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  // { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/" },
  // { label: "Blog", href: "/blog" },
];

export const contactLink: NavLink = { label: "Contact", href: "/contact" };

// Portfolio accordion (the "About Me" right-hand square). Each category
// expands to a dummy quote for now.
export type PortfolioCategory = { title: string; quote: string };

export const portfolioCategories: PortfolioCategory[] = [
  {
    title: "Portraits",
    quote:
      "“A portrait is not made in the camera but on either side of it.” Every face carries a story worth holding still.",
  },
  {
    title: "Architecture and Interiors",
    quote:
      "“Space is the breath of art.” I look for the quiet geometry that turns a room into a feeling.",
  },
  {
    title: "Product Photography",
    quote:
      "“The detail is not the detail. It makes the design.” Light, texture and patience make an object sing.",
  },
  {
    title: "Lifestyle and Travel",
    quote:
      "“We travel not to escape life, but for life not to escape us.” I chase the in-between moments.",
  },
];

export const aboutBlurb =
  "In the tapestry of life, my camera tells rich stories, capturing the heart of every moment. I bring your world into sharp focus, with a touch of artistry, precision, and utmost care";

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
      { title: "Studio", body: "12 Paper Lane, Lisbon — by appointment." },
      { title: "Email", body: "hello@sophiamitchell.photo" },
      { title: "Phone", body: "+351 912 345 678" },
      { title: "Instagram", body: "@sophia.mitchell" },
    ],
    blurb:
      "Available worldwide for commissions and collaborations. I usually reply within a day.",
  },
};
