import { generatePageMetadata } from '@/lib/metadata';
import Image from 'next/image';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'Esteban Siracusa | Psicólogo Online',
  description: 'Conocé a Esteban Siracusa, psicólogo especializado en terapias conductuales contextuales, ACT y FAP. Atención online a adultos.',
  pathname: '/sobre-mi',
});

const training = [
  'Licenciatura en Psicología — Universidad de Palermo',
  'Especialización en Psicoterapia Cognitiva Integrativa — Fundación AIGLÉ',
  'Formación en Terapia de Aceptación y Compromiso — CATC',
  'Formación en Psicoterapia Analítico Funcional — CATC',
  'Matrícula Nacional N.º 85046',
];

const textLinkClassName =
  'inline-flex items-center text-teal-700 font-medium hover:text-teal-800 hover:underline underline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 rounded-sm';

export default function SobreMi() {
  return (
    <>
      {/* Hero: mobile order H1 → photo → text; desktop text left, portrait right */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto grid gap-y-6 lg:grid-cols-2 lg:gap-x-12 items-start">
          <h1 className="mb-0! lg:col-span-2">Soy Esteban Siracusa, psicólogo</h1>

          <div className="lg:col-start-2 lg:row-start-2 lg:flex lg:justify-end">
            <div className="relative w-full aspect-[3/4] sm:w-72 sm:mx-auto lg:mx-0">
              <Image
                src="/images/esteban-siracusa-psicologo.jpg"
                alt="Esteban Siracusa, psicólogo"
                fill
                sizes="(min-width: 640px) 288px, calc(100vw - 40px)"
                className="object-cover rounded-lg"
                style={{
                  objectPosition: 'center 15%',
                }}
              />
            </div>
          </div>

          <div className="lg:col-start-1 lg:row-start-2">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Trabajo online con adultos desde una orientación principalmente conductual contextual.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Me interesa una terapia que permita entender con precisión qué está pasando y, a partir de ahí, trabajar sobre aquello que necesitás empezar a hacer de manera diferente en tu vida.
            </p>
          </div>
        </div>
      </section>

      {/* Mi forma de entender la terapia */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">Mi forma de entender la terapia</h2>

          <p className="text-gray-700 mb-6">
            No entiendo la terapia como un lugar donde el terapeuta tiene todas las respuestas. Para mí, el trabajo consiste en construir juntos una comprensión cada vez más precisa de lo que te está pasando.
          </p>

          <p className="text-gray-700 mb-6">
            Me interesa observar en qué situaciones aparece un problema, cómo respondés cuando aparece, qué puede estar manteniéndolo y qué consecuencias tiene en tu vida.
          </p>

          <p className="text-gray-700 mb-0">
            A partir de ahí podemos construir hipótesis, probar formas diferentes de responder y observar qué sucede. <strong className="text-gray-900">No se trata de encontrar una explicación perfecta, sino una comprensión que nos ayude a intervenir mejor.</strong>
          </p>
        </div>
      </section>

      {/* La relación terapéutica */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">La relación terapéutica importa</h2>

          <p className="text-gray-700 mb-6">
            Las técnicas importan, pero la terapia también ocurre entre dos personas.
          </p>

          <p className="text-gray-700 mb-6">
            Para trabajar necesito que puedas decirme cuando algo te sirve, pero también cuando no te sirve, cuando no estás de acuerdo conmigo, cuando algo que dije te molestó o cuando sentís que no termina de representar lo que te pasa.
          </p>

          <p className="text-gray-900 mb-6">
            <strong>Eso no es un problema para la terapia: es información que podemos usar para entender mejor lo que está pasando y, cuando sea necesario, ajustar la forma en que estamos trabajando.</strong>
          </p>

          <p className="text-gray-700 mb-0">
            A veces, además, algunas dificultades que aparecen fuera de terapia pueden aparecer también entre nosotros: por ejemplo, evitar un desacuerdo, buscar aprobación o tener dificultad para expresar algo que necesitás. Cuando ocurre, podemos trabajar con eso en el momento.
          </p>
        </div>
      </section>

      {/* Mi enfoque y formación */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">Mi enfoque y formación</h2>

          <p className="text-gray-700 mb-6">
            Mi orientación principal es la Terapia de Aceptación y Compromiso (ACT), dentro de las terapias conductuales contextuales. También incorporo elementos de FAP y mindfulness cuando resultan pertinentes para el trabajo.
          </p>

          <p className="text-gray-900 mb-6">
            <strong>El modelo tiene que ayudarnos a comprender tu situación, no forzar tu experiencia para que encaje dentro del modelo.</strong>
          </p>

          <div className="mb-10">
            <Link href="/terapia-act" className={textLinkClassName}>
              Conocer mi forma de trabajar →
            </Link>
          </div>

          <ul className="space-y-3 pl-0! mb-0! text-gray-700">
            {training.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-teal-700 font-bold flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Una parte de mi recorrido */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">Una parte de mi recorrido</h2>

          <p className="text-gray-700 mb-6">
            Viví varios años en Dinamarca y después en España antes de volver a Argentina. Haber construido una vida en distintos países también forma parte de mi recorrido personal.
          </p>

          <p className="text-gray-700 mb-6">
            Si estás viviendo fuera de tu país y ese contexto tiene relevancia para lo que estás atravesando, tengo una página donde explico específicamente cómo trabajo con estas situaciones.
          </p>

          <Link href="/psicologo-migrantes" className={textLinkClassName}>
            Terapia para personas que viven en el exterior →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-8">¿Querés empezar terapia?</h2>

          <p className="text-lg text-gray-700 mb-8">
            Si sentís que mi forma de trabajar puede encajar con lo que estás buscando, podés escribirme y contarme brevemente qué te está pasando. En una primera conversación también podemos evaluar juntos si tiene sentido trabajar juntos.
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
