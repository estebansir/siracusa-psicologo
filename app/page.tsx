import { generatePageMetadata } from '@/lib/metadata';
import Link from 'next/link';
import Schema from '@/components/Schema';
import HeroSectionV3 from '@/components/HeroSectionV3';
import ProblemCard from '@/components/ProblemCard';
import Callout from '@/components/Callout';
import Accordion from '@/components/Accordion';
import Steps from '@/components/Steps';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE_DEFAULT } from '@/lib/constants';
import { trackWhatsAppClick } from '@/lib/analytics';

export const metadata = generatePageMetadata({
  title: 'Psicólogo online especializado en ansiedad y sobrepensamiento',
  description: 'Terapia individual online para adultos en Argentina y exterior. Especialista en ansiedad, sobrepensamiento y bloqueo emocional.',
  pathname: '/',
});

export default function Home() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Esteban Siracusa',
    description: 'Psicólogo online especializado en ansiedad, sobrepensamiento y bloqueo emocional',
    telephone: '+5491139003698',
    areaServed: {
      '@type': 'Country',
      name: 'AR',
    },
  };

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
      <Schema schema={personSchema} />
      
      {/* Hero */}
      <HeroSectionV3
        eyebrow="Terapia profesional online"
        title="Psicólogo online especializado en ansiedad, sobrepensamiento y bloqueo emocional"
        description="Si sentís que tu cabeza no para, te exigís demasiado o sabés lo que querés hacer pero algo te frena, la terapia puede ayudarte a entender qué está manteniendo ese patrón y empezar a relacionarte de otra manera con lo que pensás y sentís."
        primaryCtaText="Consultar por WhatsApp"
        secondaryCtaText="Conocer más"
        secondaryCtaHref="/psicologo-online"
        microcopy="Terapia individual online para adultos en Argentina y en el exterior."
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
                <span>Postergando decisiones por miedo a equivocarte.</span>
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

            <Callout>
              La terapia no busca que dejes de pensar ni que nunca vuelvas a sentir ansiedad. Busca que esos pensamientos y emociones dejen de decidir tanto por vos.
            </Callout>
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
              Muchas veces el problema no es solamente lo que pensamos o sentimos, sino todo lo que empezamos a hacer para intentar controlarlo.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Evitar. Postergar. Revisar una decisión diez veces. Buscar certezas. Exigirse más. Esperar a sentirse preparado. Intentar sacar de la cabeza un pensamiento que vuelve constantemente.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              En terapia trabajamos para identificar esos patrones y desarrollar formas más flexibles de responder. El objetivo es que puedas hacer más lugar a experiencias internas difíciles cuando aparezcan, sin que eso implique quedar atrapado en ellas, y recuperar capacidad para actuar en función de lo que realmente te importa.
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
              Terapia basada en evidencia, adaptada a cada persona
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Mi enfoque principal es la Terapia de Aceptación y Compromiso (ACT) y las terapias conductuales contextuales.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              En términos simples, esto significa que no vamos a trabajar solamente sobre qué pensás, sino también sobre qué hacés cuando aparecen determinados pensamientos, emociones o sensaciones y qué consecuencias tiene eso en tu vida.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              No trabajo con recetas idénticas para todo el mundo. La terapia parte de entender tu situación particular, qué querés cambiar y qué patrones pueden estar alejándote de la vida que querés construir.
            </p>

            <div className="flex justify-center">
              <Link
                href="/terapia-act"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-gray-400 text-gray-900 font-medium hover:bg-gray-50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              >
                Conocer qué es la Terapia de Aceptación y Compromiso
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About me snippet */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-center">
            {/* Photo placeholder */}
            <div className="flex items-center justify-center order-2 lg:order-1">
              <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                <div className="text-center">
                  <p className="text-gray-500 text-sm font-medium mb-2">Fotografía profesional</p>
                  <p className="text-gray-400 text-xs">Próximamente</p>
                </div>
              </div>
            </div>

            {/* About text */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
                Soy Esteban Siracusa
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Me recibí de Licenciado en Psicología en la Universidad de Palermo y desde entonces continué mi formación en psicoterapia, especializándome en Psicoterapia Cognitiva Integrativa en Fundación AIGLÉ y profundizando especialmente en Terapia de Aceptación y Compromiso (ACT), Psicoterapia Analítico Funcional (FAP) y terapias conductuales contextuales.
              </p>

              <p className="text-gray-700 mb-8 leading-relaxed">
                Viví varios años en Europa y actualmente trabajo de manera online con personas en Argentina y en el exterior.
              </p>

              <p className="text-gray-700 mb-8 leading-relaxed">
                Me interesa especialmente trabajar con personas que lidian con ansiedad, sobrepensamiento, autoexigencia, perfeccionismo y dificultades para avanzar frente a situaciones emocionalmente difíciles.
              </p>

              <Link
                href="/sobre-mi"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-gray-400 text-gray-900 font-medium hover:bg-gray-50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              >
                Más sobre mí
              </Link>
            </div>
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
              La terapia es 100% online, mediante videollamada.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Las primeras sesiones están orientadas a entender qué te está pasando, qué te gustaría cambiar y cómo funcionan actualmente las dificultades que te traen a consulta.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              A partir de ahí definimos objetivos y vamos evaluando juntos qué intervenciones pueden ser útiles para acercarte a ellos.
            </p>

            <p className="text-gray-700">
              No necesitás llegar sabiendo exactamente "qué te pasa" ni tener un diagnóstico para consultar.
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
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE_DEFAULT)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-teal-700 font-medium hover:bg-teal-800 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              style={{ color: 'white' }}
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371 0-.57 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.99 1.444 9.86 9.86 0 00-3.42 3.427 9.86 9.86 0 00-.614 4.986c.06.626.367 1.181.805 1.584a9.877 9.877 0 004.59 2.404c.656.179 1.338.183 2.008.053a9.863 9.863 0 004.233-2.132c1.27-.945 2.274-2.206 2.892-3.583.616-1.373.927-2.88.95-4.403.025-1.528-.282-3.038-.91-4.417-1.13-2.592-3.28-4.614-5.922-5.483a9.87 9.87 0 00-4.735-.278zM6.009 20.766h.013c1.405 0 2.813-.357 4.107-1.03 1.279-.667 2.396-1.616 3.25-2.766.85-1.144 1.386-2.445 1.629-3.81.242-1.369.137-2.797-.312-4.141-.448-1.343-1.188-2.531-2.21-3.442-1.02-.91-2.305-1.519-3.664-1.865-1.358-.346-2.795-.282-4.086.182a8.868 8.868 0 00-3.775 2.186 8.844 8.844 0 00-2.273 3.547 8.842 8.842 0 00.095 6.936 8.859 8.859 0 003.011 3.35c1.195.788 2.566 1.281 4.023 1.525.391.064.788.076 1.183.054z" />
              </svg>
              Consultar disponibilidad por WhatsApp
            </a>
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

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE_DEFAULT)}`}
              target="_blank"
              rel="noopener noreferrer"
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
