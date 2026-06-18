"use client";

import { useState } from "react";
import { SwiperGallery } from "@/app/components/swiper-gallery/swiper-gallery";
import { Accordion, AccordionItem } from "@/app/components/accordion/accordion";
import { ContactLink } from "@/app/components/contact-link/contact-link";
import { PortfolioModal } from "@/app/components/portfolio-modal/portfolio-modal";
import { caseDeschiseGallery, slowDaysGallery, arhitecturalGallery, clasaZeroGallery } from "@/app/data/gallery";
import "./mobile-onepager.scss";

// Mobile-only single scroll page, composed from standalone atoms: gallery, title,
// accordion groups (each with its own open state), blurbs and contact links.
// Content is intentionally repeated from the desktop pages so this stays fully
// self-contained — reorder the blocks freely, and drop a <p className="page-blurb">
// or a <ContactLink /> at any point.
export function MobileOnePager() {
  const [activePortfolioModal, setActivePortfolioModal] = useState<number | null>(null);

  const portfolioItems = [
    { title: "casedeschise.ro", gallery: caseDeschiseGallery, href: "https://casedeschise.ro", description: "Annual architectural event in Sibiu and Ramnicu Valcea. Organizers have simple, full content control, including custom signup forms. Signup flow via QR code by email. Mobile first design. Admin dashboard in Sanity." },
    { title: "slowdays-outside.ro", gallery: slowDaysGallery, href: "https://slowdays-outside.ro", description: "Platform for kids activities. Educators post events and manage signups and group comunication." },
    { title: "architectural-portfolio.ro", gallery: arhitecturalGallery, href: "https://architectural-portfolio.ro", description: "Portfolio for architectural studio. Minimal, restrained design" },
    { title: "clasazero.ro", gallery: clasaZeroGallery, href: "https://clasazero.ro", description: "Random stem puzzles for pre-school kids. AI generated graphics. In progress.." },
  ];
  return (
    <div className="nsc-mobile-onepager">

      <section className="fullscreen-section pt-3 pb-4">
        <div className="onepager-gallery">
          <SwiperGallery />
        </div>

        

        <div className="onepager-footer">
          {/* <ContactLink /> */}
          <nav className="onepager-nav">
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </nav>
          <p className="page-blurb">ux.studio.sibiu is a digital creative agency that imagines, designs and develops unique digital solutions, with focus on local, cultural, educational and creative projects.</p>
        </div>

      </section>



      {/* Services — title inside the section so it keeps the tighter desktop
          title→accordion spacing; the flex gap only separates sections. */}
      <section id="services" className="fullscreen-section onepager-sectionx">
        <div className="onepager-content">
          <h1 className="page-title">ux.studio.sibiu</h1>
          <Accordion>
            <AccordionItem title="Unique digital solutions">Optimized for speed and performance across all devices.</AccordionItem>
            <AccordionItem title="Complete content control">Manage your content independently without technical barriers.</AccordionItem>
            <AccordionItem title="Modern design">
              <span>Influenced by contemporary design principles and graphic design tradition, we create products that balance clarity, usability and bold visual expression. </span>
              <span>Design is shaped by context, function and your vision.</span>
            </AccordionItem>
            <AccordionItem title="Custom functionality">Built specifically for your needs, no compromises.</AccordionItem>
            <AccordionItem title="Collaboration">Close collaboration creates stronger products. By working together over time, we can respond to changing needs, improve details, and shape a more practical solution. For this reason, ux.studio.sibiu remains involved beyond delivery, supporting the evolution of the product.</AccordionItem>
          </Accordion>
        </div>
      </section>


      {/* Portfolio — each item opens a fullscreen modal with gallery on mobile. */}
      <section id="portfolio" className="fullscreen-section onepager-sectionx">
        <div className="onepager-content">
          <h2 className="page-title">Portfolio</h2>
          <div className="nsc-accordion">
            <ul className="accordion-list">
              {portfolioItems.map((item, idx) => (
                <li key={idx} className="accordion-item">
                  <button type="button" className="accordion-trigger" onClick={() => setActivePortfolioModal(idx)}>
                    <span className="accordion-title">{item.title}</span>
                    <span className="accordion-icon" aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact — #contact on the title is where ContactLink's scroll variant lands. */}
      <section id="contact" className="fullscreen-section onepager-sectionx" style={{ marginBottom: '10rem' }}>
        <div className="onepager-content">
          <h2 className="page-title">Contact</h2>
          <Accordion>
            <AccordionItem title="Email"><a href="mailto:ux@studiosibiu.com">ux@studiosibiu.com</a></AccordionItem>
            <AccordionItem title="Phone">40 748 546788 <span className="arrow-faint mr-1">→</span>direct call or whatsapp</AccordionItem>
            <AccordionItem title="Address">str. Tribunei mr. 7, Sibiu, Romania</AccordionItem>
          </Accordion>
        </div>
      </section>

      {activePortfolioModal !== null && (
        <PortfolioModal
          title={portfolioItems[activePortfolioModal].title}
          gallery={portfolioItems[activePortfolioModal].gallery}
          description={portfolioItems[activePortfolioModal].description}
          href={portfolioItems[activePortfolioModal].href}
          isOpen={true}
          onClose={() => setActivePortfolioModal(null)}
        />
      )}
    </div>
  );
}
