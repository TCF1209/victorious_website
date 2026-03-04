'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { X, Award, ChevronRight } from 'lucide-react';
import { Language, Coach } from '@/types';
import { translations } from '@/data/translations';
import { coaches } from '@/data/coaches';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface CoachesProps {
  language: Language;
}

function CoachCard({
  coach,
  language,
  onViewMore,
  onZoomPhoto,
}: {
  coach: Coach;
  language: Language;
  onViewMore: () => void;
  onZoomPhoto: () => void;
}) {
  const t = translations[language];
  return (
    <div className="flex flex-col rounded-lg bg-white p-5 shadow-sm border border-gray-100 h-full">
      <button
        onClick={onZoomPhoto}
        className="mx-auto block h-28 w-28 overflow-hidden rounded-full border-2 border-gold/30 cursor-pointer transition-transform hover:scale-105"
      >
        <Image
          src={coach.photo}
          alt={coach.name}
          width={112}
          height={112}
          className="h-full w-full object-cover object-top"
        />
      </button>
      <h3 className="mt-3 text-center text-base font-bold text-black">
        {coach.name}
      </h3>
      <p className="text-center text-sm font-medium text-gold">
        {coach.title[language]}
      </p>
      {coach.credentials[language].length > 0 && (
        <ul className="mt-3 space-y-1">
          {coach.credentials[language].slice(0, 3).map((cred, idx) => (
            <li key={idx} className="text-sm text-dark-gray">
              • {cred}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-auto pt-4">
        <button
          onClick={onViewMore}
          className="w-full min-h-[48px] rounded-full border-2 border-gold px-4 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-white"
        >
          {t.coaches_view_more}
        </button>
      </div>
    </div>
  );
}

function RoleGroupHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-14 mb-6 text-center text-xl font-bold text-black sm:text-2xl">
      {children}
    </h3>
  );
}

export default function Coaches({ language }: CoachesProps) {
  const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);
  const [zoomedPhoto, setZoomedPhoto] = useState<string | null>(null);
  const t = translations[language];
  const ref = useScrollReveal<HTMLElement>();

  const headCoach = coaches.find((c) => c.role === 'head')!;
  const assistantHeadCoach = coaches.find((c) => c.role === 'assistant_head')!;
  const seniorCoaches = coaches.filter((c) => c.role === 'senior');
  const juniorCoaches = coaches.filter((c) => c.role === 'junior');

  return (
    <>
      <section id="coaches" ref={ref} className="scroll-reveal py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-black sm:text-4xl">
            {t.coaches_title}
          </h2>

          {/* Head Coach - Featured */}
          <div className="mt-12 mx-auto max-w-3xl">
            <h3 className="mb-6 text-center text-xl font-bold text-black sm:text-2xl">
              {t.coaches_head_coach}
            </h3>
            <div className="rounded-xl bg-white p-6 shadow-md border-2 border-gold/20">
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                <button
                  onClick={() => setZoomedPhoto(headCoach.photo)}
                  className="shrink-0 h-36 w-36 overflow-hidden rounded-full border-3 border-gold/40 cursor-pointer transition-transform hover:scale-105"
                >
                  <Image
                    src={headCoach.photo}
                    alt={headCoach.name}
                    width={144}
                    height={144}
                    className="h-full w-full object-cover object-top"
                  />
                </button>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-black">
                    {headCoach.name}
                  </h3>
                  <p className="text-sm font-medium text-gold">
                    {headCoach.title[language]}
                  </p>
                  <ul className="mt-3 space-y-1">
                    {headCoach.credentials[language].map((cred, idx) => (
                      <li key={idx} className="text-sm text-dark-gray">
                        • {cred}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setSelectedCoach(headCoach)}
                    className="mt-4 inline-flex items-center gap-1 min-h-[48px] rounded-full border-2 border-gold px-6 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-white"
                  >
                    {t.coaches_view_more}
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Assistant Head Coach */}
          <RoleGroupHeading>{t.coaches_assistant_head_coach}</RoleGroupHeading>
          <div className="mx-auto max-w-xs">
            <CoachCard
              coach={assistantHeadCoach}
              language={language}
              onViewMore={() => setSelectedCoach(assistantHeadCoach)}
              onZoomPhoto={() => setZoomedPhoto(assistantHeadCoach.photo)}
            />
          </div>

          {/* Senior Coaches */}
          <RoleGroupHeading>{t.coaches_senior_coaches}</RoleGroupHeading>
          <div className="grid gap-6 grid-cols-2 lg:grid-cols-3">
            {seniorCoaches.map((coach) => (
              <CoachCard
                key={coach.id}
                coach={coach}
                language={language}
                onViewMore={() => setSelectedCoach(coach)}
                onZoomPhoto={() => setZoomedPhoto(coach.photo)}
              />
            ))}
          </div>

          {/* Junior Coaches */}
          <RoleGroupHeading>{t.coaches_junior_coaches}</RoleGroupHeading>
          <div className="mx-auto grid gap-6 grid-cols-2 max-w-2xl lg:max-w-xl">
            {juniorCoaches.map((coach) => (
              <CoachCard
                key={coach.id}
                coach={coach}
                language={language}
                onViewMore={() => setSelectedCoach(coach)}
                onZoomPhoto={() => setZoomedPhoto(coach.photo)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Photo Lightbox */}
      {zoomedPhoto && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setZoomedPhoto(null)}
        >
          <div className="relative h-[70vh] w-[70vh] max-h-[80vw] max-w-[80vw]">
            <Image
              src={zoomedPhoto}
              alt="Coach photo"
              fill
              className="rounded-2xl object-cover"
            />
          </div>
        </div>,
        document.body
      )}

      {/* Coach Detail Modal */}
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

            {/* Background / Credentials */}
            {selectedCoach.credentials[language].length > 0 && (
              <>
                <h4 className="mt-6 font-bold text-black">{t.coaches_background}</h4>
                <ul className="mt-2 space-y-2">
                  {selectedCoach.credentials[language].map((cred, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-dark-gray">
                      <ChevronRight size={16} className="mt-0.5 shrink-0 text-gold" />
                      {cred}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* Tournament Results */}
            {selectedCoach.tournamentResults.length > 0 && (
              <>
                <h4 className="mt-6 font-bold text-black">{t.coaches_tournament_results}</h4>
                <ul className="mt-2 space-y-2">
                  {selectedCoach.tournamentResults.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-dark-gray">
                      <Award size={16} className="mt-0.5 shrink-0 text-gold" />
                      {result}
                    </li>
                  ))}
                </ul>
              </>
            )}

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
