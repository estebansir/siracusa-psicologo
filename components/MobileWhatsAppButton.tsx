'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE_DEFAULT } from '@/lib/constants';
import { trackWhatsAppClick } from '@/lib/analytics';
import WhatsAppIcon from '@/components/WhatsAppIcon';

// Mobile-only floating WhatsApp button (the header CTA is desktop-only).
// Shows after a short scroll and stays put; it only hides while another WhatsApp CTA
// ([data-wa-anchor] elements) or the footer is on screen.
export default function MobileWhatsAppButton() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const onScreen = (el: Element | null) => {
      if (!el) return false;
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0;
    };

    const update = () => {
      frame = 0;
      const otherCtaOnScreen = Array.from(document.querySelectorAll('[data-wa-anchor]')).some(onScreen);
      const footerOnScreen = onScreen(document.querySelector('footer'));
      setVisible(window.scrollY > 160 && !otherCtaOnScreen && !footerOnScreen);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE_DEFAULT)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick('floating', pathname)}
      aria-label="Consultar por WhatsApp"
      aria-hidden={!visible}
      tabIndex={visible ? undefined : -1}
      className={`lg:hidden fixed right-4 z-40 inline-flex items-center justify-center w-[52px] h-[52px] rounded-full bg-teal-700 shadow-lg hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 motion-safe:transition-[opacity,transform,visibility] motion-safe:duration-200 ${
        visible ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible pointer-events-none'
      }`}
      style={{ color: 'white', bottom: 'calc(1rem + env(safe-area-inset-bottom))' }}
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}
