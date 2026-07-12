import Image from "next/image";
import { siteConfig } from "@/lib/site.config";

export function Testimonials() {
  return (
    <section className="section-pad bg-surface-muted">
      <div className="container-site">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow">{siteConfig.testimonials.eyebrow}</p>
          <h2 className="heading heading-lg">{siteConfig.testimonials.title}</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {siteConfig.testimonials.items.map((item) => (
            <article key={item.name} className="bg-white p-7 shadow-sm">
              <p className="mb-6 text-sm leading-relaxed text-body">
                “{item.text}”
              </p>
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                    quality={65}
                  />
                </div>
                <div>
                  <p className="font-bold text-ink">{item.name}</p>
                  <p className="text-xs uppercase tracking-[0.08em] text-brand">
                    {item.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
