import type { StaticImageData } from "next/image";

// Images are imported straight from the workspace /images folder.
// When this moves to Sanity these static imports become CDN URLs and the
// rest of the app keeps consuming the same { src, alt } shape.
import omotesando08 from "@/images/08-251104-jp-web-JS-Omotesando-new-edit.jpg";
import kitzbuhel from "@/images/251028-Kiotzbuhel-Updated-Edit-10.jpg";
import electricSpark from "@/images/electric-creativity-spark-stockcake.webp";
import casedeschiseWebp from "@/images/2.webp";
import casedeschise from "@/images/case-deschise.jpg";
import zestrea from "@/images/5. Frescă magazin Zestrea - Artă veche și podoabe compressed.jpg";
import primariaSibiu from "@/images/7. Primăria Municipiului Sibiu compressed.jpg";
import colibaPoplacean10 from "@/images/Coliba Poplăcean (10).jpg";
import colibaPoplacean3 from "@/images/Coliba Poplăcean (3).jpg";
import colibaTaroi5 from "@/images/Coliba Tăroi (5).jpg";

export type GallerySlide = {
  src: StaticImageData;
  alt: string;
};

export const gallerySlides: GallerySlide[] = [
  { src: electricSpark, alt: "Concept — a lightbulb bursting with multicoloured sparks" },
  { src: omotesando08, alt: "Product — sculptural bench and stone plinth" },
  { src: kitzbuhel, alt: "Architecture — fluted timber wall and concrete hall" },
  { src: zestrea, alt: "Frescă magazin Zestrea — artă veche și podoabe" },
  { src: primariaSibiu, alt: "Primăria Municipiului Sibiu" },
  { src: colibaPoplacean10, alt: "Coliba Poplăcean" },
  { src: colibaPoplacean3, alt: "Coliba Poplăcean" },
  { src: colibaTaroi5, alt: "Coliba Tăroi" },
  { src: casedeschise, alt: "Case Deschise" },
  { src: casedeschiseWebp, alt: "Case Deschise" },
];
