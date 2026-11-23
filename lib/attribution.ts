// Origin code for WhatsApp messages: "(ref. C1)" is appended to the prefilled text so that
// each consultation shows which channel the visitor came from.
//
// Privacy: only a two-character channel code is kept, in sessionStorage (this tab only, cleared
// when the tab closes). Nothing is sent to Google Analytics, Google Ads or any server.

export type OriginCode =
  | 'A1' // Google Ads
  | 'B1' // Google organic
  | 'B2' // Other search engine
  | 'C1' // ChatGPT
  | 'C2' // Perplexity
  | 'C3' // Gemini
  | 'C4' // Copilot
  | 'C5' // Claude
  | 'C6' // Other AI assistant
  | 'D1' // psicologiaymente
  | 'D2' // mundopsicologos
  | 'D3' // Psychology Today
  | 'D9' // Other directory
  | 'E1' // Instagram
  | 'E2' // Facebook
  | 'E3' // LinkedIn
  | 'E9' // Other social network
  | 'F1' // Direct or no detectable referrer
  | 'F2'; // Other site

export type Detection =
  // An explicit signal in the landing URL (click ID or utm_source): always wins.
  | { kind: 'explicit'; code: OriginCode }
  // A referrer from another site.
  | { kind: 'referrer'; code: OriginCode }
  // A referrer from this site (reload or full-page navigation): keep what is stored.
  | { kind: 'internal' }
  // No referrer and no parameters.
  | { kind: 'none' };

const OWN_HOSTS = ['estebansiracusa.com', 'siracusa-psicologo.vercel.app', 'localhost', '127.0.0.1'];

// Order matters: AI assistants are checked before search engines (gemini.google.com is a Google host).
const HOST_RULES: Array<[RegExp, OriginCode]> = [
  [/(^|\.)(chatgpt\.com|openai\.com)$/, 'C1'],
  [/(^|\.)perplexity\.ai$/, 'C2'],
  [/^(gemini|bard)\.google\.com$/, 'C3'],
  [/^copilot\.microsoft\.com$/, 'C4'],
  [/(^|\.)claude\.ai$/, 'C5'],
  [/(^|\.)(deepseek\.com|meta\.ai|grok\.com|you\.com|phind\.com|mistral\.ai|poe\.com)$/, 'C6'],
  [/(^|\.)google\.[a-z]{2,3}(\.[a-z]{2})?$/, 'B1'],
  [/(^|\.)(bing\.com|duckduckgo\.com|yahoo\.com|ecosia\.org|search\.brave\.com|yandex\.[a-z]+|startpage\.com)$/, 'B2'],
  [/(^|\.)psicologiaymente\.com$/, 'D1'],
  [/(^|\.)mundopsicologos\.com(\.ar)?$/, 'D2'],
  [/(^|\.)psychologytoday\.com$/, 'D3'],
  [/(^|\.)(doctoralia\.[a-z.]+|topdoctors\.[a-z.]+|terapeutas\.[a-z.]+)$/, 'D9'],
  [/(^|\.)instagram\.com$/, 'E1'],
  [/(^|\.)(facebook\.com|fb\.com|fb\.me|messenger\.com)$/, 'E2'],
  [/(^|\.)(linkedin\.com|lnkd\.in)$/, 'E3'],
  [/(^|\.)(t\.co|x\.com|twitter\.com|tiktok\.com|youtube\.com|threads\.net|pinterest\.[a-z.]+|reddit\.com)$/, 'E9'],
];

const UTM_SOURCE_RULES: Array<[RegExp, OriginCode]> = [
  [/^(chatgpt(\.com)?|openai)$/, 'C1'],
  [/^perplexity(\.ai)?$/, 'C2'],
  [/^(gemini|bard)(\.google\.com)?$/, 'C3'],
  [/^copilot(\.microsoft\.com)?$/, 'C4'],
  [/^claude(\.ai)?$/, 'C5'],
  [/^(deepseek|meta\.ai|grok|you\.com|phind|mistral|poe)/, 'C6'],
  [/^psicologiaymente/, 'D1'],
  [/^mundopsicologos/, 'D2'],
  [/^psychologytoday/, 'D3'],
  [/^(doctoralia|topdoctors)/, 'D9'],
  [/^(ig|instagram)/, 'E1'],
  [/^(fb|facebook|messenger)/, 'E2'],
  [/^(linkedin|lnkd)/, 'E3'],
  [/^(x|twitter|t\.co|tiktok|youtube|threads|pinterest|reddit)/, 'E9'],
  [/^(bing|duckduckgo|yahoo|ecosia|brave)/, 'B2'],
];

