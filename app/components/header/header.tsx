"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./header.scss";

export function Header() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <header className="nsc-header">
      <Link href="/" className="header-brand">
        ux.studio.sibiu
      </Link>

      <nav className="header-nav" aria-label="Primary">
        <Link href="/portfolio" className={`nav-link${isActive("/portfolio") ? " is-active" : ""}`} aria-current={isActive("/portfolio") ? "page" : undefined}>
          Portfolio
        </Link>
        <Link href="/" className={`nav-link${isActive("/") ? " is-active" : ""}`} aria-current={isActive("/") ? "page" : undefined}>
          Services
        </Link>
      </nav>

      <Link href="/contact" className={`header-contact${isActive("/contact") ? " is-active" : ""}`} aria-current={isActive("/contact") ? "page" : undefined}>
        Contact
      </Link>
    </header>
  );
}
