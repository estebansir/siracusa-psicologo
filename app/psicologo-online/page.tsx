import { generatePageMetadata } from '@/lib/metadata';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'Psicólogo online - Terapia por videollamada',
  description: 'Terapia psicológica online para adultos. Sesiones de 50 minutos por videollamada con especialista en ansiedad y sobrepensamiento.',
  pathname: '/psicologo-online',
});

export default function PsicologoOnline() {
  return (
    <>
      {/* Hero */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="mb-6">Psicólogo online: terapia desde donde estés</h1>
          
          <p className="text-xl text-gray-600 mb-6">
            La terapia online te permite iniciar o sostener un proceso psicológico sin depender de dónde vivís.
          </p>
          
          <p className="text-lg text-gray-600 mb-8">
            Trabajo con adultos que consultan principalmente por ansiedad, sobrepensamiento, autoexigencia, perfeccionismo y situaciones en las que sienten que saben lo que quieren hacer, pero algo los frena.
          </p>

          <p className="text-lg text-gray-600 mb-8">
            Las sesiones son por videollamada y trabajo con personas que viven tanto en Argentina como en el exterior.
          </p>

          <CTAWhatsApp 
            location="hero"
            text="Consultar disponibilidad por WhatsApp"
          />
        </div>
      </section>

      {/* When to start therapy */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-left mb-12">¿Cuándo puede tener sentido empezar terapia?</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            No necesitás estar atravesando una crisis ni tener un diagnóstico para consultar.
          </p>

          <p className="text-gray-700 mb-8">
            A veces el motivo es muy claro. Otras veces simplemente empezás a notar que hay situaciones que se repiten y las formas que venís usando para resolverlas ya no están funcionando.
          </p>

          <p className="text-gray-700 mb-8 font-semibold">Puede pasarte que:</p>

          <ul className="space-y-4 mb-10 text-gray-700">
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>Pensás demasiado antes de tomar decisiones.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>Te cuesta desconectarte de preocupaciones.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>Sos muy exigente con vos mismo.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>Evitás situaciones por la ansiedad que te generan.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>Postergás cosas importantes esperando sentirte más seguro o preparado.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>Entendés racionalmente lo que te pasa, pero eso no alcanza para cambiarlo.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>Dedicás demasiada energía a controlar lo que pensás o sentís.</span>
            </li>
          </ul>

          <p className="text-gray-700">
            La terapia permite entender cómo funcionan esos patrones en tu caso particular y empezar a ensayar otras maneras de responder.
          </p>
        </div>
      </section>

      {/* How I work */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-left mb-12">¿Cómo trabajo en terapia?</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            No parto de la idea de que determinados pensamientos o emociones sean necesariamente un problema que haya que eliminar.
          </p>

          <p className="text-gray-700 mb-8">
            Sentir ansiedad, tener dudas, experimentar miedo o pensar mucho forman parte de la experiencia humana. La dificultad aparece cuando nuestra vida empieza a organizarse alrededor de intentar evitar, controlar o resolver constantemente esas experiencias.
          </p>

          <p className="text-gray-700 mb-8">
            Por eso, además de hablar sobre lo que te pasa, prestamos atención a qué hacés frente a eso que te pasa.
          </p>

          <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded mb-8 space-y-4 text-gray-700">
            <p><strong>¿Qué evitás cuando aparece ansiedad?</strong></p>
            <p><strong>¿Qué hacés cuando no tenés certeza?</strong></p>
            <p><strong>¿Qué ocurre cuando sentís que podrías equivocarte?</strong></p>
            <p><strong>¿Qué costo tiene intentar mantener todo bajo control?</strong></p>
          </div>

          <p className="text-gray-700 mb-8">
            Mi enfoque principal es la Terapia de Aceptación y Compromiso (ACT) y las terapias conductuales contextuales.
          </p>

          <Link 
            href="/terapia-act"
            className="inline-flex items-center px-6 py-3 border border-gray-400 text-teal-700 rounded font-medium hover:bg-gray-50 transition-colors no-underline"
          >
            Conocer mi enfoque terapéutico
          </Link>
        </div>
      </section>

      {/* How online therapy works */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-left mb-12">¿Cómo funciona la terapia psicológica online?</h2>
          
          <p className="text-gray-700 mb-8">
            Las sesiones se realizan mediante videollamada y duran aproximadamente 50 minutos.
          </p>

          <p className="text-gray-700 mb-8">
            En las primeras entrevistas buscamos comprender qué te trae a terapia, cómo se presenta el problema actualmente, qué intentaste hasta ahora y qué te gustaría que fuera diferente.
          </p>

          <p className="text-gray-700 mb-8">
            A partir de ahí establecemos objetivos de trabajo.
          </p>

          <p className="text-gray-700 mb-8">
            Dependiendo de lo que estemos trabajando, una sesión puede incluir conversación, análisis de situaciones concretas, ejercicios durante la propia sesión o propuestas para observar y practicar determinadas cosas fuera de ella.
          </p>

          <p className="text-gray-700">
            Parte del trabajo consiste en llevar lo que vamos descubriendo a situaciones reales de tu vida.
          </p>
        </div>
      </section>

      {/* Online from anywhere */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-left mb-12">Terapia online desde Argentina o el exterior</h2>
          
          <p className="text-gray-700 mb-8">
            Trabajo de manera 100% online.
          </p>

          <p className="text-gray-700 mb-8">
            Atiendo personas que viven en Argentina y también hispanohablantes residentes en otros países.
          </p>

          <p className="text-gray-700 mb-8">
            Haber vivido varios años fuera de Argentina también me permitió conocer personalmente algunos de los desafíos que pueden acompañar una migración: construir vínculos nuevos, adaptarse culturalmente, redefinir proyectos, convivir con la distancia y tomar decisiones sobre dónde construir una vida.
          </p>

          <Link 
            href="/psicologo-migrantes"
            className="inline-flex items-center px-6 py-3 border border-gray-400 text-teal-700 rounded font-medium hover:bg-gray-50 transition-colors no-underline"
          >
            Psicoterapia para personas que viven en el exterior
          </Link>
        </div>
      </section>

      {/* What you need */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-left mb-12">¿Qué necesitás?</h2>
          
          <p className="text-gray-700 mb-8">
            Una conexión estable a internet, un dispositivo con cámara y un lugar donde puedas hablar con privacidad durante la sesión.
          </p>

          <p className="text-gray-700">
            Aunque estés haciendo la sesión desde tu casa, conviene reservar esos 50 minutos como tratarías una consulta presencial, procurando estar en un espacio privado y con la menor cantidad posible de interrupciones.
          </p>
        </div>
      </section>

      {/* First session */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-left mb-12">La primera sesión</h2>
          
          <p className="text-gray-700 mb-8">
            La primera entrevista no implica comprometerte a comenzar un tratamiento.
          </p>

          <p className="text-gray-700 mb-8">
            Es un espacio para entender qué te está pasando, qué estás buscando y conocer cómo trabajo.
          </p>

          <p className="text-gray-700 mb-8">
            También podés preguntarme cualquier cosa que necesites saber sobre la modalidad o el proceso terapéutico.
          </p>

          <p className="text-gray-700 mb-8">
            Al terminar podemos evaluar si tiene sentido continuar trabajando juntos.
          </p>

          <CTAWhatsApp 
            location="mid_page"
            text="Coordinar una primera sesión"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-left mb-12">Preguntas frecuentes</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="mb-4">¿Las sesiones son individuales?</h3>
              <p className="text-gray-700">Sí. Actualmente trabajo con psicoterapia individual para adultos.</p>
            </div>

            <div>
              <h3 className="mb-4">¿Cuánto duran?</h3>
              <p className="text-gray-700">Aproximadamente 50 minutos.</p>
            </div>

            <div>
              <h3 className="mb-4">¿Con qué frecuencia?</h3>
              <p className="text-gray-700">Habitualmente comenzamos semanalmente.</p>
            </div>

            <div>
              <h3 className="mb-4">¿Puedo hacer terapia si vivo fuera de Argentina?</h3>
              <p className="text-gray-700">Sí. La posibilidad concreta de atención también depende de la jurisdicción desde la que se realice la prestación.</p>
            </div>

            <div>
              <h3 className="mb-4">¿Atendés presencialmente?</h3>
              <p className="text-gray-700">No. Actualmente mi práctica es exclusivamente online.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-8">Empezar terapia online</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Si estás pensando en comenzar terapia, podés escribirme por WhatsApp y contarme brevemente qué te trae a consulta.
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
