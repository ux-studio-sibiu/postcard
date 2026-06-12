import { Composition } from "@/app/components/composition/composition";
import { SwiperGallery } from "@/app/components/swiper-gallery/swiper-gallery";
import { Panel, AccordionItemComponent } from "@/app/components/panel/panel";

export default function PortfolioPage() {
  return (
    <Composition
      left={<SwiperGallery />}
      right={
        <Panel
          heading="Portfolio"
          blurb="A selection of recent work across architecture, interiors, product and portraiture — each shaped end to end with the client."
        >
          <AccordionItemComponent
            title="Omotesando Flagship"
            html="Retail interior and visual identity for a Tokyo boutique."
          />
          <AccordionItemComponent
            title="Kitzbühel Residence"
            html="Architectural photography and brand book for an alpine home."
          />
          <AccordionItemComponent
            title="Atelier Product Series"
            html="Studio product set for a furniture and objects collection."
          />
          <AccordionItemComponent
            title="Editorial Portraits"
            html="Ongoing portrait commissions for press and lookbooks."
          />
        </Panel>
      }
    />
  );
}
