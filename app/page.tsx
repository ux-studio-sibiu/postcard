import { Composition } from "@/app/components/composition/composition";
import { SwiperGallery } from "@/app/components/swiper-gallery/swiper-gallery";
import { PortfolioPanel } from "@/app/components/portfolio-panel/portfolio-panel";

// "About Me" — the home view from the reference.
export default function Home() {
  return <Composition left={<SwiperGallery />} right={<PortfolioPanel />} />;
}
