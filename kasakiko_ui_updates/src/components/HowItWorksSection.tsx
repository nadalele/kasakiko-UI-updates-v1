import React from 'react';
import { Search, Pencil, Lock } from 'lucide-react';
import { KasakikoHouseIcon } from './KasakikoHouseIcon';

interface HowItWorksSectionProps {
  onWriteReviewClick: () => void;
  onSearchLandlordClick: () => void;
  onJumpToLandlords: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  onWriteReviewClick,
  onSearchLandlordClick,
  onJumpToLandlords,
}) => {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          {/* Eyebrow Label: 'For renters' */}
          <div
            className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#18738B] mb-2"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            For renters
          </div>
          {/* Heading: 'How it works' */}
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#092345] tracking-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.02em' }}
          >
            How it works
          </h2>
        </div>

        {/* 3 Steps Grid: Numbered 1, 2, 3 with thin line above each step */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-12">
          {/* Step 1 */}
          <div className="relative pt-6 border-t-2 border-[#18738B]/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#98D6D6] flex items-center justify-center text-[#18738B] shadow-xs">
                  <Search className="w-6 h-6" strokeWidth={1.8} />
                </div>
                <span
                  className="text-2xl font-bold text-[#18738B]/40"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  01
                </span>
              </div>
              <h3
                className="text-xl font-bold text-[#092345] mb-2.5"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Search a landlord
              </h3>
              <p className="text-[#293C54] text-sm sm:text-base leading-relaxed">
                Look up by landlord name or building address to find the properties and reviews linked to them.
              </p>
            </div>
          </div>

          {/* Step 2: Visually emphasized as the key moment with subtle Pale Aqua highlight */}
          <div className="relative pt-6 border-t-2 border-[#2EABBA] flex flex-col justify-between rounded-2xl bg-[#98D6D6]/15 p-5 -m-5 sm:m-0 sm:p-6 sm:border-t-2 sm:border-[#2EABBA] border border-[#98D6D6]/50 shadow-soft">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#2EABBA] flex items-center justify-center text-[#18738B] shadow-xs">
                  <Pencil className="w-6 h-6" strokeWidth={1.8} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold text-[#092345] bg-[#2EABBA]/30 px-2 py-0.5 rounded-full">
                    Key Step
                  </span>
                  <span
                    className="text-2xl font-bold text-[#18738B]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    02
                  </span>
                </div>
              </div>
              <h3
                className="text-xl font-bold text-[#092345] mb-2.5"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Leave one review
              </h3>
              <p className="text-[#293C54] text-sm sm:text-base leading-relaxed font-medium">
                Answer a short set of factual questions about a landlord you rent from or used to.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative pt-6 border-t-2 border-[#18738B]/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#98D6D6] flex items-center justify-center text-[#18738B] shadow-xs">
                  <Lock className="w-6 h-6" strokeWidth={1.8} />
                </div>
                <span
                  className="text-2xl font-bold text-[#18738B]/40"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  03
                </span>
              </div>
              <h3
                className="text-xl font-bold text-[#092345] mb-2.5"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Unlock every review
              </h3>
              <p className="text-[#293C54] text-sm sm:text-base leading-relaxed">
                Give-to-get: One published review unlocks all reviews and ratings across the platform.
              </p>
            </div>
          </div>
        </div>

        {/* Action Bar below steps:
            Primary turquoise pill button: 'Write a review'
            Beside it: Underlined teal text link: 'Or search a landlord first'
            Quiet line: 'Your review is anonymous.' with brand keyhole icon (no shields) */}
        <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-6 sm:p-7 border border-[#98D6D6]/40 shadow-soft flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto justify-center">
            <button
              type="button"
              onClick={onWriteReviewClick}
              className="w-full sm:w-auto px-7 py-3 text-sm sm:text-base font-semibold text-[#092345] bg-[#2EABBA] hover:bg-[#18738B] hover:text-white rounded-full transition-all duration-150 focus-brand cursor-pointer text-center shadow-xs"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Write a review
            </button>
            <button
              type="button"
              onClick={onSearchLandlordClick}
              className="text-sm sm:text-base font-medium text-[#18738B] underline hover:text-[#092345] transition-colors cursor-pointer text-center sm:text-left"
            >
              Or search a landlord first
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-xs sm:text-sm text-[#293C54] justify-center text-center sm:text-left">
            <div className="flex items-center justify-center gap-2">
              <KasakikoHouseIcon size={16} color="teal" />
              <span className="font-medium text-[#092345]">Your review is anonymous.</span>
            </div>
            <span className="hidden sm:inline text-[#98D6D6]">•</span>
            <button
              type="button"
              onClick={onJumpToLandlords}
              className="text-[#18738B] underline hover:text-[#092345] transition-colors cursor-pointer text-center sm:text-left"
            >
              Looking for the landlord version?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
