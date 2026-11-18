'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE_DEFAULT } from '@/lib/constants';
import { trackWhatsAppClick } from '@/lib/analytics';
import WhatsAppIcon from '@/components/WhatsAppIcon';

// Mobile-only floating WhatsApp button (the header CTA is desktop-only).
// It appears once the visitor starts scrolling, hides while the hero CTA is on screen,
// hides for good from the final CTA ([data-wa-anchor] elements) down, and also steps aside
// whenever another link or button (e.g. the testimonial carousel dots) passes underneath it.
export default function MobileWhatsAppButton() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    let frame = 0;

    // Probe the button's footprint (with a small margin) for other interactive elements.
    // Hit-testing skips the button itself while it is hidden (pointer-events: none).
    const coversInteractive = () => {
      const button = buttonRef.current;
      if (!button) return false;
      const r = button.getBoundingClientRect();
      const m = 6;
      const xs = [r.left - m, r.left + r.width * 0.25, r.left + r.width * 0.5, r.left + r.width * 0.75, r.right + m];
      const ys = [r.top - m, r.top + r.height * 0.25, r.top + r.height * 0.5, r.top + r.height * 0.75, r.bottom + m];
      const points = xs.flatMap((x) => ys.map((y) => [x, y] as const));
      return points.some(([x, y]) =>
        document.elementsFromPoint(x, y).some((el) => {
          const hit = el.closest('a, button');
          return hit !== null && hit !== button;
        }),
      );
    };

    const update = () => {
      frame = 0;
      const hero = document.querySelector('[data-wa-anchor="hero"]');
      const finalCta = document.querySelector('[data-wa-anchor="final"]');
      const heroRect = hero?.getBoundingClientRect();
      const heroOnScreen = heroRect ? heroRect.top < window.innerHeight && heroRect.bottom > 0 : false;
      const beforeFinal = finalCta ? finalCta.getBoundingClientRect().top > window.innerHeight : true;
      setVisible(window.scrollY > 120 && !heroOnScreen && beforeFinal && !coversInteractive());
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    // The testimonial carousel scrolls horizontally without firing window scroll.
    document.addEventListener('scroll', onScroll, { passive: true, capture: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      document.removeEventListener('scroll', onScroll, { capture: true });
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE_DEFAULT)}`;

  return (
    <a
      ref={buttonRef}
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
