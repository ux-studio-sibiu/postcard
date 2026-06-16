import Link from "next/link";
import { Accordion } from "@/app/components/accordion/accordion";
import type { GallerySlide } from "@/app/data/gallery";

export function Panel({ heading, children, blurb, onActiveChange }: { heading: string; children: React.ReactNode; blurb: string; onActiveChange?: (gallery: GallerySlide[] | null) => void }) {
  return (
    <div className="page-panel">
      <h1 className="page-title">{heading}</h1>

      <Accordion onActiveChange={onActiveChange}>{children}</Accordion>

      <div className="page-footer">
        <Link href="/contact" className="page-contact">
          Contact <span aria-hidden="true">&rarr;</span>
        </Link>
        <p className="page-blurb">{blurb}</p>
      </div>
    </div>
  );
}
