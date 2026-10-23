import React, { useState, useEffect, useRef } from 'react';
import kasakikoLogoImg from '../assets/images/kasakiko_logo.jpeg';

interface KasakikoLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
}

/**
 * Official Kasakiko Logo Component
 * Renders the exact kasakiko logo (mosaic house with keyhole doorway + wordmark)
 * seamlessly on a pure white container.
 */
export const KasakikoLogo: React.FC<KasakikoLogoProps> = ({
  className = '',
  size = 'md',
  showWordmark = true,
}) => {
  const [customLogoUrl, setCustomLogoUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check localStorage in case user previously uploaded a replacement
  useEffect(() => {
    try {
      const saved = localStorage.getItem('kasakiko_custom_logo');
      if (saved) {
        setCustomLogoUrl(saved);
      }
    } catch {
      // Ignore storage errors in sandboxed frames
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomLogoUrl(result);
          try {
            localStorage.setItem('kasakiko_custom_logo', result);
          } catch {
            // Ignore storage errors
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Height configurations for seamless header and footer proportions
  const heightClass = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11',
    lg: 'h-12 sm:h-14',
  }[size];

  const currentSrc = customLogoUrl || kasakikoLogoImg;

  return (
    <div
      className={`relative inline-flex items-center select-none bg-white p-0 sm:p-1 rounded-xl ${className}`}
    >
      {/* Hidden file input if user ever needs to replace */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        aria-label="Upload Kasakiko logo image"
      />

      {/* Render the official kasakiko logo.jpeg image */}
      <img
        src={currentSrc}
        alt="kasakiko logo"
        className={`${heightClass} w-auto object-contain block`}
        onError={(e) => {
          // Fallback to static public path if asset bundle path differs
          const target = e.currentTarget;
          if (target.src !== window.location.origin + '/kasakiko-logo.jpeg') {
            target.src = '/kasakiko-logo.jpeg';
          }
        }}
      />
    </div>
  );
};
