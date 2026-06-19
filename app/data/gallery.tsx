import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";

// Images are imported straight from the workspace /images folder. Each portfolio
// project has its own subfolder; the loose files in the root make up the default
// gallery shown when no project is open. When this moves to Sanity these static
// imports become CDN URLs and the rest of the app keeps consuming { src, alt }.

// Default — loose files in /images root.
import electricSpark from "@/images/electric-creativity-spark-stockcake.webp";
import zestrea2 from "@/images/casedeschise-zestrea.jpg";

// casedeschise.ro
import zestrea from "@/images/case-deschise/5. Frescă magazin Zestrea - Artă veche și podoabe compressed.jpg";
import scara from "@/images/case-deschise/7. Primăria Municipiului Sibiu compressed.jpg";
import colibaPoplacean10 from "@/images/case-deschise/Coliba Poplăcean (10).jpg";
import colibaPoplacean3 from "@/images/case-deschise/Coliba Poplăcean (3).jpg";
import colibaTaroi5 from "@/images/case-deschise/Coliba Tăroi (5).jpg";

// slowdays-outside.ro
import slowDays1 from "@/images/slow-days-outside/slowdays.jpg";
import slowDays2 from "@/images/slow-days-outside/slowdays2.jpg";
import slowDays3 from "@/images/slow-days-outside/slowdays3.jpg";

// dianaconstantinescu.ro
import arhitectural1 from "@/images/arhitectural-prototype/p1.jpg";
import arhitectural2 from "@/images/arhitectural-prototype/p2.jpg";
import arhitectural3 from "@/images/arhitectural-prototype/p3.jpg";
import arhitectural4 from "@/images/arhitectural-prototype/p4.jpg";

// clasazero.ro
import balloons from "@/images/clasa-zero/balloons-2.jpg";
import cars1 from "@/images/clasa-zero/cars-1.jpg";
import cars2 from "@/images/clasa-zero/cars-2.jpg";
import flowers from "@/images/clasa-zero/flowers-2.jpg";

import round1 from "@/images/clasa-zero/flowers.jpg";
import round2 from "@/images/clasa-zero/round.jpg";
import round3 from "@/images/clasa-zero/round2.jpg";


export type GallerySlide = {
  src: StaticImageData;
  // Plain-text description — used as the image's alt attribute (accessibility).
  alt: string;
  // Optional rich caption shown above the frame; may contain JSX such as links.
  // Falls back to `alt` when omitted.
  caption?: ReactNode;
  // CSS class applied to the slide — drives its click animation ("anim-glitch"
  // the punchy strobe, "anim-reveal" the gentle fade, "anim-fire" the flickering
  // firelight, "anim-simple" the same flicker without the warm tint, "anim-none"
  // full colour with no animation) or any custom class you define in
  // swiper-gallery.scss. Defaults to "anim-glitch".
  cssClass?: string;
};

export const defaultGallery: GallerySlide[] = [
  { src: electricSpark, alt: "" },
  { src: scara, alt: "Primăria Municipiului Sibiu", cssClass: "anim-fire" },
  
  { src: colibaTaroi5, alt: "Coliba Tăroi", cssClass: "anim-simple" },
  // { src: fire, alt: "casedeschise.ro: Coliba Poplăcean, Râul Sadului", 
  //   caption: <><a href="https://casedeschise.ro/sibiu/coliba-poplacean-tara-colibelor" target="_blank" rel="noopener noreferrer">www.casedeschise.ro : </a> <span>Coliba Poplăcean, Râul Săduului, 2026</span></>,
  //   cssClass: "anim-fire" },
  { src: cars1, alt: "Clasa Zero — cars puzzle", cssClass: "anim-fire" },
  { src: slowDays1, alt: "Slow Days Outside — kids activity", cssClass: "anim-none" },
  { src: flowers, alt: "Clasa Zero — flowers puzzle", cssClass: "anim-none" },
  // { src: window, alt: "casedeschise.ro: Coliba Poplăcean, Râul Sadului", caption: <>{caseDeschiseLink}: Coliba Poplăcean, Râul Săduului</>, cssClass: "anim-simple" },
  { src: zestrea2, alt: "casedeschise.ro: Magazinul Zestrea", 
    caption: <><a href="https://casedeschise.ro/sibiu/fresca-magazin-zestrea" target="_blank" rel="noopener noreferrer">www.casedeschise.ro : </a>: Magazinul Zestrea, 2025</>, 
    cssClass: "anim-simple" },
  
];

