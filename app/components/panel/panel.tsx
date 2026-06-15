import Link from "next/link";
import { Accordion } from "@/app/components/accordion/accordion";

export function Panel({ heading, children, blurb }: { heading: string; children: React.ReactNode; blurb: string }) {
  return (
    <div className="page-panel">
      <h1 className="page-title">{heading}</h1>

      <Accordion>{children}</Accordion>

      <div className="page-footer">
        <Link href="/contact" className="page-contact">
          Contact <span aria-hidden="true">&rarr;</span>
        </Link>
        <p className="page-blurb">{blurb}</p>
      </div>
    </div>
  );
}
