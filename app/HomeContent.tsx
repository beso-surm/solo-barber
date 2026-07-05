"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/motion/Reveal";
import MagneticLink from "@/components/motion/MagneticLink";
import TiltCard from "@/components/motion/TiltCard";
import SpotlightCard from "@/components/motion/SpotlightCard";
import MapEmbed from "@/components/MapEmbed";
import Button from "@/components/Button";
import FaqAccordion from "@/components/FaqAccordion";
import { useLanguage } from "@/components/LanguageProvider";
import {
  CONTACT,
  HOURS,
  HOME,
  SERVICE_GROUPS,
  TRUST_SECTION,
  FAQ_SECTION,
  COMMON,
  priceLabel,
} from "@/lib/content";
import {
  IconMapPin,
  IconClock,
  IconPhone,
  IconWhatsApp,
  IconArrowRight,
  IconChevronDown,
  IconSpark,
  IconShield,
  IconCalendarLock,
} from "@/components/icons";

const TEASER_SERVICES = [
  { group: "haircuts", idx: 0, img: "/images/interior-black-marble.jpg", tag: "01" },
  { group: "beard", idx: 0, img: "/images/interior-green-lounge.jpg", tag: "02" },
  { group: "beard", idx: 1, img: "/images/reception.jpg", tag: "03" },
  { group: "kids", idx: 0, img: "/images/interior-shelves.jpg", tag: "04" },
];

const GALLERY_TEASER = [
  { img: "/images/interior-shelves.jpg", alt: "Interior detail", tag: { en: "Interior", ka: "ინტერიერი" }, span: "col-span-2" },
  { img: "/images/team-1.jpg", alt: "The Solo Barber team", tag: { en: "The Team", ka: "გუნდი" }, span: "" },
  { img: "/images/interior-green-lounge.jpg", alt: "Lounge seating", tag: { en: "Lounge", ka: "ლაუნჯი" }, span: "" },
  { img: "/images/reception.jpg", alt: "Reception", tag: { en: "Reception", ka: "რეცეფცია" }, span: "" },
  { img: "/images/interior-black-marble.jpg", alt: "Styling stations", tag: { en: "Styling Stations", ka: "სავარძლები" }, span: "" },
];

const TRUST_ICONS = [IconShield, IconSpark, IconCalendarLock];

