'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { X, ChevronDown, User } from 'lucide-react';
import { Language } from '@/types';
import { translations } from '@/data/translations';
import { studentAchievements, StudentAchievement } from '@/data/achievements';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface AchievementsProps {
  language: Language;
}

const FEATURED_STUDENT_NAMES = [
  'Chang Sven Sen',
  'Tan Jayden',
  'Lok Zhi Hui',
  'Muhammad Azim',
  'Tan Zhen Hong',
  'Lim Jayden',
  'Low Zhe Kai',
  'Lee Siang Yau',
];

const FULL_RESULTS_STUDENT_NAMES = [
  'Chia Zhi Dong, Selangor State Player',
  'Edwin Lim Chong Hong',
  'Ong Yu Xun',
  'Lai Yoke Yeong',
  'Ong Kar Ming',
  'Ivan Goh',
  'Pang Tian You',
  'Gan Zhen Kang, Selangor State Player',
  'Darren Ng, Selangor State Player',
  'Chiau Jia Hao',
  'Tan Yee Yong',
  'Caroline Lim',
  'Yui Xi Ling',
  'Cham Tian Soon',
  'Lim Da Bin',
  'Brandon Ang',
  'Lim Aik Yuan',
  'Chew Zhong Jie',
  'Afiq Irfan',
];

const medalEmoji = { gold: '🥇', silver: '🥈', bronze: '🥉' } as const;

export default function Achievements({ language }: AchievementsProps) {
  const t = translations[language];
  const ref = useScrollReveal<HTMLElement>();
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [selectedStudent, setSelectedStudent] = useState<StudentAchievement | null>(null);
  const [openStudents, setOpenStudents] = useState<Set<string>>(new Set());
  const [imgErrors, setImgErrors] = useState<Set<string>>(new Set());

  const featuredStudents = FEATURED_STUDENT_NAMES.map(
    (name) => studentAchievements.find((s) => s.name === name)!
  );

  const fullResultsStudents = FULL_RESULTS_STUDENT_NAMES.map(
    (name) => studentAchievements.find((s) => s.name === name)!
  );

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

  return (
    <>
      <section id="achievements" ref={ref} className="scroll-reveal bg-light-gray py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-black sm:text-4xl">
            {t.achievements_title}
          </h2>

          {/* Featured Students Grid */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {featuredStudents.map((student) => {
              const goldCount = student.results.filter((r) => r.medal === 'gold').length;
              const silverCount = student.results.filter((r) => r.medal === 'silver').length;
              const bronzeCount = student.results.filter((r) => r.medal === 'bronze').length;
              const mostRecent = student.results[0];

              return (
                <div
                  key={student.name}
                  className="flex flex-col items-center rounded-lg border border-gray-100 bg-white p-4 shadow-sm"
                >
                  <button
                    onClick={() => setZoomedImage(student.image)}
                    className="h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-gold/30 cursor-pointer transition-transform hover:scale-105 sm:h-28 sm:w-28"
                  >
                    {!imgErrors.has(`featured-${student.name}`) ? (
                      <Image
                        src={student.image}
                        alt={student.name}
                        width={112}
                        height={112}
                        className="h-full w-full object-cover object-top"
                        onError={() =>
                          setImgErrors((prev) => new Set(prev).add(`featured-${student.name}`))
                        }
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gray-100">
                        <User size={32} className="text-gray-400" />
                      </div>
                    )}
                  </button>
                  <h3 className="mt-3 text-center text-sm font-bold text-black sm:text-base">
                    {student.name}
                  </h3>
                  <p className="mt-1 text-center text-xs text-dark-gray">
                    {goldCount > 0 && `${medalEmoji.gold}×${goldCount} `}
                    {silverCount > 0 && `${medalEmoji.silver}×${silverCount} `}
                    {bronzeCount > 0 && `${medalEmoji.bronze}×${bronzeCount}`}
                  </p>
                  <p className="mt-1 line-clamp-2 text-center text-xs text-dark-gray">
                    {mostRecent.tournament}
                  </p>
                  <div className="mt-auto pt-3">
                    <button
                      onClick={() => setSelectedStudent(student)}
                      className="min-h-[48px] rounded-full border-2 border-gold px-4 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-white"
                    >
                      {t.achievements_view_more}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Full Results Accordion */}
          <h3 className="mt-16 text-center text-2xl font-bold text-gold">
            {t.achievements_full_results}
          </h3>

          <div className="mt-8 space-y-2">
            {fullResultsStudents.map((student) => {
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
                      <div
                        className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100 cursor-pointer transition-transform hover:scale-110"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (!imgErrors.has(key)) setZoomedImage(student.image);
                        }}
                      >
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
                        <span className="font-bold text-black">{student.name}</span>
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

      {/* Student Detail Modal */}
      {selectedStudent && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 md:items-center md:p-4"
          onClick={() => setSelectedStudent(null)}
        >
          <div
            className="max-h-[85vh] w-full overflow-y-auto rounded-t-2xl bg-white p-6 md:max-w-lg md:rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-gold/30">
                  {!imgErrors.has(`modal-${selectedStudent.name}`) ? (
                    <Image
                      src={selectedStudent.image}
                      alt={selectedStudent.name}
                      width={64}
                      height={64}
                      className="h-full w-full object-cover object-top"
                      onError={() =>
                        setImgErrors((prev) => new Set(prev).add(`modal-${selectedStudent.name}`))
                      }
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gray-100">
                      <User size={28} className="text-gray-400" />
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">{selectedStudent.name}</h3>
                  <p className="text-sm text-dark-gray">
                    {(() => {
                      const g = selectedStudent.results.filter((r) => r.medal === 'gold').length;
                      const s = selectedStudent.results.filter((r) => r.medal === 'silver').length;
                      const b = selectedStudent.results.filter((r) => r.medal === 'bronze').length;
                      return (
                        <>
                          {g > 0 && `${medalEmoji.gold}×${g} `}
                          {s > 0 && `${medalEmoji.silver}×${s} `}
                          {b > 0 && `${medalEmoji.bronze}×${b}`}
                        </>
                      );
                    })()}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedStudent(null)}
                className="shrink-0 p-2"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>

            <h4 className="mt-6 font-bold text-black">{t.achievements_full_results}</h4>
            <ul className="mt-2 space-y-2">
              {selectedStudent.results.map((r, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-dark-gray">
                  <span className="mt-0.5 shrink-0">{medalEmoji[r.medal]}</span>
                  {r.tournament}
                </li>
              ))}
            </ul>

            <button
              onClick={() => setSelectedStudent(null)}
              className="mt-6 w-full min-h-[48px] rounded-full bg-gold px-4 py-2 font-semibold text-white transition-colors hover:bg-gold-dark"
            >
              {t.achievements_close}
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
