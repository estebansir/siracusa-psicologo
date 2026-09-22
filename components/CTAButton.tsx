import Link from 'next/link';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE_DEFAULT } from '@/lib/constants';

type CTAButtonProps = {
  variant?: 'primary' | 'secondary' | 'text';
  href?: string;
  whatsapp?: boolean;
  message?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function CTAButton({
  variant = 'primary',
  href,
  whatsapp = false,
  message = WHATSAPP_MESSAGE_DEFAULT,
  children,
  className = '',
  onClick,
}: CTAButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2';

  const variantClasses = {
    primary: 'px-6 py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700 focus-visible:outline-gray-700',
    secondary: 'px-6 py-3 rounded-lg border-2 border-gray-800 text-gray-800 hover:bg-gray-50 focus-visible:outline-gray-800',
    text: 'px-3 py-2 text-teal-700 hover:text-teal-800 focus-visible:outline-teal-600',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (whatsapp) {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={classes}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
