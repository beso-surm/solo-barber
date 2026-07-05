"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion, useFinePointer } from "@/lib/useReducedMotion";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();
  const finePointer = useFinePointer();
  const active = finePointer && !reducedMotion;

  useEffect(() => {
    if (!active) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let hovering = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      const target = e.target as Element | null;
      hovering = !!target?.closest("a, button, select, input, [data-cursor-hover]");
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      if (ringRef.current) {
        const scale = hovering ? 1.7 : 1;
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${scale})`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [active]);

  if (!active) return null;

  return (
    <>
      <style>{`@media (pointer: fine) { a, button, select, input, body, * { cursor: none !important; } }`}</style>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-[34px] w-[34px] rounded-full border border-[rgba(201,168,106,0.6)] transition-[width,height] duration-200"
      />
    </>
  );
}
