import type { Metadata } from "next";
import { Manrope, Inter, Noto_Sans_Georgian, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import CustomCursor from "@/components/motion/CustomCursor";
import GrainOverlay from "@/components/GrainOverlay";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const notoGeorgian = Noto_Sans_Georgian({
  variable: "--font-noto-georgian",
  subsets: ["georgian"],
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://solo-barber-gamma.vercel.app"),
  title: "Solo Barber | Men's Barbershop in Kutaisi — Fades, Haircuts & Beard Trims",
  description:
    "Book a men's haircut, skin fade, or beard trim at Solo Barber — a premium, appointment-only barbershop in Kutaisi, Georgia. Personalized grooming, every visit.",
  keywords: [
    "Solo Barber",
    "barber Kutaisi",
    "barbershop Kutaisi",
    "men's haircut Kutaisi",
    "fade haircut Kutaisi",
    "beard trim Kutaisi",
    "men's grooming Kutaisi",
    "ბარბერი ქუთაისი",
    "ბარბერშოპი ქუთაისში",
    "თმის შეჭრა ქუთაისი",
    "წვერის მოვლა ქუთაისი",
  ],
  openGraph: {
    title: "Solo Barber | Men's Barbershop in Kutaisi",
    description:
      "Precision fades, classic haircuts, and beard grooming — book your chair at Kutaisi's newest men's barbershop.",
    url: "https://solo-barber-gamma.vercel.app",
    siteName: "Solo Barber",
    locale: "ka_GE",
    alternateLocale: ["en_US"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ka"
      className={`${manrope.variable} ${inter.variable} ${notoGeorgian.variable} ${playfair.variable}`}
    >
      <body className="min-h-screen bg-ink font-body text-cream antialiased">
        <GrainOverlay />
        <CustomCursor />
        <LanguageProvider>
          {children}
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
