"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/motion/Reveal";
import Button from "@/components/Button";
import { useLanguage } from "@/components/LanguageProvider";
import { SERVICE_GROUPS, SERVICES_PAGE, COMMON, priceLabel } from "@/lib/content";
import { IconScissors, IconRazor, IconComb, IconKids } from "@/components/icons";

const GROUP_ICONS: Record<string, (props: { className?: string }) => React.JSX.Element> = {
  haircuts: IconScissors,
  beard: IconRazor,
  kids: IconKids,
  styling: IconComb,
};

export default function ServicesContent() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-ink font-body" data-screen-label="Services">
      <Header />

      <section className="mx-auto max-w-[900px] px-6 pt-[clamp(50px,10vw,90px)] pb-10 text-center">
        <Reveal>
          <span className="font-accent text-lg italic text-gold">
            {lang === "ka" ? "ფასების ჩამონათვალი" : "The Price List"}
          </span>
          <h1 className="mt-3 mb-5 font-heading text-[clamp(32px,5vw,52px)] font-semibold text-cream">
            {SERVICES_PAGE.title[lang]}
          </h1>
          <p className="font-body text-base leading-[1.7] text-muted">{SERVICES_PAGE.intro[lang]}</p>
        </Reveal>
      </section>

      <section className="mx-auto flex max-w-[900px] flex-col gap-16 px-6 pt-10 pb-[100px]">
        {SERVICE_GROUPS.map((group, gi) => {
          const Icon = GROUP_ICONS[group.id] ?? IconScissors;
          return (
            <Reveal key={group.id} delay={gi * 90}>
              <div className="mb-6 flex items-center gap-3 border-b border-[rgba(201,168,106,0.2)] pb-3.5">
                <Icon className="h-5 w-5 text-gold" />
                <h2 className="font-heading text-2xl text-gold">{group.title[lang]}</h2>
              </div>
              <div className="flex flex-col gap-0.5">
                {group.items.map((item, i) => (
                  <div
                    key={i}
                    className="group flex items-start justify-between gap-5 border-b border-[rgba(163,156,146,0.12)] py-[22px] px-3 -mx-3 transition-colors duration-200 hover:bg-[rgba(201,168,106,0.05)]"
                  >
                    <div>
                      <h3 className="mb-1.5 font-heading text-[19px] text-cream transition-colors duration-200 group-hover:text-gold">
                        {item.name[lang]}
                      </h3>
                      <p className="max-w-[440px] font-body text-sm leading-[1.6] text-muted">{item.desc[lang]}</p>
                    </div>
                    <span className="whitespace-nowrap pt-1 font-accent text-base italic font-semibold text-gold">
                      {priceLabel(item.price, lang)}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          );
        })}

        <p className="text-center font-body text-xs italic text-faint">{SERVICES_PAGE.priceNote[lang]}</p>

        <div className="mt-4 text-center">
          <Button href="/booking">{COMMON.bookAppointment[lang]}</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
