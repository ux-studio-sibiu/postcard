import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";

// Images are imported straight from the workspace /images folder. Each portfolio
// project has its own subfolder; the loose files in the root make up the default
// gallery shown when no project is open. When this moves to Sanity these static
// imports become CDN URLs and the rest of the app keeps consuming { src, alt }.

// Default — loose files in /images root.
import electricSpark from "@/images/electric-creativity-spark-stockcake.webp";
import zestrea2 from "@/images/casedeschise-zestrea.jpg";
import test1 from "@/images/1.png";
import test2 from "@/images/2.png";
import test3 from "@/images/3.png";
import test4 from "@/images/4.png";
import test5 from "@/images/5.png";
import test6 from "@/images/6.png";
import test7 from "@/images/7.png";
import test8 from "@/images/8.png";
import test9 from "@/images/9.png";
import test10 from "@/images/10.png";

// casedeschise.ro
import zestrea from "@/images/case-deschise/5. Frescă magazin Zestrea - Artă veche și podoabe compressed.jpg";
import scara from "@/images/case-deschise/7. Primăria Municipiului Sibiu compressed.jpg";
import colibaPoplacean10 from "@/images/case-deschise/Coliba Poplăcean (10).jpg";
import colibaPoplacean3 from "@/images/case-deschise/Coliba Poplăcean (3).jpg";
import colibaPoplaceanFire from "@/images/case-deschise/casedeschise-fire-2.jpg";
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
  // { src: electricSpark, alt: "", cssClass:"anim-glitch"  },

  { src: test10, alt: "", cssClass:"anim-none" },
  // Test drive — same default glitch animation as electricSpark.
  // { src: test1, alt: "Test image 1", cssClass:"anim-none" },
  // { src: test2, alt: "Test image 2", cssClass:"anim-none" },
  // { src: test3, alt: "Test image 3", cssClass:"anim-none"},
  // { src: test4, alt: "Test image 4", cssClass:"anim-simple" },
  // { src: test5, alt: "Test image 5", cssClass:"anim-simple" },
  // { src: test6, alt: "Test image 6", cssClass:"anim-none" },
  // { src: test7, alt: "Test image 7", cssClass:"anim-glitch" },
  // { src: test8, alt: "Test image 8", cssClass:"anim-glitch" },
  // { src: test9, alt: "Test image 9", cssClass:"anim-glitch" },

  { src: scara, alt: "Primăria Municipiului Sibiu",cssClass: "anim-simple",
    caption: <><a href="https://casedeschise.ro/sibiu/primaria-municipiului-sibiu" target="_blank" rel="noopener noreferrer">www.casedeschise.ro : </a>Primăria Municipiului Sibiu, 2025</>, 
  },

    { src: slowDays2, alt: "Activities for kids", cssClass: "anim-none",
    caption: <><a href="https://slow-days-outside.vercel.app/" target="_blank" rel="noopener noreferrer">www.slow-days-outside.app : </a>Activities for kids</>, 
   },

  { src: arhitectural2, alt: "Photography portfolio cover", cssClass: "anim-none",
    caption: <><a href="https://photography-prototype.vercel.app/" target="_blank" rel="noopener noreferrer">www.photography-prototype.app</a></>, 
  },

     { src: cars1, alt: "Clasa Zero — cars puzzle", cssClass: "anim-none",
    caption: <><a href="https://clasa-zero.vercel.app/game" target="_blank" rel="noopener noreferrer">www.clasa-zero.app</a> - Stem puzzles for kids</>, 
   },


  

  { src: colibaPoplaceanFire, alt: "casedeschise.ro: Coliba Poplăcean, Râul Sadului", cssClass: "anim-fire-lit start-unsaturated",
    caption: <><a href="https://casedeschise.ro/sibiu/coliba-poplacean-tara-colibelor" target="_blank" rel="noopener noreferrer">www.casedeschise.ro : </a> <span>Coliba Poplăcean, Râul Sădului, 2026</span></>,
     },


  { src: flowers, alt: "Clasa Zero — flowers puzzle", cssClass: "anim-none",
    caption: <><a href="https://clasa-zero.vercel.app/game" target="_blank" rel="noopener noreferrer">www.clasa-zero.app</a> - Stem puzzles for kids</>, 
   },

  { src: zestrea2, alt: "casedeschise.ro: Magazinul Zestrea", 
    caption: <><a href="https://casedeschise.ro/sibiu/fresca-magazin-zestrea" target="_blank" rel="noopener noreferrer">www.casedeschise.ro </a> : Magazinul Zestrea, 2025</>, 
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
  { src: slowDays2, alt: "Slow Days Outside — kids activity", cssClass: "anim-none" },
  { src: slowDays1, alt: "Slow Days Outside — kids activity", cssClass: "anim-none" },
  { src: slowDays3, alt: "Slow Days Outside — kids activity", cssClass: "anim-none" },
];

export const arhitecturalGallery: GallerySlide[] = [
  { src: arhitectural2, alt: "Photography portfolio cover" },
  { src: arhitectural4, alt: "Photography portfolio cover" },
  { src: arhitectural1, alt: "Photography portfolio cover" },
  
  // { src: arhitectural3, alt: "Architectural study" },
  
];

export const clasaZeroGallery: GallerySlide[] = [
  { src: balloons, alt: "Clasa Zero — balloons puzzle", cssClass: "anim-fire" },
  { src: cars1, alt: "Clasa Zero — cars puzzle", cssClass: "anim-fire" },
  { src: cars2, alt: "Clasa Zero — cars puzzle", cssClass: "anim-simple" },
  { src: flowers, alt: "Clasa Zero — flowers puzzle", cssClass: "anim-simple" },

  { src: round1, alt: "Clasa Zero — sequence puzzle", cssClass: "anim-none" },
  { src: round2, alt: "Clasa Zero — other puzzle", cssClass: "anim-none" },
  // { src: round3, alt: "clasa-zerol.app : puzzle", cssClass: "anim-none" },
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
  { title: "01. Case Deschise", gallery: caseDeschiseGallery, href: "https://casedeschise.ro", mobileHref: "https://casedeschise.ro/sibiu", description: "Annual architectural event in Sibiu and Ramnicu Valcea. Organizers have simple, full content control, including custom signup forms. Signup flow via QR code by email. Mobile first design. Admin dashboard in Sanity." },
  { title: "02. Slow Days Outside", gallery: slowDaysGallery, href: "https://slow-days-outside.vercel.app/", description: "Platform for kids activities. Educators post events and manage signups and group comunication." },
  { title: "03. Photography Portfolio", gallery: arhitecturalGallery, href: "https://photography-prototype.vercel.app", description: "Portfolio concept for photography studio. Minimal, restrained design. Includes availability calendar, contact form, and full content flexibility." },
  { title: "04. Clasa Zero", gallery: clasaZeroGallery, href: "https://clasa-zero.vercel.app/game", description: "Random stem puzzles for pre-school kids. AI generated graphics. It is in progress.." },
];
