import { PortfolioShowcase } from "@/app/components/portfolio-showcase/portfolio-showcase";
import { AccordionItem } from "@/app/components/accordion/accordion";
import { caseDeschiseGallery, slowDaysGallery, arhitecturalGallery, clasaZeroGallery } from "@/app/data/gallery";

export default function PortfolioPage() {
  return (
    <PortfolioShowcase
      heading="Portfolio"
      blurb="A selection of recent work across architecture, interiors, product and portraiture — each shaped end to end with the client."
    >
      <AccordionItem title="casedeschise.ro" gallery={caseDeschiseGallery}>Annual architectural event in Sibiu and Ramnicu Valcea. Organizers have simple, full content control, including custom signup forms. Signup flow via QR code by email. Mobile first design. Admin dashboard in Sanity. </AccordionItem>
      <AccordionItem title="slowdays-outside.ro" gallery={slowDaysGallery}>Platform for kids activities. Educators post events and manage signups and group comunication.</AccordionItem>
      <AccordionItem title="dianaconstantinescu.ro" gallery={arhitecturalGallery}>Portfolio for architectural studio. Minimal, restrained design</AccordionItem>
      <AccordionItem title="clasazero.ro" gallery={clasaZeroGallery}>Random stem puzzles for pre-school kids. AI generated graphics. In progress..</AccordionItem>
    </PortfolioShowcase>
  );
}
