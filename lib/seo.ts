import { BARBERS, CONTACT, FAQ_SECTION, SERVICE_GROUPS } from "@/lib/content";

export const SITE_URL = "https://solo-barber-gamma.vercel.app";
export const SITE_NAME = "Solo Barber";

const allPrices = SERVICE_GROUPS.flatMap((g) => g.items.map((i) => i.price));
const minPrice = Math.min(...allPrices);
const maxPrice = Math.max(...allPrices);

// LocalBusiness (HairSalon) structured data — real, verified NAP data only.
// Powers Google's local pack / knowledge panel eligibility.
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    image: `${SITE_URL}/images/interior-black-marble.jpg`,
    url: SITE_URL,
    telephone: CONTACT.phone,
    priceRange: `${minPrice}-${maxPrice} GEL`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "2 Mari Brosse Street",
      addressLocality: "Kutaisi",
      addressCountry: "GE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 42.2729758,
      longitude: 42.7055683,
    },
    hasMap: CONTACT.mapLink,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
    sameAs: [CONTACT.instagramHref],
    employee: BARBERS.map((b) => ({ "@type": "Person", name: b.name })),
    description:
      "Premium men's barbershop in Kutaisi offering haircuts, skin fades, and beard trims by appointment.",
  };
}

// FAQPage structured data — real Q&A content shown on the page, in English
// for broad indexing; eligible for FAQ rich results in search.
export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_SECTION.items.map((item) => ({
      "@type": "Question",
      name: item.q.en,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a.en,
      },
    })),
  };
}
