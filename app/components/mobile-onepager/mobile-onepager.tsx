import { SwiperGallery } from "@/app/components/swiper-gallery/swiper-gallery";
import { Accordion, AccordionItem } from "@/app/components/accordion/accordion";
import { ContactLink } from "@/app/components/contact-link/contact-link";
import { caseDeschiseGallery, slowDaysGallery, arhitecturalGallery, clasaZeroGallery } from "@/app/data/gallery";
import "./mobile-onepager.scss";

// Mobile-only single scroll page, composed from standalone atoms: gallery, title,
// accordion groups (each with its own open state), blurbs and contact links.
// Content is intentionally repeated from the desktop pages so this stays fully
// self-contained — reorder the blocks freely, and drop a <p className="page-blurb">
// or a <ContactLink /> at any point.
export function MobileOnePager() {
  return (
    <div className="nsc-mobile-onepager">
      <div className="onepager-gallery">
        <SwiperGallery />
      </div>

      {/* Services — title inside the section so it keeps the tighter desktop
          title→accordion spacing; the flex gap only separates sections. */}
      <section className="onepager-section">
        <h1 className="page-title">ux.studio.sibiu</h1>
        <Accordion>
          <AccordionItem title="Unique digital solutions">Optimized for speed and performance across all devices.</AccordionItem>
          <AccordionItem title="Complete content control">Manage your content independently without technical barriers.</AccordionItem>
          <AccordionItem title="Modern design">
            <span>Influenced by contemporary design principles and graphic design tradition, we create products that balance clarity, usability and bold visual expression. </span>
            <span> We value clean, contemporary design shaped by context, function and your vision.</span>
          </AccordionItem>
          <AccordionItem title="Custom functionality">Built specifically for your needs, no compromises.</AccordionItem>
          <AccordionItem title="Collaboration">Close collaboration creates stronger products. By working together over time, we can respond to changing needs, improve details, and shape a more practical solution. For this reason, ux.studio.sibiu remains involved beyond delivery, supporting the evolution of the product.</AccordionItem>
        </Accordion>
      </section>

      {/* Contact link + blurb grouped and centred, like the desktop footer. */}
      <div className="onepager-footer">
        <ContactLink />
        <p className="page-blurb">Every project is different, shaped by its context, ambitions and people.</p>
      </div>

      {/* Portfolio — each item carries its gallery, which renders inline on mobile. */}
      <section className="onepager-section">
        <h2 className="page-title">Portfolio</h2>
        <Accordion>
          <AccordionItem title="casedeschise.ro" gallery={caseDeschiseGallery} href="https://casedeschise.ro">Annual architectural event in Sibiu and Ramnicu Valcea. Organizers have simple, full content control, including custom signup forms. Signup flow via QR code by email. Mobile first design. Admin dashboard in Sanity. </AccordionItem>
          <AccordionItem title="slowdays-outside.ro" gallery={slowDaysGallery} href="https://slowdays-outside.ro">Platform for kids activities. Educators post events and manage signups and group comunication.</AccordionItem>
          <AccordionItem title="architectural-portfolio.ro" gallery={arhitecturalGallery} href="https://architectural-portfolio.ro">Portfolio for architectural studio. Minimal, restrained design</AccordionItem>
          <AccordionItem title="clasazero.ro" gallery={clasaZeroGallery} href="https://clasazero.ro">Random stem puzzles for pre-school kids. AI generated graphics. In progress..</AccordionItem>
        </Accordion>
      </section>

      {/* Contact — #contact on the title is where ContactLink's scroll variant lands. */}
      <section className="onepager-section" style={{ marginBottom: '10rem' }}>
        <h2 id="contact" className="page-title">Contact</h2>
        <Accordion>
          <AccordionItem title="Email">uxstudiosibiu@gmail.com</AccordionItem>
          <AccordionItem title="Phone">0748 546788 direct call or WhatsApp both work for us</AccordionItem>
          <AccordionItem title="Address">str. Tribunei mr. 7, Sibiu, Romania</AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
