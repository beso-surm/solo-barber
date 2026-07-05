"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageProvider";
import { CONTACT, GALLERY_PAGE, COMMON } from "@/lib/content";

const PHOTOS = [
  { img: "/images/interior-black-marble.jpg", tag: "styling stations", className: "col-span-2 row-span-2" },
  { img: "/images/interior-shelves.jpg", tag: "interior detail", className: "" },
  { img: "/images/reception.jpg", tag: "reception", className: "" },
  { img: "/images/interior-green-lounge.jpg", tag: "lounge seating", className: "col-span-2" },
  { img: "/images/team-1.jpg", tag: "the Solo Barber team", className: "row-span-2" },
  { img: "/images/team-2.jpg", tag: "the team, at ease", className: "" },
];

export default function GalleryPage() {
  const { lang } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + PHOTOS.length - 1) % PHOTOS.length)),
    []
  );
  const next = useCallback(() => setLightboxIndex((i) => (i === null ? null : (i + 1) % PHOTOS.length)), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, close, prev, next]);

  const active = lightboxIndex !== null ? PHOTOS[lightboxIndex] : null;

  return (
    <div className="min-h-screen bg-base font-body" data-screen-label="Gallery">
      <Header />

      <section className="mx-auto max-w-[900px] px-6 pt-[clamp(50px,10vw,90px)] pb-12 text-center">
        <h1 className="mb-[18px] font-heading text-[clamp(32px,5vw,52px)] font-semibold text-cream">
          {GALLERY_PAGE.title[lang]}
        </h1>
        <p className="font-body text-base text-muted">{GALLERY_PAGE.subtitle[lang]}</p>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 pb-[100px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] auto-rows-[220px] gap-3">
          {PHOTOS.map((p, i) => (
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              className={`relative overflow-hidden rounded-sm transition-opacity duration-200 hover:opacity-80 ${p.className}`}
            >
              <Image
                src={p.img}
                alt={p.tag}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={CONTACT.instagramHref}
            target="_blank"
            rel="noopener"
            className="inline-block rounded-md border border-[rgba(201,168,106,0.5)] px-8 py-3.5 font-body text-sm font-semibold text-cream no-underline"
          >
            {COMMON.followInstagram[lang]}
          </a>
        </div>
      </section>

      {active && (
        <div
          onClick={close}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[rgba(10,11,10,0.94)] p-6"
        >
          <button onClick={close} aria-label="Close" className="absolute right-7 top-6 border-none bg-transparent text-[32px] leading-none text-cream">
            &times;
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
            className="absolute left-5 top-1/2 -translate-y-1/2 border-none bg-transparent text-[40px] leading-none text-gold"
          >
            &#8249;
          </button>
          <div onClick={(e) => e.stopPropagation()} className="flex w-full max-w-[900px] flex-col items-center gap-3.5">
            <div className="relative h-[76vh] w-full">
              <Image src={active.img} alt={active.tag} fill sizes="90vw" className="object-contain" />
            </div>
            <span className="font-body text-xs text-muted">
              {lightboxIndex! + 1} / {PHOTOS.length}
            </span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
            className="absolute right-5 top-1/2 -translate-y-1/2 border-none bg-transparent text-[40px] leading-none text-gold"
          >
            &#8250;
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
}
