'use client';

import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE_DEFAULT } from '@/lib/constants';
import { trackWhatsAppClick } from '@/lib/analytics';

interface CTAProps {
  text?: string;
  message?: string;
  location: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function CTAWhatsApp({
  text = 'Consultar por WhatsApp',
  message = WHATSAPP_MESSAGE_DEFAULT,
  location,
  variant = 'primary',
  className = '',
}: CTAProps) {
  const handleClick = () => {
    trackWhatsAppClick(location, typeof window !== 'undefined' ? window.location.pathname : '/');
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 rounded font-medium transition-colors';
  const variantClasses =
    variant === 'primary'
      ? 'bg-green-600 text-white hover:bg-green-700'
      : 'bg-gray-200 text-gray-900 hover:bg-gray-300';

  return (
    <a
      href={whatsappUrl}
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {text}
    </a>
  );
}
