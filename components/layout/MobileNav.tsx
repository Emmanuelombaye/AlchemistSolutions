"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/lib/site.config";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
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
            <div className="flex-1 overflow-y-auto px-4 py-3">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-3.5 text-[0.95rem] font-semibold text-ink no-underline"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="space-y-3 border-t border-line p-4">
              <a
                href={getWhatsAppUrl()}
                className="flex min-h-12 items-center justify-center gap-2 bg-brand px-4 text-sm font-bold uppercase tracking-wide text-white no-underline"
              >
                <Phone size={16} />
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
