// Solo Barber — bilingual content dictionary (KA default / EN toggle)

export type Lang = "ka" | "en";
export type L = Record<Lang, string>;

export const CONTACT = {
  phone: "+995 590 90 01 00",
  phoneHref: "tel:+995590900100",
  whatsappHref: "https://wa.me/995590900100",
  whatsappNumber: "995590900100",
  instagramHref: "https://instagram.com/solobarber2026",
  instagramHandle: "@solobarber2026",
  addressLine: "2 Mari Brosse Street, Kutaisi, Georgia",
  addressKa: "მარი ბროსეს ქუჩა 2, ქუთაისი, საქართველო",
  mapEmbed:
    "https://www.google.com/maps?q=2+Mari+Brosse+Street,+Kutaisi,+Georgia&output=embed",
  mapLink: "https://www.google.com/maps?q=2+Mari+Brosse+Street,+Kutaisi,+Georgia",
};

export const HOURS: L = {
  en: "Open every day, 9:00 AM – 8:00 PM",
  ka: "ღიაა ყოველდღე, 9:00–20:00",
};

export const NAV_LABEL: Record<string, L> = {
  home: { en: "Home", ka: "მთავარი" },
  services: { en: "Services", ka: "სერვისები" },
  gallery: { en: "Gallery", ka: "გალერეა" },
  team: { en: "Team", ka: "გუნდი" },
  reviews: { en: "Reviews", ka: "შეფასებები" },
  contact: { en: "Contact", ka: "კონტაქტი" },
};

export const COMMON = {
  bookNow: { en: "Book Now", ka: "დაჯავშნა" } as L,
  bookAppointment: { en: "Book Appointment", ka: "ჯავშნის გაფორმება" } as L,
  viewAllServices: { en: "View All Services", ka: "ყველა სერვისი" } as L,
  viewGallery: { en: "View Gallery", ka: "სრული გალერეა" } as L,
  getDirections: { en: "Get Directions", ka: "მიმართულებები" } as L,
  followInstagram: { en: "Follow us on Instagram", ka: "გამოგვყევით Instagram-ზე" } as L,
};

export type Barber = { name: string; nameKa?: string; specialty: L };

// name kept in Latin (as given by client); nameKa provided where available
export const BARBERS: Barber[] = [
  { name: "Marita Bartia", specialty: { en: "Barber", ka: "ბარბერი" } },
  { name: "Sofi Pataridze", specialty: { en: "Men's Hairstylist", ka: "მამაკაცთა სტილისტი" } },
  { name: "Rita Abdaladze", specialty: { en: "Barber", ka: "ბარბერი" } },
  { name: "Mari Gzobava", specialty: { en: "Barber", ka: "ბარბერი" } },
  { name: "Natia Kopadze", nameKa: "ნათია კოპაძე", specialty: { en: "Barber", ka: "ბარბერი" } },
  { name: "Mzia Bregadze", nameKa: "მზია ბრეგაძე", specialty: { en: "Barber", ka: "ბარბერი" } },
  { name: "Salo Abzhandadze", specialty: { en: "Barber", ka: "ბარბერი" } },
];

export type ServiceItem = { name: L; desc: L; price: number };
export type ServiceGroup = { id: string; title: L; items: ServiceItem[] };

