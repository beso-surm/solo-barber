# Solo Barber

Website for Solo Barber, a by-appointment barbershop in Kutaisi, Georgia. Built in Next.js from a Claude Design handoff.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript strict
- Tailwind CSS v4

## Pages

Home, Services, Gallery (with lightbox), Team, Booking, Contact — bilingual Georgian/English (client-side toggle, persisted to `localStorage`).

## Development

```bash
npm install
npm run dev
```

## Booking

The booking form collects the request client-side and opens a pre-filled WhatsApp message to the shop's number so requests reach the owner without any backend.
