import { generatePageMetadata } from '@/lib/metadata';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'Terapia ACT online',
  description: 'Terapia de Aceptación y Compromiso. Abordaje contextual conductual para cambio psicológico.',
  pathname: '/terapia-act',
});

export default function TerapiaACT() {

  return (
    <>

      {/* Hero */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="mb-6">Terapia ACT online</h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
            La Terapia de Aceptación y Compromiso (ACT) parte de una idea sencilla: muchas veces no podemos elegir qué pensamientos, emociones o sensaciones aparecen, pero sí podemos desarrollar mayor libertad para decidir qué hacemos cuando aparecen.
          </p>

          <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
            En lugar de centrar todo el trabajo en sentirte mejor o eliminar experiencias incómodas, también nos preguntamos:
          </p>

          <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded mb-8 text-center">
            <p className="text-lg font-semibold text-gray-900">
              ¿Qué tipo de vida querés construir y qué está interfiriendo actualmente con que avances hacia ella?
            </p>
          </div>
        </div>
      </section>

      {/* Aceptar */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">Aceptar no significa resignarse</h2>

          <p className="text-gray-700 mb-8">
            En ACT, aceptar no significa aprobar lo que ocurre, conformarte ni dejar de intentar cambiar aquello que puede cambiarse.
          </p>

          <p className="text-gray-700 mb-8">
            Significa aprender a hacer lugar a determinadas experiencias internas cuando luchar constantemente contra ellas termina costándote más que tenerlas.
          </p>

          <p className="text-gray-700 mb-8">
            Podés sentir ansiedad y tener una conversación importante. Podés tener dudas y tomar una decisión. Podés sentir inseguridad y probar algo nuevo.
          </p>

          <p className="text-gray-700 mb-8">
            La aceptación no es el objetivo final. Es una herramienta para recuperar libertad de acción.
          </p>
        </div>
      </section>

      {/* No todo lo que pensás */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">No todo lo que pensás necesita ser resuelto</h2>

          <p className="text-gray-700 mb-8">
            Cuando aparece un pensamiento difícil, solemos tratarlo como un problema que necesita una respuesta.
          </p>

          <p className="text-gray-700 mb-8">
            Analizamos si es cierto, buscamos argumentos en contra, intentamos tranquilizarnos o seguimos pensando hasta sentir que quedó resuelto.
          </p>

          <p className="text-gray-700 mb-8">
            ACT permite trabajar otra posibilidad: observar un pensamiento sin que necesariamente tengas que resolverlo, obedecerlo o eliminarlo antes de seguir adelante.
          </p>

          <p className="text-gray-700">
            No se trata de pensar positivo, sino de desarrollar una relación más flexible con lo que pasa por tu cabeza.
          </p>
        </div>
      </section>

      {/* Lo que hacés para no sentir */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">Lo que hacés para no sentir también importa</h2>

          <p className="text-gray-700 mb-8">
            Evitar una situación. Postergar una decisión. Buscar tranquilidad. Revisar algo varias veces. Distraerte constantemente. Esperar a sentirte preparado.
          </p>

          <p className="text-gray-700 mb-8">
            Todas estas respuestas pueden tener sentido y, muchas veces, funcionan en el corto plazo.
          </p>

          <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 border border-gray-200 rounded text-center mb-8">
            <p className="text-gray-700 font-medium">
              ¿Esta estrategia está ayudándote a construir la vida que querés o solamente está funcionando para sentirte mejor durante los próximos minutos?
            </p>
          </div>
        </div>
      </section>

      {/* ACT, FAP y mindfulness */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">ACT, FAP y mindfulness en mi forma de trabajar</h2>

          <p className="text-gray-700 mb-8">
            ACT es mi orientación terapéutica principal, dentro de un enfoque conductual contextual y funcional.
          </p>

          <p className="text-gray-700 mb-8">
            También integro herramientas de Psicoterapia Analítico Funcional (FAP) y mindfulness cuando resultan útiles.
          </p>

          <p className="text-gray-700 mb-8">
            FAP nos permite prestar especial atención a patrones que pueden aparecer dentro de la propia relación terapéutica: buscar aprobación, evitar un desacuerdo, exigirte encontrar la respuesta correcta o tener dificultad para mostrar lo que necesitás.
          </p>

          <p className="text-gray-700 mb-8">
            El mindfulness puede ayudarnos a entrenar la capacidad de notar pensamientos, emociones y sensaciones mientras están ocurriendo sin reaccionar automáticamente frente a ellos. Esto no implica necesariamente sentarse a meditar.
          </p>

          <p className="text-gray-700">
            No aplico estas herramientas como protocolos idénticos para todo el mundo. Primero necesitamos entender qué está ocurriendo en tu situación particular y qué querés que sea diferente.
          </p>
        </div>
      </section>

      {/* Cómo se ve en sesión */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">¿Cómo se ve esto en una sesión?</h2>

          <p className="text-gray-700 mb-8">
            Trabajamos sobre situaciones reales de tu semana, observando qué pensaste o sentiste, qué hiciste frente a eso y qué consecuencias tuvo.
          </p>

          <p className="text-gray-700 mb-8">
            Algunas veces vamos a conversar y analizar un patrón. Otras podemos hacer un ejercicio durante la sesión, prestar atención a algo que está ocurriendo entre nosotros o acordar una acción concreta para probar afuera.
          </p>

          <p className="text-gray-700">
            El objetivo es que la terapia no quede solamente en comprender lo que te pasa, sino que lo que trabajamos pueda trasladarse a tu vida cotidiana.
          </p>
        </div>
      </section>

      {/* Ansiedad, sobrepensamiento y bloqueo */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-12">Ansiedad, sobrepensamiento y bloqueo</h2>

          <p className="text-gray-700 mb-8">
            Este enfoque puede ser especialmente útil para trabajar situaciones en las que la ansiedad, el sobrepensamiento, la autoexigencia o el intento de evitar determinadas emociones empiezan a limitar lo que hacés.
          </p>

          <p className="text-gray-700">
            Podés conocer más sobre cómo trabajo <Link href="/ansiedad" className="text-teal-700 hover:underline no-underline">la ansiedad</Link>, <Link href="/sobrepensamiento" className="text-teal-700 hover:underline no-underline">el sobrepensamiento</Link> y <Link href="/falta-de-motivacion" className="text-teal-700 hover:underline no-underline">el bloqueo y la procrastinación</Link>.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-8">No necesitás esperar a sentirte diferente para empezar a actuar diferente</h2>

          <p className="text-lg text-gray-700 mb-8">
            Si esta forma de entender la terapia te resulta cercana, podemos evaluar qué está pasando en tu situación y cómo trabajarlo.
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
