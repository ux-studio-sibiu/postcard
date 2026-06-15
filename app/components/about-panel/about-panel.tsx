import Link from "next/link";
import { Accordion, AccordionItem } from "@/app/components/accordion/accordion";
import "./about-panel.scss";

export function AboutPanel() {
  return (
    <div className="nsc-about-panel">
      <h1 className="page-title">ux.studio.sibiu</h1>

      <Accordion>
        {/* <AccordionItem title="Services">
          Fast, functional websites for creative industries. 
          — functional —minimal design —performance focus -—full content control
          
          </AccordionItem> */}

        <AccordionItem title="Fast websites">Optimized for speed and performance across all devices.</AccordionItem>
        <AccordionItem title="Complete content control">Manage your content independently without technical barriers.</AccordionItem>
        <AccordionItem title="Modern design">Clean, contemporary aesthetics. Unique design tailored to your vision.</AccordionItem>
        <AccordionItem title="Custom functionality">Built specifically for your needs, no compromises.</AccordionItem>
        
       
        {/* <AccordionItem title="Collaboration">I reach out directly to people whose work inspires me — for collaborations, for promotion, and to understand the real challenges of what they do. The ambition: useful products, built together with the people who use them.</AccordionItem>
        <AccordionItem title="Design">Less, but better. Minimal, functional design where every element earns its place — restraint over decoration, clarity over clutter. The result feels calm, confident, and effortless to use.</AccordionItem>
        <AccordionItem title="Fast navigation">Clear, fast navigation designed mobile-first — fluid even with galleries and heavy media.</AccordionItem>
        <AccordionItem title="Automation">The admin work that eats your time, simplified: bookings and forms, communicating and delivering to clients, keeping the portfolio current, generating .pdf contracts, and more.</AccordionItem>
       */}
      </Accordion>

      <div className="page-footer">
        <Link href="/contact" className="page-contact">
          Contact <span aria-hidden="true">&rarr;</span>
        </Link>
        <p className="page-blurb">
          Crafting websites for creative industries: functional, minimal design,
          performance, and full content control
        </p>
      </div>
    </div>
  );
}
