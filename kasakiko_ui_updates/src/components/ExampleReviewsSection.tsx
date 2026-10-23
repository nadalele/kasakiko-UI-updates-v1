import React, { useState } from 'react';
import { Star, ShieldCheck, ArrowLeft, AlertCircle } from 'lucide-react';
import { MOCK_EXAMPLE_REVIEWS, ExampleReview } from '../data/mockData';
import { ReviewPreviewDrawer } from './ReviewPreviewDrawer';
import { KasakikoHouseIcon } from './KasakikoHouseIcon';

interface ExampleReviewsSectionProps {
  onWriteReviewClick: () => void;
  onBackToHome?: () => void;
  isDedicatedTab?: boolean;
}

export const ExampleReviewsSection: React.FC<ExampleReviewsSectionProps> = ({
  onWriteReviewClick,
  onBackToHome,
  isDedicatedTab = false,
}) => {
  const [selectedReview, setSelectedReview] = useState<ExampleReview | null>(null);

  // Helper to render stars with standardized styling
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

  return (
    <section id="example-reviews" className={`py-12 sm:py-16 lg:py-20 relative ${isDedicatedTab ? 'min-h-[80vh]' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dedicated Tab Header Breadcrumb */}
        {isDedicatedTab && onBackToHome && (
          <div className="mb-8 border-b border-[#98D6D6]/40 pb-4">
            <button
              type="button"
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#18738B] hover:text-[#092345] transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
              <span>Return to Home</span>
            </button>
          </div>
        )}

        {/* Section Header with Clear Mock Data Label */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F5F4] border border-[#98D6D6] text-xs font-semibold text-[#18738B] mb-3 shadow-2xs">
            <KasakikoHouseIcon size={13} color="teal" />
            <span>Mock Example Data</span>
            <span className="text-[#293C54]/60">· Fictional profiles for demonstration</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#092345] tracking-tight mb-4 text-balance"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.02em' }}
          >
            Example Reviews
          </h2>
          <p className="text-[#293C54] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Each card below is one example tenant’s full review, not an average or a summary, and it shows their answer to every question in our form (real reviewers can skip questions, so some reviews will have gaps). In the real product, the landlord comment stays locked until you pass the give-to-get gate, and we’ve left it open here so you can see a complete review. Verified reviews count toward a landlord’s score; unverified reviews don’t, but they still help future renters.
          </p>
        </div>

        {/* 3 Compact Sample Preview Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {MOCK_EXAMPLE_REVIEWS.map((review) => (
            <div
              key={review.id}
              className={`bg-white rounded-3xl p-6 shadow-card border flex flex-col justify-between ${
                review.isVerifiedTenant ? 'border-[#98D6D6]/50' : 'border-amber-300/80 ring-1 ring-amber-200/50'
              }`}
            >
              <div>
                {/* Header: Verified / Unverified badge, date */}
                <div className="flex items-center justify-between pb-3 border-b border-stone-100 mb-3 text-xs">
                  <div className="flex items-center gap-1.5">
                    {review.isVerifiedTenant ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E8F5F4] border border-[#98D6D6] text-[11px] font-semibold text-[#18738B]">
                        <ShieldCheck className="w-3 h-3 text-[#2EABBA]" />
                        Verified tenant
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-[11px] font-semibold text-amber-800">
                        <AlertCircle className="w-3 h-3 text-amber-600" />
                        Unverified review
                      </span>
                    )}
                    <span className="text-[11px] text-[#293C54]/70">{review.reviewDate}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h3
                    className="text-base font-bold text-[#092345] leading-snug"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {review.landlordName}
                  </h3>
                  <p className="text-xs text-[#18738B] mt-0.5 font-medium">
                    {review.propertyAddress}
                  </p>
                </div>

                {/* 1. Property score and landlord score together in one row at the top (both star ratings, each clearly labeled) */}
                <div className="grid grid-cols-2 gap-2.5 mb-5 p-3 rounded-2xl bg-[#FAF8F5] border border-[#98D6D6]/60">
                  <div className="flex flex-col items-center justify-center text-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#18738B] mb-0.5">
                      Property Score
                    </span>
                    <div
                      className="text-lg font-extrabold text-[#092345] leading-none mb-1"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {review.propertyStarRating.toFixed(1)}
                    </div>
                    {renderStars(review.propertyStarRating, 'w-3 h-3')}
                    <span className="mt-1 text-[9px] font-semibold px-1.5 py-0.5 leading-tight invisible select-none" aria-hidden="true">
                      Spacer
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center text-center border-l border-stone-200 pl-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#18738B] mb-0.5">
                      Landlord Score
                    </span>
                    <div
                      className="text-lg font-extrabold text-[#18738B] leading-none mb-1"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {review.landlordStarRating.toFixed(1)}
                    </div>
                    {renderStars(review.landlordStarRating, 'w-3 h-3')}
                    <span
                      className={`mt-1 text-[9px] font-semibold px-1.5 py-0.5 rounded text-center leading-tight ${
                        !review.isVerifiedTenant
                          ? 'text-amber-800 bg-amber-100/90'
                          : 'invisible select-none'
                      }`}
                      aria-hidden={review.isVerifiedTenant}
                    >
                      Excluded from score
                    </span>
                  </div>
                </div>

                {/* 2. Would rent again & 3. Rent payment type */}
                <div className="space-y-2 mb-4 text-xs text-[#293C54] pb-3 border-b border-stone-100">
                  <div className="flex items-center justify-between">
                    <span className="text-[#293C54]/75">Would rent again:</span>
                    <span className={`font-bold ${review.wouldRentAgain ? 'text-emerald-700' : 'text-amber-800'}`}>
                      {review.wouldRentAgain ? 'Yes' : 'No'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#293C54]/75">Rent payment type:</span>
                    <span className="font-semibold text-[#092345]">{review.rentPaymentMethod}</span>
                  </div>
                </div>

                {/* Sub-ratings: Location, Heat, Water pressure, Appliances, Pest control */}
                <div className="bg-[#FAF8F5] p-3 rounded-2xl border border-stone-100 mb-5 text-xs space-y-1.5">
                  <div className="flex items-center justify-between text-[#293C54]">
                    <span>Location rating:</span>
                    <span className="font-semibold text-[#092345]">
                      {review.propertySubRatings.location?.toFixed(1)} ★
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[#293C54]">
                    <span>Heat rating:</span>
                    <span className="font-semibold text-[#092345]">
                      {review.propertySubRatings.heat?.toFixed(1)} ★
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[#293C54]">
                    <span>Water pressure rating:</span>
                    <span className="font-semibold text-[#092345]">
                      {review.propertySubRatings.waterPressure?.toFixed(1)} ★
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[#293C54]">
                    <span>Appliances rating:</span>
                    <span className="font-semibold text-[#092345]">
                      {review.propertySubRatings.appliances?.toFixed(1)} ★
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[#293C54]">
                    <span>Pest control rating:</span>
                    <span className="font-semibold text-[#092345]">
                      {review.propertySubRatings.pestControl?.toFixed(1)} ★
                    </span>
                  </div>
                </div>
              </div>

              {/* Single button per card labeled "Read more" with unverified notice right above it */}
              <div className="pt-2 mt-auto">
                {!review.isVerifiedTenant && (
                  <div className="mb-2.5 px-3 py-1.5 rounded-xl bg-amber-50/90 border border-amber-200 text-[11px] text-amber-900 flex items-center gap-1.5 font-medium">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Unverified review · Does not count towards Kasakiko landlord score</span>
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedReview(review)}
                  className="w-full py-2.5 px-4 text-xs sm:text-sm font-semibold text-[#092345] bg-[#2EABBA] hover:bg-[#18738B] hover:text-white rounded-xl transition-all cursor-pointer text-center shadow-xs"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Call to Action */}
        <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-10 border border-[#98D6D6] max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-soft">
          <div>
            <h3
              className="text-xl sm:text-2xl font-bold text-[#092345] mb-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Have a lease in San Francisco?
            </h3>
            <p className="text-xs sm:text-sm text-[#293C54] max-w-lg leading-relaxed">
              Help future tenants know what to expect. Share your property experience and landlord practices anonymously with proof of tenancy.
            </p>
          </div>
          <button
            type="button"
            onClick={onWriteReviewClick}
            className="px-6 py-3 text-xs sm:text-sm font-semibold text-[#092345] bg-[#2EABBA] hover:bg-[#18738B] hover:text-white rounded-full transition-colors cursor-pointer shadow-xs shrink-0 whitespace-nowrap"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Write a review
          </button>
        </div>
      </div>

      {/* Slide-out Full Review Preview */}
      <ReviewPreviewDrawer
        review={selectedReview}
        onClose={() => setSelectedReview(null)}
      />
    </section>
  );
};
