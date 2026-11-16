import { siteConfig } from '../config/site.config';
import { trackLeadConversion } from './analytics';

export interface WhatsAppOrderParams {
  productType?: 'invitations' | 'ahd' | 'general';
  packageName?: string;
  templateName?: string;
  names?: string;
  eventDate?: string;
  notes?: string;
  customMessage?: string;
  language?: 'ar' | 'en';
}

/**
 * Builds a direct, encoded WhatsApp click-to-chat URL with a prefilled message
 * identifying the exact product, package, or template selected by the customer.
 */
export function buildWhatsAppLink(params: WhatsAppOrderParams = {}): string {
  const {
    productType = 'general',
    packageName,
    templateName,
    names,
    eventDate,
    notes,
    customMessage,
    language = 'ar',
  } = params;

  // Track analytics lead event
  trackLeadConversion({
    leadSource: 'whatsapp',
    productCategory: productType,
    packageName: packageName || 'none',
  });

  if (customMessage) {
    return `https://wa.me/${siteConfig.whatsapp.phoneNumber}?text=${encodeURIComponent(customMessage)}`;
  }

  const isAr = language === 'ar';

  let greeting = isAr
    ? 'مرحباً وِصال، أود طلب تصميم تجربة رقمية فاخرة:\n'
    : 'Hello WISAL, I would like to commission a luxury digital experience:\n';

  let productDetails = '';
  if (productType === 'invitations') {
    productDetails += isAr
      ? `• الخدمة: دعوة إلكترونية فاخرة (WISAL Invitations)\n`
      : `• Service: Luxury Digital Invitation (WISAL Invitations)\n`;
  } else if (productType === 'ahd') {
    productDetails += isAr
      ? `• الخدمة: موقع هدايا رومانسي (WISAL AHD)\n`
      : `• Service: Romantic Digital Gift Site (WISAL AHD)\n`;
  }

  if (packageName) {
    productDetails += isAr
      ? `• الباقة: ${packageName}\n`
      : `• Package: ${packageName}\n`;
  }

  if (templateName) {
    productDetails += isAr
      ? `• التصميم المختار: ${templateName}\n`
      : `• Selected Design: ${templateName}\n`;
  }

  if (names) {
    productDetails += isAr
      ? `• الأسماء: ${names}\n`
      : `• Names: ${names}\n`;
  }

  if (eventDate) {
    productDetails += isAr
      ? `• موعد المناسبة / الهدية: ${eventDate}\n`
      : `• Milestone Date: ${eventDate}\n`;
  }

  if (notes) {
    productDetails += isAr
      ? `• ملاحظات وتفاصيل إضافية: ${notes}\n`
      : `• Additional Notes: ${notes}\n`;
  }

  const conclusion = isAr
    ? '\nأرجو إفادتي بالخطوات القادمة وتأكيد الحجز. شكراً جزيلاً!'
    : '\nPlease let me know the next steps to proceed. Thank you!';

  const fullMessage = `${greeting}${productDetails}${conclusion}`;
  return `https://wa.me/${siteConfig.whatsapp.phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
}
