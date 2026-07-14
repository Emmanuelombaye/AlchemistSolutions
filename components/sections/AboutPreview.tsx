"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site.config";
import { useI18n } from "@/lib/i18n/provider";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export function AboutPreview() {
  const { t } = useI18n();
  const { about } = siteConfig;

  return (
    <section className="section-pad bg-surface">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <Reveal from="left" className="relative grid grid-cols-2 gap-4 pb-8 md:pb-4">
          <div className="relative col-span-2 aspect-[16/10] overflow-hidden md:col-span-1 md:aspect-[3/4] md:mt-10">
            <Image
              src={about.image}
              alt="Tile installation craftsmanship"
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 40vw"
              quality={70}
            />
          </div>
          <div className="relative hidden aspect-[3/4] overflow-hidden md:block">
            <Image
              src={about.imageSecondary}
              alt="Finished flooring interior"
              fill
              className="object-cover"
              sizes="40vw"
              quality={70}
            />
          </div>
          <div className="absolute bottom-0 left-3 bg-brand px-4 py-3 text-white sm:left-4 sm:px-5 sm:py-4 md:left-auto md:right-8">
            <p className="text-2xl font-bold leading-none sm:text-3xl">
              {about.years}
            </p>
            <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.1em] sm:text-[0.7rem]">
              {t.about.yearsLabel}
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal from="right">
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2 className="heading heading-lg mb-4">{t.about.title}</h2>
          </Reveal>
          <Reveal from="up" delay={0.12}>
            <p className="mb-6 leading-relaxed">{t.about.text}</p>
          </Reveal>
          <Stagger className="mb-8 space-y-3" stagger={0.1}>
            {t.about.checklist.map((item) => (
              <StaggerItem key={item} from="left">
                <li className="flex list-none items-start gap-3 text-ink">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center bg-brand text-white">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium">{item}</span>
                </li>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal from="up" delay={0.2}>
            <Link href="/about" className="btn">
              {t.common.moreAbout}
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
