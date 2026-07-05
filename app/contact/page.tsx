"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageProvider";
import { CONTACT, HOURS, CONTACT_PAGE } from "@/lib/content";

export default function ContactPage() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-base font-body" data-screen-label="Contact">
      <Header />

      <section className="mx-auto max-w-[900px] px-7 pt-[clamp(50px,10vw,70px)] pb-5 text-center">
        <h1 className="font-heading text-[clamp(32px,5vw,52px)] font-bold text-cream">{CONTACT_PAGE.title[lang]}</h1>
      </section>

      <section className="mx-auto grid max-w-[1100px] grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-start gap-12 px-7 pt-[60px] pb-[110px]">
        <div className="flex flex-col gap-8">
          <div>
            <span className="font-body text-xs uppercase tracking-[0.14em] text-gold">
              {CONTACT_PAGE.addressLabel[lang]}
            </span>
            <p className="mt-2.5 font-heading text-xl leading-[1.5] text-cream">
              {lang === "ka" ? CONTACT.addressKa : CONTACT.addressLine}
            </p>
          </div>
          <div>
            <span className="font-body text-xs uppercase tracking-[0.14em] text-gold">
              {CONTACT_PAGE.phoneLabel[lang]}
            </span>
            <p className="mt-2.5">
              <a href={CONTACT.phoneHref} className="font-heading text-xl text-cream no-underline">
                {CONTACT.phone}
              </a>
            </p>
          </div>
          <div>
            <span className="font-body text-xs uppercase tracking-[0.14em] text-gold">
              {CONTACT_PAGE.hoursLabel[lang]}
            </span>
            <p className="mt-2.5 font-heading text-xl text-cream">{HOURS[lang]}</p>
          </div>
          <div className="mt-2 flex flex-wrap gap-3.5">
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener"
              className="rounded-md bg-gold px-[26px] py-3.5 font-body text-sm font-semibold text-[#0b0b0b] no-underline"
            >
              WhatsApp
            </a>
            <a
              href={CONTACT.instagramHref}
              target="_blank"
              rel="noopener"
              className="rounded-md border border-[rgba(201,168,106,0.5)] px-[26px] py-3.5 font-body text-sm font-semibold text-cream no-underline"
            >
              Instagram
            </a>
          </div>
        </div>

        <iframe
          title="Solo Barber location"
          src={CONTACT.mapEmbed}
          className="h-[420px] w-full rounded-md border-0"
          style={{ filter: "grayscale(0.3) invert(0.92) contrast(0.9)" }}
        />
      </section>

      <Footer />
    </div>
  );
}
