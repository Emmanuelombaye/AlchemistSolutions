"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/lib/site.config";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) setExpanded(null);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="grid h-11 w-11 place-items-center bg-brand text-white xl:hidden"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open ? (
        <div className="fixed inset-0 z-[60] xl:hidden">
          <button
            type="button"
            aria-label="Close menu overlay"
            className="absolute inset-0 bg-ink/55"
            onClick={() => setOpen(false)}
          />
          <nav className="absolute inset-y-0 right-0 flex w-[min(100%,20rem)] flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-line px-4 py-4">
              <span className="text-sm font-bold tracking-tight text-ink">
                {siteConfig.shortName}
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center text-ink"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-2">
              {siteConfig.nav.map((item) => {
                const children =
                  "children" in item && item.children ? item.children : null;
                const isOpen = expanded === item.href;

                if (!children) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-line py-3.5 text-[0.95rem] font-semibold text-ink no-underline"
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <div key={item.href} className="border-b border-line">
                    <div className="flex items-center gap-1">
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex-1 py-3.5 text-[0.95rem] font-semibold text-ink no-underline"
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        aria-label={`${isOpen ? "Collapse" : "Expand"} ${item.label}`}
                        aria-expanded={isOpen}
                        onClick={() =>
                          setExpanded((v) => (v === item.href ? null : item.href))
                        }
                        className="grid h-11 w-11 place-items-center text-ink"
                      >
                        <ChevronDown
                          size={18}
                          className={`transition ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>
                    {isOpen ? (
                      <div className="pb-3 pl-3">
                        {children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block py-2.5 text-sm text-body no-underline hover:text-brand"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>

            <div className="space-y-3 border-t border-line p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex min-h-12 items-center justify-center gap-2 border border-ink/15 bg-white px-4 text-sm font-bold text-ink no-underline"
              >
                <Phone size={16} className="text-brand" />
                {siteConfig.contact.phoneDisplay}
              </a>
              <a
                href={getWhatsAppUrl()}
                className="flex min-h-12 items-center justify-center gap-2 bg-brand px-4 text-sm font-bold uppercase tracking-wide text-white no-underline"
              >
                WhatsApp Us
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center justify-center border border-ink px-4 text-sm font-bold uppercase tracking-wide text-ink no-underline"
              >
                Get In Touch
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
