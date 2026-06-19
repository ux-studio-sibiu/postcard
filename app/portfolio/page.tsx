import { PortfolioShowcase } from "@/app/components/portfolio-showcase/portfolio-showcase";
import { AccordionItem } from "@/app/components/accordion/accordion";
import { portfolioItems } from "@/app/data/gallery";

export default function PortfolioPage() {
  return (
    <PortfolioShowcase
      heading="Portfolio"
      blurb={
        <p className="page-blurb portfolio-intro">
          The projects above represent ongoing collaborations and evolving
          products designed to support real-world use.
          Each one shaped by its own needs, ambitions, and the people involved in bringing it to life.
        </p>
      }
    >
      {portfolioItems.map((item) => (
        <AccordionItem key={item.title} title={item.title} gallery={item.gallery} href={item.href}>{item.description}</AccordionItem>
      ))}
    </PortfolioShowcase>
  );
}



// The projects above represent ongoing collaborations and evolving products designed to support real-world use.
// Each one shaped by its own needs, ambitions, and the people involved in bringing it to life.


// Our portfolio spans architecture, design, photography, education, and cultural initiatives. 
// While each project is unique, they share a common focus on clarity, functionality, and thoughtful design.

// The projects below represent ongoing collaborations and evolving digital products. 
// Built with care, shaped through iteration, and designed to support real-world use.