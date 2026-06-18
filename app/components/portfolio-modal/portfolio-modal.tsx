"use client";

import { useEffect } from "react";
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
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="portfolio-modal-overlay" onClick={onClose}>
      <div className="portfolio-modal" onClick={(e) => e.stopPropagation()}>
        <div className="portfolio-modal-header">
          <button className="portfolio-modal-close" onClick={onClose} aria-label="Close">
            <span aria-hidden="true">&larr;</span> back
          </button>
          {href && (
            <a className="portfolio-modal-link portfolio-modal-link-top" href={href} target="_blank" rel="noopener noreferrer">
              view live <span aria-hidden="true">&rarr;</span>
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
              view live <span aria-hidden="true">&rarr;</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
