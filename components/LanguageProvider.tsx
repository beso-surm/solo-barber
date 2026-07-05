"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import type { Lang } from "@/lib/content";

type LanguageContextValue = {
  lang: Lang;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "ka",
  toggleLang: () => {},
});

const STORAGE_KEY = "soloBarberLang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("ka");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "ka") setLang(saved);
    } catch {
      // localStorage unavailable — fall back to default
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next: Lang = prev === "ka" ? "en" : "ka";
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // localStorage unavailable — in-memory toggle still works
      }
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
