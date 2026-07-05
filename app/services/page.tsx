import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Prices & Services | Solo Barber — Men's Barbershop in Kutaisi",
  description:
    "See prices for men's haircuts, skin fades, beard trims, and grooming services at Solo Barber in Kutaisi. Transparent, à la carte pricing — no packages.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
