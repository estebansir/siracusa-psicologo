import { generatePageMetadata } from '@/lib/metadata';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'Terapia para Sobrepensamiento | Esteban Siracusa',
  description: 'Terapia online para sobrepensamiento, rumiación e indecisión. Trabajá sobre los patrones que te mantienen atrapado pensando sin encontrar claridad.',
  pathname: '/sobrepensamiento',
});

export default function Sobrepensamiento() {

  return (
    <>

      {/* Hero */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="mb-6">Cuando no podés dejar de pensar</h1>
          <div className="space-y-6">
            <p className="text-xl text-gray-600">
              Pensar puede ayudarte a resolver problemas, anticiparte y tomar mejores decisiones. Pero a veces cuanto más pensás, menos claridad encontrás.
            </p>

            <p className="text-xl text-gray-600">
              Repasás conversaciones, imaginás escenarios, analizás todas las opciones o intentás encontrar la decisión correcta. Y aun después de horas pensando, seguís sin sentir que el tema está resuelto.
            </p>

            <p className="text-xl text-gray-600">
              En terapia podemos trabajar para entender qué función está cumpliendo ese sobrepensamiento y desarrollar otras formas de responder cuando aparece la duda o la incertidumbre.
            </p>
          </div>
        </div>
      </section>

      {/* ¿Pensar mucho o quedar atrapado pensando? */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">¿Pensar mucho o quedar atrapado pensando?</h2>

          <ul className="space-y-4 mb-10 text-gray-700">
            <li className="flex gap-3">
              <span className="text-teal-700 font-bold">•</span>
              <span>Repasando conversaciones, analizando qué dijiste, qué quisiera haber dicho, qué quiso decir la otra persona.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-700 font-bold">•</span>
              <span>Imaginando cómo podrían desarrollarse los eventos, qué podría salir mal, cómo reaccionarías.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-700 font-bold">•</span>
              <span>Comparando opciones sin terminar de decidir porque cada opción tiene pro y contras.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-700 font-bold">•</span>
              <span>Buscando constantemente señales de que elegiste la opción correcta.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-700 font-bold">•</span>
              <span>Revisando errores del pasado, pensando cómo hubieras podido hacerlo diferente.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-700 font-bold">•</span>
              <span>Intentando resolver preguntas que no tienen una respuesta clara: ¿qué pasa si...? ¿y si...? ¿debería...?</span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-700 font-bold">•</span>
              <span>Postergando decisiones esperando que llegue la certeza.</span>
            </li>
          </ul>

          <p className="text-gray-700 font-semibold mt-8">
            <strong>Más pensamiento no necesariamente produce más claridad.</strong>
          </p>
        </div>
      </section>

      {/* Cuando entenderte no alcanza */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">Cuando entenderte no alcanza para cambiar</h2>

          <p className="text-gray-700 mb-8">
            Podés conocer tus patrones, leer psicología y comprender racionalmente lo que ocurre.
          </p>

          <p className="text-gray-700 mb-8">
            Y seguir quedando atrapado en el mismo patrón de pensamiento.
          </p>

          <p className="text-gray-700 mb-8">
            Esto ocurre porque la solución no está solamente en comprender mejor. También necesitás cambiar qué hacés cuando aparecen esos pensamientos.
          </p>

          <p className="text-gray-700 mb-8">
            <strong>Comprender un patrón y modificarlo son dos cosas diferentes.</strong>
          </p>

          <p className="text-gray-700">
            En terapia no trabajamos solamente en lo que pensás. También observamos qué hacés frente a eso que pensás.
          </p>
        </div>
      </section>

      {/* No necesitás resolver todo */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">No necesitás resolver todo para poder avanzar</h2>

          <p className="text-gray-700 mb-8">
            Una pregunta importante es: ¿realmente necesito seguir pensando sobre esto ahora, o puedo actuar aunque todavía haya incertidumbre?
          </p>

          <p className="text-gray-700 mb-8">
            A veces el mayor progreso viene no de tener todo pensado, sino de reconocer cuándo es momento de pasar a la acción a pesar de la incertidumbre.
          </p>

          <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 border border-gray-200 rounded text-center mb-8">
            <p className="text-gray-700 font-medium">
              ¿Necesito resolver este pensamiento para poder seguir con lo que estaba haciendo?
            </p>
          </div>

          <p className="text-gray-700">
            Muchas veces la respuesta es no. Y actuar a pesar de eso es donde empieza el cambio.
          </p>
        </div>
      </section>

      {/* Cómo lo trabajamos */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">Cómo lo trabajamos</h2>

          <p className="text-gray-700 mb-8">
            Mi orientación principal es la Terapia de Aceptación y Compromiso (ACT) y las terapias conductuales contextuales.
          </p>

          <p className="text-gray-700 mb-8">
            Podemos trabajar sobre rumiación, preocupación, indecisión, búsqueda de certeza, perfeccionismo y procrastinación, observando qué función cumple el pensamiento en cada situación.
          </p>

          <p className="text-gray-700 mb-8">
            Parte del trabajo consiste en aprender a distinguir cuándo seguir pensando puede ayudarte a resolver algo y cuándo es más útil actuar aunque el tema todavía no se sienta completamente resuelto.
          </p>

          <Link
            href="/terapia-act"
            className="inline-flex items-center px-5 py-2.5 border border-gray-400 text-teal-700 rounded font-medium hover:bg-gray-50 transition-colors no-underline"
          >
            Conocer mi enfoque
          </Link>
        </div>
      </section>

      {/* Ansiedad y sobrepensamiento */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">Ansiedad y sobrepensamiento</h2>

          <p className="text-gray-700 mb-8">
            Ante la incertidumbre, pensar puede convertirse en una forma de intentar conseguir seguridad.
          </p>

          <p className="text-gray-700 mb-8">
            El problema es que algunas preguntas no tienen una respuesta que produzca certeza absoluta.
          </p>

          <Link
            href="/ansiedad"
            className="inline-flex items-center px-5 py-2.5 border border-gray-400 text-teal-700 rounded font-medium hover:bg-gray-50 transition-colors no-underline"
          >
            Leer sobre ansiedad
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-8">No necesitás tener todo resuelto para poder avanzar</h2>

          <p className="text-lg text-gray-700 mb-8">
            Si sentís que pasás demasiado tiempo dentro de tu cabeza y eso está interfiriendo con tus decisiones, actividades o relaciones, podemos trabajar sobre ello.
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
