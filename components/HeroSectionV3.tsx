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
  fees?: { label: string; amount: string }[];
};

export default function HeroSectionV3({
  title,
  description,
  primaryCtaText = 'Consultar por WhatsApp',
  primaryCtaMessage = WHATSAPP_MESSAGE_DEFAULT,
  microcopy = 'Terapia individual online para adultos en Argentina y en el exterior.',
  fees,
}: HeroSectionV3Props) {
  const pathname = usePathname();
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(primaryCtaMessage)}`;

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('hero', pathname);
  };

  return (
    <section className="bg-white pt-9 sm:pt-12 lg:pt-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Flat grid so mobile can interleave the photo: H1 → description → photo → info → CTA.
            Desktop: H1, description and info stacked on the left, portrait spanning them on the right.
            The hero CTA is mobile-only; on desktop the header CTA is the single WhatsApp button. */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16">
          {/* H1 - reduced 10-15% from V3 for better balance */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-tight lg:col-start-1 lg:row-start-1">
            {title}
          </h1>

          {/* Description */}
          <p className="sm:text-lg text-gray-700 mb-8 max-w-2xl leading-relaxed lg:col-start-1 lg:row-start-2">
            {description}
          </p>

          {/* Right column: photo */}
          <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-full mb-8 lg:mb-0 lg:col-start-2 lg:row-start-1 lg:row-span-3">
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

          {/* Info: modality + fees. Centered on mobile, aligned with the left column on desktop */}
          {(microcopy || fees) && (
            <div className="mb-6 lg:mb-0 text-center lg:text-left lg:col-start-1 lg:row-start-3">
              {microcopy && (
                <p className="microcopy text-sm text-gray-600 text-center! lg:text-left! mb-0! max-w-none!">
                  {microcopy}
                </p>
              )}

              {/* Fees: discreet, same small scale as the microcopy */}
              {fees && fees.length > 0 && (
                <div className="mt-3 text-sm text-gray-600">
                  <p className="text-center! lg:text-left! mb-1! max-w-none! font-medium text-gray-700">
                    Honorarios por sesión (50 minutos):
                  </p>
                  <ul className="list-none p-0! mb-0! space-y-0.5">
                    {fees.map((fee) => (
                      <li key={fee.label} className="mb-0!">
                        {fee.label}: <span className="whitespace-nowrap">{fee.amount}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* CTA - mobile only */}
          <div className="flex flex-col sm:flex-row sm:justify-center lg:hidden">
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
      </div>
    </section>
  );
}
