import { Composition } from "@/app/components/composition/composition";
import { SwiperGallery } from "@/app/components/swiper-gallery/swiper-gallery";
import { Panel } from "@/app/components/panel/panel";
import { AccordionItem } from "@/app/components/accordion/accordion";
import { MobileOnePager } from "@/app/components/mobile-onepager/mobile-onepager";

export default function Home() {
  return (
    <>
    <div className="desktop-only">
    <Composition
      left={<SwiperGallery />}
      right={
        <Panel
          heading="ux.studio.sibiu"
          blurb={
            <p className="page-blurb home-intro" style={{ maxWidth: '63ch' }}>
              ux.studio.sibiu is a digital creative agency that imagines,
              designs and develops unique digital solutions, with focus on local,
              cultural, educational and creative projects.
            </p>
          }
        >
          <AccordionItem title="Unique digital solutions">Optimized for speed and performance across all devices.</AccordionItem>
          
          
          <AccordionItem title="Complete content control">Manage your content independently without technical barriers.</AccordionItem>
          <AccordionItem title="Modern design">
            <span>Influenced by contemporary design principles and graphic
            design tradition, we create products that
            balance clarity, usability and bold visual expression. </span>

            <span>Design is shaped by context, function and your vision.</span>
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
    </div>

    <div className="mobile-only">
      <MobileOnePager />
    </div>
    </>
  );
}



// A restrained visual language shaped by content, context, and function.


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