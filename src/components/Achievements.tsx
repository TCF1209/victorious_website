'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { Trophy, ChevronDown, User } from 'lucide-react';
import { Language } from '@/types';
import { translations } from '@/data/translations';
import { studentAchievements } from '@/data/achievements';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface AchievementsProps {
  language: Language;
}

type PlacementType = 'champion' | '1st_runner_up' | '2nd_runner_up';

const placementStyles: Record<PlacementType, { bg: string; text: string; border: string }> = {
  champion: { bg: 'bg-gold/10', text: 'text-gold', border: 'border-gold' },
  '1st_runner_up': { bg: 'bg-gray-100', text: 'text-gray-500', border: 'border-gray-400' },
  '2nd_runner_up': { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-600' },
};

const placementLabel: Record<PlacementType, Record<Language, string>> = {
  champion: { en: 'Champion', zh: '冠军', ms: 'Juara' },
  '1st_runner_up': { en: '1st Runner-up', zh: '亚军', ms: 'Naib Johan' },
  '2nd_runner_up': { en: '2nd Runner-up', zh: '季军', ms: 'Naib Johan Kedua' },
};

const achievements = [
  {
    id: '1',
    image: '/images/student_achievements/Tan_Jayden_Kejohanan_Badminton_Piala_Datuk_Bandar_MBDK_2025_Boy_Double_13_Champion.jpeg',
    placement: 'champion' as PlacementType,
    name: 'Tan Jayden',
    category: {
      en: 'Boy Double U13',
      zh: '男子U13双打',
      ms: 'Beregu Lelaki B13',
    },
    tournament: {
      en: 'Kejohanan Badminton Piala Datuk Bandar MBDK 2025',
      zh: '2025年MBDK拿督市长杯羽毛球锦标赛',
      ms: 'Kejohanan Badminton Piala Datuk Bandar MBDK 2025',
    },
  },
  {
    id: '2',
    image: '/images/student_achievements/Chang_Sven_Sen_Astrox_Tournament_2026_2nd_Runner_up.jpeg',
    placement: '2nd_runner_up' as PlacementType,
    name: 'Chang Sven Sen',
    category: {
      en: '',
      zh: '',
      ms: '',
    },
    tournament: {
      en: 'Astrox Tournament 2026',
      zh: '2026年Astrox锦标赛',
      ms: 'Kejohanan Astrox 2026',
    },
  },
  {
    id: '3',
    image: '/images/student_achievements/Lim_Jayden_Klang_Master_Challenge_Badminton_Tournament_2026_Boy_Double_17_1st_Runner_Up.jpeg',
    placement: '1st_runner_up' as PlacementType,
    name: 'Lim Jayden',
    category: {
      en: 'Boy Double U17',
      zh: '男子U17双打',
      ms: 'Beregu Lelaki B17',
    },
    tournament: {
      en: 'Klang Master Challenge Badminton Tournament 2026',
      zh: '2026年巴生大师挑战赛羽毛球锦标赛',
      ms: 'Kejohanan Badminton Klang Master Challenge 2026',
    },
  },
  {
    id: '4',
    image: '/images/student_achievements/Lok_Zhi_Hui_Four_Season_Badminton_Championship_Girl_Single_U18_2nd_Runner_Up.jpeg',
    placement: '2nd_runner_up' as PlacementType,
    name: 'Lok Zhi Hui',
    category: {
      en: 'Girl Single U18',
      zh: '女子U18单打',
      ms: 'Perseorangan Perempuan B18',
    },
    tournament: {
      en: 'Four Season Badminton Championship',
      zh: '四季羽毛球锦标赛',
      ms: 'Kejohanan Badminton Four Season',
    },
  },
];

const medalEmoji = { gold: '🥇', silver: '🥈', bronze: '🥉' } as const;

export default function Achievements({ language }: AchievementsProps) {
  const t = translations[language];
  const ref = useScrollReveal<HTMLElement>();
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [openStudents, setOpenStudents] = useState<Set<string>>(new Set());
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set(['junior', 'senior']));
  const [imgErrors, setImgErrors] = useState<Set<string>>(new Set());

  const toggleStudent = (index: string) => {
    setOpenStudents((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const toggleGroup = (key: string) => {
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <>
      <section id="achievements" ref={ref} className="scroll-reveal bg-light-gray py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-black sm:text-4xl">
            {t.achievements_title}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement) => {
              const style = placementStyles[achievement.placement];
              return (
                <div
                  key={achievement.id}
                  className="rounded-lg border-2 border-black/15 bg-white p-4 shadow-sm"
                >
                  <button
                    onClick={() => setZoomedImage(achievement.image)}
                    className="block w-full cursor-pointer overflow-hidden rounded"
                  >
                    <div className="relative aspect-square">
                      <Image
                        src={achievement.image}
                        alt={achievement.name}
                        fill
                        className="object-cover object-top transition-transform hover:scale-105"
                      />
                    </div>
                  </button>
                  <div className="mt-3 text-center">
                    <p className="text-base font-bold text-black">{achievement.name}</p>
                    <p className="mt-1 text-xs text-dark-gray">
                      {achievement.tournament[language]}
                    </p>
                    {achievement.category[language] && (
                      <p className="mt-0.5 text-xs text-dark-gray">
                        {achievement.category[language]}
                      </p>
                    )}
                    <span className={`mt-2 inline-flex items-center gap-1 rounded-full ${style.bg} px-3 py-1 text-xs font-bold ${style.text}`}>
                      <Trophy size={12} />
                      {placementLabel[achievement.placement][language]}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Full Results Accordion */}
          <h3 className="mt-16 text-center text-2xl font-bold text-gold">
            {t.achievements_full_results}
          </h3>

          {[
            { key: 'junior', label: t.achievements_junior_players, students: studentAchievements.filter((s) => parseInt(s.age) < 18).sort((a, b) => parseInt(a.age) - parseInt(b.age) || a.name.localeCompare(b.name)) },
            { key: 'senior', label: t.achievements_senior_players, students: studentAchievements.filter((s) => parseInt(s.age) >= 18).sort((a, b) => parseInt(a.age) - parseInt(b.age) || a.name.localeCompare(b.name)) },
          ].map((group) => (
            <div key={group.key} className="mt-8">
              <button
                onClick={() => toggleGroup(group.key)}
                className="flex w-full items-center gap-2 text-left"
              >
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-gold transition-transform ${openGroups.has(group.key) ? 'rotate-180' : ''}`}
                />
                <h4 className="text-lg font-bold text-black">{group.label}</h4>
              </button>
              {openGroups.has(group.key) && <div className="mt-3 space-y-2">
                {group.students.map((student) => {
                  const key = student.name;
                  const isOpen = openStudents.has(key);
                  const goldCount = student.results.filter((r) => r.medal === 'gold').length;
                  const silverCount = student.results.filter((r) => r.medal === 'silver').length;
                  const bronzeCount = student.results.filter((r) => r.medal === 'bronze').length;

                  return (
                    <div key={key} className="overflow-hidden rounded-lg bg-white shadow-sm">
                      <button
                        onClick={() => toggleStudent(key)}
                        className="flex w-full items-center justify-between p-4 text-left"
                      >
                        <div className="flex min-w-0 flex-1 items-center gap-3">
                          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                            {!imgErrors.has(key) ? (
                              <Image
                                src={student.image}
                                alt={student.name}
                                fill
                                className="object-cover"
                                onError={() => setImgErrors((prev) => new Set(prev).add(key))}
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center">
                                <User size={20} className="text-gray-400" />
                              </div>
                            )}
                          </div>
                          <div className="min-w-0">
                            <span className="font-bold text-black">{student.name}, {student.age}</span>
                            <span className="ml-2 text-sm text-dark-gray">
                              {goldCount > 0 && `🥇×${goldCount} `}
                              {silverCount > 0 && `🥈×${silverCount} `}
                              {bronzeCount > 0 && `🥉×${bronzeCount}`}
                            </span>
                          </div>
                        </div>
                        <ChevronDown
                          size={20}
                          className={`ml-2 shrink-0 text-dark-gray transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {isOpen && (
                        <div className="border-t border-gray-100 px-4 pb-4 pt-2 space-y-1">
                          {student.results.map((r, i) => (
                            <p key={i} className="text-sm text-dark-gray">
                              • {r.tournament} {medalEmoji[r.medal]}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>}
            </div>
          ))}
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
