import { generatePageMetadata } from '@/lib/metadata';
import Link from 'next/link';
import HeroSectionV3 from '@/components/HeroSectionV3';
import HomeWhatsAppCTA from '@/components/HomeWhatsAppCTA';
import Testimonials from '@/components/Testimonials';
import MobileWhatsAppButton from '@/components/MobileWhatsAppButton';
import Schema from '@/components/Schema';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

// Structured data, published only on the home page. Every fact must match visible
// site content; no reviews, ratings or street address (therapy is online only).
const PERSON_ID = `${SITE_URL}/#persona`;
const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#sitio-web`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      inLanguage: 'es-AR',
      publisher: { '@id': PERSON_ID },
    },
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: 'Esteban Siracusa',
      jobTitle: 'Psicólogo',
      description: 'Psicólogo de orientación conductual contextual, principalmente Terapia de Aceptación y Compromiso (ACT) y Psicoterapia Analítico Funcional (FAP).',
      url: `${SITE_URL}/sobre-mi`,
      image: `${SITE_URL}/images/fotoperfil.png`,
      // City the professional works from; not a consulting room open to the public.
      workLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Buenos Aires',
          addressCountry: 'AR',
        },
      },
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universidad de Palermo' },
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Licenciatura en Psicología',
          credentialCategory: 'degree',
          recognizedBy: { '@type': 'CollegeOrUniversity', name: 'Universidad de Palermo' },
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Formación en Terapia de Aceptación y Compromiso',
          recognizedBy: { '@type': 'Organization', name: 'CATC' },
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Formación en Psicoterapia Analítico Funcional',
          recognizedBy: { '@type': 'Organization', name: 'CATC' },
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Especialización en Psicoterapia Cognitiva Integrativa',
          credentialCategory: 'certificate',
          recognizedBy: { '@type': 'Organization', name: 'Fundación AIGLÉ' },
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Matrícula Nacional N.º 85046',
          credentialCategory: 'license',
        },
      ],
      knowsAbout: [
        'Terapias conductuales contextuales',
        'Terapia de Aceptación y Compromiso (ACT)',
        'Psicoterapia Analítico Funcional (FAP)',
        'Ansiedad',
        'Sobrepensamiento',
        'Bloqueo emocional',
      ],
      knowsLanguage: 'es',
    },
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/#psicoterapia-online`,
      name: 'Psicoterapia online',
      serviceType: 'Psicoterapia',
      description:
        'Psicoterapia online por videollamada para adultos en Argentina y para personas de habla hispana en todo el mundo.',
      url: `${SITE_URL}/psicologo-online`,
      provider: { '@id': PERSON_ID },
      audience: { '@type': 'PeopleAudience', audienceType: 'Adultos' },
      availableChannel: {
        '@type': 'ServiceChannel',
        name: 'Videollamada por Google Meet',
        availableLanguage: { '@type': 'Language', name: 'Español', alternateName: 'es' },
      },
    },
  ],
};

export const metadata = generatePageMetadata({
  title: 'Psicólogo Online | Esteban Siracusa',
  description: 'Psicólogo online para adultos. Orientación conductual contextual, principalmente ACT y FAP, para ansiedad, sobrepensamiento, autoexigencia y bloqueo emocional.',
  pathname: '/',
});

