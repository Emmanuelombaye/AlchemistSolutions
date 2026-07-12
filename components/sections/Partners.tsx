import { siteConfig } from "@/lib/site.config";

export function Partners() {
  return (
    <section className="border-y border-line bg-surface-muted py-12">
      <div className="container-site">
        <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.14em] text-body">
          Our trusted partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {siteConfig.partners.map((name) => (
            <span
              key={name}
              className="text-lg font-bold tracking-tight text-ink/35"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
