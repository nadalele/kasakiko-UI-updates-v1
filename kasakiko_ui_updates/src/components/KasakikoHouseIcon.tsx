import React from 'react';
import tealLogoPng from '../assets/images/Kasakiko solid logo_Teal.png';
import whiteLogoPng from '../assets/images/Kasakiko solid logo_White.png';

export interface KasakikoHouseIconProps {
  className?: string;
  size?: number;
  color?: 'teal' | 'white';
  alt?: string;
}

/**
 * Official Kasakiko House Emblem Icon Component
 * Renders the exact, unaltered user-provided PNGs:
 * - 'Kasakiko solid logo_Teal.png' for light backgrounds
 * - 'Kasakiko solid logo_White.png' for dark / navy backgrounds
 *
 * Strict fidelity guarantees:
 * - Color, lines, and shape are completely UNTOUCHED
 * - Only dimensional sizing (size prop in px) is applied
 * - Aspect ratio strictly preserved on 1:1 square canvas
 * - Eager loading and automatic fallback to static public paths
 */
export const KasakikoHouseIcon: React.FC<KasakikoHouseIconProps> = ({
  className = '',
  size = 16,
  color = 'teal',
  alt = 'Kasakiko icon',
}) => {
  const isWhite = color === 'white';
  const src = isWhite ? whiteLogoPng : tealLogoPng;
  const fallbackSrc = isWhite
    ? '/Kasakiko%20solid%20logo_White.png'
    : '/Kasakiko%20solid%20logo_Teal.png';

  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        maxWidth: `${size}px`,
        maxHeight: `${size}px`,
        display: 'inline-block',
      }}
      className={`shrink-0 object-contain align-middle select-none pointer-events-none ${className}`}
      onError={(e) => {
        const target = e.currentTarget;
        if (target.src !== window.location.origin + fallbackSrc) {
          target.src = fallbackSrc;
        }
      }}
      loading="eager"
      decoding="async"
    />
  );
};

