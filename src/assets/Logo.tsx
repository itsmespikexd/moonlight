type Props = {
  variant?: 'default' | 'icon';
  size?: number;
};

export const Logo = ({ variant = 'default', size = 28 }: Props) => {
  // Shared defs used in both variants.
  // id prefix avoids duplicate-id conflicts when both variants
  // are mounted simultaneously (e.g. responsive nav).
  const prefix = variant === 'icon' ? 'ml-i-' : 'ml-d-';

  const SharedDefs = () => (
    <defs>
      <radialGradient id={`${prefix}moonGlow`} cx='50%' cy='50%' r='50%'>
        <stop offset='0%' stopColor='#ffe8a0' stopOpacity='0.5' />
        <stop offset='100%' stopColor='#ffe8a0' stopOpacity='0' />
      </radialGradient>

      <radialGradient id={`${prefix}moonSurface`} cx='36%' cy='32%' r='62%'>
        <stop offset='0%' stopColor='#fff8dc' />
        <stop offset='55%' stopColor='#fde88a' />
        <stop offset='100%' stopColor='#e8c14a' />
      </radialGradient>

      <linearGradient id={`${prefix}cloudGrad`} x1='0%' y1='0%' x2='0%' y2='100%'>
        <stop offset='0%' stopColor='#c8d8f0' stopOpacity='0.92' />
        <stop offset='100%' stopColor='#8aaad4' stopOpacity='0.72' />
      </linearGradient>

      <filter id={`${prefix}glow`} x='-50%' y='-50%' width='200%' height='200%'>
        <feGaussianBlur stdDeviation='2' result='blur' />
        <feMerge>
          <feMergeNode in='blur' />
          <feMergeNode in='SourceGraphic' />
        </feMerge>
      </filter>

      <filter id={`${prefix}cloudShadow`} x='-20%' y='-20%' width='140%' height='140%'>
        <feDropShadow dx='0' dy='1' stdDeviation='1' floodColor='#0a1a3a' floodOpacity='0.35' />
      </filter>

      {/* Crescent mask: visible circle minus offset cutout */}
      <mask id={`${prefix}crescent`}>
        <circle cx='22' cy='15' r='10' fill='white' />
        <circle cx='28.5' cy='11' r='8' fill='black' />
      </mask>
    </defs>
  );

  // The logogram fits the 60 × 41 coordinate space used by both variants.
  const Logogram = () => (
    <g id='logogram'>
      <SharedDefs />

      {/* Stars */}
      <circle cx='5'  cy='4'  r='0.75' fill='var(--foreground)' opacity='0.35' />
      <circle cx='14' cy='2'  r='0.55' fill='var(--foreground)' opacity='0.28' />
      <circle cx='45' cy='3'  r='0.65' fill='var(--foreground)' opacity='0.30' />
      <circle cx='52' cy='10' r='0.50' fill='var(--foreground)' opacity='0.25' />
      <circle cx='50' cy='2'  r='0.45' fill='var(--foreground)' opacity='0.22' />

      {/* Moon ambient halo */}
      <circle
        cx='22' cy='15' r='15'
        fill={`url(#${prefix}moonGlow)`}
      />

      {/* Crescent moon */}
      <g filter={`url(#${prefix}glow)`}>
        <circle
          cx='22' cy='15' r='10'
          fill={`url(#${prefix}moonSurface)`}
          mask={`url(#${prefix}crescent)`}
        />
      </g>

      {/* Cloud */}
      <g filter={`url(#${prefix}cloudShadow)`} opacity='0.90'>
        <circle cx='12' cy='34' r='5'   fill={`url(#${prefix}cloudGrad)`} />
        <circle cx='22' cy='32' r='6'   fill={`url(#${prefix}cloudGrad)`} />
        <circle cx='33' cy='31' r='6.5' fill={`url(#${prefix}cloudGrad)`} />
        <circle cx='44' cy='33' r='5'   fill={`url(#${prefix}cloudGrad)`} />
        <rect x='9' y='33' width='38' height='7' rx='3.5'
          fill={`url(#${prefix}cloudGrad)`}
        />
      </g>
    </g>
  );

  if (variant === 'default') {
    return (
      <svg
        data-logo='logo'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 232 43'
        height={size}
      >
        {/* Logogram — same 60 × 41 footprint as the original, shifted down 1 px */}
        <g transform='translate(0, 1)'>
          <Logogram />
        </g>

        {/* Wordmark — positioned identically to the original logotype group */}
        <g id='logotype' transform='translate(66, 8.5)'>
          <text
            fill='var(--foreground)'
            fontFamily='"Inter", "Helvetica Neue", Arial, sans-serif'
            fontSize='26'
            fontWeight='700'
            letterSpacing='-1'
            dominantBaseline='auto'
            y='26'
          >
            Moonlight
          </text>
        </g>
      </svg>
    );
  } else {
    return (
      <svg
        data-logo='logo'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 60 41'
        height={size}
      >
        <Logogram />
      </svg>
    );
  }
};