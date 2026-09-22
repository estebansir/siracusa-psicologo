import { generatePageMetadata } from '@/lib/metadata';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import Link from 'next/link';
import Schema from '@/components/Schema';

export const metadata = generatePageMetadata({
  title: 'Sobrepensamiento: cuando no podés dejar de pensar',
  description: 'Terapia para sobrepensamiento, rumiación y búsqueda de certeza. Abordaje contextual conductual online.',
  pathname: '/sobrepensamiento',
});

export default function Sobrepensamiento() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Sobrepensar es un trastorno?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sobrepensar es un patrón que puede estar presente en distintas dificultades psicológicas. Lo importante es comprender qué función cumple en tu caso particular y qué costo tiene para tu vida.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Cuál es la relación entre sobrepensamiento y ansiedad?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ante incertidumbre, pensar puede convertirse en una forma de intentar conseguir seguridad. Cuando algunas preguntas no tienen respuestas que produzcan certeza absoluta, pensar más deja de acercarte a una solución.'
        }
      },
      {
        '@type': 'Question',
        name: '¿El objetivo es dejar la mente en blanco?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. El objetivo es recuperar la posibilidad de elegir cuándo vale la pena seguir pensando y cuándo es momento de actuar aun sin tener todo resuelto.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Qué ocurre si ya entiendo por qué sobrepenso?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Entender un patrón y modificarlo son dos cosas diferentes. Por eso en terapia trabajamos no solamente en lo que pensás, sino también en qué hacés cuando aparecen esos pensamientos.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Cómo funciona la modalidad online?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Las sesiones se realizan mediante videollamada de aproximadamente 50 minutos. Trabajamos con situaciones concretas, análisis y ejercicios, además de propuestas para practicar fuera de la sesión.'
        }
      }
    ]
  };

  return (
    <>
      <Schema schema={faqSchema} />

      {/* Hero */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="mb-6">Cuando no podés dejar de pensar</h1>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Analizar antes de actuar, anticipar problemas y revisar decisiones puede ser útil. El problema aparece cuando pensar deja de ayudarte a decidir y empieza a impedirte avanzar.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Quizás pasás mucho tiempo repasando conversaciones, imaginando escenarios, intentando tomar la decisión correcta o buscando una certeza que nunca termina de llegar.
          </p>
          <div className="cta-group mb-8">
            <CTAWhatsApp 
              location="hero"
              text="Consultar por WhatsApp"
            />
          </div>
        </div>
      </section>

      {/* Pensar mucho vs sobrepensar */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-left mb-12">¿Pensar mucho o sobrepensar?</h2>
          <p className="text-lg text-gray-700 mb-8">
            La diferencia está en qué efecto tiene ese pensamiento sobre tu vida.
          </p>
          <p className="text-gray-700 mb-8">
            Podés encontrarte:
          </p>

          <ul className="space-y-4 mb-10 text-gray-700">
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>Repasando conversaciones.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>Analizando qué quiso decir otra persona.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>Imaginando escenarios futuros.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>Comparando opciones sin decidir.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>Buscando señales de que elegiste correctamente.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>Revisando errores del pasado.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>Preparando excesivamente.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>Postergando decisiones hasta sentirte seguro.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>Pensando sobre por qué estás pensando tanto.</span>
            </li>
          </ul>

          <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded">
            <p className="text-lg text-gray-700">
              Más pensamiento no necesariamente produce más claridad.
            </p>
          </div>
        </div>
      </section>

      {/* Si lo pienso un poco más */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-left mb-12">"Si lo pienso un poco más, quizás encuentre la respuesta"</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            El problema aparece cuando la pregunta que intentás resolver no admite el nivel de certeza que estás buscando.
          </p>

          <p className="text-gray-700 mb-8">
            Pensar deja de funcionar como herramienta para resolver y empieza a funcionar como una manera de intentar reducir la incertidumbre.
          </p>

          <h3 className="mb-6 mt-10">El alivio de seguir pensando</h3>
          <p className="text-gray-700 mb-8">
            Mientras analizás, sentís que estás haciendo algo. Cerrar el tema implica aceptar que quizá no puedas estar completamente seguro.
          </p>

          <p className="text-gray-700 mb-8">
            El problema no es simplemente que tu cabeza produzca demasiados pensamientos. Es que puede haberse vuelto difícil dejar una pregunta abierta y seguir adelante sin resolverla completamente.
          </p>
        </div>
      </section>

      {/* Sobrepensamiento y ansiedad */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-left mb-12">Sobrepensamiento, ansiedad y búsqueda de certeza</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Si cada vez que aparece incertidumbre necesitás resolverla pensando, comprobando o buscando seguridad, tu tolerancia a no saber puede ir disminuyendo.
          </p>

          <div className="cta-group justify-start">
            <Link 
              href="/ansiedad"
              className="inline-flex items-center px-5 py-2.5 border border-gray-400 text-teal-700 rounded font-medium hover:bg-gray-50 transition-colors no-underline"
            >
              Leer sobre ansiedad
            </Link>
          </div>
        </div>
      </section>

      {/* Cuando entenderte no alcanza */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-left mb-12">Cuando entenderte no alcanza para cambiar</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Podés conocer tus patrones, leer psicología y comprender racionalmente lo que ocurre.
          </p>

          <p className="text-gray-700 mb-8">
            Pero comprender un patrón y modificarlo son dos cosas diferentes.
          </p>
        </div>
      </section>

      {/* Pregunta diferente */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-left mb-12">De "¿cómo dejo de pensar?" a una pregunta diferente</h2>
          
          <p className="text-gray-700 mb-8">
            En lugar de:
          </p>

          <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded mb-8">
            <p className="text-gray-700 font-medium">
              "¿Cómo hago para dejar de pensar esto?"
            </p>
          </div>

          <p className="text-gray-700 mb-8">
            podemos preguntarnos:
          </p>

          <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded">
            <p className="text-gray-700 font-medium">
              "¿Necesito resolver este pensamiento para poder seguir con lo que estaba haciendo?"
            </p>
          </div>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-left mb-12">¿Cómo trabajamos el sobrepensamiento?</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Desde ACT y las terapias conductuales contextuales podemos trabajar sobre incertidumbre, necesidad de certeza, decisiones, rumiación, preocupación, autoexigencia y evitación.
          </p>

          <p className="text-gray-700 mb-8">
            El objetivo es recuperar la posibilidad de elegir cuándo vale la pena seguir pensando y cuándo es momento de actuar aun sin tener todo resuelto.
          </p>

          <div className="cta-group justify-start">
            <Link 
              href="/terapia-act"
              className="inline-flex items-center px-5 py-2.5 border border-gray-400 text-teal-700 rounded font-medium hover:bg-gray-50 transition-colors no-underline"
            >
              Conocer mi enfoque terapéutico
            </Link>
          </div>
        </div>
      </section>

      {/* Bloqueo */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-left mb-12">Cuando el sobrepensamiento termina en bloqueo</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            A veces pensar demasiado no produce una mala decisión.
          </p>

          <p className="text-gray-700 mb-8">
            Produce ninguna decisión.
          </p>

          <p className="text-gray-700 mb-8">
            La terapia puede ayudar a distinguir entre una decisión que realmente necesita más información y una decisión que estás intentando tomar sin aceptar ningún margen de incertidumbre.
          </p>

          <div className="cta-group justify-start">
            <Link 
              href="/falta-de-motivacion"
              className="inline-flex items-center px-5 py-2.5 border border-gray-400 text-teal-700 rounded font-medium hover:bg-gray-50 transition-colors no-underline"
            >
              Leer sobre bloqueo y falta de motivación
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-left mb-12">Preguntas frecuentes</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="mb-4">¿Sobrepensar es un trastorno?</h3>
              <p className="text-gray-700">Sobrepensar es un patrón que puede estar presente en distintas dificultades psicológicas. Lo importante es comprender qué función cumple en tu caso particular y qué costo tiene para tu vida.</p>
            </div>

            <div>
              <h3 className="mb-4">¿Cuál es la relación entre sobrepensamiento y ansiedad?</h3>
              <p className="text-gray-700">Ante incertidumbre, pensar puede convertirse en una forma de intentar conseguir seguridad. Cuando algunas preguntas no tienen respuestas que produzcan certeza absoluta, pensar más deja de acercarte a una solución.</p>
            </div>

            <div>
              <h3 className="mb-4">¿El objetivo es dejar la mente en blanco?</h3>
              <p className="text-gray-700">No. El objetivo es recuperar la posibilidad de elegir cuándo vale la pena seguir pensando y cuándo es momento de actuar aun sin tener todo resuelto.</p>
            </div>

            <div>
              <h3 className="mb-4">¿Qué ocurre si ya entiendo por qué sobrepenso?</h3>
              <p className="text-gray-700">Entender un patrón y modificarlo son dos cosas diferentes. Por eso en terapia trabajamos no solamente en lo que pensás, sino también en qué hacés cuando aparecen esos pensamientos.</p>
            </div>

            <div>
              <h3 className="mb-4">¿Cómo funciona la modalidad online?</h3>
              <p className="text-gray-700">Las sesiones se realizan mediante videollamada de aproximadamente 50 minutos. Trabajamos con situaciones concretas, análisis y ejercicios, además de propuestas para practicar fuera de la sesión.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cierre */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-8">No necesitás tener todo resuelto para poder avanzar.</h2>
          
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
