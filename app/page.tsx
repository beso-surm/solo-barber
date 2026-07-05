"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/motion/Reveal";
import MagneticLink from "@/components/motion/MagneticLink";
import TiltCard from "@/components/motion/TiltCard";
import SpotlightCard from "@/components/motion/SpotlightCard";
import { useLanguage } from "@/components/LanguageProvider";
import {
  CONTACT,
  HOURS,
  HOME,
  SERVICE_GROUPS,
  REVIEWS_PAGE,
  COMMON,
  VALUES,
  priceLabel,
} from "@/lib/content";
import {
  IconStar,
  IconMapPin,
  IconClock,
  IconArrowRight,
  IconChevronDown,
  IconQuote,
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

const VALUE_ICONS = [IconShield, IconSpark, IconCalendarLock];

export default function HomePage() {
  const { lang } = useLanguage();

  const teaserServices = TEASER_SERVICES.map((t) => {
    const group = SERVICE_GROUPS.find((g) => g.id === t.group)!;
    const item = group.items[t.idx];
    return { name: item.name[lang], priceLabel: priceLabel(item.price, lang), img: t.img, tag: t.tag };
  });

  return (
    <div className="min-h-screen bg-base font-body" data-screen-label="Home">
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
            <p className="mt-[22px] max-w-[480px] font-body text-[clamp(15px,2vw,19px)] leading-[1.7] text-[#D6D2CB]">
              {HOME.heroSubhead[lang]}
            </p>
            <div className="mt-9 flex flex-wrap gap-3.5">
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
              <Link
                href="/gallery"
                className="rounded-sm border border-[rgba(201,168,106,0.5)] px-[30px] py-4 font-body text-[15px] font-semibold text-cream no-underline transition-colors duration-200 hover:border-gold"
              >
                {COMMON.viewGallery[lang]}
              </Link>
            </div>
          </Reveal>

          <Reveal
            delay={200}
            className="mt-8 flex flex-wrap gap-[18px] rounded-[10px] border border-[rgba(201,168,106,0.25)] bg-[rgba(201,168,106,0.08)] p-[18px_22px] min-[761px]:absolute min-[761px]:right-0 min-[761px]:bottom-0 min-[761px]:mt-0 min-[761px]:min-w-[180px] min-[761px]:flex-col min-[761px]:gap-4 min-[761px]:border-[rgba(201,168,106,0.28)] min-[761px]:bg-[rgba(11,11,11,0.55)] min-[761px]:p-[22px_26px] min-[761px]:backdrop-blur-[14px]"
          >
            <div className="flex items-center gap-2.5">
              <IconStar className="h-4 w-4 text-gold" />
              <span className="font-body text-sm text-cream">
                <strong className="font-accent italic text-base font-semibold">5.0</strong> {HOME.ratingLabel[lang]}
              </span>
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

      {/* WHY SOLO BARBER */}
      <section className="mx-auto max-w-[1320px] px-7 pt-[clamp(60px,12vw,100px)] pb-[10px]">
        <div className="grid grid-cols-1 gap-10 min-[761px]:grid-cols-3">
          {VALUES.map((v, i) => {
            const Icon = VALUE_ICONS[i];
            return (
              <Reveal key={i} delay={i * 120} className="flex flex-col gap-4 border-l border-[rgba(201,168,106,0.25)] pl-6">
                <Icon className="h-7 w-7 text-gold" />
                <h3 className="font-heading text-lg font-semibold text-cream">{v.title[lang]}</h3>
                <p className="font-body text-sm leading-[1.7] text-muted">{v.desc[lang]}</p>
              </Reveal>
            );
          })}
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
            className="border-b border-[rgba(201,168,106,0.4)] pb-[3px] font-body text-sm text-gold no-underline"
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
                <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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

      {/* REVIEWS */}
      <section id="reviews" className="mx-auto max-w-[1320px] scroll-mt-20 px-7 pt-[clamp(70px,14vw,130px)] pb-[60px]">
        <Reveal className="mb-12 flex flex-wrap items-baseline gap-4">
          <span className="font-accent text-[40px] italic font-semibold text-gold">5.0</span>
          <div>
            <h2 className="font-heading text-[clamp(24px,3.4vw,34px)] font-bold text-cream">
              {REVIEWS_PAGE.title[lang]}
            </h2>
            <span className="font-body text-xs uppercase tracking-[0.2em] text-muted">
              {lang === "ka" ? "შეფასებები" : "Testimonials"}
            </span>
          </div>
        </Reveal>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
          {REVIEWS_PAGE.items.map((rev, i) => (
            <Reveal key={i} delay={i * 100}>
              <SpotlightCard className="h-full rounded-lg border border-[rgba(201,168,106,0.15)] bg-surface-green p-8">
                <IconQuote className="mb-3 h-6 w-8 text-gold/50" />
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <IconStar key={s} className="h-3.5 w-3.5" />
                  ))}
                </div>
                <p className="mt-[18px] mb-5 font-body text-[15px] leading-[1.7] text-cream">{rev.quote[lang]}</p>
                <span className="font-body text-[13px] text-muted">{rev.name}</span>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-center font-body text-xs italic text-faint">{REVIEWS_PAGE.disclaimer[lang]}</p>
      </section>

      {/* CONTACT + MAP */}
      <section className="mt-[clamp(70px,14vw,130px)] bg-surface px-7 py-[clamp(60px,12vw,100px)]">
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
              <p className="font-body text-[15px] leading-[1.8] text-cream">
                {lang === "ka" ? CONTACT.addressKa : CONTACT.addressLine}
              </p>
            </div>
            <div className="mb-8 flex items-start gap-2.5">
              <IconClock className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
              <p className="font-body text-[15px] leading-[1.8] text-muted">{HOURS[lang]}</p>
            </div>
            <div className="flex flex-wrap gap-3.5">
              <MagneticLink>
                <Link
                  href="/booking"
                  data-cursor-hover
                  className="rounded-[3px] bg-gold px-7 py-[15px] font-body text-sm font-semibold text-[#0b0b0b] no-underline"
                >
                  {COMMON.bookAppointment[lang]}
                </Link>
              </MagneticLink>
              <a
                href={CONTACT.mapLink}
                target="_blank"
                rel="noopener"
                className="rounded-[3px] border border-[rgba(201,168,106,0.5)] px-7 py-[15px] font-body text-sm font-semibold text-cream no-underline transition-colors duration-200 hover:border-gold"
              >
                {COMMON.getDirections[lang]}
              </a>
            </div>
          </Reveal>
          <Reveal delay={150} className="overflow-hidden rounded-lg border border-[rgba(201,168,106,0.2)]">
            <iframe
              title="Solo Barber location"
              src={CONTACT.mapEmbed}
              className="h-[300px] w-full border-0"
              style={{ filter: "grayscale(0.4) invert(0.9) contrast(0.9)" }}
            />
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
