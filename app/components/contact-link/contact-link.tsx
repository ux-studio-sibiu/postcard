import Link from "next/link";

// Contact link with two breakpoint variants (toggled by the show/hide utilities):
// routes to /contact on desktop (separate pages), scrolls to the #contact section
// on the mobile one-pager. Drop it anywhere a "Contact →" prompt is wanted.
export function ContactLink() {
  return (
    <>
      <Link href="/contact" className="page-contact desktop-only"> Contact <span aria-hidden="true">&rarr;</span></Link>
      <a href="#contact" className="page-contact mobile-only"> Contact <span aria-hidden="true">&rarr;</span></a>
    </>
  );
}
