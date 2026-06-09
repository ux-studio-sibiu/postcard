import type { StaticImageData } from "next/image";

// Images are imported straight from the workspace /images folder.
// When this moves to Sanity these static imports become CDN URLs and the
// rest of the app keeps consuming the same { src, alt } shape.
import portrait from "@/images/01_109_v1b_QC-1500x1364.jpg";
import omotesando06 from "@/images/06-251104-jp-web-JS-Omotesando-new-edit.jpg";
import omotesando08 from "@/images/08-251104-jp-web-JS-Omotesando-new-edit.jpg";
import kitzbuhel from "@/images/251028-Kiotzbuhel-Updated-Edit-10.jpg";
import electricSpark from "@/images/electric-creativity-spark-stockcake.webp";
import bulbColor from "@/images/1.png";
import bulbMono from "@/images/2.png";

export type GallerySlide = {
  src: StaticImageData;
  alt: string;
};

export const gallerySlides: GallerySlide[] = [
  { src: portrait, alt: "Portrait — model in couture against a paper backdrop" },
  { src: electricSpark, alt: "Concept — a lightbulb bursting with multicoloured sparks" },
  { src: bulbColor, alt: "Concept — a lightbulb erupting in vivid paint splatter" },
  { src: bulbMono, alt: "Concept — a shattering lightbulb in stark monochrome" },
  { src: omotesando06, alt: "Architecture — minimalist retail interior in oak" },
  { src: kitzbuhel, alt: "Architecture — fluted timber wall and concrete hall" },
  { src: omotesando08, alt: "Product — sculptural bench and stone plinth" },
];
