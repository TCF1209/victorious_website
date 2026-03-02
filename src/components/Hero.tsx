'use client';

import { Language } from '@/types';
import { translations } from '@/data/translations';

interface HeroProps {
  language: Language;
}

export default function Hero({ language }: HeroProps) {
  const t = translations[language];

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-light-gray pb-16 pt-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="hero-animate-heading text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">
          Victorious Badminton Academy
        </h1>
        <p className="hero-animate-tagline mt-4 text-xl font-medium text-gold sm:text-2xl">
          {t.hero_tagline}
        </p>
        <div className="hero-animate-buttons mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="inline-flex min-h-[48px] items-center rounded-full bg-gold px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-gold-dark"
          >
            {t.hero_register}
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-[48px] items-center rounded-full border-2 border-black px-8 py-3 text-base font-semibold text-black transition-colors hover:bg-black hover:text-white"
          >
            {t.hero_contact}
          </a>
        </div>
      </div>
    </section>
  );
}
