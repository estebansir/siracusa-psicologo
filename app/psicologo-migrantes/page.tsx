import { generatePageMetadata } from '@/lib/metadata';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import Link from 'next/link';
import Schema from '@/components/Schema';

export const metadata = generatePageMetadata({
  title: 'Psicólogo online para argentinos en el exterior y migrantes',
  description: 'Terapia en español para argentinos y latinoamericanos que viven fuera. Migración, identidad, vínculos a distancia.',
  pathname: '/psicologo-migrantes',
});

export default function PsicologoMigrantes() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿No hace falta tener un "duelo migratorio"?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Cada persona vive la migración de manera diferente. No es necesario pasar por etapas específicas ni nombrarlo de una manera particular.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Atendés solamente argentinos?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Trabajo con argentinos y otros hispanohablantes residentes en el exterior. La condición es sesiones en español.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Se puede trabajar con alguien que quiera quedarse definitivamente?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. La consulta no requiere indefinición sobre el futuro. Se puede trabajar independientemente de si la decisión es quedarse, volver o estar explorando.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Se puede trabajar la indecisión quedarse/volver?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. Una de las dificultades que muchas personas atraviesan es no poder resolver esa pregunta. En terapia podemos trabajar el proceso de decisión sin exigir que la respuesta aparezca antes de empezar a trabajar.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Las sesiones son en español?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. Las sesiones son en español. Trabajo en rioplatense, pero entiendo y puedo adaptar a otros registros del español.'
        }
      }
    ]
  };

  return (
    <>
      <Schema schema={faqSchema} />

      {/* Hero */}
      <section className="prose-section-full py-16 sm:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="mb-6">Psicólogo online para argentinos y latinoamericanos que viven en el exterior</h1>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Mudarte a otro país puede ser algo que elegiste, deseaste durante años y que sigue teniendo sentido para vos.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Y al mismo tiempo puede ser difícil.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Cambian vínculos, rutinas, referencias culturales y, muchas veces, la forma en que pensás quién sos y dónde querés construir tu vida.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Trabajo online con argentinos y otros hispanohablantes que viven en el exterior y quieren hacer terapia en español.
          </p>
          <div className="cta-group mb-8">
            <CTAWhatsApp 
              location="hero"
              text="Consultar por WhatsApp"
            />
          </div>
        </div>
      </section>

      {/* Estar bien */}
      <section className="prose-section-full bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Estar bien afuera no significa que tenga que ser fácil</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Podés estar contento con la decisión y extrañar.
          </p>

          <p className="text-gray-700 mb-8">
            Tener una buena vida y sentirte solo.
          </p>

          <p className="text-gray-700 mb-8">
            Haber conseguido lo que buscabas y preguntarte si querés quedarte.
          </p>

          <p className="text-gray-700 mb-8">
            Estas experiencias no son contradictorias.
          </p>
        </div>
      </section>

      {/* Decisiones difíciles */}
      <section className="prose-section-full py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Cuando ninguna opción parece completamente correcta</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Quedarte o volver.
          </p>

          <p className="text-gray-700 mb-8">
            Trabajo o familia.
          </p>

          <p className="text-gray-700 mb-8">
            Una relación o un país.
          </p>

          <p className="text-gray-700 mb-8">
            Seguir invirtiendo en la vida que construiste o empezar nuevamente.
          </p>

          <p className="text-gray-700 mb-8">
            La terapia puede ayudar a tomar decisiones importantes sin exigir que primero desaparezca toda incertidumbre.
          </p>
        </div>
      </section>

      {/* Vínculos a distancia */}
      <section className="prose-section-full bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Vínculos a distancia</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Amistades, familia, padres que envejecen, momentos importantes en los que no podés estar y la necesidad simultánea de construir vínculos nuevos.
          </p>

          <div className="cta-group justify-start">
            <Link 
              href="/problemas-relacionales"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded font-medium hover:bg-gray-800 no-underline"
            >
              Leer sobre problemas relacionales
            </Link>
          </div>
        </div>
      </section>

      {/* Presión */}
      <section className="prose-section-full py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">La presión de que migrar "haya valido la pena"</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Después de invertir tiempo, dinero y energía, cambiar de dirección puede sentirse como fracaso.
          </p>

          <p className="text-gray-700 mb-8">
            Puede aparecer una presión adicional: además de estar atravesando una dificultad, sentís que no deberías estar atravesándola.
          </p>
        </div>
      </section>

      {/* Identidad */}
      <section className="prose-section-full bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Construir identidad entre distintos lugares</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            No necesariamente hace falta resolver la experiencia eligiendo una única identidad o respondiendo definitivamente dónde pertenecés.
          </p>
        </div>
      </section>

      {/* Ansiedad y migración */}
      <section className="prose-section-full py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Ansiedad, sobrepensamiento y migración</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Podemos trabajar tanto sobre la situación concreta como sobre la manera en que estás respondiendo a la incertidumbre que genera.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Link 
              href="/ansiedad"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded font-medium hover:bg-gray-800 no-underline"
            >
              Leer sobre ansiedad
            </Link>
            <Link 
              href="/sobrepensamiento"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded font-medium hover:bg-gray-800 no-underline"
            >
              Leer sobre sobrepensamiento
            </Link>
          </div>
        </div>
      </section>

      {/* Experiencia */}
      <section className="prose-section-full bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Entiendo algunas de estas preguntas también desde la experiencia</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Viví varios años en Dinamarca y posteriormente en España, antes de regresar a Argentina.
          </p>

          <p className="text-gray-700 mb-8">
            Atravesé personalmente aspectos prácticos y humanos de construir una vida en otro país.
          </p>

          <p className="text-gray-700 mb-8">
            Eso no significa que mi experiencia sea igual a la tuya.
          </p>

          <p className="text-gray-700 mb-8">
            Pero significa que estas cuestiones no me resultan conocidas únicamente desde la teoría clínica.
          </p>
        </div>
      </section>

      {/* Terapia en español */}
      <section className="prose-section-full py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Terapia en español viviendo en el exterior</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Sesiones online de aproximadamente 50 minutos, habitualmente semanales.
          </p>

          <p className="text-gray-700 mb-8">
            La posibilidad concreta de atención depende también de la jurisdicción desde la que se realice la prestación.
          </p>
        </div>
      </section>

      {/* Cómo trabajo */}
      <section className="prose-section-full bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">¿Cómo trabajo?</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            ACT como orientación principal, integrando FAP y mindfulness cuando resultan relevantes.
          </p>

          <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded mb-8">
            <p className="text-lg text-gray-700 font-medium">
              ¿Qué vida querés construir y qué estás dispuesto a experimentar mientras la construís?
            </p>
          </div>

          <div className="cta-group justify-start">
            <Link 
              href="/terapia-act"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded font-medium hover:bg-gray-800 no-underline"
            >
              Conocer mi enfoque terapéutico
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="prose-section-full py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Preguntas frecuentes</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="mb-4">¿No hace falta tener un "duelo migratorio"?</h3>
              <p className="text-gray-700">No. Cada persona vive la migración de manera diferente. No es necesario pasar por etapas específicas ni nombrarlo de una manera particular.</p>
            </div>

            <div>
              <h3 className="mb-4">¿Atendés solamente argentinos?</h3>
              <p className="text-gray-700">No. Trabajo con argentinos y otros hispanohablantes residentes en el exterior. La condición es sesiones en español.</p>
            </div>

            <div>
              <h3 className="mb-4">¿Se puede trabajar con alguien que quiera quedarse definitivamente?</h3>
              <p className="text-gray-700">Sí. La consulta no requiere indefinición sobre el futuro. Se puede trabajar independientemente de si la decisión es quedarse, volver o estar explorando.</p>
            </div>

            <div>
              <h3 className="mb-4">¿Se puede trabajar la indecisión quedarse/volver?</h3>
              <p className="text-gray-700">Sí. Una de las dificultades que muchas personas atraviesan es no poder resolver esa pregunta. En terapia podemos trabajar el proceso de decisión sin exigir que la respuesta aparezca antes de empezar a trabajar.</p>
            </div>

            <div>
              <h3 className="mb-4">¿Las sesiones son en español?</h3>
              <p className="text-gray-700">Sí. Las sesiones son en español. Trabajo en rioplatense, pero entiendo y puedo adaptar a otros registros del español.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cierre */}
      <section className="prose-section-full bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-8">Vivir entre países también puede significar construir algo propio entre ellos.</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            No necesitás tener decidido dónde vas a vivir dentro de cinco años para empezar a trabajar sobre cómo querés vivir hoy.
          </p>

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
