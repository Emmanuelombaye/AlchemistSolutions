"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { siteConfig } from "@/lib/site.config";
import { useI18n } from "@/lib/i18n/provider";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export function Services({ limit }: { limit?: number }) {
  const { t } = useI18n();
  const translated = t.services.items;
  const base = limit
    ? siteConfig.services.items.slice(0, limit)
    : siteConfig.services.items;
  const items = base.map((service) => {
    const copy = translated.find((item) => item.slug === service.slug);
    return {
      ...service,
      title: copy?.title ?? service.title,
      excerpt: copy?.excerpt ?? service.excerpt,
    };
  });
  const isFullPage = !limit;
  const directions = ["up", "left", "right", "down"] as const;

  return (
    <section className="section-pad bg-surface-muted">
      <div className="container-site">
        <Reveal from="up" className={`max-w-2xl ${isFullPage ? "mb-8 md:mb-12" : "mb-10"}`}>
          <p className="eyebrow">{t.services.eyebrow}</p>
          <h2 className="heading heading-lg">{t.services.title}</h2>
          {isFullPage ? (
            <p className="mt-4 text-[0.95rem] leading-relaxed md:text-base">
              {t.services.intro}
            </p>
          ) : null}
        </Reveal>

        <Stagger
          className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.14}
        >
          {items.map((service, index) => (
            <StaggerItem
              key={service.slug}
              from={directions[index % directions.length]}
              className="h-full"
            >
              <article className="group flex h-full flex-col overflow-hidden bg-white shadow-[0_10px_30px_rgba(21,22,28,0.06)] transition duration-300 hover:-translate-y-1">
                <Link
                  href={`/services/${service.slug}`}
                  className="relative block aspect-[16/11] overflow-hidden no-underline sm:aspect-[16/10]"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    priority={index < 2}
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  />
                  <span className="absolute left-3 top-3 bg-brand px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <h3 className="heading mb-2 text-[1.15rem] leading-snug sm:text-[1.35rem]">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-[0.875rem] leading-relaxed text-body sm:text-sm">
                    {service.excerpt}
                  </p>

                  {service.highlights?.length ? (
                    <ul className="mb-4 space-y-2 sm:mb-5">
                      {service.highlights.slice(0, 3).map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-[0.78rem] leading-snug text-ink-soft sm:text-[0.8rem]"
                        >
                          <Check
                            size={14}
                            className="mt-0.5 shrink-0 text-brand"
                            strokeWidth={3}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-auto inline-flex min-h-11 items-center gap-1 self-start text-xs font-bold uppercase tracking-[0.1em] text-brand no-underline"
                  >
                    {t.common.exploreService} <ArrowUpRight size={14} />
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
