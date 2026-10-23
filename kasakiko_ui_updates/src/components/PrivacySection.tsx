import React from 'react';
import { DollarSign, Calendar, EyeOff, Lock } from 'lucide-react';

interface PrivacySectionProps {
  onOpenPrivacyModal?: () => void;
}

export const PrivacySection: React.FC<PrivacySectionProps> = ({
  onOpenPrivacyModal,
}) => {
  return (
    <section id="privacy" className="py-16 lg:py-24 relative bg-white/60 border-y border-[#98D6D6]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div
            className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#18738B] mb-2"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Privacy by design
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#092345] tracking-tight mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.02em' }}
          >
            How your anonymity is protected.
          </h2>
          <p className="text-[#293C54] text-base sm:text-lg leading-relaxed">
            Reviews are anonymous for a reason: so you can be honest and give future tenants real advice.
          </p>
        </div>

        {/* 3 Privacy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {/* Card 1: Dollar Sign */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-card border border-[#98D6D6]/40 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#98D6D6]/20 border border-[#98D6D6]/50 flex items-center justify-center text-[#18738B] mb-5">
                <DollarSign className="w-6 h-6" strokeWidth={1.8} />
              </div>
              <h3
                className="text-lg font-bold text-[#092345] mb-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Rent is shown as a range
              </h3>
              <p className="text-sm sm:text-base text-[#293C54] leading-relaxed">
                We never publish your exact rent. Reviews show a range, like $2,200 to $2,999, so a landlord can’t match a review to a specific tenant by their bank statements.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#98D6D6]/20 text-xs font-semibold text-[#18738B]">
              No exact rent shown
            </div>
          </div>

          {/* Card 2: Calendar */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-card border border-[#98D6D6]/40 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#98D6D6]/20 border border-[#98D6D6]/50 flex items-center justify-center text-[#18738B] mb-5">
                <Calendar className="w-6 h-6" strokeWidth={1.8} />
              </div>
              <h3
                className="text-lg font-bold text-[#092345] mb-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                We ask how long, not when
              </h3>
              <p className="text-sm sm:text-base text-[#293C54] leading-relaxed">
                We don’t ask for your move-in or move-out dates. Reviews only show how many years you lived there, so a landlord can’t match a review to a specific lease.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#98D6D6]/20 text-xs font-semibold text-[#18738B]">
              No move-in or move-out dates asked
            </div>
          </div>

          {/* Card 3: Eye with a slash */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-card border border-[#98D6D6]/40 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#98D6D6]/20 border border-[#98D6D6]/50 flex items-center justify-center text-[#18738B] mb-5">
                <EyeOff className="w-6 h-6" strokeWidth={1.8} />
              </div>
              <h3
                className="text-lg font-bold text-[#092345] mb-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Your name is never shown
              </h3>
              <p className="text-sm sm:text-base text-[#293C54] leading-relaxed">
                Reviews are posted without your name or contact details, and landlords can’t see who wrote them.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#98D6D6]/20 text-xs font-semibold text-[#18738B]">
              No names or contact info shown
            </div>
          </div>
        </div>

        {/* Verification Block (Replaced shield with lock, removed keys photo, exact copy) */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-[#98D6D6]/50 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#98D6D6]/20 border border-[#98D6D6]/50 flex items-center justify-center text-[#18738B] shrink-0 mt-1">
              <Lock className="w-6 h-6" strokeWidth={1.8} />
            </div>
            <div>
              <div
                className="text-xs font-semibold uppercase tracking-wider text-[#18738B] mb-1"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                How we verify
              </div>
              <h3
                className="text-xl sm:text-2xl font-bold text-[#092345] mb-3"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Verification documents stay private.
              </h3>
              <p className="text-[#293C54] text-sm sm:text-base leading-relaxed mb-4">
                A review counts toward a landlord’s Kasakiko score only if it’s backed by proof of tenancy, such as a redacted lease page, utility bill, or tenant portal receipt. Our review team checks the document, stores it securely, and never shows it to landlords. We never share or sell verification documents.
              </p>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#293C54] pt-2 border-t border-[#98D6D6]/30">
                <span className="font-semibold text-[#092345]">Secure document storage</span>
                <span className="text-[#98D6D6]">•</span>
                <button
                  type="button"
                  onClick={onOpenPrivacyModal}
                  className="text-[#18738B] underline hover:text-[#092345] font-semibold cursor-pointer"
                >
                  Read full privacy policy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
