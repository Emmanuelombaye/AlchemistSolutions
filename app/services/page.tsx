import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Services } from "@/components/sections/Services";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Porcelain, marble, hardwood, luxury vinyl, wet areas, and floor restoration — engineer-led flooring services in Nairobi.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Our Flooring Services" breadcrumb="Services" />
      <Services />
      <CtaBanner />
    </>
  );
}
