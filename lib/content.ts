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
    "https://www.google.com/maps?q=Solo+Barber,+Kutaisi,+Georgia&ll=42.2729758,42.7055683&z=17&output=embed",
  mapLink:
    "https://www.google.com/maps/place/Solo+Barber/@42.2729758,42.7055683,17z/data=!4m6!3m5!1s0x405c8d007da20213:0x4dfbc98a36c36d0a!8m2!3d42.2729758!4d42.7055683!16s%2Fg%2F11z7rvw7wt",
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
  trust: { en: "Why Us", ka: "რატომ ჩვენ" },
  contact: { en: "Contact", ka: "კონტაქტი" },
};

export const COMMON = {
  bookNow: { en: "Book Now", ka: "დაჯავშნა" } as L,
  bookAppointment: { en: "Book Appointment", ka: "ჯავშნის გაფორმება" } as L,
  callNow: { en: "Call Now", ka: "დარეკვა" } as L,
  whatsappMessage: { en: "WhatsApp", ka: "WhatsApp" } as L,
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
  heroTitle: {
    en: "Premium Men's Barbershop in Kutaisi",
    ka: "პრემიუმ მამაკაცის ბარბერშოპი ქუთაისში",
  } as L,
  heroSubhead: {
    en: "Precision fades, classic haircuts, and beard grooming — book your chair at Kutaisi's newest men's barbershop.",
    ka: "ზუსტი ფეიდები, კლასიკური შეჭრა და წვერის მოვლა — დაჯავშენით სავარძელი ქუთაისის უახლეს მამაკაცის ბარბერშოპში.",
  } as L,
  ratingBadge: { en: "New in Kutaisi", ka: "ახალია ქუთაისში" } as L,
  locationBadge: { en: "Kutaisi", ka: "ქუთაისი" } as L,
  openBadge: { en: "Open Daily", ka: "ღიაა ყოველდღე" } as L,
  servicesTeaserTitle: { en: "Services", ka: "სერვისები" } as L,
  galleryTeaserTitle: { en: "Gallery", ka: "გალერეა" } as L,
  locationTitle: { en: "Visit Us", ka: "გვეწვიეთ" } as L,
};

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

// Honest trust section — replaces fabricated reviews. Solo Barber is a new
// business with no verifiable review history yet, so this leads with the
// "first clients" framing plus concrete, true claims (team size, appointment
// model, products) instead of invented testimonials.
export const TRUST_SECTION = {
  kicker: { en: "New to Kutaisi", ka: "ახალია ქუთაისში" } as L,
  title: { en: "Be One of Our First Clients", ka: "გახდით ჩვენი პირველი კლიენტი" } as L,
  body: {
    en: "Solo Barber just opened its doors in Kutaisi, so instead of a long list of reviews, we'd rather earn yours. Our team of seven barbers and stylists works one appointment at a time — no waiting room, no rushed cuts — with premium tools and products chosen for a clean, lasting result.",
    ka: "Solo Barber ახლახან გაიხსნა ქუთაისში, ამიტომ დიდი შეფასებების სიის ნაცვლად გვინდა, რომ თქვენი ნდობა დავიმსახუროთ საქმით. ჩვენი შვიდი ბარბერისა და სტილისტისგან შემდგარი გუნდი მუშაობს ერთდროულად ერთ კლიენტთან — ლოდინის გარეშე, აჩქარების გარეშე — პრემიუმ ინსტრუმენტებითა და პროდუქტებით, რომლებიც სუფთა და გამძლე შედეგს იძლევა.",
  } as L,
  points: [
    {
      title: { en: "Trained, Attentive Barbers", ka: "გაწვრთნილი და ყურადღებიანი ბარბერები" },
      desc: {
        en: "Every barber on our team works modern fades, classic cuts, and beard grooming.",
        ka: "გუნდის ყოველი ბარბერი ფლობს თანამედროვე ფეიდის, კლასიკური შეჭრისა და წვერის მოვლის ტექნიკებს.",
      },
    },
    {
      title: { en: "Premium Products Only", ka: "მხოლოდ პრემიუმ პროდუქცია" },
      desc: {
        en: "Quality tools and grooming products, chosen for lasting results — not the cheapest option.",
        ka: "ხარისხიანი ინსტრუმენტები და მოვლის საშუალებები, შერჩეული გამძლე შედეგისთვის — არა ყველაზე იაფი ვარიანტისთვის.",
      },
    },
    {
      title: { en: "Your Time, Respected", ka: "თქვენი დროის პატივისცემა" },
      desc: {
        en: "By appointment only, so every visit starts on time and gets our full attention.",
        ka: "მხოლოდ წინასწარი ჩაწერით — ყოველი ვიზიტი იწყება დროულად და იღებს ჩვენს სრულ ყურადღებას.",
      },
    },
  ],
};

