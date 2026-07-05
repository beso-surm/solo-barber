"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageProvider";
import { BARBERS, ABOUT_PAGE, CONTACT, initialsOf } from "@/lib/content";

export default function TeamPage() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-base font-body" data-screen-label="Team">
      <Header />

      <section className="reveal mx-auto max-w-[760px] px-7 pt-[clamp(50px,10vw,70px)] pb-14 text-center">
        <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">
          {lang === "ka" ? "გუნდი" : "The Team"}
        </span>
        <h1 className="mt-4 mb-[22px] font-heading text-[clamp(32px,5vw,52px)] font-bold text-cream">
          {ABOUT_PAGE.title[lang]}
        </h1>
        <p className="font-body text-base leading-[1.8] text-muted">{ABOUT_PAGE.intro[lang]}</p>
      </section>

      <section className="reveal mx-auto max-w-[1320px] px-8 pb-[72px]">
        <div className="relative h-[520px] overflow-hidden rounded-[10px]">
          <Image
            src="/images/team-1.jpg"
            alt="The Solo Barber team"
            fill
            sizes="(max-width: 1024px) 100vw, 1320px"
            className="object-cover object-[center_30%]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-8 pb-[120px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
          {BARBERS.map((b, i) => (
            <div
              key={i}
              className="rounded-lg border border-[rgba(201,168,106,0.15)] bg-surface-green px-6 py-[34px] text-center transition-[transform,border-color] duration-250 hover:-translate-y-1 hover:border-[rgba(201,168,106,0.5)]"
            >
              <div className="mx-auto mb-5 flex h-[78px] w-[78px] items-center justify-center rounded-full border border-[rgba(201,168,106,0.5)]">
                <span className="font-heading text-[22px] font-bold text-gold">{initialsOf(b.name)}</span>
              </div>
              <h3 className="mb-1.5 font-heading text-[19px] font-semibold text-cream">
                {lang === "ka" && b.nameKa ? b.nameKa : b.name}
              </h3>
              <span className="mb-4 block font-body text-[13px] text-muted">{b.specialty[lang]}</span>
              <a href={CONTACT.instagramHref} target="_blank" rel="noopener" className="font-body text-[13px] text-gold no-underline">
                Instagram
              </a>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
