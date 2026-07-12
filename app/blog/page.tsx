import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { News } from "@/components/sections/News";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "News",
};

export default function BlogPage() {
  return (
    <>
      <PageHero title="Recent News & Insights" breadcrumb="News" />
      <News />
      <CtaBanner />
    </>
  );
}
