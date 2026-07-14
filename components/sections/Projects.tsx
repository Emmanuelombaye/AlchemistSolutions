import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site.config";

export function Projects({ limit }: { limit?: number }) {
  const items = limit
    ? siteConfig.projects.items.slice(0, limit)
    : siteConfig.projects.items;

  return (
    <section className="section-pad bg-surface">
      <div className="container-site">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">{siteConfig.projects.eyebrow}</p>
            <h2 className="heading heading-lg">{siteConfig.projects.title}</h2>
          </div>
          <Link href="/projects" className="btn w-fit">
            All Projects
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative block aspect-[4/3] overflow-hidden no-underline"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                quality={70}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
                <p className="mb-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-brand sm:text-[0.7rem]">
                  {project.category}
                </p>
                <h3 className="text-base font-bold sm:text-lg">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
