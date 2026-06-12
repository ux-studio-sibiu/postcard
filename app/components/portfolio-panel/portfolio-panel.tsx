import Link from "next/link";
import { Accordion, AccordionItem } from "@/app/components/accordion/accordion";
import { contactLink } from "@/app/data/content";
import "./portfolio-panel.scss";

export function PortfolioPanel() {
  return (
    <div className="nsc-portfolio-panel">
      <h1 className="portfolio-title">ux.studio.sibiu</h1>

      <Accordion>
        <AccordionItem title="Services">Fast, functional websites for creative industries. — functional —minimal design —performance focus -—full content control</AccordionItem>
        <AccordionItem title="Collaboration">I reach out directly to people whose work inspires me — for collaborations, for promotion, and to understand the real challenges of what they do. The ambition: useful products, built together with the people who use them.</AccordionItem>
        <AccordionItem title="Design">Less, but better. Minimal, functional design where every element earns its place — restraint over decoration, clarity over clutter. The result feels calm, confident, and effortless to use.</AccordionItem>
        <AccordionItem title="Content control">Update your own content, simply and independently.</AccordionItem>
        <AccordionItem title="Fast navigation">Clear, fast navigation designed mobile-first — fluid even with galleries and heavy media.</AccordionItem>
        <AccordionItem title="Automation">The admin work that eats your time, simplified: bookings and forms, communicating and delivering to clients, keeping the portfolio current, generating .pdf contracts, and more.</AccordionItem>
      </Accordion>

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
