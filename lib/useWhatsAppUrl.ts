'use client';

import { useEffect, useState } from 'react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE_DEFAULT } from '@/lib/constants';
import { getOriginCode, withOriginCode } from '@/lib/attribution';

function buildUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * WhatsApp link for the contact buttons.
 * The server-rendered href is the plain message, so the link works before JavaScript loads.
 * After hydration the origin code is appended: "… (ref. C1)".
 */
export function useWhatsAppUrl(message: string = WHATSAPP_MESSAGE_DEFAULT): string {
  const [url, setUrl] = useState(() => buildUrl(message));

  useEffect(() => {
    setUrl(buildUrl(withOriginCode(message, getOriginCode())));
  }, [message]);

  return url;
}
