import { siteConfig } from "@/lib/site.config";

export function Counters() {
  return (
    <section className="bg-brand py-10 text-white sm:py-14">
      <div className="container-site grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
        {siteConfig.counters.map((item) => (
          <div key={item.label} className="text-center md:text-left">
            <p className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {item.value}
            </p>
            <p className="mt-2 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-white/80 sm:text-xs sm:tracking-[0.12em]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
