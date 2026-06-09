"use client";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "./swiper-gallery.scss";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper/modules";
import { gallerySlides } from "@/app/data/gallery";

// Hover intent: only fire the glitch once the pointer has lingered this long,
// so a quick pass-through doesn't trigger it.
const HOVER_INTENT_MS = 400;

export function SwiperGallery() {
  // One-shot colour glitch. The class is cleared when the animation ends so
  // re-entering replays it.
  const [glitching, setGlitching] = useState(false);
  const intentTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearIntent = () => {
    if (intentTimer.current) {
      clearTimeout(intentTimer.current);
      intentTimer.current = null;
    }
  };

  // Cancel a pending timer if the component unmounts mid-wait.
  useEffect(() => clearIntent, []);

  const handleEnter = () => {
    clearIntent();
    intentTimer.current = setTimeout(() => setGlitching(true), HOVER_INTENT_MS);
  };

  // Leaving during the intent window cancels the trigger; if the glitch has
  // already started it's left to finish.
  const handleLeave = () => clearIntent();

  return (
    <div className="nsc-swiper-gallery">
      {/* Hover logic lives on the image stage only, so the pagination dots
          (a sibling, below) never trigger the glitch. */}
      <div
        className={`gallery-stage${glitching ? " is-glitching" : ""}`}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onAnimationEnd={() => setGlitching(false)}
      >
        <Swiper
          className="gallery-swiper"
          modules={[EffectFade, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop
          slidesPerView={1}
          pagination={{ el: ".gallery-pagination", clickable: true }}
        >
          {gallerySlides.map((slide, idx) => (
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
      </div>

      <div className="gallery-pagination" />
    </div>
  );
}
