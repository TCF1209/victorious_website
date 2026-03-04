'use client';

import { useState, useEffect, useCallback } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '@/types';
import { translations } from '@/data/translations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface TestimonialsProps {
  language: Language;
}

const testimonials = [
  {
    id: '1',
    name: 'Charmaine',
    date: 'Jan 2024',
    description: {
      en: 'Parent of two children competing at school and external Bakat Baru level',
      zh: '两个孩子在学校和外部Bakat Baru级别比赛的家长',
      ms: 'Ibu bapa kepada dua anak yang bertanding di peringkat sekolah dan Bakat Baru',
    },
    quote: {
      en: 'Thank you for the efforts, he has improved a lot, this is a feedback from his PE teacher.',
      zh: 'Thank you for the efforts, he has improved a lot, this is a feedback from his PE teacher.',
      ms: 'Thank you for the efforts, he has improved a lot, this is a feedback from his PE teacher.',
    },
  },
  {
    id: '2',
    name: 'Jovie Lim',
    date: 'Feb 2025',
    description: {
      en: 'Adult player competing at Bakat Baru level',
      zh: '在Bakat Baru级别比赛的成人球员',
      ms: 'Pemain dewasa yang bertanding di peringkat Bakat Baru',
    },
    quote: {
      en: 'You all helped me improve my skills on the court, but you have also taught me valuable lessons about perseverance, discipline and sportsmanship. Every training session was sometimes tiring, but I always felt happy and fulfilled because I knew I was learning and improving with each of you.',
      zh: 'You all helped me improve my skills on the court, but you have also taught me valuable lessons about perseverance, discipline and sportsmanship. Every training session was sometimes tiring, but I always felt happy and fulfilled because I knew I was learning and improving with each of you.',
      ms: 'You all helped me improve my skills on the court, but you have also taught me valuable lessons about perseverance, discipline and sportsmanship. Every training session was sometimes tiring, but I always felt happy and fulfilled because I knew I was learning and improving with each of you.',
    },
  },
  {
    id: '3',
    name: 'Mr Ting / Ting Kok Heng',
    date: 'Dec 2022',
    description: {
      en: 'Parent whose son won several state level tournaments',
      zh: '儿子赢得多个州级锦标赛的家长',
      ms: 'Ibu bapa yang anaknya memenangi beberapa kejohanan peringkat negeri',
    },
    quote: {
      en: 'Special thanks to Coach Hong Woon (founder of Victorious BA) for your dedication in grooming Damien for his badminton skills. You made 2022 a memorable year for us, especially for Damien, with a total of 12 medals secured. I wish you and your academy great success in 2023!',
      zh: 'Special thanks to Coach Hong Woon (founder of Victorious BA) for your dedication in grooming Damien for his badminton skills. You made 2022 a memorable year for us, especially for Damien, with a total of 12 medals secured. I wish you and your academy great success in 2023!',
      ms: 'Special thanks to Coach Hong Woon (founder of Victorious BA) for your dedication in grooming Damien for his badminton skills. You made 2022 a memorable year for us, especially for Damien, with a total of 12 medals secured. I wish you and your academy great success in 2023!',
    },
  },
  {
    id: '4',
    name: 'Alicia Goh',
    date: 'Feb 2020',
    description: {
      en: 'Parent of a child who just started their badminton journey',
      zh: '刚开始羽毛球之旅的孩子的家长',
      ms: 'Ibu bapa kepada anak yang baru memulakan perjalanan badminton',
    },
    quote: {
      en: 'Great & dedicated coach!!',
      zh: 'Great & dedicated coach!!',
      ms: 'Great & dedicated coach!!',
    },
  },
  {
    id: '5',
    name: 'lexbluezz',
    date: 'Dec 2022',
    description: {
      en: 'Adult player looking to improve further',
      zh: '希望进一步提升的成人球员',
      ms: 'Pemain dewasa yang ingin meningkatkan lagi',
    },
    quote: {
      en: 'Last training of 2022! Thank you, Coach, for the guidance over the last few months. The effort truly paid off! Now it\'s time to take on more social games!',
      zh: 'Last training of 2022! Thank you, Coach, for the guidance over the last few months. The effort truly paid off! Now it\'s time to take on more social games!',
      ms: 'Last training of 2022! Thank you, Coach, for the guidance over the last few months. The effort truly paid off! Now it\'s time to take on more social games!',
    },
  },
  {
    id: '6',
    name: 'Alicia Khor',
    date: 'Jul 2024',
    description: {
      en: 'Parent of two children competing at school and external Bakat Baru level',
      zh: '两个孩子在学校和外部Bakat Baru级别比赛的家长',
      ms: 'Ibu bapa kepada dua anak yang bertanding di peringkat sekolah dan Bakat Baru',
    },
    quote: {
      en: 'Thank you, Coach Hong Woon, for your guidance and dedication all this while. ❤️❤️❤️',
      zh: 'Thank you, Coach Hong Woon, for your guidance and dedication all this while. ❤️❤️❤️',
      ms: 'Thank you, Coach Hong Woon, for your guidance and dedication all this while. ❤️❤️❤️',
    },
  },
  {
    id: '7',
    name: 'Gan ZK',
    date: 'Dec 2024',
    description: {
      en: 'Student who won multiple state level tournaments including MSSD and MSSS',
      zh: '赢得多个州级锦标赛包括MSSD和MSSS的学生',
      ms: 'Pelajar yang memenangi pelbagai kejohanan peringkat negeri termasuk MSSD dan MSSS',
    },
    quote: {
      en: 'I am truly grateful for your coaching and guidance over these two years. Under your training, my badminton skills have improved tremendously. You have always been so kind and supportive — thank you so much, Coach!',
      zh: 'I am truly grateful for your coaching and guidance over these two years. Under your training, my badminton skills have improved tremendously. You have always been so kind and supportive — thank you so much, Coach!',
      ms: 'I am truly grateful for your coaching and guidance over these two years. Under your training, my badminton skills have improved tremendously. You have always been so kind and supportive — thank you so much, Coach!',
    },
  },
];

