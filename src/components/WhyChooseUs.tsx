'use client';

import { Award, Users, Trophy, BookOpen, Swords } from 'lucide-react';
import { Language } from '@/types';
import { translations } from '@/data/translations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface WhyChooseUsProps {
  language: Language;
}

const features = [
  { key: 'why_certified' as const, icon: Award },
  { key: 'why_small_class' as const, icon: Users },
  { key: 'why_competition' as const, icon: Trophy },
  { key: 'why_structured' as const, icon: BookOpen },
  { key: 'why_sparring' as const, icon: Swords },
];

export default function WhyChooseUs({ language }: WhyChooseUsProps) {
  const t = translations[language];
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="scroll-reveal bg-light-gray py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-black sm:text-4xl">
          {t.why_title}
        </h2>
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            const titleKey = feature.key as keyof typeof t;
            const descKey = `${feature.key}_desc` as keyof typeof t;
            return (
              <div
                key={feature.key}
                className="w-full rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                  <Icon size={28} className="text-gold" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-black">
                  {t[titleKey]}
                </h3>
                <p className="mt-2 text-sm text-dark-gray">
                  {t[descKey]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
