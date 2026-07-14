"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site.config";
import { useI18n } from "@/lib/i18n/provider";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export function News({ limit }: { limit?: number }) {
  const { t } = useI18n();
  const base = limit ? siteConfig.blog.items.slice(0, limit) : siteConfig.blog.items;
  const items = base.map((post) => {
    const copy = t.news.items.find((item) => item.slug === post.slug);
    return {
      ...post,
      title: copy?.title ?? post.title,
      excerpt: copy?.excerpt ?? post.excerpt,
    };
  });

  return (
    <section className="section-pad bg-surface">
      <div className="container-site">
        <Reveal from="up" className="mb-10 max-w-2xl">
          <p className="eyebrow">{t.news.eyebrow}</p>
          <h2 className="heading heading-lg">{t.news.title}</h2>
        </Reveal>
        <Stagger className="grid gap-6 md:grid-cols-3" stagger={0.14}>
          {items.map((post, index) => (
            <StaggerItem
              key={post.slug}
              from={index === 0 ? "left" : index === 1 ? "up" : "right"}
            >
              <article className="group overflow-hidden bg-white">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 33vw"
                    quality={70}
                  />
                </div>
                <div className="border border-t-0 border-line p-5 sm:p-6">
                  <p className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-brand">
                    {post.date}
                  </p>
                  <h3 className="heading mb-3 text-lg sm:text-xl">{post.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex min-h-11 items-center gap-1 text-xs font-bold uppercase tracking-[0.1em] text-ink no-underline hover:text-brand"
                  >
                    {t.common.readMore} <ArrowUpRight size={14} />
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
