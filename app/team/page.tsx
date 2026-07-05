"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/motion/Reveal";
import TiltCard from "@/components/motion/TiltCard";
import { useLanguage } from "@/components/LanguageProvider";
import { BARBERS, ABOUT_PAGE, CONTACT, initialsOf } from "@/lib/content";
import { IconInstagram } from "@/components/icons";

export default function TeamPage() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-ink font-body" data-screen-label="Team">
      <Header />

      <Reveal as="section" className="mx-auto max-w-[760px] px-7 pt-[clamp(50px,10vw,70px)] pb-14 text-center">
        <span className="font-accent text-lg italic text-gold">{lang === "ka" ? "გუნდი" : "The Team"}</span>
        <h1 className="mt-3 mb-[22px] font-heading text-[clamp(32px,5vw,52px)] font-bold text-cream">
          {ABOUT_PAGE.title[lang]}
        </h1>
        <p className="font-body text-base leading-[1.8] text-muted">{ABOUT_PAGE.intro[lang]}</p>
      </Reveal>

      <Reveal as="section" delay={150} className="mx-auto max-w-[1320px] px-8 pb-[72px]">
        <div className="relative h-[520px] overflow-hidden rounded-[10px]">
          <Image
            src="/images/team-1.jpg"
            alt="The Solo Barber team"
            fill
            sizes="(max-width: 1024px) 100vw, 1320px"
            className="object-cover object-[center_30%]"
          />
        </div>
      </Reveal>

      <section className="mx-auto max-w-[1320px] px-8 pb-[120px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
          {BARBERS.map((b, i) => (
            <Reveal key={i} delay={(i % 4) * 90}>
              <TiltCard className="group h-full rounded-lg border border-[rgba(201,168,106,0.15)] bg-surface-green px-6 py-[34px] text-center transition-colors duration-250 hover:border-[rgba(201,168,106,0.5)]">
                <div className="relative mx-auto mb-5 flex h-[78px] w-[78px] items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-[rgba(201,168,106,0.5)]" />
                  <div className="absolute -inset-1.5 rounded-full border border-[rgba(201,168,106,0.18)] transition-transform duration-500 group-hover:rotate-45" />
                  <span className="font-accent text-xl italic font-semibold text-gold">{initialsOf(b.name)}</span>
                </div>
                <h3 className="mb-1.5 font-heading text-[19px] font-semibold text-cream">
                  {lang === "ka" && b.nameKa ? b.nameKa : b.name}
                </h3>
                <span className="mb-4 block font-body text-[13px] text-muted">{b.specialty[lang]}</span>
                <a
                  href={CONTACT.instagramHref}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 font-body text-[13px] text-gold no-underline"
                >
                  <IconInstagram className="h-3.5 w-3.5" />
                  Instagram
                </a>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
