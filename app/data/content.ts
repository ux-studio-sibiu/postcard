// Nav links. `href` doubles as the route. "About Me" is the home view.
export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  // { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/" },
  // { label: "Blog", href: "/blog" },
];

export const contactLink: NavLink = { label: "Contact", href: "/contact" };
