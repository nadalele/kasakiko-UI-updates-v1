import React, { useState, useRef, useEffect } from 'react';
import { KasakikoLogo } from './KasakikoLogo';
import { KasakikoHouseIcon } from './KasakikoHouseIcon';
import { Menu, X, ChevronDown } from 'lucide-react';
import { IntegrationSlot } from './IntegrationSlot';

export type NavTab = 'home' | 'for-landlords' | 'example-reviews' | 'community-press' | 'write-review' | 'landlords';

interface NavbarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onNavigateSection: (sectionId: string) => void;
  onWriteReviewClick: () => void;
  userUnlocked?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  onNavigateSection,
  onWriteReviewClick,
  userUnlocked = false,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [reviewsDropdownOpen, setReviewsDropdownOpen] = useState(false);
  const [mobileReviewsOpen, setMobileReviewsOpen] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isReviewsActive = activeTab === 'landlords' || activeTab === 'example-reviews';

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setReviewsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const handleTabClick = (tab: NavTab) => {
    onSelectTab(tab);
    setReviewsDropdownOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setReviewsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setReviewsDropdownOpen(false);
    }, 150);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-[#98D6D6]/40 shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2 sm:gap-6">
        {/* Brand Wordmark & Logo */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            handleTabClick('home');
          }}
          className="flex items-center shrink-0 focus-brand rounded-md p-0.5 -ml-1 sm:ml-0 bg-white cursor-pointer"
          aria-label="Kasakiko homepage"
        >
          <KasakikoLogo size="md" />
        </a>

        {/* Right side container: desktop navigation tabs aligned to the right, adjacent to the action button */}
        <div className="flex items-center gap-2 sm:gap-8 ml-auto">
          {/* Desktop Navigation Links (Right aligned) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium shrink-0">

            {/* 2. Reviews Dropdown (Second tab directly after Home) */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setReviewsDropdownOpen((prev) => !prev)}
                className={`inline-flex items-center gap-1 whitespace-nowrap transition-colors cursor-pointer py-1.5 ${
                  isReviewsActive
                    ? 'text-[#092345] font-semibold border-b-2 border-[#2EABBA]'
                    : 'text-[#293C54] hover:text-[#18738B]'
                }`}
                aria-expanded={reviewsDropdownOpen}
                aria-haspopup="true"
              >
                <span>Reviews</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    reviewsDropdownOpen ? 'rotate-180 text-[#18738B]' : 'text-[#293C54]'
                  }`}
                />
              </button>

              {/* Desktop Dropdown Menu */}
              {reviewsDropdownOpen && (
                <div className="absolute left-0 top-full mt-1.5 w-72 bg-white rounded-xl border border-[#98D6D6]/60 shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  {/* Option 1: Existing reviews (Landlord lookup & full data repository) */}
                  <button
                    type="button"
                    onClick={() => handleTabClick('landlords')}
                    className={`w-full text-left px-4 py-2.5 transition-colors cursor-pointer flex flex-col ${
                      activeTab === 'landlords'
                        ? 'bg-[#E8F5F4] text-[#092345]'
                        : 'hover:bg-[#FAF8F5] text-[#293C54]'
                    }`}
                  >
                    <span className="text-sm font-semibold text-[#092345]">
                      Existing reviews
                    </span>
                    <span className="text-xs text-[#293C54]/80 mt-0.5">
                      Landlord lookup & repository of ratings
                    </span>
                  </button>

                  <div className="h-px bg-[#98D6D6]/30 my-1 mx-3" />

                  {/* Option 2: Example reviews */}
                  <button
                    type="button"
                    onClick={() => handleTabClick('example-reviews')}
                    className={`w-full text-left px-4 py-2.5 transition-colors cursor-pointer flex flex-col ${
                      activeTab === 'example-reviews'
                        ? 'bg-[#E8F5F4] text-[#092345]'
                        : 'hover:bg-[#FAF8F5] text-[#293C54]'
                    }`}
                  >
                    <span className="text-sm font-semibold text-[#092345]">
                      Example reviews
                    </span>
                    <span className="text-xs text-[#293C54]/80 mt-0.5">
                      Sample reviews & Kasakiko scores
                    </span>
                  </button>
                </div>
              )}
            </div>

            {/* 3. Kasakiko for Landlords */}
            <button
              type="button"
              onClick={() => handleTabClick('for-landlords')}
              className={`whitespace-nowrap transition-colors cursor-pointer py-1.5 ${
                activeTab === 'for-landlords'
                  ? 'text-[#092345] font-semibold border-b-2 border-[#2EABBA]'
                  : 'text-[#293C54] hover:text-[#18738B]'
              }`}
            >
              Kasakiko for Landlords
            </button>

          </nav>

          {/* Right Action: Write a review button, Account button & Mobile hamburger trigger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {userUnlocked && (
              <span className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-[#18738B] bg-[#98D6D6]/20 px-3 py-1 rounded-full border border-[#98D6D6]">
                <KasakikoHouseIcon size={12} color="teal" />
                Reviews unlocked
              </span>
            )}

            {/* Write a review button: identical styling and label on mobile and desktop */}
            <button
              type="button"
              onClick={onWriteReviewClick}
              className="px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-[#092345] bg-[#2EABBA] hover:bg-[#18738B] hover:text-white rounded-full transition-all duration-150 shadow-xs focus-brand cursor-pointer whitespace-nowrap shrink-0"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Write a review
            </button>

            {/* Desktop Account button: hidden on mobile so header never overflows */}
            <div className="hidden lg:block">
              <IntegrationSlot name="account-button" className="shrink-0">
                <button
                  type="button"
                  className="px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-[#092345] bg-[#FAF8F5] hover:bg-[#E8F5F4] border border-[#98D6D6] hover:border-[#18738B] rounded-full transition-colors cursor-pointer whitespace-nowrap shadow-xs"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Account
                </button>
              </IntegrationSlot>
            </div>

            {/* Mobile Menu Button - prominent, visible, and guaranteed in viewport with zero cut-off */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#092345] bg-stone-50 hover:bg-[#E8F5F4] border border-[#98D6D6]/40 transition-colors cursor-pointer shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#092345]" /> : <Menu className="w-5 h-5 text-[#092345]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#98D6D6]/40 px-4 pt-2 pb-5 space-y-1 shadow-md">

          {/* 2. Reviews Accordion (Second tab) */}
          <div>
            <button
              type="button"
              onClick={() => setMobileReviewsOpen((prev) => !prev)}
              className={`w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                isReviewsActive
                  ? 'text-[#092345] font-semibold bg-[#E8F5F4]'
                  : 'text-[#293C54] hover:bg-stone-50'
              }`}
            >
              <span>Reviews</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileReviewsOpen ? 'rotate-180 text-[#18738B]' : 'text-[#293C54]'
                }`}
              />
            </button>

            {/* Collapsible accordion sub-items */}
            {mobileReviewsOpen && (
              <div className="pl-4 pr-1 py-1 space-y-1 bg-[#FAF8F5]/80 rounded-lg mt-1 border-l-2 border-[#2EABBA]">
                <button
                  type="button"
                  onClick={() => handleTabClick('landlords')}
                  className={`w-full text-left py-2 px-3 rounded-md text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                    activeTab === 'landlords'
                      ? 'text-[#092345] font-bold bg-[#E8F5F4]'
                      : 'text-[#293C54] hover:text-[#092345]'
                  }`}
                >
                  <span className="block font-semibold">Existing reviews</span>
                  <span className="block text-[11px] text-[#293C54]/75">
                    Landlord lookup & full repository
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => handleTabClick('example-reviews')}
                  className={`w-full text-left py-2 px-3 rounded-md text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                    activeTab === 'example-reviews'
                      ? 'text-[#092345] font-bold bg-[#E8F5F4]'
                      : 'text-[#293C54] hover:text-[#092345]'
                  }`}
                >
                  <span className="block font-semibold">Example reviews</span>
                  <span className="block text-[11px] text-[#293C54]/75">
                    Sample reviews & Kasakiko scores
                  </span>
                </button>
              </div>
            )}
          </div>

          {/* 3. Kasakiko for Landlords */}
          <button
            type="button"
            onClick={() => handleTabClick('for-landlords')}
            className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
              activeTab === 'for-landlords'
                ? 'text-[#092345] font-semibold bg-[#E8F5F4]'
                : 'text-[#293C54] hover:bg-stone-50'
            }`}
          >
            Kasakiko for Landlords
          </button>


          {/* Mobile Account Action */}
          <div className="pt-2 mt-2 border-t border-[#98D6D6]/40">
            <IntegrationSlot name="account-button" className="w-full">
              <button
                type="button"
                className="w-full py-2.5 px-3 rounded-xl text-sm font-semibold text-[#092345] bg-[#FAF8F5] hover:bg-[#E8F5F4] border border-[#98D6D6] transition-colors cursor-pointer text-center shadow-xs"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Account
              </button>
            </IntegrationSlot>
          </div>
        </div>
      )}
    </header>
  );
};
