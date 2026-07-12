"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site.config";

export function Hero() {
  const slides = siteConfig.hero.slides;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5500);
    return () => window.clearInterval(id);
  }, [slides.length]);

  const slide = slides[index];

  return (
    <section className="relative min-h-[min(92svh,760px)] overflow-hidden bg-ink text-white md:min-h-[min(88vh,900px)]">
      {slides.map((s, i) => (
        <div
          key={s.image}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        >
          <Image
            src={s.image}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            quality={70}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/20" />
        </div>
      ))}

      <div className="container-site relative z-10 flex min-h-[min(92svh,760px)] items-center pb-28 pt-16 md:min-h-[min(88vh,900px)] md:pb-20 md:pt-20">
        <div className="max-w-2xl">
          <p className="eyebrow text-brand">Welcome to Alchemist Solutions</p>
          <h1 className="mb-4 text-[clamp(1.85rem,7vw,3.4rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white md:mb-5">
            {slide.title}
          </h1>
          <p className="mb-7 max-w-xl text-[0.95rem] leading-relaxed text-white/75 md:mb-8 md:text-lg">
            {slide.text}
          </p>
          <Link href={slide.ctaHref} className="btn min-h-12 px-5">
            {slide.cta}
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-3 md:bottom-8 md:left-auto md:right-6 md:translate-x-0 md:flex-col md:gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full border border-white/60 md:h-2.5 md:w-2.5 ${
              i === index ? "border-brand bg-brand" : "bg-transparent"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 right-3 z-10 bg-white px-4 py-3 text-ink shadow-xl sm:right-[10%] sm:px-6 sm:py-5">
        <p className="text-2xl font-bold text-brand sm:text-3xl">
          {siteConfig.about.years}
        </p>
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.12em] sm:text-xs">
          {siteConfig.about.yearsLabel}
        </p>
      </div>
    </section>
  );
}
