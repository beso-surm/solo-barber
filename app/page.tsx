import type { Metadata } from "next";
import HomeContent from "./HomeContent";
import StructuredData from "@/components/StructuredData";
import { localBusinessSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Solo Barber | Men's Barbershop in Kutaisi — Fades, Haircuts & Beard Trims",
  description:
    "Book a men's haircut, skin fade, or beard trim at Solo Barber — a premium, appointment-only barbershop in Kutaisi, Georgia. Personalized grooming, every visit.",
};

export default function Home() {
  return (
    <>
      <StructuredData data={localBusinessSchema()} />
      <StructuredData data={faqSchema()} />
      <HomeContent />
    </>
  );
}
