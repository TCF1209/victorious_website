import { Language } from '@/types';

export function getWhatsAppUrl(phone: string, message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}

export function getPhoneUrl(phone: string): string {
  return `tel:${phone}`;
}

export function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export const DEFAULT_LANGUAGE: Language = 'en';