export type FaqItem = { q: L; a: L };

export const FAQ_SECTION = {
  kicker: { en: "Good to Know", ka: "სასარგებლო ინფორმაცია" } as L,
  title: { en: "Frequently Asked Questions", ka: "ხშირად დასმული კითხვები" } as L,
  items: [
    {
      q: { en: "How much does a haircut cost?", ka: "რა ღირს თმის შეჭრა?" },
      a: {
        en: "Prices start from 15 GEL for styling and go up to 40 GEL for a skin fade. See the full price list on our Services page.",
        ka: "ფასები იწყება 15 ₾-დან სტაილინგზე და აღწევს 40 ₾-მდე სქინ ფეიდზე. სრული ფასების სია იხილეთ სერვისების გვერდზე.",
      },
    },
    {
      q: { en: "How do I book an appointment?", ka: "როგორ დავჯავშნო ვიზიტი?" },
      a: {
        en: "Book directly on our website, message us on WhatsApp, or call us — we'll confirm your time by phone or WhatsApp shortly after.",
        ka: "დაჯავშენით პირდაპირ ჩვენს საიტზე, მოგვწერეთ WhatsApp-ზე ან დაგვირეკეთ — მალე დაგიდასტურებთ დროს ტელეფონით ან WhatsApp-ით.",
      },
    },
    {
      q: { en: "Do you accept walk-ins?", ka: "შესაძლებელია უჯავშნოდ მოსვლა?" },
      a: {
        en: "Solo Barber operates by appointment only, so every client gets our full attention with no waiting. We recommend booking ahead, but message us on WhatsApp to check for same-day availability.",
        ka: "Solo Barber მუშაობს მხოლოდ წინასწარი ჩაწერით, რათა ყველა კლიენტმა მიიღოს სრული ყურადღება ლოდინის გარეშე. გირჩევთ წინასწარ დაჯავშნას, თუმცა მოგვწერეთ WhatsApp-ზე იმავე დღის ვიზიტის შესამოწმებლად.",
      },
    },
    {
      q: { en: "How long does a haircut take?", ka: "რამდენ ხანს გრძელდება შეჭრა?" },
      a: {
        en: "Most services run about 30–45 minutes depending on what you book — a beard trim is quicker, a full cut with a hot towel shave takes a little longer.",
        ka: "უმეტესი სერვისი გრძელდება დაახლოებით 30–45 წუთი, სერვისის მიხედვით — წვერის შეკვეცა უფრო სწრაფია, ხოლო სრული შეჭრა ცხელი პირსახოცით საპარსით ცოტა მეტ დროს საჭიროებს.",
      },
    },
    {
      q: { en: "Where is Solo Barber located?", ka: "სად მდებარეობს Solo Barber?" },
      a: {
        en: "We're at 2 Mari Brosse Street in Kutaisi, Georgia — see the map below for directions.",
        ka: "ვმდებარეობთ მარი ბროსეს ქუჩა 2-ში, ქუთაისი, საქართველო — მისამართისთვის იხილეთ რუკა ქვემოთ.",
      },
    },
    {
      q: { en: "What are your opening hours?", ka: "რომელ საათებში ხართ ღია?" },
      a: {
        en: "We're open every day from 9:00 AM to 8:00 PM.",
        ka: "ღიები ვართ ყოველდღე, 9:00-დან 20:00 საათამდე.",
      },
    },
  ] as FaqItem[],
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
