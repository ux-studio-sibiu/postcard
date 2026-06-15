import { Composition } from "@/app/components/composition/composition";
import { SwiperGallery } from "@/app/components/swiper-gallery/swiper-gallery";
import { Panel } from "@/app/components/panel/panel";
import { AccordionItem } from "@/app/components/accordion/accordion";

export default function Home() {
  return (
    <Composition
      left={<SwiperGallery />}
      right={
        <Panel
          heading="ux.studio.sibiu"
          blurb="Crafting websites for creative industries: functional, minimal design, performance, and full content control"
        >
          <AccordionItem title="Fast websites">Optimized for speed and performance across all devices.</AccordionItem>
          <AccordionItem title="Complete content control">Manage your content independently without technical barriers.</AccordionItem>
          <AccordionItem title="Modern design">Clean, contemporary aesthetics. Unique design tailored to your vision.</AccordionItem>
          <AccordionItem title="Custom functionality">Built specifically for your needs, no compromises.</AccordionItem>
        </Panel>
      }
    />
  );
}
