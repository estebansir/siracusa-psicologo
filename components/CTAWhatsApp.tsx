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

  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 rounded font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2';
  const variantClasses =
    variant === 'primary'
      ? 'bg-teal-700 hover:bg-teal-800 focus-visible:outline-teal-700'
      : 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:outline-gray-200';

  return (
    <a
      href={whatsappUrl}
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
      style={variant === 'primary' ? { color: 'white' } : undefined}
    >
      {text}
    </a>
  );
}
