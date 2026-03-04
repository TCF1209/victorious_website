'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { MapPin, Clock, User } from 'lucide-react';
import { Language } from '@/types';
import { translations } from '@/data/translations';
import { trainingLocations } from '@/data/schedule';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ScheduleProps {
  language: Language;
}

export default function Schedule({ language }: ScheduleProps) {
  const t = translations[language];
  const ref = useScrollReveal<HTMLElement>();
  const [zoomedPhoto, setZoomedPhoto] = useState<string | null>(null);

  return (
    <>
      <section id="schedule" ref={ref} className="scroll-reveal bg-light-gray py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-black sm:text-4xl">
            {t.schedule_title}
          </h2>
          <h3 className="mt-4 text-center text-xl font-bold text-gold">
            {t.schedule_group_note}
          </h3>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {trainingLocations.map((location) => (
              <div
                key={location.id}
                className="overflow-hidden rounded-lg bg-white shadow-sm"
              >
                <button
                  onClick={() => setZoomedPhoto(location.image)}
                  className="relative h-48 w-full cursor-pointer overflow-hidden"
                >
                  <Image
                    src={location.image}
                    alt={location.name}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </button>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-lg font-bold text-black">
                    <MapPin size={20} className="shrink-0 text-gold" />
                    {location.name}
                  </div>
                  <div className="mt-4 space-y-3">
                    {location.sessions.map((session, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-dark-gray">
                        <Clock size={16} className="shrink-0 text-gold" />
                        <span className="font-medium">{session.day[language]}</span>
                        <span className="text-sm">{session.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Personal Training */}
          <h3 className="mt-16 text-center text-xl font-bold text-gold">
            {t.schedule_personal_note}
          </h3>
          <div className="mx-auto mt-6 max-w-3xl overflow-hidden rounded-lg bg-white shadow-sm">
            <div className="grid md:grid-cols-2">
              <div className="flex items-center justify-center bg-white">
                <video
                  src="/images/location/1-on-1_training_video.mp4"
                  poster="/images/location/1-on-1_training_video_poster.jpeg"
                  controls
                  playsInline
                  preload="metadata"
                  className="aspect-[9/16] max-h-[400px] object-contain"
                />
              </div>
              <div className="flex flex-col justify-center border-t border-black/15 p-6 md:border-l md:border-t-0 md:p-8">
                <h3 className="text-xl font-bold text-black">
                  {t.schedule_personal_note}
                </h3>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3 text-dark-gray">
                    <Clock size={20} className="shrink-0 text-gold" />
                    <span className="font-medium">{t.schedule_personal_timing}</span>
                  </div>
                  <div className="flex items-center gap-3 text-dark-gray">
                    <MapPin size={20} className="shrink-0 text-gold" />
                    <span className="font-medium">{t.schedule_personal_location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-dark-gray">
                    <User size={20} className="shrink-0 text-gold" />
                    <span className="font-medium">{t.schedule_personal_availability}</span>
                  </div>
                  <div className="flex items-start gap-3 text-dark-gray">
                    <MapPin size={20} className="mt-0.5 shrink-0 text-gold" />
                    <div>
                      <span className="font-medium">{t.schedule_personal_recommended}:</span>
                      <div className="mt-1 space-y-1 text-sm">
                        <p>1) Smash2u Sports Hub, Giant, Bukit Tinggi</p>
                        <p>2) SBA Forum, Setia Alam</p>
                        <p>3) YTP Sports Arena, Taman Klang Jaya</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              alt="Location photo"
              fill
              className="rounded-2xl object-cover"
            />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
