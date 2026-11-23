import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { DEFAULT_METADATA } from '@/lib/metadata';

export const metadata: Metadata = DEFAULT_METADATA;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  colorScheme: 'light dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ga4MeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="es">
      <head>
        {ga4MeasurementId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${ga4MeasurementId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  // Owner's browsers: ?ga_interno=es-7q4m sets a flag, ?ga_interno=quitar removes it.
                  // Flagged browsers send traffic_type=internal (GA4 "Internal Traffic" data filter).
                  // Not a security measure: it only labels the owner's own visits.
                  (function () {
                    try {
                      var v = new URLSearchParams(location.search).get('ga_interno');
                      if (v === 'es-7q4m') localStorage.setItem('es_interno', '1');
                      else if (v === 'quitar') localStorage.removeItem('es_interno');
                      if (localStorage.getItem('es_interno') === '1') gtag('set', { traffic_type: 'internal' });
                    } catch (e) {}
                  })();
                  gtag('js', new Date());
                  gtag('config', '${ga4MeasurementId}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="flex flex-col min-h-screen bg-white" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
