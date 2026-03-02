'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MessageCircle, Send } from 'lucide-react';
import { Language, ContactFormData } from '@/types';
import { translations } from '@/data/translations';
import { getWhatsAppUrl } from '@/lib/utils';
import { trainingLocations } from '@/data/schedule';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ContactProps {
  language: Language;
}

const WHATSAPP_PHONE = '60123456789'; // Placeholder

export default function Contact({ language }: ContactProps) {
  const [submitted, setSubmitted] = useState(false);
  const t = translations[language];
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();
  const ref = useScrollReveal<HTMLElement>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="scroll-reveal bg-light-gray py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-black sm:text-4xl">
          {t.contact_title}
        </h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* WhatsApp */}
          <div className="flex flex-col items-center justify-center rounded-lg bg-white p-8 shadow-sm">
            <MessageCircle size={48} className="text-green-500" />
            <h3 className="mt-4 text-xl font-bold text-black">WhatsApp</h3>
            <p className="mt-2 text-center text-sm text-dark-gray">
              {language === 'en' && 'Fastest way to reach us!'}
              {language === 'zh' && '最快联系我们的方式！'}
              {language === 'ms' && 'Cara terpantas untuk menghubungi kami!'}
            </p>
            <a
              href={getWhatsAppUrl(WHATSAPP_PHONE, t.contact_whatsapp_message)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-green-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-green-600"
            >
              <MessageCircle size={20} />
              {t.contact_whatsapp}
            </a>
          </div>

          {/* Contact Form */}
          <div className="rounded-lg bg-white p-8 shadow-sm">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <Send size={48} className="text-gold" />
                <p className="mt-4 text-lg font-semibold text-black">{t.contact_success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-dark-gray">
                    {t.contact_parent_name} *
                  </label>
                  <input
                    {...register('parentName', { required: true })}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 text-base outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-gray">
                    {t.contact_student_name} *
                  </label>
                  <input
                    {...register('studentName', { required: true })}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 text-base outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-dark-gray">
                      {t.contact_student_age} *
                    </label>
                    <input
                      {...register('studentAge', { required: true })}
                      className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 text-base outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-gray">
                      {t.contact_phone} *
                    </label>
                    <input
                      {...register('phone', { required: true })}
                      type="tel"
                      className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 text-base outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-gray">
                    {t.contact_preferred_location} *
                  </label>
                  <select
                    {...register('preferredLocation', { required: true })}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 text-base outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                  >
                    <option value="">{t.contact_select_location}</option>
                    {trainingLocations.map((loc) => (
                      <option key={loc.id} value={loc.name}>
                        {loc.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-gray">
                    {t.contact_message}
                  </label>
                  <textarea
                    {...register('message')}
                    rows={3}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 text-base outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full min-h-[48px] rounded-full bg-gold px-4 py-3 font-semibold text-white transition-colors hover:bg-gold-dark"
                >
                  {t.contact_submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
