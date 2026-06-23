"use client";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "./swiper-gallery.scss";

import Image from "next/image";
import { useEffect, useId, useRef, useState, type MouseEvent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { defaultGallery, type GallerySlide } from "@/app/data/gallery";

export function SwiperGallery({ slides = defaultGallery }: { slides?: GallerySlide[] }) {
  // One-shot colour animation, fired on click. The class is cleared when the
  // animation ends so a subsequent click replays it. Each slide picks its own
  // animation (glitch / reveal) via its anim- class; only the active slide
  // animates, so a single animationEnd reliably clears the flag.
  const [animating, setAnimating] = useState(false);
  // Active slide, used to show its alt text as a caption above the frame.
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  // Unique pagination target — several galleries can live on one page (e.g. the
  // main gallery plus per-project ones in the portfolio accordion), so a shared
  // ".gallery-pagination" selector would cross-wire them.
  const paginationId = useId();
  // Slide (translate) transition on mobile, crossfade on desktop.
  const [isMobile, setIsMobile] = useState(false);

  const triggerAnim = () => setAnimating(true);

  // The slide set changes when switching projects (Swiper remounts to slide 0);
  // reset the caption to match.
  useEffect(() => setActiveIndex(0), [slides]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

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
      <p className="gallery-caption">{slides[activeIndex]?.caption ?? slides[activeIndex]?.alt}</p>

      {/* Click anywhere on the stage fires the glitch; the edge nav zones
          stopPropagation so they only navigate. */}
      <div
        className={`gallery-stage${animating ? " is-animating" : ""}`}
        onClick={triggerAnim}
        onAnimationEnd={() => setAnimating(false)}
      >
        <Swiper
          key={`${isMobile ? "m" : "d"}-${slides[0]?.src.src}`}
          className="gallery-swiper"
          modules={[EffectFade, Pagination]}
          effect={isMobile ? "slide" : "fade"}
          fadeEffect={{ crossFade: true }}
          loop
          slidesPerView={1}
          onSwiper={(s) => (swiperRef.current = s)}
          onSlideChange={(s) => {
            setAnimating(false);
            setActiveIndex(s.realIndex);
          }}
          pagination={{ el: `[data-pagination="${paginationId}"]`, clickable: true }}
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx} className={slide.cssClass ?? "anim-glitch"}>
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

      <div className="gallery-pagination" data-pagination={paginationId} />
    </div>
  );
}
