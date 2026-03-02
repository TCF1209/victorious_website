'use client';

import { Language } from '@/types';
import { translations } from '@/data/translations';
import { useCountUp } from '@/hooks/useCountUp';

interface StatsProps {
  language: Language;
}

const stats = [
  { key: 'stats_years' as const, value: 15, suffix: '+' },
  { key: 'stats_students' as const, value: 500, suffix: '+' },
  { key: 'stats_medals' as const, value: 100, suffix: '+' },
  { key: 'stats_locations' as const, value: 3, suffix: '' },
];

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold text-white sm:text-4xl">
        {count}{suffix}
      </div>
      <div className="mt-1 text-sm font-medium text-white/80">
        {label}
      </div>
    </div>
  );
}

export default function Stats({ language }: StatsProps) {
  const t = translations[language];

  return (
    <section className="bg-gold py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <StatItem
              key={stat.key}
              value={stat.value}
              suffix={stat.suffix}
              label={t[stat.key]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
