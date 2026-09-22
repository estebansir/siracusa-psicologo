import { generatePageMetadata } from '@/lib/metadata';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import Link from 'next/link';
import Schema from '@/components/Schema';

export const metadata = generatePageMetadata({
  title: 'Problemas relacionales: límites, comunicación y vínculos',
  description: 'Terapia para dificultades en relaciones: límites, expresión, aprobación. FAP y ACT online.',
  pathname: '/problemas-relacionales',
});

export default function ProblemasRelacionales() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿No hace falta estar en pareja para consultar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Los patrones relacionales aparecen en muchos contextos: familia, trabajo, amistades. El trabajo terapéutico es aplicable a todas las relaciones.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Ofrecés terapia de pareja?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Actualmente trabajo con psicoterapia individual. El foco está en comprender tu experiencia, tus patrones relacionales y aquello sobre lo que vos podés intervenir.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Se puede trabajar una relación aunque el otro no haga terapia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. El cambio en tus patrones puede modificar la dinámica de la relación. No es necesario que la otra persona participe en terapia para que haya cambios.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Los límites son siempre la única solución?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Poner límites es una herramienta, pero el objetivo es desarrollar flexibilidad: saber cuándo ponerlos y cuándo ampliar tu capacidad de tolerancia según el contexto y lo que te importa.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Se pueden trabajar patrones que aparecen con el terapeuta?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. La Psicoterapia Analítico Funcional (FAP) trabaja específicamente con patrones interpersonales que aparecen en la sesión: buscar aprobación, evitar desacuerdo, minimizar necesidades, etc.'
        }
      }
    ]
  };

  return (
    <>
      <Schema schema={faqSchema} />

      {/* Hero */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="mb-6">Psicólogo online para problemas relacionales</h1>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            A veces el problema no es simplemente "la relación".
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Es lo que empieza a pasarte cuando estás con otras personas. Te cuesta decir que no. Evitás conversaciones para no generar conflicto. Necesitás saber que el otro está bien con vos. Cedés en cosas importantes y después aparece resentimiento.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            En terapia podemos trabajar sobre esos patrones para desarrollar formas más flexibles y auténticas de relacionarte con los demás.
          </p>
          <div className="cta-group mb-8">
            <CTAWhatsApp 
              location="hero"
              text="Consultar por WhatsApp"
            />
          </div>
        </div>
      </section>

      {/* Dificultades */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-left mb-12">Cuando relacionarte implica dejarte de lado</h2>
          <p className="text-lg text-gray-700 mb-8">
            Puede aparecer dificultad para:
          </p>

          <ul className="space-y-4 mb-10 text-gray-700">
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>poner límites;</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>decir que no;</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>expresar desacuerdo;</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>tolerar desaprobación;</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>pedir lo que necesitás;</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>manejar culpa;</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>dejar de sobreanalizar conversaciones;</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>sostener tu posición;</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>evitar acumulación de resentimiento;</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>modificar dinámicas repetidas.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Sé que debería */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-left mb-12">"Sé que debería poner límites, pero no puedo"</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Saber qué deberías hacer no significa poder hacerlo cuando llega el momento.
          </p>

          <p className="text-gray-700 mb-8">
            La pregunta es:
          </p>

          <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded">
            <p className="text-lg text-gray-700 font-medium">
              ¿Qué aparece cuando intentás ponerlos y qué hacés frente a eso?
            </p>
          </div>
        </div>
      </section>

      {/* Búsqueda de aprobación */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-left mb-12">Búsqueda de aprobación</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            La dificultad aparece cuando necesitás suficiente aprobación externa para poder confiar en tus propias decisiones.
          </p>

          <p className="text-gray-700 mb-8">
            La tranquilidad que produce la validación puede ser real, pero puede hacer cada vez más difícil sostener una posición propia cuando otra persona no la valida.
          </p>
        </div>
      </section>

      {/* Evitar conflicto */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-left mb-12">Evitar el conflicto también tiene un costo</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Trabajar estas dificultades no significa aprender a confrontar permanentemente.
          </p>

          <p className="text-gray-700 mb-8">
            Significa ampliar tu capacidad para sostener conversaciones difíciles cuando la relación o tus propios límites lo requieren.
          </p>
        </div>
      </section>

      {/* Mismo patrón */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-left mb-12">El mismo patrón con personas diferentes</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Cuando algo se repite en contextos diferentes, puede ser útil observar qué patrón relacional llevamos nosotros de una relación a otra.
          </p>

          <p className="text-gray-700 mb-8">
            Esto no significa asumir que todo conflicto es responsabilidad tuya.
          </p>
        </div>
      </section>

      {/* La relación terapéutica */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-left mb-12">La relación terapéutica también puede mostrarnos algo</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Algunos de estos patrones pueden aparecer conmigo durante la sesión: buscar aprobación, evitar desacuerdo, minimizar necesidades o temer decepcionar.
          </p>

          <p className="text-gray-700 mb-8">
            Eso puede convertirse en una oportunidad para observar el patrón mientras ocurre y ensayar una respuesta diferente dentro de una relación real.
          </p>
        </div>
      </section>

      {/* FAP */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-left mb-12">FAP: trabajar los vínculos dentro del vínculo terapéutico</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            La Psicoterapia Analítico Funcional (FAP) presta especial atención a los comportamientos que aparecen dentro de la relación entre terapeuta y paciente.
          </p>

          <p className="text-gray-700 mb-8">
            Podemos practicar expresar una necesidad, tolerar un desacuerdo, pedir algo directamente, mostrar vulnerabilidad o sostener una posición propia.
          </p>

          <div className="cta-group justify-start">
            <Link 
              href="/terapia-act"
              className="inline-flex items-center px-5 py-2.5 border border-gray-400 text-teal-700 rounded font-medium hover:bg-gray-50 transition-colors no-underline"
            >
              Conocer mi enfoque terapéutico
            </Link>
          </div>
        </div>
      </section>

      {/* Relaciones, ansiedad y sobrepensamiento */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-left mb-12">Relaciones, ansiedad y sobrepensamiento</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Podemos trabajar tanto sobre lo que hacés durante el vínculo como sobre lo que ocurre después dentro de tu cabeza.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Link 
              href="/ansiedad"
              className="inline-flex items-center px-5 py-2.5 border border-gray-400 text-teal-700 rounded font-medium hover:bg-gray-50 transition-colors no-underline"
            >
              Leer sobre ansiedad
            </Link>
            <Link 
              href="/sobrepensamiento"
              className="inline-flex items-center px-5 py-2.5 border border-gray-400 text-teal-700 rounded font-medium hover:bg-gray-50 transition-colors no-underline"
            >
              Leer sobre sobrepensamiento
            </Link>
          </div>
        </div>
      </section>

      {/* Terapia individual */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-left mb-12">Terapia individual</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Actualmente no ofrezco terapia de pareja.
          </p>

          <p className="text-gray-700 mb-8">
            El foco está en comprender tu experiencia, tus patrones relacionales y aquello sobre lo que vos podés intervenir.
          </p>

          <p className="text-gray-700 mb-8">
            Sesiones online de aproximadamente 50 minutos.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-left mb-12">Preguntas frecuentes</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="mb-4">¿No hace falta estar en pareja para consultar?</h3>
              <p className="text-gray-700">No. Los patrones relacionales aparecen en muchos contextos: familia, trabajo, amistades. El trabajo terapéutico es aplicable a todas las relaciones.</p>
            </div>

            <div>
              <h3 className="mb-4">¿Ofrecés terapia de pareja?</h3>
              <p className="text-gray-700">Actualmente trabajo con psicoterapia individual. El foco está en comprender tu experiencia, tus patrones relacionales y aquello sobre lo que vos podés intervenir.</p>
            </div>

            <div>
              <h3 className="mb-4">¿Se puede trabajar una relación aunque el otro no haga terapia?</h3>
              <p className="text-gray-700">Sí. El cambio en tus patrones puede modificar la dinámica de la relación. No es necesario que la otra persona participe en terapia para que haya cambios.</p>
            </div>

            <div>
              <h3 className="mb-4">¿Los límites son siempre la única solución?</h3>
              <p className="text-gray-700">No. Poner límites es una herramienta, pero el objetivo es desarrollar flexibilidad: saber cuándo ponerlos y cuándo ampliar tu capacidad de tolerancia según el contexto y lo que te importa.</p>
            </div>

            <div>
              <h3 className="mb-4">¿Se pueden trabajar patrones que aparecen con el terapeuta?</h3>
              <p className="text-gray-700">Sí. La Psicoterapia Analítico Funcional (FAP) trabaja específicamente con patrones interpersonales que aparecen en la sesión: buscar aprobación, evitar desacuerdo, minimizar necesidades, etc.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cierre */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-8">Relacionarte con los demás no debería requerir desaparecer vos de la relación.</h2>
          
          <div className="cta-group justify-center">
            <CTAWhatsApp 
              location="bottom_cta"
              text="Consultar por WhatsApp"
            />
          </div>
        </div>
      </section>
    </>
  );
}
