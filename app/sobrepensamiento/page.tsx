import { generatePageMetadata } from '@/lib/metadata';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'Terapia para Sobrepensamiento | Esteban Siracusa',
  description: 'Terapia online para sobrepensamiento, rumiación e indecisión. Trabajá sobre los patrones que te mantienen atrapado pensando sin encontrar claridad.',
  pathname: '/sobrepensamiento',
});

const patterns = [
  'Repasás conversaciones intentando determinar qué quisiste decir, qué entendió la otra persona o qué podrías haber hecho distinto.',
  'Volvés una y otra vez sobre una decisión aunque ya hayas considerado las opciones principales.',
  'Imaginás distintos escenarios intentando anticiparte a todas las posibilidades.',
  'Postergás una decisión o una acción porque todavía no sentís suficiente claridad.',
];

const textLinkClassName =
  'inline-flex items-center text-teal-700 font-medium hover:text-teal-800 hover:underline underline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 rounded-sm';

export default function Sobrepensamiento() {
  return (
    <>
      {/* Hero */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="mb-6">Terapia para sobrepensamiento</h1>

          <p className="text-xl text-gray-600 mb-6">
            Pensar puede ayudarte a resolver problemas y tomar decisiones. Pero a veces seguís analizando sin encontrar información nueva ni sentir que el tema está resuelto.
          </p>

          <p className="text-lg text-gray-600">
            Repasás conversaciones, imaginás escenarios o evaluás una y otra vez las mismas opciones. Cuanto más intentás encontrar certeza, más difícil se vuelve salir del análisis y avanzar.
          </p>
        </div>
      </section>

      {/* Recognition */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">Cuando pensar deja de ayudarte a resolver</h2>

          <ul className="space-y-4 pl-0! mb-8! text-gray-700">
            {patterns.map((pattern) => (
              <li key={pattern} className="flex gap-3">
                <span className="text-teal-700 font-bold flex-shrink-0">•</span>
                <span>{pattern}</span>
              </li>
            ))}
          </ul>

          <p className="text-gray-900 mb-0">
            <strong>Más pensamiento no necesariamente produce más claridad.</strong>
          </p>
        </div>
      </section>

      {/* Useful thinking vs certainty-seeking */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">Pensar para resolver y pensar para sentir certeza</h2>

          <p className="text-gray-700 mb-6">
            Pensar es útil cuando te permite obtener información nueva, evaluar alternativas o decidir un próximo paso.
          </p>

          <p className="text-gray-700 mb-6">
            Pero algunas preguntas no tienen una respuesta capaz de darte certeza completa. En esos casos, seguir analizando puede dejar de acercarte a una solución y convertirse en una forma de intentar sentirte seguro antes de actuar.
          </p>

          <p className="text-gray-700 mb-6">
            El problema no es pensar mucho en sí mismo, sino quedar atrapado repitiendo un proceso que ya no está produciendo información nueva.
          </p>

          <p className="text-gray-900 mb-0">
            <strong>A veces avanzar implica tomar una decisión o dar un paso sin sentir que el tema quedó completamente resuelto.</strong>
          </p>
        </div>
      </section>

      {/* How we work on overthinking */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">¿Cómo trabajamos el sobrepensamiento en terapia?</h2>

          <p className="text-gray-700 mb-6">
            En terapia buscamos identificar en qué situaciones empezás a quedar atrapado pensando, qué intentás conseguir a través de ese análisis y qué termina pasando después.
          </p>

          <p className="text-gray-700 mb-6">
            A partir de ahí podemos trabajar sobre situaciones concretas, aprendiendo a distinguir cuándo seguir pensando puede ayudarte y cuándo necesitás actuar aunque todavía haya dudas o incertidumbre.
          </p>

          <Link href="/terapia-act" className={textLinkClassName}>
            Conocer mi forma de trabajar →
          </Link>
        </div>
      </section>

      {/* Overthinking and anxiety */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">Sobrepensamiento y ansiedad</h2>

          <p className="text-gray-700 mb-6">
            A veces el sobrepensamiento funciona como un intento de reducir la ansiedad: si logro anticipar todos los escenarios o encontrar la decisión correcta, quizás pueda sentirme tranquilo.
          </p>

          <p className="text-gray-700 mb-6">
            El problema aparece cuando buscar esa certeza te lleva a seguir pensando sin llegar a sentirla.
          </p>

          <Link href="/ansiedad" className={textLinkClassName}>
            Leer sobre ansiedad →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-8">No necesitás estar completamente seguro para empezar a moverte</h2>

          <p className="text-lg text-gray-700 mb-8">
            Si sentís que pasás demasiado tiempo analizando, dudando o repasando situaciones y eso está interfiriendo con tus decisiones o actividades, podemos trabajar sobre ello.
          </p>

          <CTAWhatsApp
            location="final_cta"
            text="Consultar por WhatsApp"
          />
        </div>
      </section>
    </>
  );
}
