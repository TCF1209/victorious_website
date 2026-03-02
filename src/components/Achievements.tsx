'use client';

import { Trophy } from 'lucide-react';
import { Language } from '@/types';
import { translations } from '@/data/translations';

interface AchievementsProps {
  language: Language;
}

const achievements = [
  {
    id: '1',
    caption: {
      en: 'Muhammad Amin - State Championship U12 Champion, 2024',
      zh: 'Muhammad Amin - 2024年U12州冠军',
      ms: 'Muhammad Amin - Juara Kejohanan Negeri U12, 2024',
    },
  },
  {
    id: '2',
    caption: {
      en: 'Team Victorious - Inter-School Gold Medal',
      zh: 'Victorious 队 - 校际金牌',
      ms: 'Team Victorious - Pingat Emas Pertandingan Antara Sekolah',
    },
  },
  {
    id: '3',
    caption: {
      en: 'Siti Nurhaliza - National Championship State Representative',
      zh: 'Siti Nurhaliza - 全国锦标赛州代表',
      ms: 'Siti Nurhaliza - Wakil Negeri Kejohanan Kebangsaan',
    },
  },
  {
    id: '4',
    caption: {
      en: 'Lee Jun Wei - District U15 Runner-up, 2025',
      zh: 'Lee Jun Wei - 2025年U15区亚军',
      ms: 'Lee Jun Wei - Naib Juara Daerah U15, 2025',
    },
  },
];

export default function Achievements({ language }: AchievementsProps) {
  const t = translations[language];

  return (
    <section id="achievements" className="bg-light-gray py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-black sm:text-4xl">
          {t.achievements_title}
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="rounded-lg border-2 border-gold/20 bg-white p-4 shadow-sm"
            >
              <div className="flex aspect-square items-center justify-center rounded bg-light-gray">
                <Trophy size={48} className="text-gold" />
              </div>
              <p className="mt-3 text-center text-sm font-medium text-dark-gray">
                {achievement.caption[language]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
