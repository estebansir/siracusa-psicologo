'use client';

import { usePathname } from 'next/navigation';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE_DEFAULT } from '@/lib/constants';
import { trackWhatsAppClick } from '@/lib/analytics';
import WhatsAppIcon from '@/components/WhatsAppIcon';

interface HomeWhatsAppCTAProps {
  ctaLocation: 'hero' | 'final_cta';
  text?: string;
}

export default function HomeWhatsAppCTA({
  ctaLocation,
  text = 'Consultar por WhatsApp',
}: HomeWhatsAppCTAProps) {
  const pathname = usePathname();

  const handleClick = () => {
    trackWhatsAppClick(ctaLocation, pathname);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE_DEFAULT)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-teal-700 font-medium hover:bg-teal-800 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
      style={{ color: 'white' }}
    >
      <WhatsAppIcon className="w-5 h-5 mr-2" />
      {text}
    </a>
  );
}
