import type { Metadata } from "next";
import GalleryContent from "./GalleryContent";

export const metadata: Metadata = {
  title: "Gallery | Solo Barber — Men's Barbershop in Kutaisi",
  description:
    "A look inside Solo Barber's barbershop in Kutaisi — styling stations, lounge seating, and the team at work.",
};

export default function GalleryPage() {
  return <GalleryContent />;
}
