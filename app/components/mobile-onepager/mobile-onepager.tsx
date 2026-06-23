"use client";

import { useEffect, useState } from "react";
import { SwiperGallery } from "@/app/components/swiper-gallery/swiper-gallery";
import { Accordion, AccordionItem } from "@/app/components/accordion/accordion";
import { portfolioItems } from "@/app/data/gallery";
import { serviceItems } from "@/app/data/content";
import "./mobile-onepager.scss";

// Mobile-only experience built as a two-pane horizontal track: the list pane
// (gallery, services, portfolio, contact) and a detail pane. Opening a portfolio
// item slides the track left to reveal the detail (CSS transform, no Swiper, no
// modal overlay). Each pane scrolls vertically inside its own .pane-scroll, so
// the document never scrolls and the browser navbar stays put.
export function MobileOnePager() {
  // `activeIndex` drives the slide (null = list shown). `lastIndex` is the item
  // rendered in the detail pane — it sticks through the slide-back so the pane
  // doesn't blank out mid-transition.
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [lastIndex, setLastIndex] = useState(0);

  // Opening pushes a synthetic history entry so the browser/OS back button
  // returns to the list instead of leaving the page. The in-app back button
  // calls history.back() to consume that entry; both paths land on `popstate`,
  // which clears `activeIndex` — keeping history balanced (no orphan entries).
  const openItem = (idx: number) => {
    setLastIndex(idx);
    setActiveIndex(idx); 
    history.pushState({ portfolio: idx }, "");
  };
  const closeItem = () => history.back();

  useEffect(() => {
    const onPop = () => setActiveIndex(null);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // Custom pull-to-refresh: if a downward drag starts while the touched pane is
  // already scrolled to the top and exceeds the threshold, reload the page.
  useEffect(() => {
    const PULL_THRESHOLD = 90; // px dragged down from the top before reloading
    let startY = 0;
    let armed = false; // touch began at the top of a pane scroller

    const onTouchStart = (e: TouchEvent) => {
      const scroller = (e.target as HTMLElement).closest<HTMLElement>(".pane-scroll");
      armed = !!scroller && scroller.scrollTop <= 0;
      startY = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!armed) return;
      if (e.touches[0].clientY - startY > PULL_THRESHOLD) {
        armed = false;
        location.reload();
      }
    };

    document.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("touchmove", onTouchMove, { passive: true });
    return () => {
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  const detailItem = portfolioItems[lastIndex];
  const detailHref = detailItem.mobileHref ?? detailItem.href;
  const isDetail = activeIndex !== null;

  return (
    <div className="nsc-mobile-onepager">
      <div className={`onepager-track${isDetail ? " is-detail" : ""}`}>

        {/* List pane — the full one-pager. */}
        <section className="onepager-pane list-pane" inert={isDetail}>
          <div className="pane-scroll">

            <section className="fullscreen-section pt-3 pb-4">
              <div className="onepager-gallery">
                <SwiperGallery />
              </div>

              <div className="onepager-footer">
                <nav className="onepager-nav">
                  <a href="#services">Services</a>
                  <a href="#portfolio">Portfolio</a>
                  <a href="#contact">Contact</a>
                </nav>
                <p className="page-blurb">ux.studio.sibiu is a digital creative agency that imagines, designs and develops unique digital solutions, with focus on local, cultural, educational and creative projects.</p>
              </div>
            </section>

            {/* Services — title inside the section so it keeps the tighter desktop
                title to accordion spacing; the flex gap only separates sections. */}
            <section id="services" className="fullscreen-section onepager-sectionx">
              <div className="onepager-content">
                <h1 className="page-title">ux.studio.sibiu</h1>
                <Accordion>
                  {serviceItems.map((item) => (
                    <AccordionItem key={item.title} title={item.title}>{item.content}</AccordionItem>
                  ))}
                </Accordion>
              </div>
            </section>

            {/* Portfolio — each item slides the track over to the detail pane. */}
            <section id="portfolio" className="fullscreen-section onepager-sectionx">
              <div className="onepager-content">
                <h2 className="page-title">Portfolio</h2>
                <div className="nsc-accordion">
                  <ul className="accordion-list">
                    {portfolioItems.map((item, idx) => (
                      <li key={idx} className="accordion-item">
                        <button type="button" className="accordion-trigger" onClick={() => openItem(idx)}>
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

          </div>
        </section>

        {/* Detail pane — the selected portfolio item. */}
        <section className="onepager-pane detail-pane" inert={!isDetail}>
          <div className="pane-scroll">
            <div className="detail-header">
              <button type="button" className="detail-back" onClick={closeItem}>
                <span className="arrow-faint" aria-hidden="true">&larr;</span> back
              </button>
              {detailHref && (
                <a className="detail-link detail-link-top" href={detailHref} target="_blank" rel="noopener noreferrer">
                  view live <span className="arrow-faint" aria-hidden="true">&rarr;</span>
                </a>
              )}
            </div>
            <div className="detail-gallery">
              <SwiperGallery key={lastIndex} slides={detailItem.gallery} />
            </div>
            <div className="detail-content">
              <p>{detailItem.description}</p>
              {detailHref && (
                <a className="detail-link" href={detailHref} target="_blank" rel="noopener noreferrer">
                  view live <span className="arrow-faint" aria-hidden="true">&rarr;</span>
                </a>
              )}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
