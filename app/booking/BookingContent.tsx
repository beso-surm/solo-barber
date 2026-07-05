"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/motion/Reveal";
import Button from "@/components/Button";
import { useLanguage } from "@/components/LanguageProvider";
import { BARBERS, SERVICE_GROUPS, BOOKING_PAGE, CONTACT, priceLabel } from "@/lib/content";
import { IconCheck, IconWhatsApp, IconInstagram } from "@/components/icons";

type FormState = {
  service: string;
  serviceLabel: string;
  barber: string;
  date: string;
  time: string;
  name: string;
  phone: string;
};

const EMPTY_FORM: FormState = {
  service: "",
  serviceLabel: "",
  barber: "",
  date: "",
  time: "",
  name: "",
  phone: "",
};

function buildWhatsAppMessage(form: FormState, lang: "ka" | "en") {
  if (lang === "ka") {
    return [
      "ახალი ჯავშნის მოთხოვნა Solo Barber-ის საიტიდან:",
      `სერვისი: ${form.serviceLabel || "—"}`,
      `ბარბერი: ${form.barber || "არ აქვს მნიშვნელობა"}`,
      `თარიღი: ${form.date || "—"}`,
      `დრო: ${form.time || "—"}`,
      `სახელი: ${form.name}`,
      `ტელეფონი: ${form.phone}`,
    ].join("\n");
  }
  return [
    "New booking request from the Solo Barber website:",
    `Service: ${form.serviceLabel || "—"}`,
    `Barber: ${form.barber || "No preference"}`,
    `Date: ${form.date || "—"}`,
    `Time: ${form.time || "—"}`,
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
  ].join("\n");
}

export default function BookingContent() {
  const { lang } = useLanguage();
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = SERVICE_GROUPS.flatMap((g) =>
    g.items.map((item) => ({
      value: `${g.id}:${item.name.en}`,
      label: `${item.name[lang]} — ${priceLabel(item.price, lang)}`,
    }))
  );

  const barberOptions = BARBERS.map((b) => ({
    value: b.name,
    label: lang === "ka" && b.nameKa ? b.nameKa : b.name,
  }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = buildWhatsAppMessage(form, lang);
    window.open(`${CONTACT.whatsappHref}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
    setSubmitted(true);
  };

  const inputClass =
    "w-full box-border rounded bg-surface-green border border-[rgba(163,156,146,0.3)] p-3.5 text-cream font-body text-[16px] placeholder:text-[#6a6a6e] focus:outline-none focus:border-gold";

  return (
    <div className="min-h-screen bg-ink font-body" data-screen-label="Booking">
      <Header />

      <Reveal as="section" className="mx-auto max-w-[720px] px-6 pt-[clamp(50px,10vw,90px)] pb-[30px] text-center">
        <span className="font-accent text-lg italic text-gold">
          {lang === "ka" ? "დაჯავშნა" : "Reserve Your Chair"}
        </span>
        <h1 className="mt-3 mb-[18px] font-heading text-[clamp(32px,5vw,52px)] font-semibold text-cream">
          {BOOKING_PAGE.title[lang]}
        </h1>
        <p className="font-body text-[16px] leading-[1.7] text-muted">{BOOKING_PAGE.intro[lang]}</p>
      </Reveal>

      <section className="mx-auto max-w-[640px] px-6 pt-10 pb-[60px]">
        {submitted ? (
          <Reveal className="rounded-md border border-[rgba(201,168,106,0.4)] bg-surface-green px-8 py-12 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/50">
              <IconCheck className="h-6 w-6 text-gold" />
            </div>
            <p className="mt-5 font-body text-base leading-[1.7] text-cream">{BOOKING_PAGE.confirmation[lang]}</p>
          </Reveal>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="mb-2 block font-body text-[13px] text-muted">{BOOKING_PAGE.fields.service[lang]}</label>
              <select
                required
                value={form.service}
                onChange={(e) => {
                  const opt = serviceOptions.find((o) => o.value === e.target.value);
                  setForm((f) => ({ ...f, service: e.target.value, serviceLabel: opt?.label ?? "" }));
                }}
                className={inputClass}
              >
                <option value="">—</option>
                {serviceOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block font-body text-[13px] text-muted">{BOOKING_PAGE.fields.barber[lang]}</label>
              <select
                value={form.barber}
                onChange={(e) => setForm((f) => ({ ...f, barber: e.target.value }))}
                className={inputClass}
              >
                <option value="">{BOOKING_PAGE.fields.noPreference[lang]}</option>
                {barberOptions.map((opt) => (
                  <option key={opt.value} value={opt.label}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
              <div>
                <label className="mb-2 block font-body text-[13px] text-muted">{BOOKING_PAGE.fields.date[lang]}</label>
                <input
                  required
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="mb-2 block font-body text-[13px] text-muted">{BOOKING_PAGE.fields.time[lang]}</label>
                <input
                  required
                  type="time"
                  value={form.time}
                  onChange={(e) => setForm((f) => ({ ...f, time: e.target.value }))}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block font-body text-[13px] text-muted">{BOOKING_PAGE.fields.name[lang]}</label>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-2 block font-body text-[13px] text-muted">{BOOKING_PAGE.fields.phone[lang]}</label>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                className={inputClass}
              />
            </div>

            <button
              type="submit"
              className="mt-2 cursor-pointer rounded bg-gold p-4 font-body text-[15px] font-semibold text-[#0b0b0b] shadow-[0_0_0_rgba(201,168,106,0)] transition-shadow duration-300 hover:shadow-[0_14px_34px_rgba(201,168,106,0.28)]"
            >
              {BOOKING_PAGE.fields.submit[lang]}
            </button>
          </form>
        )}

        <div className="mt-14 border-t border-[rgba(163,156,146,0.15)] pt-10 text-center">
          <p className="mb-5 font-body text-sm text-muted">{BOOKING_PAGE.altTitle[lang]}</p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <Button href={CONTACT.whatsappHref} variant="secondary" icon={<IconWhatsApp className="h-4 w-4" />}>
              WhatsApp
            </Button>
            <Button href={CONTACT.instagramHref} variant="secondary" icon={<IconInstagram className="h-4 w-4" />}>
              Instagram DM
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
