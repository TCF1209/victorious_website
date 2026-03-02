'use client';

import { Language } from '@/types';
import { translations } from '@/data/translations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface AboutProps {
  language: Language;
}

export default function About({ language }: AboutProps) {
  const t = translations[language];
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className="scroll-reveal py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-black sm:text-4xl">
          {t.about_title}
        </h2>
        <div className="mx-auto mt-8 max-w-3xl space-y-4 text-center text-lg text-dark-gray">
          <p>{t.about_p1}</p>
          <p>{t.about_p2}</p>
        </div>
      </div>
    </section>
  );
}
