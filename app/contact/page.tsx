import { Composition } from "@/app/components/composition/composition";
import { SwiperGallery } from "@/app/components/swiper-gallery/swiper-gallery";
import { Panel } from "@/app/components/panel/panel";
import { AccordionItem } from "@/app/components/accordion/accordion";

export default function ContactPage() {
  return (
    <Composition
      left={<SwiperGallery />}
      right={
        <Panel
          heading="Contact"
          blurb="Every project is different, shaped by its context, ambitions and people. 
          We'd love to learn about your work, understand how things currently function, 
          and explore a fresh perspective."
        >
          <AccordionItem title="WhatsApp">The easiest way — a short, no-pressure chat.</AccordionItem>
          <AccordionItem title="Email">salut@uxstudiosibiu.ro</AccordionItem>
          <AccordionItem title="Area">Sibiu — and online, wherever it makes sense.</AccordionItem>
          <AccordionItem title="Instagram">@ux.studio.sibiu</AccordionItem>
        </Panel>
      }
    />
  );
}
