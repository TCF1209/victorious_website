'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Language } from '@/types';
import { translations } from '@/data/translations';

interface HeroProps {
  language: Language;
}

const heroImages = [
  '/images/hero/hero-1.jpeg',
  '/images/hero/hero-2.jpeg',
  '/images/hero/hero-3.jpeg',
];

export default function Hero({ language }: HeroProps) {
  const t = translations[language];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pb-16 pt-16">
      {/* Background images with crossfade */}
      {heroImages.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={index === 0}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="hero-animate-heading text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl">
          Victorious Badminton Academy
        </h1>
        <p className="hero-animate-tagline mt-4 text-xl font-medium text-gold drop-shadow-md sm:text-2xl">
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
            className="inline-flex min-h-[48px] items-center rounded-full border-2 border-white px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-white hover:text-black"
          >
            {t.hero_contact}
          </a>
        </div>

        {/* Slide indicators */}
        <div className="hero-animate-buttons mt-10 flex justify-center gap-2">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-gold' : 'w-2 bg-white/50'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