// Services grouped: Haircuts / Beard & Shave / Kids / Styling
// Prices are illustrative starting estimates pending final client confirmation.
export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: "haircuts",
    title: { en: "Haircuts", ka: "თმის შეჭრა" },
    items: [
      {
        name: { en: "Classic Haircut", ka: "კლასიკური შეჭრა" },
        desc: { en: "Precision cut, tailored to your style.", ka: "ზუსტი შეჭრა, მორგებული თქვენს სტილზე." },
        price: 35,
      },
      {
        name: { en: "Skin Fade", ka: "სქინ ფეიდი" },
        desc: { en: "Seamless fade with sharp detailing.", ka: "სუფთა გადასვლები და დეტალური დამუშავება." },
        price: 40,
      },
    ],
  },
  {
    id: "beard",
    title: { en: "Beard & Shave", ka: "წვერი და საპარსი" },
    items: [
      {
        name: { en: "Beard Trim & Shape", ka: "წვერის შეკვეცა და ფორმა" },
        desc: { en: "Beard grooming and precise shaping.", ka: "წვერის მოვლა და ფორმის მიცემა." },
        price: 25,
      },
      {
        name: { en: "Hot Towel Shave", ka: "ცხელი პირსახოცით საპარსი" },
        desc: { en: "A classic straight-razor shave, hot towel finish.", ka: "კლასიკური საპარსი ცხელი პირსახოცით." },
        price: 30,
      },
    ],
  },
  {
    id: "kids",
    title: { en: "Kids", ka: "საბავშვო" },
    items: [
      {
        name: { en: "Kids Haircut (12 & under)", ka: "საბავშვო შეჭრა (12 წლამდე)" },
        desc: { en: "A patient, easy cut for younger clients.", ka: "მშვიდი და მარტივი შეჭრა უმცროსი კლიენტებისთვის." },
        price: 25,
      },
    ],
  },
  {
    id: "styling",
    title: { en: "Styling", ka: "სტაილინგი" },
    items: [
      {
        name: { en: "Hair Styling", ka: "თმის სტაილინგი" },
        desc: { en: "Finished look with premium products.", ka: "დასრულებული სტილი პრემიუმ პროდუქტებით." },
        price: 20,
      },
      {
        name: { en: "Wash & Style", ka: "დაბანა და სტაილინგი" },
        desc: { en: "Wash, dry, and style finish.", ka: "დაბანა, გაშრობა და საბოლოო სტაილინგი." },
        price: 15,
      },
    ],
  },
];

export const HOME = {
  heroKicker: { en: "SOLO", ka: "SOLO" } as L,
  heroTitle: { en: "Premium Barber Experience in Kutaisi", ka: "პრემიუმ ბარბერის გამოცდილება ქუთაისში" } as L,
  heroSubhead: {
    en: "Clean cuts. Professional service. Modern atmosphere.",
    ka: "სუფთა შეჭრა. პროფესიონალური სერვისი. თანამედროვე ატმოსფერო.",
  } as L,
  ratingLabel: { en: "Rating", ka: "რეიტინგი" } as L,
  locationBadge: { en: "Kutaisi", ka: "ქუთაისი" } as L,
  openBadge: { en: "Open Daily", ka: "ღიაა ყოველდღე" } as L,
  servicesTeaserTitle: { en: "Services", ka: "სერვისები" } as L,
  galleryTeaserTitle: { en: "Gallery", ka: "გალერეა" } as L,
  locationTitle: { en: "Visit Us", ka: "გვეწვიეთ" } as L,
  whySoloTitle: { en: "Why Solo Barber", ka: "რატომ Solo Barber" } as L,
};

export type Value = { title: L; desc: L };

export const VALUES: Value[] = [
  {
    title: { en: "Personalized Attention", ka: "პერსონალური მიდგომა" },
    desc: {
      en: "Every visit is one-on-one — your barber's full focus, start to finish.",
      ka: "ყოველი ვიზიტი — ერთზე ერთი. თქვენი ბარბერის სრული ყურადღება დასაწყისიდან დასასრულამდე.",
    },
  },
  {
    title: { en: "Premium Products", ka: "პრემიუმ პროდუქცია" },
    desc: {
      en: "Quality tools and products, chosen for lasting results.",
      ka: "ხარისხიანი ინსტრუმენტები და პროდუქცია გამძლე შედეგისთვის.",
    },
  },
  {
    title: { en: "By Appointment Only", ka: "მხოლოდ წინასწარი ჩაწერით" },
    desc: {
      en: "No walk-in crowds — just you and your reserved time.",
      ka: "არანაირი რიგი — მხოლოდ თქვენი დაჯავშნილი დრო.",
    },
  },
];

export const SERVICES_PAGE = {
  title: { en: "Services & Pricing", ka: "სერვისები და ფასები" } as L,
  intro: {
    en: "À la carte grooming, priced simply. No packages, no upsells — just the service you came for.",
    ka: "მარტივი, გამჭვირვალე ფასები. არანაირი პაკეტები — მხოლოდ ის სერვისი, რისთვისაც მოხვედით.",
  } as L,
  priceNote: {
    en: "Prices shown are starting estimates and may vary. Final price list to be confirmed.",
    ka: "ფასები საორიენტაციოა და შესაძლოა შეიცვალოს. საბოლოო ფასების სია დაზუსტდება.",
  } as L,
};

export const GALLERY_PAGE = {
  title: { en: "Gallery", ka: "გალერეა" } as L,
  subtitle: { en: "A look inside Solo Barber.", ka: "შეხედე Solo Barber-ს შიგნიდან." } as L,
};

