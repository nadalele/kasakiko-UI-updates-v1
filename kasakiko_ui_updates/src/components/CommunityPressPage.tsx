import React from 'react';
import { Newspaper, Building, ShieldCheck, Mail, FileCheck, CheckCircle2, Sparkles, ArrowLeft } from 'lucide-react';
import { KasakikoHouseIcon } from './KasakikoHouseIcon';

interface CommunityPressPageProps {
  onBackToHome?: () => void;
  onOpenContactModal?: (topic?: string) => void;
}

export const CommunityPressPage: React.FC<CommunityPressPageProps> = ({ onBackToHome, onOpenContactModal }) => {
  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#092345]">
      {/* Top Banner with Coming Soon Notice */}
      <section className="pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-[#98D6D6]/40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Coming Soon Notice */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F5F4] border border-[#98D6D6] text-xs font-semibold text-[#18738B] mb-4">
              <KasakikoHouseIcon size={14} color="teal" />
              <span>Coming Soon · Ecosystem Under Active Development</span>
            </div>

            <div
              className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#18738B] mb-2 flex items-center gap-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span>Kasakiko Community & Press</span>
              <span className="text-[#98D6D6]">·</span>
              <span className="text-[#293C54]/70 font-normal">Publicity & Verification Standards</span>
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#092345] tracking-tight mb-5 text-balance"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.02em' }}
            >
              Independent journalism, public records, and tenant advocacy.
            </h1>

            <p className="text-base sm:text-lg text-[#293C54] leading-relaxed mb-6 font-normal">
              Kasakiko partners with local housing journalists, non-profit tenant legal clinics, and municipal open-data registries to corroborate reviews with public tax assessor deeds, code enforcement inspections, and rent board documentation.
            </p>

            {onBackToHome && (
              <button
                type="button"
                onClick={onBackToHome}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#18738B] hover:text-[#092345] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Home</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Verification Framework & Slots */}
      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#092345] tracking-tight mb-3"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Ecosystem Partnerships
            </h2>
            <p className="text-xs sm:text-sm text-[#293C54] leading-relaxed">
              We are finalizing integrations across three primary verification pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">
            {/* Pillar 1 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-dashed border-[#98D6D6] shadow-soft flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E8F5F4] border border-[#98D6D6] flex items-center justify-center text-[#18738B] mb-5">
                  <Building className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold text-[#18738B] uppercase tracking-wider mb-1">
                  Tenant Organizations
                </div>
                <h3
                  className="text-lg font-bold text-[#092345] mb-2.5"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Housing Advocacy Partners
                </h3>
                <p className="text-xs sm:text-sm text-[#293C54] leading-relaxed">
                  Collaborating with community housing rights unions to ensure review criteria accurately reflect real tenant welfare, eviction defense records, and habitability standards.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-[#18738B] font-medium">
                <span>Partner Slots Opening</span>
                <span className="text-[11px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full">Phase 2</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-dashed border-[#98D6D6] shadow-soft flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E8F5F4] border border-[#98D6D6] flex items-center justify-center text-[#18738B] mb-5">
                  <Newspaper className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold text-[#18738B] uppercase tracking-wider mb-1">
                  Investigative Reporting
                </div>
                <h3
                  className="text-lg font-bold text-[#092345] mb-2.5"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Press Coverage & Citations
                </h3>
                <p className="text-xs sm:text-sm text-[#293C54] leading-relaxed">
                  Referencing published investigative series from local real estate & civic media investigating corporate landlords, portfolio flips, and security deposit disputes.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-[#18738B] font-medium">
                <span>Media Kit Ready</span>
                <span className="text-[11px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full">Phase 2</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-dashed border-[#98D6D6] shadow-soft flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E8F5F4] border border-[#98D6D6] flex items-center justify-center text-[#18738B] mb-5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold text-[#18738B] uppercase tracking-wider mb-1">
                  Civic Open Data
                </div>
                <h3
                  className="text-lg font-bold text-[#092345] mb-2.5"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Public Records Corroboration
                </h3>
                <p className="text-xs sm:text-sm text-[#293C54] leading-relaxed">
                  Connecting parcel records, municipal building inspection complaints, code enforcement violations, and official rent board registry filings to verified properties.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-[#18738B] font-medium">
                <span>API In Development</span>
                <span className="text-[11px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full">Phase 2</span>
              </div>
            </div>
          </div>

          {/* Press Inquiries & Advocacy Contact Box */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#98D6D6]/60 shadow-soft max-w-3xl mx-auto text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F5F4] border border-[#98D6D6] flex items-center justify-center text-[#18738B] mx-auto mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3
              className="text-xl sm:text-2xl font-bold text-[#092345] mb-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Press & Community Inquiries
            </h3>
            <p className="text-xs sm:text-sm text-[#293C54] max-w-xl mx-auto mb-6 leading-relaxed">
              Are you an investigative journalist, housing researcher, or tenant advocacy organization looking to collaborate or access anonymized housing quality data? Reach out to our community team.
            </p>
            <button
              type="button"
              onClick={() => onOpenContactModal?.('Press & Media')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2EABBA] hover:bg-[#18738B] hover:text-white text-xs sm:text-sm font-semibold text-[#092345] transition-colors cursor-pointer shadow-xs"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <Mail className="w-4 h-4" />
              <span>Contact Press & Community Team</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
