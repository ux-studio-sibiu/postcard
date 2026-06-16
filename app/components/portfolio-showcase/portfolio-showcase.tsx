"use client";

import { useState } from "react";
import { Composition } from "@/app/components/composition/composition";
import { SwiperGallery } from "@/app/components/swiper-gallery/swiper-gallery";
import { Panel } from "@/app/components/panel/panel";
import { defaultGallery, type GallerySlide } from "@/app/data/gallery";

// Owns which gallery the left box shows. The Accordion (inside Panel) notifies
// us when a project opens; with nothing open we fall back to the default
// (loose /images root) gallery. Composition stays pure layout.
export function PortfolioShowcase({ heading, blurb, children }: { heading: string; blurb: string; children: React.ReactNode }) {
  const [slides, setSlides] = useState<GallerySlide[]>(defaultGallery);

  return (
    <Composition
      left={<SwiperGallery slides={slides} />}
      right={<Panel heading={heading} blurb={blurb} onActiveChange={(g) => setSlides(g ?? defaultGallery)}>{children}</Panel>}
    />
  );
}
