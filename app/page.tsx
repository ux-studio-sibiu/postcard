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
          blurb="ux.studio.sibiu is a digital creative agency that imagines, 
designs and develops unique digital solutions, with focus on local, 
cultural, educational and creative projects."
                          >
          <AccordionItem title="Fast websites">Optimized for speed and performance across all devices.</AccordionItem>
          
          
          <AccordionItem title="Complete content control">Manage your content independently without technical barriers.</AccordionItem>
          <AccordionItem title="Modern design">
            Influenced by contemporary design principles and graphic
            design tradition, we create products that
            balance clarity, usability and bold visual expression.
            Clean, contemporary aesthetics. Unique design tailored to its function and your vision.
            </AccordionItem>
          
          <AccordionItem title="Custom functionality">Built specifically for your needs, no compromises.</AccordionItem>
          <AccordionItem title="Collaboration">
            Close collaboration creates stronger products. 
            By working together over time, we can respond to changing needs, 
            improve details, and shape a more practical solution. 
            For this reason, ux.studio.sibiu remains involved beyond delivery,
            supporting the evolution of the product.</AccordionItem>
        </Panel>
      }
    />
  );
}



// Influenced by modernist design principles and graphic
// design tradition, ux.studio.sibiu combines typography, grid
// systems and motion to create digital experiences that
// balance clarity, usability and bold visual expression.

// Each project becomes a case study and a
// meaningful part of our portfolio

//partnering with artists who value clarity, functionality, and authorship.
//  independent collaborations


// ux.studio.sibiu is a digital creative agency that imagines, 
// designs and develops unique digital solutions, with focus on local, 
// cultural, educational and creative projects.