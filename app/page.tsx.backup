import { generatePageMetadata } from '@/lib/metadata';
import Link from 'next/link';
import Schema from '@/components/Schema';
import HeroSection from '@/components/HeroSection';
import ProblemCard from '@/components/ProblemCard';
import CTAButton from '@/components/CTAButton';
import Callout from '@/components/Callout';

export const metadata = generatePageMetadata({
  title: 'Psicólogo online especializado en ansiedad y sobrepensamiento',
  description: 'Terapia individual online para adultos en Argentina y exterior. Especialista en ansiedad, sobrepensamiento y bloqueo emocional.',
  pathname: '/',
});

export default function Home() {
  const therapyAreas = [
    {
      title: 'Ansiedad',
      description: 'Cuando la preocupación, anticipación o necesidad de control empiezan a ocupar demasiado espacio.',
      href: '/ansiedad',
      color: 'teal' as const,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Sobrepensamiento',
      description: 'Cuando analizar deja de ayudarte a resolver y empieza a impedirte avanzar.',
      href: '/sobrepensamiento',
      color: 'blue' as const,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5h.01" />
        </svg>
      ),
    },
    {
      title: 'Bloqueo y falta de motivación',
      description: 'Cuando sabés lo que querés hacer pero seguís esperando a sentirte preparado para empezar.',
      href: '/falta-de-motivacion',
      color: 'indigo' as const,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2 1m2-1l-2-1m2 1v2.5" />
        </svg>
      ),
    },
    {
      title: 'Problemas relacionales',
      description: 'Cuando poner límites, expresar necesidades o sostener tu posición frente a otros se vuelve difícil.',
      href: '/problemas-relacionales',
      color: 'slate' as const,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0zM6 20h12" />
        </svg>
      ),
    },
  ];

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Esteban Siracusa',
    jobTitle: 'Psicólogo',
    url: 'https://siracusa-psicologo.vercel.app',
  };

  return (
    <>
      <Schema schema={personSchema} />

      {/* Hero section */}
      <HeroSection
        title="Psicólogo online especializado en ansiedad, sobrepensamiento y bloqueo emocional"
        subtitle="Terapia profesional online"
        description="Si sentís que tu cabeza no para, te exigís demasiado o sabés lo que querés hacer pero algo te frena, la terapia puede ayudarte a entender qué está manteniendo ese patrón y empezar a relacionarte de otra manera con lo que pensás y sentís."
        ctaText="Consultar por WhatsApp"
        ctaMessage="Hola Esteban. Vi tu página y quería consultarte por terapia online."
        secondaryCtaText="Conocer más"
        secondaryCtaHref="/psicologo-online"
      />

      {/* Key message */}
      <section className="section-alt">
        <div className="section-container max-w-prose">
          <div className="text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Terapia individual online para adultos en Argentina y en el exterior.
            </p>
          </div>
        </div>
      </section>

      {/* Problem section */}
      <section className="section">
        <div className="section-container max-w-prose">
          <h2 className="text-center mb-12">Cuando pensar demasiado empieza a jugar en contra</h2>
          <p className="text-lg text-gray-700 mb-8 mx-auto">
            Pensar, anticipar y exigirte probablemente te haya servido muchas veces. El problema aparece cuando esas mismas estrategias empiezan a ocupar demasiado espacio.
          </p>

          <ul className="space-y-3 mb-10 text-gray-700 max-w-prose mx-auto">
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
            <p className="text-lg text-gray-800">
              La terapia no busca que dejes de pensar ni que nunca vuelvas a sentir ansiedad. Busca que esos pensamientos y emociones dejen de decidir tanto por vos.
            </p>
          </Callout>
        </div>
      </section>

      {/* Therapy areas */}
      <section className="section-alt">
        <div className="section-container">
          <h2 className="text-center mb-16">Terapia para los problemas que más ocupan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {therapyAreas.map((area) => (
              <ProblemCard
                key={area.href}
                icon={area.icon}
                title={area.title}
                description={area.description}
                href={area.href}
                color={area.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="section">
        <div className="section-container max-w-prose">
          <h2 className="text-center mb-12">¿Cómo podemos trabajarlo?</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Muchas veces el problema no es solamente lo que pensamos o sentimos, sino todo lo que empezamos a hacer para intentar controlarlo.
          </p>

          <p className="text-gray-700 mb-8">
            Evitar. Postergar. Revisar una decisión diez veces. Buscar certezas. Exigirse más. Esperar a sentirse preparado. Intentar sacar de la cabeza un pensamiento que vuelve constantemente.
          </p>

          <p className="text-gray-700 mb-8">
            En terapia trabajamos para identificar esos patrones y desarrollar formas más flexibles de responder.
          </p>

          <p className="text-gray-700 mb-12">
            El objetivo es que puedas hacer más lugar a experiencias internas difíciles cuando aparezcan, sin que eso implique quedar atrapado en ellas, y recuperar capacidad para actuar en función de lo que realmente te importa.
          </p>

          <div className="flex justify-center">
            <CTAButton
              href="/terapia-act"
              variant="secondary"
            >
              Conocer más sobre mi forma de trabajar
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Evidence-based approach */}
      <section className="section-alt">
        <div className="section-container max-w-prose">
          <h2 className="text-center mb-12">Terapia basada en evidencia, adaptada a cada persona</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Mi enfoque principal es la Terapia de Aceptación y Compromiso (ACT) y las terapias conductuales contextuales.
          </p>

          <p className="text-gray-700 mb-8">
            En términos simples, esto significa que no vamos a trabajar solamente sobre qué pensás, sino también sobre qué hacés cuando aparecen determinados pensamientos, emociones o sensaciones y qué consecuencias tiene eso en tu vida.
          </p>

          <p className="text-gray-700 mb-12">
            No trabajo con recetas idénticas para todo el mundo. La terapia parte de entender tu situación particular, qué querés cambiar y qué patrones pueden estar alejándote de la vida que querés construir.
          </p>

          <div className="flex justify-center">
            <CTAButton
              href="/terapia-act"
              variant="secondary"
            >
              Conocer qué es la Terapia de Aceptación y Compromiso
            </CTAButton>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section">
        <div className="section-container max-w-prose">
          <h2 className="text-center mb-12">Soy Esteban Siracusa, psicólogo</h2>
          
          <p className="text-gray-700 mb-8">
            Me recibí de Licenciado en Psicología en la Universidad de Palermo y desde entonces continué mi formación en psicoterapia, especializándome en Psicoterapia Cognitiva Integrativa en Fundación AIGLÉ y profundizando especialmente en Terapia de Aceptación y Compromiso (ACT), Psicoterapia Analítico Funcional (FAP) y terapias conductuales contextuales.
          </p>

          <p className="text-gray-700 mb-8">
            Viví varios años en Europa y actualmente trabajo de manera online con personas en Argentina y en el exterior.
          </p>

          <p className="text-gray-700 mb-12">
            Me interesa especialmente trabajar con personas que lidian con ansiedad, sobrepensamiento, autoexigencia, perfeccionismo y dificultades para avanzar frente a situaciones emocionalmente difíciles.
          </p>

          <div className="flex justify-center">
            <CTAButton
              href="/sobre-mi"
              variant="secondary"
            >
              Más sobre mí
            </CTAButton>
          </div>
        </div>
      </section>

      {/* How sessions work */}
      <section className="section-alt">
        <div className="section-container max-w-prose">
          <h2 className="text-center mb-12">¿Cómo son las sesiones?</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            La terapia es 100% online, mediante videollamada.
          </p>

          <p className="text-gray-700 mb-8">
            Las primeras sesiones están orientadas a entender qué te está pasando, qué te gustaría cambiar y cómo funcionan actualmente las dificultades que te traen a consulta.
          </p>

          <p className="text-gray-700 mb-8">
            A partir de ahí definimos objetivos y vamos evaluando juntos qué intervenciones pueden ser útiles para acercarte a ellos.
          </p>

          <p className="text-gray-700">
            No necesitás llegar sabiendo exactamente "qué te pasa" ni tener un diagnóstico para consultar.
          </p>
        </div>
      </section>

      {/* Getting started */}
      <section className="section">
        <div className="section-container max-w-prose">
          <h2 className="text-center mb-12">Empezar es simple</h2>
          
          <ol className="space-y-8 mb-12">
            <li>
              <h3 className="text-lg font-semibold mb-2">1. Me escribís por WhatsApp</h3>
              <p className="text-gray-700">Podés contarme brevemente qué te trae a consulta.</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold mb-2">2. Coordinamos una primera sesión</h3>
              <p className="text-gray-700">Buscamos un horario y tenemos una primera entrevista online.</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold mb-2">3. Evaluamos cómo seguir</h3>
              <p className="text-gray-700">La primera sesión también sirve para evaluar si mi forma de trabajar encaja con lo que estás buscando.</p>
            </li>
          </ol>

          <div className="flex justify-center">
            <CTAButton
              whatsapp={true}
              message="Hola Esteban. Vi tu página y quería consultarte por terapia online."
              variant="primary"
            >
              Consultar disponibilidad por WhatsApp
            </CTAButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-alt">
        <div className="section-container max-w-prose">
          <h2 className="text-center mb-12">Preguntas frecuentes</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">¿Las sesiones son únicamente online?</h3>
              <p className="text-gray-700">Sí. Actualmente mi práctica clínica es 100% online.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">¿Cuánto dura una sesión?</h3>
              <p className="text-gray-700">Aproximadamente 50 minutos.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">¿Con qué frecuencia son?</h3>
              <p className="text-gray-700">Habitualmente comenzamos con una frecuencia semanal. Esto puede variar según cada situación y momento del proceso.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">¿Necesito tener un diagnóstico?</h3>
              <p className="text-gray-700">No. Muchas personas consultan porque hay algo que les genera malestar, se repite o les impide avanzar, sin tener un diagnóstico previo.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">¿Atendés personas que viven fuera de Argentina?</h3>
              <p className="text-gray-700">Sí. Trabajo online con personas que viven en Argentina y en el exterior, incluyendo argentinos y otros hispanohablantes que atraviesan procesos de migración o adaptación a otro país.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">¿Cómo sé si tu enfoque es adecuado para mí?</h3>
              <p className="text-gray-700">No necesitás saberlo antes de consultar. En las primeras entrevistas podemos evaluar qué estás buscando, cómo trabajo y si tiene sentido iniciar un proceso terapéutico juntos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="section-container max-w-prose text-center">
          <h2 className="mb-8">¿Querés empezar terapia?</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Si sentís que alguno de estos problemas está ocupando demasiado espacio en tu vida, podés escribirme y contarme brevemente qué estás buscando.
          </p>

          <div className="flex justify-center">
            <CTAButton
              whatsapp={true}
              message="Hola Esteban. Vi tu página y quería consultarte por terapia online."
              variant="primary"
            >
              Consultar por WhatsApp
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
