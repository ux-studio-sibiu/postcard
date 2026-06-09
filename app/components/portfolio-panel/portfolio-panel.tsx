import Link from "next/link";
import { Accordion } from "@/app/components/accordion/accordion";
import { portfolioCategories, aboutBlurb, contactLink } from "@/app/data/content";
import "./portfolio-panel.scss";

// The "About Me" right-hand square from the reference: oversized "Portfolio"
// heading, an accordion of categories, and a centred contact + blurb footer.
export function PortfolioPanel() {
  const items = portfolioCategories.map((c) => ({
    title: c.title,
    content: c.quote,
  }));

  return (
    <div className="nsc-portfolio-panel">
      <h1 className="portfolio-title">ux.studio.sibiu</h1>

      <Accordion items={items} />

      <div className="portfolio-footer">
        <Link href={contactLink.href} className="portfolio-contact">
          Contact <span aria-hidden="true">&rarr;</span>
        </Link>
        <p className="portfolio-blurb">{aboutBlurb}</p>
      </div>
    </div>
  );
}
