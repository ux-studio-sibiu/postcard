"use client";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "./swiper-gallery.scss";

import Image from "next/image";
import { useRef, useState, type MouseEvent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { defaultGallery, type GallerySlide } from "@/app/data/gallery";

export function SwiperGallery({ slides = defaultGallery }: { slides?: GallerySlide[] }) {
  // One-shot colour glitch, fired on click. The class is cleared when the
  // animation ends so a subsequent click replays it.
  const [glitching, setGlitching] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  const triggerGlitch = () => setGlitching(true);

  // Side click zones step the carousel. stopPropagation keeps them from also
  // firing the centre click-to-glitch.
  const goPrev = (e: MouseEvent) => {
    e.stopPropagation();
    swiperRef.current?.slidePrev();
  };
  const goNext = (e: MouseEvent) => {
    e.stopPropagation();
    swiperRef.current?.slideNext();
  };

  return (
    <div className="nsc-swiper-gallery">
      {/* Click anywhere on the stage fires the glitch; the edge nav zones
          stopPropagation so they only navigate. */}
      <div
        className={`gallery-stage${glitching ? " is-glitching" : ""}`}
        onClick={triggerGlitch}
        onAnimationEnd={() => setGlitching(false)}
      >
        <Swiper
          key={slides[0]?.src.src}
          className="gallery-swiper"
          modules={[EffectFade, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop
          slidesPerView={1}
          onSwiper={(s) => (swiperRef.current = s)}
          pagination={{ el: ".gallery-pagination", clickable: true }}
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <Image
                src={slide.src}
                alt={slide.alt}
                className="object-cover"
                fill
                priority={idx === 0}
                sizes="(max-width: 768px) 100vw, 45vw"
                placeholder="blur"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 15%-wide click zones on each edge that step the carousel, with
            left/right arrow cursors. */}
        <button
          type="button"
          className="gallery-nav prev"
          aria-label="Previous image"
          onClick={goPrev}
        />
        <button
          type="button"
          className="gallery-nav next"
          aria-label="Next image"
          onClick={goNext}
        />
      </div>

      <div className="gallery-pagination" />
    </div>
  );
}
