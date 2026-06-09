import Link from "next/link";
import { Accordion } from "@/app/components/accordion/accordion";
import { contactLink, type PanelContent } from "@/app/data/content";
import "@/app/components/portfolio-panel/portfolio-panel.scss";

// Generic right-hand square for the non-"About Me" nav routes. Mirrors the
// PortfolioPanel layout (big heading, accordion, centred footer) so swapping
// nav links keeps the composition visually stable.
export function Panel({ content }: { content: PanelContent }) {
  const items = content.entries.map((e) => ({
    title: e.title,
    content: e.body,
  }));

  return (
    <div className="nsc-portfolio-panel">
      <h1 className="portfolio-title">{content.heading}</h1>

      <Accordion items={items} />

      <div className="portfolio-footer">
        <Link href={contactLink.href} className="portfolio-contact">
          Contact <span aria-hidden="true">&rarr;</span>
        </Link>
        <p className="portfolio-blurb">{content.blurb}</p>
      </div>
    </div>
  );
}
