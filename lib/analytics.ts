// Función para trackear eventos en GA4
// Solo se ejecuta en cliente si GA4 está configurado

export function trackWhatsAppClick(ctaLocation: string, pagePath: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      page_path: pagePath,
      cta_location: ctaLocation,
    });
  }
}

// Tipos para TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
