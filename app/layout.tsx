import type { Metadata } from "next";
import { Manrope, Inter, Noto_Sans_Georgian, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import CustomCursor from "@/components/motion/CustomCursor";
import GrainOverlay from "@/components/GrainOverlay";

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
  title: "Solo Barber — Premium Barber Experience in Kutaisi",
  description:
    "Clean cuts. Professional service. Modern atmosphere. By-appointment barbershop in Kutaisi, Georgia.",
  keywords: [
    "Solo Barber",
    "barber Kutaisi",
    "barbershop Kutaisi",
    "ბარბერი ქუთაისი",
    "თმის შეჭრა ქუთაისი",
    "haircut Kutaisi",
    "beard trim Kutaisi",
  ],
  openGraph: {
    title: "Solo Barber — Premium Barber Experience in Kutaisi",
    description: "Clean cuts. Professional service. Modern atmosphere.",
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
      <body className="min-h-screen bg-base font-body text-cream antialiased">
        <GrainOverlay />
        <CustomCursor />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
