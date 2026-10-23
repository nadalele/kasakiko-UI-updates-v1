import React from 'react';
import { Star } from 'lucide-react';
import { KasakikoHouseIcon } from './KasakikoHouseIcon';

interface KasakikoScoreBadgeProps {
  score: number;
  reviewCount?: number;
  size?: 'compact' | 'standard' | 'expanded';
  className?: string;
  onLinkClick?: () => void;
}

export const KasakikoScoreBadge: React.FC<KasakikoScoreBadgeProps> = ({
  score,
  reviewCount,
  size = 'standard',
  className = '',
  onLinkClick,
}) => {
  const formattedScore = score.toFixed(1);

  const renderStars = (rating: number, sizeClass = 'w-3 h-3') => {
    return (
      <div className="flex items-center gap-0.5 justify-center">
        {[1, 2, 3, 4, 5].map((starIndex) => {
          const isFilled = rating >= starIndex;
          const isHalf = !isFilled && rating >= starIndex - 0.5;

          return (
            <Star
              key={starIndex}
              className={`${sizeClass} ${
                isFilled
                  ? 'text-[#18738B] fill-[#18738B]'
                  : isHalf
                  ? 'text-[#18738B] fill-[#18738B]/50'
                  : 'text-[#98D6D6] fill-transparent'
              }`}
            />
          );
        })}
      </div>
    );
  };

  if (size === 'compact') {
    return (
      <div
        className={`inline-flex flex-col items-center justify-center px-2 py-1 bg-[#E8F5F4]/70 border border-[#98D6D6] rounded-xl shadow-xs shrink-0 select-none ${className}`}
        title={`Kasakiko score ${formattedScore} out of 5.0`}
      >
        <span
          className="text-xs font-extrabold text-[#18738B] leading-none mb-0.5 tracking-tight"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {formattedScore}
        </span>
        {renderStars(score, 'w-2.5 h-2.5')}
      </div>
    );
  }

  if (size === 'standard') {
    return (
      <div
        className={`flex flex-col items-center justify-center text-center shrink-0 bg-[#E8F5F4]/70 px-4 py-2.5 rounded-2xl border border-[#98D6D6] shadow-xs select-none ${className}`}
        title={`Kasakiko score ${formattedScore} out of 5.0`}
      >
        <div
          className="text-2xl font-extrabold text-[#18738B] leading-none mb-1 tracking-tight"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {formattedScore}
        </div>
        {renderStars(score, 'w-3.5 h-3.5')}
        <div className="flex items-center gap-1 mt-1 justify-center">
          <KasakikoHouseIcon size={11} color="teal" />
          <span
            className="text-[10px] text-[#293C54] font-semibold uppercase tracking-wider leading-none"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Kasakiko score
          </span>
        </div>
        {reviewCount !== undefined && reviewCount > 0 && (
          <span
            className="text-[10px] text-[#293C54]/70 mt-1 leading-none"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {reviewCount} reviews
          </span>
        )}
      </div>
    );
  }

  // Expanded size with optional link
  return (
    <div
      className={`flex flex-col items-center justify-center text-center p-4 bg-[#E8F5F4]/70 border border-[#98D6D6] rounded-2xl shadow-soft shrink-0 select-none ${className}`}
    >
      <div
        className="text-3xl font-extrabold text-[#18738B] leading-none mb-1 tracking-tight"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        {formattedScore}
      </div>
      {renderStars(score, 'w-4 h-4')}
      <div className="flex items-center gap-1.5 mt-1.5 justify-center">
        <KasakikoHouseIcon size={13} color="teal" />
        <span
          className="text-xs text-[#293C54] font-semibold uppercase tracking-wider leading-none"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Kasakiko score
        </span>
      </div>
      {reviewCount !== undefined && reviewCount > 0 && (
        <span
          className="text-[11px] text-[#293C54]/75 mt-1 leading-none"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Based on {reviewCount} verified reviews
        </span>
      )}
      {onLinkClick && (
        <div className="pt-2 mt-2 border-t border-[#98D6D6]/30 w-full text-center">
          <button
            type="button"
            onClick={onLinkClick}
            className="text-xs font-semibold text-[#18738B] underline hover:text-[#092345] cursor-pointer"
          >
            See reviews on Kasakiko
          </button>
        </div>
      )}
    </div>
  );
};
