"use client";

import { Phone } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/lib/site.config";
import { useI18n } from "@/lib/i18n/provider";

export function MobileCallBar() {
  const { t } = useI18n();
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-3 pt-2.5 backdrop-blur-md pb-[max(0.65rem,env(safe-area-inset-bottom))] lg:hidden">
      <div className="container-site flex gap-2.5 px-0">
        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 border border-ink/12 bg-white px-3 text-[0.78rem] font-bold text-ink no-underline"
        >
          <Phone size={15} className="shrink-0 text-brand" />
          <span className="truncate">{siteConfig.contact.phoneDisplay}</span>
        </a>
        <a
          href={getWhatsAppUrl()}
          className="inline-flex min-h-11 flex-1 items-center justify-center bg-brand px-3 text-[0.72rem] font-bold uppercase tracking-[0.06em] text-white no-underline"
        >
          {t.common.whatsApp}
        </a>
      </div>
    </div>
  );
}
