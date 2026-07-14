"use client";

import { useEffect, useRef, useState } from "react";
import { Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n/provider";

export function LanguageToggle() {
  const { locale, setLocale, locales, t } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("mousedown", onPointer);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousedown", onPointer);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const active = locales.find((item) => item.code === locale);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label={t.common.language}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-10 items-center gap-1.5 border border-ink/12 bg-white px-2.5 text-xs font-bold uppercase tracking-[0.08em] text-ink transition hover:border-brand hover:text-brand"
      >
        <Globe size={14} className="text-brand" />
        <span>{active?.short ?? "EN"}</span>
      </button>

      {open ? (
        <div
          role="listbox"
          aria-label={t.common.language}
          className="absolute right-0 top-[calc(100%+0.4rem)] z-[80] min-w-[9.5rem] border border-line bg-white py-1 shadow-[0_12px_30px_rgba(21,22,28,0.12)]"
        >
          {locales.map((item) => (
            <button
              key={item.code}
              type="button"
              role="option"
              aria-selected={item.code === locale}
              onClick={() => {
                setLocale(item.code);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between px-3 py-2.5 text-left text-sm transition hover:bg-surface-muted ${
                item.code === locale
                  ? "font-bold text-brand"
                  : "font-medium text-ink"
              }`}
            >
              <span>{item.label}</span>
              <span className="text-[0.7rem] tracking-wide text-body">
                {item.short}
              </span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
