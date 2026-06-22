import { Composition } from "@/app/components/composition/composition";
import { SwiperGallery } from "@/app/components/swiper-gallery/swiper-gallery";
import { Panel } from "@/app/components/panel/panel";
import { AccordionItem } from "@/app/components/accordion/accordion";
import { MobileOnePager } from "@/app/components/mobile-onepager/mobile-onepager";
import { serviceItems } from "@/app/data/content";

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
          {serviceItems.map((item) => (
            <AccordionItem key={item.title} title={item.title}>{item.content}</AccordionItem>
          ))}
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