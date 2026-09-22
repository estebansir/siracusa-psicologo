import { generatePageMetadata } from '@/lib/metadata';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import Link from 'next/link';
import Schema from '@/components/Schema';

export const metadata = generatePageMetadata({
  title: 'Bloqueo y falta de motivación: procrastinación y parálisis',
  description: 'Terapia para procrastinación, bloqueo y falta de motivación. ACT y conductual contextual online.',
  pathname: '/falta-de-motivacion',
});

export default function FaltadeMotivacion() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿La falta de motivación equivale necesariamente a depresión?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. La falta de motivación puede tener muchas causas: ansiedad, perfeccionismo, agotamiento, pérdida de sentido o miedo. Aunque si la dificultad es generalizada, puede ser útil evaluar con un profesional.'
        }
      },
      {
        '@type': 'Question',
        name: '¿La procrastinación puede trabajarse?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. Muchas veces la procrastinación responde a un ciclo: tarea → ansiedad → postergación → alivio. En terapia trabajamos a identificar estos ciclos y ampliar formas alternativas de responder.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Hay propuestas entre sesiones?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. Dependiendo de lo que estemos trabajando, pueden haber ejercicios, observaciones o propuestas pequeñas para practicar fuera de la sesión, siempre adecuadas a tu situación particular.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Se puede trabajar el abandono repetido de proyectos?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. El abandono repetido suele responder a patrones específicos: miedo al fracaso, autoexigencia, falta de dirección o cambios de motivación. Podemos trabajar en identificar qué está manteniendo ese patrón.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Necesito saber exactamente qué quiero antes de consultar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. De hecho, muchas personas consultan precisamente porque no saben qué quieren o tienen dificultad para actuar en función de lo que creen que quieren. Eso es parte de lo que podemos explorar en terapia.'
        }
      }
    ]
  };

  return (
    <>
      <Schema schema={faqSchema} />

      {/* Hero */}
      <section className="prose-section-full py-16 sm:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="mb-6">Psicólogo online para falta de motivación y bloqueo</h1>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Sabés lo que querés hacer.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Pero lo postergás. Te cuesta empezar. Esperás a tener más energía, más claridad o más ganas.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            A veces llamamos a esto falta de motivación. Pero no siempre el problema es simplemente que faltan ganas.
          </p>
          <div className="cta-group mb-8">
            <CTAWhatsApp 
              location="hero"
              text="Consultar por WhatsApp"
            />
          </div>
        </div>
      </section>

      {/* Sé lo que tengo que hacer */}
      <section className="prose-section-full bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">"Sé lo que tengo que hacer, pero no lo hago"</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Entre querer hacer algo y hacerlo pueden estar ocurriendo muchas cosas:
          </p>

          <p className="text-gray-700 mb-8">
            ansiedad, miedo a hacerlo mal, tareas demasiado grandes, esperar sentirse preparado, agotamiento o pérdida de sentido.
          </p>

          <p className="text-gray-700 mb-8">
            No todos los bloqueos se resuelven de la misma manera.
          </p>
        </div>
      </section>

      {/* Esperar a tener ganas */}
      <section className="prose-section-full py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Esperar a tener ganas</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            La motivación puede convertirse en requisito:
          </p>

          <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded mb-8">
            <p className="text-gray-700">
              "Cuando tenga ganas, empiezo."
              <br />
              "Cuando me sienta mejor, vuelvo."
              <br />
              "Cuando tenga más confianza, lo intento."
            </p>
          </div>

          <p className="text-gray-700 mb-8">
            Muchas veces las ganas pueden aparecer después de haber empezado.
          </p>
        </div>
      </section>

      {/* Procrastinar */}
      <section className="prose-section-full bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Procrastinar no siempre es organización</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Puede existir:
          </p>

          <p className="text-gray-700 mb-8">
            tarea → ansiedad/inseguridad/miedo → postergación → alivio
          </p>

          <p className="text-gray-700 mb-8">
            La procrastinación puede funcionar muy bien a corto plazo y muy mal a largo plazo.
          </p>
        </div>
      </section>

      {/* Perfeccionismo */}
      <section className="prose-section-full py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Perfeccionismo y parálisis</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Cuanto más importante es hacerlo bien, más difícil puede volverse empezar.
          </p>

          <p className="text-gray-700 mb-8">
            Podemos trabajar sobre criterios más flexibles, resultados imperfectos y aprender haciendo.
          </p>
        </div>
      </section>

      {/* Pensar como postergar */}
      <section className="prose-section-full bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Pensar como forma de postergar</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Investigar, planificar, comparar y comprender pueden ser útiles.
          </p>

          <p className="text-gray-700 mb-8">
            Pero también pueden permitirte permanecer cerca de la acción sin realizarla.
          </p>

          <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded">
            <p className="text-lg text-gray-700 font-medium">
              ¿Necesito seguir pensando esto o necesito probar algo y obtener información de la experiencia?
            </p>
          </div>

          <div className="cta-group justify-start mt-8">
            <Link 
              href="/sobrepensamiento"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded font-medium hover:bg-gray-800 no-underline"
            >
              Leer sobre sobrepensamiento
            </Link>
          </div>
        </div>
      </section>

      {/* Motivación o dirección */}
      <section className="prose-section-full py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">¿Motivación o dirección?</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Desde ACT también exploramos qué merece tu esfuerzo.
          </p>

          <p className="text-gray-700 mb-8">
            "No tengo ganas" y "esto no me importa" no son lo mismo.
          </p>
        </div>
      </section>

      {/* Acción y motivación */}
      <section className="prose-section-full bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">La acción no siempre viene después de la motivación</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            También puede ocurrir:
          </p>

          <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded mb-8">
            <p className="text-lg text-gray-700 font-medium">
              acción → experiencia → motivación
            </p>
          </div>

          <p className="text-gray-700 mb-8">
            No se trata de obligarte a producir constantemente, sino de recuperar capacidad de acción cuando esperar a sentirte diferente te está dejando detenido.
          </p>
        </div>
      </section>

      {/* Qué podemos trabajar */}
      <section className="prose-section-full py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">¿Qué podemos trabajar?</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Procrastinación, bloqueo, perfeccionismo, autoexigencia, miedo al fracaso, decisiones, abandono de proyectos, pérdida de dirección, evitación y hábitos.
          </p>

          <p className="text-gray-700 mb-8">
            Una persona agotada no necesita necesariamente exigirse más.
          </p>

          <p className="text-gray-700 mb-8">
            No asumir que la solución siempre sea "hacer más".
          </p>

          <p className="text-gray-700 mb-8">
            Cuando la falta de motivación es general, es importante evaluar factores psicológicos, físicos, médicos, farmacológicos o de estilo de vida. Cuando corresponda, sugiero evaluación profesional complementaria.
          </p>
        </div>
      </section>

      {/* Cómo trabajo */}
      <section className="prose-section-full bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">¿Cómo trabajo?</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            ACT como orientación principal, integrando FAP y mindfulness cuando resulten relevantes.
          </p>

          <p className="text-gray-700 mb-8">
            No buscamos un sistema perfecto para no procrastinar nunca, sino ampliar capacidad para hacer cosas importantes incluso en días en los que las ganas no acompañan.
          </p>

          <div className="cta-group justify-start">
            <Link 
              href="/terapia-act"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded font-medium hover:bg-gray-800 no-underline"
            >
              Conocer mi enfoque terapéutico
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="prose-section-full py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Preguntas frecuentes</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="mb-4">¿La falta de motivación equivale necesariamente a depresión?</h3>
              <p className="text-gray-700">No. La falta de motivación puede tener muchas causas: ansiedad, perfeccionismo, agotamiento, pérdida de sentido o miedo. Aunque si la dificultad es generalizada, puede ser útil evaluar con un profesional.</p>
            </div>

            <div>
              <h3 className="mb-4">¿La procrastinación puede trabajarse?</h3>
              <p className="text-gray-700">Sí. Muchas veces la procrastinación responde a un ciclo: tarea → ansiedad → postergación → alivio. En terapia trabajamos a identificar estos ciclos y ampliar formas alternativas de responder.</p>
            </div>

            <div>
              <h3 className="mb-4">¿Hay propuestas entre sesiones?</h3>
              <p className="text-gray-700">Sí. Dependiendo de lo que estemos trabajando, pueden haber ejercicios, observaciones o propuestas pequeñas para practicar fuera de la sesión, siempre adecuadas a tu situación particular.</p>
            </div>

            <div>
              <h3 className="mb-4">¿Se puede trabajar el abandono repetido de proyectos?</h3>
              <p className="text-gray-700">Sí. El abandono repetido suele responder a patrones específicos: miedo al fracaso, autoexigencia, falta de dirección o cambios de motivación. Podemos trabajar en identificar qué está manteniendo ese patrón.</p>
            </div>

            <div>
              <h3 className="mb-4">¿Necesito saber exactamente qué quiero antes de consultar?</h3>
              <p className="text-gray-700">No. De hecho, muchas personas consultan precisamente porque no saben qué quieren o tienen dificultad para actuar en función de lo que creen que quieren. Eso es parte de lo que podemos explorar en terapia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cierre */}
      <section className="prose-section-full bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-8">No siempre necesitás sentirte motivado para empezar a moverte.</h2>
          
          <div className="cta-group justify-center">
            <CTAWhatsApp 
              location="bottom_cta"
              text="Consultar por WhatsApp"
            />
          </div>
        </div>
      </section>
    </>
  );
}
