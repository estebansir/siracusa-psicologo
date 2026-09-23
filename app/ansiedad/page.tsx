import { generatePageMetadata } from '@/lib/metadata';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'Psicólogo Online para Ansiedad | Esteban Siracusa',
  description: 'Terapia para ansiedad, preocupación y anticipación. Especialista en ACT y terapias contextuales.',
  pathname: '/ansiedad',
});

export default function Ansiedad() {
  return (
    <>
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="mb-6">Psicólogo online para ansiedad</h1>
          
          <div className="space-y-6">
            <p className="text-xl text-gray-600">
              La ansiedad puede aparecer como preocupación constante, tensión, miedo, necesidad de control o anticipación de que algo puede salir mal.
            </p>

            <p className="text-xl text-gray-600">
              A veces entendés racionalmente que una situación no debería preocuparte tanto y, sin embargo, tu cabeza y tu cuerpo siguen reaccionando como si hubiera algo que resolver o evitar.
            </p>

            <p className="text-xl text-gray-600">
              En terapia podemos trabajar para entender cómo funciona esa ansiedad en tu caso y, especialmente, qué hacés cuando aparece.
            </p>
          </div>
        </div>
      </section>

      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">Cuando la ansiedad empieza a ocupar demasiado espacio</h2>
          
          <ul className="space-y-4 mb-10 text-gray-700">
            <li className="flex gap-3"><span className="text-teal-700 font-bold flex-shrink-0">•</span><span>Anticipás constantemente lo que podría salir mal.</span></li>
            <li className="flex gap-3"><span className="text-teal-700 font-bold flex-shrink-0">•</span><span>Necesitás certeza antes de poder avanzar.</span></li>
            <li className="flex gap-3"><span className="text-teal-700 font-bold flex-shrink-0">•</span><span>Evitás situaciones porque las anticipás como amenazantes.</span></li>
            <li className="flex gap-3"><span className="text-teal-700 font-bold flex-shrink-0">•</span><span>Te cuesta desconectarte de preocupaciones incluso cuando las cosas van bien.</span></li>
            <li className="flex gap-3"><span className="text-teal-700 font-bold flex-shrink-0">•</span><span>Buscás constantemente tranquilización de otras personas.</span></li>
            <li className="flex gap-3"><span className="text-teal-700 font-bold flex-shrink-0">•</span><span>Postergás iniciativas esperando sentirte menos ansioso.</span></li>
            <li className="flex gap-3"><span className="text-teal-700 font-bold flex-shrink-0">•</span><span>Aparecen síntomas físicos como tensión, falta de aire o taquicardia.</span></li>
            <li className="flex gap-3"><span className="text-teal-700 font-bold flex-shrink-0">•</span><span>Experimentás impaciencia o irritabilidad.</span></li>
          </ul>

          <p className="text-gray-700 font-semibold mb-0">
            <strong>A veces, el intento constante de no sentir ansiedad termina limitando más tu vida que la ansiedad misma.</strong>
          </p>
        </div>
      </section>

      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">Cuando entender lo que te pasa no alcanza para cambiar</h2>
          
          <p className="text-gray-700 mb-8">
            A veces podés entender perfectamente que una preocupación es exagerada, que una situación probablemente no sea peligrosa o que estás anticipando demasiado y, aun así, la ansiedad sigue apareciendo.
          </p>

          <p className="text-gray-700 mb-8">
            Intentar convencerte, distraerte o encontrar certeza puede aliviar durante un rato, pero no siempre cambia el problema.
          </p>

          <p className="text-gray-700 mb-8">
            <strong>No todo problema psicológico se resuelve encontrando un argumento mejor.</strong>
          </p>

          <p className="text-gray-700">
            Por eso en terapia no trabajamos solamente sobre lo que pensás, sino también sobre cómo respondés cuando aparecen la ansiedad, la incertidumbre o el miedo.
          </p>
        </div>
      </section>

      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">Trabajar con la ansiedad no significa eliminarla</h2>
          
          <p className="text-gray-700 mb-8">
            Mi objetivo terapéutico no es conseguir que nunca vuelvas a sentir ansiedad.
          </p>

          <p className="text-gray-700 mb-8">
            El trabajo apunta a que puedas hacer lo que necesitás o querés hacer incluso cuando aparecen ansiedad, miedo o incertidumbre.
          </p>

          <p className="text-gray-700 mb-8">
            <strong>La pregunta no es solamente '¿cómo hago para que esta ansiedad se vaya?', sino también '¿qué estoy dejando de hacer mientras intento no sentirla?'</strong>
          </p>

          <p className="text-gray-700 mb-8">
            Mi orientación principal es la Terapia de Aceptación y Compromiso (ACT) y las terapias conductuales contextuales.
          </p>

          <Link 
            href="/terapia-act"
            className="inline-flex items-center px-5 py-2.5 border border-gray-400 text-teal-700 rounded font-medium hover:bg-gray-50 transition-colors no-underline"
          >
            Conocer mi enfoque
          </Link>
        </div>
      </section>

      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">Ansiedad y sobrepensamiento</h2>
          
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
            className="inline-flex items-center px-5 py-2.5 border border-gray-400 text-teal-700 rounded font-medium hover:bg-gray-50 transition-colors no-underline"
          >
            Leer sobre sobrepensamiento
          </Link>
        </div>
      </section>

      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-8">Que la ansiedad aparezca no significa que tenga que decidir por vos</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Si sentís que la ansiedad está condicionando demasiado tus decisiones, relaciones o actividades, podemos evaluar juntos qué está pasando y cómo trabajarlo.
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
