import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, Clock3, Phone } from "lucide-react";
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
  const gallery = service.gallery ?? [];
  const idealFor = service.idealFor ?? [];
  const materials = service.materials ?? [];
  const faqs = service.faqs ?? [];

  const relatedProjects = siteConfig.projects.items
    .filter((p) => {
      const hay = `${p.title} ${p.category} ${p.excerpt} ${p.body}`.toLowerCase();
      const keys = service.title.toLowerCase().split(/[^a-z]+/).filter(Boolean);
      return keys.some((k) => k.length > 3 && hay.includes(k));
    })
    .slice(0, 2);

  return (
    <>
      <PageHero
        title={service.title}
        breadcrumb={`Services / ${service.title}`}
      />

      <section className="section-pad">
        <div className="container-site grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <div>
            <div className="relative mb-6 aspect-[16/11] overflow-hidden sm:mb-8 sm:aspect-[16/10]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                fetchPriority="high"
                decoding="async"
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 58vw"
              />
            </div>

            <p className="eyebrow mb-2">Service detail</p>
            <h2 className="heading heading-md mb-4 text-ink">{service.title}</h2>
            <p className="mb-4 text-[0.95rem] leading-relaxed sm:text-base">
              {service.excerpt}
            </p>
            <p className="mb-6 text-[0.95rem] leading-relaxed sm:text-base">
              {service.body}
            </p>

            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              {service.duration ? (
                <p className="inline-flex min-h-11 items-center gap-2 border border-line bg-surface-muted px-4 text-sm font-semibold text-ink">
                  <Clock3 size={16} className="text-brand" />
                  Typical timeline: {service.duration}
                </p>
              ) : null}
            </div>

            {idealFor.length > 0 ? (
              <div className="mb-10">
                <h3 className="heading mb-3 text-lg text-ink">Ideal for</h3>
                <div className="flex flex-wrap gap-2">
                  {idealFor.map((item) => (
                    <span
                      key={item}
                      className="border border-line bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] text-ink-soft"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            {gallery.length > 0 ? (
              <div className="mb-10">
                <div className="mb-4">
                  <p className="eyebrow mb-1">Gallery</p>
                  <h3 className="heading text-lg text-ink sm:text-xl">
                    See the finish quality
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:gap-4">
                  {gallery.map((shot, index) => (
                    <figure
                      key={`${shot.src}-${index}`}
                      className={`relative overflow-hidden bg-surface-muted ${
                        index === 0
                          ? "col-span-2 aspect-[16/10] sm:aspect-[21/9]"
                          : "aspect-[4/3]"
                      }`}
                    >
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        fill
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                        className="object-cover"
                        sizes={
                          index === 0
                            ? "(max-width:1024px) 100vw, 58vw"
                            : "(max-width:640px) 50vw, 29vw"
                        }
                      />
                      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 hidden bg-gradient-to-t from-ink/70 to-transparent px-3 pb-2.5 pt-8 text-[0.7rem] font-medium text-white sm:block sm:text-xs">
                        {shot.alt}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            ) : null}

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

            {materials.length > 0 ? (
              <div className="mb-10">
                <h3 className="heading mb-4 text-lg text-ink">
                  Materials & systems
                </h3>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {materials.map((item) => (
                    <li
                      key={item}
                      className="border border-line bg-white px-4 py-3 text-sm font-medium text-ink-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {process.length > 0 ? (
              <div className="mb-10">
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

            {relatedProjects.length > 0 ? (
              <div className="mb-10">
                <h3 className="heading mb-4 text-lg text-ink">
                  Related projects
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {relatedProjects.map((project) => (
                    <Link
                      key={project.slug}
                      href={`/projects/${project.slug}`}
                      className="group overflow-hidden border border-line bg-white no-underline"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          loading="lazy"
                          decoding="async"
                          className="object-cover transition duration-500 group-hover:scale-105"
                          sizes="(max-width:640px) 100vw, 29vw"
                        />
                      </div>
                      <div className="p-4">
                        <p className="mb-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-brand">
                          {project.category}
                        </p>
                        <p className="text-sm font-bold text-ink">
                          {project.title}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}

            {faqs.length > 0 ? (
              <div>
                <h3 className="heading mb-5 text-lg text-ink">
                  Common questions
                </h3>
                <div className="space-y-3">
                  {faqs.map((faq) => (
                    <details
                      key={faq.q}
                      className="group border border-line bg-white open:bg-surface-muted"
                    >
                      <summary className="cursor-pointer list-none px-4 py-4 text-sm font-bold text-ink marker:content-none sm:px-5">
                        <span className="flex items-start justify-between gap-3">
                          {faq.q}
                          <ArrowUpRight
                            size={16}
                            className="mt-0.5 shrink-0 text-brand transition group-open:rotate-90"
                          />
                        </span>
                      </summary>
                      <p className="border-t border-line px-4 py-4 text-sm leading-relaxed text-body sm:px-5">
                        {faq.a}
                      </p>
                    </details>
                  ))}
                </div>
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
                        className="flex min-h-11 items-center gap-3 border-b border-line py-3 no-underline last:border-0 hover:text-brand"
                      >
                        <span className="relative h-12 w-12 shrink-0 overflow-hidden bg-surface-muted">
                          <Image
                            src={s.image}
                            alt=""
                            fill
                            loading="lazy"
                            decoding="async"
                            className="object-cover"
                            sizes="48px"
                          />
                        </span>
                        <span className="text-sm font-semibold text-ink">
                          {s.title}
                        </span>
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
