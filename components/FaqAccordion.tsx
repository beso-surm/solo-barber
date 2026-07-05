"use client";

import { useState } from "react";
import type { FaqItem, Lang } from "@/lib/content";
import { IconChevronDown } from "@/components/icons";

export default function FaqAccordion({ items, lang }: { items: FaqItem[]; lang: Lang }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-0.5">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="border-b border-[rgba(163,156,146,0.15)]">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-heading text-base font-semibold text-cream min-[761px]:text-lg">{item.q[lang]}</span>
              <IconChevronDown
                className={`h-5 w-5 flex-shrink-0 text-gold transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(.16,1,.3,1)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="pb-5 font-body text-sm leading-[1.7] text-muted min-[761px]:text-[15px]">{item.a[lang]}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
