import { generatePageMetadata } from '@/lib/metadata';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import Link from 'next/link';
import Schema from '@/components/Schema';

export const metadata = generatePageMetadata({
  title: 'Terapia de Aceptación y Compromiso (ACT) online',
  description: 'ACT: enfoque conductual contextual para flexibilidad psicológica, valores y acción. Terapia online profesional.',
  pathname: '/terapia-act',
});

export default function TerapiaACT() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿ACT pertenece a la tradición conductual?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. ACT pertenece a la tradición conductual y contextual. Comparte principios con terapia cognitivo-conductual pero con diferencias importantes en el objetivo y enfoque.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Aceptación significa resignación?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Aceptación significa hacer lugar a determinadas experiencias internas cuando luchar contra ellas está teniendo un costo mayor que experimentarlas. La aceptación es una herramienta para recuperar libertad de acción.'
        }
      },
      {
        '@type': 'Question',
        name: '¿El objetivo es eliminar pensamientos negativos?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. ACT no busca pensamiento positivo ni eliminar pensamientos negativos. Busca desarrollar capacidad para experimentarlos sin que determinen automáticamente qué hacés después.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Mindfulness es obligatorio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. El mindfulness es una herramienta que puede ser útil, pero no es obligatorio. Entrena la capacidad de observar sin reaccionar automáticamente, pero no necesariamente implica meditación.'
        }
      },
      {
        '@type': 'Question',
        name: '¿ACT se limita a problemas de ansiedad?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. ACT es aplicable a muchas dificultades psicológicas: depresión, problemas relacionales, bloqueo, pérdida de dirección. El enfoque es flexible según la persona y su situación.'
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
          <h1 className="mb-6">Terapia de Aceptación y Compromiso (ACT) online</h1>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Muchas personas empiezan terapia con un objetivo comprensible:
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium italic">
            "Quiero dejar de sentirme así."
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            ACT propone ampliar la pregunta:
          </p>
          
          <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded mb-8 text-center">
            <p className="text-lg font-semibold text-gray-900">
              ¿Qué tipo de vida querés construir y qué está interfiriendo actualmente con que avances hacia ella?
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-teal-50 rounded-lg border-l-4 border-teal-700 p-6 sm:p-8 mb-8 text-center">
            <p className="text-gray-800">
              ACT busca desarrollar una relación más flexible con pensamientos y emociones difíciles para que no necesites esperar a sentirte de determinada manera antes de hacer aquello que es importante para vos.
            </p>
          </div>

          <div className="cta-group mb-8">
            <CTAWhatsApp 
              location="hero"
              text="Consultar por WhatsApp"
            />
          </div>
        </div>
      </section>

      {/* Qué es ACT */}
      <section className="prose-section-full bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">¿Qué es ACT?</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            La Terapia de Aceptación y Compromiso es un enfoque perteneciente a las terapias conductuales contextuales.
          </p>

          <p className="text-gray-700 mb-8">
            Pensamientos, emociones, recuerdos y sensaciones difíciles son inevitables.
          </p>

          <p className="text-gray-700 mb-8">
            El objetivo no es resignarse frente a ellos, sino desarrollar mayor capacidad para experimentarlos sin que determinen automáticamente qué hacemos después.
          </p>
        </div>
      </section>

      {/* Aceptar */}
      <section className="prose-section-full py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Aceptar no significa resignarse</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Aceptar no significa aprobar, conformarse ni permanecer pasivamente.
          </p>

          <p className="text-gray-700 mb-8">
            Significa hacer lugar a determinadas experiencias internas cuando luchar contra ellas está teniendo un costo mayor que experimentarlas.
          </p>

          <p className="text-gray-700 mb-8">
            La aceptación no es el objetivo final. Es una herramienta para recuperar libertad de acción.
          </p>
        </div>
      </section>

      {/* No todo lo que pensás */}
      <section className="prose-section-full bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">No todo lo que pensás necesita ser resuelto</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            ACT trabaja, entre otras cosas, sobre defusión cognitiva: observar pensamientos como pensamientos sin tratarlos automáticamente como descripciones literales u órdenes.
          </p>

          <p className="text-gray-700 mb-8">
            No buscamos pensamiento positivo.
          </p>
        </div>
      </section>

      {/* Pregunta central */}
      <section className="prose-section-full py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Pregunta central</h2>
          
          <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded">
            <p className="text-lg text-gray-700 font-medium">
              ¿Esta estrategia está funcionando para construir la vida que querés o solamente está funcionando para sentirte mejor durante los próximos minutos?
            </p>
          </div>

          <p className="text-gray-700 mt-8">
            ¿Qué estás haciendo para no sentir lo que sentís?
          </p>
        </div>
      </section>

      {/* Valores */}
      <section className="prose-section-full bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Valores</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            No se trata solamente de reducir síntomas.
          </p>

          <p className="text-gray-700 mb-8">
            También exploramos qué relaciones, proyectos, maneras de actuar y direcciones merecen tu esfuerzo.
          </p>
        </div>
      </section>

      {/* Flexibilidad psicológica */}
      <section className="prose-section-full py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Flexibilidad psicológica</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            La flexibilidad psicológica implica ampliar el repertorio de respuestas disponibles y responder según el contexto, en lugar de quedar atrapado siempre en la misma respuesta automática.
          </p>
        </div>
      </section>

      {/* En una sesión */}
      <section className="prose-section-full bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">¿Cómo se ve ACT dentro de una sesión?</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Trabajamos con situaciones concretas, observación en sesión, ejercicios experienciales y acciones fuera de sesión.
          </p>

          <p className="text-gray-700 mb-8">
            Además de ACT, integro herramientas de Psicoterapia Analítico Funcional (FAP) y prácticas basadas en mindfulness cuando resultan útiles.
          </p>

          <p className="text-gray-700 mb-8">
            FAP pone especial atención a lo que ocurre en la propia relación terapéutica. Algunos patrones que generan dificultades afuera también pueden aparecer dentro de la sesión: buscar aprobación, evitar un desacuerdo, exigirse encontrar la respuesta correcta, minimizar lo que uno necesita o tener dificultad para mostrarse vulnerable.
          </p>

          <p className="text-gray-700 mb-8">
            El mindfulness puede ayudarnos a entrenar la capacidad de observar pensamientos, emociones y sensaciones mientras están ocurriendo, sin reaccionar automáticamente. No implica necesariamente meditar.
          </p>
        </div>
      </section>

      {/* ACT para ansiedad y sobrepensamiento */}
      <section className="prose-section-full py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">ACT para ansiedad y sobrepensamiento</h2>
          
          <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded mb-8">
            <p className="text-lg text-gray-700 font-medium">
              ¿Qué harías si no necesitaras resolver primero todo lo que ocurre dentro de tu cabeza?
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Link 
              href="/ansiedad"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded font-medium hover:bg-gray-800 no-underline"
            >
              Leer sobre ansiedad
            </Link>
            <Link 
              href="/sobrepensamiento"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded font-medium hover:bg-gray-800 no-underline"
            >
              Leer sobre sobrepensamiento
            </Link>
          </div>
        </div>
      </section>

      {/* Cambio */}
      <section className="prose-section-full bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">¿ACT significa que nunca intentamos cambiar?</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            No.
          </p>

          <p className="text-gray-700 mb-8">
            La pregunta es funcional:
          </p>

          <p className="text-gray-700 mb-8">
            ¿Qué estrategia resulta útil en esta situación y qué consecuencias está teniendo?
          </p>
        </div>
      </section>

      {/* Mi forma de trabajar */}
      <section className="prose-section-full py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Mi forma de trabajar</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Mi orientación principal es ACT dentro de un marco de terapias conductuales contextuales.
          </p>

          <p className="text-gray-700 mb-8">
            Mi formación también incluye FAP y mindfulness.
          </p>

          <p className="text-gray-700 mb-8">
            Esto hace que la terapia no se centre únicamente en analizar situaciones externas. También prestamos atención a lo que está pasando en el momento presente y a los patrones que pueden aparecer entre terapeuta y paciente durante la propia sesión.
          </p>

          <p className="text-gray-700 mb-8">
            No utilizo estas herramientas como protocolos idénticos para todas las personas.
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

      {/* FAQ */}
      <section className="prose-section-full bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Preguntas frecuentes</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="mb-4">¿ACT pertenece a la tradición conductual?</h3>
              <p className="text-gray-700">Sí. ACT pertenece a la tradición conductual y contextual. Comparte principios con terapia cognitivo-conductual pero con diferencias importantes en el objetivo y enfoque.</p>
            </div>

            <div>
              <h3 className="mb-4">¿Aceptación significa resignación?</h3>
              <p className="text-gray-700">No. Aceptación significa hacer lugar a determinadas experiencias internas cuando luchar contra ellas está teniendo un costo mayor que experimentarlas. La aceptación es una herramienta para recuperar libertad de acción.</p>
            </div>

            <div>
              <h3 className="mb-4">¿El objetivo es eliminar pensamientos negativos?</h3>
              <p className="text-gray-700">No. ACT no busca pensamiento positivo ni eliminar pensamientos negativos. Busca desarrollar capacidad para experimentarlos sin que determinen automáticamente qué hacés después.</p>
            </div>

            <div>
              <h3 className="mb-4">¿Mindfulness es obligatorio?</h3>
              <p className="text-gray-700">No. El mindfulness es una herramienta que puede ser útil, pero no es obligatorio. Entrena la capacidad de observar sin reaccionar automáticamente, pero no necesariamente implica meditación.</p>
            </div>

            <div>
              <h3 className="mb-4">¿ACT se limita a problemas de ansiedad?</h3>
              <p className="text-gray-700">No. ACT es aplicable a muchas dificultades psicológicas: depresión, problemas relacionales, bloqueo, pérdida de dirección. El enfoque es flexible según la persona y su situación.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cierre */}
      <section className="prose-section-full py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-8">No necesitás esperar a sentirte diferente para empezar a actuar diferente.</h2>
          
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
