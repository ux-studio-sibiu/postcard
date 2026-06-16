"use client";

import { useCallback, useEffect, useRef, useState, Children, cloneElement } from "react";
import type { GallerySlide } from "@/app/data/gallery";
import "./accordion.scss";

// `gallery` is carried by the item but not rendered here — the parent Accordion
// reads it off the open item to drive an external gallery (see PortfolioShowcase).
export function AccordionItem({ title, children, isOpen, onToggle }: { title: string; children: React.ReactNode; isOpen?: boolean; onToggle?: () => void; gallery?: GallerySlide[] }) {
  return (
    <li className={`accordion-item${isOpen ? " is-open" : ""}`}>
      <button type="button" className="accordion-trigger" aria-expanded={isOpen} onClick={onToggle}>
        <span className="accordion-title">{title}</span>
        <span className="accordion-icon" aria-hidden="true" />
      </button>
      <div className="accordion-panel" hidden={!isOpen}>
        <p>{typeof children === "string" ? <span dangerouslySetInnerHTML={{ __html: children }} /> : children}</p>
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
