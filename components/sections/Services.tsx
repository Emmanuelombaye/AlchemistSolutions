import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { siteConfig } from "@/lib/site.config";

export function Services({ limit }: { limit?: number }) {
  const items = limit
    ? siteConfig.services.items.slice(0, limit)
    : siteConfig.services.items;
  const isFullPage = !limit;

  return (
    <section className="section-pad bg-surface-muted">
      <div className="container-site">
        <div className={`max-w-2xl ${isFullPage ? "mb-8 md:mb-12" : "mb-10"}`}>
          <p className="eyebrow">{siteConfig.services.eyebrow}</p>
          <h2 className="heading heading-lg">{siteConfig.services.title}</h2>
          {isFullPage && siteConfig.services.intro ? (
            <p className="mt-4 text-[0.95rem] leading-relaxed md:text-base">
              {siteConfig.services.intro}
            </p>
          ) : null}
        </div>

        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service, index) => (
            <article
              key={service.slug}
              className="group flex h-full flex-col overflow-hidden bg-white shadow-[0_10px_30px_rgba(21,22,28,0.06)] transition duration-300 hover:-translate-y-1"
            >
              <Link
                href={`/services/${service.slug}`}
                className="relative block aspect-[16/11] overflow-hidden no-underline sm:aspect-[16/10]"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority={index < 2}
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
                <span className="absolute left-3 top-3 bg-brand px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </Link>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="heading mb-2 text-[1.2rem] leading-snug sm:text-[1.35rem]">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-body">
                  {service.excerpt}
                </p>

                {service.highlights?.length ? (
                  <ul className="mb-5 space-y-2">
                    {service.highlights.slice(0, 3).map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[0.8rem] leading-snug text-ink-soft"
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
                  Explore service <ArrowUpRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
