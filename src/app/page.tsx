'use client';

import { useState } from 'react';
import { Language } from '@/types';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Schedule from '@/components/Schedule';
import Coaches from '@/components/Coaches';
import Achievements from '@/components/Achievements';
import Videos from '@/components/Videos';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <>
      <Navbar language={language} onLanguageChange={setLanguage} />
      <main>
        <Hero language={language} />
        <About language={language} />
        <Schedule language={language} />
        <Coaches language={language} />
        <Achievements language={language} />
        <Videos language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </>
  );
}
