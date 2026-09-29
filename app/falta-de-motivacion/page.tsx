import { generatePageMetadata } from '@/lib/metadata';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'Terapia para Falta de Motivación y Bloqueo | Esteban Siracusa',
  description: 'Terapia online para procrastinación, falta de motivación y bloqueo. Trabajá sobre lo que interfiere entre lo que querés hacer y lo que finalmente hacés.',
  pathname: '/falta-de-motivacion',
});

const patterns = [
  'Postergás una tarea hasta que la urgencia finalmente te obliga a hacerla.',
  'Planificás, investigás u organizás mucho más tiempo del que pasás haciendo.',
  'Esperás a tener más ganas, energía o sentirte preparado para empezar.',
  'Querés hacer algo bien y terminás postergándolo por miedo a hacerlo mal.',
  'Empezás proyectos o cambios con entusiasmo, pero después te cuesta sostenerlos.',
];

const textLinkClassName =
  'inline-flex items-center text-teal-700 font-medium hover:text-teal-800 hover:underline underline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 rounded-sm';

export default function FaltaDeMotivacion() {
  return (
    <>
      {/* Hero */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="mb-6">Psicólogo online para falta de motivación y bloqueo</h1>

          <p className="text-xl text-gray-600 mb-6">
            A veces sabés qué querés hacer y, sin embargo, cuando llega el momento te cuesta empezar, sostenerlo o terminarlo.
          </p>

          <p className="text-lg text-gray-600">
            Podés postergar hasta que aparece la urgencia, prepararte durante horas sin empezar o esperar a sentirte más motivado o preparado para actuar.
          </p>
        </div>
      </section>

      {/* Recognition */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">Cuando sabés qué hacer, pero no conseguís hacerlo</h2>

          <ul className="space-y-4 pl-0! mb-8! text-gray-700">
            {patterns.map((pattern) => (
              <li key={pattern} className="flex gap-3">
                <span className="text-teal-700 font-bold flex-shrink-0">•</span>
                <span>{pattern}</span>
              </li>
            ))}
          </ul>

          <p className="text-gray-900 mb-0">
            <strong>Que algo te importe no garantiza que sea fácil ponerte en movimiento. Y que te cueste hacerlo no nos dice todavía por qué está pasando.</strong>
          </p>
        </div>
      </section>

      {/* Central distinction */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">No todas las dificultades para actuar significan lo mismo</h2>

          <p className="text-gray-700 mb-6">
            A veces empezar una tarea implica encontrarte con aburrimiento, incertidumbre, frustración o la posibilidad de equivocarte. Postergarla puede aliviar esa incomodidad en el momento, aunque después aparezcan presión, culpa o más ansiedad.
          </p>

          <p className="text-gray-700 mb-6">
            Otras veces, planificar, investigar o seguir preparándote puede sentirse como estar avanzando y, al mismo tiempo, permitirte postergar el momento de exponerte a hacer. Esto puede aparecer especialmente cuando algo te importa mucho y querés hacerlo bien.
          </p>

          <p className="text-gray-700 mb-6">
            Pero no toda dificultad para actuar es evitación. También puede haber cansancio real, sobrecarga o falta de descanso y recursos.
          </p>

          <p className="text-gray-900 mb-0">
            <strong>Parte del trabajo es distinguir qué está pasando en tu caso, en lugar de asumir de entrada que te falta motivación o disciplina.</strong>
          </p>
        </div>
      </section>

      {/* How we work */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">¿Cómo trabajamos esto en terapia?</h2>

          <p className="text-gray-700 mb-6">
            En terapia podemos mirar situaciones concretas: qué querías hacer, qué ocurrió justo antes de postergarlo, qué hiciste en ese momento y qué pasó después.
          </p>

          <p className="text-gray-700 mb-6">
            A partir de ahí podemos probar formas diferentes de responder y observar qué ocurre. A veces eso implica aprender a empezar sin esperar a sentirte completamente motivado o preparado; otras veces, reconocer que necesitás reducir exigencias o recuperar descanso.
          </p>

          <p className="text-gray-700 mb-6">
            También importa para qué querés hacer algo. Podemos diferenciar entre acciones que tienen sentido para vos y objetivos que sostenés principalmente porque sentís que deberías cumplirlos.
          </p>

          <Link href="/terapia-act" className={textLinkClassName}>
            Conocer mi forma de trabajar →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-8">Que te cueste avanzar no significa que necesites exigirte más</h2>

          <p className="text-lg text-gray-700 mb-8">
            Si postergar, bloquearte o abandonar lo que empezás está interfiriendo con cosas importantes para vos, podemos trabajar sobre lo que está pasando.
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
