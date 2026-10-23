import React from 'react';

export interface IntegrationSlotProps {
  name: string;
  label?: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * IntegrationSlot component
 * Placeholder wrapper for plugging in existing live backend features.
 */
export const IntegrationSlot: React.FC<IntegrationSlotProps> = ({
  name,
  label,
  className = '',
  children,
}) => {
  return (
    <div
      data-integration-slot={name}
      className={`integration-slot-${name} ${className}`}
    >
      {children ? (
        children
      ) : (
        <div className="w-full border-2 border-dashed border-[#18738B]/40 bg-[#E8F5F4]/50 rounded-2xl p-8 sm:p-12 text-center text-[#092345] shadow-xs">
          <div className="inline-block px-3 py-1 rounded-full bg-white border border-[#98D6D6] text-xs font-mono font-semibold uppercase tracking-wider text-[#18738B] mb-3">
            Integration Slot: {name}
          </div>
          <h3
            className="text-lg sm:text-xl font-bold text-[#092345] mb-2"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {label || `${name} mounts here`}
          </h3>
          <p className="text-xs sm:text-sm text-[#293C54]/80 max-w-md mx-auto">
            Existing live backend feature integrates into this mount point ({name}).
          </p>
        </div>
      )}
    </div>
  );
};
