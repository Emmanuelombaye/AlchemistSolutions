import { siteConfig } from "@/lib/site.config";

export function Counters() {
  return (
    <section className="bg-brand py-14 text-white">
      <div className="container-site grid grid-cols-2 gap-8 md:grid-cols-4">
        {siteConfig.counters.map((item) => (
          <div key={item.label} className="text-center md:text-left">
            <p className="text-4xl font-bold tracking-tight md:text-5xl">
              {item.value}
            </p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-white/80">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
