'use client';

import { useState, useEffect, useCallback } from 'react';
import { Quote } from 'lucide-react';
import { Language } from '@/types';
import { translations } from '@/data/translations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface TestimonialsProps {
  language: Language;
}

const testimonials = [
  {
    id: '1',
    parent: {
      en: 'Mrs. Tan Wei Lin',
      zh: '陈伟玲女士',
      ms: 'Puan Tan Wei Lin',
    },
    quote: {
      en: 'My son has improved tremendously since joining the academy. The coaches are dedicated and the structured training really makes a difference. He went from a complete beginner to winning his first medal in just one year!',
      zh: '自从加入学院以来，我儿子进步了很多。教练们非常敬业，系统化的训练确实有很大帮助。他从零基础到在一年内赢得了第一枚奖牌！',
      ms: 'Anak saya telah menunjukkan peningkatan yang luar biasa sejak menyertai akademi ini. Jurulatih sangat berdedikasi dan latihan berstruktur benar-benar membuat perbezaan. Dia bermula sebagai pemula dan berjaya memenangi pingat pertamanya dalam setahun sahaja!',
    },
    achievement: {
      en: 'Son won U12 District Championship',
      zh: '儿子赢得U12区锦标赛',
      ms: 'Anak lelaki memenangi Kejohanan Daerah U12',
    },
  },
  {
    id: '2',
    parent: {
      en: 'Mr. Ahmad Razali',
      zh: 'Ahmad Razali 先生',
      ms: 'Encik Ahmad Razali',
    },
    quote: {
      en: 'The small class sizes mean my daughter gets personal attention from the coaches. She loves the training sessions and has become more disciplined and confident both on and off the court.',
      zh: '小班制意味着我女儿可以得到教练的个别关注。她非常喜欢训练课程，无论在球场上还是球场外都变得更加自律和自信。',
      ms: 'Kelas yang kecil bermakna anak perempuan saya mendapat perhatian peribadi daripada jurulatih. Dia sangat menyukai sesi latihan dan menjadi lebih berdisiplin serta yakin di dalam dan luar gelanggang.',
    },
    achievement: {
      en: 'Daughter selected for state team',
      zh: '女儿入选州队',
      ms: 'Anak perempuan dipilih untuk pasukan negeri',
    },
  },
  {
    id: '3',
    parent: {
      en: 'Mrs. Priya Nair',
      zh: 'Priya Nair 女士',
      ms: 'Puan Priya Nair',
    },
    quote: {
      en: 'We tried several academies before finding Victorious. The difference is clear — the coaches genuinely care about each student\'s development, not just their badminton skills but also their character and sportsmanship.',
      zh: '在找到 Victorious 之前，我们尝试了几家学院。差别很明显——教练们真正关心每个学生的发展，不仅是他们的羽毛球技能，还有他们的品格和体育精神。',
      ms: 'Kami telah mencuba beberapa akademi sebelum menemui Victorious. Perbezaannya jelas — jurulatih benar-benar mengambil berat tentang perkembangan setiap pelajar, bukan sahaja kemahiran badminton tetapi juga perwatakan dan semangat kesukanan mereka.',
    },
    achievement: {
      en: 'Both children compete at national level',
      zh: '两个孩子都在全国水平比赛',
      ms: 'Kedua-dua anak bertanding di peringkat kebangsaan',
    },
  },
];

export default function Testimonials({ language }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const t = translations[language];
  const ref = useScrollReveal<HTMLElement>();

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

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
          <div className="relative rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
            <Quote size={32} className="absolute top-4 left-4 text-gold/20" />
            <p className="relative z-10 text-center text-lg italic text-dark-gray">
              &ldquo;{testimonial.quote[language]}&rdquo;
            </p>
            <div className="mt-6 text-center">
              <p className="font-bold text-black">{testimonial.parent[language]}</p>
              <p className="mt-1 text-sm font-medium text-gold">
                {testimonial.achievement[language]}
              </p>
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  idx === activeIndex ? 'bg-gold' : 'bg-gray-300'
                }`}
                aria-label={`Testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
