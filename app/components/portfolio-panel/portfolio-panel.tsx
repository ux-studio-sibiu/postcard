import Link from "next/link";
import { Accordion, type AccordionItem } from "@/app/components/accordion/accordion";
import { contactLink } from "@/app/data/content";
import "./portfolio-panel.scss";

export function PortfolioPanel() {
  const items: AccordionItem[] = [
    {
      title: "Services",
      html: "Fast, functional websites for creative industries. — functional —minimal design —performance focus -—full content control",
    },
    {
      title: "Collaboration",
      html: "I reach out directly to people whose work inspires me — for collaborations, for promotion, and to understand the real challenges of what they do. The ambition: useful products, built together with the people who use them.",
    },
    {
      title: "Design",
      html: "Less, but better. Minimal, functional design where every element earns its place — restraint over decoration, clarity over clutter. The result feels calm, confident, and effortless to use.",
    },
    {
      title: "Content control",
      html: "Update your own content, simply and independently.",
    },
    {
      title: "Fast navigation",
      html: "Clear, fast navigation designed mobile-first — fluid even with galleries and heavy media.",
    },
    {
      title: "Automation",
      html: "The admin work that eats your time, simplified: bookings and forms, communicating and delivering to clients, keeping the portfolio current, generating .pdf contracts, and more.",
    },
  ];

  return (
    <div className="nsc-portfolio-panel">
      <h1 className="portfolio-title">ux.studio.sibiu</h1>

      <Accordion items={items} />

      <div className="portfolio-footer">
        <Link href={contactLink.href} className="portfolio-contact">
          Contact <span aria-hidden="true">&rarr;</span>
        </Link>
        <p className="portfolio-blurb">
          Crafting websites for creative industries: functional, minimal design,
          performance, and full content control
        </p>
      </div>
    </div>
  );
}
