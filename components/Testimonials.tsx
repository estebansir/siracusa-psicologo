'use client';

import { useState } from 'react';

type Testimonial = {
  id: string;
  name: string;
  excerpt: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    id: 'priscila',
    name: 'Priscila',
    excerpt: 'Me ayudó mucho a bajar un cambio, a ordenar ideas y, sobre todo, a incorporar herramientas concretas que pude aplicar en mi día a día.',
    text: 'Mi experiencia en relación a la terapia con Esteban es excelente. Durante este último año me acompañó en temas personales y laborales, y siempre sentí que podía llevarle lo que me pasaba sin sentirme incómoda. Es muy amable, súper comprensivo y tiene una forma de acompañar que te hace sentir en confianza y da tranquilidad. Me ayudó mucho a bajar un cambio, a ordenar ideas y, sobre todo, a incorporar herramientas concretas que pude aplicar en mi día a día. También valoro mucho que haya sido flexible con los horarios, porque eso hizo que pudiera sostener la terapia sin que se me complique. Siento que no fue solo hablar, sino que realmente hubo un proceso y cambios que puedo notar en mí.',
  },
  {
    id: 'julieta',
    name: 'Julieta',
    excerpt: 'Con su acompañamiento fui pudiendo darle espacio a las emociones, reconocer y diferenciarme de mis pensamientos, y también abrir la posibilidad de cuestionar dinámicas aprendidas…',
    text: 'Esteban me acompaña hace más de un año, y el proceso terapéutico con él me fue ayudando a comprender que muchos asuntos internos requieren tiempo, paciencia y disposición para ser sencillamente habitados. Con su acompañamiento fui pudiendo darle espacio a las emociones, reconocer y diferenciarme de mis pensamientos, y también abrir la posibilidad de cuestionar dinámicas aprendidas, observarme con más honestidad y ejercitar activamente nuevas formas de vincularme conmigo misma y con los demás. Valoro profundamente su interés genuino y su manera de acompañar desde la escucha, la presencia y el compromiso.',
  },
  {
    id: 'juan',
    name: 'Juan',
    excerpt: 'Cada sesión es desafiante y productiva: a veces trabajando herramientas o estrategias para aplicarlas en el día a día, y otras veces simplemente desentrañando lo que está ahí trabado.',
    text: 'Tengo la suerte de llevar ya un poco más de un año haciendo terapia con Esteban. Un excelente profesional, agradable y atento. Cada sesión es desafiante y productiva: a veces trabajando herramientas o estrategias para aplicarlas en el día a día, y otras veces simplemente desentrañando lo que está ahí trabado. Sin dudas, su trabajo me ha ayudado a estar mejor. Altamente recomendado.',
  },
];

export default function Testimonials() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section aria-labelledby="testimonials-title" className="bg-white py-10 lg:py-18">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 id="testimonials-title" className="text-balance mb-3!">
          Experiencias de quienes hicieron terapia conmigo
        </h2>
        <p className="text-gray-600 mb-0! max-w-none!">
          Cada proceso terapéutico es diferente. Estas son algunas experiencias compartidas por personas que acompañé.
        </p>

        <div className="mt-5 lg:mt-10 grid lg:grid-cols-3 lg:gap-x-12">
          {testimonials.map((item) => {
            const isExpanded = !!expanded[item.id];
            return (
              <figure key={item.id} className="m-0 flex flex-col border-t border-gray-400/60 pt-6 pb-4 last:pb-0 lg:pt-5 lg:pb-0">
                <blockquote className="m-0">
                  <p id={`testimonial-${item.id}`} className="text-gray-800 leading-relaxed! mb-0!">
                    {`“${isExpanded ? item.text : item.excerpt}”`}
                  </p>
                </blockquote>
                <div className="lg:mt-auto lg:pt-3 flex items-center justify-between gap-4">
                  <figcaption className="text-base font-semibold text-gray-900">{item.name}</figcaption>
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`testimonial-${item.id}`}
                    aria-label={`${isExpanded ? 'Mostrar menos' : 'Leer opinión completa'} de ${item.name}`}
                    className="min-h-11 text-[15px] font-medium text-teal-700 hover:text-teal-800 hover:underline underline-offset-4 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                  >
                    {isExpanded ? 'Mostrar menos' : 'Leer opinión completa'}
                  </button>
                </div>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