export default function Home() {
  const problemAreas = [
    {
      title: 'Ansiedad',
      description: 'Preocupación constante, anticipación y necesidad de control.',
      href: '/ansiedad',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Sobrepensamiento',
      description: 'Rumiación, dudas y decisiones que no terminan de resolverse.',
      href: '/sobrepensamiento',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12a2 2 0 014 0 4 4 0 01-8 0 6 6 0 0112 0 8 8 0 01-16 0 9 9 0 014-7.6" />
        </svg>
      ),
    },
    {
      title: 'Bloqueo y falta de motivación',
      description: 'Procrastinación, perfeccionismo y dificultad para sostener lo que empezás.',
      href: '/falta-de-motivacion',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      ),
    },
    {
      title: 'Problemas relacionales',
      description: 'Límites, necesidad de aprobación y dificultad para expresar lo que necesitás.',
      href: '/problemas-relacionales',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  const identificationItems = [
    'Le das vueltas durante horas a conversaciones, decisiones o errores.',
    'Anticipás constantemente lo que podría salir mal.',
    'Te exigís mucho y sentís que nunca es suficiente.',
    'Postergás tareas o decisiones, te distraés o esperás a sentirte preparado.',
    'Sabés racionalmente qué querés hacer, pero a la hora de hacerlo te bloqueás.',
  ];

  const sessionSteps = [
    {
      title: 'Me escribís por WhatsApp',
      text: 'Consultás disponibilidad y acordamos día y horario.',
    },
    {
      title: 'Nos encontramos por Google Meet',
      text: 'Las sesiones duran 50 minutos. Podés conectarte desde la computadora o el celular.',
    },
    {
      title: 'Primera sesión',
      text: 'Conversamos sobre lo que te está pasando y lo que esperás de la terapia. Al final evaluamos juntos si tiene sentido continuar. Después definimos objetivos y empezamos a trabajar sobre situaciones concretas.',
    },
  ];

  const training = [
    { title: 'Licenciatura en Psicología', place: 'Universidad de Palermo' },
    { title: 'Formación en Terapia de Aceptación y Compromiso', place: 'CATC' },
    { title: 'Formación en Psicoterapia Analítico Funcional', place: 'CATC' },
    { title: 'Especialización en Psicoterapia Cognitiva Integrativa', place: 'Fundación AIGLÉ' },
  ];

  const textLinkClassName =
    'inline-flex items-center min-h-11 text-teal-700 font-medium hover:text-teal-800 hover:underline underline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 rounded-sm';

  // Same left edge as the hero: heading on the left, content on the right (stacked on phones).
  const twoCol = 'max-w-6xl mx-auto px-6 lg:px-8 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.75fr)] lg:gap-x-16';
  const h2 = 'text-balance mb-5! lg:mb-0!';

  return (
    <>
      {/* Hero */}
      <HeroSectionV3
        title="Psicólogo online especializado en ansiedad, sobrepensamiento y bloqueo emocional"
        description="Si la ansiedad, la autoexigencia o darle vueltas a todo te están frenando, en terapia podemos entender qué está manteniendo ese patrón y empezar a responder de otra manera."
        primaryCtaText="Consultar por WhatsApp"
        microcopy="Psicoterapia online por videollamada para adultos en Argentina y para personas de habla hispana en todo el mundo."
        fees={[
          { label: 'Argentina', amount: '$50.000 ARS' },
          { label: 'Exterior', amount: '35 € / 40 USD' },
        ]}
        credential="Lic. en Psicología · MN 85046"
        training={[
          'Terapia de Aceptación y Compromiso (ACT)',
          'Psicoterapia Analítico Funcional (FAP)',
        ]}
        reimbursementNote="Emito factura para solicitar reintegros a obras sociales y prepagas."
      />

      {/* Identification */}
      <section className="mt-8 lg:mt-12 bg-gray-100 py-10 lg:py-18">
        <div className={twoCol}>
          <h2 className={h2}>Cuando pensar demasiado empieza a jugar en contra</h2>
          <div>
            <p className="text-gray-700 mb-5!">
              Pensar, anticipar y exigirte probablemente te haya servido muchas veces. <strong>El problema aparece cuando esas mismas estrategias empiezan a ocupar demasiado espacio.</strong>
            </p>
            <ul className="text-gray-700 pl-0! mb-0!">
              {identificationItems.map((item) => (
                <li key={item} className="flex gap-3 mb-2.5! leading-snug!">
                  <span className="text-teal-700 font-bold flex-shrink-0" aria-hidden="true">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How I work */}
      <section className="bg-white py-10 lg:py-18">
        <div className={twoCol}>
          <h2 className={h2}>¿Cómo trabajo en terapia?</h2>
          <div>
            <p className="text-gray-700 mb-4!">
              Muchas veces el problema no es solamente lo que pensás o sentís, sino <strong>qué hacés cuando aparecen esos pensamientos y emociones.</strong>
            </p>
            <p className="text-gray-700 mb-4!">
              Evitar, postergar o buscar certezas puede aliviar en el momento y, al mismo tiempo, mantener el problema.
            </p>
            <p className="text-gray-700 mb-4!">
              Trabajo desde las terapias conductuales contextuales, principalmente la <strong>Terapia de Aceptación y Compromiso (ACT)</strong> y la <strong>Psicoterapia Analítico Funcional (FAP)</strong>. En terapia buscamos comprender qué está pasando en tu caso y trabajar sobre aquello que necesitás empezar a hacer de otra manera.
            </p>
            <Link href="/terapia-act" className={textLinkClassName}>
              Conocer mi forma de trabajar →
            </Link>
          </div>
        </div>
      </section>

      {/* About me */}
      <section className="bg-gray-100 py-10 lg:py-18">
        <div className={twoCol}>
          <h2 className={h2}>Sobre mí</h2>
          <div>
            <p className="text-gray-700 mb-4!">
              Soy Esteban Siracusa, psicólogo. Trabajo online con adultos desde una orientación conductual contextual, principalmente <strong>ACT y FAP</strong>.
            </p>
            <p className="text-gray-700 mb-4!">
              Las técnicas importan, pero la terapia también ocurre entre dos personas. Para mí, el trabajo consiste en construir juntos una comprensión cada vez más precisa de lo que te está pasando.
            </p>
            <p className="text-gray-700 mb-6!">
              Viví varios años en Dinamarca y después en España antes de volver a Argentina.
            </p>
            <h3 className="text-lg! mb-2!">Formación</h3>
            <ul className="pl-0! mb-3! border-t border-gray-400/60">
              {training.map((item) => (
                <li key={item.title} className="mb-0! py-2 border-b border-gray-400/60 sm:flex sm:justify-between sm:gap-6 leading-snug!">
                  <span className="block text-gray-900 font-medium text-base">{item.title}</span>
                  <span className="block text-gray-600 text-base sm:text-right sm:shrink-0">{item.place}</span>
                </li>
              ))}
            </ul>
            <Link href="/sobre-mi" className={textLinkClassName}>
              Conocer más sobre mí →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Sessions */}
      <section className="bg-gray-100 py-10 lg:py-18">
        <div className={twoCol}>
          <div>
            <h2 className={h2}>¿Cómo son las sesiones de terapia online?</h2>
          </div>
          <div>
            <ol className="pl-0! mb-0!">
              {sessionSteps.map((step, index) => (
                <li key={step.title} className="flex gap-4 mb-4!">
                  <span className="shrink-0 w-8 h-8 rounded-full border border-teal-700 text-teal-700 text-base font-semibold inline-flex items-center justify-center" aria-hidden="true">{index + 1}</span>
                  <div>
                    <p className="text-gray-900 font-semibold mb-0.5!">{step.title}</p>
                    <p className="text-gray-700 mb-0! text-base lg:text-[17px]">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-gray-700 mt-5! mb-0! text-base lg:text-[17px]">
              Lo que conversamos en las sesiones está protegido por el secreto profesional.
            </p>
            <Link href="/psicologo-online" className={textLinkClassName + ' mt-3'}>
              Más sobre la terapia online →
            </Link>
          </div>
        </div>
      </section>

      {/* Reasons for consultation */}
      <section className="bg-white py-10 lg:py-18">
        <div className={twoCol}>
          <h2 className={h2}>¿Qué podemos trabajar?</h2>
          <div>
            <ul className="pl-0! mb-0! border-t border-gray-200">
              {problemAreas.map((area) => (
                <li key={area.href} className="mb-0! border-b border-gray-200">
                  <Link href={area.href} className="group flex items-center gap-4 py-3 rounded-sm focus-visible:outline-2 focus-visible:outline-teal-700">
                    <span className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-md bg-teal-50 text-teal-700" aria-hidden="true">
                      {area.icon}
                    </span>
                    <span className="flex-1">
                      <span className="block text-gray-900 font-semibold group-hover:text-teal-700">{area.title}</span>
                      <span className="block text-gray-600 font-normal text-[15px] leading-snug">{area.description}</span>
                    </span>
                    <span className="text-teal-700 shrink-0" aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 mt-5! mb-0!">
              ¿Tu motivo es otro? Escribime y vemos si puedo ayudarte.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-100 py-10 lg:py-18">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="mb-4!">¿Querés empezar terapia?</h2>
          <p className="text-gray-700 text-center! mx-auto mb-6!">
            Escribime por WhatsApp para consultar disponibilidad y coordinar una primera sesión. No hace falta que cuentes todo en el primer mensaje: podés enviar el que ya aparece escrito.
          </p>
          <div data-wa-anchor="final">
            <HomeWhatsAppCTA ctaLocation="final_cta" text="Consultar por WhatsApp" />
          </div>
          <p className="hidden lg:block text-gray-600 text-[15px] text-center! mx-auto mt-4! mb-0!">
            Si preferís, podés escribirme a <a href="mailto:esteban.siracusa@gmail.com" className="underline underline-offset-4">esteban.siracusa@gmail.com</a>
          </p>
        </div>
      </section>

      <MobileWhatsAppButton />
      <Schema schema={homeJsonLd} />
    </>
  );
}
