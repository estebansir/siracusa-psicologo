import { generatePageMetadata } from '@/lib/metadata';
import Link from 'next/link';
import HeroSectionV3 from '@/components/HeroSectionV3';
import ProblemCard from '@/components/ProblemCard';
import HomeWhatsAppCTA from '@/components/HomeWhatsAppCTA';

export const metadata = generatePageMetadata({
  title: 'Psicólogo Online | Esteban Siracusa',
  description: 'Psicólogo online para adultos. Terapia de Aceptación y Compromiso (ACT) para ansiedad, sobrepensamiento, autoexigencia y bloqueo emocional.',
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5h.01" />
        </svg>
      ),
    },
    {
      title: 'Bloqueo y falta de motivación',
      description: 'Procrastinación, perfeccionismo y dificultad para sostener lo que empezás.',
      href: '/falta-de-motivacion',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2 1m2-1l-2-1m2 1v2.5" />
        </svg>
      ),
    },
    {
      title: 'Problemas relacionales',
      description: 'Límites, necesidad de aprobación y dificultad para expresar lo que necesitás.',
      href: '/problemas-relacionales',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0zM6 20h12" />
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

  const startingSteps = [
    'Me escribís por WhatsApp',
    'Coordinamos una primera sesión',
    'Evaluamos cómo seguir',
  ];

  const textLinkClassName =
    'inline-flex items-center text-teal-700 font-medium hover:text-teal-800 hover:underline underline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 rounded-sm';

  return (
    <>
      {/* Hero */}
      <HeroSectionV3
        title="Psicólogo online especializado en ansiedad, sobrepensamiento y bloqueo emocional"
        description="Si la ansiedad, la autoexigencia o darle vueltas a todo te están frenando, en terapia podemos entender qué está manteniendo ese patrón y empezar a responder de otra manera."
        primaryCtaText="Consultar por WhatsApp"
        microcopy="Atiendo online a adultos en Argentina y a personas de habla hispana en todo el mundo."
      />

      {/* Identification */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8">
              Cuando pensar demasiado empieza a jugar en contra
            </h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Pensar, anticipar y exigirte probablemente te haya servido muchas veces. <strong>El problema aparece cuando esas mismas estrategias empiezan a ocupar demasiado espacio.</strong>
            </p>

            <ul className="space-y-4 text-gray-700">
              {identificationItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-teal-700 font-bold flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="max-w-lg mx-auto text-center mt-14 sm:mt-16 space-y-4">
              <p className="text-xl text-gray-900 text-center! leading-relaxed!">
                <strong>La terapia no busca que dejes de pensar ni que nunca vuelvas a sentir ansiedad.</strong>
              </p>
              <p className="text-xl text-gray-900 text-center! leading-relaxed!">
                <strong>Busca que esos pensamientos y emociones dejen de decidir tanto por vos.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem areas */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-10 sm:mb-12 text-center">
            ¿Qué podemos trabajar?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problemAreas.map((area) => (
              <ProblemCard
                key={area.href}
                icon={area.icon}
                title={area.title}
                description={area.description}
                href={area.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How I work */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8">
              ¿Cómo trabajo en terapia?
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Muchas veces el problema no es solamente lo que pensás o sentís, sino <strong>qué hacés cuando aparecen esos pensamientos y emociones.</strong>
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Evitar, postergar o buscar certezas puede aliviar en el momento y, al mismo tiempo, mantener el problema.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Mi orientación principal es la <strong>Terapia de Aceptación y Compromiso (ACT)</strong> y las terapias conductuales contextuales. En terapia buscamos entender qué está pasando en tu caso y trabajar sobre aquello que necesitás empezar a hacer de otra manera.
            </p>

            <Link href="/terapia-act" className={textLinkClassName}>
              Conocer mi forma de trabajar →
            </Link>
          </div>
        </div>
      </section>

      {/* About me */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8">
              Sobre mí
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Soy Esteban Siracusa, psicólogo. Me interesa entender con precisión <strong>qué está manteniendo un problema y qué tendría que empezar a cambiar para que algo sea diferente fuera de la sesión.</strong>
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Viví varios años en Dinamarca y España antes de volver a Argentina. Esa experiencia despertó en mí un interés particular por los desafíos de vivir entre países.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-8">
              <Link href="/sobre-mi" className={textLinkClassName}>
                Conocer más sobre mí →
              </Link>
              <Link href="/psicologo-migrantes" className={textLinkClassName}>
                Psicólogo para personas en el exterior →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sessions */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              ¿Cómo son las sesiones?
            </h2>

            <p className="text-sm font-semibold text-teal-700 mb-8">
              Videollamada · 50 minutos
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              En los primeros encuentros buscamos entender qué te está pasando, qué te gustaría cambiar y qué puede estar manteniendo el problema. A partir de ahí definimos objetivos y empezamos a trabajar sobre situaciones concretas.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <strong>No necesitás llegar sabiendo exactamente qué te pasa ni tener una explicación perfectamente ordenada.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center border-t border-gray-200 pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
              ¿Querés empezar terapia?
            </h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Podés escribirme por WhatsApp y contarme brevemente qué te está pasando y qué te gustaría trabajar.
            </p>

            <div className="lg:-mx-28 mb-8 sm:mb-10">
              <ol className="inline-flex flex-col md:flex-row gap-3 md:gap-8 lg:gap-10 lg:pl-0! text-left text-gray-800">
                {startingSteps.map((step, index) => (
                  <li key={step} className="flex gap-2 lg:whitespace-nowrap">
                    <span className="text-teal-700 font-semibold">{index + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <HomeWhatsAppCTA ctaLocation="final_cta" text="Consultar por WhatsApp" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
