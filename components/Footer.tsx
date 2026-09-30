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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-8 py-6 sm:py-10">
          {/* About section */}
          <div>
            <h3 className="text-sm font-semibold mb-3" style={{ color: 'white' }}>Esteban Siracusa</h3>
            <p className="text-xs text-gray-400 leading-relaxed mb-1!">
              Lic. en Psicología · MN 85046
            </p>
            <a
              href="mailto:esteban.siracusa@gmail.com"
              className={`text-xs ${footerLinkClassName}`}
            >
              esteban.siracusa@gmail.com
            </a>
          </div>

          {FOOTER_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold mb-4 uppercase tracking-wide" style={{ color: 'white' }}>{group.title}</h3>
              <ul className="space-y-2 text-xs pl-0! mb-0!">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={footerLinkClassName}>
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
        <div className="py-6 text-center">
          <p className="text-xs text-gray-400">
            © {currentYear} Esteban Siracusa
          </p>
        </div>
      </div>
    </footer>
  );
}
