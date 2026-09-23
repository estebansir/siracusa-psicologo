import { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from './constants';

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
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : [],
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
