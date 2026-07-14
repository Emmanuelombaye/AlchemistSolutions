import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/lib/site.config";

export function Footer() {
  return (
    <footer className="bg-surface-dark pb-[4.75rem] text-white lg:pb-0">
      <div className="container-site grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="mb-4 flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center bg-brand text-sm font-bold">
              AS
            </span>
            <span className="text-lg font-bold tracking-tight">
              {siteConfig.name}
            </span>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/65">
            {siteConfig.footer.about}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.1em]">
            Quick Links
          </h3>
          <ul className="space-y-2.5">
            {siteConfig.footer.links.map((link) => (
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
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.1em]">
            Contact Us
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
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-5 text-xs text-white/45 sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </span>
          <span>{siteConfig.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
