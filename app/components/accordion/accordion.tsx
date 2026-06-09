"use client";

import { useState } from "react";
import "./accordion.scss";

export type AccordionItem = { title: string; content: string };

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ul className="nsc-accordion">
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
              <p>{item.content}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
