export const SITE_NAME = 'Esteban Siracusa - Psicólogo Online';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.estebansiracusa.com';
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5491139003698';

export const THERAPY_AREAS = [
  {
    slug: 'ansiedad',
    title: 'Ansiedad',
    description: 'Cuando la preocupación, anticipación o necesidad de control empiezan a ocupar demasiado espacio.',
  },
  {
    slug: 'sobrepensamiento',
    title: 'Sobrepensamiento',
    description: 'Cuando analizar deja de ayudarte a resolver y empieza a impedirte avanzar.',
  },
  {
    slug: 'problemas-relacionales',
    title: 'Problemas relacionales',
    description: 'Cuando poner límites, expresar necesidades o sostener tu posición frente a otros se vuelve difícil.',
  },
  {
    slug: 'falta-de-motivacion',
    title: 'Bloqueo y falta de motivación',
    description: 'Cuando sabés lo que querés hacer pero seguís esperando a sentirte preparado para empezar.',
  },
];

export const WHATSAPP_MESSAGE_DEFAULT = 'Hola Esteban. Vi tu página y quería consultarte por terapia online.';

// Estructura de navegación
export const NAV_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Terapia online', href: '/psicologo-online' },
  { label: 'Cómo trabajo', href: '/terapia-act' },
  { label: 'Sobre mí', href: '/sobre-mi' },
];

export const FOOTER_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Psicólogo online', href: '/psicologo-online' },
  { label: 'Ansiedad', href: '/ansiedad' },
  { label: 'Sobrepensamiento', href: '/sobrepensamiento' },
  { label: 'Problemas relacionales', href: '/problemas-relacionales' },
  { label: 'Falta de motivación', href: '/falta-de-motivacion' },
  { label: 'Terapia ACT', href: '/terapia-act' },
  { label: 'Para migrantes', href: '/psicologo-migrantes' },
  { label: 'Sobre mí', href: '/sobre-mi' },
];
