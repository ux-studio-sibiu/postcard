"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import "./accordion.scss";

export type AccordionItem = { title: string; html: string };

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Custom scroll indicator — a plain div, so no native scrollbar arrows.
  // top/height are percentages of the visible track (the wrap height).
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

  // Re-measure on mount, when a section opens/closes (content height changes),
  // and whenever the element itself resizes.
  useEffect(() => {
    updateThumb();
    const el = scrollRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(updateThumb);
    ro.observe(el);
    return () => ro.disconnect();
  }, [updateThumb, openIndex]);

  return (
    <div className="nsc-accordion-wrap">
      <ul className="nsc-accordion" ref={scrollRef} onScroll={updateThumb}>
        {items.map((item, idx) => {
          const open = openIndex === idx;
          return (
            <li key={idx} className={`accordion-item${open ? " is-open" : ""}`}>
              <button
                type="button"
                className="accordion-trigger"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? null : idx)}
              >
                <span className="accordion-title">{item.title}</span>
                <span className="accordion-icon" aria-hidden="true" />
              </button>
              <div className="accordion-panel" hidden={!open}>
                <p dangerouslySetInnerHTML={{ __html: item.html }} />
              </div>
            </li>
          );
        })}
      </ul>

      <span
        className={`accordion-scrollbar${thumb.show ? " is-visible" : ""}`}
        style={{ top: `${thumb.top}%`, height: `${thumb.height}%` }}
        aria-hidden="true"
      />
    </div>
  );
}
