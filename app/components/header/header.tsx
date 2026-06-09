"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, contactLink } from "@/app/data/content";
import "./header.scss";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="nsc-header">
      <Link href="/" className="header-brand">
        ux.studio.sibiu
      </Link>

      <nav className="header-nav" aria-label="Primary">
        {navLinks.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link${active ? " is-active" : ""}`}
              aria-current={active ? "page" : undefined}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <Link
        href={contactLink.href}
        className={`header-contact${pathname === contactLink.href ? " is-active" : ""}`}
      >
        {contactLink.label}
      </Link>
    </header>
  );
}
