import { PageRail } from "@/components/layout";
import { Hero, SmallTeam, Welcome } from "@/views/home";

export default function HomePage() {
  return (
    <>
      <PageRail label="Home" />
      <Hero />
      <Welcome />
      <SmallTeam />
    </>
  );
}