export default function Testimonials({ language }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const t = translations[language];
  const ref = useScrollReveal<HTMLElement>();

  const goTo = useCallback((index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 200);
  }, []);

  const next = useCallback(() => {
    goTo((activeIndex + 1) % testimonials.length);
  }, [activeIndex, goTo]);

  const prev = useCallback(() => {
    goTo((activeIndex - 1 + testimonials.length) % testimonials.length);
  }, [activeIndex, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const testimonial = testimonials[activeIndex];

  return (
    <section ref={ref} className="scroll-reveal py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-black sm:text-4xl">
          {t.testimonials_title}
        </h2>
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="relative flex items-center gap-3">
            {/* Left arrow */}
            <button
              onClick={prev}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-dark-gray shadow-sm transition-colors hover:border-gold hover:text-gold"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Quote card */}
            <div
              className={`relative flex-1 rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-opacity duration-200 ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <Quote size={32} className="absolute top-4 left-4 text-gold/20" />
              <p className="relative z-10 text-center text-lg italic leading-relaxed text-dark-gray">
                &ldquo;{testimonial.quote[language]}&rdquo;
              </p>
              <div className="mt-6 text-center">
                <p className="font-bold text-black">
                  {testimonial.name}
                  {testimonial.date && (
                    <span className="ml-2 text-sm font-normal text-gray-400">
                      ({testimonial.date})
                    </span>
                  )}
                </p>
                <p className="mt-1 text-sm font-medium text-gold">
                  {testimonial.description[language]}
                </p>
              </div>
            </div>

            {/* Right arrow */}
            <button
              onClick={next}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-dark-gray shadow-sm transition-colors hover:border-gold hover:text-gold"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots with counter */}
          <div className="mt-6 flex flex-col items-center gap-3">
            <div className="flex justify-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? 'w-8 bg-gold' : 'w-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <p className="text-xs text-gray-400">
              {activeIndex + 1} / {testimonials.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
