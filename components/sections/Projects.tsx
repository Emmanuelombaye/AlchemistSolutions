"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site.config";
import { useI18n } from "@/lib/i18n/provider";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export function Projects({ limit }: { limit?: number }) {
  const { t } = useI18n();
  const base = limit
    ? siteConfig.projects.items.slice(0, limit)
    : siteConfig.projects.items;
  const items = base.map((project) => {
    const copy = t.projects.items.find((item) => item.slug === project.slug);
    return {
      ...project,
      title: copy?.title ?? project.title,
      category: copy?.category ?? project.category,
      excerpt: copy?.excerpt ?? project.excerpt,
    };
  });

  return (
    <section className="section-pad bg-surface">
      <div className="container-site">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <Reveal from="left" className="max-w-2xl">
            <p className="eyebrow">{t.projects.eyebrow}</p>
            <h2 className="heading heading-lg">{t.projects.title}</h2>
          </Reveal>
          <Reveal from="right">
            <Link href="/projects" className="btn w-fit">
              {t.common.allProjects}
            </Link>
          </Reveal>
        </div>
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.12}>
          {items.map((project, index) => (
            <StaggerItem
              key={project.slug}
              from={index % 2 === 0 ? "up" : "down"}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group relative block aspect-[4/3] overflow-hidden no-underline"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  quality={70}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
                  <p className="mb-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-brand sm:text-[0.7rem]">
                    {project.category}
                  </p>
                  <h3 className="text-base font-bold sm:text-lg">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
