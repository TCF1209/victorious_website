'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Language } from '@/types';
import { translations } from '@/data/translations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ActivitiesProps {
  language: Language;
}

const activityCategories = [
  {
    key: 'annual_dinner' as const,
    images: [
      '/images/annual_dinner/a_d_2026.jpeg',
      '/images/annual_dinner/a_d_2025.jpeg',
      '/images/annual_dinner/a_d_2024.jpeg',
      '/images/annual_dinner/a_d_2023.jpeg',
      '/images/annual_dinner/a_d_2022.jpeg',
      '/images/annual_dinner/a_d_2021.jpeg',
    ],
  },
  {
    key: 'short_trip' as const,
    images: [
      '/images/short_trip/s_t_2026.jpeg',
      '/images/short_trip/s_t_2025.jpeg',
      '/images/short_trip/s_t_2024.jpeg',
      '/images/short_trip/s_t_2023.jpeg',
      '/images/short_trip/s_t_2022.jpeg',
    ],
  },
  {
    key: 'friendly_match' as const,
    images: [
      '/images/friendly_match/friendly_match_1.jpeg',
      '/images/friendly_match/f_m_2.jpeg',
      '/images/friendly_match/f_m_3.jpeg',
      '/images/friendly_match/f_m_4.jpeg',
      '/images/friendly_match/f_m_5.jpeg',
      '/images/friendly_match/f_m_6.jpeg',
    ],
  },
];

function ImageCarousel({
  images,
  title,
  onImageClick,
}: {
  images: string[];
  title: string;
  onImageClick: (src: string) => void;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
    activeIndexRef.current = index;
  }, []);

  // Auto-play using ref to avoid re-creating interval on every index change
  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (activeIndexRef.current + 1) % images.length;
      setActiveIndex(nextIndex);
      activeIndexRef.current = nextIndex;
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const prev = () => {
    goTo((activeIndex - 1 + images.length) % images.length);
  };

  const next = () => {
    goTo((activeIndex + 1) % images.length);
  };

  return (
    <div>
      <h3 className="mb-4 text-center text-xl font-semibold text-gold">
        {title}
      </h3>

      <div className="relative flex items-center gap-3">
        {/* Left arrow */}
        <button
          onClick={prev}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-dark-gray shadow-sm transition-colors hover:border-gold hover:text-gold"
          aria-label="Previous photo"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Photo card - only current image rendered, instant swap */}
        <div
          className="relative flex-1 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
          style={{ contain: 'layout' }}
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              key={images[activeIndex]}
              src={images[activeIndex]}
              alt={`${title} photo ${activeIndex + 1}`}
              fill
              className="cursor-pointer object-cover"
              sizes="(max-width: 768px) 100vw, 700px"
              priority
              onClick={() => onImageClick(images[activeIndex])}
            />
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-dark-gray shadow-sm transition-colors hover:border-gold hover:text-gold"
          aria-label="Next photo"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots with counter */}
      <div className="mt-4 flex flex-col items-center gap-2">
        <div className="flex justify-center gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`h-3 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? 'w-8 bg-gold'
                  : 'w-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Photo ${idx + 1}`}
            />
          ))}
        </div>
        <p className="text-xs text-gray-400">
          {activeIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  );
}

export default function Activities({ language }: ActivitiesProps) {
  const t = translations[language];
  const ref = useScrollReveal<HTMLElement>();
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const titleMap: Record<string, string> = {
    annual_dinner: t.activities_annual_dinner,
    short_trip: t.activities_short_trip,
    friendly_match: t.activities_friendly_match,
  };

  return (
    <>
      <section id="activities" ref={ref} className="scroll-reveal py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-black sm:text-4xl">
            {t.activities_title}
          </h2>

          <div className="mx-auto mt-14 max-w-3xl space-y-14">
            {activityCategories.map((category) => (
              <ImageCarousel
                key={category.key}
                images={category.images}
                title={titleMap[category.key]}
                onImageClick={(src) => setLightboxSrc(src)}
              />
            ))}
          </div>
        </div>
      </section>

      {lightboxSrc &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setLightboxSrc(null)}
          >
            <button
              onClick={() => setLightboxSrc(null)}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="relative max-h-[90vh] max-w-[90vw]">
              <Image
                src={lightboxSrc}
                alt="Activity photo"
                width={1200}
                height={900}
                className="max-h-[90vh] w-auto rounded-lg object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
