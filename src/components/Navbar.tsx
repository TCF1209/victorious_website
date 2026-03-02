'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Language } from '@/types';
import { translations } from '@/data/translations';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function Navbar({ language, onLanguageChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[language];

  const navLinks = [
    { href: '#about', label: t.nav_about },
    { href: '#schedule', label: t.nav_schedule },
    { href: '#coaches', label: t.nav_coaches },
    { href: '#achievements', label: t.nav_achievements },
    { href: '#videos', label: t.nav_videos },
    { href: '#contact', label: t.nav_contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/images/victorious_logo.jpeg"
              alt="Victorious Badminton Academy"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-lg font-bold text-black">Victorious</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-dark-gray hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-1 rounded-full border border-gray-200 p-1">
              {(['en', 'zh', 'ms'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => onLanguageChange(lang)}
                  className={`rounded-full px-2 py-1 text-xs font-medium transition-colors ${
                    language === lang
                      ? 'bg-gold text-white'
                      : 'text-dark-gray hover:bg-light-gray'
                  }`}
                >
                  {lang === 'en' ? 'EN' : lang === 'zh' ? '中文' : 'BM'}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="border-t border-gray-100 pb-4 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-dark-gray hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-2 px-4 pt-2">
              {(['en', 'zh', 'ms'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    onLanguageChange(lang);
                    setIsOpen(false);
                  }}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                    language === lang
                      ? 'bg-gold text-white'
                      : 'border border-gray-200 text-dark-gray'
                  }`}
                >
                  {lang === 'en' ? 'EN' : lang === 'zh' ? '中文' : 'BM'}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
