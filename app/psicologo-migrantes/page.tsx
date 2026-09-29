import { generatePageMetadata } from '@/lib/metadata';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'Psicólogo Online para Argentinos en el Exterior',
  description: 'Psicólogo online para argentinos y latinoamericanos en el exterior. Terapia en español para migración, vínculos, pertenencia y decisiones sobre dónde vivir.',
  pathname: '/psicologo-migrantes',
});

const distanceItems = [
  'Sostener amistades principalmente a través de mensajes y llamadas.',
  'Ver a tus padres o familiares envejecer mientras estás lejos.',
  'Perderte encuentros, celebraciones o momentos importantes.',
  'Construir vínculos nuevos en un contexto cultural diferente.',
  'Volver después de un tiempo y descubrir que vos cambiaste y el lugar al que volvés también.',
];

const textLinkClassName =
  'inline-flex items-center text-teal-700 font-medium hover:text-teal-800 hover:underline underline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 rounded-sm';

export default function PsicologoMigrantes() {
  return (
    <>
      {/* Hero */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="mb-6">Psicólogo online para personas que viven en el exterior</h1>

          <p className="text-xl text-gray-600 mb-6">
            Vivir en otro país puede ser una decisión elegida, deseada y aun así traer dificultades.
          </p>

          <p className="text-lg text-gray-600">
            Trabajo online y en español con personas que viven fuera de su país de origen, tanto sobre situaciones relacionadas con la migración como sobre otros problemas que pueden aparecer mientras construís tu vida afuera.
          </p>
        </div>
      </section>

      {/* Ambivalence */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">Estar bien afuera no significa que tenga que ser fácil</h2>

          <p className="text-gray-700 mb-6">
            Podés estar contento con la decisión de haberte ido y extrañar. Tener una buena vida afuera y sentirte solo. Querer quedarte y preguntarte cómo sería volver.
          </p>

          <p className="text-gray-900 mb-6">
            <strong>Esas experiencias no necesariamente se contradicen.</strong>
          </p>

          <p className="text-gray-700 mb-6">
            A veces hay varias cosas importantes para vos en lugares diferentes: una pareja en un país, una familia en otro, una carrera que construiste afuera o vínculos que siguen siendo importantes en el lugar del que te fuiste.
          </p>

          <p className="text-gray-900 mb-0">
            <strong>La dificultad no siempre aparece porque algo esté mal. A veces aparece porque no hay una forma de conservar todo al mismo tiempo.</strong>
          </p>
        </div>
      </section>

      {/* Decisions */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">Cuando ninguna opción parece completamente correcta</h2>

          <p className="text-gray-700 mb-6">
            Podés estar intentando decidir si quedarte, volver a tu país o construir una vida en otro lugar. O quizás la decisión involucra acercarte a tu familia, sostener una relación o continuar un proyecto que construiste afuera.
          </p>

          <p className="text-gray-700 mb-6">
            Algunas decisiones son difíciles porque falta información. Otras lo son porque <strong className="text-gray-900">elegir una opción también implica renunciar a algo valioso de la otra.</strong>
          </p>

          <p className="text-gray-700 mb-0">
            En esos casos, seguir pensando no siempre permite encontrar una alternativa sin costo. Parte del trabajo puede ser distinguir qué información necesitás realmente y qué parte de la decisión implica aceptar incertidumbre y elegir.
          </p>
        </div>
      </section>

      {/* Relationships, distance and belonging */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">Vínculos, distancia y pertenencia</h2>

          <ul className="space-y-4 pl-0! mb-8! text-gray-700">
            {distanceItems.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-teal-700 font-bold flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-gray-700 mb-0">
            Con el tiempo también puede cambiar tu relación con el lugar del que te fuiste y con el lugar donde vivís ahora. <strong className="text-gray-900">No hace falta forzar esas experiencias a encajar en una única idea de dónde pertenecés.</strong>
          </p>
        </div>
      </section>

      {/* Pressure for migration to have been worth it */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">La presión de que migrar haya valido la pena</h2>

          <p className="text-gray-700 mb-6">
            Cuando invertiste tiempo, dinero y esfuerzo en irte, puede aparecer una exigencia difícil de reconocer: <strong className="text-gray-900">“después de todo lo que hice para estar acá, debería estar bien”</strong>.
          </p>

          <p className="text-gray-700 mb-6">
            Volver puede sentirse como fracasar, incluso cuando tus razones para volver tienen sentido. También puede haber una distancia entre la vida que imaginabas antes de migrar y la que efectivamente construiste.
          </p>

          <p className="text-gray-700 mb-0">
            En terapia podemos separar lo que realmente querés de lo que sentís que deberías querer por decisiones que tomaste, expectativas de otros o por todo el esfuerzo que ya realizaste.
          </p>
        </div>
      </section>

      {/* Personal experience */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">También conozco la experiencia de vivir afuera</h2>

          <p className="text-gray-700 mb-6">
            Viví varios años en Dinamarca y después en España antes de volver a Argentina.
          </p>

          <p className="text-gray-700 mb-6">
            <strong className="text-gray-900">Mi experiencia no es necesariamente la misma que la de quien consulta</strong>, pero me permite conocer de cerca algunas de las decisiones, vínculos y cambios que pueden formar parte de construir una vida entre países.
          </p>

          <Link href="/sobre-mi" className={textLinkClassName}>
            Conocer más sobre mí →
          </Link>
        </div>
      </section>

      {/* How we work */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">¿Cómo trabajamos esto en terapia?</h2>

          <p className="text-gray-700 mb-6">
            No parto de la idea de que migrar sea el problema ni de que exista una decisión correcta sobre dónde deberías vivir.
          </p>

          <p className="text-gray-700 mb-6">
            Podemos trabajar sobre situaciones concretas: una decisión que venís postergando, una conversación con alguien que está lejos, la culpa que aparece al pensar en volver o la dificultad de construir algo en un lugar mientras una parte importante de tu vida sigue estando en otro.
          </p>

          <p className="text-gray-700 mb-6">
            A veces necesitaremos aclarar una decisión. Otras veces, trabajar sobre cómo querés vivir mientras esa decisión todavía no está completamente resuelta.
          </p>

          <p className="text-gray-700 mb-6">
            Y vivir en el exterior también puede ser simplemente el contexto en el que ocurre tu vida. <strong className="text-gray-900">No necesitás tener un “problema migratorio” para hacer terapia conmigo desde otro país.</strong>
          </p>

          <Link href="/terapia-act" className={textLinkClassName}>
            Conocer mi forma de trabajar →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-8">Podés trabajar sobre cómo querés vivir hoy aunque todavía no sepas dónde vas a estar mañana</h2>

          <p className="text-lg text-gray-700 mb-8">
            Si estás viviendo en el exterior y sentís que alguna de estas situaciones te resulta familiar, podés escribirme y contarme brevemente qué estás atravesando.
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
