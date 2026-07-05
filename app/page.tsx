"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageProvider";
import {
  CONTACT,
  HOURS,
  HOME,
  SERVICE_GROUPS,
  REVIEWS_PAGE,
  COMMON,
  priceLabel,
} from "@/lib/content";

const TEASER_SERVICES = [
  { group: "haircuts", idx: 0, img: "/images/interior-black-marble.jpg" },
  { group: "beard", idx: 0, img: "/images/interior-green-lounge.jpg" },
  { group: "beard", idx: 1, img: "/images/reception.jpg" },
  { group: "kids", idx: 0, img: "/images/interior-shelves.jpg" },
];

const GALLERY_TEASER = [
  { img: "/images/interior-shelves.jpg", alt: "Interior detail", span: "col-span-2" },
  { img: "/images/team-1.jpg", alt: "The Solo Barber team", span: "" },
  { img: "/images/interior-green-lounge.jpg", alt: "Lounge seating", span: "" },
  { img: "/images/reception.jpg", alt: "Reception", span: "" },
  { img: "/images/interior-black-marble.jpg", alt: "Styling stations", span: "" },
];

export default function HomePage() {
  const { lang } = useLanguage();

  const teaserServices = TEASER_SERVICES.map((t) => {
    const group = SERVICE_GROUPS.find((g) => g.id === t.group)!;
    const item = group.items[t.idx];
    return { name: item.name[lang], priceLabel: priceLabel(item.price, lang), img: t.img };
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
          <div className="reveal">
            <span className="font-body text-sm font-extrabold tracking-[0.4em] text-gold">
              {HOME.heroKicker[lang]}
            </span>
            <h1 className="mt-5 max-w-[820px] font-heading text-[clamp(34px,6.4vw,72px)] font-bold leading-[1.1] text-cream">
              {HOME.heroTitle[lang]}
            </h1>
            <p className="mt-[22px] max-w-[480px] font-body text-[clamp(15px,2vw,19px)] leading-[1.7] text-[#D6D2CB]">
              {HOME.heroSubhead[lang]}
            </p>
            <div className="mt-9 flex flex-wrap gap-3.5">
              <Link
                href="/booking"
                className="rounded-sm bg-gold px-[30px] py-4 font-body text-[15px] font-semibold text-[#0b0b0b] no-underline transition-transform duration-150 hover:-translate-y-0.5"
              >
                {COMMON.bookAppointment[lang]}
              </Link>
              <Link
                href="/gallery"
                className="rounded-sm border border-[rgba(201,168,106,0.5)] px-[30px] py-4 font-body text-[15px] font-semibold text-cream no-underline"
              >
                {COMMON.viewGallery[lang]}
              </Link>
            </div>
          </div>

          <div
            className="mt-8 flex flex-wrap gap-[18px] rounded-[10px] border border-[rgba(201,168,106,0.25)] bg-[rgba(201,168,106,0.08)] p-[18px_22px] min-[761px]:absolute min-[761px]:right-0 min-[761px]:bottom-0 min-[761px]:mt-0 min-[761px]:min-w-[180px] min-[761px]:flex-col min-[761px]:gap-4 min-[761px]:border-[rgba(201,168,106,0.28)] min-[761px]:bg-[rgba(11,11,11,0.55)] min-[761px]:p-[22px_26px] min-[761px]:backdrop-blur-[14px]"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-base">⭐</span>
              <span className="font-body text-sm text-cream">
                <strong className="font-bold">5.0</strong> {HOME.ratingLabel[lang]}
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-base">📍</span>
              <span className="font-body text-sm text-cream">{HOME.locationBadge[lang]}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-base">⏰</span>
              <span className="font-body text-sm text-cream">{HOME.openBadge[lang]}</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-[1320px] px-7 pt-[clamp(70px,14vw,130px)] pb-[60px]">
        <div className="reveal mb-14 text-center">
          <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">
            {lang === "ka" ? "სერვისები" : "What We Do"}
          </span>
          <h2 className="mt-4 font-heading text-[clamp(28px,4vw,44px)] font-bold text-cream">
            {HOME.servicesTeaserTitle[lang]}
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-5">
          {teaserServices.map((s, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-lg border border-[rgba(201,168,106,0.14)] bg-surface transition-[transform,border-color] duration-250 hover:-translate-y-1.5 hover:border-[rgba(201,168,106,0.5)]"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-[22px]">
                <h3 className="mb-2 font-heading text-[19px] font-semibold text-cream">{s.name}</h3>
                <span className="font-body text-[13px] text-gold">{s.priceLabel}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
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
        <div className="reveal mb-10 flex flex-wrap items-end justify-between gap-4">
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
            className="whitespace-nowrap border-b border-[rgba(201,168,106,0.4)] pb-[3px] font-body text-sm text-gold no-underline"
          >
            {COMMON.viewGallery[lang]} →
          </Link>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] auto-rows-[220px] gap-3.5">
          {GALLERY_TEASER.map((g, i) => (
            <div key={i} className={`relative overflow-hidden rounded-md ${g.span}`}>
              <Image
                src={g.img}
                alt={g.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
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
        <div className="reveal relative mx-auto w-full max-w-[1320px] px-8 py-20 text-center">
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
          <Link
            href="/team"
            className="inline-block rounded-[3px] bg-gold px-[30px] py-[15px] font-body text-sm font-semibold text-[#0b0b0b] no-underline"
          >
            {lang === "ka" ? "გუნდის გაცნობა" : "Meet the Team"}
          </Link>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="mx-auto max-w-[1320px] scroll-mt-20 px-7 pt-[clamp(70px,14vw,130px)] pb-[60px]">
        <div className="reveal mb-12 flex flex-wrap items-baseline gap-4">
          <span className="font-heading text-[40px] font-extrabold text-gold">5.0</span>
          <div>
            <h2 className="font-heading text-[clamp(24px,3.4vw,34px)] font-bold text-cream">
              {REVIEWS_PAGE.title[lang]}
            </h2>
            <span className="font-body text-xs uppercase tracking-[0.2em] text-muted">
              {lang === "ka" ? "შეფასებები" : "Testimonials"}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
          {REVIEWS_PAGE.items.map((rev, i) => (
            <div key={i} className="rounded-lg border border-[rgba(201,168,106,0.15)] bg-surface-green p-8">
              <span className="text-[15px] tracking-[2px] text-gold">★★★★★</span>
              <p className="mt-[18px] mb-5 font-body text-[15px] leading-[1.7] text-cream">{rev.quote[lang]}</p>
              <span className="font-body text-[13px] text-muted">{rev.name}</span>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center font-body text-xs italic text-faint">{REVIEWS_PAGE.disclaimer[lang]}</p>
      </section>

      {/* CONTACT + MAP */}
      <section className="mt-[clamp(70px,14vw,130px)] bg-surface px-7 py-[clamp(60px,12vw,100px)]">
        <div className="mx-auto grid max-w-[1320px] grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center gap-12">
          <div>
            <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">
              {lang === "ka" ? "კონტაქტი" : "Visit Us"}
            </span>
            <h2 className="mt-4 mb-6 font-heading text-[clamp(26px,3.4vw,38px)] font-bold text-cream">
              {HOME.locationTitle[lang]}
            </h2>
            <p className="mb-2 font-body text-[15px] leading-[1.8] text-cream">
              {lang === "ka" ? CONTACT.addressKa : CONTACT.addressLine}
            </p>
            <p className="mb-8 font-body text-[15px] leading-[1.8] text-muted">{HOURS[lang]}</p>
            <div className="flex flex-wrap gap-3.5">
              <Link
                href="/booking"
                className="rounded-[3px] bg-gold px-7 py-[15px] font-body text-sm font-semibold text-[#0b0b0b] no-underline"
              >
                {COMMON.bookAppointment[lang]}
              </Link>
              <a
                href={CONTACT.mapLink}
                target="_blank"
                rel="noopener"
                className="rounded-[3px] border border-[rgba(201,168,106,0.5)] px-7 py-[15px] font-body text-sm font-semibold text-cream no-underline"
              >
                {COMMON.getDirections[lang]}
              </a>
            </div>
          </div>
          <iframe
            title="Solo Barber location"
            src={CONTACT.mapEmbed}
            className="h-[300px] w-full rounded-lg border-0"
            style={{ filter: "grayscale(0.4) invert(0.9) contrast(0.9)" }}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
