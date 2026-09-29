import { generatePageMetadata } from '@/lib/metadata';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'Psicólogo para Problemas Relacionales | Esteban Siracusa',
  description: 'Psicólogo online para dificultades relacionales. Terapia para trabajar límites, necesidad de aprobación, conflicto y patrones que se repiten en tus vínculos.',
  pathname: '/problemas-relacionales',
});

const patterns = [
  'Decís que sí cuando en realidad querías decir que no.',
  'Evitás expresar una opinión o desacuerdo por miedo a generar conflicto.',
  'Te cuesta pedir lo que necesitás o marcar un límite cuando podría molestar al otro.',
  'Necesitás saber que la otra persona está bien con vos para poder quedarte tranquilo.',
  'Cedés durante mucho tiempo y después aparece enojo o resentimiento.',
];

const textLinkClassName =
  'inline-flex items-center text-teal-700 font-medium hover:text-teal-800 hover:underline underline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 rounded-sm';

export default function ProblemasRelacionales() {
  return (
    <>
      {/* Hero */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="mb-6">Psicólogo online para problemas relacionales</h1>

          <p className="text-xl text-gray-600 mb-6">
            A veces las dificultades no aparecen solamente en cómo te sentís cuando estás solo, sino en lo que te pasa cuando estás con otros.
          </p>

          <p className="text-lg text-gray-600">
            Puede costarte decir que no, expresar un desacuerdo, pedir lo que necesitás o sostener tu posición cuando hacerlo podría generar conflicto, culpa o rechazo.
          </p>
        </div>
      </section>

      {/* Recognition */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">Cuando relacionarte implica dejarte de lado</h2>

          <ul className="space-y-4 pl-0! mb-8! text-gray-700">
            {patterns.map((pattern) => (
              <li key={pattern} className="flex gap-3">
                <span className="text-teal-700 font-bold flex-shrink-0">•</span>
                <span>{pattern}</span>
              </li>
            ))}
          </ul>

          <p className="text-gray-900 mb-0">
            <strong>El problema no siempre es no saber qué límite poner. Muchas veces es qué aparece cuando intentás ponerlo y qué hacés frente a eso.</strong>
          </p>
        </div>
      </section>

      {/* When expressing yourself has a cost */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">Cuando expresarte puede tener un costo</h2>

          <p className="text-gray-700 mb-6">
            Decir que no, expresar una necesidad o sostener un desacuerdo puede traer culpa, miedo a decepcionar al otro o preocupación por cómo va a reaccionar.
          </p>

          <p className="text-gray-700 mb-6">
            Ceder, callarte o explicar de más puede reducir esa incomodidad en el momento. Pero si se convierte en la forma habitual de manejar tus relaciones, los demás pueden terminar sabiendo poco sobre lo que necesitás y vos acumulando malestar.
          </p>

          <p className="text-gray-700 mb-0">
            Pedir una opinión o buscar apoyo no tiene nada de problemático en sí mismo. La dificultad aparece cuando necesitás la aprobación de otra persona para poder confiar en tu propia posición.
          </p>
        </div>
      </section>

      {/* Recurring patterns */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">Cuando el mismo patrón aparece con distintas personas</h2>

          <p className="text-gray-700 mb-6">
            A veces cambian las personas y las situaciones, pero terminás ocupando un lugar parecido: quien cede, quien intenta tranquilizar al otro, quien evita discutir o quien acumula malestar hasta explotar.
          </p>

          <p className="text-gray-700 mb-0">
            Mirar estas repeticiones no significa asumir que todos los problemas de una relación dependen de vos. Significa identificar <strong className="text-gray-900">qué parte de esa dinámica sí está dentro de tu posibilidad de cambiar.</strong>
          </p>
        </div>
      </section>

      {/* How we work on this */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">¿Cómo trabajamos esto en terapia?</h2>

          <p className="text-gray-700 mb-6">
            En terapia podemos observar situaciones concretas: qué pasó, qué necesitabas, qué apareció cuando intentaste expresarlo y qué terminaste haciendo.
          </p>

          <p className="text-gray-700 mb-6">
            Algunos de esos patrones también pueden aparecer en la propia terapia. Por ejemplo, puede costarte decirme que no estás de acuerdo conmigo, que algo que dije te molestó o que una intervención no te sirvió. Cuando eso ocurre, también podemos trabajar con lo que está pasando en ese momento.
          </p>

          <p className="text-gray-700 mb-6">
            El trabajo es individual: no buscamos cambiar a las otras personas, sino ampliar tus posibilidades de actuar de otra manera dentro de tus relaciones.
          </p>

          <Link href="/terapia-act" className={textLinkClassName}>
            Conocer mi forma de trabajar →
          </Link>
        </div>
      </section>

      {/* Relationships and overthinking */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">Relaciones y sobrepensamiento</h2>

          <p className="text-gray-700 mb-6">
            Las dificultades relacionales también pueden continuar mucho después de una conversación: repasando qué dijiste, interpretando mensajes o preguntándote si la otra persona se molestó.
          </p>

          <p className="text-gray-700 mb-6">
            Cuando ese análisis empieza a repetirse sin darte información nueva, el sobrepensamiento puede convertirse en otro problema a trabajar.
          </p>

          <Link href="/sobrepensamiento" className={textLinkClassName}>
            Leer sobre sobrepensamiento →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-8">Relacionarte con los demás no debería implicar dejarte de lado</h2>

          <p className="text-lg text-gray-700 mb-8">
            Si te cuesta poner límites, expresar lo que necesitás o sentís que repetís formas de relacionarte que terminan generándote malestar, podemos trabajar sobre ello.
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
