import { PortfolioShowcase } from "@/app/components/portfolio-showcase/portfolio-showcase";
import { AccordionItem } from "@/app/components/accordion/accordion";
import { caseDeschiseGallery, slowDaysGallery, arhitecturalGallery, clasaZeroGallery } from "@/app/data/gallery";

export default function PortfolioPage() {
  return (
    <PortfolioShowcase
      heading="Portfolio"
      blurb="
      The projects above represent ongoing collaborations and evolving 
      products designed to support real-world use.
      Each one shaped by its own needs, ambitions, and the people involved in bringing it to life."
    >
      <AccordionItem title="casedeschise.ro" gallery={caseDeschiseGallery} href="https://casedeschise.ro">Annual architectural event in Sibiu and Ramnicu Valcea. Organizers have simple, full content control, including custom signup forms. Signup flow via QR code by email. Mobile first design. Admin dashboard in Sanity. </AccordionItem>
      <AccordionItem title="slowdays-outside.ro" gallery={slowDaysGallery} href="https://slowdays-outside.ro">Platform for kids activities. Educators post events and manage signups and group comunication.</AccordionItem>
      <AccordionItem title="dianaconstantinescu.ro" gallery={arhitecturalGallery} href="https://dianaconstantinescu.ro">Portfolio for architectural studio. Minimal, restrained design</AccordionItem>
      <AccordionItem title="clasazero.ro" gallery={clasaZeroGallery} href="https://clasazero.ro">Random stem puzzles for pre-school kids. AI generated graphics. In progress..</AccordionItem>
    </PortfolioShowcase>
  );
}



// The projects above represent ongoing collaborations and evolving products designed to support real-world use.
// Each one shaped by its own needs, ambitions, and the people involved in bringing it to life.


// Our portfolio spans architecture, design, photography, education, and cultural initiatives. 
// While each project is unique, they share a common focus on clarity, functionality, and thoughtful design.

// The projects below represent ongoing collaborations and evolving digital products. 
// Built with care, shaped through iteration, and designed to support real-world use.