'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, WHATSAPP_NUMBER, WHATSAPP_MESSAGE_DEFAULT } from '@/lib/constants';
import { trackWhatsAppClick } from '@/lib/analytics';

export default function Header() {
  const pathname = usePathname();

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('header', pathname);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE_DEFAULT)}`;

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex-shrink-0 flex flex-col"
          >
            <span className="text-lg font-semibold text-gray-900">
              Esteban Siracusa
            </span>
            <span className="text-xs text-gray-600 font-medium">
              Psicólogo Online
            </span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(link => {
              if (link.label === 'Contacto') return null;
              
              const active = isActive(link.href);
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    active
                      ? 'text-gray-900'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button - Desktop */}
          <a
            href={whatsappUrl}
            onClick={handleWhatsAppClick}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-teal-700 font-medium text-sm hover:bg-teal-800 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            style={{ color: 'white' }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371 0-.57 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.99 1.444 9.86 9.86 0 00-3.42 3.427 9.86 9.86 0 00-.614 4.986c.06.626.367 1.181.805 1.584a9.877 9.877 0 004.59 2.404c.656.179 1.338.183 2.008.053a9.863 9.863 0 004.233-2.132c1.27-.945 2.274-2.206 2.892-3.583.616-1.373.927-2.88.95-4.403.025-1.528-.282-3.038-.91-4.417-1.13-2.592-3.28-4.614-5.922-5.483a9.87 9.87 0 00-4.735-.278zM6.009 20.766h.013c1.405 0 2.813-.357 4.107-1.03 1.279-.667 2.396-1.616 3.25-2.766.85-1.144 1.386-2.445 1.629-3.81.242-1.369.137-2.797-.312-4.141-.448-1.343-1.188-2.531-2.21-3.442-1.02-.91-2.305-1.519-3.664-1.865-1.358-.346-2.795-.282-4.086.182a8.868 8.868 0 00-3.775 2.186 8.844 8.844 0 00-2.273 3.547 8.842 8.842 0 00.095 6.936 8.859 8.859 0 003.011 3.35c1.195.788 2.566 1.281 4.023 1.525.391.064.788.076 1.183.054z" />
            </svg>
            Consultar por WhatsApp
          </a>

          {/* CTA Button - Mobile */}
          <a
            href={whatsappUrl}
            onClick={handleWhatsAppClick}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md bg-teal-700 text-white hover:bg-teal-800 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            aria-label="Contactar por WhatsApp"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371 0-.57 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.99 1.444 9.86 9.86 0 00-3.42 3.427 9.86 9.86 0 00-.614 4.986c.06.626.367 1.181.805 1.584a9.877 9.877 0 004.59 2.404c.656.179 1.338.183 2.008.053a9.863 9.863 0 004.233-2.132c1.27-.945 2.274-2.206 2.892-3.583.616-1.373.927-2.88.95-4.403.025-1.528-.282-3.038-.91-4.417-1.13-2.592-3.28-4.614-5.922-5.483a9.87 9.87 0 00-4.735-.278zM6.009 20.766h.013c1.405 0 2.813-.357 4.107-1.03 1.279-.667 2.396-1.616 3.25-2.766.85-1.144 1.386-2.445 1.629-3.81.242-1.369.137-2.797-.312-4.141-.448-1.343-1.188-2.531-2.21-3.442-1.02-.91-2.305-1.519-3.664-1.865-1.358-.346-2.795-.282-4.086.182a8.868 8.868 0 00-3.775 2.186 8.844 8.844 0 00-2.273 3.547 8.842 8.842 0 00.095 6.936 8.859 8.859 0 003.011 3.35c1.195.788 2.566 1.281 4.023 1.525.391.064.788.076 1.183.054z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
