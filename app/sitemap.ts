import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/psicologo-online',
    '/ansiedad',
    '/sobrepensamiento',
    '/problemas-relacionales',
    '/falta-de-motivacion',
    '/terapia-act',
    '/psicologo-migrantes',
    '/sobre-mi',
  ];

  return routes.map(route => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
