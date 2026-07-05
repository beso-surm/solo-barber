"use client";

import { useRef, type ReactNode } from "react";
import { useReducedMotion, useFinePointer } from "@/lib/useReducedMotion";

export default function SpotlightCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();
  const finePointer = useFinePointer();
  const active = finePointer && !reducedMotion;

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!active || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div ref={ref} onMouseMove={onMouseMove} className={`group relative ${className}`}>
      {children}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: "radial-gradient(480px circle at var(--mx, 50%) var(--my, 50%), rgba(201,168,106,0.16), transparent 60%)",
        }}
      />
    </div>
  );
}
