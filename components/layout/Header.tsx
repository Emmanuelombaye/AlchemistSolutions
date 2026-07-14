import Link from "next/link";
import { Clock3, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/lib/site.config";
import { MobileNav } from "@/components/layout/MobileNav";

function SocialGlyph({ label }: { label: string }) {
  const common = {
    width: 14,
    height: 14,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true as const,
  };

  switch (label) {
    case "Facebook":
      return (
        <svg {...common}>
          <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
        </svg>
      );
    case "Twitter":
      return (
        <svg {...common}>
          <path d="M18.9 2H22l-6.8 7.8L23 22h-6.5l-5.1-6.7L5.7 22H2.6l7.3-8.3L1 2h6.7l4.6 6.1L18.9 2zm-1.1 18h1.8L6.3 3.9H4.4L17.8 20z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg {...common}>
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zm5.2-3.3a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg {...common}>
          <path d="M6.5 9H3.7v12h2.8V9zM5.1 3.5A1.7 1.7 0 1 0 5.1 7a1.7 1.7 0 0 0 0-3.5zM20.3 9c-1.7 0-2.8.9-3.3 1.8V9h-2.8v12h2.8v-6.5c0-1.7.9-2.8 2.3-2.8s2 .9 2 2.8V21H24v-7c0-3-1.7-5-3.7-5z" />
        </svg>
      );
    default:
      return null;
  }
}

export function TopBar() {
  return (
    <div className="hidden border-b border-line bg-surface-muted lg:block">
      <div className="container-site flex items-center justify-between py-2.5 text-sm text-body">
        <div className="flex items-center gap-4">
          {siteConfig.social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="transition hover:text-brand"
            >
              <SocialGlyph label={s.label} />
            </a>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-2">
            <Clock3 size={14} className="text-brand" />
            {siteConfig.hours}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin size={14} className="text-brand" />
            {siteConfig.location.address}
          </span>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface/95 shadow-[0_1px_0_var(--line)] backdrop-blur-md supports-[backdrop-filter]:bg-surface/90">
      <TopBar />
      <div className="container-site flex h-14 items-center justify-between gap-3 md:h-16">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2.5 no-underline"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center bg-brand text-xs font-bold text-white md:h-10 md:w-10 md:text-sm">
            AS
          </span>
          <span className="truncate text-[0.95rem] font-bold tracking-tight text-ink md:text-lg">
            {siteConfig.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-7">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.78rem] font-bold uppercase tracking-[0.08em] text-ink no-underline transition hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          <Link
            href="/contact"
            className="btn hidden min-h-10 px-4 lg:inline-flex"
          >
            Get In Touch
            <ArrowUpRight size={16} />
          </Link>
          <a
            href={getWhatsAppUrl()}
            className="hidden items-center gap-2 text-ink no-underline xl:inline-flex"
          >
            <span className="grid h-10 w-10 place-items-center bg-brand text-white">
              <Phone size={16} />
            </span>
            <span className="text-sm font-semibold">
              {siteConfig.contact.phoneDisplay}
            </span>
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
