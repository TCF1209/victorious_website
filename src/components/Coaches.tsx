'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { X, Award } from 'lucide-react';
import { Language, Coach } from '@/types';
import { translations } from '@/data/translations';
import { coaches } from '@/data/coaches';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface CoachesProps {
  language: Language;
}

export default function Coaches({ language }: CoachesProps) {
  const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);
  const t = translations[language];
  const ref = useScrollReveal<HTMLElement>();

  return (
    <>
      <section id="coaches" ref={ref} className="scroll-reveal py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-black sm:text-4xl">
            {t.coaches_title}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coaches.map((coach) => (
              <div
                key={coach.id}
                className="rounded-lg bg-white p-6 shadow-sm border border-gray-100"
              >
                <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border-2 border-gold/30">
                  <Image
                    src={coach.photo}
                    alt={coach.name}
                    width={112}
                    height={112}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-center text-lg font-bold text-black">
                  {coach.name}
                </h3>
                <p className="text-center text-sm font-medium text-gold">
                  {coach.title[language]}
                </p>
                <ul className="mt-4 space-y-1">
                  {coach.featuredAchievements[language].map((achievement, idx) => (
                    <li key={idx} className="text-sm text-dark-gray">
                      • {achievement}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedCoach(coach)}
                  className="mt-4 w-full min-h-[48px] rounded-full border-2 border-gold px-4 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-white"
                >
                  {t.coaches_view_more}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coach Detail Modal - portaled to body to avoid transform stacking context */}
      {selectedCoach && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 md:items-center md:p-4"
          onClick={() => setSelectedCoach(null)}
        >
          <div
            className="max-h-[85vh] w-full overflow-y-auto rounded-t-2xl bg-white p-6 md:max-w-lg md:rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-gold/30">
                  <Image
                    src={selectedCoach.photo}
                    alt={selectedCoach.name}
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">{selectedCoach.name}</h3>
                  <p className="text-sm font-medium text-gold">
                    {selectedCoach.title[language]}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedCoach(null)}
                className="shrink-0 p-2"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>
            <p className="mt-4 text-dark-gray">{selectedCoach.bio[language]}</p>
            <h4 className="mt-6 font-bold text-black">Achievements</h4>
            <ul className="mt-2 space-y-2">
              {selectedCoach.fullAchievements[language].map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-dark-gray">
                  <Award size={16} className="mt-0.5 shrink-0 text-gold" />
                  {achievement}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setSelectedCoach(null)}
              className="mt-6 w-full min-h-[48px] rounded-full bg-gold px-4 py-2 font-semibold text-white transition-colors hover:bg-gold-dark"
            >
              {t.coaches_close}
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
