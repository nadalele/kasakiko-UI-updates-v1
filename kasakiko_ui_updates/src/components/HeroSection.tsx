import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { KasakikoHouseIcon } from './KasakikoHouseIcon';
import { IntegrationSlot } from './IntegrationSlot';

// Hero image: Sunlit open doorway with seamless continuous wood floor paneling
import heroDoorImg from '../assets/images/door_threshold_still_clean.jpg';

interface HeroSectionProps {
  onWriteReviewClick: () => void;
  onNavigateLandlords?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onWriteReviewClick,
  onNavigateLandlords,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Two-Tone Headline, Exact Subhead, Search Pill, Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* San Francisco Pilot Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#98D6D6] shadow-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-[#2EABBA] shrink-0" />
              <span
                className="text-xs font-semibold tracking-wide text-[#18738B]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Now LIVE in San Francisco
              </span>
            </div>

            {/* Two-Tone Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-5 text-balance"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.025em' }}
            >
              <span className="block text-[#092345]">Know your landlord</span>
              <span className="block text-[#18738B]">before signing.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-[#293C54] leading-relaxed max-w-2xl mb-4 font-normal text-balance">
              Every landlord has a Kasakiko score built from real tenant reviews. See it before you sign, and share your own anonymously.
            </p>

            {/* First mention explanation callout */}
            <div className="inline-flex items-center gap-2 text-xs text-[#18738B] bg-white/80 border border-[#98D6D6] rounded-full px-3.5 py-1.5 mb-6 text-left sm:text-center shadow-2xs">
              <KasakikoHouseIcon size={14} color="teal" />
              <span>
                <strong>Kasakiko score:</strong> Built from factual reviews by a landlord's past and current tenants.
              </span>
            </div>

            {/* INTEGRATION: Live backend property and address search integration mounts here */}
            <div className="w-full max-w-xl mb-6">
              <IntegrationSlot name="property-search">
                <form
                  onSubmit={handleSearchSubmit}
                  className="relative flex items-center bg-white rounded-full border border-[#98D6D6]/50 shadow-search p-1.5 transition-all focus-within:border-[#2EABBA] focus-within:ring-2 focus-within:ring-[#2EABBA]/30"
                >
                  <div className="pl-4 pr-2 text-[#18738B] shrink-0">
                    <Search className="w-5 h-5" strokeWidth={2.2} />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Building address or landlord name..."
                    className="w-full bg-transparent text-xs sm:text-base placeholder:text-xs sm:placeholder:text-base text-[#293C54] placeholder-[#293C54]/70 focus:outline-none py-2 pr-2 sm:pr-3 font-normal"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                  <button
                    type="submit"
                    className="shrink-0 px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold text-[#092345] bg-[#2EABBA] hover:bg-[#18738B] hover:text-white rounded-full transition-all duration-150 focus-brand cursor-pointer shadow-xs whitespace-nowrap"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Search
                  </button>
                </form>
              </IntegrationSlot>
            </div>

            {/* Secondary Action & Keyhole Privacy Cue */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onWriteReviewClick}
                className="w-full sm:w-auto px-6 py-2.5 text-sm font-semibold text-[#092345] bg-transparent border-2 border-[#2EABBA] hover:bg-[#2EABBA] rounded-full transition-all duration-150 focus-brand cursor-pointer text-center whitespace-nowrap"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Write a review
              </button>
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#293C54]">
                <KasakikoHouseIcon size={16} color="teal" />
                <span>
                  Always anonymous. Verified with proof. Never for sale.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Layered Framing */}
          <div className="lg:col-span-5 relative">
            {/* Layered Card Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none group">
              {/* Layer 1: Background offset physical backing card providing depth */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 rounded-3xl bg-[#E8F5F4] border border-[#98D6D6]/50 -z-0 pointer-events-none transition-transform duration-300 group-hover:translate-x-3.5 group-hover:translate-y-3.5" />

              {/* Layer 2: Main Photography Card Frame */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#98D6D6] shadow-card bg-white z-10 transition-transform duration-300 group-hover:-translate-y-0.5">
                <img
                  src={heroDoorImg}
                  alt="Sunlit front doorway with hardwood flooring"
                  className="w-full h-[360px] sm:h-[430px] lg:h-[480px] object-cover block"
                  loading="eager"
                />

                {/* Subtle Inner Gradient & Verified Baseline Badge */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-[#092345]/85 via-[#092345]/50 to-transparent flex items-center justify-between text-white">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#E8F5F4] border border-[#98D6D6] flex items-center justify-center text-[#18738B] shrink-0">
                      <KasakikoHouseIcon size={16} color="teal" />
                    </div>
                    <div>
                      <div
                        className="text-xs font-bold text-white tracking-tight"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        Unlock every tenant’s story
                      </div>
                      <div className="text-[11px] text-[#98D6D6]">
                        Verified tenant reviews · Never altered
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold bg-[#2EABBA] text-[#092345] px-2.5 py-1 rounded-full shrink-0">
                    Live Data
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
