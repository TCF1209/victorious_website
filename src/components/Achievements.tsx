'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { Language } from '@/types';
import { translations } from '@/data/translations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface AchievementsProps {
  language: Language;
}

const achievements = [
  {
    id: '1',
    image: '/images/student_achievements/Tan_Jayden_Kejohanan_Badminton_Piala_Datuk_Bandar_MBDK_2025_Boy_Double_13_Champion.jpeg',
    caption: {
      en: 'Tan Jayden — Kejohanan Badminton Piala Datuk Bandar MBDK 2025, Boy Double U13 Champion',
      zh: 'Tan Jayden — 2025年MBDK拿督市长杯羽毛球锦标赛，男子U13双打冠军',
      ms: 'Tan Jayden — Kejohanan Badminton Piala Datuk Bandar MBDK 2025, Juara Beregu Lelaki B13',
    },
  },
  {
    id: '2',
    image: '/images/student_achievements/Chang_Sven_Sen_Astrox_Tournament_2026_2nd_Runner_up.jpeg',
    caption: {
      en: 'Chang Sven Sen — Astrox Tournament 2026, 2nd Runner-up',
      zh: 'Chang Sven Sen — 2026年Astrox锦标赛，季军',
      ms: 'Chang Sven Sen — Kejohanan Astrox 2026, Naib Johan Kedua',
    },
  },
  {
    id: '3',
    image: '/images/student_achievements/Lim_Jayden_Klang_Master_Challenge_Badminton_Tournament_2026_Boy_Double_17_1st_Runner_Up.jpeg',
    caption: {
      en: 'Lim Jayden — Klang Master Challenge Badminton Tournament 2026, Boy Double U17 1st Runner-up',
      zh: 'Lim Jayden — 2026年巴生大师挑战赛羽毛球锦标赛，男子U17双打亚军',
      ms: 'Lim Jayden — Kejohanan Badminton Klang Master Challenge 2026, Naib Johan Beregu Lelaki B17',
    },
  },
  {
    id: '4',
    image: '/images/student_achievements/Lok_Zhi_Hui_Four_Season_Badminton_Championship_Girl_Single_U18_2nd_Runner_Up.jpeg',
    caption: {
      en: 'Lok Zhi Hui — Four Season Badminton Championship, Girl Single U18 2nd Runner-up',
      zh: 'Lok Zhi Hui — 四季羽毛球锦标赛，女子U18单打季军',
      ms: 'Lok Zhi Hui — Kejohanan Badminton Four Season, Naib Johan Kedua Perseorangan Perempuan B18',
    },
  },
];

export default function Achievements({ language }: AchievementsProps) {
  const t = translations[language];
  const ref = useScrollReveal<HTMLElement>();
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  return (
    <>
      <section id="achievements" ref={ref} className="scroll-reveal bg-light-gray py-20">
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
                <button
                  onClick={() => setZoomedImage(achievement.image)}
                  className="block w-full cursor-pointer overflow-hidden rounded"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={achievement.image}
                      alt={achievement.caption.en}
                      fill
                      className="object-cover object-top transition-transform hover:scale-105"
                    />
                  </div>
                </button>
                <p className="mt-3 text-center text-sm font-medium text-dark-gray">
                  {achievement.caption[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      {zoomedImage && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setZoomedImage(null)}
        >
          <div className="relative h-[80vh] w-full max-w-lg">
            <Image
              src={zoomedImage}
              alt="Achievement photo"
              fill
              className="rounded-2xl object-contain"
            />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
