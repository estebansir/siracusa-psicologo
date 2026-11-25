import { generatePageMetadata } from '@/lib/metadata';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import Link from 'next/link';
import IntroWhatsAppBlock from '@/components/IntroWhatsAppBlock';
import MobileWhatsAppButton from '@/components/MobileWhatsAppButton';

export const metadata = generatePageMetadata({
  title: 'Psicólogo Online para Adultos | Esteban Siracusa',
  description: 'Psicoterapia online para adultos en Argentina y el exterior. Sesiones de 50 minutos por Google Meet. Conocé cómo funciona y coordiná tu primera consulta.',
  pathname: '/psicologo-online',
});

const steps = [
  {
    title: 'Coordinamos por WhatsApp.',
    text: 'Me escribís, me contás brevemente qué te está pasando y acordamos día y horario.',
  },
  {
    title: 'Nos encontramos por Google Meet.',
    text: 'Las sesiones duran 50 minutos. Podés conectarte desde la computadora o el celular, desde un lugar donde puedas hablar con tranquilidad y privacidad.',
  },
  {
    title: 'Empezamos a trabajar.',
    text: 'En la primera sesión conversamos sobre lo que te está pasando y lo que esperás de la terapia, y podés preguntarme lo que necesites. Al final evaluamos juntos si tiene sentido continuar y cómo hacerlo.',
  },
];

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
            Atiendo a adultos en Argentina y a personas de habla hispana que viven en otros países.
          </p>

          <p className="text-lg text-gray-600">
            Acá te cuento cómo funcionan las sesiones, cómo coordinamos horarios y cuáles son las formas de pago.
          </p>

          <IntroWhatsAppBlock />
        </div>
      </section>

      {/* How online therapy works */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">¿Cómo funciona la terapia online?</h2>

          <ol className="list-none pl-0! mb-0! flex flex-col gap-5 text-gray-700">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-3 mb-0!">
                <span className="text-teal-700 font-semibold flex-shrink-0 w-5 tabular-nums">{index + 1}.</span>
                <span>
                  <strong className="text-gray-900">{step.title}</strong> {step.text}
                </span>
              </li>
            ))}
          </ol>

        </div>
      </section>

      {/* Argentina / abroad */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">Terapia online desde Argentina o el exterior</h2>

          <p className="text-gray-700 mb-6">
            Si vivís fuera de Argentina, buscamos un horario que funcione con la diferencia horaria de tu país.
          </p>

          <p className="text-gray-700 mb-6">
            Viví varios años en Dinamarca y España, y tengo un interés particular por las dificultades que pueden aparecer al construir una vida entre países, vínculos y lugares de pertenencia.
          </p>

          <Link href="/psicologo-migrantes" className={textLinkClassName}>
            Psicólogo para personas en el exterior →
          </Link>
        </div>
      </section>

      {/* Common reasons for consultation */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">Motivos frecuentes de consulta</h2>

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

      {/* About me and how I work */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">Sobre mí y mi forma de trabajar</h2>

          <p className="text-gray-700 mb-6">
            Soy Esteban Siracusa, psicólogo. Trabajo desde las terapias conductuales contextuales, principalmente la <strong>Terapia de Aceptación y Compromiso (ACT)</strong> y la <strong>Psicoterapia Analítico Funcional (FAP)</strong>.
          </p>

          <p className="text-gray-700 mb-6">
            Además de hablar sobre lo que te pasa, analizamos en qué situaciones aparece, qué hacés frente a eso y qué consecuencias tiene. A veces evitamos, postergamos, buscamos tranquilidad o seguimos pensando hasta sentir que tenemos una respuesta. Esas estrategias pueden ayudar en el momento y, al mismo tiempo, terminar manteniendo el problema.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-8">
            <Link href="/terapia-act" className={textLinkClassName}>
              Conocer mi forma de trabajar →
            </Link>
            <Link href="/sobre-mi" className={textLinkClassName}>
              Conocer más sobre mí →
            </Link>
          </div>
        </div>
      </section>

      {/* Fees and payment methods */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">Honorarios y formas de pago</h2>

          <div className="text-gray-600 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="mb-2! font-medium text-gray-700">Honorarios por sesión:</p>
              <ul className="list-none p-0! mb-0! space-y-1">
                <li className="mb-0!">Argentina: <span className="whitespace-nowrap">$50.000 ARS</span></li>
                <li className="mb-0!">Exterior: <span className="whitespace-nowrap">35 € / 40 USD</span></li>
              </ul>
            </div>
            <div>
              <p className="mb-2! font-medium text-gray-700">Formas de pago:</p>
              <ul className="list-none p-0! mb-0! space-y-1">
                <li className="mb-0!">Argentina: transferencia bancaria o Mercado Pago</li>
                <li className="mb-0!">Exterior: Revolut, Wise, transferencia IBAN o PayPal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-8">¿Querés empezar terapia?</h2>

          <p className="text-lg text-gray-700 mb-8">
            Podés escribirme por WhatsApp y contarme brevemente qué te está pasando y, si vivís fuera de Argentina, desde qué país me escribís. Vemos si puedo ayudarte y coordinamos una primera sesión.
          </p>

          <div data-wa-anchor="final">
            <CTAWhatsApp
              location="final_cta"
              text="Consultar por WhatsApp"
            />
          </div>
        </div>
      </section>

      <MobileWhatsAppButton />
    </>
  );
}
