'use client';

import Link from 'next/link';
import { FOOTER_LINKS, WHATSAPP_NUMBER, WHATSAPP_MESSAGE_DEFAULT } from '@/lib/constants';
import { trackWhatsAppClick } from '@/lib/analytics';

export default function Footer() {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick('footer', typeof window !== 'undefined' ? window.location.pathname : '/');
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE_DEFAULT)}`;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16 sm:mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Esteban Siracusa</h3>
            <p className="text-sm text-gray-600">
              Psicólogo online especializado en ansiedad, sobrepensamiento y bloqueo emocional.
            </p>
            <p className="text-sm text-gray-600 mt-3">
              Lic. en Psicología (Universidad de Palermo)
              <br />
              MN 85046
            </p>
          </div>

          {/* Links section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Navegación</h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-600 hover:text-gray-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Contacto</h3>
            <p className="text-sm text-gray-600 mb-4">
              Terapia psicológica online para adultos en Argentina y exterior.
            </p>
            <a
              href={whatsappUrl}
              onClick={handleWhatsAppClick}
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded text-sm font-medium hover:bg-green-700"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-xs text-gray-500 text-center">
            © {currentYear} Esteban Siracusa. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-500 text-center mt-2">
            La información contenida en este sitio tiene fines educativos e informativos y no constituye asesoramiento médico o psicológico.
          </p>
        </div>
      </div>
    </footer>
  );
}
