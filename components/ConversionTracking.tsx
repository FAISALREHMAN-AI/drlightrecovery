'use client';
import { useEffect } from 'react';

const CALL_CONVERSION = 'AW-18385462444/_NMoCPjQyKMdEKzJ775E';
const WHATSAPP_CONVERSION = 'AW-18385462444/P5mSCM37zYQdEKzJ775E';

export default function ConversionTracking() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!link) return;
      const gtag = (window as any).gtag;
      if (typeof gtag !== 'function') return;
      const href = (link.getAttribute('href') || '').toLowerCase();
      if (href.startsWith('tel:')) {
        gtag('event', 'conversion', { send_to: CALL_CONVERSION });
      } else if (href.includes('wa.me') || href.includes('whatsapp.com')) {
        gtag('event', 'conversion', { send_to: WHATSAPP_CONVERSION });
      }
    };
    document.addEventListener('click', handler, true);
    return () => document.removeEventListener('click', handler, true);
  }, []);
  return null;
}
