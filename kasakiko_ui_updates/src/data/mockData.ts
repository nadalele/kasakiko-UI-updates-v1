/**
 * MOCK DATA REPOSITORY
 * 
 * NOTE FOR LIVE SITE INTEGRATION:
 * All frontend mock data for example reviews, landlord preview cards, and stats
 * is consolidated in this single file so it can be easily deleted or replaced
 * with live API data fetching.
 * 
 * ALL CONTENT BELOW IS FICTIONAL SAMPLE / MOCK DATA FOR DEMONSTRATION PURPOSES ONLY.
 */

export interface PropertySubRatings {
  location?: number;
  heat?: number;
  waterPressure?: number;
  pestControl?: number;
  appliances?: number;
  overallValue?: number;
  propertyCondition?: number;
}

export interface ExampleReview {
  id: string;
  isVerifiedTenant: boolean;
  reviewDate: string;
  propertyAddress: string;
  landlordName: string;
  
  // Property Side (Fully visible in full review)
  propertyStarRating: number;
  propertySubRatings: PropertySubRatings;
  propertyComment: string;
  tenancyLength: string;
  rentPaidRange: string;
  utilitiesIncluded: boolean;

  // Landlord Side (Quantitative - Fully visible in full review)
  landlordStarRating: number;
  goodTags: string[];
  securityDepositHandling: string;
  rentIncrease: boolean;
  rentPaymentMethod: string;
  wouldRentAgain: boolean;

  // Landlord Side (Written comment)
  landlordComment: string;
}

export interface LandlordProfilePreviewData {
  id: string;
  name: string;
  entityType: string;
  neighborhoods: string[];
  totalProperties: number;
  totalReviews: number;
  overallTrustScore: number;
  depositReturnRate: number;
  avgMaintenanceHours: number;
  sampleAddress: string;
  pinnedReview: ExampleReview;
}

export const MOCK_EXAMPLE_REVIEWS: ExampleReview[] = [
  {
    id: 'rev-mock-1',
    isVerifiedTenant: true,
    reviewDate: '9/18/2026',
    propertyAddress: '820 Bush St, Apt 3B, San Francisco, CA',
    landlordName: 'Pacific Bay Properties LLC',
    propertyStarRating: 4.5,
    propertySubRatings: {
      location: 4.8,
      heat: 4.5,
      waterPressure: 4.0,
      pestControl: 5.0,
      appliances: 4.2,
      overallValue: 4.4,
      propertyCondition: 4.5,
    },
    propertyComment:
      'Well-maintained 1920s Edwardian flat with abundant natural light and original hardwood floors. Steam radiator heating was inspected every autumn prior to cold weather. Central location with convenient access to transit lines and neighborhood grocers.',
    tenancyLength: '2 years',
    rentPaidRange: '$2,800 – $3,200',
    utilitiesIncluded: false,

    landlordStarRating: 4.6,
    goodTags: [
      'Quick repairs',
      'Clear communication',
      'Fair and reasonable',
      'Highly responsive',
    ],
    securityDepositHandling: '100% returned in 11 days',
    rentIncrease: false,
    rentPaymentMethod: 'Online portal',
    wouldRentAgain: true,

    landlordComment:
      'The building management was consistently proactive. Whenever a maintenance ticket was submitted through the online resident portal, a licensed technician responded within 24 hours. Annual inspections were always coordinated with 48 hours advance written notice, and our full security deposit was returned promptly upon move-out with an itemized statement.',
  },
  {
    id: 'rev-mock-2',
    isVerifiedTenant: true,
    reviewDate: '7/14/2026',
    propertyAddress: '742 Valencia St, Apt 2F, San Francisco, CA',
    landlordName: 'Elena Ramos',
    propertyStarRating: 4.2,
    propertySubRatings: {
      location: 5.0,
      heat: 4.0,
      waterPressure: 4.5,
      pestControl: 4.8,
      appliances: 4.0,
      overallValue: 4.3,
      propertyCondition: 4.0,
    },
    propertyComment:
      'Vibrant neighborhood location with double-paned front windows that insulated effectively from street noise. Spacious kitchen layout with gas range. Clean hallways and dedicated bike storage room on the ground level.',
    tenancyLength: '3 years',
    rentPaidRange: '$3,100 – $3,500',
    utilitiesIncluded: true,

    landlordStarRating: 4.8,
    goodTags: [
      'Clear communication',
      'Follows through on commitments',
      'Fair and reasonable',
    ],
    securityDepositHandling: '100% returned in 14 days',
    rentIncrease: false,
    rentPaymentMethod: 'Direct bank transfer',
    wouldRentAgain: true,

    landlordComment:
      'Elena is an independent property owner who takes real pride in her building. When the hot water heater required service during winter, she immediately arranged replacement parts without delay. Clear move-in checklist and always polite and respectful of tenant privacy.',
  },
  {
    id: 'rev-mock-3',
    isVerifiedTenant: false,
    reviewDate: '5/02/2026',
    propertyAddress: '524 14th Ave, San Francisco, CA',
    landlordName: 'Sunset Bay Management',
    propertyStarRating: 3.5,
    propertySubRatings: {
      location: 4.0,
      heat: 3.0,
      waterPressure: 3.5,
      pestControl: 4.0,
      appliances: 3.5,
      overallValue: 3.5,
      propertyCondition: 3.5,
    },
    propertyComment:
      'Solid multi-unit building near Golden Gate Park. Laundry machines in basement were coin-operated and occasionally needed service, but rooms were quiet and spacious. Drafty windows in the back bedroom during foggy summer mornings.',
    tenancyLength: '1–2 years',
    rentPaidRange: '$2,600 – $2,950',
    utilitiesIncluded: false,

    landlordStarRating: 3.2,
    goodTags: ['Clear communication'],
    securityDepositHandling: 'Partly withheld for carpet cleaning',
    rentIncrease: true,
    rentPaymentMethod: 'Check by mail',
    wouldRentAgain: false,

    landlordComment:
      'Management followed all legal notification protocols for building maintenance, though communication was somewhat slow for non-emergency items. A standard rent increase was issued at the 12-month mark according to SF Rent Board guidelines. Deposit return took 20 calendar days with partial withholding for routine cleaning.',
  },
];

export const MOCK_LANDLORD_PREVIEW: LandlordProfilePreviewData = {
  id: 'll-preview-1',
  name: 'Pacific Heights Properties LLC',
  entityType: 'Small Portfolio (2-4 bldgs)',
  neighborhoods: ['Pacific Heights', 'Lower Nob Hill'],
  totalProperties: 3,
  totalReviews: 9,
  overallTrustScore: 4.4,
  depositReturnRate: 100,
  avgMaintenanceHours: 12,
  sampleAddress: '2140 Pine St · 18 units across 3 properties',
  pinnedReview: MOCK_EXAMPLE_REVIEWS[0],
};
