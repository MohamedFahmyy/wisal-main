/**
 * WISAL Centralized Site & Integration Configuration
 * 
 * Keep all contact details, production destinations, and analytics tracking IDs
 * configurable here in one single place.
 */

export const siteConfig = {
  brand: {
    name: 'WISAL',
    nameAr: 'وِصال',
    tagline: 'Every Connection Has a Story',
    taglineAr: 'كل حكاية جميلة تستحق أن تُروى',
    logo: '/logo.png',
    established: '2025',
    origin: 'Cairo, Egypt',
    originAr: 'القاهرة، مصر',
  },

  // Production Destinations (Do not modify existing external apps)
  destinations: {
    invitations: 'https://wisal-app-six.vercel.app/',
    ahd: 'https://wisal-habeba.vercel.app/',
  },

  // WhatsApp Business Integration
  whatsapp: {
    // Configurable phone number in international format without '+' or special chars
    phoneNumber: '201112194828',
    displayPhoneNumber: '+20 111 219 4828',
    defaultMessageAr: 'مرحباً وِصال، أود الاستفسار عن خدماتكم الفاخرة لتصميم تجربة رقمية استثنائية.',
    defaultMessageEn: 'Hello WISAL, I would like to inquire about your luxury digital experiences.',
  },

  // Contact Information
  contact: {
    email: 'contact@wisal.luxury',
    supportEmail: 'support@wisal.luxury',
    instagram: 'https://instagram.com/wisal.luxury',
    tiktok: 'https://tiktok.com/@wisal.luxury',
    facebook: 'https://facebook.com/wisal.luxury',
  },

  // Analytics & Conversion Tracking (Set to your real IDs when ready)
  analytics: {
    // Google Analytics 4 Measurement ID (e.g. 'G-XXXXXXXXXX')
    ga4MeasurementId: '',
    // Meta (Facebook) Pixel ID (e.g. '123456789012345')
    metaPixelId: '',
    // Enable debug logging for events in development console
    debug: false,
  },

  // SEO & OpenGraph Defaults
  seo: {
    siteUrl: 'https://wisal.luxury',
    defaultOgImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#1C060D',
  },
};
