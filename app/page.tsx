import { generatePageMetadata } from '@/lib/metadata';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import Link from 'next/link';
import Schema from '@/components/Schema';

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
    },
    {
      title: 'Sobrepensamiento',
      description: 'Cuando analizar deja de ayudarte a resolver y empieza a impedirte avanzar.',
      href: '/sobrepensamiento',
    },
    {
      title: 'Bloqueo y falta de motivación',
      description: 'Cuando sabés lo que querés hacer pero seguís esperando a sentirte preparado para empezar.',
      href: '/falta-de-motivacion',
    },
    {
      title: 'Problemas relacionales',
      description: 'Cuando poner límites, expresar necesidades o sostener tu posición frente a otros se vuelve difícil.',
      href: '/problemas-relacionales',
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
      <section className="prose-section-full py-16 sm:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="mb-6">Psicólogo online especializado en ansiedad, sobrepensamiento y bloqueo emocional</h1>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Si sentís que tu cabeza no para, te exigís demasiado o sabés lo que querés hacer pero algo te frena, la terapia puede ayudarte a entender qué está manteniendo ese patrón y empezar a relacionarte de otra manera con lo que pensás y sentís.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Terapia individual online para adultos en Argentina y en el exterior.
          </p>
          <div className="cta-group mb-8">
            <CTAWhatsApp 
              location="hero"
              text="Consultar por WhatsApp"
            />
          </div>
          <p className="text-sm text-gray-500 italic">
            Primera consulta para conocer qué te está pasando y evaluar cómo podemos trabajarlo.
          </p>
        </div>
      </section>

      {/* Problem section */}
      <section className="prose-section-full bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Cuando pensar demasiado empieza a jugar en contra</h2>
          <p className="text-lg text-gray-700 mb-8">
            Pensar, anticipar y exigirte probablemente te haya servido muchas veces. El problema aparece cuando esas mismas estrategias empiezan a ocupar demasiado espacio.
          </p>

          <ul className="space-y-4 mb-10 text-gray-700">
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>Dándole vueltas durante horas a conversaciones, decisiones o errores.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>Anticipando constantemente lo que podría salir mal.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>Exigiéndote mucho y sintiendo que nunca es suficiente.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>Postergando decisiones por miedo a equivocarte.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>Intentando controlar pensamientos o emociones que vuelven una y otra vez.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>Sabiendo racionalmente qué querés hacer, pero sintiéndote bloqueado a la hora de hacerlo.</span>
            </li>
          </ul>

          <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded">
            <p className="text-lg text-gray-700">
              La terapia no busca que dejes de pensar ni que nunca vuelvas a sentir ansiedad. Busca que esos pensamientos y emociones dejen de decidir tanto por vos.
            </p>
          </div>
        </div>
      </section>

      {/* Therapy areas */}
      <section className="prose-section-full py-16 sm:py-24">
        <h2 className="text-center mb-12 max-w-4xl mx-auto">En esta zona incluir accesos visuales a:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {therapyAreas.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="block p-6 border border-gray-200 rounded hover:border-green-600 hover:bg-green-50 no-underline"
            >
              <h3 className="mb-3 text-gray-900">{area.title}</h3>
              <p className="text-gray-600 mb-4">{area.description}</p>
              <span className="text-green-600 font-medium">Ver más →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="prose-section-full bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
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

          <p className="text-gray-700 mb-8">
            El objetivo es que puedas hacer más lugar a experiencias internas difíciles cuando aparezcan, sin que eso implique quedar atrapado en ellas, y recuperar capacidad para actuar en función de lo que realmente te importa.
          </p>

          <div className="cta-group justify-start">
            <Link 
              href="/terapia-act"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded font-medium hover:bg-gray-800 no-underline"
            >
              Conocer más sobre mi forma de trabajar
            </Link>
          </div>
        </div>
      </section>

      {/* Evidence-based approach */}
      <section className="prose-section-full py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Terapia basada en evidencia, adaptada a cada persona</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Mi enfoque principal es la Terapia de Aceptación y Compromiso (ACT) y las terapias conductuales contextuales.
          </p>

          <p className="text-gray-700 mb-8">
            En términos simples, esto significa que no vamos a trabajar solamente sobre qué pensás, sino también sobre qué hacés cuando aparecen determinados pensamientos, emociones o sensaciones y qué consecuencias tiene eso en tu vida.
          </p>

          <p className="text-gray-700 mb-8">
            No trabajo con recetas idénticas para todo el mundo. La terapia parte de entender tu situación particular, qué querés cambiar y qué patrones pueden estar alejándote de la vida que querés construir.
          </p>

          <div className="cta-group justify-start">
            <Link 
              href="/terapia-act"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded font-medium hover:bg-gray-800 no-underline"
            >
              Conocer qué es la Terapia de Aceptación y Compromiso
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="prose-section-full bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Soy Esteban Siracusa, psicólogo</h2>
          
          <p className="text-gray-700 mb-8">
            Me recibí de Licenciado en Psicología en la Universidad de Palermo y desde entonces continué mi formación en psicoterapia, especializándome en Psicoterapia Cognitiva Integrativa en Fundación AIGLÉ y profundizando especialmente en Terapia de Aceptación y Compromiso (ACT), Psicoterapia Analítico Funcional (FAP) y terapias conductuales contextuales.
          </p>

          <p className="text-gray-700 mb-8">
            Viví varios años en Europa y actualmente trabajo de manera online con personas en Argentina y en el exterior.
          </p>

          <p className="text-gray-700 mb-8">
            Me interesa especialmente trabajar con personas que lidian con ansiedad, sobrepensamiento, autoexigencia, perfeccionismo y dificultades para avanzar frente a situaciones emocionalmente difíciles.
          </p>

          <div className="cta-group justify-start">
            <Link 
              href="/sobre-mi"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded font-medium hover:bg-gray-800 no-underline"
            >
              Más sobre mí
            </Link>
          </div>
        </div>
      </section>

      {/* How sessions work */}
      <section className="prose-section-full py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
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

          <p className="text-gray-700 mb-8">
            No necesitás llegar sabiendo exactamente "qué te pasa" ni tener un diagnóstico para consultar.
          </p>
        </div>
      </section>

      {/* Getting started */}
      <section className="prose-section-full bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Empezar es simple</h2>
          
          <ol className="space-y-8 mb-12">
            <li>
              <h3 className="mb-3">1. Me escribís por WhatsApp</h3>
              <p className="text-gray-700">Podés contarme brevemente qué te trae a consulta.</p>
            </li>
            <li>
              <h3 className="mb-3">2. Coordinamos una primera sesión</h3>
              <p className="text-gray-700">Buscamos un horario y tenemos una primera entrevista online.</p>
            </li>
            <li>
              <h3 className="mb-3">3. Evaluamos cómo seguir</h3>
              <p className="text-gray-700">La primera sesión también sirve para evaluar si mi forma de trabajar encaja con lo que estás buscando.</p>
            </li>
          </ol>

          <div className="cta-group justify-center">
            <CTAWhatsApp 
              location="bottom_cta"
              text="Consultar disponibilidad por WhatsApp"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="prose-section-full py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Preguntas frecuentes</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="mb-4">¿Las sesiones son únicamente online?</h3>
              <p className="text-gray-700">Sí. Actualmente mi práctica clínica es 100% online.</p>
            </div>

            <div>
              <h3 className="mb-4">¿Cuánto dura una sesión?</h3>
              <p className="text-gray-700">Aproximadamente 50 minutos.</p>
            </div>

            <div>
              <h3 className="mb-4">¿Con qué frecuencia son?</h3>
              <p className="text-gray-700">Habitualmente comenzamos con una frecuencia semanal. Esto puede variar según cada situación y momento del proceso.</p>
            </div>

            <div>
              <h3 className="mb-4">¿Necesito tener un diagnóstico?</h3>
              <p className="text-gray-700">No. Muchas personas consultan porque hay algo que les genera malestar, se repite o les impide avanzar, sin tener un diagnóstico previo.</p>
            </div>

            <div>
              <h3 className="mb-4">¿Atendés personas que viven fuera de Argentina?</h3>
              <p className="text-gray-700">Sí. Trabajo online con personas que viven en Argentina y en el exterior, incluyendo argentinos y otros hispanohablantes que atraviesan procesos de migración o adaptación a otro país.</p>
            </div>

            <div>
              <h3 className="mb-4">¿Cómo sé si tu enfoque es adecuado para mí?</h3>
              <p className="text-gray-700">No necesitás saberlo antes de consultar. En las primeras entrevistas podemos evaluar qué estás buscando, cómo trabajo y si tiene sentido iniciar un proceso terapéutico juntos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="prose-section-full bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-8">¿Querés empezar terapia?</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Si sentís que alguno de estos problemas está ocupando demasiado espacio en tu vida, podés escribirme y contarme brevemente qué estás buscando.
          </p>

          <div className="cta-group justify-center">
            <CTAWhatsApp 
              location="footer_cta"
              text="Consultar por WhatsApp"
            />
          </div>
        </div>
      </section>

      {/* Footer info */}
      <section className="prose-section-full py-8 text-center text-sm text-gray-600 border-t border-gray-200">
        <p>
          <strong>Esteban Siracusa</strong>
          <br />
          Lic. en Psicología
          <br />
          MN 85046
          <br />
          Atención psicológica online
        </p>
      </section>
    </>
  );
}
