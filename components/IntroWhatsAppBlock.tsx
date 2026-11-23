import HomeWhatsAppCTA from '@/components/HomeWhatsAppCTA';

// Practical info + primary WhatsApp CTA for the first section of inner landing pages.
// Mirrors the home hero hierarchy: modality (small, gray) → CTA → credential and
// reimbursement fine print. Like on the home, the CTA is mobile-only (the header CTA covers
// desktop); data-wa-anchor="hero" lets the floating mobile button know when it is on screen.
export default function IntroWhatsAppBlock() {
  return (
    <div className="mt-8 text-center">
      <div className="text-sm lg:text-base text-gray-600">
        <p className="text-center! mb-0! max-w-none!">
          <span className="block sm:inline">Psicoterapia online por videollamada</span>
          <span className="hidden sm:inline" aria-hidden="true"> · </span>
          <span className="block sm:inline">Sesiones de 50 minutos</span>
        </p>
      </div>

      <div data-wa-anchor="hero" className="mt-6 flex flex-col sm:flex-row sm:justify-center lg:hidden">
        <HomeWhatsAppCTA ctaLocation="hero" text="Consultar por WhatsApp" />
      </div>

      <div className="mt-4 lg:mt-3 text-[13px] lg:text-sm leading-snug text-gray-600">
        <p className="text-center! mb-0.5! max-w-none! leading-snug!">Lic. en Psicología · MN 85046</p>
        <p className="text-center! mb-0! max-w-none! leading-snug! text-balance">
          Emito factura para solicitar reintegros a obras sociales y prepagas.
        </p>
      </div>
    </div>
  );
}
