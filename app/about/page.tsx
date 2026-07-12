import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Team } from "@/components/sections/Team";
import { siteConfig } from "@/lib/site.config";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  const { about } = siteConfig;
  return (
    <>
      <PageHero title="About Our Company" breadcrumb="About" />
      <section className="section-pad">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={about.image}
              alt="Alchemist tiling team"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="eyebrow">{about.eyebrow}</p>
            <h2 className="heading heading-lg mb-4">{about.title}</h2>
            <p className="mb-4 leading-relaxed">{about.text}</p>
            <p className="mb-6 leading-relaxed">
              Led by construction engineer Felix Kajunior, our crews combine
              structural judgment with finish-quality craftsmanship — so every
              floor plane, wet-area detail, and threshold is built to perform.
            </p>
            <ul className="space-y-3">
              {about.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center bg-brand text-white">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Team />
      <CtaBanner />
    </>
  );
}
