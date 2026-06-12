import Link from "next/link";
import { Children } from "react";
import { Accordion, type AccordionItem } from "@/app/components/accordion/accordion";
import { contactLink } from "@/app/data/content";
import "@/app/components/portfolio-panel/portfolio-panel.scss";

export function AccordionItemComponent({
  title,
  html,
}: {
  title: string;
  html: string;
}) {
  return null; // Marker component—children are extracted by Panel
}

export function Panel({
  heading,
  children,
  blurb,
}: {
  heading: string;
  children: React.ReactNode;
  blurb: string;
}) {
  const items: AccordionItem[] = [];

  // Extract items from AccordionItemComponent children
  Children.forEach(children, (child) => {
    if (
      child &&
      typeof child === "object" &&
      "props" in child &&
      (child as any).type === AccordionItemComponent
    ) {
      const props = (child as any).props;
      items.push({
        title: props.title,
        html: props.html,
      });
    }
  });

  return (
    <div className="nsc-portfolio-panel">
      <h1 className="portfolio-title">{heading}</h1>

      <Accordion items={items} />

      <div className="portfolio-footer">
        <Link href={contactLink.href} className="portfolio-contact">
          Contact <span aria-hidden="true">&rarr;</span>
        </Link>
        <p className="portfolio-blurb">{blurb}</p>
      </div>
    </div>
  );
}
