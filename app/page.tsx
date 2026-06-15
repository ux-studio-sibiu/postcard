import { Composition } from "@/app/components/composition/composition";
import { SwiperGallery } from "@/app/components/swiper-gallery/swiper-gallery";
import { AboutPanel } from "@/app/components/about-panel/about-panel";


export default function Home() {
  return <Composition left={<SwiperGallery />} right={<AboutPanel />} />;
}
