import { siteConfig } from '../config/site.config';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Tracks custom and standard conversion events across GA4 and Meta Pixel
 */
export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (siteConfig.analytics.debug) {
    console.log(`[WISAL Analytics Event: ${eventName}]`, params);
  }

  // Google Analytics 4 Event
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  // Meta Pixel Event
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('trackCustom', eventName, params);
  }
}

/**
 * Tracks lead conversion (e.g. clicking WhatsApp order button or submitting order form)
 */
export function trackLeadConversion(data: {
  leadSource: 'whatsapp' | 'modal_form' | 'direct_cta';
  productCategory?: string;
  packageName?: string;
}) {
  trackEvent('generate_lead', {
    event_category: 'Conversion',
    event_label: data.productCategory || 'general',
    value: data.packageName || 'unspecified',
    lead_source: data.leadSource,
  });

  // Standard Meta Pixel 'Lead' event
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'Lead', {
      content_name: data.productCategory,
      content_category: data.packageName,
    });
  }
}

/**
 * Tracks outbound navigation to the live production websites
 */
export function trackProductRedirect(product: 'invitations' | 'ahd', destinationUrl: string) {
  trackEvent('redirect_to_product', {
    product,
    destination: destinationUrl,
  });
}
