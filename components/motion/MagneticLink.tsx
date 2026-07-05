"use client";

import { useRef, type ReactNode } from "react";
import { useReducedMotion, useFinePointer } from "@/lib/useReducedMotion";

export default function MagneticLink({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();
  const finePointer = useFinePointer();
  const active = finePointer && !reducedMotion;

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!active || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    ref.current.style.transform = `translate(${dx * 0.28}px, ${dy * 0.28 - 1}px)`;
  };

  const onMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`inline-block transition-transform duration-[350ms] ease-[cubic-bezier(.16,1,.3,1)] ${className}`}
    >
      {children}
    </div>
  );
}
