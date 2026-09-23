import { generatePageMetadata } from '@/lib/metadata';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import Link from 'next/link';
import Schema from '@/components/Schema';

export const metadata = generatePageMetadata({
  title: 'Psicólogo Online para Argentinos en el Exterior',
  description: 'Terapia online para migrantes, mudanzas internacionales. Abordaje contextual conductual.',
  pathname: '/psicologo-migrantes',
});

export default function PsicologoMigrantes() {
  return (
    <>
      {/* Hero */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="mb-6">Psicólogo online para argentinos y latinoamericanos que viven en el exterior</h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Vivir en otro país puede ser una decisión elegida, deseada y aun así traer dificultades.

Cambian los vínculos, las rutinas, las referencias culturales y, muchas veces, también la forma en que pensás quién sos, dónde querés estar y qué querés construir.

Trabajo online y en español con argentinos y otros latinoamericanos que viven en el exterior.
          </p>
        </div>
      </section>

      {/* Estar bien afuera */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">Estar bien afuera no significa que tenga que ser fácil</h2>

          <p className="text-gray-700 mb-8">
            Podés estar contento con la decisión de haberte ido y extrañar. Tener una buena vida afuera y sentirte solo. Querer quedarte y preguntarte cómo sería volver.
          </p>

          <p className="text-gray-700 mb-8">
            Esas experiencias no necesariamente se contradicen.
          </p>

          <p className="text-gray-700">
            Algunas dificultades aparecen precisamente porque hay varias cosas importantes para vos al mismo tiempo: una pareja en un país, una familia en otro, una carrera que construiste afuera, amistades que quedaron lejos o distintas ideas sobre dónde querés vivir.
          </p>
        </div>
      </section>

      {/* Cuando ninguna opción */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">Cuando ninguna opción parece completamente correcta</h2>

          <p className="text-gray-700 mb-8">
            ¿Me quedo o vuelvo? ¿Sigo invirtiendo en la vida que construí acá? ¿Me acerco a mi familia? ¿Priorizo mi relación o mi carrera?
          </p>

          <p className="text-gray-700 mb-8">
            Algunas decisiones migratorias tienen algo particularmente difícil: elegir una opción también implica renunciar a algo valioso de la otra.
          </p>

          <p className="text-gray-700">
            En esos casos, seguir pensando no siempre produce una respuesta completamente segura. Podemos trabajar para distinguir qué información necesitás realmente y qué parte de la decisión requiere tolerar incertidumbre y elegir.
          </p>

          <Link
            href="/sobrepensamiento"
            className="inline-flex items-center px-5 py-2.5 border border-gray-400 text-teal-700 rounded font-medium hover:bg-gray-50 transition-colors no-underline mt-6"
          >
            Leer sobre sobrepensamiento
          </Link>
        </div>
      </section>

      {/* Vínculos, distancia, pertenencia */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">Vínculos, distancia y pertenencia</h2>

          <p className="text-gray-700 mb-8">
            Vivir afuera también puede cambiar tu manera de relacionarte.
          </p>

          <p className="text-gray-700 mb-8">
            Amistades que se sostienen por mensajes. Padres que envejecen mientras estás lejos. Eventos familiares a los que no llegás. Nuevas relaciones en un contexto cultural diferente. La sensación de volver a Argentina y descubrir que vos cambiaste y el lugar al que volvés también.
          </p>

          <p className="text-gray-700">
            A veces aparece la sensación de pertenecer a dos lugares y, al mismo tiempo, no pertenecer completamente a ninguno.

No necesariamente necesitás elegir una única identidad o un único lugar para poder construir una vida que tenga sentido para vos.
          </p>
        </div>
      </section>

      {/* La presión de que valga la pena */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">La presión de que migrar haya valido la pena</h2>

          <p className="text-gray-700 mb-8">
            Cuando invertiste tiempo, dinero y esfuerzo en irte, puede aparecer una presión adicional: 'después de todo lo que hice para estar acá, debería estar bien'.
          </p>

          <p className="text-gray-700 mb-8">
            Volver puede sentirse como fracasar. Quedarte puede sentirse como abandonar algo importante. Cambiar de país puede parecer empezar otra vez.
          </p>

          <p className="text-gray-700">
            En terapia podemos intentar separar lo que realmente querés de lo que sentís que deberías querer por las decisiones que tomaste, las expectativas de otros o el esfuerzo ya realizado.
          </p>
        </div>
      </section>

      {/* Mi experiencia */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">Conozco algunas de estas preguntas también desde la experiencia</h2>

          <p className="text-gray-700">
            Viví varios años en Dinamarca y posteriormente en España antes de volver a Argentina.
          </p>

          <p className="text-gray-700 mt-6">
            Esa experiencia despertó en mí un interés particular por las preguntas que pueden aparecer alrededor de migrar, pertenecer, construir vínculos a distancia y decidir dónde vivir.
          </p>

          <p className="text-gray-700 mt-6">
            Mi experiencia no es necesariamente la misma que la de quien consulta, pero me permite conocer de cerca algunas de esas situaciones.
          </p>
        </div>
      </section>

      {/* Cómo podemos trabajarlo */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">Cómo podemos trabajarlo</h2>

          <p className="text-gray-700 mb-8">
            Mi orientación principal es la Terapia de Aceptación y Compromiso (ACT) y las terapias conductuales contextuales, integrando FAP y mindfulness cuando resultan útiles.
          </p>

          <p className="text-gray-700 mb-8">
            Podemos trabajar sobre ansiedad, sobrepensamiento, relaciones, decisiones o bloqueo dentro del contexto particular de vivir afuera.
          </p>

          <p className="text-gray-700 font-semibold">
            <strong>¿Qué vida querés construir y qué estás dispuesto a experimentar mientras la construís?</strong>
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-8">No necesitás tener decidido dónde vas a vivir dentro de cinco años para trabajar sobre cómo querés vivir hoy</h2>

          <p className="text-lg text-gray-700 mb-8">
            Si estás viviendo en el exterior y sentís que alguna de estas dificultades está ocupando demasiado espacio, podés contarme brevemente qué estás atravesando.
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
