"use client";

import { useEffect, useState } from "react";
import type { GallerySlide } from "@/app/data/gallery";
import { SwiperGallery } from "@/app/components/swiper-gallery/swiper-gallery";
import "./portfolio-modal.scss";

export function PortfolioModal({
  title,
  gallery,
  description,
  href,
  isOpen,
  onClose,
}: {
  title: string;
  gallery: GallerySlide[];
  description: string;
  href?: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
      document.body.style.overflow = "hidden";
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      document.body.style.overflow = "";
      setShouldRender(false);
      onClose();
    }, 400);
  };

  return (
    <div className="portfolio-modal-overlay" onClick={handleClose}>
      <div className={`portfolio-modal${isClosing ? " is-closing" : ""}`} onClick={(e) => e.stopPropagation()}>
        <div className="portfolio-modal-header">
          <button className="portfolio-modal-close" onClick={handleClose} aria-label="Close">
            <span className="arrow-faint" aria-hidden="true">&larr;</span> back
          </button>
          {href && (
            <a className="portfolio-modal-link portfolio-modal-link-top" href={href} target="_blank" rel="noopener noreferrer">
              view live <span className="arrow-faint" aria-hidden="true">&rarr;</span>
            </a>
          )}
        </div>
        <div className="portfolio-modal-gallery">
          <SwiperGallery slides={gallery} />
        </div>
        <div className="portfolio-modal-content">
          <h3 className="portfolio-modal-title">{title}</h3>
          <p>{description}</p>
          {href && (
            <a className="portfolio-modal-link" href={href} target="_blank" rel="noopener noreferrer">
              view live <span className="arrow-faint" aria-hidden="true">&rarr;</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
