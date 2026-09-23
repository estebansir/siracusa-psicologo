import { generatePageMetadata } from '@/lib/metadata';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'Terapia para Falta de Motivación y Bloqueo | Esteban Siracusa',
  description: 'Terapia online para procrastinación, falta de motivación y bloqueo. Trabajá sobre lo que interfiere entre lo que querés hacer y lo que finalmente hacés.',
  pathname: '/falta-de-motivacion',
});

export default function FaltaDeMotivacion() {

  return (
    <>

      {/* Hero */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="mb-6">Psicólogo online para falta de motivación y bloqueo</h1>
          <p className="text-xl text-gray-600">
            A veces sabés perfectamente qué querés hacer y, sin embargo, te cuesta empezar, concentrarte o sostener lo que te proponés.

Postergás tareas, te distraés, planificás más de lo que hacés o esperás a tener más energía, claridad o motivación para empezar.

En terapia podemos trabajar para entender qué está interfiriendo entre lo que querés hacer y lo que finalmente terminás haciendo.
          </p>
        </div>
      </section>

      {/* Manifestaciones */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">Cuando sabés qué hacer, pero no conseguís hacerlo</h2>

          <ul className="space-y-4 mb-10 text-gray-700">
            <li className="flex gap-3">
              <span className="text-teal-700 font-bold">•</span>
              <span>Postergás tareas importantes hasta que la urgencia te obliga a hacerlas.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-700 font-bold">•</span>
              <span>Empezás algo y rápidamente terminás haciendo otra cosa.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-700 font-bold">•</span>
              <span>Te cuesta concentrarte o sostener la atención durante suficiente tiempo.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-700 font-bold">•</span>
              <span>Planificás, investigás u organizás mucho, pero te cuesta pasar a la acción.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-700 font-bold">•</span>
              <span>Esperás a sentirte con más ganas, energía o claridad.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-700 font-bold">•</span>
              <span>Una tarea parece tan grande que no sabés por dónde empezar.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-700 font-bold">•</span>
              <span>Querés hacer algo bien y terminás postergándolo por miedo a hacerlo mal.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-700 font-bold">•</span>
              <span>Empezás proyectos con entusiasmo pero te cuesta sostenerlos.</span>
            </li>
          </ul>

          <p className="text-gray-700 font-semibold mt-8">
            <strong>No todos estos problemas tienen la misma causa. Entender qué está pasando en tu caso es parte del trabajo.</strong>
          </p>
        </div>
      </section>

      {/* Procrastinación */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">Procrastinación: no siempre es falta de organización</h2>

          <p className="text-gray-700 mb-8">
            A veces procrastinar parece un problema de agenda, disciplina o productividad. Pero organizarse mejor no siempre alcanza.
          </p>

          <p className="text-gray-700 mb-8">
            Una tarea puede generar aburrimiento, ansiedad, inseguridad, frustración o miedo a equivocarte. Postergarla produce alivio inmediato, aunque después aparezcan culpa, presión o más ansiedad.
          </p>

          <p className="text-gray-700">
            Por eso no trabajamos solamente sobre cómo organizar tu tiempo. También intentamos entender qué hace tan difícil empezar o sostener determinadas acciones.
          </p>
        </div>
      </section>

      {/* Perfeccionismo y sobrepensamiento */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">Perfeccionismo, sobrepensamiento y bloqueo</h2>

          <p className="text-gray-700 mb-8">
            A veces el bloqueo no aparece porque algo te importe poco, sino precisamente porque te importa demasiado hacerlo bien.
          </p>

          <p className="text-gray-700 mb-8">
            Revisar, investigar, planificar o esperar a encontrar la mejor manera de empezar puede parecer preparación. Pero también puede convertirse en otra forma de no exponerte a equivocarte, frustrarte o descubrir que el resultado no es perfecto.
          </p>

          <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 border border-gray-200 rounded text-center mb-8">
            <p className="text-gray-700 font-medium">
              ¿Necesito seguir pensando esto o necesito probar algo y obtener información de la experiencia?
            </p>
          </div>

          <Link
            href="/sobrepensamiento"
            className="inline-flex items-center px-5 py-2.5 border border-gray-400 text-teal-700 rounded font-medium hover:bg-gray-50 transition-colors no-underline"
          >
            Leer sobre sobrepensamiento
          </Link>
        </div>
      </section>

      {/* No siempre necesitás */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">No siempre necesitás sentirte motivado para actuar</h2>

          <p className="text-gray-700 mb-8">
            Es fácil imaginar una secuencia: primero aparecen las ganas y después actuamos.
          </p>

          <p className="text-gray-700 mb-8">
            Pero muchas veces ocurre también al revés: empezamos a actuar sin demasiadas ganas y la motivación aparece después, cuando entramos en contacto con la actividad, avanzamos o vemos algún resultado.
          </p>

          <p className="text-gray-700 mb-8">
            Esto no significa obligarte constantemente a hacer más. También necesitamos distinguir entre estar evitando algo difícil y estar realmente agotado, saturado o necesitando descanso.
          </p>

          <p className="text-gray-700">
            El objetivo no es convertirte en una máquina productiva. Es depender menos de sentirte exactamente de determinada manera para poder hacer cosas que son importantes para vos.
          </p>
        </div>
      </section>

      {/* Cómo lo trabajamos */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">Cómo lo trabajamos</h2>

          <p className="text-gray-700 mb-8">
            Desde ACT y las terapias conductuales contextuales podemos observar qué ocurre justo antes de postergar, distraerte o abandonar una tarea, qué obtenés en ese momento y qué consecuencias aparecen después.
          </p>

          <p className="text-gray-700 mb-8">
            Dependiendo del caso, podemos trabajar sobre procrastinación, atención, hábitos, perfeccionismo, miedo al fracaso, evitación, organización o dificultad para sostener acciones.
          </p>

          <p className="text-gray-700 mb-8">
            También prestamos atención a algo fundamental: si lo que estás intentando hacer realmente importa para vos o si estás intentando cumplir expectativas que ya no tienen demasiado sentido en tu vida.
          </p>

          <Link
            href="/terapia-act"
            className="inline-flex items-center px-5 py-2.5 border border-gray-400 text-teal-700 rounded font-medium hover:bg-gray-50 transition-colors no-underline"
          >
            Conocer mi enfoque
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-8">No siempre necesitás sentirte motivado para empezar a moverte</h2>

          <p className="text-lg text-gray-700 mb-8">
            Si te cuesta empezar, concentrarte o sostener lo que te proponés y sentís que eso está limitando áreas importantes de tu vida, podemos trabajar para entender qué está interfiriendo.
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