export const ABOUT_PAGE = {
  title: { en: "Our Barbers", ka: "ჩვენი ბარბერები" } as L,
  intro: {
    en: "Solo Barber brings a personalized, premium grooming experience to Kutaisi — every chair, every visit, one-on-one attention from a dedicated barber.",
    ka: "Solo Barber გთავაზობთ პერსონალურ, პრემიუმ მოვლას ქუთაისში — ყოველი სავარძელი, ყოველი ვიზიტი, ერთზე ერთი ყურადღება თქვენი ბარბერისგან.",
  } as L,
};

export const BOOKING_PAGE = {
  title: { en: "Book Appointment", ka: "ჯავშნის გაფორმება" } as L,
  intro: {
    en: "Submit a request and we'll confirm your appointment by phone or WhatsApp shortly after.",
    ka: "შეავსეთ განაცხადი და ჩვენ დაგიდასტურებთ ჯავშანს ტელეფონით ან WhatsApp-ით მალე.",
  } as L,
  fields: {
    service: { en: "Service", ka: "სერვისი" } as L,
    barber: { en: "Preferred Barber (optional)", ka: "სასურველი ბარბერი (არასავალდებულო)" } as L,
    noPreference: { en: "No preference", ka: "არ აქვს მნიშვნელობა" } as L,
    date: { en: "Preferred Date", ka: "სასურველი თარიღი" } as L,
    time: { en: "Preferred Time", ka: "სასურველი დრო" } as L,
    name: { en: "Your Name", ka: "სახელი" } as L,
    phone: { en: "Phone Number", ka: "ტელეფონის ნომერი" } as L,
    submit: { en: "Send Request", ka: "მოთხოვნის გაგზავნა" } as L,
  },
  confirmation: {
    en: "Request received! We'll confirm your appointment by phone or WhatsApp shortly.",
    ka: "მოთხოვნა მიღებულია! მალე დაგიკავშირდებით ტელეფონით ან WhatsApp-ით ჯავშნის დასადასტურებლად.",
  } as L,
  altTitle: { en: "Prefer to message us directly?", ka: "გირჩევნიათ პირდაპირ დაგვიკავშირდეთ?" } as L,
};

export const CONTACT_PAGE = {
  title: { en: "Contact", ka: "კონტაქტი" } as L,
  addressLabel: { en: "Address", ka: "მისამართი" } as L,
  phoneLabel: { en: "Phone", ka: "ტელეფონი" } as L,
  hoursLabel: { en: "Hours", ka: "სამუშაო საათები" } as L,
};

export type Review = { name: string; quote: L };

export const REVIEWS_PAGE = {
  title: { en: "What Clients Say", ka: "რას ამბობენ კლიენტები" } as L,
  disclaimer: {
    en: "Sample reviews — live ratings coming soon.",
    ka: "სანიმუშო შეფასებები — რეალური რეიტინგები მალე დაემატება.",
  } as L,
  items: [
    {
      name: "Giorgi T.",
      quote: {
        en: "Best haircut I've had in Kutaisi — clean, professional, exactly what I asked for.",
        ka: "საუკეთესო შეჭრა ქუთაისში — სუფთა, პროფესიონალური, ზუსტად ისე, როგორც მინდოდა.",
      },
    },
    {
      name: "Levan K.",
      quote: {
        en: "Great atmosphere and attention to detail. Highly recommend.",
        ka: "შესანიშნავი ატმოსფერო და დეტალებზე ყურადღება. მაქსიმალურად გირჩევთ.",
      },
    },
    {
      name: "Nika M.",
      quote: {
        en: "Personal, relaxed, premium — everything a barber visit should be.",
        ka: "პერსონალური, მშვიდი, პრემიუმ — ზუსტად ისეთი, როგორიც უნდა იყოს ვიზიტი.",
      },
    },
  ] as Review[],
};

export const FOOTER = {
  tagline: { en: "A premium, personalized grooming lounge in Kutaisi.", ka: "პრემიუმ, პერსონალური მოვლის სივრცე ქუთაისში." } as L,
  rights: { en: "All rights reserved.", ka: "ყველა უფლება დაცულია." } as L,
};

export function t(obj: L, lang: Lang): string {
  return obj[lang];
}

export function priceLabel(price: number, lang: Lang): string {
  return lang === "ka" ? `${price} ₾-დან` : `From ${price} GEL`;
}

export function initialsOf(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
