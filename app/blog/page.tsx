import { Composition } from "@/app/components/composition/composition";
import { SwiperGallery } from "@/app/components/swiper-gallery/swiper-gallery";
import { Panel } from "@/app/components/panel/panel";
import { panels } from "@/app/data/content";

export default function BlogPage() {
  return <Composition left={<SwiperGallery />} right={<Panel content={panels.blog} />} />;
}
