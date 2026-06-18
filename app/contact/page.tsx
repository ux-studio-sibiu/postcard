import { Composition } from "@/app/components/composition/composition";
import { SwiperGallery } from "@/app/components/swiper-gallery/swiper-gallery";
import { Panel } from "@/app/components/panel/panel";
import { AccordionItem } from "@/app/components/accordion/accordion";

export default function ContactPage() {
  return (
    <Composition
      className="hide-gallery-mobile"
      left={<SwiperGallery />}
      right={
        <Panel
          heading="Contact"
          blurb={
            <p className="page-blurb contact-intro" style={{ maxWidth: '67ch' }}>
              Every project is different, shaped by its context, ambitions and people.
              We&apos;d love to learn about your work, understand how things currently function,
              and explore a fresh perspective.
            </p>
          }
        >
          <AccordionItem title="Email"><a href="mailto:ux@studiosibiu.com">ux@studiosibiu.com</a></AccordionItem>
          <AccordionItem title="Phone">40 748 546788 <span className="arrow-faint mr-1">→</span>direct call or whatsapp</AccordionItem>
          
          <AccordionItem title="Address">str. Tribunei mr. 7, Sibiu, Romania</AccordionItem>
          {/* <AccordionItem title="Where not to search">@ux.studio.sibiu</AccordionItem> */}
        </Panel>
      }
    />
  );
}
