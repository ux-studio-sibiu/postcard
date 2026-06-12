import Link from "next/link";
import { Accordion, AccordionItem as AccordionItemComponent } from "@/app/components/accordion/accordion";
import { contactLink } from "@/app/data/content";
import "@/app/components/portfolio-panel/portfolio-panel.scss";

export { AccordionItemComponent };

export function Panel({
  heading,
  children,
  blurb,
}: {
  heading: string;
  children: React.ReactNode;
  blurb: string;
}) {
  return (
    <div className="nsc-portfolio-panel">
      <h1 className="portfolio-title">{heading}</h1>

      <Accordion>{children}</Accordion>

      <div className="portfolio-footer">
        <Link href={contactLink.href} className="portfolio-contact">
          Contact <span aria-hidden="true">&rarr;</span>
        </Link>
        <p className="portfolio-blurb">{blurb}</p>
      </div>
    </div>
  );
}
