import { Composition } from "@/app/components/composition/composition";
import { SwiperGallery } from "@/app/components/swiper-gallery/swiper-gallery";
import { Panel } from "@/app/components/panel/panel";
import { AccordionItem as AccordionItemComponent } from "@/app/components/accordion/accordion";

export default function ContactPage() {
  return (
    <Composition
      left={<SwiperGallery />}
      right={
        <Panel
          heading="Contact"
          blurb="I'd love to understand how your work flows and what could make it easier. Let's talk."
        >
          <AccordionItemComponent title="WhatsApp">The easiest way — a short, no-pressure chat.</AccordionItemComponent>
          <AccordionItemComponent title="Email">salut@uxstudiosibiu.ro</AccordionItemComponent>
          <AccordionItemComponent title="Area">Sibiu — and online, wherever it makes sense.</AccordionItemComponent>
          <AccordionItemComponent title="Instagram">@ux.studio.sibiu</AccordionItemComponent>
        </Panel>
      }
    />
  );
}
