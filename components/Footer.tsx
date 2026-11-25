'use client';

import Link from 'next/link';

const FOOTER_GROUPS = [
  {
    title: 'Terapia',
    links: [
      { label: 'Ansiedad', href: '/ansiedad' },
      { label: 'Sobrepensamiento', href: '/sobrepensamiento' },
      { label: 'Problemas relacionales', href: '/problemas-relacionales' },
      { label: 'Falta de motivación', href: '/falta-de-motivacion' },
    ],
  },
  {
    title: 'Enfoque',
    links: [
      { label: 'Inicio', href: '/' },
      { label: 'Terapia online', href: '/psicologo-online' },
      { label: 'Terapia ACT', href: '/terapia-act' },
      { label: 'Sobre mí', href: '/sobre-mi' },
    ],
  },
  {
    title: 'En el exterior',
    links: [
      { label: 'Terapia para personas en el exterior', href: '/psicologo-migrantes' },
    ],
  },
];

// The global `a` color rule is unlayered and overrides utilities, so footer link colors need `!`.
const footerLinkClassName =
  'text-gray-400! hover:text-teal-400! focus-visible:text-teal-400! transition-colors';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-[1.45fr_1fr_1fr_1fr] gap-x-4 gap-y-6 sm:gap-8 py-6 sm:py-10">
          {/* About section */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-base! font-semibold mb-2!" style={{ color: 'white' }}>Esteban Siracusa</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-1!">
              Lic. en Psicología · MN 85046
            </p>
            <a
              href="mailto:esteban.siracusa@gmail.com"
              className={`text-sm inline-block py-3 lg:py-1 ${footerLinkClassName}`}
            >
              esteban.siracusa@gmail.com
            </a>
          </div>

          {FOOTER_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm! font-semibold mb-1! lg:mb-3!" style={{ color: 'white' }}>{group.title}</h3>
              <ul className="text-sm pl-0! mb-0!">
                {group.links.map((link) => (
                  <li key={link.href} className="mb-0!">
                    <Link href={link.href} className={`inline-block py-3 lg:py-1 ${footerLinkClassName}`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Bottom section */}
        <div className="py-3 text-center">
          <p className="text-sm text-gray-400 text-center! max-w-none! mb-0!">
            © {currentYear} Esteban Siracusa ·{' '}
            <Link href="/privacidad" className={`inline-block py-3 font-normal! ${footerLinkClassName}`}>
              Política de privacidad
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
