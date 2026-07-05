"use client";

import { createContext, useCallback, useContext, useSyncExternalStore } from "react";
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
const listeners = new Set<() => void>();

function readLang(): Lang {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "en" || saved === "ka" ? saved : "ka";
  } catch {
    return "ka";
  }
}

function writeLang(next: Lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // localStorage unavailable — in-memory toggle still works this tab
  }
  listeners.forEach((l) => l());
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

const getServerSnapshot = (): Lang => "ka";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, readLang, getServerSnapshot);

  const toggleLang = useCallback(() => {
    writeLang(readLang() === "ka" ? "en" : "ka");
  }, []);

  return <LanguageContext.Provider value={{ lang, toggleLang }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
