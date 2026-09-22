import { generatePageMetadata } from '@/lib/metadata';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'Psicólogo online para ansiedad',
  description: 'Terapia para ansiedad, preocupación y anticipación. Especialista en ACT y terapias contextuales.',
  pathname: '/ansiedad',
});

export default function Ansiedad() {
  return (
    <>
      <section className="prose-section-full py-16 sm:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="mb-6">Psicólogo online para ansiedad</h1>
          
          <p className="text-xl text-gray-600 mb-6">
            La ansiedad puede aparecer como preocupación constante, tensión, miedo, necesidad de anticipar lo que puede pasar o una sensación de que es difícil bajar la guardia.
          </p>
          
          <p className="text-lg text-gray-600 mb-8">
            A veces sabés que estás pensando de más. Incluso podés reconocer que aquello que temés probablemente no ocurra. Pero entenderlo racionalmente no siempre alcanza para dejar de sentirlo.
          </p>

          <p className="text-lg text-gray-600 mb-8">
            En terapia podemos trabajar sobre cómo funciona la ansiedad en tu caso particular y, especialmente, sobre qué empezás a hacer cuando aparece.
          </p>

          <CTAWhatsApp 
            location="hero"
            text="Consultar por WhatsApp"
          />
        </div>
      </section>

      <section className="prose-section-full bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Cuando la ansiedad empieza a ocupar demasiado espacio</h2>
          
          <p className="text-gray-700 mb-8 font-semibold">Quizás te pasa que:</p>

          <ul className="space-y-4 mb-10 text-gray-700">
            <li className="flex gap-3"><span className="text-green-600 font-bold flex-shrink-0">•</span><span>Anticipás escenarios negativos.</span></li>
            <li className="flex gap-3"><span className="text-green-600 font-bold flex-shrink-0">•</span><span>Necesitás certeza antes de decidir.</span></li>
            <li className="flex gap-3"><span className="text-green-600 font-bold flex-shrink-0">•</span><span>Evitás situaciones.</span></li>
            <li className="flex gap-3"><span className="text-green-600 font-bold flex-shrink-0">•</span><span>Repasás conversaciones.</span></li>
            <li className="flex gap-3"><span className="text-green-600 font-bold flex-shrink-0">•</span><span>Buscás tranquilidad o confirmación de otras personas.</span></li>
            <li className="flex gap-3"><span className="text-green-600 font-bold flex-shrink-0">•</span><span>Postergás esperando sentirte preparado.</span></li>
            <li className="flex gap-3"><span className="text-green-600 font-bold flex-shrink-0">•</span><span>Aparecen síntomas físicos.</span></li>
            <li className="flex gap-3"><span className="text-green-600 font-bold flex-shrink-0">•</span><span>Una preocupación es reemplazada rápidamente por otra.</span></li>
          </ul>

          <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded">
            <p className="text-gray-700">
              En ese punto, el intento de no sentir ansiedad puede empezar a limitar más tu vida que la propia ansiedad.
            </p>
          </div>
        </div>
      </section>

      <section className="prose-section-full py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">"Sé que no tiene sentido, pero igual me pasa"</h2>
          
          <p className="text-gray-700 mb-8">
            Podés entender perfectamente que una preocupación es exagerada y seguir preocupado.
          </p>

          <p className="text-gray-700 mb-8">
            Podés saber que no necesitás hacer algo perfecto y seguir sintiendo que equivocarte sería insoportable.
          </p>

          <p className="text-gray-700 mb-8">
            Esto ocurre, entre otras cosas, porque no todo problema psicológico se resuelve encontrando un argumento mejor.
          </p>

          <p className="text-gray-700">
            También observamos qué relación establecés con tus pensamientos y qué hacés cuando aparecen.
          </p>
        </div>
      </section>

      <section className="prose-section-full bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">El ciclo de la ansiedad</h2>
          
          <div className="bg-white p-8 border border-gray-200 rounded mb-8 text-center">
            <p className="text-lg font-semibold text-gray-900">
              Ansiedad → intento de control o evitación → alivio → más dependencia de esa estrategia → nueva ansiedad.
            </p>
          </div>

          <p className="text-gray-700">
            Parte del trabajo terapéutico consiste en reconocer estos ciclos y desarrollar respuestas más flexibles.
          </p>
        </div>
      </section>

      <section className="prose-section-full py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Trabajar con la ansiedad no significa eliminarla</h2>
          
          <p className="text-gray-700 mb-8">
            Mi objetivo terapéutico no es conseguir que nunca vuelvas a sentir ansiedad.
          </p>

          <p className="text-gray-700 mb-8">
            El trabajo apunta a que puedas hacer lo que necesitás o querés hacer incluso cuando aparecen ansiedad, miedo o incertidumbre.
          </p>

          <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded mb-8">
            <p className="text-gray-700 font-semibold mb-2">¿Cómo trabajo?</p>
            <p className="text-gray-700 mb-4">Mi orientación principal es la Terapia de Aceptación y Compromiso (ACT) y las terapias conductuales contextuales.</p>
            <p className="text-gray-700 font-semibold mb-2">Una pregunta importante es:</p>
            <p className="text-gray-700 mb-0">¿Qué estoy dejando de hacer mientras intento no sentirlo?</p>
          </div>

          <Link 
            href="/terapia-act"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded font-medium hover:bg-gray-800 no-underline"
          >
            Conocer qué es ACT
          </Link>
        </div>
      </section>

      <section className="prose-section-full bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Ansiedad y sobrepensamiento</h2>
          
          <p className="text-gray-700 mb-8">
            Ante la incertidumbre, pensar puede convertirse en una forma de intentar conseguir seguridad.
          </p>

          <p className="text-gray-700 mb-8">
            El problema es que algunas preguntas no tienen una respuesta que produzca certeza absoluta.
          </p>

          <p className="text-gray-700 mb-8">
            Entonces pensar más deja de acercarte a una solución y empieza a mantenerte atrapado.
          </p>

          <Link 
            href="/sobrepensamiento"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded font-medium hover:bg-gray-800 no-underline"
          >
            Leer sobre sobrepensamiento
          </Link>
        </div>
      </section>

      <section className="prose-section-full py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">¿Qué podemos trabajar?</h2>
          
          <p className="text-gray-700">
            Preocupación excesiva, evitación, miedo a equivocarte, necesidad de control, búsqueda de certeza, ansiedad frente a decisiones, autoexigencia, síntomas físicos y dificultad para desconectar.
          </p>
        </div>
      </section>

      <section className="prose-section-full bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Terapia para ansiedad, 100% online</h2>
          
          <p className="text-gray-700 mb-8">
            Sesiones por videollamada de aproximadamente 50 minutos. Trabajo con adultos en Argentina y personas que viven en el exterior.
          </p>

          <p className="text-gray-700 mb-8">
            No necesitás un diagnóstico previo.
          </p>

          <CTAWhatsApp 
            location="mid_page"
            text="Consultar disponibilidad"
          />
        </div>
      </section>

      <section className="prose-section-full py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Preguntas frecuentes</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="mb-4">¿Necesito diagnóstico?</h3>
              <p className="text-gray-700">No. Muchas personas consultan porque hay algo que les genera malestar o preocupación, sin tener un diagnóstico previo.</p>
            </div>

            <div>
              <h3 className="mb-4">¿Cuál es el objetivo respecto de la ansiedad?</h3>
              <p className="text-gray-700">El objetivo no es que nunca vuelvas a sentir ansiedad, sino que aprendas a actuar según lo que te importa incluso cuando la ansiedad está presente.</p>
            </div>

            <div>
              <h3 className="mb-4">¿Qué pasa con los ataques de pánico?</h3>
              <p className="text-gray-700">Los ataques de pánico pueden trabajarse en terapia. Si es la primera vez que te ocurre o hay síntomas físicos intensos, puede ser útil una evaluación médica complementaria.</p>
            </div>

            <div>
              <h3 className="mb-4">¿La terapia funciona online?</h3>
              <p className="text-gray-700">Sí. La modalidad online funciona muy bien para ansiedad y otros problemas psicológicos.</p>
            </div>

            <div>
              <h3 className="mb-4">¿Cuánto duran las sesiones?</h3>
              <p className="text-gray-700">Aproximadamente 50 minutos.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="prose-section-full bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-8">Que la ansiedad aparezca no significa que tenga que decidir por vos.</h2>
          
          <CTAWhatsApp 
            location="footer_cta"
            text="Consultar por WhatsApp"
          />
        </div>
      </section>
    </>
  );
}
