import { CONTACT } from "@/lib/content";
import { IconMapPin } from "@/components/icons";

export default function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden border border-[rgba(201,168,106,0.22)] bg-surface ${className}`}>
      <iframe
        title="Solo Barber location"
        src={CONTACT.mapEmbed}
        className="absolute inset-0 h-full w-full border-0"
        style={{ filter: "grayscale(1) brightness(0.75) contrast(1.15)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,11,11,0.12) 0%, rgba(11,11,11,0) 32%, rgba(11,11,11,0.05) 55%, rgba(11,11,11,0.6) 100%)",
          boxShadow: "inset 0 0 46px rgba(0,0,0,0.4)",
        }}
      />
      <div className="pointer-events-none absolute left-4 bottom-4 flex items-center gap-2 rounded-full border border-[rgba(201,168,106,0.4)] bg-[rgba(11,11,11,0.78)] px-3.5 py-2 backdrop-blur-sm">
        <IconMapPin className="h-3.5 w-3.5 text-gold" />
        <span className="font-body text-xs text-cream">Solo Barber · Kutaisi</span>
      </div>
    </div>
  );
}
