"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageProvider";
import { SERVICE_GROUPS, SERVICES_PAGE, COMMON, priceLabel } from "@/lib/content";

export default function ServicesPage() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-base font-body" data-screen-label="Services">
      <Header />

      <section className="mx-auto max-w-[900px] px-6 pt-[clamp(50px,10vw,90px)] pb-10 text-center">
        <h1 className="mb-5 font-heading text-[clamp(32px,5vw,52px)] font-semibold text-cream">
          {SERVICES_PAGE.title[lang]}
        </h1>
        <p className="font-body text-base leading-[1.7] text-muted">{SERVICES_PAGE.intro[lang]}</p>
      </section>

      <section className="mx-auto flex max-w-[900px] flex-col gap-16 px-6 pt-10 pb-[100px]">
        {SERVICE_GROUPS.map((group) => (
          <div key={group.id}>
            <h2 className="mb-6 border-b border-[rgba(201,168,106,0.2)] pb-3.5 font-heading text-2xl text-gold">
              {group.title[lang]}
            </h2>
            <div className="flex flex-col gap-0.5">
              {group.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start justify-between gap-5 border-b border-[rgba(163,156,146,0.12)] py-[22px] px-1"
                >
                  <div>
                    <h3 className="mb-1.5 font-heading text-[19px] text-cream">{item.name[lang]}</h3>
                    <p className="max-w-[440px] font-body text-sm leading-[1.6] text-muted">{item.desc[lang]}</p>
                  </div>
                  <span className="whitespace-nowrap pt-1 font-body text-[15px] font-semibold text-gold">
                    {priceLabel(item.price, lang)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <p className="text-center font-body text-xs italic text-[#6a6a6e]">{SERVICES_PAGE.priceNote[lang]}</p>

        <div className="mt-4 text-center">
          <Link
            href="/booking"
            className="inline-block rounded-md bg-gold px-10 py-4 font-body text-[15px] font-semibold text-[#0b0b0b] no-underline"
          >
            {COMMON.bookAppointment[lang]}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
