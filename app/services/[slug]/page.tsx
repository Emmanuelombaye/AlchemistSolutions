import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
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
  return { title: service?.title ?? "Service" };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero title={service.title} breadcrumb={`Services / ${service.title}`} />
      <section className="section-pad">
        <div className="container-site grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="relative mb-8 aspect-[16/10] overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 60vw"
              />
            </div>
            <h2 className="heading heading-md mb-4">{service.title}</h2>
            <p className="mb-4 leading-relaxed">{service.excerpt}</p>
            <p className="leading-relaxed">{service.body}</p>
          </div>
          <aside className="h-fit border border-line bg-surface-muted p-6">
            <h3 className="heading mb-4 text-lg">Other Services</h3>
            <ul className="space-y-3">
              {siteConfig.services.items
                .filter((s) => s.slug !== service.slug)
                .map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-ink no-underline hover:text-brand"
                    >
                      <ArrowUpRight size={14} className="text-brand" />
                      {s.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </aside>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
