import React from 'react';
import { X, Star, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { ExampleReview } from '../data/mockData';
import { KasakikoHouseIcon } from './KasakikoHouseIcon';

interface ReviewPreviewDrawerProps {
  review: ExampleReview | null;
  onClose: () => void;
}

export const ReviewPreviewDrawer: React.FC<ReviewPreviewDrawerProps> = ({
  review,
  onClose,
}) => {
  if (!review) return null;

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
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-[#092345]/50 backdrop-blur-xs flex justify-end animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white w-full sm:max-w-xl h-full shadow-2xl overflow-y-auto flex flex-col justify-between p-4 sm:p-8 animate-in slide-in-from-bottom sm:slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header above both sections: Sticky with Verified/Unverified badge, date, address, and prominent close button */}
          <div className="sticky top-0 bg-white z-20 pb-4 border-b border-[#98D6D6]/40 mb-6 pt-1">
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {review.isVerifiedTenant ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E8F5F4] border border-[#98D6D6] text-xs font-semibold text-[#18738B]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#2EABBA]" />
                    Verified tenant
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-800">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                    Unverified review
                  </span>
                )}
                <span className="text-xs text-[#293C54]/70">{review.reviewDate}</span>
                <span className="text-[10px] uppercase font-bold text-stone-400 bg-stone-100 px-2 py-0.5 rounded">
                  Mock Example
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full text-[#092345] bg-stone-100 hover:bg-[#E8F5F4] transition-colors cursor-pointer shrink-0"
                aria-label="Close review modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h2
              className="text-lg sm:text-2xl font-bold text-[#092345]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {review.propertyAddress}
            </h2>
            <p className="text-xs sm:text-sm text-[#18738B] font-medium mt-0.5">
              Landlord: {review.landlordName}
            </p>
          </div>

          {/* Unverified Review Warning Banner */}
          {!review.isVerifiedTenant && (
            <div className="mb-6 p-4 rounded-2xl bg-amber-50/90 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <span className="font-bold block">Unverified Tenant Submission</span>
                <p className="leading-relaxed">
                  This review has not been verified with proof of tenancy (lease or utility bill). Per Kasakiko policy, unverified reviews are visible for community transparency, but <strong>do not count towards Kasakiko landlord scores</strong>.
                </p>
              </div>
            </div>
          )}

          {/* SECTION 1: PROPERTY SECTION */}
          <div className="mb-8 p-5 sm:p-6 bg-[#FAF8F5] rounded-3xl border border-[#98D6D6]/60 shadow-2xs">
            {/* Property Star Rating sits at the top of the Property section */}
            <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#18738B] block">
                  Property Section
                </span>
                <h3
                  className="text-base font-bold text-[#092345]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Condition & Living Space
                </h3>
              </div>

              {/* Property score visual: score number above stars */}
              <div className="flex flex-col items-center justify-center text-center bg-white px-3.5 py-2 rounded-2xl border border-[#98D6D6] shadow-xs">
                <div
                  className="text-xl font-extrabold text-[#092345] leading-none mb-0.5"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {review.propertyStarRating.toFixed(1)}
                </div>
                {renderStars(review.propertyStarRating, 'w-3 h-3')}
                <span className="text-[9px] uppercase font-bold text-[#18738B] tracking-wider mt-1">
                  Property Score
                </span>
              </div>
            </div>

            {/* Property Sub-Ratings */}
            {review.propertySubRatings && (
              <div className="mb-4 bg-white p-3.5 rounded-xl border border-stone-200">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#293C54]/80 block mb-2">
                  Detailed Part Ratings
                </span>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-[#293C54]">
                  {review.propertySubRatings.location && (
                    <div className="flex items-center justify-between">
                      <span>Location</span>
                      <span className="font-semibold text-[#092345]">{review.propertySubRatings.location.toFixed(1)} ★</span>
                    </div>
                  )}
                  {review.propertySubRatings.heat && (
                    <div className="flex items-center justify-between">
                      <span>Heat</span>
                      <span className="font-semibold text-[#092345]">{review.propertySubRatings.heat.toFixed(1)} ★</span>
                    </div>
                  )}
                  {review.propertySubRatings.waterPressure && (
                    <div className="flex items-center justify-between">
                      <span>Water pressure</span>
                      <span className="font-semibold text-[#092345]">{review.propertySubRatings.waterPressure.toFixed(1)} ★</span>
                    </div>
                  )}
                  {review.propertySubRatings.appliances && (
                    <div className="flex items-center justify-between">
                      <span>Appliances</span>
                      <span className="font-semibold text-[#092345]">{review.propertySubRatings.appliances.toFixed(1)} ★</span>
                    </div>
                  )}
                  {review.propertySubRatings.pestControl && (
                    <div className="flex items-center justify-between">
                      <span>Pest control</span>
                      <span className="font-semibold text-[#092345]">{review.propertySubRatings.pestControl.toFixed(1)} ★</span>
                    </div>
                  )}
                  {review.propertySubRatings.overallValue && (
                    <div className="flex items-center justify-between">
                      <span>Overall value</span>
                      <span className="font-semibold text-[#092345]">{review.propertySubRatings.overallValue.toFixed(1)} ★</span>
                    </div>
                  )}
                  {review.propertySubRatings.propertyCondition && (
                    <div className="flex items-center justify-between">
                      <span>Condition</span>
                      <span className="font-semibold text-[#092345]">{review.propertySubRatings.propertyCondition.toFixed(1)} ★</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Property Written Comment */}
            <div className="mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#18738B] block mb-1">
                Property Comment
              </span>
              <p className="text-xs sm:text-sm text-[#092345] leading-relaxed bg-white p-3.5 rounded-xl border border-stone-200 italic">
                "{review.propertyComment}"
              </p>
            </div>

            {/* Tenancy length, Rent paid range, Utilities included */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="bg-white p-2.5 rounded-xl border border-stone-200">
                <span className="text-[#293C54]/70 block text-[10px] uppercase font-semibold">Tenancy Length</span>
                <span className="font-bold text-[#092345]">{review.tenancyLength}</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-stone-200">
                <span className="text-[#293C54]/70 block text-[10px] uppercase font-semibold">Rent Paid (Range)</span>
                <span className="font-bold text-[#092345]">{review.rentPaidRange}</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-stone-200">
                <span className="text-[#293C54]/70 block text-[10px] uppercase font-semibold">Utilities Included</span>
                <span className="font-bold text-[#092345]">{review.utilitiesIncluded ? 'Yes' : 'No'}</span>
              </div>
            </div>
          </div>

          {/* SECTION 2: LANDLORD SECTION */}
          <div className="mb-6 p-5 sm:p-6 bg-[#FAF8F5] rounded-3xl border border-[#98D6D6]/60 shadow-2xs">
            {/* Landlord Star Rating sits at the top of the Landlord section */}
            <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#18738B] block">
                  Landlord Section
                </span>
                <h3
                  className="text-base font-bold text-[#092345]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Management & Practices
                </h3>
              </div>

              {/* Landlord score visual: score number above stars */}
              <div className="flex flex-col items-center justify-center text-center bg-white px-3.5 py-2 rounded-2xl border border-[#98D6D6] shadow-xs">
                <div
                  className="text-xl font-extrabold text-[#18738B] leading-none mb-0.5"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {review.landlordStarRating.toFixed(1)}
                </div>
                {renderStars(review.landlordStarRating, 'w-3 h-3')}
                <span className="text-[9px] uppercase font-bold text-[#18738B] tracking-wider mt-1">
                  Landlord Score
                </span>
                {!review.isVerifiedTenant && (
                  <span className="mt-1 text-[9px] font-semibold text-amber-800 bg-amber-100/90 px-1.5 py-0.5 rounded leading-tight text-center">
                    Excluded from aggregate score
                  </span>
                )}
              </div>
            </div>

            {/* Tags: What was good about this landlord */}
            {review.goodTags && review.goodTags.length > 0 && (
              <div className="mb-4">
                <span className="text-[11px] font-semibold text-[#293C54] block mb-1.5">
                  What was good about this landlord:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {review.goodTags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#E8F5F4] text-[#18738B] text-xs font-medium border border-[#98D6D6]"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#2EABBA]" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Landlord Quantitative Metrics Grid: deposit handling, rent increase, rent payment, would rent again */}
            <div className="grid grid-cols-2 gap-2.5 text-xs mb-4">
              <div className="bg-white p-2.5 rounded-xl border border-stone-200">
                <span className="text-[#293C54]/70 block text-[10px] uppercase font-semibold">Deposit Handling</span>
                <span className="font-bold text-[#092345]">{review.securityDepositHandling}</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-stone-200">
                <span className="text-[#293C54]/70 block text-[10px] uppercase font-semibold">Rent Increase</span>
                <span className="font-bold text-[#092345]">{review.rentIncrease ? 'Yes' : 'No'}</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-stone-200">
                <span className="text-[#293C54]/70 block text-[10px] uppercase font-semibold">How Rent Was Paid</span>
                <span className="font-bold text-[#092345]">{review.rentPaymentMethod}</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-stone-200">
                <span className="text-[#293C54]/70 block text-[10px] uppercase font-semibold">Would Rent Again</span>
                <span className={`font-bold ${review.wouldRentAgain ? 'text-emerald-700' : 'text-amber-800'}`}>
                  {review.wouldRentAgain ? 'Yes' : 'No'}
                </span>
              </div>
            </div>

            {/* Full Written Landlord Comment (Entire comment visible, unblurred and unlocked) */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#18738B] block mb-1">
                Landlord Comment (Full Response)
              </span>
              <p className="text-xs sm:text-sm text-[#092345] leading-relaxed bg-white p-3.5 rounded-xl border border-stone-200 italic">
                "{review.landlordComment}"
              </p>
            </div>
          </div>
        </div>

        {/* Drawer Bottom Footer */}
        <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#293C54]/75 sticky bottom-0 bg-white pb-1">
          <div className="flex items-center gap-1.5">
            <KasakikoHouseIcon size={14} color="teal" />
            <span>Kasakiko Verified Review Standard</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#092345] text-white sm:bg-transparent sm:text-[#18738B] sm:hover:text-[#092345] text-xs font-semibold cursor-pointer text-center transition-colors shadow-xs sm:shadow-none"
          >
            Close Review
          </button>
        </div>
      </div>
    </div>
  );
};
