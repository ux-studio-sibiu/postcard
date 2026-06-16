import type { StaticImageData } from "next/image";

// Images are imported straight from the workspace /images folder. Each portfolio
// project has its own subfolder; the loose files in the root make up the default
// gallery shown when no project is open. When this moves to Sanity these static
// imports become CDN URLs and the rest of the app keeps consuming { src, alt }.

// Default — loose files in /images root.
import kitzbuhel from "@/images/251028-Kiotzbuhel-Updated-Edit-10.jpg";
import caseDeschiseCover from "@/images/case-deschise.jpg";
import electricSpark from "@/images/electric-creativity-spark-stockcake.webp";
import fire from "@/images/casedeschise-fire.jpg";
import window from "@/images/casedeschise-window.jpg";
import zestrea2 from "@/images/casedeschise-zestrea.jpg";

// casedeschise.ro
import zestrea from "@/images/case-deschise/5. Frescă magazin Zestrea - Artă veche și podoabe compressed.jpg";
import scara from "@/images/case-deschise/7. Primăria Municipiului Sibiu compressed.jpg";
import colibaPoplacean10 from "@/images/case-deschise/Coliba Poplăcean (10).jpg";
import colibaPoplacean3 from "@/images/case-deschise/Coliba Poplăcean (3).jpg";
import colibaTaroi5 from "@/images/case-deschise/Coliba Tăroi (5).jpg";

// slowdays-outside.ro
import slowDays1 from "@/images/slow-days-outside/a-3.png";
import slowDays2 from "@/images/slow-days-outside/a8cd93f4-d5f5-4e7f-ac5c-4d14cb02e0f7-image_edit_oai_img_rewchsIDZeB_1ftjI12Cm.png";

// dianaconstantinescu.ro
import omotesando from "@/images/arhitectural-prototype/08-251104-jp-web-JS-Omotesando-new-edit.jpg";
import arhitectural2 from "@/images/arhitectural-prototype/2.webp";

// clasazero.ro
import balloons from "@/images/clasa-zero/balloons-2.jpg";
import cars1 from "@/images/clasa-zero/cars-1.jpg";
import cars2 from "@/images/clasa-zero/cars-2.jpg";
import flowers from "@/images/clasa-zero/flowers-2.jpg";

export type GallerySlide = {
  src: StaticImageData;
  alt: string;
  // CSS class applied to the slide — drives its click animation ("anim-glitch"
  // the punchy strobe, "anim-reveal" the gentle fade, "anim-fire" the flickering
  // firelight, "anim-simple" the same flicker without the warm tint) or any custom
  // class you define in swiper-gallery.scss. Defaults to "anim-glitch".
  cssClass?: string;
};

export const defaultGallery: GallerySlide[] = [
  { src: electricSpark, alt: "A lightbulb bursting with multicoloured sparks" },
  { src: fire, alt: "casedeschise.ro: Coliba Poplacean, Raul Sadului", cssClass: "anim-fire" },
  { src: window, alt: "casedeschise.ro: Coliba Poplacean, Raul Sadului", cssClass: "anim-simple" },
  { src: zestrea2, alt: "casedeschise.ro: Magazinul Zestrea", cssClass: "anim-simple" },
  { src: kitzbuhel, alt: "Fluted timber wall and concrete hall" },
  { src: caseDeschiseCover, alt: "Case Deschise" },
  
];

export const caseDeschiseGallery: GallerySlide[] = [
  { src: zestrea, alt: "Frescă magazin Zestrea — artă veche și podoabe", cssClass: "anim-simple"  },
  { src: scara, alt: "Primăria Municipiului Sibiu", cssClass: "anim-fire" },
  { src: colibaPoplacean10, alt: "Coliba Poplăcean", cssClass: "anim-simple"  },
  { src: colibaPoplacean3, alt: "Coliba Poplăcean", cssClass: "anim-simple"  },
  { src: colibaTaroi5, alt: "Coliba Tăroi", cssClass: "anim-simple"  },
];

export const slowDaysGallery: GallerySlide[] = [
  { src: slowDays1, alt: "Slow Days Outside — kids activity", cssClass: "anim-simple"  },
  { src: slowDays2, alt: "Slow Days Outside — kids activity", cssClass: "anim-simple"  },
];

export const arhitecturalGallery: GallerySlide[] = [
  { src: omotesando, alt: "Minimalist retail interior in oak" },
  { src: arhitectural2, alt: "Architectural study" },
];

export const clasaZeroGallery: GallerySlide[] = [
  { src: balloons, alt: "Clasa Zero — balloons puzzle", cssClass: "anim-fire" },
  { src: cars1, alt: "Clasa Zero — cars puzzle", cssClass: "anim-fire"},
  { src: cars2, alt: "Clasa Zero — cars puzzle", cssClass: "anim-simple" },
  { src: flowers, alt: "Clasa Zero — flowers puzzle", cssClass: "anim-simple" },
];
