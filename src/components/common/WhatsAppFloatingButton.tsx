import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { siteConfig } from '../../config/site.config';
import { MessageCircle } from 'lucide-react';
import { trackLeadConversion } from '../../utils/analytics';

export const WhatsAppFloatingButton: React.FC = () => {
  const { language } = useLanguage();

  const handleClick = () => {
    trackLeadConversion({
      leadSource: 'whatsapp',
      productCategory: 'floating_pill',
    });
  };

  const message =
    language === 'ar'
      ? siteConfig.whatsapp.defaultMessageAr
      : siteConfig.whatsapp.defaultMessageEn;

  const url = `https://wa.me/${siteConfig.whatsapp.phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <aside
      aria-label="WhatsApp Support"
      className="fixed bottom-6 z-40 flex items-center gap-2 rtl:left-6 ltr:right-6 rtl:ltr-left"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="group relative flex items-center gap-3 p-3 sm:px-4 sm:py-3 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white shadow-[0_10px_25px_rgba(16,185,129,0.35)] hover:shadow-[0_15px_35px_rgba(16,185,129,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 border border-emerald-300/30"
        aria-label="Chat with WISAL Concierge on WhatsApp"
      >
        {/* Pulsing Outer Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none"></span>

        <MessageCircle className="w-5 h-5 text-white flex-shrink-0 animate-bounce-subtle" />

        <div className="hidden sm:flex flex-col text-start">
          <span className="text-[10px] uppercase tracking-wider text-emerald-100 font-bold font-playfair leading-tight">
            WISAL Concierge
          </span>
          <span className="text-xs font-bold font-tajawal text-white leading-tight">
            {language === 'ar' ? 'تواصل عبر واتساب' : 'Chat via WhatsApp'}
          </span>
        </div>
      </a>
    </aside>
  );
};
