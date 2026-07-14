"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/site.config";
import { useI18n } from "@/lib/i18n/provider";
import { SplitWords } from "@/components/motion/Reveal";

export function Hero() {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const slides = siteConfig.hero.slides.map((slide, i) => ({
    ...slide,
    title: t.hero.slides[i]?.title ?? slide.title,
    text: t.hero.slides[i]?.text ?? slide.text,
    cta: t.hero.slides[i]?.cta ?? slide.cta,
  }));
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, [reduce, slides.length]);

  const slide = slides[index];

  return (
    <section className="relative min-h-[min(88svh,720px)] overflow-hidden bg-ink text-white md:min-h-[min(88vh,900px)]">
      {slides.map((s, i) => (
        <motion.div
          key={s.image}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: i === index ? 1 : 0, scale: i === index ? 1 : 1.06 }}
          transition={{ duration: reduce ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
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
        </motion.div>
      ))}

      <div className="container-site relative z-10 flex min-h-[min(88svh,720px)] items-center pb-20 pt-14 md:min-h-[min(88vh,900px)] md:pb-24 md:pt-20">
        <div className="max-w-2xl">
          <motion.p
            key={`welcome-${index}`}
            className="eyebrow text-brand"
            initial={reduce ? false : { opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.welcome}
          </motion.p>

          <AnimatePresence mode="wait">
            <motion.h1
              key={slide.title}
              className="mb-3 text-[clamp(1.75rem,7.2vw,3.4rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white md:mb-5"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduce ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.45 }}
            >
              <SplitWords text={slide.title} delay={0.08} />
            </motion.h1>
          </AnimatePresence>

          <motion.p
            key={slide.text}
            className="mb-6 max-w-xl text-[0.92rem] leading-relaxed text-white/75 md:mb-8 md:text-lg"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {slide.text}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: reduce ? 0 : 0.55 }}
          >
            <Link href={slide.ctaHref} className="btn min-h-12 px-5">
              {slide.cta}
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-5 left-0 right-0 z-10 flex items-end justify-between gap-4 px-4 sm:px-6 md:bottom-8 md:left-auto md:right-6 md:justify-end md:px-0">
        <div className="flex gap-2.5 md:absolute md:bottom-0 md:right-full md:mr-8 md:flex-col md:gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full border border-white/60 ${
                i === index ? "border-brand bg-brand" : "bg-transparent"
              }`}
            />
          ))}
        </div>

        <motion.div
          className="bg-white px-3.5 py-2.5 text-ink shadow-xl sm:px-5 sm:py-4"
          initial={reduce ? false : { opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xl font-bold leading-none text-brand sm:text-3xl">
            {siteConfig.about.years}
          </p>
          <p className="mt-1 text-[0.6rem] font-bold uppercase tracking-[0.1em] sm:text-xs">
            {t.about.yearsLabel}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
