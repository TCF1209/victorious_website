'use client';

import { useState } from 'react';
import { X, Award } from 'lucide-react';
import { Language, Coach } from '@/types';
import { translations } from '@/data/translations';
import { coaches } from '@/data/coaches';

interface CoachesProps {
  language: Language;
}

export default function Coaches({ language }: CoachesProps) {
  const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);
  const t = translations[language];

  return (
    <section id="coaches" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-black sm:text-4xl">
          {t.coaches_title}
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coaches.map((coach) => (
            <div
              key={coach.id}
              className="rounded-lg bg-white p-6 shadow-sm border border-gray-100"
            >
              <div className="mx-auto h-24 w-24 rounded-full bg-light-gray flex items-center justify-center">
                <Award size={32} className="text-gold" />
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

      {/* Coach Detail Modal */}
      {selectedCoach && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setSelectedCoach(null)}
        >
          <div
            className="max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-lg bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-black">{selectedCoach.name}</h3>
              <button
                onClick={() => setSelectedCoach(null)}
                className="p-2"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>
            <p className="text-sm font-medium text-gold">
              {selectedCoach.title[language]}
            </p>
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
        </div>
      )}
    </section>
  );
}
