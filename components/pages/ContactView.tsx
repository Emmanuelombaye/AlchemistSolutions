"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { siteConfig, getWhatsAppUrl } from "@/lib/site.config";
import { useI18n } from "@/lib/i18n/provider";
import { Reveal } from "@/components/motion/Reveal";

export function ContactView() {
  const { t } = useI18n();

  return (
    <>
      <PageHero title={t.nav.contact} breadcrumb={t.nav.contact} />
      <section className="section-pad">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <Reveal from="left">
            <p className="eyebrow">{t.contact.eyebrow}</p>
            <h2 className="heading heading-lg mb-4">{t.contact.title}</h2>
            <p className="mb-8 leading-relaxed">{t.contact.text}</p>
            <ul className="space-y-4 text-sm text-ink">
              <li className="flex gap-3">
                <MapPin className="text-brand" size={18} />
                {siteConfig.location.address}
              </li>
              <li>
                <a
                  href={getWhatsAppUrl()}
                  className="inline-flex items-center gap-3 text-ink no-underline hover:text-brand"
                >
                  <Phone className="text-brand" size={18} />
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-3 text-ink no-underline hover:text-brand"
                >
                  <Mail className="text-brand" size={18} />
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
            <a href={getWhatsAppUrl()} className="btn mt-8">
              {t.contact.chatWhatsApp}
            </a>
          </Reveal>

          <Reveal from="right">
            <form className="border border-line bg-surface-muted p-5 sm:p-6 md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  className="min-h-12 w-full border border-line bg-white px-4 py-3 text-base outline-none focus:border-brand"
                  placeholder={t.contact.name}
                  name="name"
                  autoComplete="name"
                />
                <input
                  className="min-h-12 w-full border border-line bg-white px-4 py-3 text-base outline-none focus:border-brand"
                  placeholder={t.contact.email}
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                />
              </div>
              <input
                className="mt-4 min-h-12 w-full border border-line bg-white px-4 py-3 text-base outline-none focus:border-brand"
                placeholder={t.contact.subject}
                name="subject"
              />
              <textarea
                className="mt-4 min-h-36 w-full border border-line bg-white px-4 py-3 text-base outline-none focus:border-brand"
                placeholder={t.contact.message}
                name="message"
              />
              <button type="button" className="btn mt-5 w-full sm:w-auto">
                {t.common.sendMessage}
              </button>
              <p className="mt-3 text-xs text-body">{t.common.formNote}</p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
