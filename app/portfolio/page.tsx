import { Composition } from "@/app/components/composition/composition";
import { SwiperGallery } from "@/app/components/swiper-gallery/swiper-gallery";
import { Panel } from "@/app/components/panel/panel";
import { AccordionItem as AccordionItemComponent } from "@/app/components/accordion/accordion";

export default function PortfolioPage() {
  return (
    <Composition
      left={<SwiperGallery />}
      right={
        <Panel
          heading="Portfolio"
          blurb="A selection of recent work across architecture, interiors, product and portraiture — each shaped end to end with the client."
        >
          <AccordionItemComponent title="Omotesando Flagship">Retail interior and visual identity for a Tokyo boutique.</AccordionItemComponent>
          <AccordionItemComponent title="Kitzbühel Residence">Architectural photography and brand book for an alpine home.</AccordionItemComponent>
          <AccordionItemComponent title="Atelier Product Series">Studio product set for a furniture and objects collection.</AccordionItemComponent>
          <AccordionItemComponent title="Editorial Portraits">Ongoing portrait commissions for press and lookbooks.</AccordionItemComponent>
        </Panel>
      }
    />
  );
}
