import { generatePageMetadata } from '@/lib/metadata';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'Psicólogo Online para Adultos | Esteban Siracusa',
  description: 'Psicólogo online para adultos en Argentina y el exterior. Terapia para ansiedad, sobrepensamiento, procrastinación, bloqueo y dificultades relacionales.',
  pathname: '/psicologo-online',
});

const workAreas = [
  {
    title: 'Ansiedad',
    description: 'Cuando la preocupación, la anticipación o la necesidad de control empiezan a condicionar lo que hacés.',
    href: '/ansiedad',
  },
  {
    title: 'Sobrepensamiento',
    description: 'Cuando pensar más ya no te ayuda a resolver y terminás atrapado entre dudas, análisis e indecisión.',
    href: '/sobrepensamiento',
  },
  {
    title: 'Bloqueo y procrastinación',
    description: 'Cuando sabés qué querés hacer, pero postergás, evitás o esperás a sentirte preparado.',
    href: '/falta-de-motivacion',
  },
  {
    title: 'Dificultades relacionales',
    description: 'Cuando te cuesta poner límites, expresar lo que necesitás o sostener tu posición frente a otros.',
    href: '/problemas-relacionales',
  },
];

const textLinkClassName =
  'inline-flex items-center text-teal-700 font-medium hover:text-teal-800 hover:underline underline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 rounded-sm';

export default function PsicologoOnline() {
  return (
    <>
      {/* Hero */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="mb-6">Psicólogo online para adultos</h1>

          <p className="text-xl text-gray-600 mb-6">
            Trabajo online con adultos que quieren entender y cambiar patrones relacionados con la ansiedad, el sobrepensamiento, la autoexigencia, el bloqueo o sus relaciones.
          </p>

          <p className="text-lg text-gray-600">
            La terapia es por videollamada y podés hacerla desde Argentina o desde el exterior.
          </p>
        </div>
      </section>

      {/* What we can work on */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">¿Qué podemos trabajar?</h2>

          <ul className="divide-y divide-gray-200 border-y border-gray-200 pl-0! mb-0! list-none">
            {workAreas.map((area) => (
              <li key={area.href} className="py-5 mb-0!">
                <Link href={area.href} className="group block no-underline rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700">
                  <span className="block text-lg font-semibold text-gray-900 group-hover:text-teal-800 transition-colors">
                    {area.title} <span className="text-teal-700" aria-hidden="true">→</span>
                  </span>
                  <span className="block mt-1 text-gray-700">{area.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How I work */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">¿Cómo trabajo en terapia?</h2>

          <p className="text-gray-700 mb-6">
            Además de hablar sobre lo que te pasa, prestamos atención a qué hacés frente a eso que te pasa.
          </p>

          <p className="text-gray-700 mb-6">
            A veces evitamos, postergamos, buscamos tranquilidad o seguimos pensando hasta sentir que tenemos una respuesta. Esas estrategias pueden ayudar en el momento y, al mismo tiempo, terminar manteniendo el problema.
          </p>

          <p className="text-gray-700 mb-6">
            Mi orientación principal es la <strong>Terapia de Aceptación y Compromiso (ACT)</strong> y las terapias conductuales contextuales.
          </p>

          <Link href="/terapia-act" className={textLinkClassName}>
            Conocer mi forma de trabajar →
          </Link>
        </div>
      </section>

      {/* How sessions work */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-4">¿Cómo son las sesiones?</h2>

          <p className="text-sm font-semibold text-teal-700 mb-8">
            Videollamada · 50 minutos
          </p>

          <p className="text-gray-700 mb-6">
            En los primeros encuentros buscamos entender qué te está pasando, qué te gustaría cambiar y qué puede estar manteniendo el problema. A partir de ahí definimos objetivos y empezamos a trabajar sobre situaciones concretas.
          </p>

          <p className="text-gray-700">
            Durante la primera sesión también podés preguntarme lo que necesites sobre mi forma de trabajar. Al final podemos evaluar si tiene sentido continuar y cómo hacerlo.
          </p>
        </div>
      </section>

      {/* Argentina / abroad */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">Terapia online desde Argentina o el exterior</h2>

          <p className="text-gray-700 mb-6">
            Atiendo a adultos en Argentina y a personas de habla hispana que viven en otros países.
          </p>

          <p className="text-gray-700 mb-6">
            Viví varios años en Dinamarca y España, y tengo un interés particular por las dificultades que pueden aparecer al construir una vida entre países, vínculos y lugares de pertenencia.
          </p>

          <Link href="/psicologo-migrantes" className={textLinkClassName}>
            Psicólogo para personas en el exterior →
          </Link>
        </div>
      </section>

      {/* About me */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">Sobre mí</h2>

          <p className="text-gray-700 mb-6">
            Soy Esteban Siracusa, psicólogo. Trabajo principalmente desde terapias conductuales contextuales y me interesa que la terapia permita no solo entender un problema, sino también empezar a producir cambios concretos fuera de la sesión.
          </p>

          <Link href="/sobre-mi" className={textLinkClassName}>
            Conocer más sobre mí →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-8">¿Querés empezar terapia?</h2>

          <p className="text-lg text-gray-700 mb-8">
            Podés escribirme por WhatsApp y contarme brevemente qué te está pasando y qué estás buscando trabajar. Vemos si puedo ayudarte y coordinamos una primera sesión.
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
