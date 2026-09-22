'use client';

import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE_DEFAULT } from '@/lib/constants';
import { trackWhatsAppClick } from '@/lib/analytics';
import { usePathname } from 'next/navigation';

type ProblemLandingProps = {
  title: string;
  subtitle: string;
  intro: string;
  sections: Array<{
    heading: string;
    content: string | string[];
  }>;
  cta?: string;
};

export default function ProblemLanding({
  title,
  subtitle,
  intro,
  sections,
  cta = WHATSAPP_MESSAGE_DEFAULT,
}: ProblemLandingProps) {
  const pathname = usePathname();
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(cta)}`;

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('problem-landing', pathname);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-semibold text-teal-700 uppercase tracking-wide mb-4">
              {subtitle}
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6">
              {title}
            </h1>
            <p className="sm:text-lg text-gray-700 mb-8 leading-relaxed">
              {intro}
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-teal-700 font-medium hover:bg-teal-800 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              style={{ color: 'white' }}
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371 0-.57 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.99 1.444 9.86 9.86 0 00-3.42 3.427 9.86 9.86 0 00-.614 4.986c.06.626.367 1.181.805 1.584a9.877 9.877 0 004.59 2.404c.656.179 1.338.183 2.008.053a9.863 9.863 0 004.233-2.132c1.27-.945 2.274-2.206 2.892-3.583.616-1.373.927-2.88.95-4.403.025-1.528-.282-3.038-.91-4.417-1.13-2.592-3.28-4.614-5.922-5.483a9.87 9.87 0 00-4.735-.278zM6.009 20.766h.013c1.405 0 2.813-.357 4.107-1.03 1.279-.667 2.396-1.616 3.25-2.766.85-1.144 1.386-2.445 1.629-3.81.242-1.369.137-2.797-.312-4.141-.448-1.343-1.188-2.531-2.21-3.442-1.02-.91-2.305-1.519-3.664-1.865-1.358-.346-2.795-.282-4.086.182a8.868 8.868 0 00-3.775 2.186 8.844 8.844 0 00-2.273 3.547 8.842 8.842 0 00.095 6.936 8.859 8.859 0 003.011 3.35c1.195.788 2.566 1.281 4.023 1.525.391.064.788.076 1.183.054z" />
              </svg>
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {sections.map((section, index) => (
              <div key={index} className={index > 0 ? 'mt-12' : ''}>
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
                  {section.heading}
                </h2>

                {Array.isArray(section.content) ? (
                  <ul className="space-y-4 text-gray-700">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-teal-700 font-bold flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
              ¿Querés empezar?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Podés escribirme y contarme brevemente qué estás buscando.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-teal-700 font-medium hover:bg-teal-800 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              style={{ color: 'white' }}
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371 0-.57 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.99 1.444 9.86 9.86 0 00-3.42 3.427 9.86 9.86 0 00-.614 4.986c.06.626.367 1.181.805 1.584a9.877 9.877 0 004.59 2.404c.656.179 1.338.183 2.008.053a9.863 9.863 0 004.233-2.132c1.27-.945 2.274-2.206 2.892-3.583.616-1.373.927-2.88.95-4.403.025-1.528-.282-3.038-.91-4.417-1.13-2.592-3.28-4.614-5.922-5.483a9.87 9.87 0 00-4.735-.278zM6.009 20.766h.013c1.405 0 2.813-.357 4.107-1.03 1.279-.667 2.396-1.616 3.25-2.766.85-1.144 1.386-2.445 1.629-3.81.242-1.369.137-2.797-.312-4.141-.448-1.343-1.188-2.531-2.21-3.442-1.02-.91-2.305-1.519-3.664-1.865-1.358-.346-2.795-.282-4.086.182a8.868 8.868 0 00-3.775 2.186 8.844 8.844 0 00-2.273 3.547 8.842 8.842 0 00.095 6.936 8.859 8.859 0 003.011 3.35c1.195.788 2.566 1.281 4.023 1.525.391.064.788.076 1.183.054z" />
              </svg>
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
