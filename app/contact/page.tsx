import { Composition } from "@/app/components/composition/composition";
import { SwiperGallery } from "@/app/components/swiper-gallery/swiper-gallery";
import { Panel, AccordionItemComponent } from "@/app/components/panel/panel";

export default function ContactPage() {
  return (
    <Composition
      left={<SwiperGallery />}
      right={
        <Panel
          heading="Contact"
          blurb="I'd love to understand how your work flows and what could make it easier. Let's talk."
        >
          <AccordionItemComponent
            title="WhatsApp"
            html="The easiest way — a short, no-pressure chat."
          />
          <AccordionItemComponent
            title="Email"
            html="salut@uxstudiosibiu.ro"
          />
          <AccordionItemComponent
            title="Area"
            html="Sibiu — and online, wherever it makes sense."
          />
          <AccordionItemComponent
            title="Instagram"
            html="@ux.studio.sibiu"
          />
        </Panel>
      }
    />
  );
}
