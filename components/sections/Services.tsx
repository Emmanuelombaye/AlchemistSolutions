import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site.config";

export function Services({ limit }: { limit?: number }) {
  const items = limit
    ? siteConfig.services.items.slice(0, limit)
    : siteConfig.services.items;

  return (
    <section className="section-pad bg-surface-muted">
      <div className="container-site">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow">{siteConfig.services.eyebrow}</p>
          <h2 className="heading heading-lg">{siteConfig.services.title}</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service) => (
            <article
              key={service.slug}
              className="group overflow-hidden bg-white shadow-[0_10px_30px_rgba(21,22,28,0.06)] transition hover:-translate-y-1"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  quality={70}
                />
              </div>
              <div className="p-6">
                <h3 className="heading heading-md mb-2">{service.title}</h3>
                <p className="mb-5 text-sm leading-relaxed">{service.excerpt}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.1em] text-brand no-underline"
                >
                  Read More <ArrowUpRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
