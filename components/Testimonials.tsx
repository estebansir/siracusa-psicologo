'use client';

import { useRef, useState } from 'react';

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
    excerpt: 'Me ayudó mucho a bajar un cambio, a ordenar ideas y, sobre todo, a incorporar herramientas concretas que pude aplicar en mi día a día',
    text: 'Mi experiencia en relación a la terapia con Esteban es excelente. Durante este último año me acompañó en temas personales y laborales, y siempre sentí que podía llevarle lo que me pasaba sin sentirme incómoda. Es muy amable, súper comprensivo y tiene una forma de acompañar que te hace sentir en confianza y da tranquilidad. Me ayudó mucho a bajar un cambio, a ordenar ideas y, sobre todo, a incorporar herramientas concretas que pude aplicar en mi día a día. También valoro mucho que haya sido flexible con los horarios, porque eso hizo que pudiera sostener la terapia sin que se me complique. Siento que no fue solo hablar, sino que realmente hubo un proceso y cambios que puedo notar en mí.',
  },
  {
    id: 'julieta',
    name: 'Julieta',
    excerpt: 'Con su acompañamiento fui pudiendo darle espacio a las emociones, reconocer y diferenciarme de mis pensamientos, y también abrir la posibilidad de cuestionar dinámicas aprendidas',
    text: 'Esteban me acompaña hace más de un año, y el proceso terapéutico con él me fue ayudando a comprender que muchos asuntos internos requieren tiempo, paciencia y disposición para ser sencillamente habitados. Con su acompañamiento fui pudiendo darle espacio a las emociones, reconocer y diferenciarme de mis pensamientos, y también abrir la posibilidad de cuestionar dinámicas aprendidas, observarme con más honestidad y ejercitar activamente nuevas formas de vincularme conmigo misma y con los demás. Valoro profundamente su interés genuino y su manera de acompañar desde la escucha, la presencia y el compromiso.',
  },
  {
    id: 'juan',
    name: 'Juan',
    excerpt: 'Cada sesión es desafiante y productiva: a veces trabajando herramientas o estrategias para aplicarlas en el día a día, y otras veces simplemente desentrañando lo que está ahí trabado',
    text: 'Tengo la suerte de llevar ya un poco más de un año haciendo terapia con Esteban. Un excelente profesional, agradable y atento. Cada sesión es desafiante y productiva: a veces trabajando herramientas o estrategias para aplicarlas en el día a día, y otras veces simplemente desentrañando lo que está ahí trabado. Sin dudas, su trabajo me ha ayudado a estar mejor. Altamente recomendado.',
  },
];

type TestimonialsProps = {
  background?: 'white' | 'muted';
};

export default function Testimonials({ background = 'muted' }: TestimonialsProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const toggle = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Mobile/tablet carousel: track which card is closest to the left edge
  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.children) as HTMLElement[];
    const left = track.scrollLeft;
    let closest = 0;
    cards.forEach((card, index) => {
      if (Math.abs(card.offsetLeft - track.offsetLeft - left) < Math.abs(cards[closest].offsetLeft - track.offsetLeft - left)) {
        closest = index;
      }
    });
    setActiveIndex(closest);
  };

  const goTo = (index: number) => {
    const track = trackRef.current;
    const card = track?.children[index] as HTMLElement | undefined;
    if (!track || !card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' });
  };

  return (
    <section
      aria-labelledby="testimonials-title"
      className={`${background === 'muted' ? 'bg-gray-50' : 'bg-white'} py-16 sm:py-20 lg:py-24`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12 lg:mb-14">
          <h2 id="testimonials-title" className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-5 text-center text-balance">
            Experiencias de quienes hicieron terapia conmigo
          </h2>
          <p className="text-lg text-gray-600 text-center! text-balance leading-relaxed mx-auto mb-0!">
            Cada proceso terapéutico es diferente. Estas son algunas experiencias compartidas por personas que acompañé
          </p>
        </div>

        <div
          ref={trackRef}
          onScroll={handleScroll}
          role="region"
          aria-label="Opiniones de pacientes"
          tabIndex={0}
          className="-mx-6 px-6 flex items-start gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pb-0"
        >
          {testimonials.map((item) => {
            const isExpanded = !!expanded[item.id];
            return (
              <figure
                key={item.id}
                className="relative snap-start shrink-0 w-[85%] max-w-sm sm:w-[22rem] lg:w-auto lg:max-w-none m-0 bg-white border border-gray-200 rounded-lg shadow-[0_1px_3px_rgba(42,38,34,0.04)] px-6 pt-12 pb-7 sm:px-8 sm:pt-14 sm:pb-8"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-4 left-5 sm:left-7 font-serif text-6xl leading-none text-teal-700/25 select-none"
                >
                  &ldquo;
                </span>

                <blockquote className="m-0">
                  <p
                    id={`testimonial-${item.id}`}
                    className={`text-base text-gray-700 leading-relaxed! mb-0! ${isExpanded ? '' : 'min-h-[9.75rem]'}`}
                  >
                    {isExpanded ? item.text : item.excerpt}
                  </p>
                </blockquote>

                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isExpanded}
                  aria-controls={`testimonial-${item.id}`}
                  className="mt-4 text-sm font-medium text-teal-700 hover:text-teal-800 hover:underline underline-offset-4 transition-colors rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                >
                  {isExpanded ? 'Mostrar menos' : 'Leer opinión completa'}
                </button>

                <figcaption className="mt-6 pt-5 border-t border-gray-200 text-sm font-semibold text-gray-900">
                  {item.name}
                </figcaption>
              </figure>
            );
          })}
        </div>

        {/* Carousel position (hidden on desktop, where all cards are visible) */}
        <div className="flex justify-center gap-1 mt-6 lg:hidden">
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Ver opinión ${index + 1} de ${testimonials.length}`}
              aria-current={activeIndex === index}
              className="p-2 rounded-full focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-teal-700"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-200 ${
                  activeIndex === index ? 'w-5 bg-teal-700' : 'w-1.5 bg-gray-400'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
