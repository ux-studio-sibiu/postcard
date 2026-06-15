import { Composition } from "@/app/components/composition/composition";
import { SwiperGallery } from "@/app/components/swiper-gallery/swiper-gallery";
import { Panel } from "@/app/components/panel/panel";
import { AccordionItem } from "@/app/components/accordion/accordion";

export default function PortfolioPage() {
  return (
    <Composition
      left={<SwiperGallery />}
      right={
        <Panel
          heading="Portfolio"
          blurb="A selection of recent work across architecture, interiors, product and portraiture — each shaped end to end with the client."
        >
          <AccordionItem title="casedeschise.ro">Annual architectural event in Sibiu and Ramnicu Valcea. Organizers have simple, full content control, including custom signup forms. Signup flow via QR code by email. Mobile first design. Admin dashboard in Sanity. </AccordionItem>
          <AccordionItem title="slowdays-outside.ro">Platform for kids activities. Educators post events and manage signups and group comunication.</AccordionItem>
          <AccordionItem title="dianaconstantinescu.ro">Portfolio for architectural studio. Minimal, restrained design</AccordionItem>
          <AccordionItem title="clasazero.ro">Random stem puzzles for pre-school kids. AI generated graphics. In progress..</AccordionItem>
        </Panel>
      }
    />
  );
}
