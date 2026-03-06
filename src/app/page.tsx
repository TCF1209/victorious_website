'use client';

import { useState } from 'react';
import { Language } from '@/types';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import Schedule from '@/components/Schedule';
import Coaches from '@/components/Coaches';
import Achievements from '@/components/Achievements';
import Testimonials from '@/components/Testimonials';
import Videos from '@/components/Videos';
import Contact from '@/components/Contact';
import Activities from '@/components/Activities';
import Footer from '@/components/Footer';
import FloatingSocials from '@/components/FloatingSocials';

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <>
      <Navbar language={language} onLanguageChange={setLanguage} />
      <main>
        <Hero language={language} />
        <Stats language={language} />
        <About language={language} />
        <WhyChooseUs language={language} />
        <Schedule language={language} />
        <Coaches language={language} />
        <Achievements language={language} />
        <Testimonials language={language} />
        <Videos language={language} />
        <Activities language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
      <FloatingSocials language={language} />
    </>
  );
}
