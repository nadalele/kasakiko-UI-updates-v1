import React from 'react';
import { KasakikoLogo } from './KasakikoLogo';
import { KasakikoHouseIcon } from './KasakikoHouseIcon';

interface FooterProps {
  onWriteReviewClick: () => void;
  onNavigateSection: (sectionId: string) => void;
  onOpenPrivacyModal: () => void;
  onOpenTermsModal: () => void;
  onOpenGuidelinesModal: () => void;
  onOpenContactModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onWriteReviewClick,
  onNavigateSection,
  onOpenPrivacyModal,
  onOpenTermsModal,
  onOpenGuidelinesModal,
  onOpenContactModal,
}) => {
  return (
    <footer className="relative bg-[#092345] text-white pt-16 pb-12 overflow-hidden">
      {/* Decorative top border in Mediterranean Teal */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#18738B]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pre-footer Call to Action */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 mb-16 border border-white/15 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl">
            <h2
              className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Know your landlord before signing your next lease.
            </h2>
            <p className="text-[#98D6D6] text-sm sm:text-base leading-relaxed">
              Help future renters by contributing one anonymous, verified review. One review unlocks full ratings across the site.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={onWriteReviewClick}
              className="px-7 py-3.5 text-sm sm:text-base font-semibold text-[#092345] bg-[#2EABBA] hover:bg-[#18738B] hover:text-white rounded-full transition-all duration-150 focus-brand cursor-pointer text-center shadow-xs whitespace-nowrap"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Write a review
            </button>
            <button
              type="button"
              onClick={() => onNavigateSection('how-it-works')}
              className="px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-transparent border-2 border-[#2EABBA] hover:bg-[#2EABBA] hover:text-[#092345] rounded-full transition-all duration-150 focus-brand cursor-pointer text-center whitespace-nowrap"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              How it works
            </button>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column with clean white background container */}
          <div className="md:col-span-2">
            <div className="bg-white p-3 rounded-2xl inline-block mb-4 shadow-xs">
              <KasakikoLogo size="sm" />
            </div>
            <p className="text-sm text-[#98D6D6] leading-relaxed max-w-sm">
              Anonymous reviews of individual landlords. We hold landlords accountable for how they treat tenants, not just the building they own.
            </p>
          </div>

          {/* Column 1: For Renters */}
          <div>
            <div
              className="text-xs font-semibold uppercase tracking-wider text-[#98D6D6] mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              For Renters
            </div>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('how-it-works')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  How it works
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onWriteReviewClick}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Submit a review
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('example-reviews')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Example reviews
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('why-kasakiko')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Why Kasakiko
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Kasakiko for Landlords */}
          <div>
            <div
              className="text-xs font-semibold uppercase tracking-wider text-[#98D6D6] mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              For landlords
            </div>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('for-landlords')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Sign up for landlord waitlist
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Transparency & Trust */}
          <div>
            <div
              className="text-xs font-semibold uppercase tracking-wider text-[#98D6D6] mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Transparency & Trust
            </div>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('community-press')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Community & Press
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenGuidelinesModal}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Community Guidelines
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('privacy')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Verification Standards
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacyModal}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenTermsModal}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('privacy')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Anonymity Guarantees
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenContactModal}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact team
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>© 2026 Kasakiko. All rights reserved. Reviews verified with proof and never for sale.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <KasakikoHouseIcon size={14} color="white" />
              Encrypted & Anonymous
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
