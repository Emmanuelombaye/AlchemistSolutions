"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/site.config";
import { useI18n } from "@/lib/i18n/provider";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export function Testimonials() {
  const { t } = useI18n();
  return (
    <section className="section-pad bg-surface-muted">
      <div className="container-site">
        <Reveal from="up" className="mb-10 max-w-2xl">
          <p className="eyebrow">{t.testimonials.eyebrow}</p>
          <h2 className="heading heading-lg">{t.testimonials.title}</h2>
        </Reveal>
        <Stagger className="grid gap-6 md:grid-cols-3" stagger={0.15}>
          {t.testimonials.items.map((item, index) => (
            <StaggerItem
              key={item.name}
              from={index === 1 ? "down" : index === 0 ? "left" : "right"}
            >
              <article className="bg-white p-7 shadow-sm">
                <p className="mb-6 text-sm leading-relaxed text-body">
                  “{item.text}”
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={siteConfig.testimonials.items[index]?.image ?? "/images/team-1.webp"}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                      quality={65}
                    />
                  </div>
                  <div>
                    <p className="font-bold text-ink">{item.name}</p>
                    <p className="text-xs uppercase tracking-[0.08em] text-brand">
                      {item.role}
                    </p>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