function hostFromReferrer(referrer: string): string | null {
  if (!referrer) return null;
  // The Google app on Android sends "android-app://com.google.android.googlequicksearchbox/".
  if (referrer.startsWith('android-app://com.google.android.googlequicksearchbox')) return 'www.google.com';
  try {
    return new URL(referrer).hostname.toLowerCase();
  } catch {
    return null;
  }
}

function isOwnHost(host: string): boolean {
  return OWN_HOSTS.some((own) => host === own || host.endsWith(`.${own}`));
}

/** Pure classification of a landing: no browser APIs, so it can be tested in isolation. */
export function detectOrigin(search: string, referrer: string): Detection {
  const params = new URLSearchParams(search);

  if (params.has('gclid') || params.has('gbraid') || params.has('wbraid')) {
    return { kind: 'explicit', code: 'A1' };
  }

  const utmSource = (params.get('utm_source') || '').trim().toLowerCase();
  if (utmSource) {
    const utmMedium = (params.get('utm_medium') || '').trim().toLowerCase();
    if (utmSource === 'google') {
      return { kind: 'explicit', code: /^(cpc|ppc|paid|paidsearch|sem)$/.test(utmMedium) ? 'A1' : 'B1' };
    }
    const match = UTM_SOURCE_RULES.find(([pattern]) => pattern.test(utmSource));
    return { kind: 'explicit', code: match ? match[1] : 'F2' };
  }

  const host = hostFromReferrer(referrer);
  if (!host) return { kind: 'none' };
  if (isOwnHost(host)) return { kind: 'internal' };

  const match = HOST_RULES.find(([pattern]) => pattern.test(host));
  return { kind: 'referrer', code: match ? match[1] : 'F2' };
}

/**
 * Decides the code for this tab.
 * - An explicit signal (click ID or utm_source) replaces whatever was stored.
 * - Otherwise the code stored earlier in this tab wins, so navigating between pages and
 *   reloading keep the original origin.
 * - With nothing stored: the referrer's code, or F1 when there is no referrer.
 * - A referrer from this site with nothing stored means the origin was lost: no code.
 */
export function resolveOrigin(detection: Detection, stored: OriginCode | null): OriginCode | null {
  if (detection.kind === 'explicit') return detection.code;
  if (stored) return stored;
  if (detection.kind === 'referrer') return detection.code;
  if (detection.kind === 'none') return 'F1';
  return null;
}

const STORAGE_KEY = 'es_ref';
const VALID_CODE = /^[A-F][0-9]$/;

let resolvedThisPageLoad: OriginCode | null | undefined;

function readStored(): OriginCode | null {
  try {
    const value = window.sessionStorage.getItem(STORAGE_KEY);
    return value && VALID_CODE.test(value) ? (value as OriginCode) : null;
  } catch {
    return null;
  }
}

function writeStored(code: OriginCode): void {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, code);
  } catch {
    // Storage blocked (some in-app browsers): the in-memory value still covers this page load
    // and client-side navigation.
  }
}

/**
 * Browser-only. Resolves once per page load, from the landing URL and referrer.
 * Client-side navigation between pages keeps the module state, so later pages reuse the value.
 */
export function getOriginCode(): OriginCode | null {
  if (typeof window === 'undefined') return null;
  if (resolvedThisPageLoad !== undefined) return resolvedThisPageLoad;

  const detection = detectOrigin(window.location.search, document.referrer);
  const code = resolveOrigin(detection, readStored());
  if (code) writeStored(code);
  resolvedThisPageLoad = code;
  return code;
}

export function withOriginCode(message: string, code: OriginCode | null): string {
  return code ? `${message} (ref. ${code})` : message;
}
