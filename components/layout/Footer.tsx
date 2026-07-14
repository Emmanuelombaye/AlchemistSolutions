"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/lib/site.config";
import { Logo } from "@/components/brand/Logo";
import { useI18n } from "@/lib/i18n/provider";
import { Reveal } from "@/components/motion/Reveal";

export function Footer() {
  const { t } = useI18n();
  const links = [
    { label: t.nav.about, href: "/about" },
    { label: t.nav.services, href: "/services" },
    { label: t.nav.projects, href: "/projects" },
    { label: t.nav.news, href: "/blog" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <footer className="bg-surface-dark pb-[4.75rem] text-white lg:pb-0">
      <div className="container-site grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <Reveal from="left" className="lg:col-span-2">
          <Link
            href="/"
            className="mb-5 inline-flex bg-white p-1.5 no-underline"
            aria-label={siteConfig.name}
          >
            <Logo size="lg" />
          </Link>
          <p className="max-w-md text-sm leading-relaxed text-white/65">
            {t.footer.about}
          </p>
        </Reveal>

        <Reveal from="up" delay={0.1}>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.1em]">
            {t.footer.quickLinks}
          </h3>
          <ul className="space-y-2.5">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/65 no-underline transition hover:text-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal from="right" delay={0.15}>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.1em]">
            {t.footer.contactUs}
          </h3>
          <ul className="space-y-3 text-sm text-white/65">
            <li className="flex gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand" />
              {siteConfig.location.address}
            </li>
            <li>
              <a
                href={getWhatsAppUrl()}
                className="inline-flex items-center gap-2 text-white/65 no-underline hover:text-brand"
              >
                <Phone size={16} className="text-brand" />
                {siteConfig.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-2 text-white/65 no-underline hover:text-brand"
              >
                <Mail size={16} className="text-brand" />
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-5 text-xs text-white/45 sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </span>
          <span>{t.footer.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
