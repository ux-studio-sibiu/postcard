"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import "./background-effect.scss";

// Predefined pool, drawn from images already in the project. Add/remove freely —
// the effect just cycles through whatever is here.
import zestrea from "@/images/case-deschise/5. Frescă magazin Zestrea - Artă veche și podoabe compressed.jpg";
import scara from "@/images/case-deschise/primarie-sibiu-scara.jpg";
import colibaFire from "@/images/case-deschise/casedeschise-fire-2.jpg";
import colibaTaroi from "@/images/case-deschise/Coliba Tăroi (5).jpg";
import slow from "@/images/slow-days-outside/slow.jpg";
import slowDays1 from "@/images/slow-days-outside/slowdays.jpg";
import arhitectural2 from "@/images/arhitectural-prototype/p2.jpg";
import arhitectural4 from "@/images/arhitectural-prototype/p4.jpg";
import balloons from "@/images/clasa-zero/balloons-2.jpg";
import cars1 from "@/images/clasa-zero/cars-1.jpg";
import flowers from "@/images/clasa-zero/flowers-5.jpg";

const IMAGE_POOL: StaticImageData[] = [
  zestrea, scara, colibaFire, colibaTaroi, slow, slowDays1,
  arhitectural2, arhitectural4, balloons, cars1, flowers,
];

// Minimum pointer travel (px) between two placed images.
const MIN_DISTANCE = 200;
// Random width range (px) per stamp; height follows the 270x330 aspect ratio.
const MIN_WIDTH = 210;
const MAX_WIDTH = 330;

type Stamp = { id: number; src: StaticImageData; x: number; y: number; w: number };

// A background layer that drops a project image at the cursor each time the
// pointer has travelled more than MIN_DISTANCE. Sits behind .page-container, so
// hovering the (partially overlapping) container never reaches this layer and
// nothing is stamped there — the effect only fires over the exposed margins.
export function BackgroundEffect() {
  const [stamps, setStamps] = useState<Stamp[]>([]);
  // Desktop-only: skip rendering, listeners and preloading on smaller screens.
  const [isDesktop, setIsDesktop] = useState(false);
  const last = useRef<{ x: number; y: number } | null>(null);
  const nextId = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Warm the browser cache for the whole pool once the page is idle, so the
  // first stamp of each image paints instantly instead of fetching on hover.
  useEffect(() => {
    if (!isDesktop) return;
    const preload = () => IMAGE_POOL.forEach((img) => { new window.Image().src = img.src; });
    const ric = window.requestIdleCallback;
    if (ric) {
      const id = ric(preload);
      return () => window.cancelIdleCallback?.(id);
    }
    const id = window.setTimeout(preload, 400);
    return () => window.clearTimeout(id);
  }, [isDesktop]);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (last.current && Math.hypot(x - last.current.x, y - last.current.y) < MIN_DISTANCE) return;
    last.current = { x, y };

    const src = IMAGE_POOL[Math.floor(Math.random() * IMAGE_POOL.length)];
    const w = Math.round(MIN_WIDTH + Math.random() * (MAX_WIDTH - MIN_WIDTH));
    setStamps((prev) => [...prev, { id: nextId.current++, src, x, y, w }]);
  };

  if (!isDesktop) return null;

  return (
    <div
      className="background-effect"
      aria-hidden="true"
      onMouseMove={handleMove}
      onMouseLeave={() => (last.current = null)}
    >
      {stamps.map((s) => (
        <span key={s.id} className="effect-stamp" style={{ left: s.x, top: s.y, width: s.w }}>
          <Image src={s.src} alt="" width={270} height={330} className="effect-image" />
        </span>
      ))}
    </div>
  );
}
