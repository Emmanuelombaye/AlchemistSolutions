import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Counters } from "@/components/sections/Counters";
import { Testimonials } from "@/components/sections/Testimonials";
import { Team } from "@/components/sections/Team";
import { Partners } from "@/components/sections/Partners";
import { News } from "@/components/sections/News";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Services limit={6} />
      <Projects limit={6} />
      <Counters />
      <Testimonials />
      <Team />
      <Partners />
      <News limit={3} />
      <CtaBanner />
    </>
  );
}
