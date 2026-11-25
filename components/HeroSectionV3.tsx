'use client';

import Image from 'next/image';
import styles from './HeroSectionV3.module.css';
import { WHATSAPP_MESSAGE_DEFAULT } from '@/lib/constants';
import { trackWhatsAppClick } from '@/lib/analytics';
import { useWhatsAppUrl } from '@/lib/useWhatsAppUrl';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { usePathname } from 'next/navigation';

type HeroSectionV3Props = {
  training?: string[];
  title: string;
  description: string;
  primaryCtaText?: string;
  primaryCtaMessage?: string;
  microcopy?: string;
  fees?: { label: string; amount: string }[];
  credential?: string;
  reimbursementNote?: string;
};

export default function HeroSectionV3(p: HeroSectionV3Props) {
  const pathname = usePathname();
  const whatsappUrl = useWhatsAppUrl(p.primaryCtaMessage ?? WHATSAPP_MESSAGE_DEFAULT);
  return (
    <section className={styles.hero}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className={styles.grid}>
          <h1>{p.title}</h1>
          <div className={styles.photo}>
            <Image src="/images/fotoperfil.png" alt="Esteban Siracusa, psicólogo" fill preload sizes="(min-width: 1024px) 440px, (min-width: 640px) 520px, calc(100vw - 48px)" className="object-cover object-[50%_12%] sm:object-[62%_15%]" />
          </div>
          <div className={styles.credential}>
            <p className={styles.credentialText}>{p.credential}</p>
          </div>
          <div className={styles.cta} data-wa-anchor="hero">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('hero', pathname)} className={styles.button} style={{ color: 'white' }}>
              <WhatsAppIcon className="w-5 h-5 mr-2" />
              {p.primaryCtaText ?? 'Consultar por WhatsApp'}
            </a>
          </div>
          <p className={styles.description}>{p.description}</p>
          {p.training && (
            <ul className={styles.training}>
              {p.training.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          )}
          <p className={styles.modality}>{p.microcopy}</p>
          <div className={styles.fees}>
            <p className={styles.feesLabel}>Honorarios por sesión (50 minutos):</p>
            <ul>
              {p.fees?.map((f) => (
                <li key={f.label}>
                  <span className={styles.feeLabel}>{f.label}</span>
                  <span className={styles.separator}>: </span>
                  <span className={styles.feeAmount}>{f.amount}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className={styles.reimbursement}>{p.reimbursementNote}</p>
        </div>
      </div>
    </section>
  );
}
