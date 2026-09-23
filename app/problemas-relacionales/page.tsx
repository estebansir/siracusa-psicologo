import { generatePageMetadata } from '@/lib/metadata';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'Psicólogo para Problemas Relacionales | Esteban Siracusa',
  description: 'Psicólogo online para dificultades relacionales. Terapia para trabajar límites, necesidad de aprobación, conflicto y patrones que se repiten en tus vínculos.',
  pathname: '/problemas-relacionales',
});

export default function ProblemasRelacionales() {

  return (
    <>

      {/* Hero */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="mb-6">Psicólogo online para problemas relacionales</h1>
          <p className="text-xl text-gray-600">
            A veces las dificultades no aparecen solamente en cómo te sentís cuando estás solo, sino en lo que te pasa cuando estás con otros.

Puede costarte poner límites, decir que no, expresar un desacuerdo, pedir lo que necesitás o tolerar que otra persona se moleste con vos.

En terapia podemos trabajar para entender qué patrones se repiten en tus relaciones y qué te impide actuar de una manera diferente cuando aparecen.
          </p>
        </div>
      </section>

      {/* Cuando relacionarte */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">Cuando relacionarte implica dejarte de lado</h2>

          <ul className="space-y-4 mb-10 text-gray-700">
            <li className="flex gap-3">
              <span className="text-teal-700 font-bold">•</span>
              <span>Decís que sí cuando en realidad querías decir que no.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-700 font-bold">•</span>
              <span>Te cuesta poner límites por miedo a generar conflicto o decepcionar.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-700 font-bold">•</span>
              <span>Necesitás saber que la otra persona está bien con vos para poder quedarte tranquilo.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-700 font-bold">•</span>
              <span>Evitás expresar una opinión cuando pensás que puede generar desacuerdo.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-700 font-bold">•</span>
              <span>Buscás aprobación o validación antes de confiar en tus propias decisiones.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-700 font-bold">•</span>
              <span>Te cuesta pedir ayuda o expresar lo que necesitás.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-700 font-bold">•</span>
              <span>Cedés durante mucho tiempo y después aparece enojo o resentimiento.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-700 font-bold">•</span>
              <span>Terminás repitiendo dinámicas que racionalmente sabés que no te hacen bien.</span>
            </li>
          </ul>

          <p className="text-gray-700 font-semibold mt-8">
            <strong>El problema no siempre es no saber qué límite poner. Muchas veces es qué aparece cuando intentás ponerlo y qué hacés frente a eso.</strong>
          </p>
        </div>
      </section>

      {/* Límites, aprobación, conflicto */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">Límites, aprobación y conflicto</h2>

          <p className="text-gray-700 mb-8">
            Saber racionalmente que 'deberías poner límites' no significa que sea fácil hacerlo cuando aparece culpa, miedo al rechazo, inseguridad o la posibilidad de un conflicto.
          </p>

          <p className="text-gray-700 mb-8">
            Algo similar puede ocurrir con la búsqueda de aprobación. Preguntar qué piensa otra persona, pedir consejo o buscar apoyo no tiene nada de problemático en sí mismo. La dificultad aparece cuando necesitás esa validación para poder confiar en lo que pensás, sentís o decidís.
          </p>

          <p className="text-gray-700">
            En terapia podemos trabajar para que tengas más posibilidades de elegir cómo relacionarte, en lugar de responder automáticamente para evitar el malestar del momento.
          </p>
        </div>
      </section>

      {/* Cuando el mismo patrón */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">Cuando el mismo patrón aparece con distintas personas</h2>

          <p className="text-gray-700 mb-8">
            A veces cambian las parejas, amistades, compañeros de trabajo o contextos, pero algunas dificultades vuelven a aparecer.
          </p>

          <p className="text-gray-700 mb-8">
            Tal vez terminás ocupando siempre el lugar de quien cede, quien necesita tranquilizar al otro, quien evita discutir o quien acumula malestar hasta explotar.
          </p>

          <p className="text-gray-700">
            Identificar estos patrones no significa asumir que todo problema relacional depende de vos. Significa observar qué parte de esa dinámica sí está dentro de tu posibilidad de cambiar.
          </p>
        </div>
      </section>

      {/* La relación terapéutica */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">La relación terapéutica también puede ser parte del trabajo</h2>

          <p className="text-gray-700 mb-8">
            Existe una orientación terapéutica llamada FAP (Psicoterapia Analítica Funcional) donde parte del trabajo acontece dentro de la relación con el terapeuta.
          </p>

          <p className="text-gray-700 mb-8">
            Si en la sesión aparecen patrones similares a los que experimentás en otras relaciones, podemos trabajar directamente con lo que ocurre entre nosotros. Esto permite que el aprendizaje sea más directo y contextualizado.
          </p>

          <p className="text-gray-700 mb-8">
            Trabajo en psicoterapia individual online. El foco está en comprender tu experiencia y aquello sobre lo que vos podés intervenir.
          </p>
        </div>
      </section>

      {/* Links contextuales */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">Relaciones y sobrepensamiento</h2>

          <p className="text-gray-700 mb-8">
            Los problemas relacionales también pueden continuar mucho después de que una conversación terminó: repasar qué dijiste, interpretar mensajes, preguntarte si la otra persona se molestó o pensar durante horas qué deberías responder.
          </p>

          <p className="text-gray-700 mb-8">
            Cuando esto ocupa demasiado espacio, el sobrepensamiento también puede convertirse en parte del problema.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Link
              href="/ansiedad"
              className="inline-flex items-center px-5 py-2.5 border border-gray-400 text-teal-700 rounded font-medium hover:bg-gray-50 transition-colors no-underline"
            >
              Leer sobre ansiedad
            </Link>
            <Link
              href="/sobrepensamiento"
              className="inline-flex items-center px-5 py-2.5 border border-gray-400 text-teal-700 rounded font-medium hover:bg-gray-50 transition-colors no-underline"
            >
              Leer sobre sobrepensamiento
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-8">Relacionarte con los demás no debería requerir desaparecer vos de la relación</h2>

          <p className="text-lg text-gray-700 mb-8">
            Si te cuesta poner límites, sostener tus necesidades o sentís que repetís patrones que te generan malestar en tus vínculos, podemos trabajar sobre ello.
          </p>

          <CTAWhatsApp
            location="footer_cta"
            text="Consultar por WhatsApp"
          />
        </div>
      </section>
    </>
  );
}
