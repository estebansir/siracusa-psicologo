'use client';

import Image from 'next/image';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE_DEFAULT } from '@/lib/constants';
import { trackWhatsAppClick } from '@/lib/analytics';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { usePathname } from 'next/navigation';

type HeroSectionV3Props = {
  title: string;
  description: string;
  primaryCtaText?: string;
  primaryCtaMessage?: string;
  microcopy?: string;
};

export default function HeroSectionV3({
  title,
  description,
  primaryCtaText = 'Consultar por WhatsApp',
  primaryCtaMessage = WHATSAPP_MESSAGE_DEFAULT,
  microcopy = 'Terapia individual online para adultos en Argentina y en el exterior.',
}: HeroSectionV3Props) {
  const pathname = usePathname();
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(primaryCtaMessage)}`;

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('hero', pathname);
  };

  return (
    <section className="bg-white pt-9 sm:pt-12 lg:pt-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Desktop: text (H1 → CTA) on the left, portrait spanning that same height on the right, microcopy centered below both */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-16">
          {/* Left column: content */}
          <div className="flex flex-col lg:col-start-1 lg:row-start-1">
            {/* H1 - reduced 10-15% from V3 for better balance */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              {title}
            </h1>

            {/* Description */}
            <p className="sm:text-lg text-gray-700 mb-8 max-w-2xl leading-relaxed">
              {description}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-teal-700 font-medium hover:bg-teal-800 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                style={{ color: 'white' }}
              >
                <WhatsAppIcon className="w-5 h-5 mr-2" />
                {primaryCtaText}
              </a>
            </div>
          </div>

          {/* Microcopy: spans the full hero grid on desktop so it sits on the central axis of the whole composition */}
          {microcopy && (
            <p className="microcopy text-sm text-gray-600 text-center! mt-2 mb-0! max-w-none! lg:col-span-2 lg:col-start-1 lg:row-start-2">
              {microcopy}
            </p>
          )}

          {/* Right column: photo */}
          <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-full lg:col-start-2 lg:row-start-1">
            <Image
              src="/images/fotoperfil.png"
              alt="Esteban Siracusa, psicólogo"
              fill
              priority
              sizes="(min-width: 1024px) 512px, calc(100vw - 48px)"
              className="object-cover rounded-lg"
              style={{
                objectPosition: '50% 15%',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
