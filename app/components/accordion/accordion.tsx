"use client";

import { useCallback, useEffect, useRef, useState, Children, cloneElement } from "react";
import type { GallerySlide } from "@/app/data/gallery";
import { SwiperGallery } from "@/app/components/swiper-gallery/swiper-gallery";
import "./accordion.scss";

// `gallery` drives the external (desktop) gallery via the parent Accordion's
// notify, and is also rendered inline below the text on mobile (the desktop main
// gallery is hidden there — see PortfolioShowcase / composition.scss). It's only
// rendered while the item is open, so the Swiper mounts into a visible panel and
// measures correctly.
export function AccordionItem({ title, children, isOpen, onToggle, href, gallery }: { title: string; children: React.ReactNode; isOpen?: boolean; onToggle?: () => void; gallery?: GallerySlide[]; href?: string }) {
  const itemRef = useRef<HTMLLIElement>(null);

  // Mobile: after this item opens (panel can be tall — it holds a gallery), the
  // page is the scroller. If the trigger is already fully in view, leave it be;
  // only when it's scrolled off-screen do we bring it ~50px from the top.
  // Deferred a frame so the new layout is settled, and smooth so it doesn't jump.
  useEffect(() => {
    if (!isOpen || typeof window === "undefined") return;
    if (!window.matchMedia("(max-width: 768px)").matches) return;
    const id = requestAnimationFrame(() => {
      const el = itemRef.current;
      if (!el) return;
      // Measure the trigger, not the whole item — its panel may be tall now.
      const trigger = el.querySelector<HTMLElement>(".accordion-trigger");
      const rect = (trigger ?? el).getBoundingClientRect();
      // Fully in view — don't move it.
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) return;
      // Off-screen — bring the trigger ~50px from the top.
      window.scrollTo({ top: window.scrollY + rect.top - 50, behavior: "smooth" });
    });
    return () => cancelAnimationFrame(id);
  }, [isOpen]);

  return (
    <li ref={itemRef} className={`accordion-item${isOpen ? " is-open" : ""}`}>
      <button type="button" className="accordion-trigger" aria-expanded={isOpen} onClick={onToggle}>
        <span className="accordion-title">{title}</span>
        <span className="accordion-icon" aria-hidden="true" />
      </button>
      <div className="accordion-panel" hidden={!isOpen}>
        <p>{typeof children === "string" ? <span dangerouslySetInnerHTML={{ __html: children }} /> : children}</p>
        {href && <a className="accordion-link" href={href} target="_blank" rel="noopener noreferrer">view live <span aria-hidden="true">&rarr;</span></a>}
        {isOpen && gallery && <div className="accordion-gallery mobile-only"><SwiperGallery slides={gallery} /></div>}
      </div>
    </li>
  );
}

export function Accordion({ children, onActiveChange }: { children: React.ReactNode; onActiveChange?: (gallery: GallerySlide[] | null) => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const scrollRef = useRef<HTMLUListElement>(null);
  const [thumb, setThumb] = useState({ show: false, top: 0, height: 0 });

  const updateThumb = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    if (scrollHeight - clientHeight <= 1) {
      setThumb((t) => (t.show ? { ...t, show: false } : t));
      return;
    }
    setThumb({
      show: true,
      top: (scrollTop / scrollHeight) * 100,
      height: (clientHeight / scrollHeight) * 100,
    });
  }, []);

  useEffect(() => {
    updateThumb();
    const el = scrollRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(updateThumb);
    ro.observe(el);
    return () => ro.disconnect();
  }, [updateThumb, openIndex]);

  const childrenArray = Children.toArray(children);

  return (
    <div className="nsc-accordion">
      <ul className="accordion-list" ref={scrollRef} onScroll={updateThumb}>
        {childrenArray.map((child, idx) =>
          cloneElement(child as React.ReactElement, {
            isOpen: openIndex === idx,
            onToggle: () => {
              const next = openIndex === idx ? null : idx;
              setOpenIndex(next);
              const active = next === null ? null : (childrenArray[next] as React.ReactElement<{ gallery?: GallerySlide[] }>).props.gallery ?? null;
              onActiveChange?.(active);
            },
          } as any)
        )}
      </ul>

      <span
        className={`accordion-scrollbar${thumb.show ? " is-visible" : ""}`}
        style={{ top: `${thumb.top}%`, height: `${thumb.height}%` }}
        aria-hidden="true"
      />
    </div>
  );
}
