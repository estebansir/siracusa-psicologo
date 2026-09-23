import { generatePageMetadata } from '@/lib/metadata';
import Image from 'next/image';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'Sobre mí | Esteban Siracusa, Psicólogo',
  description: 'Psicólogo especializado en ansiedad, sobrepensamiento y problemas relacionales. Terapia ACT online.',
  pathname: '/sobre-mi',
});

export default function SobreMi() {

  return (
    <>

      {/* Hero */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="mb-6">Soy Esteban Siracusa, psicólogo</h1>

          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Trabajo con adultos que atraviesan ansiedad, sobrepensamiento, autoexigencia, perfeccionismo, bloqueo o dificultades en sus relaciones.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Entender lo que nos pasa es importante, pero muchas veces no alcanza para cambiarlo. Por eso me interesa una terapia que nos permita comprender qué está ocurriendo y, al mismo tiempo, trabajar sobre aquello que necesitás empezar a hacer de manera diferente en tu vida.
              </p>
            </div>

            {/* Photo Desktop */}
            <div className="flex items-start justify-end h-full">
              <div className="relative w-64 sm:w-72 aspect-[3/4]">
                <Image
                  src="/images/esteban-siracusa-psicologo.jpg"
                  alt="Esteban Siracusa, psicólogo"
                  fill
                  sizes="(max-width: 1024px) 288px, 288px"
                  className="object-cover rounded-lg"
                  style={{
                    objectPosition: 'center 15%',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Mobile only: show P1 and P2 here */}
          <div className="lg:hidden space-y-6">
            <div className="relative w-full aspect-[3/4] sm:w-72 sm:mx-auto">
              <Image
                src="/images/esteban-siracusa-psicologo.jpg"
                alt="Esteban Siracusa, psicólogo"
                fill
                sizes="(max-width: 1024px) 288px, 288px"
                className="object-cover rounded-lg"
                style={{
                  objectPosition: 'center 15%',
                }}
              />
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Trabajo con adultos que atraviesan ansiedad, sobrepensamiento, autoexigencia, perfeccionismo, bloqueo o dificultades en sus relaciones.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Entender lo que nos pasa es importante, pero muchas veces no alcanza para cambiarlo. Por eso me interesa una terapia que nos permita comprender qué está ocurriendo y, al mismo tiempo, trabajar sobre aquello que necesitás empezar a hacer de manera diferente en tu vida.
            </p>
          </div>
        </div>
      </section>

      {/* Mi forma de entender */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">Mi forma de entender la terapia</h2>

          <p className="text-gray-700 mb-8">
            No entiendo la terapia como un lugar donde el terapeuta tiene todas las respuestas, pero tampoco como un espacio donde simplemente hablamos una vez por semana sobre lo que pasó.
          </p>

          <p className="text-gray-700 mb-8">
            Me interesa que podamos entender con precisión qué está ocurriendo, en qué situaciones aparece, qué lo mantiene y qué consecuencias tiene en tu vida.
          </p>

          <p className="text-gray-700 mb-8">
            A partir de ahí podemos construir hipótesis, probar formas diferentes de responder y observar qué sucede.
          </p>

          <p className="text-gray-700">
            La terapia tiene que ayudarnos a entender, pero también tiene que permitir que algo cambie.
          </p>
        </div>
      </section>

      {/* Mi enfoque terapéutico */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">Mi enfoque terapéutico</h2>

          <p className="text-gray-700 mb-8">
            Mi orientación principal es la Terapia de Aceptación y Compromiso (ACT), dentro de las terapias conductuales contextuales.
          </p>

          <p className="text-gray-700 mb-8">
            También integro herramientas de Psicoterapia Analítico Funcional (FAP) y mindfulness.
          </p>

          <p className="text-gray-700 mb-8">
            ACT nos permite trabajar sobre la relación que establecemos con pensamientos y emociones y sobre nuestra capacidad para actuar de acuerdo con lo que nos importa. FAP pone especial atención a los patrones interpersonales que pueden aparecer dentro de la propia relación terapéutica. El mindfulness puede ayudarnos a observar con mayor claridad lo que está ocurriendo mientras ocurre.
          </p>

          <p className="text-gray-700 mb-8">
            No utilizo estas herramientas como recetas idénticas para todas las personas. El modelo tiene que ayudarnos a comprender tu situación, no forzar tu experiencia para que encaje dentro del modelo.
          </p>

          <Link
            href="/terapia-act"
            className="inline-flex items-center px-5 py-2.5 border border-gray-400 text-teal-700 rounded font-medium hover:bg-gray-50 transition-colors no-underline"
          >
            Conocer más sobre mi enfoque
          </Link>
        </div>
      </section>

      {/* Formación */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">Formación</h2>

          <p className="text-gray-700 mb-8">
            Soy Licenciado en Psicología por la Universidad de Palermo.
          </p>

          <p className="text-gray-700 mb-8">
            Realicé una Especialización en Psicoterapia Cognitiva Integrativa en Fundación AIGLÉ, que me permitió formarme en diferentes modelos de psicoterapia.
          </p>

          <p className="text-gray-700 mb-8">
            Posteriormente profundicé mi formación en Terapia de Aceptación y Compromiso (ACT) y Psicoterapia Analítico Funcional (FAP) en el Centro Argentino de Terapias Contextuales (CATC), junto con formación y práctica en mindfulness.
          </p>

          <p className="text-gray-700 mb-8">
            Actualmente mi trabajo está orientado principalmente desde una perspectiva conductual contextual y funcional.
          </p>

          <p className="text-gray-700">
            En Argentina cuento con Matrícula Nacional N.º 85046.
          </p>
        </div>
      </section>

      {/* La relación terapéutica */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">La relación terapéutica importa</h2>

          <p className="text-gray-700 mb-8">
            Las técnicas importan, pero la terapia también ocurre entre dos personas.
          </p>

          <p className="text-gray-700 mb-8">
            Para trabajar necesitamos suficiente confianza como para que puedas decirme cuando algo te sirve, pero también cuando no te sirve, cuando no estás de acuerdo conmigo o cuando algo que digo no termina de representarte.
          </p>

          <p className="text-gray-700 mb-8">
            Incluso esas situaciones pueden darnos información sobre cómo te relacionás fuera de terapia.
          </p>

          <p className="text-gray-700">
            Que puedas expresar desacuerdos, dudas o incomodidades también forma parte del trabajo terapéutico.
          </p>
        </div>
      </section>

      {/* Experiencia de migración */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">También conozco la experiencia de vivir afuera</h2>

          <p className="text-gray-700 mb-8">
            Viví varios años en Dinamarca y España antes de volver a Argentina.
          </p>

          <p className="text-gray-700 mb-8">
            Esa experiencia despertó en mí un interés particular por las preguntas que pueden aparecer alrededor de migrar, pertenecer, construir vínculos a distancia y decidir dónde vivir.
          </p>

          <p className="text-gray-700 mb-8">
            Mi experiencia no es necesariamente la misma que la de quien consulta, pero me permite conocer de cerca algunas de esas situaciones.
          </p>

          <Link
            href="/psicologo-migrantes"
            className="inline-flex items-center px-5 py-2.5 border border-gray-400 text-teal-700 rounded font-medium hover:bg-gray-50 transition-colors no-underline"
          >
            Psicólogo para migrantes
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-8">¿Querés empezar terapia?</h2>

          <p className="text-lg text-gray-700 mb-8">
            Si sentís que mi forma de trabajar puede encajar con lo que estás buscando, podés escribirme y contarme brevemente qué te está pasando.
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
