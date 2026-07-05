"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { CONTACT, HOURS, NAV_LABEL, FOOTER } from "@/lib/content";
import { IconInstagram, IconWhatsApp } from "@/components/icons";

export default function Footer() {
  const { lang } = useLanguage();
  const t = (en: string, ka: string) => (lang === "ka" ? ka : en);

  return (
    <footer className="relative border-t border-[rgba(201,168,106,0.18)] bg-surface px-8 pt-[72px] pb-[110px]">
      <div className="hairline absolute top-0 left-0 right-0" />
      <div className="mx-auto grid max-w-[1320px] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-11">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.jpg"
              alt="Solo Barber"
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-contain"
            />
            <span className="font-accent text-2xl italic tracking-wide text-cream">Solo</span>
          </div>
          <p className="mt-4 max-w-[260px] font-body text-sm leading-[1.7] text-muted">
            {lang === "ka" ? FOOTER.tagline.ka : FOOTER.tagline.en}
          </p>
          <div className="mt-[22px] flex gap-3">
            <a
              href={CONTACT.instagramHref}
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[rgba(201,168,106,0.4)] text-gold no-underline transition-colors duration-200 hover:bg-gold hover:text-[#0b0b0b]"
            >
              <IconInstagram className="h-4 w-4" />
            </a>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener"
              aria-label="WhatsApp"
              className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[rgba(201,168,106,0.4)] text-gold no-underline transition-colors duration-200 hover:bg-gold hover:text-[#0b0b0b]"
            >
              <IconWhatsApp className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <span className="font-body text-xs uppercase tracking-[0.14em] text-gold">
            {t("Explore", "ნავიგაცია")}
          </span>
          <div className="mt-[18px] flex flex-col gap-3">
            <Link href="/" className="font-body text-sm text-cream no-underline">
              {NAV_LABEL.home[lang]}
            </Link>
            <Link href="/services" className="font-body text-sm text-cream no-underline">
              {NAV_LABEL.services[lang]}
            </Link>
            <Link href="/gallery" className="font-body text-sm text-cream no-underline">
              {NAV_LABEL.gallery[lang]}
            </Link>
            <Link href="/team" className="font-body text-sm text-cream no-underline">
              {NAV_LABEL.team[lang]}
            </Link>
            <Link href="/#reviews" className="font-body text-sm text-cream no-underline">
              {NAV_LABEL.reviews[lang]}
            </Link>
            <Link href="/booking" className="font-body text-sm text-cream no-underline">
              {t("Book Appointment", "დაჯავშნა")}
            </Link>
          </div>
        </div>

        <div>
          <span className="font-body text-xs uppercase tracking-[0.14em] text-gold">
            {t("Contact", "კონტაქტი")}
          </span>
          <div className="mt-[18px] flex flex-col gap-3">
            <a
              href={CONTACT.mapLink}
              target="_blank"
              rel="noopener"
              className="font-body text-sm leading-[1.5] text-cream no-underline"
            >
              {lang === "ka" ? CONTACT.addressKa : CONTACT.addressLine}
            </a>
            <a href={CONTACT.phoneHref} className="font-body text-sm text-cream no-underline">
              {CONTACT.phone}
            </a>
            <span className="font-body text-sm text-muted">{HOURS[lang]}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-[52px] flex max-w-[1320px] flex-wrap justify-between gap-3 border-t border-[rgba(163,156,146,0.15)] pt-6">
        <span className="font-body text-xs text-muted">
          &copy; 2026 Solo Barber. {FOOTER.rights[lang]}
        </span>
        <span className="font-body text-xs text-muted">
          {lang === "ka" ? "ქუთაისი, საქართველო" : "Kutaisi, Georgia"}
        </span>
      </div>
    </footer>
  );
}
