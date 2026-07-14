"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/lib/site.config";
import { Logo } from "@/components/brand/Logo";
import { useI18n } from "@/lib/i18n/provider";
import { LanguageToggle } from "@/components/layout/LanguageToggle";

export function MobileNav() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [expanded, setExpanded] = useState<string | null>("/services");
  const panelId = useId();

  const nav = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    {
      label: t.nav.services,
      href: "/services",
      children: [
        { label: t.nav.allServices, href: "/services" },
        ...t.services.items.map((item) => ({
          label: item.title,
          href: `/services/${item.slug}`,
        })),
      ],
    },
    {
      label: t.nav.projects,
      href: "/projects",
      children: [
        { label: t.nav.allProjects, href: "/projects" },
        ...t.projects.items.slice(0, 2).map((item) => ({
          label: item.title,
          href: `/projects/${item.slug}`,
        })),
      ],
    },
    { label: t.nav.news, href: "/blog" },
    { label: t.nav.contact, href: "/contact" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!open) setExpanded("/services");
  }, [open]);

  const menu =
    open && mounted
      ? createPortal(
          <div className="fixed inset-0 z-[100] lg:hidden" role="presentation">
            <button
              type="button"
              aria-label={t.common.closeMenu}
              className="absolute inset-0 bg-ink/50"
              onClick={() => setOpen(false)}
            />

            <div
              id={panelId}
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              className="absolute inset-x-0 top-0 flex max-h-[min(100dvh,100%)] flex-col bg-white shadow-[0_16px_40px_rgba(21,22,28,0.18)]"
            >
              <div className="flex h-16 items-center justify-between border-b border-line px-4">
                <Logo size="sm" />
                <div className="flex items-center gap-2">
                  <LanguageToggle />
                  <button
                    type="button"
                    aria-label={t.common.closeMenu}
                    onClick={() => setOpen(false)}
                    className="grid h-10 w-10 place-items-center border border-ink/12 text-ink"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              <nav className="flex-1 overflow-y-auto overscroll-contain px-2 py-2">
                {nav.map((item) => {
                  const children = "children" in item ? item.children : null;
                  const isOpen = expanded === item.href;

                  if (!children) {
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block border-b border-line px-3 py-3.5 text-[0.95rem] font-semibold text-ink no-underline last:border-b-0"
                      >
                        {item.label}
                      </Link>
                    );
                  }

                  return (
                    <div
                      key={item.href}
                      className="border-b border-line last:border-b-0"
                    >
                      <div className="flex items-center">
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="flex-1 px-3 py-3.5 text-[0.95rem] font-semibold text-ink no-underline"
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          onClick={() =>
                            setExpanded((current) =>
                              current === item.href ? null : item.href,
                            )
                          }
                          className="grid h-11 w-11 place-items-center text-ink"
                        >
                          <ChevronDown
                            size={18}
                            className={`transition duration-200 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {isOpen ? (
                        <div className="bg-surface-muted/70 pb-2">
                          {children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className="block px-5 py-2.5 text-sm text-body no-underline hover:text-brand"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </nav>

              <div className="space-y-2.5 border-t border-line p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex min-h-11 items-center justify-center gap-2 border border-ink/12 px-4 text-sm font-bold text-ink no-underline"
                >
                  <Phone size={16} className="text-brand" />
                  {siteConfig.contact.phoneDisplay}
                </a>
                <a
                  href={getWhatsAppUrl()}
                  className="flex min-h-11 items-center justify-center gap-2 bg-brand px-4 text-sm font-bold uppercase tracking-wide text-white no-underline"
                >
                  {t.common.whatsAppUs}
                </a>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center justify-center border border-ink px-4 text-sm font-bold uppercase tracking-wide text-ink no-underline"
                >
                  {t.common.getInTouch}
                </Link>
              </div>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        type="button"
        aria-label={open ? t.common.closeMenu : t.common.openMenu}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="relative z-[101] grid h-10 w-10 place-items-center border border-ink/15 bg-white text-ink transition hover:border-brand hover:text-brand lg:hidden"
      >
        {open ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
      </button>
      {menu}
    </>
  );
}
