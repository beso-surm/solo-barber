import type { Metadata } from "next";
import BookingContent from "./BookingContent";

export const metadata: Metadata = {
  title: "Book an Appointment | Solo Barber — Barbershop in Kutaisi",
  description:
    "Book your haircut, fade, or beard trim at Solo Barber in Kutaisi. Appointment-only — confirmed by phone or WhatsApp shortly after.",
};

export default function BookingPage() {
  return <BookingContent />;
}
