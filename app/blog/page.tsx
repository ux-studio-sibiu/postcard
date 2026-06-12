import { Composition } from "@/app/components/composition/composition";
import { SwiperGallery } from "@/app/components/swiper-gallery/swiper-gallery";
import { Panel, AccordionItemComponent } from "@/app/components/panel/panel";

export default function BlogPage() {
  return (
    <Composition
      left={<SwiperGallery />}
      right={
        <Panel
          heading="Blog"
          blurb="Notes from the road, the studio and the darkroom — short essays on seeing before shooting."
        >
          <AccordionItemComponent
            title="On Chasing Soft Light"
            html="Why overcast mornings are a portrait photographer's secret weapon."
          />
          <AccordionItemComponent
            title="Packing for Omotesando"
            html="A minimalist kit for shooting clean retail interiors."
          />
          <AccordionItemComponent
            title="Reading a Room"
            html="Finding the one line of geometry that anchors an architectural frame."
          />
          <AccordionItemComponent
            title="The Patience of Product"
            html="Slowing down until the object tells you where the light belongs."
          />
        </Panel>
      }
    />
  );
}
