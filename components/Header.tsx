"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { CONTACT, NAV_LABEL } from "@/lib/content";

const NAV_ORDER = ["home", "services", "gallery", "team", "reviews", "contact"] as const;

const NAV_HREF_STATIC: Record<string, string> = {
  home: "/",
  services: "/services",
  gallery: "/gallery",
  team: "/team",
  contact: "/contact",
};

function currentPageFromPath(pathname: string): string {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/services")) return "services";
  if (pathname.startsWith("/gallery")) return "gallery";
  if (pathname.startsWith("/team")) return "team";
  if (pathname.startsWith("/booking")) return "booking";
  if (pathname.startsWith("/contact")) return "contact";
  return "";
}

export default function Header({ hasHero = false }: { hasHero?: boolean }) {
  const { lang, toggleLang } = useLanguage();
  const pathname = usePathname();
  const current = currentPageFromPath(pathname);

  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navItems = NAV_ORDER.map((key) => {
    const href = key === "reviews" ? (current === "home" ? "#reviews" : "/#reviews") : NAV_HREF_STATIC[key];
    const isActive = key === current;
    return { key, href, label: NAV_LABEL[key][lang], isActive };
  });

  const bookNowLabel = lang === "ka" ? "დაჯავშნა" : "Book Now";
  const langToggleLabel = lang === "ka" ? "EN" : "KA";

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-[background,border-color,box-shadow] duration-450 ease-out"
        style={{
          background: scrolled ? "rgba(11,11,11,0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,106,0.18)" : "1px solid transparent",
          boxShadow: scrolled ? "0 8px 30px rgba(0,0,0,0.35)" : "none",
        }}
      >
        <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between gap-5 px-8">
          <Link href="/" className="flex flex-shrink-0 items-center gap-[11px] leading-none no-underline">
            <Image
              src="/images/logo.jpg"
              alt="Solo Barber"
              width={42}
              height={42}
              className="h-[42px] w-[42px] rounded-full object-contain"
            />
            <span className="pt-0.5 font-body text-[9px] font-semibold uppercase tracking-[0.28em] text-gold">
              Kutaisi
            </span>
          </Link>

          <nav className="hidden min-[901px]:flex items-center gap-[34px]">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="border-b pb-[5px] font-body text-[13.5px] tracking-[0.02em] no-underline transition-colors duration-200"
                style={{
                  color: item.isActive ? "#C9A86A" : "#F5F5F5",
                  borderBottomColor: item.isActive ? "#C9A86A" : "transparent",
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden min-[901px]:flex flex-shrink-0 items-center gap-[22px]">
            <button
              onClick={toggleLang}
              className="border-b border-transparent pb-0.5 font-body text-[12.5px] tracking-[0.04em] text-muted transition-colors duration-200 hover:border-gold hover:text-gold"
            >
              {langToggleLabel}
            </button>
            <Link
              href="/booking"
              className="whitespace-nowrap rounded-sm bg-gold px-[25px] py-[11px] font-body text-[13.5px] font-semibold text-[#0b0b0b] no-underline transition-transform duration-200 hover:-translate-y-0.5"
            >
              {bookNowLabel}
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
            className="relative flex min-[901px]:hidden h-11 w-11 items-center justify-center border-none bg-transparent p-0"
          >
            <span
              className="absolute left-[11px] h-[1.5px] w-[22px] bg-cream transition-all duration-300"
              style={{
                top: isMenuOpen ? "21px" : "15px",
                transform: isMenuOpen ? "rotate(45deg)" : "rotate(0deg)",
              }}
            />
            <span
              className="absolute left-[11px] h-[1.5px] w-[22px] bg-gold transition-all duration-300"
              style={{
                top: isMenuOpen ? "21px" : "27px",
                transform: isMenuOpen ? "rotate(-45deg)" : "rotate(0deg)",
              }}
            />
          </button>
        </div>
      </header>
      {!hasHero && <div className="h-20" />}

      {/* Mobile fullscreen menu */}
      <div
        className="fixed inset-0 z-[100] flex flex-col bg-base p-7 transition-[opacity,transform] duration-350 ease-out min-[901px]:hidden"
        style={{
          opacity: isMenuOpen ? 1 : 0,
          transform: isMenuOpen ? "translateY(0)" : "translateY(-16px)",
          pointerEvents: isMenuOpen ? "auto" : "none",
        }}
      >
        <div className="mb-[52px] flex items-center justify-between">
          <Image
            src="/images/logo.jpg"
            alt="Solo Barber"
            width={42}
            height={42}
            className="h-[42px] w-[42px] rounded-full object-contain"
          />
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close"
            className="h-11 w-11 border-none bg-transparent p-2 text-3xl leading-none text-cream"
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col gap-7">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-heading text-[27px] font-semibold no-underline"
              style={{ color: item.isActive ? "#C9A86A" : "#F5F5F5" }}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="mt-auto flex flex-col gap-4 pb-6">
          <div className="flex items-center justify-between border-t border-[rgba(163,156,146,0.18)] py-3.5 px-0.5">
            <a href={CONTACT.phoneHref} className="font-body text-sm text-muted no-underline">
              {CONTACT.phone}
            </a>
            <button onClick={toggleLang} className="border-none bg-transparent p-1.5 font-body text-[13px] text-gold">
              {langToggleLabel}
            </button>
          </div>
          <Link
            href="/booking"
            onClick={() => setIsMenuOpen(false)}
            className="rounded-sm bg-gold p-4 text-center font-body text-base font-semibold text-[#0b0b0b] no-underline"
          >
            {bookNowLabel}
          </Link>
        </div>
      </div>

      {/* Mobile sticky bottom CTA bar */}
      {!isMenuOpen && (
        <div className="fixed bottom-0 left-0 right-0 z-40 flex gap-px bg-[rgba(201,168,106,0.25)] min-[901px]:hidden">
          <Link
            href="/booking"
            className="flex-[2] py-3.5 px-2 text-center font-body text-sm font-semibold text-[#0b0b0b] no-underline bg-gold"
          >
            {bookNowLabel}
          </Link>
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener"
            className="flex-1 py-3.5 px-2 text-center font-body text-sm font-semibold text-cream no-underline"
            style={{ background: "#1B302B" }}
          >
            WhatsApp
          </a>
        </div>
      )}
    </>
  );
}
