import React from 'react';
import { X, Lock, FileText } from 'lucide-react';
import { KasakikoHouseIcon } from './KasakikoHouseIcon';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | 'guidelines' | null;
  onClose: () => void;
}

export const PolicyModals: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#092345]/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-card border border-[#98D6D6]/50 relative my-8 animate-in fade-in duration-200">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#293C54]/60 hover:text-[#092345] hover:bg-[#E8F5F4] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' && (
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-[#18738B] uppercase tracking-wider">
              <KasakikoHouseIcon size={14} color="teal" />
              <span>Kasakiko privacy & anonymity guarantee</span>
            </div>
            <h2
              className="text-2xl font-bold text-[#092345] mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Privacy Policy & Anonymity Protocol
            </h2>
            <div className="text-sm text-[#293C54] space-y-4 max-h-[60vh] overflow-y-auto pr-2">
              <p>
                Reviews on Kasakiko are anonymous so renters can be honest. Here is what we do to protect that.
              </p>

              <h3 className="font-bold text-[#092345] pt-1">1. Rent is shown as a range.</h3>
              <p className="leading-relaxed">
                We never publish your exact rent. Reviews show a range, like $2,200 to $2,999, so a landlord can’t match a review to a specific tenant by their bank statements.
              </p>

              <h3 className="font-bold text-[#092345] pt-1">2. We ask how long, not when.</h3>
              <p className="leading-relaxed">
                We don’t ask for your move-in or move-out dates. Reviews only show how many years you lived there, so a landlord can’t match a review to a specific lease.
              </p>

              <h3 className="font-bold text-[#092345] pt-1">3. Your name is never shown.</h3>
              <p className="leading-relaxed">
                Reviews are posted without your name or contact details, and landlords can’t see who wrote them.
              </p>

              <h3 className="font-bold text-[#092345] pt-1">4. Verification documents stay private.</h3>
              <p className="leading-relaxed">
                A review counts toward a landlord’s Kasakiko score only if it’s backed by proof of tenancy, such as a redacted lease page, utility bill, or tenant portal receipt. Our review team checks the document, stores it securely, and never shows it to landlords. We never share or sell verification documents.
              </p>

              <h3 className="font-bold text-[#092345] pt-1">5. We don’t sell your information.</h3>
              <p className="leading-relaxed">
                We never sell or rent reviewer personal information. Landlords and partners can pay for features on Kasakiko, but no payment can remove, hide, or change a review or a landlord’s score.
              </p>
            </div>
          </div>
        )}

        {type === 'terms' && (
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-[#18738B] uppercase tracking-wider">
              <KasakikoHouseIcon size={14} color="teal" />
              <span>Platform Terms</span>
            </div>
            <h2
              className="text-2xl font-bold text-[#092345] mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Terms of Service
            </h2>
            <div className="text-sm text-[#293C54] space-y-4 max-h-[60vh] overflow-y-auto pr-2">
              <p>
                Welcome to Kasakiko. By accessing our platform or submitting a review, you agree to these Terms.
              </p>
              <h3 className="font-bold text-[#092345]">1. Factual Reporting</h3>
              <p>
                Reviews must reflect truthful, factual personal tenancy experiences. Slander, fabricated claims, and hate speech are strictly prohibited.
              </p>
              <h3 className="font-bold text-[#092345]">2. Give-to-Get Access</h3>
              <p>
                Access to detailed tenant reviews operates on a reciprocal model. Users contribute one verified review to unlock platform-wide records.
              </p>
              <h3 className="font-bold text-[#092345]">3. Landlord Rights</h3>
              <p>
                Property owners and management entities have the right to view their Kasakiko score for free, and claim their public profile for $5.99 a month to read written reviews and publish formal responses.
              </p>
            </div>
          </div>
        )}

        {type === 'guidelines' && (
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-[#18738B] uppercase tracking-wider">
              <KasakikoHouseIcon size={14} color="teal" />
              <span>Community Standards</span>
            </div>
            <h2
              className="text-2xl font-bold text-[#092345] mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Kasakiko Community Guidelines
            </h2>
            <div className="text-sm text-[#293C54] space-y-4 max-h-[65vh] overflow-y-auto pr-2 leading-relaxed">
              <p>
                Kasakiko exists so tenants have a place to share their experience renting from a specific landlord. That only works if reviews are honest, specific, and fair. Every review is checked against the guidelines below before it publishes, so read through them first, it'll save you a rejected submission.
              </p>

              <div>
                <h3 className="font-bold text-[#092345] text-base mb-2">Write about your own tenancy</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Your review has to come from your own experience renting from this landlord. Not a friend's story, not something you read online, not a listing you toured but never lived in.
                  </li>
                  <li>
                    Stick to the landlord-tenant relationship: repairs, communication, deposit handling, lease terms, how issues got resolved (or didn't).
                  </li>
                  <li>
                    If you have a personal, financial, or professional relationship with the landlord (you're related to them, you work for them, you're a competing landlord in the area), sit this one out. Reviews need to be unbiased to mean anything.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-[#092345] text-base mb-2">Stick to what happened</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Reviews need to reflect your real experience. Don't post statements you know to be false.
                  </li>
                  <li>
                    Describe events, not conclusions dressed up as fact. &ldquo;My landlord didn't return my deposit within the legal window&rdquo; describes what happened. &ldquo;My landlord is a criminal&rdquo; doesn't.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-[#092345] text-base mb-2">Keep personal information out</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    If a review sits under a landlord's personal name, don't expose any contact information about them.
                  </li>
                  <li>
                    Don't name or identify other tenants, roommates, or building staff who aren't part of the review. If you need to reference someone else, describe their role (&ldquo;the property manager,&rdquo; &ldquo;the maintenance contractor&rdquo;) instead of naming them.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-[#092345] text-base mb-2">Zero tolerance for the following</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Threats, harassment, or language meant to intimidate rather than inform.
                  </li>
                  <li>
                    Hate speech, slurs, or attacks on someone's race, religion, gender, disability, sexual orientation, or other protected characteristic, whether directed at the landlord or used to describe other tenants.
                  </li>
                  <li>
                    Reviews written or edited in exchange for payment, discounts, or any other incentive from the landlord or anyone else.
                  </li>
                  <li>
                    Reviews of your own property, or content designed to manipulate a landlord's score (fake accounts, coordinated review campaigns, and so on).
                  </li>
                  <li>
                    Sexually explicit content, spam, or promotional material unrelated to the rental experience.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-[#092345] text-base mb-2">What happens if a review doesn't meet these guidelines</h3>
                <p className="mb-3">
                  Reviews that violated these guidelines get held back before they ever go live. (Coming soon: you'll get a note on what to fix so you can revise and resubmit your review).
                </p>
                <p className="mb-2">
                  A published review can also get pulled back down for a closer look, for one of two reasons:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-3">
                  <li>
                    <strong className="font-bold text-[#092345]">Something in the review itself trips one of the guidelines above</strong>&nbsp;(personal information, hate speech, an incentivized review, and so on), caught after the fact rather than at submission.
                  </li>
                  <li>
                    <strong className="font-bold text-[#092345]">The landlord disputes it for a legitimate reason, i.e.</strong>&nbsp;a specific claim isn't true
                  </li>
                </ul>
                <p>
                  Either way, the violated review is hidden from the public view while we look into it, you'll see it tagged &ldquo;Under review&rdquo; on your own reviews page in the meantime, so you always know where things stand. Our team checks the review against these guidelines and your proof of tenancy, before deciding whether it goes back up.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#092345] text-base mb-2">The bottom line</h3>
                <p>
                  These guidelines will evolve as Kasakiko grows. The short version doesn't change though: tell the truth about your own experience and keep it about the tenancy.
                </p>
              </div>

              <p className="italic text-xs text-[#293C54]/80 pt-3 border-t border-[#98D6D6]/40">
                Guidelines last updated on: September 2026
              </p>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-[#98D6D6]/40 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 text-sm font-semibold text-[#092345] bg-[#2EABBA] hover:bg-[#18738B] hover:text-white rounded-full transition-colors cursor-pointer"
          >
            I understand
          </button>
        </div>
      </div>
    </div>
  );
};
