import React from 'react';
import { Key, ClipboardList, Eye, MessagesSquare } from 'lucide-react';
import { KasakikoHouseIcon } from './KasakikoHouseIcon';

export const WhyKasakikoSection: React.FC = () => {
  return (
    <section id="why-kasakiko" className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#18738B] mb-2"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <KasakikoHouseIcon size={14} color="teal" />
            <span>Why Kasakiko is different</span>
          </div>
          {/* Heading */}
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#092345] tracking-tight mb-4 text-balance"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.02em' }}
          >
            Accountability that follows the landlord, not just the building.
          </h2>
          {/* Intro */}
          <p className="text-[#293C54] text-base sm:text-lg leading-relaxed font-normal">
            A building can look great in the listing photos, but your day-to-day experience depends on the person who holds your lease. Landlords can rename buildings or manage properties under different names, but their Kasakiko score stays with them no matter which property they list.
          </p>
        </div>

        {/* 4 Cards in 2x2 grid on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Key */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-card border border-[#98D6D6]/40 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#98D6D6]/20 border border-[#98D6D6]/50 flex items-center justify-center text-[#18738B] mb-4">
                <Key className="w-6 h-6" strokeWidth={1.8} />
              </div>
              <h3
                className="text-lg font-bold text-[#092345] mb-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                The person behind the lease
              </h3>
              <p className="text-sm sm:text-base text-[#293C54] leading-relaxed">
                We link reviews to the individual owner or management company across all of their properties, so you can see the full picture before you sign.
              </p>
            </div>
          </div>

          {/* Card 2: Clipboard with lines */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-card border border-[#98D6D6]/40 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#98D6D6]/20 border border-[#98D6D6]/50 flex items-center justify-center text-[#18738B] mb-4">
                <ClipboardList className="w-6 h-6" strokeWidth={1.8} />
              </div>
              <h3
                className="text-lg font-bold text-[#092345] mb-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Factual, verifiable questions
              </h3>
              <p className="text-sm sm:text-base text-[#293C54] leading-relaxed">
                Reviews stick to concrete facts: how many days it took to return a security deposit, how quickly emergency repairs were handled, and how much notice was given before entry.
              </p>
            </div>
          </div>

          {/* Card 3: Open eye */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-card border border-[#98D6D6]/40 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#98D6D6]/20 border border-[#98D6D6]/50 flex items-center justify-center text-[#18738B] mb-4">
                <Eye className="w-6 h-6" strokeWidth={1.8} />
              </div>
              <h3
                className="text-lg font-bold text-[#092345] mb-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                No pay-to-remove
              </h3>
              <p className="text-sm sm:text-base text-[#293C54] leading-relaxed">
                Reviews can't be bought or hidden, and no payment ever changes a landlord's score. Landlords can respond publicly, but the ratings themselves stay exactly as written.
              </p>
            </div>
          </div>

          {/* Card 4: Two overlapping speech bubbles */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-card border border-[#98D6D6]/40 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#98D6D6]/20 border border-[#98D6D6]/50 flex items-center justify-center text-[#18738B] mb-4">
                <MessagesSquare className="w-6 h-6" strokeWidth={1.8} />
              </div>
              <h3
                className="text-lg font-bold text-[#092345] mb-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Give-to-get community
              </h3>
              <p className="text-sm sm:text-base text-[#293C54] leading-relaxed">
                To read reviews, you share one of your own. That keeps reviews current, balanced, and fair for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
