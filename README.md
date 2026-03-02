# Victorious Badminton Academy

Professional demo website for Victorious Badminton Academy — a badminton training academy showcasing coaches, achievements, training schedules, and contact information.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **lucide-react** (icons)
- **react-hook-form** (contact form)
- **@emailjs/browser** (email integration)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- Mobile-first responsive design
- Trilingual support (English, 中文, Bahasa Malaysia)
- Coach profiles with expandable achievements
- Training schedule by location
- Student achievement gallery
- Training video showcase
- Contact form with WhatsApp integration

## Project Structure

```
src/
├── app/           # Next.js App Router pages
├── components/    # Section components
├── data/          # Static data (coaches, schedule, translations)
├── lib/           # Utility functions
└── types/         # TypeScript types
```

## Deployment

```bash
npm run build
```

Deploy to Vercel for production.
