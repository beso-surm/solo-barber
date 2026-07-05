import { CONTACT } from "@/lib/content";
import { IconWhatsApp } from "@/components/icons";

export default function FloatingWhatsApp() {
  return (
    <a
      href={CONTACT.whatsappHref}
      target="_blank"
      rel="noopener"
      aria-label="Message us on WhatsApp"
      data-cursor-hover
      className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#1B302B] text-gold shadow-[0_10px_30px_rgba(0,0,0,0.4)] ring-1 ring-[rgba(201,168,106,0.35)] transition-transform duration-200 hover:-translate-y-0.5 min-[901px]:flex"
    >
      <IconWhatsApp className="h-6 w-6" />
    </a>
  );
}
