// src/lib/titleCard.ts

export type TitleCardOptions = {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  /** Optional accent hex (defaults to UNOBITS neon teal). */
  accent?: string;
  /** Optional secondary accent hex (defaults to electric indigo). */
  accent2?: string;
};

function escapeXml(input: string) {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export function makeTitleCardSvg({
  title,
  eyebrow,
  subtitle,
  accent = '#00D4FF',
  accent2 = '#4f46e5',
}: TitleCardOptions) {
  const safeTitle = escapeXml(title);
  const safeEyebrow = eyebrow ? escapeXml(eyebrow) : '';
  const safeSubtitle = subtitle ? escapeXml(subtitle) : '';

  // A premium, dark-first card that still looks good in light mode.
  // We keep it self-contained (no external assets) so it works perfectly with `next export`.
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#050507"/>
      <stop offset="1" stop-color="#000000"/>
    </linearGradient>
    <linearGradient id="glow" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${accent}" stop-opacity="0.85"/>
      <stop offset="0.55" stop-color="${accent2}" stop-opacity="0.45"/>
      <stop offset="1" stop-color="${accent}" stop-opacity="0.75"/>
    </linearGradient>
    <radialGradient id="spot" cx="25%" cy="20%" r="80%">
      <stop offset="0" stop-color="${accent}" stop-opacity="0.20"/>
      <stop offset="0.55" stop-color="${accent2}" stop-opacity="0.10"/>
      <stop offset="1" stop-color="#000" stop-opacity="0"/>
    </radialGradient>
    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="12" result="blur"/>
      <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.85 0" result="glow"/>
      <feMerge>
        <feMergeNode in="glow"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.2" fill="#ffffff" opacity="0.06"/>
      <circle cx="18" cy="12" r="1.2" fill="${accent}" opacity="0.10"/>
    </pattern>
  </defs>

  <rect width="1600" height="1000" fill="url(#bg)"/>
  <rect width="1600" height="1000" fill="url(#spot)"/>
  <rect width="1600" height="1000" fill="url(#dots)"/>

  <!-- Orbit rings -->
  <g opacity="0.35" filter="url(#softGlow)">
    <ellipse cx="1180" cy="420" rx="520" ry="310" fill="none" stroke="url(#glow)" stroke-width="3"/>
    <ellipse cx="1200" cy="460" rx="420" ry="250" fill="none" stroke="url(#glow)" stroke-width="2" opacity="0.7"/>
    <ellipse cx="1160" cy="380" rx="330" ry="190" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.15"/>
  </g>

  <!-- Card frame -->
  <g>
    <rect x="110" y="120" width="1380" height="760" rx="42" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.14)"/>
    <rect x="128" y="138" width="1344" height="724" rx="36" fill="rgba(0,0,0,0.35)" stroke="rgba(255,255,255,0.10)"/>
  </g>

  <!-- Title stack -->
  <g font-family="DM Sans, system-ui, -apple-system, Segoe UI, sans-serif">
    ${safeEyebrow ? `<text x="220" y="280" font-size="26" font-weight="700" fill="${accent}" letter-spacing="2">${safeEyebrow.toUpperCase()}</text>` : ''}
    <text x="220" y="380" font-size="78" font-weight="800" fill="#ffffff" letter-spacing="-1">${safeTitle}</text>
    ${safeSubtitle ? `<text x="220" y="448" font-size="28" font-weight="600" fill="rgba(255,255,255,0.70)">${safeSubtitle}</text>` : ''}

    <g transform="translate(220, 520)">
      <rect x="0" y="0" width="520" height="10" rx="5" fill="url(#glow)" opacity="0.85"/>
      <rect x="0" y="26" width="360" height="8" rx="4" fill="rgba(255,255,255,0.18)"/>
      <rect x="0" y="46" width="280" height="8" rx="4" fill="rgba(255,255,255,0.12)"/>
    </g>
  </g>

  <!-- Accent corner glyph -->
  <g transform="translate(1260, 700)" opacity="0.9" filter="url(#softGlow)">
    <path d="M0,0 L170,0 L170,170" fill="none" stroke="url(#glow)" stroke-width="5" stroke-linecap="round"/>
    <path d="M25,25 L170,25" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="3" stroke-linecap="round"/>
    <path d="M25,25 L25,170" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="3" stroke-linecap="round"/>
  </g>
</svg>`;
}

export function makeTitleCardDataUri(options: TitleCardOptions) {
  const svg = makeTitleCardSvg(options);
  // Encode as UTF-8 data URI so it works reliably in <img> and in static export.
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
