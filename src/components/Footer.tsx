'use client';

import { Phone, Mail } from 'lucide-react';
import { Language } from '@/types';
import { translations } from '@/data/translations';
import { trainingLocations } from '@/data/schedule';

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language];

  const navLinks = [
    { href: '#about', label: t.nav_about },
    { href: '#schedule', label: t.nav_schedule },
    { href: '#coaches', label: t.nav_coaches },
    { href: '#achievements', label: t.nav_achievements },
    { href: '#contact', label: t.nav_contact },
  ];

  return (
    <footer className="bg-black py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-gold">Victorious Badminton Academy</h3>
            <p className="mt-2 text-sm text-gray-400">{t.footer_tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gold">{t.footer_quick_links}</h4>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gold">{t.footer_contact_info}</h4>
            <div className="mt-3 space-y-2">
              <a href="tel:+60123456789" className="flex items-center gap-2 text-sm text-gray-400 hover:text-gold transition-colors">
                <Phone size={14} />
                +60 12-345 6789
              </a>
              <a href="mailto:info@victoriousbadminton.com" className="flex items-center gap-2 text-sm text-gray-400 hover:text-gold transition-colors">
                <Mail size={14} />
                info@victoriousbadminton.com
              </a>
            </div>
            <h4 className="mt-4 font-bold text-gold">{t.footer_locations}</h4>
            <ul className="mt-2 space-y-1">
              {trainingLocations.map((loc) => (
                <li key={loc.id} className="text-sm text-gray-400">
                  {loc.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          {t.footer_copyright}
        </div>
      </div>
    </footer>
  );
}
