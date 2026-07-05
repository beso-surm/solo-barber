import type { Metadata } from "next";
import TeamContent from "./TeamContent";

export const metadata: Metadata = {
  title: "Our Barbers | Solo Barber — Men's Barbershop in Kutaisi",
  description:
    "Meet the barbers and stylists at Solo Barber in Kutaisi — trained in modern fades, classic haircuts, and beard grooming.",
};

export default function TeamPage() {
  return <TeamContent />;
}
