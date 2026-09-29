import { generatePageMetadata } from '@/lib/metadata';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'Psicólogo Online para Ansiedad | Esteban Siracusa',
  description: 'Psicólogo online para ansiedad. Terapia para comprender qué mantiene la preocupación, el miedo, la necesidad de control y la evitación.',
  pathname: '/ansiedad',
});

const patterns = [
  'Necesitás sentir certeza antes de poder avanzar.',
  'Evitás situaciones o decisiones que podrían generarte ansiedad.',
  'Buscás tranquilidad preguntando, comprobando o intentando asegurarte de que todo va a estar bien.',
  'Postergás cosas importantes esperando sentirte menos ansioso.',
];

const textLinkClassName =
  'inline-flex items-center text-teal-700 font-medium hover:text-teal-800 hover:underline underline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 rounded-sm';

export default function Ansiedad() {
  return (
    <>
      {/* Hero */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="mb-6">Psicólogo online para ansiedad</h1>

          <p className="text-xl text-gray-600 mb-6">
            A veces entendés racionalmente que una situación no debería preocuparte tanto y, sin embargo, tu cabeza y tu cuerpo siguen reaccionando como si hubiera algo que resolver o evitar.
          </p>

          <p className="text-lg text-gray-600">
            En terapia podemos trabajar sobre qué pasa cuando aparece la ansiedad y cómo respondés frente a ella.
          </p>
        </div>
      </section>

      {/* Recognition */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">Cuando la ansiedad empieza a ocupar demasiado espacio</h2>

          <ul className="space-y-4 pl-0! mb-8! text-gray-700">
            {patterns.map((pattern) => (
              <li key={pattern} className="flex gap-3">
                <span className="text-teal-700 font-bold flex-shrink-0">•</span>
                <span>{pattern}</span>
              </li>
            ))}
          </ul>

          <p className="text-gray-900 mb-0">
            <strong>A veces, el intento constante de no sentir ansiedad termina limitando más tu vida que la ansiedad misma.</strong>
          </p>
        </div>
      </section>

      {/* When understanding is not enough */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">Cuando entender lo que te pasa no alcanza para cambiar</h2>

          <p className="text-gray-700 mb-6">
            Podés entender que una preocupación es exagerada, que probablemente algo no salga tan mal como imaginás o que estás anticipando demasiado. Y aun así, la ansiedad puede seguir apareciendo.
          </p>

          <p className="text-gray-700 mb-6">
            Intentar convencerte, distraerte o encontrar certeza puede aliviar durante un rato, pero no siempre cambia el problema.
          </p>

          <p className="text-gray-900 mb-6">
            <strong>No todo problema psicológico se resuelve encontrando un argumento mejor.</strong>
          </p>

          <p className="text-gray-700 mb-6">
            Trabajar con la ansiedad tampoco significa conseguir que nunca vuelva a aparecer. El objetivo es que puedas hacer lo que necesitás hacer incluso cuando aparecen la incertidumbre, el miedo o la incomodidad.
          </p>

          <p className="text-gray-900 mb-0">
            <strong>La pregunta no es solamente “¿cómo hago para que esta ansiedad se vaya?”, sino también “¿qué estoy dejando de hacer mientras intento no sentirla?”</strong>
          </p>
        </div>
      </section>

      {/* How we work on anxiety */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">¿Cómo trabajamos la ansiedad en terapia?</h2>

          <p className="text-gray-700 mb-6">
            En terapia buscamos identificar qué situaciones disparan la ansiedad, qué hacés cuando aparece y qué consecuencias tienen esas respuestas.
          </p>

          <p className="text-gray-700 mb-6">
            A partir de ahí podemos trabajar sobre situaciones concretas, probando otras formas de responder y observando qué pasa cuando dejás de organizar tus decisiones alrededor de evitar la ansiedad.
          </p>

          <Link href="/terapia-act" className={textLinkClassName}>
            Conocer mi forma de trabajar →
          </Link>
        </div>
      </section>

      {/* Anxiety and overthinking */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">Ansiedad y sobrepensamiento</h2>

          <p className="text-gray-700 mb-6">
            La ansiedad y el sobrepensamiento suelen aparecer juntos. Pensar durante horas puede convertirse en una forma de intentar conseguir certeza sobre algo que, en realidad, no puede resolverse completamente pensando.
          </p>

          <Link href="/sobrepensamiento" className={textLinkClassName}>
            Leer sobre sobrepensamiento →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-8">Que la ansiedad aparezca no significa que tenga que decidir por vos</h2>

          <p className="text-lg text-gray-700 mb-8">
            Si sentís que la ansiedad está condicionando demasiado tus decisiones, relaciones o actividades, podemos evaluar juntos qué está pasando y cómo trabajarlo.
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