export default function HomeContent() {
  const { lang } = useLanguage();

  const teaserServices = TEASER_SERVICES.map((t) => {
    const group = SERVICE_GROUPS.find((g) => g.id === t.group)!;
    const item = group.items[t.idx];
    return { name: item.name[lang], priceLabel: priceLabel(item.price, lang), img: t.img, tag: t.tag };
  });

  return (
    <div className="min-h-screen bg-ink font-body" data-screen-label="Home">
      <Header hasHero />

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <Image
          src="/images/interior-black-marble.jpg"
          alt="Solo Barber interior"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg,rgba(11,11,11,0.94) 0%,rgba(17,26,23,0.8) 42%,rgba(17,26,23,0.4) 100%)",
          }}
        />

        <div className="relative mx-auto w-full max-w-[1320px] px-7 pt-[clamp(110px,26vw,150px)] pb-[clamp(70px,14vw,120px)]">
          <Reveal>
            <span className="inline-flex items-center gap-3 font-accent text-lg italic tracking-wide text-gold">
              {HOME.heroKicker[lang]}
              <span className="hairline inline-block w-16" />
            </span>
            <h1 className="mt-5 max-w-[820px] font-heading text-[clamp(34px,6.4vw,72px)] font-bold leading-[1.1] text-cream">
              {HOME.heroTitle[lang]}
            </h1>
            <p className="mt-[22px] max-w-[520px] font-body text-[clamp(16px,2vw,19px)] leading-[1.7] text-[#D6D2CB]">
              {HOME.heroSubhead[lang]}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <MagneticLink>
                <Link
                  href="/booking"
                  data-cursor-hover
                  className="group inline-flex items-center gap-2 rounded-sm bg-gold px-[30px] py-4 font-body text-[15px] font-semibold text-[#0b0b0b] no-underline shadow-[0_0_0_rgba(201,168,106,0)] transition-shadow duration-300 hover:shadow-[0_14px_34px_rgba(201,168,106,0.3)]"
                >
                  {COMMON.bookAppointment[lang]}
                  <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </MagneticLink>
              <Button href={CONTACT.phoneHref} variant="secondary" magnetic={false} icon={<IconPhone className="h-4 w-4" />}>
                {COMMON.callNow[lang]}
              </Button>
              <Button href={CONTACT.whatsappHref} variant="secondary" magnetic={false} icon={<IconWhatsApp className="h-4 w-4" />}>
                {COMMON.whatsappMessage[lang]}
              </Button>
            </div>
            <Link
              href="/gallery"
              className="mt-2 inline-block py-3 font-body text-sm text-muted no-underline transition-colors duration-200 hover:text-gold"
            >
              {COMMON.viewGallery[lang]} →
            </Link>
          </Reveal>

          <Reveal
            delay={200}
            className="mt-8 flex flex-wrap gap-[18px] rounded-[10px] border border-[rgba(201,168,106,0.25)] bg-[rgba(201,168,106,0.08)] p-[18px_22px] min-[761px]:absolute min-[761px]:right-0 min-[761px]:bottom-0 min-[761px]:mt-0 min-[761px]:min-w-[180px] min-[761px]:flex-col min-[761px]:gap-4 min-[761px]:border-[rgba(201,168,106,0.28)] min-[761px]:bg-[rgba(11,11,11,0.55)] min-[761px]:p-[22px_26px] min-[761px]:backdrop-blur-[14px]"
          >
            <div className="flex items-center gap-2.5">
              <IconSpark className="h-4 w-4 text-gold" />
              <span className="font-body text-sm text-cream">{HOME.ratingBadge[lang]}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <IconMapPin className="h-4 w-4 text-gold" />
              <span className="font-body text-sm text-cream">{HOME.locationBadge[lang]}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <IconClock className="h-4 w-4 text-gold" />
              <span className="font-body text-sm text-cream">{HOME.openBadge[lang]}</span>
            </div>
          </Reveal>
        </div>

        <div className="scroll-cue absolute bottom-8 left-1/2 hidden -translate-x-1/2 min-[761px]:block">
          <IconChevronDown className="h-6 w-6 text-gold/70" />
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-[1320px] px-7 pt-[clamp(70px,14vw,130px)] pb-[60px]">
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">
              {lang === "ka" ? "სერვისები" : "What We Do"}
            </span>
            <h2 className="mt-4 font-heading text-[clamp(28px,4vw,44px)] font-bold text-cream">
              {HOME.servicesTeaserTitle[lang]}
            </h2>
          </div>
          <Link
            href="/services"
            className="group hidden items-center gap-1.5 border-b border-[rgba(201,168,106,0.4)] pb-[3px] font-body text-sm text-gold no-underline min-[761px]:inline-flex"
          >
            {COMMON.viewAllServices[lang]}
            <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-6">
          {teaserServices.map((s, i) => (
            <Reveal key={i} delay={i * 90}>
              <TiltCard className="group overflow-hidden rounded-lg border border-[rgba(201,168,106,0.14)] bg-surface transition-colors duration-250 hover:border-[rgba(201,168,106,0.5)]">
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 font-accent text-xs italic text-gold/90">{s.tag}</span>
                </div>
                <div className="p-[22px]">
                  <h3 className="mb-2 font-heading text-[19px] font-semibold text-cream">{s.name}</h3>
                  <span className="font-body text-[13px] text-gold">{s.priceLabel}</span>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center min-[761px]:hidden">
          <Link
            href="/services"
            className="inline-block border-b border-[rgba(201,168,106,0.4)] px-2 py-3 font-body text-sm text-gold no-underline"
          >
            {COMMON.viewAllServices[lang]} →
          </Link>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-[1320px] px-7 pt-[clamp(70px,14vw,130px)] pb-[60px]">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">
              {lang === "ka" ? "გალერეა" : "The Space"}
            </span>
            <h2 className="mt-3.5 font-heading text-[clamp(28px,4vw,44px)] font-bold text-cream">
              {HOME.galleryTeaserTitle[lang]}
            </h2>
          </div>
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-1.5 whitespace-nowrap border-b border-[rgba(201,168,106,0.4)] pb-[3px] font-body text-sm text-gold no-underline"
          >
            {COMMON.viewGallery[lang]}
            <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] auto-rows-[220px] gap-3.5">
          {GALLERY_TEASER.map((g, i) => (
            <Reveal key={i} delay={i * 70} className={`relative overflow-hidden rounded-md ${g.span}`}>
              <SpotlightCard className="h-full w-full">
                <Image
                  src={g.img}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 opacity-100 transition-opacity duration-300 min-[901px]:opacity-0 min-[901px]:group-hover:opacity-100">
                  <span className="font-body text-xs uppercase tracking-[0.18em] text-cream">{g.tag[lang]}</span>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section className="relative mt-[clamp(70px,14vw,130px)] flex min-h-[480px] items-center overflow-hidden">
        <Image
          src="/images/team-2.jpg"
          alt="The Solo Barber team"
          fill
          sizes="100vw"
          className="object-cover object-[center_25%]"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg,rgba(11,11,11,0.35) 0%,rgba(11,11,11,0.85) 100%)" }}
        />
        <Reveal className="relative mx-auto w-full max-w-[1320px] px-8 py-20 text-center">
          <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">
            {lang === "ka" ? "გუნდი" : "Meet the Team"}
          </span>
          <h2 className="mx-auto mt-4 mb-5 max-w-[640px] font-heading text-[clamp(28px,4.5vw,46px)] font-bold text-cream">
            {lang === "ka" ? "ხელოსნები, რომლებიც ზრუნავენ დეტალებზე" : "Craftspeople who care about the details"}
          </h2>
          <p className="mx-auto mb-8 max-w-[520px] font-body text-base leading-[1.7] text-[#D6D2CB]">
            {lang === "ka"
              ? "ყოველი წევრი ერთგულია ერთ მიზნისადმი — თქვენი საუკეთესო ვერსია."
              : "Every member of our team is dedicated to one thing — the best version of you."}
          </p>
          <MagneticLink>
            <Link
              href="/team"
              data-cursor-hover
              className="inline-block rounded-[3px] bg-gold px-[30px] py-[15px] font-body text-sm font-semibold text-[#0b0b0b] no-underline"
            >
              {lang === "ka" ? "გუნდის გაცნობა" : "Meet the Team"}
            </Link>
          </MagneticLink>
        </Reveal>
      </section>

      {/* TRUST — honest, no fabricated reviews */}
      <section id="trust" className="mx-auto max-w-[1320px] scroll-mt-20 px-7 pt-[clamp(70px,14vw,130px)] pb-[60px]">
        <Reveal className="mx-auto max-w-[720px] text-center">
          <span className="font-accent text-lg italic text-gold">{TRUST_SECTION.kicker[lang]}</span>
          <h2 className="mt-3 mb-5 font-heading text-[clamp(28px,4vw,44px)] font-bold text-cream">
            {TRUST_SECTION.title[lang]}
          </h2>
          <p className="font-body text-base leading-[1.8] text-muted">{TRUST_SECTION.body[lang]}</p>
        </Reveal>
        <div className="mx-auto mt-14 grid max-w-[1100px] grid-cols-1 gap-10 min-[761px]:grid-cols-3">
          {TRUST_SECTION.points.map((point, i) => {
            const Icon = TRUST_ICONS[i];
            return (
              <Reveal key={i} delay={i * 120} className="flex flex-col items-center gap-4 text-center min-[761px]:items-start min-[761px]:text-left">
                <Icon className="h-7 w-7 text-gold" />
                <h3 className="font-heading text-lg font-semibold text-cream">{point.title[lang]}</h3>
                <p className="font-body text-sm leading-[1.7] text-muted">{point.desc[lang]}</p>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={200} className="mt-12 text-center">
          <Button href="/booking">{COMMON.bookAppointment[lang]}</Button>
        </Reveal>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-surface px-7 py-[clamp(70px,14vw,130px)]">
        <div className="mx-auto max-w-[820px]">
          <Reveal className="mb-10 text-center">
            <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">{FAQ_SECTION.kicker[lang]}</span>
            <h2 className="mt-4 font-heading text-[clamp(28px,4vw,40px)] font-bold text-cream">{FAQ_SECTION.title[lang]}</h2>
          </Reveal>
          <Reveal delay={100}>
            <FaqAccordion items={FAQ_SECTION.items} lang={lang} />
          </Reveal>
        </div>
      </section>

      {/* CONTACT + MAP */}
      <section className="px-7 py-[clamp(60px,12vw,100px)]">
        <div className="mx-auto grid max-w-[1320px] grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center gap-12">
          <Reveal>
            <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">
              {lang === "ka" ? "კონტაქტი" : "Visit Us"}
            </span>
            <h2 className="mt-4 mb-6 font-heading text-[clamp(26px,3.4vw,38px)] font-bold text-cream">
              {HOME.locationTitle[lang]}
            </h2>
            <div className="mb-2 flex items-start gap-2.5">
              <IconMapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
              <p className="font-body text-[16px] leading-[1.8] text-cream">
                {lang === "ka" ? CONTACT.addressKa : CONTACT.addressLine}
              </p>
            </div>
            <div className="mb-8 flex items-start gap-2.5">
              <IconClock className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
              <p className="font-body text-[16px] leading-[1.8] text-muted">{HOURS[lang]}</p>
            </div>
            <div className="flex flex-wrap gap-3.5">
              <Button href="/booking">{COMMON.bookAppointment[lang]}</Button>
              <Button href={CONTACT.mapLink} variant="secondary" magnetic={false}>
                {COMMON.getDirections[lang]}
              </Button>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <MapEmbed className="h-[300px] w-full rounded-lg" />
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
