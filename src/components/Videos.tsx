'use client';

import { Play } from 'lucide-react';
import { Language } from '@/types';
import { translations } from '@/data/translations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface VideosProps {
  language: Language;
}

const videos = [
  {
    id: '1',
    title: {
      en: 'Training Session Highlights',
      zh: '训练课程精彩片段',
      ms: 'Sorotan Sesi Latihan',
    },
  },
  {
    id: '2',
    title: {
      en: 'Technique Demonstration',
      zh: '技术示范',
      ms: 'Demonstrasi Teknik',
    },
  },
  {
    id: '3',
    title: {
      en: 'Competition Highlights',
      zh: '比赛精彩片段',
      ms: 'Sorotan Pertandingan',
    },
  },
];

export default function Videos({ language }: VideosProps) {
  const t = translations[language];
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="videos" ref={ref} className="scroll-reveal py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-black sm:text-4xl">
          {t.videos_title}
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <div key={video.id} className="group">
              <div className="flex aspect-video items-center justify-center rounded-lg border-2 border-gold/20 bg-light-gray transition-colors group-hover:border-gold/40">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/90 text-white transition-transform group-hover:scale-110">
                  <Play size={28} fill="white" />
                </div>
              </div>
              <p className="mt-3 text-center text-sm font-medium text-dark-gray">
                {video.title[language]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