export const caseDeschiseGallery: GallerySlide[] = [
  { src: scara, alt: "Primăria Municipiului Sibiu", cssClass: "anim-fire" },
  { src: zestrea, alt: "Frescă magazin Zestrea — artă veche și podoabe", cssClass: "anim-simple" },
  { src: colibaPoplacean10, alt: "Coliba Poplăcean", cssClass: "anim-simple" },
  { src: colibaPoplacean3, alt: "Coliba Poplăcean", cssClass: "anim-simple" },
  { src: colibaTaroi5, alt: "Coliba Tăroi", cssClass: "anim-simple" },
];

export const slowDaysGallery: GallerySlide[] = [
  { src: slowDays1, alt: "Slow Days Outside — kids activity", cssClass: "anim-none" },
  { src: slowDays2, alt: "Slow Days Outside — kids activity", cssClass: "anim-none" },
  { src: slowDays3, alt: "Slow Days Outside — kids activity", cssClass: "anim-none" },
];

export const arhitecturalGallery: GallerySlide[] = [
  { src: arhitectural4, alt: "Photography portfolio cover" },
  { src: arhitectural1, alt: "Photography portfolio cover" },
  { src: arhitectural2, alt: "Photography portfolio cover" },
  // { src: arhitectural3, alt: "Architectural study" },
  
];

export const clasaZeroGallery: GallerySlide[] = [
  { src: balloons, alt: "Clasa Zero — balloons puzzle", cssClass: "anim-fire" },
  { src: cars1, alt: "Clasa Zero — cars puzzle", cssClass: "anim-fire" },
  { src: cars2, alt: "Clasa Zero — cars puzzle", cssClass: "anim-simple" },
  { src: flowers, alt: "Clasa Zero — flowers puzzle", cssClass: "anim-simple" },

  { src: round1, alt: "Clasa Zero — sequence puzzle", cssClass: "anim-none" },
  { src: round2, alt: "Clasa Zero — other puzzle", cssClass: "anim-none" },
  { src: round3, alt: "clasa-zerol.app : puzzle", cssClass: "anim-none" },
];

// Single source of truth for the portfolio list, shared by the desktop page
// (rendered as Accordion items) and the mobile one-pager (rendered as modal
// triggers). Each item pairs a project with the gallery shown when it opens.
export type PortfolioItem = {
  title: string;
  gallery: GallerySlide[];
  href: string;
  // Optional per-surface override. Mobile uses `mobileHref` when set, otherwise
  // falls back to `href`; desktop always uses `href`.
  mobileHref?: string;
  description: string;
};

export const portfolioItems: PortfolioItem[] = [
  { title: "Case Deschise", gallery: caseDeschiseGallery, href: "https://casedeschise.ro", mobileHref: "https://casedeschise.ro/sibiu", description: "Annual architectural event in Sibiu and Ramnicu Valcea. Organizers have simple, full content control, including custom signup forms. Signup flow via QR code by email. Mobile first design. Admin dashboard in Sanity." },
  { title: "Slow Days Outside", gallery: slowDaysGallery, href: "https://slow-days-outside.vercel.app/", description: "Platform for kids activities. Educators post events and manage signups and group comunication." },
  { title: "Photography Portfolio", gallery: arhitecturalGallery, href: "https://photography-prototype.vercel.app", description: "Portfolio for architectural studio. Minimal, restrained design" },
  { title: "Clasa Zero", gallery: clasaZeroGallery, href: "https://clasa-zero.vercel.app/game", description: "Random stem puzzles for pre-school kids. AI generated graphics. It is in progress.." },
];
