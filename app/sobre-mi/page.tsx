import { generatePageMetadata } from '@/lib/metadata';
import Image from 'next/image';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import Link from 'next/link';
import Schema from '@/components/Schema';

export const metadata = generatePageMetadata({
  title: 'Sobre mí: Esteban Siracusa, psicólogo online',
  description: 'Licenciado en Psicología. Especialista en ACT, FAP y terapias contextuales conductuales. Lic. en Psicología, MN 85046.',
  pathname: '/sobre-mi',
});

export default function SobreMi() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Esteban Siracusa',
    jobTitle: 'Psicólogo',
    description: 'Psicólogo especializado en ansiedad, sobrepensamiento y bloqueo emocional. Terapia de Aceptación y Compromiso (ACT).',
    url: 'https://siracusa-psicologo.vercel.app/sobre-mi',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Consulta profesional',
      availableLanguage: ['es']
    }
  };

  return (
    <>
      <Schema schema={personSchema} />

      {/* Hero */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Main hero grid: 2-col desktop, stack mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 lg:items-start mb-12">
            {/* Left column: H1 + intro paragraphs */}
            <div className="flex flex-col">
              <h1 className="mb-8 text-left lg:text-left">Soy Esteban Siracusa, psicólogo</h1>
              
              {/* Desktop only: show P1 and P2 in left column */}
              <div className="hidden lg:flex flex-col gap-6">
                <p className="text-xl text-gray-600 leading-relaxed">
                  Trabajo con adultos que buscan comprender y modificar patrones que están interfiriendo con la vida que quieren construir.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Me interesa especialmente trabajar con ansiedad, sobrepensamiento, autoexigencia, perfeccionismo, bloqueo, dificultades relacionales y momentos de cambio o incertidumbre.
                </p>
              </div>
            </div>

            {/* Right column: Photo (vertical aspect) */}
            <div className="flex items-start justify-center lg:justify-end">
              <div className="w-64 sm:w-72 aspect-[3/4] relative">
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
            <p className="text-xl text-gray-600 leading-relaxed">
              Trabajo con adultos que buscan comprender y modificar patrones que están interfiriendo con la vida que quieren construir.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Me interesa especialmente trabajar con ansiedad, sobrepensamiento, autoexigencia, perfeccionismo, bloqueo, dificultades relacionales y momentos de cambio o incertidumbre.
            </p>
          </div>
        </div>
      </section>

      {/* Forma de entender */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-left mb-12">Mi forma de entender la terapia</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            No pienso la terapia como un lugar en el que el terapeuta tiene todas las respuestas y le dice a otra persona qué debería hacer.
          </p>

          <p className="text-gray-700 mb-8">
            Tampoco como un espacio dedicado únicamente a hablar sobre lo ocurrido durante la semana.
          </p>

          <p className="text-gray-700 mb-8">
            Me interesa construir juntos una comprensión precisa de qué está pasando, en qué contextos ocurre y qué mantiene actualmente el problema.
          </p>

          <h3 className="mb-6 mt-10">Terapia orientada al cambio</h3>
          <p className="text-gray-700 mb-8">
            Pregunta central:
          </p>

          <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded mb-8">
            <p className="text-lg text-gray-700 font-medium">
              ¿Qué tendría que empezar a ocurrir de manera diferente?
            </p>
          </div>

          <p className="text-gray-700 mb-8">
            Me interesa traducir progresivamente lo que descubrimos en terapia en cambios observables en tu vida.
          </p>
        </div>
      </section>

      {/* Enfoque terapéutico */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-left mb-12">Mi enfoque terapéutico</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Mi orientación principal es la Terapia de Aceptación y Compromiso (ACT) y las terapias conductuales contextuales.
          </p>

          <p className="text-gray-700 mb-8">
            Integro también herramientas de Psicoterapia Analítico Funcional (FAP) y mindfulness.
          </p>

          <ul className="space-y-4 mb-10 text-gray-700">
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span><strong>ACT:</strong> flexibilidad frente a pensamientos y emociones y acción en dirección a lo importante.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span><strong>FAP:</strong> atención a patrones interpersonales que aparecen en la propia relación terapéutica.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span><strong>Mindfulness:</strong> observar lo que ocurre mientras ocurre sin responder automáticamente.</span>
            </li>
          </ul>

          <p className="text-gray-700 mb-8">
            No utilizo estas herramientas como recetas independientes.
          </p>

          <div className="cta-group justify-start">
            <Link 
              href="/terapia-act"
              className="inline-flex items-center px-5 py-2.5 border border-gray-400 text-teal-700 rounded font-medium hover:bg-gray-50 transition-colors no-underline"
            >
              Conocer más sobre ACT
            </Link>
          </div>
        </div>
      </section>

      {/* Formación */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-left mb-12">Formación</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Soy Licenciado en Psicología por la Universidad de Palermo.
          </p>

          <p className="text-gray-700 mb-8">
            Continué mi formación de posgrado realizando una Especialización en Psicoterapia Cognitiva Integrativa en Fundación AIGLÉ, que me permitió formarme en diferentes modelos de psicoterapia.
          </p>

          <p className="text-gray-700 mb-8">
            Posteriormente profundicé mi formación en Terapia de Aceptación y Compromiso (ACT) y Psicoterapia Analítico Funcional (FAP) en el Centro Argentino de Terapias Contextuales (CATC), junto con formación y práctica en mindfulness.
          </p>

          <p className="text-gray-700 mb-8">
            Actualmente mi trabajo está especialmente orientado desde una perspectiva conductual contextual y funcional, integrando estas herramientas según las características y objetivos de cada persona.
          </p>

          <p className="text-gray-700 mb-8">
            En Argentina cuento con Matrícula Nacional N.º 85046.
          </p>
        </div>
      </section>

      {/* Adaptación */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-left mb-12">Una terapia adaptada a la persona, no una persona adaptada al modelo</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Una persona no llega a consulta siendo "un caso de ACT", "un problema de ansiedad" o "un perfeccionista".
          </p>

          <p className="text-gray-700 mb-8">
            Llega con una historia, determinadas relaciones, un contexto y objetivos particulares.
          </p>

          <p className="text-gray-700 mb-8">
            El modelo sirve para orientar intervenciones, no para forzar todas las dificultades dentro de la misma explicación.
          </p>
        </div>
      </section>

      {/* Experiencia de migración */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-left mb-12">También conozco la experiencia de vivir afuera</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Viví varios años en Dinamarca y posteriormente en España, antes de regresar a Argentina.
          </p>

          <p className="text-gray-700 mb-8">
            Esa experiencia hizo que desarrollara un interés particular por migración, adaptación cultural, pertenencia, vínculos a distancia y decisiones sobre dónde construir una vida.
          </p>

          <p className="text-gray-700 mb-8">
            No considero que mi experiencia personal me permita saber automáticamente lo que significa migrar para otra persona.
          </p>

          <div className="cta-group justify-start">
            <Link 
              href="/psicologo-migrantes"
              className="inline-flex items-center px-5 py-2.5 border border-gray-400 text-teal-700 rounded font-medium hover:bg-gray-50 transition-colors no-underline"
            >
              Psicólogo para migrantes
            </Link>
          </div>
        </div>
      </section>

      {/* Qué esperar */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-left mb-12">¿Qué podés esperar de mí como terapeuta?</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Podés esperar que te escuche, pero también que te pregunte, señale patrones, formule hipótesis y te proponga probar cosas diferentes.
          </p>

          <p className="text-gray-700 mb-8">
            Si noto una contradicción relevante, probablemente la exploremos.
          </p>

          <p className="text-gray-700 mb-8">
            Si algo que ocurre entre nosotros parece relacionado con aquello que te sucede afuera, podemos hablarlo.
          </p>

          <p className="text-gray-700 mb-8">
            Si una estrategia no funciona, podemos revisarla.
          </p>

          <p className="text-gray-700 mb-8">
            Y si considero que algo queda fuera de mi área de competencia o conviene consultar también con otro profesional, te lo voy a decir.
          </p>
        </div>
      </section>

      {/* La relación terapéutica */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-left mb-12">La relación terapéutica importa</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Necesitamos suficiente confianza para hablar de cosas difíciles y también suficiente libertad para no estar siempre de acuerdo.
          </p>

          <p className="text-gray-700 mb-8">
            No necesito que seas "un buen paciente".
          </p>

          <p className="text-gray-700 mb-8">
            Podés decirme que algo que propuse no te sirvió.
          </p>

          <p className="text-gray-700 mb-8">
            Podés no estar de acuerdo conmigo.
          </p>

          <p className="text-gray-700 mb-8">
            Para mí, esa información no interfiere con la terapia.
          </p>

          <p className="text-gray-700 mb-8">
            Es parte de la terapia.
          </p>
        </div>
      </section>

      {/* Sesiones */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-left mb-12">Cómo son las sesiones</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Modalidad 100% online para adultos.
          </p>

          <p className="text-gray-700 mb-8">
            Aproximadamente 50 minutos.
          </p>

          <p className="text-gray-700 mb-8">
            Habitualmente frecuencia semanal.
          </p>

          <p className="text-gray-700 mb-8">
            Las primeras entrevistas buscan comprender qué te trae a consulta, qué te gustaría que fuera diferente y cómo formular objetivos.
          </p>

          <div className="cta-group justify-start">
            <Link 
              href="/psicologo-online"
              className="inline-flex items-center px-5 py-2.5 border border-gray-400 text-teal-700 rounded font-medium hover:bg-gray-50 transition-colors no-underline"
            >
              Más sobre la terapia online
            </Link>
          </div>
        </div>
      </section>

      {/* Cierre */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-8">No necesitás saber qué enfoque necesitás ni llegar con una explicación perfectamente ordenada de lo que te pasa.</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Podés escribirme, contarme brevemente qué estás buscando y vemos si tiene sentido coordinar una primera entrevista.
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
