import { Accordion } from "@/app/components/accordion/accordion";
import { ContactLink } from "@/app/components/contact-link/contact-link";
import type { GallerySlide } from "@/app/data/gallery";

// `blurb` is composed by each page as its own element (e.g.
// <p className="page-blurb home-intro">…</p>) so pages can vary its classes /
// markup. Keep the base `.page-blurb` class for shared styling.
export function Panel({ heading, children, blurb, onActiveChange }: { heading: string; children: React.ReactNode; blurb: React.ReactNode; onActiveChange?: (gallery: GallerySlide[] | null) => void }) {
  return (
    <div className="page-panel">
      <h1 className="page-title">{heading}</h1>

      <Accordion onActiveChange={onActiveChange}>{children}</Accordion>

      <div className="page-footer">
        <ContactLink />
        {blurb}
      </div>
    </div>
  );
}
