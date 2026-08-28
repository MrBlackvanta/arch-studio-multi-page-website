import PageHero from "@/components/page-hero";
import { aboutHero } from "@/data";

export default function Hero() {
  return <PageHero watermark="About" {...aboutHero} />;
}
