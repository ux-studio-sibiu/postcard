import { Composition } from "@/app/components/composition/composition";
import { SwiperGallery } from "@/app/components/swiper-gallery/swiper-gallery";
import { Panel, AccordionItemComponent } from "@/app/components/panel/panel";

export default function ServicesPage() {
  return (
    <Composition
      left={<SwiperGallery />}
      right={
        <Panel
          heading="Services"
          blurb="Every commission begins with a conversation. Tell me the story you want to tell, and I will find the light for it."
        >
          <AccordionItemComponent
            title="Editorial Sessions"
            html="Half- and full-day shoots for magazines, brands and lookbooks."
          />
          <AccordionItemComponent
            title="Commercial Campaigns"
            html="Concept to final grade, art-directed alongside your team."
          />
          <AccordionItemComponent
            title="Fine Art Prints"
            html="Hand-finished archival prints, signed and numbered."
          />
          <AccordionItemComponent
            title="Licensing"
            html="Flexible usage rights for print, web and out-of-home."
          />
        </Panel>
      }
    />
  );
}
