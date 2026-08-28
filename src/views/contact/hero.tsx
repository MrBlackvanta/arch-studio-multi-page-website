import PageHero from "@/components/page-hero";
import { contactHero } from "@/data";

export default function Hero() {
  return <PageHero watermark="Contact" {...contactHero} />;
}
