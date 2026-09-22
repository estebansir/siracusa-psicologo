'use client';

import Link from 'next/link';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE_DEFAULT } from '@/lib/constants';
import { trackWhatsAppClick } from '@/lib/analytics';
import CTAButton from './CTAButton';

export default function Footer() {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick('footer', typeof window !== 'undefined' ? window.location.pathname : '/');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100 mt-20 sm:mt-24 lg:mt-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-8 py-6 sm:py-10">
          {/* About section */}
          <div>
            <h3 className="text-sm font-semibold mb-3" style={{ color: 'white' }}>Esteban Siracusa</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Lic. en Psicología · MN 85046
            </p>
          </div>

          {/* Links section 1 */}
          <div>
            <h3 className="text-xs font-semibold mb-4 uppercase tracking-wide" style={{ color: 'white' }}>Terapia</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/psicologo-online" className="text-gray-400 hover:text-white transition-colors">
                  Terapia online
                </Link>
              </li>
              <li>
                <Link href="/ansiedad" className="text-gray-400 hover:text-white transition-colors">
                  Ansiedad
                </Link>
              </li>
              <li>
                <Link href="/sobrepensamiento" className="text-gray-400 hover:text-white transition-colors">
                  Sobrepensamiento
                </Link>
              </li>
            </ul>
          </div>

          {/* Links section 2 */}
          <div>
            <h3 className="text-xs font-semibold mb-4 uppercase tracking-wide" style={{ color: 'white' }}>Enfoque</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/problemas-relacionales" className="text-gray-400 hover:text-white transition-colors">
                  Problemas relacionales
                </Link>
              </li>
              <li>
                <Link href="/falta-de-motivacion" className="text-gray-400 hover:text-white transition-colors">
                  Falta de motivación
                </Link>
              </li>
              <li>
                <Link href="/terapia-act" className="text-gray-400 hover:text-white transition-colors">
                  Terapia ACT
                </Link>
              </li>
              <li>
                <Link href="/sobre-mi" className="text-gray-400 hover:text-white transition-colors">
                  Sobre mí
                </Link>
              </li>
            </ul>
          </div>

          {/* International */}
          <div>
            <h3 className="text-xs font-semibold mb-4 uppercase tracking-wide" style={{ color: 'white' }}>En el exterior</h3>
            <Link href="/psicologo-migrantes" className="text-xs text-gray-400 hover:text-white transition-colors">
              Psicólogo para personas en el exterior
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Bottom section */}
        <div className="py-6 text-center">
          <p className="text-xs text-gray-400">
            © {currentYear} Esteban Siracusa
          </p>
        </div>
      </div>
    </footer>
  );
}
