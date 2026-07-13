import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { getService, siteConfig } from "@/lib/site.config";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return siteConfig.services.items.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  return {
    title: service?.title ?? "Service",
    description: service?.excerpt,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const highlights = service.highlights ?? [];
  const process = service.process ?? [];

  return (
    <>
      <PageHero
        title={service.title}
        breadcrumb={`Services / ${service.title}`}
      />
      <section className="section-pad">
        <div className="container-site grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div>
            <div className="relative mb-6 aspect-[16/11] overflow-hidden sm:mb-8 sm:aspect-[16/10]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 60vw"
              />
            </div>

            <p className="eyebrow mb-2">Service detail</p>
            <h2 className="heading heading-md mb-4 text-ink">{service.title}</h2>
            <p className="mb-4 text-[0.95rem] leading-relaxed sm:text-base">
              {service.excerpt}
            </p>
            <p className="mb-8 text-[0.95rem] leading-relaxed sm:text-base">
              {service.body}
            </p>

            {highlights.length > 0 ? (
              <div className="mb-10 border border-line bg-surface-muted p-5 sm:p-6">
                <h3 className="heading mb-4 text-lg text-ink">What you get</h3>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-snug text-ink-soft"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center bg-brand text-white">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {process.length > 0 ? (
              <div>
                <h3 className="heading mb-5 text-lg text-ink">How we deliver</h3>
                <ol className="space-y-4">
                  {process.map((step, i) => (
                    <li
                      key={step}
                      className="flex gap-4 border-b border-line pb-4 last:border-0 last:pb-0"
                    >
                      <span className="text-sm font-bold text-brand">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm leading-relaxed text-ink-soft">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            ) : null}
          </div>

          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <div className="border border-line bg-surface-muted p-5 sm:p-6">
              <h3 className="heading mb-2 text-lg text-ink">Book this service</h3>
              <p className="mb-5 text-sm leading-relaxed">
                Tell us about your space — we&apos;ll advise materials, falls,
                and a clear installation plan.
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/contact" className="btn min-h-12 w-full">
                  Get a site assessment
                  <ArrowUpRight size={16} />
                </Link>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 border border-ink/15 bg-white px-4 text-sm font-bold text-ink no-underline"
                >
                  <Phone size={16} className="text-brand" />
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="border border-line bg-white p-5 sm:p-6">
              <h3 className="heading mb-4 text-lg text-ink">Other services</h3>
              <ul className="space-y-1">
                {siteConfig.services.items
                  .filter((s) => s.slug !== service.slug)
                  .map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="flex min-h-11 items-center gap-2 border-b border-line py-3 text-sm font-semibold text-ink no-underline last:border-0 hover:text-brand"
                      >
                        <ArrowUpRight size={14} className="shrink-0 text-brand" />
                        {s.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
