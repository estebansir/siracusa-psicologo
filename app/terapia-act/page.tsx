import { generatePageMetadata } from '@/lib/metadata';
import CTAWhatsApp from '@/components/CTAWhatsApp';

export const metadata = generatePageMetadata({
  title: 'Terapia ACT Online | Aceptación y Compromiso',
  description: 'Terapia ACT online para adultos. Un enfoque basado en Aceptación y Compromiso para relacionarte de otra manera con pensamientos y emociones difíciles.',
  pathname: '/terapia-act',
});

export default function TerapiaACT() {
  return (
    <>
      {/* Hero */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="mb-6">Terapia ACT online</h1>

          <p className="text-xl text-gray-600 mb-6">
            La Terapia de Aceptación y Compromiso (ACT) parte de una idea sencilla: muchas veces no podemos elegir qué pensamientos, emociones o sensaciones aparecen, pero sí podemos desarrollar mayor libertad para decidir qué hacemos cuando aparecen.
          </p>

          <p className="text-lg text-gray-600">
            El objetivo no es esperar a sentirte de determinada manera para empezar a vivir diferente, sino ampliar tus posibilidades de actuar en direcciones que tengan sentido para vos.
          </p>
        </div>
      </section>

      {/* Acceptance */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">Aceptar no significa resignarse</h2>

          <p className="text-gray-700 mb-6">
            En ACT, aceptar no significa que algo te guste, que estés de acuerdo con ello o que tengas que quedarte en una situación que te hace daño.
          </p>

          <p className="text-gray-700 mb-6">
            Significa aprender a hacer espacio para determinadas experiencias internas cuando intentar controlarlas o eliminarlas termina interfiriendo con lo que necesitás hacer.
          </p>

          <p className="text-gray-700 mb-6">
            Podés sentir ansiedad y tener una conversación importante. Podés tener dudas y tomar una decisión. Podés sentir incomodidad y poner un límite.
          </p>

          <p className="text-gray-900 mb-0">
            <strong>La aceptación no es un fin en sí mismo. Tiene sentido cuando te permite recuperar posibilidades de acción.</strong>
          </p>
        </div>
      </section>

      {/* Thoughts */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">No todo lo que pensás necesita ser resuelto</h2>

          <p className="text-gray-700 mb-6">
            Pensar puede ayudarte a resolver problemas, tomar decisiones y entender una situación. Pero no todos los pensamientos plantean un problema que pueda resolverse pensando más.
          </p>

          <p className="text-gray-700 mb-6">
            En esos casos, podemos trabajar en aprender a notar un pensamiento sin que necesariamente tengas que resolverlo, eliminarlo u obedecerlo antes de seguir adelante.
          </p>

          <p className="text-gray-900 mb-0">
            <strong>No se trata de pensar en positivo ni de reemplazar pensamientos “negativos” por otros más agradables. Se trata de ampliar la forma en que podés responder cuando aparecen.</strong>
          </p>
        </div>
      </section>

      {/* Short-term relief, longer-term cost, values */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">Cuando sentirte mejor ahora empieza a limitarte después</h2>

          <p className="text-gray-700 mb-6">
            Frente a algo difícil es natural intentar reducir el malestar. Podés evitar una situación, postergar una decisión, buscar tranquilidad en otra persona o seguir pensando hasta sentir más certeza.
          </p>

          <p className="text-gray-700 mb-6">
            Esas respuestas pueden tener sentido y muchas veces alivian en el momento. El problema aparece cuando ese alivio empieza a tener un costo: dejás de hacer cosas importantes, tus decisiones se organizan cada vez más alrededor de evitar determinadas experiencias o tu vida se va volviendo más limitada.
          </p>

          <p className="text-gray-700 mb-6">
            Por eso no miramos solamente si una estrategia te hace sentir mejor ahora, sino también <strong className="text-gray-900">qué efecto tiene sobre la vida que querés construir.</strong>
          </p>

          <p className="text-gray-700 mb-0">
            En ACT, los valores funcionan como direcciones: ayudan a orientar cómo querés actuar y qué querés cuidar en tu vida, incluso cuando no podés garantizar un resultado determinado.
          </p>
        </div>
      </section>

      {/* ACT, FAP and mindfulness */}
      <section className="prose-section-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">ACT, FAP y mindfulness en mi forma de trabajar</h2>

          <p className="text-gray-700 mb-6">
            ACT es mi orientación terapéutica principal y forma parte de un enfoque conductual contextual: además de qué pensás o sentís, prestamos atención a qué ocurre en determinadas situaciones, cómo respondés y qué consecuencias tienen esas respuestas.
          </p>

          <p className="text-gray-700 mb-6">
            También incorporo elementos de la Psicoterapia Analítico Funcional (FAP), que presta especial atención a los patrones que pueden aparecer dentro de la propia relación terapéutica. Por ejemplo, buscar aprobación, evitar un desacuerdo o tener dificultad para expresar algo que te molestó.
          </p>

          <p className="text-gray-700 mb-6">
            El mindfulness puede formar parte del trabajo como una manera de aprender a observar con mayor claridad pensamientos, emociones y sensaciones mientras están ocurriendo. <strong className="text-gray-900">Eso no implica necesariamente meditar.</strong>
          </p>

          <p className="text-gray-700 mb-0">
            No trabajo aplicando el mismo protocolo a todas las personas. El punto de partida es entender qué está ocurriendo en tu caso y qué necesitamos trabajar.
          </p>
        </div>
      </section>

      {/* What a session looks like */}
      <section className="prose-section-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-left mb-8">¿Cómo se ve esto en una sesión?</h2>

          <p className="text-gray-700 mb-6">
            Podemos partir de una situación concreta que haya ocurrido durante la semana y mirar qué estaba pasando, qué pensamientos o emociones aparecieron, qué hiciste frente a ellos y qué ocurrió después.
          </p>

          <p className="text-gray-700 mb-6">
            A veces alcanza con conversar y analizar la situación. Otras veces podemos hacer un ejercicio, probar una manera diferente de responder o trabajar con algo que está ocurriendo en la propia sesión.
          </p>

          <p className="text-gray-700 mb-0">
            También podemos acordar algo para observar o probar fuera de terapia y revisar después qué pasó. <strong className="text-gray-900">La idea es que lo que trabajamos en sesión pueda producir diferencias en situaciones reales de tu vida.</strong>
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
            location="final_cta"
            text="Consultar por WhatsApp"
          />
        </div>
      </section>
    </>
  );
}
