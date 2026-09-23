import { generatePageMetadata } from '@/lib/metadata';
import Link from 'next/link';
import HeroSectionV3 from '@/components/HeroSectionV3';
import ProblemCard from '@/components/ProblemCard';
import Callout from '@/components/Callout';
import Accordion from '@/components/Accordion';
import Steps from '@/components/Steps';
import HomeWhatsAppCTA from '@/components/HomeWhatsAppCTA';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE_DEFAULT } from '@/lib/constants';

export const metadata = generatePageMetadata({
  title: 'Psicólogo Online | Esteban Siracusa',
  description: 'Terapia individual online para adultos en Argentina y exterior. Especialista en ansiedad, sobrepensamiento y bloqueo emocional.',
  pathname: '/',
});

export default function Home() {
  const problemAreas = [
    {
      title: 'Ansiedad',
      description: 'Cuando la preocupación, anticipación o necesidad de control empiezan a ocupar demasiado espacio.',
      href: '/ansiedad',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Sobrepensamiento',
      description: 'Cuando analizar deja de ayudarte a resolver y empieza a impedirte avanzar.',
      href: '/sobrepensamiento',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5h.01" />
        </svg>
      ),
    },
    {
      title: 'Bloqueo y falta de motivación',
      description: 'Cuando sabés lo que querés hacer pero seguís esperando a sentirte preparado para empezar.',
      href: '/falta-de-motivacion',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2 1m2-1l-2-1m2 1v2.5" />
        </svg>
      ),
    },
    {
      title: 'Problemas relacionales',
      description: 'Cuando poner límites, expresar necesidades o sostener tu posición frente a otros se vuelve difícil.',
      href: '/problemas-relacionales',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0zM6 20h12" />
        </svg>
      ),
    },
  ];

  const faqItems = [
    {
      id: 'sessions-online',
      question: '¿Las sesiones son únicamente online?',
      answer: 'Sí. Actualmente mi práctica clínica es 100% online.',
    },
    {
      id: 'session-duration',
      question: '¿Cuánto dura una sesión?',
      answer: 'Aproximadamente 50 minutos.',
    },
    {
      id: 'frequency',
      question: '¿Con qué frecuencia son?',
      answer: 'Habitualmente comenzamos con una frecuencia semanal. Esto puede variar según cada situación y momento del proceso.',
    },
    {
      id: 'diagnosis-required',
      question: '¿Necesito tener un diagnóstico?',
      answer: 'No. Muchas personas consultan porque hay algo que les genera malestar, se repite o les impide avanzar, sin tener un diagnóstico previo.',
    },
    {
      id: 'international',
      question: '¿Atendés personas que viven fuera de Argentina?',
      answer: 'Sí. Trabajo online con personas que viven en Argentina y en el exterior, incluyendo argentinos y otros hispanohablantes que atraviesan procesos de migración o adaptación a otro país.',
    },
    {
      id: 'approach-fit',
      question: '¿Cómo sé si tu enfoque es adecuado para mí?',
      answer: 'No necesitás saberlo antes de consultar. En las primeras entrevistas podemos evaluar qué estás buscando, cómo trabajo y si tiene sentido iniciar un proceso terapéutico juntos.',
    },
  ];

  const startingSteps = [
    {
      number: '01',
      title: 'Me escribís por WhatsApp',
      description: 'Podés contarme brevemente qué te trae a consulta.',
    },
    {
      number: '02',
      title: 'Coordinamos una primera sesión',
      description: 'Buscamos un horario y tenemos una primera entrevista online.',
    },
    {
      number: '03',
      title: 'Evaluamos cómo seguir',
      description: 'La primera sesión también sirve para evaluar si mi forma de trabajar encaja con lo que estás buscando.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <HeroSectionV3
        eyebrow="Terapia profesional online"
        title="Psicólogo especializado en ansiedad, sobrepensamiento y bloqueo emocional"
        description="Si sentís que tu cabeza no para, te exigís demasiado o hay situaciones en las que sabés qué querés hacer pero la ansiedad, el miedo o la inseguridad terminan frenándote, la terapia puede ayudarte a entender qué está manteniendo ese patrón y empezar a responder de otra manera."
        primaryCtaText="Consultar por WhatsApp"
        secondaryCtaText="Conocer más"
        secondaryCtaHref="/psicologo-online"
        microcopy="Atiendo a adultos en Argentina y en el exterior."
      />

      {/* Editorial block 1: When overthinking becomes a problem */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8">
              Cuando pensar demasiado empieza a jugar en contra
            </h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Pensar, anticipar y exigirte probablemente te haya servido muchas veces. El problema aparece cuando esas mismas estrategias empiezan a ocupar demasiado espacio.
            </p>

            <ul className="space-y-4 mb-12 text-gray-700">
              <li className="flex gap-3">
                <span className="text-teal-700 font-bold flex-shrink-0">•</span>
                <span>Dándole vueltas durante horas a conversaciones, decisiones o errores.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-700 font-bold flex-shrink-0">•</span>
                <span>Anticipando constantemente lo que podría salir mal.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-700 font-bold flex-shrink-0">•</span>
                <span>Exigiéndote mucho y sintiendo que nunca es suficiente.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-700 font-bold flex-shrink-0">•</span>
                <span>Postergando tareas o decisiones, distrayéndote con facilidad o esperando a sentirte más motivado para empezar.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-700 font-bold flex-shrink-0">•</span>
                <span>Intentando controlar pensamientos o emociones que vuelven una y otra vez.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-700 font-bold flex-shrink-0">•</span>
                <span>Sabiendo racionalmente qué querés hacer, pero sintiéndote bloqueado a la hora de hacerlo.</span>
              </li>
            </ul>

            <div className="max-w-xl mx-auto text-center my-12 space-y-4">
              <p className="text-lg text-gray-800 leading-relaxed">
                <strong>La terapia no busca que dejes de pensar ni que nunca vuelvas a sentir ansiedad.</strong>
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                <strong>Busca que esos pensamientos y emociones dejen de decidir tanto por vos.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem areas */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-12 text-center">
            Terapia para los problemas que más ocupan
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

      {/* How we work */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8">
              ¿Cómo podemos trabajarlo?
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>Muchas veces el problema no es solamente lo que pensamos o sentimos, sino todo lo que empezamos a hacer para intentar controlarlo.</strong>
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Evitar. Postergar. Revisar una decisión diez veces. Buscar certezas. Exigirse más. Esperar a sentirse preparado. Intentar sacar de la cabeza un pensamiento que vuelve constantemente.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              <strong>En terapia trabajamos para identificar esos patrones y desarrollar formas más flexibles de responder.</strong> El objetivo es que puedas hacer más lugar a experiencias internas difíciles cuando aparezcan, sin que eso implique quedar atrapado en ellas, y recuperar capacidad para actuar en función de lo que realmente te importa.
            </p>

            <div className="flex justify-center">
              <Link
                href="/terapia-act"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-gray-400 text-gray-900 font-medium hover:bg-gray-50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              >
                Conocer más sobre mi forma de trabajar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8">
              Mi orientación terapéutica
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Mi orientación principal es la <strong>Terapia de Aceptación y Compromiso (ACT)</strong> y <strong>las terapias conductuales contextuales.</strong>
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Esto significa que no vamos a trabajar solamente sobre qué pensás, sino también sobre qué hacés cuando aparecen determinados pensamientos, emociones o sensaciones y qué consecuencias tiene eso en tu vida.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              No trabajo con recetas idénticas para todo el mundo. Primero necesitamos entender tu situación, qué querés cambiar y qué patrones pueden estar alejándote de la vida que querés construir.
            </p>

            <div className="flex justify-center">
              <Link
                href="/terapia-act"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-gray-400 text-gray-900 font-medium hover:bg-gray-50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              >
                Conocer mi forma de trabajar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About me snippet */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8">
              Sobre mí
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Trabajo principalmente con adultos que consultan por <strong>ansiedad, sobrepensamiento, autoexigencia, perfeccionismo, procrastinación, bloqueo y dificultades en sus relaciones.</strong>
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Me interesa una terapia en la que podamos entender con precisión qué está pasando, pero que <strong>no se quede solamente en entender.</strong> Busco que lo que trabajemos en sesión pueda traducirse en cambios concretos en tu manera de relacionarte con tus pensamientos, tus emociones y las situaciones difíciles de tu vida.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Viví varios años en Europa y actualmente atiendo online a personas en Argentina y en el exterior.
            </p>

            <Link
              href="/sobre-mi"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-gray-400 text-gray-900 font-medium hover:bg-gray-50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              Conocer más sobre mí
            </Link>
          </div>
        </div>
      </section>

      {/* Sessions */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8">
              ¿Cómo son las sesiones?
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>La terapia es 100% online, mediante videollamada.</strong>
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Las primeras sesiones están orientadas a entender <strong>qué te está pasando y qué te gustaría cambiar</strong> y cómo funcionan actualmente las dificultades que te traen a consulta.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              A partir de ahí definimos objetivos y vamos evaluando juntos qué intervenciones pueden ser útiles para acercarte a ellos.
            </p>

            <p className="text-gray-700">
              <strong>No necesitás llegar sabiendo exactamente "qué te pasa" ni tener un diagnóstico para consultar.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Starting is simple */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6 sm:mb-8">
              Empezar es simple
            </h2>
          </div>

          <Steps items={startingSteps} />

          <div className="flex justify-center mt-10 sm:mt-12">
            <HomeWhatsAppCTA ctaLocation="hero" text="Consultar disponibilidad por WhatsApp" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8" style={{ scrollMarginTop: '5rem' }}>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-12">
              Preguntas frecuentes
            </h2>

            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
              ¿Querés empezar terapia?
            </h2>

            <p className="text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              Si sentís que alguno de estos problemas está ocupando demasiado espacio en tu vida, podés escribirme y contarme brevemente qué estás buscando.
            </p>

            <HomeWhatsAppCTA ctaLocation="final_cta" text="Consultar por WhatsApp" />
          </div>
        </div>
      </section>
    </>
  );
}
