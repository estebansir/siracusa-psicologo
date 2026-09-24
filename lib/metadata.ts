import { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from './constants';

const DEFAULT_OG_IMAGE = '/images/og-esteban-siracusa.png';

interface PageMetadataProps {
  title: string;
  description: string;
  pathname: string;
  ogImage?: string;
}

export function generatePageMetadata({
  title,
  description,
  pathname,
  ogImage,
}: PageMetadataProps): Metadata {
  // title ya viene con el formato exacto deseado
  const fullUrl = `${SITE_URL}${pathname}`;
  const socialImage = ogImage || DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      type: 'website',
      siteName: SITE_NAME,
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: `${title} — Psicólogo online`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [socialImage],
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  };
}

export const DEFAULT_METADATA: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Psicólogo Online | Esteban Siracusa',
  description: 'Psicólogo online especializado en ansiedad, sobrepensamiento y bloqueo emocional. Terapia de Aceptación y Compromiso (ACT) para adultos en Argentina y exterior.',
  keywords: ['psicólogo online', 'terapia online', 'ansiedad', 'sobrepensamiento', 'ACT', 'psicoterapia'],
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
};
