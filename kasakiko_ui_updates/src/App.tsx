/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, NavTab } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { WhyKasakikoSection } from './components/WhyKasakikoSection';
import { PrivacySection } from './components/PrivacySection';
import { ForLandlordsPage } from './components/ForLandlordsPage';
import { ExampleReviewsSection } from './components/ExampleReviewsSection';
import { CommunityPressPage } from './components/CommunityPressPage';
import { Footer } from './components/Footer';
import { PolicyModals } from './components/PolicyModals';
import { ContactModal } from './components/ContactModal';
import { KasakikoHouseIcon } from './components/KasakikoHouseIcon';
import { IntegrationSlot } from './components/IntegrationSlot';
import { Smartphone, Monitor, ArrowLeft } from 'lucide-react';

export default function App() {
  const [viewportMode, setViewportMode] = useState<'desktop' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [userUnlocked] = useState(false);
  const [policyModalType, setPolicyModalType] = useState<'privacy' | 'terms' | 'guidelines' | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactModalTopic, setContactModalTopic] = useState<string | undefined>(undefined);

  // Synchronize route with browser URL for placeholder routes
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/write-review') setActiveTab('write-review');
    else if (path === '/landlords') setActiveTab('landlords');
    else if (path === '/for-landlords') setActiveTab('for-landlords');
    else if (path === '/example-reviews') setActiveTab('example-reviews');
    else if (path === '/community-press') setActiveTab('community-press');

    const handlePopState = () => {
      const currentPath = window.location.pathname;
      if (currentPath === '/write-review') setActiveTab('write-review');
      else if (currentPath === '/landlords') setActiveTab('landlords');
      else if (currentPath === '/for-landlords') setActiveTab('for-landlords');
      else if (currentPath === '/example-reviews') setActiveTab('example-reviews');
      else if (currentPath === '/community-press') setActiveTab('community-press');
      else setActiveTab('home');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigateTab = (tab: NavTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const pathMap: Record<NavTab, string> = {
      'home': '/',
      'for-landlords': '/for-landlords',
      'example-reviews': '/example-reviews',
      'community-press': '/community-press',
      'write-review': '/write-review',
      'landlords': '/landlords',
    };
    try {
      window.history.pushState(null, '', pathMap[tab] || '/');
    } catch {
      // In sandboxed iframe environments, ignore pushState limitations
    }
  };

  const handleOpenContactModal = (topic?: string) => {
    setContactModalTopic(topic);
    setIsContactModalOpen(true);
  };

  const handleNavigateSection = (sectionId: string) => {
    if (sectionId === 'for-landlords') {
      handleNavigateTab('for-landlords');
      return;
    }

    if (sectionId === 'example-reviews') {
      handleNavigateTab('example-reviews');
      return;
    }

    if (sectionId === 'landlords' || sectionId === 'existing-reviews') {
      handleNavigateTab('landlords');
      return;
    }

    if (sectionId === 'community-press') {
      handleNavigateTab('community-press');
      return;
    }

    if (activeTab !== 'home') {
      handleNavigateTab('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchLandlordClick = () => {
    if (activeTab !== 'home') {
      handleNavigateTab('home');
    }
    setTimeout(() => {
      const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
      if (searchInput) {
        searchInput.focus();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  const pageContent = (
    <div className="min-h-screen bg-[#F7F4EC] flex flex-col justify-between selection:bg-[#98D6D6] selection:text-[#092345] overflow-x-hidden w-full max-w-full">
      <div>
        {/* Navigation Bar (Pure White Background per logo specification) */}
        <Navbar
          activeTab={activeTab}
          onSelectTab={handleNavigateTab}
          onWriteReviewClick={() => handleNavigateTab('write-review')}
          onNavigateSection={handleNavigateSection}
          userUnlocked={userUnlocked}
        />

        {/* Dynamic Tab Content */}
        {activeTab === 'home' && (
          <div>
            {/* Hero Section: Two-Tone Headline + Search Bar with IntegrationSlot property-search */}
            <HeroSection
              onWriteReviewClick={() => handleNavigateTab('write-review')}
              onNavigateLandlords={() => handleNavigateTab('landlords')}
            />

            {/* Section 3: How it works (For Renters - Verbatim Copy) */}
            <HowItWorksSection
              onWriteReviewClick={() => handleNavigateTab('write-review')}
              onSearchLandlordClick={handleSearchLandlordClick}
              onJumpToLandlords={() => handleNavigateSection('for-landlords')}
            />

            {/* Section 4: Why Kasakiko is different (Exact Copy & Icons) */}
            <WhyKasakikoSection />

            {/* Section 5: Privacy by design (Exact Copy & Lock Icon) */}
            <PrivacySection
              onOpenPrivacyModal={() => setPolicyModalType('privacy')}
            />
          </div>
        )}

        {/* Dedicated Kasakiko for Landlords Tab */}
        {activeTab === 'for-landlords' && (
          <ForLandlordsPage
            onBackToHome={() => handleNavigateTab('home')}
          />
        )}

        {/* Dedicated Example Reviews Tab */}
        {activeTab === 'example-reviews' && (
          <ExampleReviewsSection
            onWriteReviewClick={() => handleNavigateTab('write-review')}
            onBackToHome={() => handleNavigateTab('home')}
            isDedicatedTab={true}
          />
        )}

        {/* Dedicated Community & Press Tab */}
        {activeTab === 'community-press' && (
          <CommunityPressPage
            onBackToHome={() => handleNavigateTab('home')}
            onOpenContactModal={handleOpenContactModal}
          />
        )}

        {/* Placeholder Route: /write-review */}
        {activeTab === 'write-review' && (
          <div className="py-12 lg:py-20 bg-white min-h-[70vh]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <button
                type="button"
                onClick={() => handleNavigateTab('home')}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#18738B] hover:text-[#092345] mb-6 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Home</span>
              </button>

              <div className="mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#18738B] block mb-1">
                  Tenant Review Workflow
                </span>
                <h1
                  className="text-3xl sm:text-4xl font-bold text-[#092345] tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Write a Verified Review
                </h1>
                <p className="text-sm text-[#293C54] mt-1.5">
                  Route: <code className="bg-stone-100 px-2 py-0.5 rounded text-xs text-[#092345]">/write-review</code> · Share proof of tenancy and rate your San Francisco rental experience anonymously.
                </p>
              </div>

              {/* INTEGRATION: Existing tenant review submission workflow mounts here */}
              <IntegrationSlot
                name="review-workflow"
                label="Review workflow mounts here"
                className="w-full"
              />
            </div>
          </div>
        )}

        {/* Existing Reviews Repository Route: /landlords */}
        {activeTab === 'landlords' && (
          <div className="py-12 lg:py-20 bg-white min-h-[70vh]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <button
                type="button"
                onClick={() => handleNavigateTab('home')}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#18738B] hover:text-[#092345] mb-6 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Home</span>
              </button>

              <div className="mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#18738B] block mb-1">
                  San Francisco Property Owners & Management
                </span>
                <h1
                  className="text-3xl sm:text-4xl font-bold text-[#092345] tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Existing Reviews & Landlord Directory
                </h1>
                <p className="text-sm text-[#293C54] mt-1.5">
                  Browse our complete repository of verified San Francisco landlord reviews, scorecards, and properties.
                </p>
              </div>

              {/* INTEGRATION: Landlord directory cards, properties, and landlord reviews mount here */}
              <IntegrationSlot
                name="landlord-directory"
                label="Landlord directory mounts here"
                className="w-full"
              />
            </div>
          </div>
        )}
      </div>

      {/* Footer: Full Logo + Anonymity Links */}
      <Footer
        onWriteReviewClick={() => handleNavigateTab('write-review')}
        onNavigateSection={handleNavigateSection}
        onOpenPrivacyModal={() => setPolicyModalType('privacy')}
        onOpenTermsModal={() => setPolicyModalType('terms')}
        onOpenGuidelinesModal={() => setPolicyModalType('guidelines')}
        onOpenContactModal={() => setIsContactModalOpen(true)}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F7F4EC]">
      {/* Top Floating Utility Bar for Desktop / Mobile Viewport Testing */}
      <div className="sticky top-0 z-50 bg-[#092345] text-white px-4 py-2 shadow-md border-b border-[#18738B]/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <KasakikoHouseIcon size={16} color="white" />
            <span
              className="text-xs font-bold text-white tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Kasakiko · Direction 1 Refined
            </span>
            <span className="hidden sm:inline text-xs text-[#98D6D6]/80">
              | Exact copy, Kasakiko score, & solid silhouette keyhole icons
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Viewport switch: Desktop vs Mobile */}
            <div className="flex items-center bg-white/10 rounded-full p-0.5 border border-white/20">
              <button
                type="button"
                onClick={() => setViewportMode('desktop')}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs rounded-full transition-colors cursor-pointer ${
                  viewportMode === 'desktop'
                    ? 'bg-white text-[#092345] font-semibold'
                    : 'text-white/80 hover:text-white'
                }`}
                title="Desktop 1440px Viewport"
              >
                <Monitor className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Desktop</span>
              </button>
              <button
                type="button"
                onClick={() => setViewportMode('mobile')}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs rounded-full transition-colors cursor-pointer ${
                  viewportMode === 'mobile'
                    ? 'bg-white text-[#092345] font-semibold'
                    : 'text-white/80 hover:text-white'
                }`}
                title="Mobile 390px Viewport"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Mobile (390px)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Screen Presentation Layer */}
      {viewportMode === 'desktop' ? (
        <div>{pageContent}</div>
      ) : (
        <div className="py-8 px-4 flex justify-center items-center min-h-[calc(100vh-80px)] bg-slate-900/10">
          <div className="w-[390px] h-[844px] bg-[#F7F4EC] rounded-[50px] shadow-[0_25px_60px_-15px_rgba(9,35,69,0.35)] border-[10px] border-slate-900 overflow-hidden flex flex-col relative">
            {/* Dynamic Island / Speaker Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-36 bg-slate-900 rounded-b-2xl z-50 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-slate-800 mr-3" />
              <div className="w-10 h-1.5 rounded-full bg-slate-800" />
            </div>

            {/* Mobile Scrollable Viewport */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden pt-6 bg-[#F7F4EC]">{pageContent}</div>

            {/* Home indicator bar */}
            <div className="h-4 bg-[#F7F4EC] flex items-center justify-center shrink-0">
              <div className="w-32 h-1 bg-slate-300 rounded-full" />
            </div>
          </div>
        </div>
      )}

      {/* Legal & Privacy Policy Modals */}
      <PolicyModals
        type={policyModalType}
        onClose={() => setPolicyModalType(null)}
      />

      {/* Contact Team Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => {
          setIsContactModalOpen(false);
          setContactModalTopic(undefined);
        }}
        initialTopic={contactModalTopic}
      />
    </div>
  );
}
