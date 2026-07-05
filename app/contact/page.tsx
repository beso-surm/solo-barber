import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact & Location | Solo Barber — Barber in Kutaisi",
  description:
    "Find Solo Barber at 2 Mari Brosse Street, Kutaisi. Call, message on WhatsApp, or get directions to our men's barbershop.",
};

export default function ContactPage() {
  return <ContactContent />;
}
