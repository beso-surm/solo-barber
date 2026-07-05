"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/motion/Reveal";
import MagneticLink from "@/components/motion/MagneticLink";
import MapEmbed from "@/components/MapEmbed";
import { useLanguage } from "@/components/LanguageProvider";
import { CONTACT, HOURS, CONTACT_PAGE } from "@/lib/content";
import { IconMapPin, IconPhone, IconClock, IconWhatsApp, IconInstagram } from "@/components/icons";

export default function ContactPage() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-ink font-body" data-screen-label="Contact">
      <Header />

      <Reveal as="section" className="mx-auto max-w-[900px] px-7 pt-[clamp(50px,10vw,70px)] pb-5 text-center">
        <span className="font-accent text-lg italic text-gold">
          {lang === "ka" ? "დაგვიკავშირდით" : "Get in Touch"}
        </span>
        <h1 className="mt-3 font-heading text-[clamp(32px,5vw,52px)] font-bold text-cream">
          {CONTACT_PAGE.title[lang]}
        </h1>
      </Reveal>

      <section className="mx-auto grid max-w-[1100px] grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-start gap-12 px-7 pt-[60px] pb-[110px]">
        <Reveal className="flex flex-col gap-8">
          <div className="flex items-start gap-3.5">
            <IconMapPin className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
            <div>
              <span className="font-body text-xs uppercase tracking-[0.14em] text-gold">
                {CONTACT_PAGE.addressLabel[lang]}
              </span>
              <p className="mt-2.5 font-heading text-xl leading-[1.5] text-cream">
                {lang === "ka" ? CONTACT.addressKa : CONTACT.addressLine}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3.5">
            <IconPhone className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
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
          </div>
          <div className="flex items-start gap-3.5">
            <IconClock className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
            <div>
              <span className="font-body text-xs uppercase tracking-[0.14em] text-gold">
                {CONTACT_PAGE.hoursLabel[lang]}
              </span>
              <p className="mt-2.5 font-heading text-xl text-cream">{HOURS[lang]}</p>
            </div>
          </div>
          <div className="mt-2 flex flex-wrap gap-3.5">
            <MagneticLink>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener"
                data-cursor-hover
                className="inline-flex items-center gap-2 rounded-md bg-gold px-[26px] py-3.5 font-body text-sm font-semibold text-[#0b0b0b] no-underline"
              >
                <IconWhatsApp className="h-4 w-4" />
                WhatsApp
              </a>
            </MagneticLink>
            <a
              href={CONTACT.instagramHref}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-md border border-[rgba(201,168,106,0.5)] px-[26px] py-3.5 font-body text-sm font-semibold text-cream no-underline transition-colors duration-200 hover:border-gold"
            >
              <IconInstagram className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <MapEmbed className="h-[420px] w-full rounded-md" />
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
