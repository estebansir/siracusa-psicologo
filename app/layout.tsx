import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { DEFAULT_METADATA } from '@/lib/metadata';

export const metadata: Metadata = DEFAULT_METADATA;

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
