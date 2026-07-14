"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site.config";
import { useI18n } from "@/lib/i18n/provider";
import { Reveal } from "@/components/motion/Reveal";

export function CtaBanner() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-ink py-14 text-white md:py-20">
      <Image
        src="/images/cta-bg.webp"
        alt=""
        fill
        sizes="100vw"
        quality={60}
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand/55 via-ink/70 to-ink/85" />
      <div className="container-site relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <Reveal from="left" className="max-w-2xl">
          <h2 className="mb-3 text-[clamp(1.45rem,5vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.02em] text-white">
            {t.cta.title}
          </h2>
          <p className="text-sm text-white/70 md:text-base">{t.cta.text}</p>
        </Reveal>
        <Reveal from="right">
          <Link
            href={siteConfig.cta.href}
            className="btn min-h-12 w-full justify-center sm:w-auto"
          >
            {t.cta.button}
            <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
