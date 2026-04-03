type Props = {
  variant?: 'default' | 'icon';
  size?: number;
};

export const Logo = ({ variant = 'default', size = 28 }: Props) => {
  if (variant === 'default') {
    return (
      <svg
        data-logo='logo'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 64 64'
        height={size}
      >
        <defs>
          <radialGradient id='bgGrad' cx='40%' cy='35%' r='65%'>
            <stop offset='0%' stopColor='#1a2a4a' />
            <stop offset='100%' stopColor='#060d1f' />
          </radialGradient>

          <radialGradient id='moonGlow' cx='50%' cy='50%' r='50%'>
            <stop offset='0%' stopColor='#ffe8a0' stopOpacity='0.55' />
            <stop offset='100%' stopColor='#ffe8a0' stopOpacity='0' />
          </radialGradient>

          <radialGradient id='moonSurface' cx='38%' cy='35%' r='60%'>
            <stop offset='0%' stopColor='#fff7d6' />
            <stop offset='60%' stopColor='#fde88a' />
            <stop offset='100%' stopColor='#e8c14a' />
          </radialGradient>

          <linearGradient id='cloudGrad' x1='0%' y1='0%' x2='0%' y2='100%'>
            <stop offset='0%' stopColor='#c8d8f0' stopOpacity='0.92' />
            <stop offset='100%' stopColor='#8aaad4' stopOpacity='0.75' />
          </linearGradient>

          <filter id='cloudShadow' x='-20%' y='-20%' width='140%' height='140%'>
            <feDropShadow dx='0' dy='1' stdDeviation='1.5' floodColor='#0a1a3a' floodOpacity='0.4' />
          </filter>

          <filter id='glowFilter' x='-40%' y='-40%' width='180%' height='180%'>
            <feGaussianBlur stdDeviation='3.5' result='blur' />
            <feMerge>
              <feMergeNode in='blur' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>

        <rect width='64' height='64' rx='14' fill='url(#bgGrad)' />

        <circle cx='10' cy='10' r='0.9' fill='#ffffff' opacity='0.85' />
        <circle cx='52' cy='8' r='0.7' fill='#ffffff' opacity='0.7' />
        <circle cx='55' cy='20' r='0.5' fill='#ffe8a0' opacity='0.9' />
        <circle cx='8' cy='28' r='0.6' fill='#ffffff' opacity='0.6' />
        <circle cx='48' cy='13' r='0.4' fill='#ffffff' opacity='0.75' />
        <circle cx='18' cy='7' r='0.5' fill='#ffe8a0' opacity='0.65' />

        <circle cx='34' cy='24' r='17' fill='url(#moonGlow)' />

        <g filter='url(#glowFilter)'>
          <circle cx='34' cy='24' r='13' fill='url(#moonSurface)' />
          <circle cx='40' cy='20' r='10.5' fill='#0e1d3a' />
        </g>

        <circle cx='27' cy='22' r='1.1' fill='#e8c14a' opacity='0.4' />
        <circle cx='25' cy='30' r='0.7' fill='#e0b83a' opacity='0.3' />

        <g filter='url(#cloudShadow)' opacity='0.93'>
          <circle cx='22' cy='48' r='7.5' fill='url(#cloudGrad)' />
          <circle cx='36' cy='47' r='8.5' fill='url(#cloudGrad)' />
          <circle cx='48' cy='49' r='6.5' fill='url(#cloudGrad)' />
          <rect x='15' y='48' width='40' height='10' rx='5' fill='url(#cloudGrad)' />
          <circle cx='29' cy='45' r='7' fill='url(#cloudGrad)' />
          <circle cx='42' cy='44' r='6' fill='url(#cloudGrad)' />
        </g>
      </svg>
    );
  } else {
    return (
      <svg
        data-logo='logo'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 64 64'
        height={size}
      >
        <defs>
          <radialGradient id='bgGrad' cx='40%' cy='35%' r='65%'>
            <stop offset='0%' stopColor='#1a2a4a' />
            <stop offset='100%' stopColor='#060d1f' />
          </radialGradient>

          <radialGradient id='moonGlow' cx='50%' cy='50%' r='50%'>
            <stop offset='0%' stopColor='#ffe8a0' stopOpacity='0.55' />
            <stop offset='100%' stopColor='#ffe8a0' stopOpacity='0' />
          </radialGradient>

          <radialGradient id='moonSurface' cx='38%' cy='35%' r='60%'>
            <stop offset='0%' stopColor='#fff7d6' />
            <stop offset='60%' stopColor='#fde88a' />
            <stop offset='100%' stopColor='#e8c14a' />
          </radialGradient>

          <linearGradient id='cloudGrad' x1='0%' y1='0%' x2='0%' y2='100%'>
            <stop offset='0%' stopColor='#c8d8f0' stopOpacity='0.92' />
            <stop offset='100%' stopColor='#8aaad4' stopOpacity='0.75' />
          </linearGradient>

          <filter id='cloudShadow' x='-20%' y='-20%' width='140%' height='140%'>
            <feDropShadow dx='0' dy='1' stdDeviation='1.5' floodColor='#0a1a3a' floodOpacity='0.4' />
          </filter>

          <filter id='glowFilter' x='-40%' y='-40%' width='180%' height='180%'>
            <feGaussianBlur stdDeviation='3.5' result='blur' />
            <feMerge>
              <feMergeNode in='blur' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>

        <rect width='64' height='64' rx='14' fill='url(#bgGrad)' />

        <circle cx='10' cy='10' r='0.9' fill='#ffffff' opacity='0.85' />
        <circle cx='52' cy='8' r='0.7' fill='#ffffff' opacity='0.7' />
        <circle cx='55' cy='20' r='0.5' fill='#ffe8a0' opacity='0.9' />
        <circle cx='8' cy='28' r='0.6' fill='#ffffff' opacity='0.6' />
        <circle cx='48' cy='13' r='0.4' fill='#ffffff' opacity='0.75' />
        <circle cx='18' cy='7' r='0.5' fill='#ffe8a0' opacity='0.65' />

        <circle cx='34' cy='24' r='17' fill='url(#moonGlow)' />

        <g filter='url(#glowFilter)'>
          <circle cx='34' cy='24' r='13' fill='url(#moonSurface)' />
          <circle cx='40' cy='20' r='10.5' fill='#0e1d3a' />
        </g>

        <circle cx='27' cy='22' r='1.1' fill='#e8c14a' opacity='0.4' />
        <circle cx='25' cy='30' r='0.7' fill='#e0b83a' opacity='0.3' />

        <g filter='url(#cloudShadow)' opacity='0.93'>
          <circle cx='22' cy='48' r='7.5' fill='url(#cloudGrad)' />
          <circle cx='36' cy='47' r='8.5' fill='url(#cloudGrad)' />
          <circle cx='48' cy='49' r='6.5' fill='url(#cloudGrad)' />
          <rect x='15' y='48' width='40' height='10' rx='5' fill='url(#cloudGrad)' />
          <circle cx='29' cy='45' r='7' fill='url(#cloudGrad)' />
          <circle cx='42' cy='44' r='6' fill='url(#cloudGrad)' />
        </g>
      </svg>
    );
  }
};