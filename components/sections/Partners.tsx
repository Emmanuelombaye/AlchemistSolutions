"use client";

import { siteConfig } from "@/lib/site.config";
import { useI18n } from "@/lib/i18n/provider";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export function Partners() {
  const { t } = useI18n();
  return (
    <section className="border-y border-line bg-surface-muted py-12">
      <div className="container-site">
        <Reveal from="up">
          <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.14em] text-body">
            {t.partners}
          </p>
        </Reveal>
        <Stagger
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
          stagger={0.08}
        >
          {siteConfig.partners.map((name, index) => (
            <StaggerItem
              key={name}
              from={index % 2 === 0 ? "up" : "down"}
              className="text-lg font-bold tracking-tight text-ink/35"
            >
              {name}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
