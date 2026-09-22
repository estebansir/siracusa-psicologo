import CTAButton from './CTAButton';

type HeroSectionProps = {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaMessage?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
};

export default function HeroSection({
  title,
  subtitle,
  description,
  ctaText = 'Consultar por WhatsApp',
  ctaMessage,
  secondaryCtaText,
  secondaryCtaHref,
}: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 sm:py-32 lg:py-40 overflow-hidden">
      {/* Background pattern - simplified decorative elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-teal-100 mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute -bottom-10 left-10 w-56 h-56 rounded-full bg-teal-100 mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Subtitle/Eyebrow */}
          {subtitle && (
            <p className="text-sm sm:text-base font-semibold text-teal-700 mb-3 tracking-wide uppercase">
              {subtitle}
            </p>
          )}

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 leading-tight text-gray-900">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
              {description}
            </p>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton
              whatsapp={true}
              message={ctaMessage}
              variant="primary"
              className="w-full sm:w-auto"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371 0-.57 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.99 1.444 9.86 9.86 0 00-3.42 3.427 9.86 9.86 0 00-.614 4.986c.06.626.367 1.181.805 1.584a9.877 9.877 0 004.59 2.404c.656.179 1.338.183 2.008.053a9.863 9.863 0 004.233-2.132c1.27-.945 2.274-2.206 2.892-3.583.616-1.373.927-2.88.95-4.403.025-1.528-.282-3.038-.91-4.417-1.13-2.592-3.28-4.614-5.922-5.483a9.87 9.87 0 00-4.735-.278zM6.009 20.766h.013c1.405 0 2.813-.357 4.107-1.03 1.279-.667 2.396-1.616 3.25-2.766.85-1.144 1.386-2.445 1.629-3.81.242-1.369.137-2.797-.312-4.141-.448-1.343-1.188-2.531-2.21-3.442-1.02-.91-2.305-1.519-3.664-1.865-1.358-.346-2.795-.282-4.086.182a8.868 8.868 0 00-3.775 2.186 8.844 8.844 0 00-2.273 3.547 8.842 8.842 0 00.095 6.936 8.859 8.859 0 003.011 3.35c1.195.788 2.566 1.281 4.023 1.525.391.064.788.076 1.183.054z" />
              </svg>
              {ctaText}
            </CTAButton>

            {secondaryCtaText && secondaryCtaHref && (
              <CTAButton
                href={secondaryCtaHref}
                variant="secondary"
                className="w-full sm:w-auto"
              >
                {secondaryCtaText}
              </CTAButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
