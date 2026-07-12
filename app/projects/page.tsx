import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Projects } from "@/components/sections/Projects";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero title="Our Latest Projects" breadcrumb="Projects" />
      <Projects />
      <CtaBanner />
    </>
  );
}
