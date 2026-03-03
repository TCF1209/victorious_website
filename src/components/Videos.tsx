'use client';

import { Language } from '@/types';
import { translations } from '@/data/translations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface VideosProps {
  language: Language;
}

const videos = [
  {
    id: '1',
    src: '/images/training_video/training-1.mp4',
    poster: '/images/training_video/video_poster.jpeg',
    title: {
      en: 'Mastering Forehand & Backhand — Training Program',
      zh: '正手与反手训练课程',
      ms: 'Menguasai Forehand & Backhand — Program Latihan',
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
        <div className="mx-auto mt-12 flex justify-center">
          {videos.map((video) => (
            <div key={video.id} className="w-full max-w-xs">
              <div className="overflow-hidden rounded-2xl border-2 border-gold/20 bg-black shadow-lg">
                <video
                  src={video.src}
                  poster={video.poster}
                  controls
                  playsInline
                  preload="metadata"
                  className="aspect-[9/16] w-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="mt-4 text-center text-sm font-medium text-dark-gray">
                {video.title[language]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
