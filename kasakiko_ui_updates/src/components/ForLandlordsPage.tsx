import React, { useState } from 'react';
import {
  Check,
  Lock,
  Clock,
  MessageSquare,
  Pin,
  TrendingUp,
  ShieldCheck,
  FileText,
  AlertCircle,
  Eye,
  CheckCircle2,
  X,
  ExternalLink,
  Star,
} from 'lucide-react';
import { KasakikoHouseIcon } from './KasakikoHouseIcon';

interface ForLandlordsPageProps {
  onBackToHome?: () => void;
}

export const ForLandlordsPage: React.FC<ForLandlordsPageProps> = () => {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  const [landlordEmail, setLandlordEmail] = useState('');
  const [propertyAddress, setPropertyAddress] = useState('');
  const [landlordName, setLandlordName] = useState('');
  const [portfolioUnits, setPortfolioUnits] = useState('');
  const [interestFeature, setInterestFeature] = useState('Full written reviews & regional benchmarks');
  const [submitted, setSubmitted] = useState(false);
  const [mobileTier, setMobileTier] = useState<'free' | 'paid'>('free');

  const renderStars = (rating: number, sizeClass = 'w-3.5 h-3.5') => {
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

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (landlordEmail) {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#092345]">
      {/* Hero Section */}
      <section className="pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-[#98D6D6]/40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div
              className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#18738B] mb-3 flex items-center gap-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span>Kasakiko for Landlords</span>
              <span className="text-[#98D6D6]">·</span>
              <span className="text-[#293C54]/70 font-normal">Account & Claim Portal</span>
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#092345] tracking-tight mb-5 text-balance"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.02em' }}
            >
              Good landlords deserve to stand out.
            </h1>

            <p className="text-base sm:text-lg text-[#293C54] leading-relaxed mb-6 font-normal">
              Every landlord on Kasakiko already has a profile and a <strong>Kasakiko score</strong> built from verified tenant reviews, whether or not you ever sign up. Claiming a profile is completely optional and flat-rate. It never controls whether reviews exist or are visible, and you can never pay to hide or alter an authentic review.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F5F4] border border-[#98D6D6] text-xs font-medium text-[#18738B] mb-8">
              <KasakikoHouseIcon size={14} color="teal" />
              <span>Independent review integrity: Reviews are never for sale.</span>
            </div>

            <div>
              <button
                type="button"
                onClick={() => {
                  setShowWaitlistModal(true);
                }}
                className="px-6 py-2.5 text-xs sm:text-sm font-semibold text-[#092345] bg-[#2EABBA] hover:bg-[#18738B] hover:text-white rounded-xl transition-colors cursor-pointer shrink-0 text-center"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Sign Up for Waitlist
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Two Tiers Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#092345] tracking-tight mb-3"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Kasakiko Landlord Tiers
            </h2>
            <p className="text-sm sm:text-base text-[#293C54] leading-relaxed">
              Simple, transparent pricing. No per-unit penalties, no enterprise tiers. Just straightforward access to feedback.
            </p>
          </div>

          {/* Mobile Segmented Toggle (Visible only on < lg screens) */}
          <div className="lg:hidden flex justify-center mb-6">
            <div className="inline-flex items-center p-1 bg-[#F0F7F7] border border-[#98D6D6]/60 rounded-full shadow-2xs">
              <button
                type="button"
                onClick={() => setMobileTier('free')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  mobileTier === 'free'
                    ? 'bg-[#092345] text-white shadow-xs'
                    : 'text-[#293C54] hover:text-[#092345]'
                }`}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Free ($0)
              </button>
              <button
                type="button"
                onClick={() => setMobileTier('paid')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  mobileTier === 'paid'
                    ? 'bg-[#092345] text-white shadow-xs'
                    : 'text-[#293C54] hover:text-[#092345]'
                }`}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Paid ($5.99)
              </button>
            </div>
          </div>

          {/* Landlord Tiers: Cards View (Responsive: selected card on mobile, side-by-side on desktop) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
            {/* TIER 1: FREE */}
            <div className={`bg-white rounded-3xl p-6 sm:p-10 border border-[#98D6D6]/50 shadow-soft flex-col justify-between ${
              mobileTier === 'free' ? 'flex' : 'hidden lg:flex'
            }`}>
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span
                      className="text-xs font-semibold uppercase tracking-wider text-[#18738B] block mb-1"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      Default Tier
                    </span>
                    <h3
                      className="text-2xl font-bold text-[#092345]"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      FREE
                    </h3>
                  </div>
                  <div className="px-3 py-1 bg-stone-100 rounded-full text-xs font-medium text-[#293C54]">
                    No account or claim needed
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-[#092345]">$0</span>
                    <span className="text-sm text-[#293C54]/70">/ forever</span>
                  </div>
                  <p className="text-xs text-[#293C54]/80 mt-1">
                    Publicly available for all property owners across Kasakiko.
                  </p>
                </div>

                <div className="border-t border-stone-100 pt-6 space-y-3.5 mb-8">
                  <div className="flex items-start gap-3 text-sm text-[#293C54]">
                    <div className="w-5 h-5 rounded-full bg-[#E8F5F4] flex items-center justify-center text-[#18738B] shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>
                      <strong>Overall Kasakiko score:</strong> View your public aggregated star score (1.0–5.0) calculated from verified tenant responses.
                    </span>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-[#293C54]">
                    <div className="w-5 h-5 rounded-full bg-[#E8F5F4] flex items-center justify-center text-[#18738B] shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>
                      <strong>Property ratings:</strong> High-level scores for maintenance speed, deposit return timing, and communication.
                    </span>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-[#293C54]">
                    <div className="w-5 h-5 rounded-full bg-[#E8F5F4] flex items-center justify-center text-[#18738B] shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>
                      <strong>Written property-level reviews:</strong> Public comments regarding the physical building and amenities (separate from landlord reviews).
                    </span>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-[#293C54]">
                    <div className="w-5 h-5 rounded-full bg-[#E8F5F4] flex items-center justify-center text-[#18738B] shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>
                      Everything on the public profile except the written landlord comments.
                    </span>
                  </div>
                </div>
              </div>


            </div>

            {/* TIER 2: PAID ($5.99/mo) */}
            <div className={`bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#2EABBA] shadow-card flex-col justify-between relative ${
              mobileTier === 'paid' ? 'flex' : 'hidden lg:flex'
            }`}>
              <div className="absolute -top-3.5 right-8 bg-[#092345] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </div>

              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span
                      className="text-xs font-semibold uppercase tracking-wider text-[#18738B] block mb-1"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      Claimed & Verified
                    </span>
                    <h3
                      className="text-2xl font-bold text-[#092345]"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      PAID
                    </h3>
                  </div>
                  <div className="px-3 py-1 bg-[#E8F5F4] rounded-full text-xs font-medium text-[#18738B]">
                    Flat rate · Unlimited units
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl font-bold text-[#092345]">$5.99</span>
                    <span className="text-sm font-medium text-[#293C54]">/ month</span>
                  </div>
                  <p className="text-xs text-[#18738B] font-medium mt-1">
                    Less than a cup of coffee a month. Cancel anytime.
                  </p>
                </div>

                <div className="border-t border-stone-100 pt-6 space-y-3.5 mb-8">
                  <p className="text-xs font-semibold text-[#092345] uppercase tracking-wide">
                    Includes everything in Free, plus:
                  </p>

                  <div className="flex items-start gap-3 text-sm text-[#293C54]">
                    <div className="w-5 h-5 rounded-full bg-[#2EABBA]/20 flex items-center justify-center text-[#092345] shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>
                      <strong>Read all written landlord reviews:</strong> Read full tenant comments on your own profile and on every other landlord's profile to learn best practices and see where you stand in your area.
                    </span>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-[#293C54]">
                    <div className="w-5 h-5 rounded-full bg-[#2EABBA]/20 flex items-center justify-center text-[#092345] shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>
                      <strong>Full Dashboard:</strong> Granular metrics and survey breakdowns from every question in the tenant review survey.
                    </span>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-[#293C54]">
                    <div className="w-5 h-5 rounded-full bg-[#2EABBA]/20 flex items-center justify-center text-[#092345] shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>
                      <strong>Claim Profile & Verified Landlord badge:</strong> Awarded once you claim your profile and upload a property utility bill verifying ownership.
                    </span>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-[#293C54]">
                    <div className="w-5 h-5 rounded-full bg-[#2EABBA]/20 flex items-center justify-center text-[#092345] shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>
                      <strong>Reply publicly to reviews:</strong> Add civil context, document completed repairs, or post updates beneath any review.
                    </span>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-[#293C54]">
                    <div className="w-5 h-5 rounded-full bg-[#2EABBA]/20 flex items-center justify-center text-[#092345] shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>
                      <strong>Dispute reviews with fair arbitration:</strong> Flag inaccurate claims. The review is hidden with an <em>"Under review"</em> status while open, and automatically reappears after 14 days if supporting dispute evidence isn't provided.
                    </span>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-[#293C54]">
                    <div className="w-5 h-5 rounded-full bg-[#2EABBA]/20 flex items-center justify-center text-[#092345] shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>
                      <strong>Pin a review:</strong> Feature one positive or representative review at the top of your profile, always labeled <em>"Pinned review"</em>.
                    </span>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-[#293C54]">
                    <div className="w-5 h-5 rounded-full bg-[#2EABBA]/20 flex items-center justify-center text-[#092345] shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>
                      <strong>Link open listings:</strong> Connect your current vacancies directly on your Kasakiko profile.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => setShowWaitlistModal(true)}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#2EABBA] hover:bg-[#18738B] hover:text-white text-xs sm:text-sm font-semibold text-[#092345] transition-all cursor-pointer shadow-xs text-center"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Sign Up for Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Mockup: Free Profile View with Blurred Locked Comments */}
      <section className="py-12 lg:py-20 bg-white border-t border-[#98D6D6]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span
              className="text-xs font-semibold uppercase tracking-wider text-[#18738B] block mb-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Profile Preview & Unlock Experience
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#092345] tracking-tight mb-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              How locked landlord reviews appear on your profile
            </h2>
            <p className="text-sm text-[#293C54] leading-relaxed">
              Every landlord can view their aggregate scores and building reviews for free. Written landlord feedback is blurred until unlocked with the $5.99/mo subscription.
            </p>
          </div>

          {/* Profile Card Mockup */}
          <div className="bg-[#FAF8F5] rounded-3xl border border-[#98D6D6]/60 p-4 sm:p-8 shadow-soft max-w-4xl mx-auto">
            {/* Header of Profile */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-stone-200 gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <h3
                    className="text-lg sm:text-2xl font-bold text-[#092345]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Pacific Heights Properties LLC
                  </h3>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E8F5F4] text-[#18738B] text-xs font-semibold border border-[#98D6D6]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Landlord
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#293C54]">
                  Managing 18 units across 3 properties · 9 verified reviews
                </p>
              </div>

              <div className="flex items-center justify-between sm:flex-col sm:justify-center text-center shrink-0 bg-[#E8F5F4]/70 px-4 py-2.5 rounded-2xl border border-[#98D6D6] shadow-xs">
                <div
                  className="text-2xl font-extrabold text-[#18738B] leading-none tracking-tight sm:mb-1"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  4.4
                </div>
                <div className="flex flex-col items-end sm:items-center">
                  {renderStars(4.4)}
                  <span
                    className="text-[10px] text-[#293C54] mt-1 font-semibold uppercase tracking-wider leading-none"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Kasakiko score
                  </span>
                </div>
              </div>
            </div>

            {/* Landlord-Level Summary Stats (Free & Public) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 py-5 border-b border-stone-200 text-center">
              <div className="bg-white p-3 sm:p-3.5 rounded-2xl border border-stone-200 shadow-2xs">
                <span className="text-[11px] text-[#293C54]/70 block uppercase font-bold tracking-wider">
                  Deposit Return Rate
                </span>
                <span className="text-base sm:text-lg font-bold text-[#092345]">100% on-time</span>
                <span className="text-xs text-[#18738B] block mt-0.5">Avg 12 calendar days</span>
              </div>

              <div className="bg-white p-3 sm:p-3.5 rounded-2xl border border-stone-200 shadow-2xs">
                <span className="text-[11px] text-[#293C54]/70 block uppercase font-bold tracking-wider">
                  Repair Response Time
                </span>
                <span className="text-base sm:text-lg font-bold text-[#092345]">Avg 12 hours</span>
                <span className="text-xs text-[#18738B] block mt-0.5">Urgent plumbing & heating</span>
              </div>

              <div className="bg-white p-3 sm:p-3.5 rounded-2xl border border-stone-200 shadow-2xs">
                <span className="text-[11px] text-[#293C54]/70 block uppercase font-bold tracking-wider">
                  Rent Board Compliance
                </span>
                <span className="text-base sm:text-lg font-bold text-[#092345]">100% Verified</span>
                <span className="text-xs text-[#18738B] block mt-0.5">0 unjustified increases</span>
              </div>
            </div>

            {/* Pinned Review Example */}
            <div className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Pin className="w-3.5 h-3.5 text-[#18738B]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#092345]">
                    Pinned Review Example
                  </span>
                </div>
                <span className="text-xs text-[#18738B] font-medium hidden sm:inline">Featured by Landlord · Fully Visible to Everyone</span>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-stone-200 shadow-xs space-y-4 sm:space-y-5">
                {/* Review Header: Verified badge + Date + Address */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3.5 border-b border-stone-100">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E8F5F4] text-[#18738B] text-xs font-semibold border border-[#98D6D6]">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified tenant
                    </span>
                    <span className="text-xs text-[#293C54]/70">5/02/2026</span>
                  </div>
                  <span className="text-xs font-semibold text-[#092345]">
                    2140 Pine St #3, San Francisco, CA
                  </span>
                </div>

                {/* Dual Star Ratings */}
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="bg-[#FAF8F5] p-3 rounded-xl border border-stone-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#18738B] block mb-0.5">
                      Property Score
                    </span>
                    <div className="text-base font-extrabold text-[#092345]">4.0</div>
                    {renderStars(4.0, 'w-3 h-3')}
                  </div>
                  <div className="bg-[#FAF8F5] p-3 rounded-xl border border-stone-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#18738B] block mb-0.5">
                      Landlord Score
                    </span>
                    <div className="text-base font-extrabold text-[#18738B]">4.4</div>
                    {renderStars(4.4, 'w-3 h-3')}
                  </div>
                </div>

                {/* FULLY VISIBLE: Property comment & sub-ratings */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#18738B] block mb-1.5">
                    Property Comment (Fully Visible)
                  </span>
                  <p className="text-xs sm:text-sm text-[#092345] bg-[#FAF8F5] p-3.5 sm:p-4 rounded-xl border border-stone-200 italic leading-relaxed">
                    "The lobby and trash sorting area at 2140 Pine St are always clean. The building steam heating was inspected on time before winter. Convenient location for walking to Polk Street amenities and public transit lines."
                  </p>
                </div>

                {/* Sub-ratings & Tenancy info */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-[#293C54]">
                  <div className="bg-[#FAF8F5] p-2.5 rounded-lg border border-stone-100">
                    <span className="text-[#293C54]/70 block text-xs uppercase font-semibold">Tenancy</span>
                    <span className="font-bold text-[#092345] text-xs sm:text-sm">2 years</span>
                  </div>
                  <div className="bg-[#FAF8F5] p-2.5 rounded-lg border border-stone-100">
                    <span className="text-[#293C54]/70 block text-xs uppercase font-semibold">Rent Range</span>
                    <span className="font-bold text-[#092345] text-xs sm:text-sm">$3,200 – $3,600</span>
                  </div>
                  <div className="bg-[#FAF8F5] p-2.5 rounded-lg border border-stone-100">
                    <span className="text-[#293C54]/70 block text-xs uppercase font-semibold">Utilities included</span>
                    <span className="font-bold text-[#092345] text-xs sm:text-sm">No</span>
                  </div>
                  <div className="bg-[#FAF8F5] p-2.5 rounded-lg border border-stone-100">
                    <span className="text-[#293C54]/70 block text-xs uppercase font-semibold">Would Rent Again</span>
                    <span className="font-bold text-emerald-700 text-xs sm:text-sm">Yes</span>
                  </div>
                </div>

                {/* FULLY VISIBLE: Landlord quantitative data */}
                <div className="pt-2 border-t border-stone-100 space-y-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-medium text-[#293C54] mr-1">Positive traits:</span>
                    {['Quick repairs', 'Clear communication', 'Fair and reasonable'].map((trait) => (
                      <span
                        key={trait}
                        className="px-2.5 py-0.5 rounded-full bg-[#E8F5F4] text-[#18738B] text-xs font-medium border border-[#98D6D6]"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-[#293C54]">
                    <div>Deposit: <strong className="text-[#092345]">100% in 12 days</strong></div>
                    <div>Rent increase: <strong className="text-[#092345]">No</strong></div>
                    <div>Payment: <strong className="text-[#092345]">Online portal</strong></div>
                  </div>
                </div>

                {/* FULLY VISIBLE & UNLOCKED: Written Landlord Comment for Pinned Review */}
                <div className="pt-4 border-t border-stone-100">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#18738B] block">
                      Landlord Written Comment (Unlocked & Visible to Everyone)
                    </span>
                    <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      Pinned by Landlord
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#092345] bg-[#FAF8F5] p-4 rounded-xl border border-stone-200 italic leading-relaxed">
                    "Whenever we had a leak or heating request, the property manager responded within 3 hours. Always very civil about rent adjustments and gave 48 hours notice before any vendor arrived. The move-in checklist was extremely detailed, and our security deposit was returned in full within 12 days with an itemized statement. Would definitely rent from this management again if staying in the area."
                  </p>

                  <div className="pt-3 text-xs text-[#293C54] flex items-center justify-between">
                    <span>Pinned reviews are featured directly on your public profile and are visible in full to all tenants and visitors, including the written landlord response.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fairness & Dispute Guarantee */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#98D6D6]/50 shadow-soft max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F5F4] border border-[#98D6D6] flex items-center justify-center text-[#18738B] shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3
                  className="text-xl sm:text-2xl font-bold text-[#092345]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Our 14-Day Dispute Resolution Policy
                </h3>
                <p className="text-xs sm:text-sm text-[#293C54] mt-1">
                  How we protect both landlords and tenants with transparent standards.
                </p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#293C54] leading-relaxed">
              <p>
                As a claimed landlord, you can flag any review claim that you believe contains inaccurate factual statements (e.g. dispute over maintenance log or lease dates).
              </p>
              <div className="bg-[#E8F5F4]/60 p-4 rounded-xl border border-[#98D6D6]/50 space-y-2">
                <div className="font-semibold text-[#092345] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#18738B]" />
                  <span>The 14-Day Review Protocol:</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#293C54]">
                  <li>The review is immediately hidden from public view and marked <strong>"Under review"</strong>.</li>
                  <li>Our compliance team requests documentation (contract, work orders, deposit receipts).</li>
                  <li><strong>Automatic reappearance:</strong> If the dispute is not backed up with evidence within 14 days, the review automatically reappears on your profile.</li>
                  <li>Kasakiko never allows paying to permanently remove or edit legitimate reviews.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Landlord Waitlist Modal */}
      {showWaitlistModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#092345]/50 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#98D6D6] shadow-xl relative my-8 animate-in fade-in zoom-in-95 duration-200">
            <button
              type="button"
              onClick={() => {
                setShowWaitlistModal(false);
                setSubmitted(false);
              }}
              className="absolute top-5 right-5 text-stone-400 hover:text-stone-700 p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <form onSubmit={handleWaitlistSubmit}>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-[#E8F5F4] flex items-center justify-center text-[#18738B]">
                    <KasakikoHouseIcon size={18} color="teal" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#18738B] uppercase tracking-wider block">
                      Early Access Waitlist
                    </span>
                    <h3
                      className="text-xl font-bold text-[#092345]"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      Join the Landlord Platform Waitlist
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-[#293C54] mb-6 leading-relaxed">
                  Profile claiming and verified landlord tools are launching soon. Sign up with your details to receive priority access and be notified the moment claiming goes live.
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-xs font-semibold text-[#092345] uppercase tracking-wider mb-1">
                      Landlord or Entity Name
                    </label>
                    <input
                      type="text"
                      required
                      value={landlordName}
                      onChange={(e) => setLandlordName(e.target.value)}
                      placeholder="e.g. Maria Chen or Bayfront Management"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-stone-200 focus:outline-none focus:border-[#2EABBA] bg-[#FAF8F5]/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#092345] uppercase tracking-wider mb-1">
                      Business or Contact Email
                    </label>
                    <input
                      type="email"
                      required
                      value={landlordEmail}
                      onChange={(e) => setLandlordEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-stone-200 focus:outline-none focus:border-[#2EABBA] bg-[#FAF8F5]/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#092345] uppercase tracking-wider mb-1">
                      Primary Property Address or Portfolio
                    </label>
                    <input
                      type="text"
                      value={propertyAddress}
                      onChange={(e) => setPropertyAddress(e.target.value)}
                      placeholder="e.g. 1420 Valencia St or Mission District portfolio"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-stone-200 focus:outline-none focus:border-[#2EABBA] bg-[#FAF8F5]/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#092345] uppercase tracking-wider mb-1">
                      Feature of Greatest Interest
                    </label>
                    <select
                      value={interestFeature}
                      onChange={(e) => setInterestFeature(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-stone-200 focus:outline-none focus:border-[#2EABBA] bg-[#FAF8F5]/50 cursor-pointer"
                    >
                      <option value="Full written reviews & regional benchmarks">Full written reviews & regional benchmarks</option>
                      <option value="Claim profile & Verified Landlord badge">Claim profile & Verified Landlord badge</option>
                      <option value="Dispute resolution & review mediation">Dispute resolution & review mediation</option>
                      <option value="All of the above">All of the above</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#092345] uppercase tracking-wider mb-1">
                      Portfolio Size
                    </label>
                    <select
                      value={portfolioUnits}
                      onChange={(e) => setPortfolioUnits(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-stone-200 focus:outline-none focus:border-[#2EABBA] bg-[#FAF8F5]/50 cursor-pointer"
                    >
                      <option value="">Select unit count (optional)</option>
                      <option value="1 - 4 units">1 – 4 units (Individual landlord)</option>
                      <option value="5 - 19 units">5 – 19 units (Mid-size owner)</option>
                      <option value="20+ units">20+ units (Commercial / Multi-building)</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 text-xs sm:text-sm font-semibold text-[#092345] bg-[#2EABBA] hover:bg-[#18738B] hover:text-white rounded-xl transition-colors cursor-pointer text-center"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Sign Up for Waitlist
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3
                  className="text-xl font-bold text-[#092345] mb-2"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  You're on the Landlord Waitlist!
                </h3>
                <p className="text-xs sm:text-sm text-[#293C54] mb-6 leading-relaxed">
                  Thank you for your interest in Kasakiko. We've added your details to our early access roster. We will email you at <strong>{landlordEmail}</strong> as soon as profile claiming and verified landlord features launch.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setShowWaitlistModal(false);
                    setSubmitted(false);
                  }}
                  className="px-6 py-2.5 text-xs sm:text-sm font-semibold text-[#092345] bg-[#2EABBA] hover:bg-[#18738B] hover:text-white rounded-full transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
