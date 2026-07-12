import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { siteConfig, getWhatsAppUrl } from "@/lib/site.config";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact With Us" breadcrumb="Contact" />
      <section className="section-pad">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Get In Touch</p>
            <h2 className="heading heading-lg mb-4">
              Ready to transform your floors?
            </h2>
            <p className="mb-8 leading-relaxed">
              Book a site assessment, request material guidance, or send project
              drawings — we respond quickly on WhatsApp and email.
            </p>
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
              Chat on WhatsApp
            </a>
          </div>

          <form className="border border-line bg-surface-muted p-5 sm:p-6 md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                className="min-h-12 w-full border border-line bg-white px-4 py-3 text-base outline-none focus:border-brand"
                placeholder="Your name"
                name="name"
                autoComplete="name"
              />
              <input
                className="min-h-12 w-full border border-line bg-white px-4 py-3 text-base outline-none focus:border-brand"
                placeholder="Email address"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
              />
            </div>
            <input
              className="mt-4 min-h-12 w-full border border-line bg-white px-4 py-3 text-base outline-none focus:border-brand"
              placeholder="Subject"
              name="subject"
            />
            <textarea
              className="mt-4 min-h-36 w-full border border-line bg-white px-4 py-3 text-base outline-none focus:border-brand"
              placeholder="Tell us about your project"
              name="message"
            />
            <button type="button" className="btn mt-5 w-full sm:w-auto">
              Send Message
            </button>
            <p className="mt-3 text-xs text-body">
              Form is display-only for now — use WhatsApp for fastest response.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
