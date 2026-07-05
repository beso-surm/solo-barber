import { CONTACT } from "@/lib/content";

export default function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden border border-[rgba(201,168,106,0.22)] bg-white ${className}`}>
      <iframe
        title="Solo Barber location"
        src={CONTACT.mapEmbed}
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
      />
    </div>
  );
}
