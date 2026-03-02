# CLAUDE.md - Victorious Badminton Academy

> **Last Updated**: 2026-03-03
> **Project**: Victorious Badminton Academy Demo Website
> **Tech Stack**: Next.js 15 (App Router), TypeScript, Tailwind CSS v4

## Project Overview

Professional demo website for a badminton training academy. Single-page site with sections: Hero, About, Schedule, Coaches, Achievements, Videos, Contact, Footer.

**Target Audience:** Parents looking for badminton training for children
**Primary Device:** Mobile phones (mobile-first design)
**Languages:** English (default), 中文, Bahasa Malaysia

## Tech Stack

- **Framework**: Next.js 16 with App Router (`src/app/`)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 (config in `globals.css` via `@theme`)
- **Icons**: lucide-react
- **Forms**: react-hook-form
- **Email**: @emailjs/browser
- **Package Manager**: npm

## Brand Colors

```
Primary Black:    #000000 (headings, main text)
Gold Accent:      #D4AF37 (buttons, highlights, achievements)
White Background: #FFFFFF (main background)
Dark Gray:        #1F2937 (secondary text)
Light Gray:       #F3F4F6 (subtle backgrounds)
```

Tailwind CSS custom theme tokens defined in `src/app/globals.css`:
- `--color-gold`, `--color-dark-gray`, `--color-light-gray`

## Project Structure

```
src/
├── app/              # Next.js App Router
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page (assembles all sections)
│   └── globals.css   # Global styles + Tailwind theme
├── components/       # React components (one per section)
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Schedule.tsx
│   ├── Coaches.tsx
│   ├── Achievements.tsx
│   ├── Videos.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/             # Static data
│   ├── coaches.ts
│   ├── schedule.ts
│   └── translations.ts
├── lib/              # Utilities
│   └── utils.ts
└── types/            # TypeScript type definitions
    └── index.ts
```

## Design Rules

- Mobile-first responsive design
- Clean white background, black text, gold accents
- No dark theme (white/light only)
- Minimum touch target: 48x48px
- Minimum font size: 16px
- No heavy animations or gradients
- Professional, sporty, premium feel

## Trilingual Support

- English (default), Chinese (中文), Bahasa Malaysia
- All UI text must go through `src/data/translations.ts`
- Language switcher in Navbar
- Never hardcode display text in components

## Commands

- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run lint` - Run ESLint

## Rules

- All components are client-side (`"use client"`) unless purely static
- Keep components focused - one section per file
- Use `@/` import alias for all internal imports
- Images use Next.js `<Image>` component
- All text content must support trilingual translations
- Commit after each completed feature
