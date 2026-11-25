'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { trackWhatsAppClick } from '@/lib/analytics';
import { useWhatsAppUrl } from '@/lib/useWhatsAppUrl';
import WhatsAppIcon from '@/components/WhatsAppIcon';

// Mobile-only floating WhatsApp button (the header CTA is desktop-only).
// Visible only between the two large WhatsApp CTAs: it appears once the hero CTA
// ([data-wa-anchor="hero"]) has fully left the screen upwards, and hides as soon as the
// final CTA ([data-wa-anchor="final"]) enters the screen, staying hidden below it (footer
// included). Works the same when scrolling back up.
export default function MobileWhatsAppButton() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector('[data-wa-anchor="hero"]');
    const finalCta = document.querySelector('[data-wa-anchor="final"]');
    if (!finalCta) return;

    // Pages without a hero CTA: the button is the only contact until the final CTA.
    let heroPassed = !hero; // hero CTA is entirely above the visible area (below the sticky header)
    let finalReached = false; // final CTA is on screen or already above it
    const update = () => setVisible(heroPassed && !finalReached);

    // Each observer watches a half-open band instead of the visible viewport, so a big jump
    // (tap on the status bar, anchor link, restored scroll position) can't skip a change.
    const FAR = '100000px';
    const HEADER = document.querySelector('header')?.offsetHeight ?? 0;
    // Band: from the viewport's top edge down to the end of the page.
    const heroObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[entries.length - 1];
        heroPassed = !entry.isIntersecting;
        update();
      },
      { rootMargin: `-${HEADER}px 0px ${FAR} 0px` },
    );
    // Band: from the start of the page down to the viewport's bottom edge.
    const finalObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[entries.length - 1];
        finalReached = entry.isIntersecting;
        update();
      },
      { rootMargin: `${FAR} 0px 0px 0px` },
    );

    if (hero) heroObserver.observe(hero);
    finalObserver.observe(finalCta);
    return () => {
      heroObserver.disconnect();
      finalObserver.disconnect();
    };
  }, []);

  const whatsappUrl = useWhatsAppUrl();

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
