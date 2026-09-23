import { generatePageMetadata } from '@/lib/metadata';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'Psicólogo Online para Adultos | Esteban Siracusa',
  description: 'Terapia psicológica online para adultos. Sesiones de 50 minutos por videollamada con especialista en ansiedad y sobrepensamiento.',
  pathname: '/psicologo-online',
});

export default function PsicologoOnline() {
  return (
    <>
      {/* Hero */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="mb-6">Psicólogo online para adultos</h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Si estás buscando empezar terapia, trabajo online con adultos que atraviesan ansiedad, sobrepensamiento, autoexigencia, procrastinación, bloqueo emocional o dificultades en sus relaciones.
          </p>

          <p className="text-lg text-gray-600">
            Las sesiones son por videollamada y atiendo a personas en Argentina y en el exterior.
          </p>
        </div>
      </section>

      {/* When to start therapy */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">¿Cuándo puede tener sentido empezar terapia?</h2>
          
          <ul className="space-y-4 mb-10 text-gray-700">
            <li className="flex gap-3">
              <span className="text-teal-700 font-bold">•</span>
              <span>Pensás demasiado una decisión o situación y cada vez terminás con menos claridad.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-700 font-bold">•</span>
              <span>La ansiedad empieza a condicionar cosas que hacés o evitás.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-700 font-bold">•</span>
              <span>Te exigís mucho y sentís que nunca terminás de estar conforme.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-700 font-bold">•</span>
              <span>Postergás tareas o decisiones aunque sabés que son importantes para vos.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-700 font-bold">•</span>
              <span>Te cuesta concentrarte o sostener lo que te proponés porque quedás atrapado entre distracciones, preocupaciones o pensamientos.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-700 font-bold">•</span>
              <span>Sabés qué querés hacer, pero algo te frena cuando llega el momento de hacerlo.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-700 font-bold">•</span>
              <span>Te cuesta poner límites, tolerar un desacuerdo o dejar de buscar aprobación.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-700 font-bold">•</span>
              <span>Hay patrones que entendés racionalmente, pero seguís repitiendo.</span>
            </li>
          </ul>

          <p className="text-gray-700">
            No necesitás tener un diagnóstico ni saber exactamente qué te pasa para empezar terapia. Parte del trabajo inicial consiste justamente en entenderlo.
          </p>
        </div>
      </section>

      {/* How I work */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">¿Cómo trabajo en terapia?</h2>
          
          <p className="text-gray-700 mb-8">
            Además de hablar sobre lo que te pasa, prestamos atención a qué hacés frente a eso que te pasa.
          </p>

          <p className="text-gray-700 mb-8">
            Por ejemplo: ¿qué hacés cuando aparece ansiedad? ¿Qué pasa cuando no tenés certeza sobre una decisión? ¿Cómo respondés cuando pensás que podrías equivocarte? ¿Qué hacés cuando una tarea te genera incomodidad, aburrimiento o inseguridad?
          </p>

          <p className="text-gray-700 mb-8">
            A veces evitamos, postergamos, buscamos tranquilidad, pensamos durante horas o esperamos a sentirnos preparados. Esas respuestas pueden aliviar en el momento y, al mismo tiempo, mantener el problema a largo plazo.
          </p>

          <p className="text-gray-700 mb-8">
            <strong>Mi orientación principal es la Terapia de Aceptación y Compromiso (ACT) y las terapias conductuales contextuales.</strong>
          </p>

          <Link 
            href="/terapia-act"
            className="inline-flex items-center px-5 py-2.5 border border-gray-400 text-teal-700 rounded font-medium hover:bg-gray-50 transition-colors no-underline"
          >
            Conocer mi enfoque
          </Link>
        </div>
      </section>

      {/* How sessions work */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">¿Cómo son las sesiones?</h2>
          
          <p className="text-gray-700 mb-8">
            Las sesiones duran aproximadamente 50 minutos y se realizan por videollamada.
          </p>

          <p className="text-gray-700 mb-8">
            Las primeras entrevistas están orientadas a entender qué te está pasando, qué querés cambiar y qué factores pueden estar manteniendo actualmente el problema.
          </p>

          <p className="text-gray-700 mb-8">
            A partir de ahí definimos objetivos y vamos trabajando sobre situaciones concretas de tu vida, utilizando la conversación, ejercicios durante la sesión y, cuando resulte útil, prácticas o acciones para probar entre sesiones.
          </p>

          <p className="text-gray-700">
            La idea es que lo que descubrimos en terapia pueda trasladarse a tu vida cotidiana.
          </p>
        </div>
      </section>

      {/* Online from anywhere */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">Terapia online en Argentina y en el exterior</h2>
          
          <p className="text-gray-700 mb-8">
            Atiendo online a adultos que viven en Argentina y en otros países, incluyendo argentinos y otros hispanohablantes que viven en el exterior.
          </p>

          <p className="text-gray-700 mb-8">
            Haber vivido varios años fuera de Argentina también despertó en mí un interés particular por los desafíos que pueden aparecer al migrar: adaptación, vínculos a distancia, pertenencia, decisiones sobre quedarse o volver y la sensación de estar construyendo una vida entre distintos lugares.
          </p>

          <Link 
            href="/psicologo-migrantes"
            className="inline-flex items-center px-5 py-2.5 border border-gray-400 text-teal-700 rounded font-medium hover:bg-gray-50 transition-colors no-underline"
          >
            Terapia para personas que viven en el exterior
          </Link>
        </div>
      </section>

      {/* First session */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">¿Qué pasa en la primera sesión?</h2>
          
          <p className="text-gray-700 mb-8">
            La primera sesión es una oportunidad para entender qué te trae a consulta y qué te gustaría que fuera diferente.
          </p>

          <p className="text-gray-700 mb-8">
            Voy a hacerte preguntas para conocer mejor tu situación y también vas a poder preguntarme lo que necesites sobre mi forma de trabajar.
          </p>

          <p className="text-gray-700 mb-8">
            Al finalizar podemos evaluar si tiene sentido continuar y cuáles podrían ser los primeros objetivos del proceso.
          </p>

          <p className="text-gray-700">
            No necesitás preparar nada ni llegar con una explicación perfectamente ordenada de lo que te pasa.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-8">¿Querés empezar terapia?</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Podés escribirme por WhatsApp y contarme brevemente qué te está pasando y qué estás buscando trabajar. Vemos si puedo ayudarte y coordinamos una primera sesión.
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
