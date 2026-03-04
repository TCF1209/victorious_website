'use client';

import Image from 'next/image';
import { MapPin, Clock } from 'lucide-react';
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

  return (
    <section id="schedule" ref={ref} className="scroll-reveal bg-light-gray py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-black sm:text-4xl">
          {t.schedule_title}
        </h2>
        <p className="mt-2 text-center text-sm font-medium text-gold">
          {t.schedule_group_note}
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {trainingLocations.map((location) => (
            <div
              key={location.id}
              className="overflow-hidden rounded-lg bg-white shadow-sm"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={location.image}
                  alt={location.name}
                  fill
                  className="object-cover"
                />
              </div>
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
      </div>
    </section>
  );
}
