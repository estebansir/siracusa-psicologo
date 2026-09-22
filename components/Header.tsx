'use client';

import Link from 'next/link';
import { NAV_LINKS, WHATSAPP_NUMBER, WHATSAPP_MESSAGE_DEFAULT } from '@/lib/constants';
import { trackWhatsAppClick } from '@/lib/analytics';

export default function Header() {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick('header', typeof window !== 'undefined' ? window.location.pathname : '/');
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE_DEFAULT)}`;

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold text-gray-900">
          Esteban Siracusa
        </Link>
        
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              {link.label === 'Contacto' ? (
                <a
                  href={whatsappUrl}
                  onClick={handleWhatsAppClick}
                  className="text-green-600 hover:text-green-700"
                >
                  {link.label}
                </a>
              ) : (
                <Link href={link.href} className="text-gray-700 hover:text-gray-900">
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile menu button - simple for now */}
        <div className="md:hidden">
          <a
            href={whatsappUrl}
            onClick={handleWhatsAppClick}
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded text-sm font-medium hover:bg-green-700"
          >
            WhatsApp
          </a>
        </div>
      </nav>
    </header>
  );
}
