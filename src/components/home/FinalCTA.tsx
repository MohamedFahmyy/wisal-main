import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Sparkles, MessageCircle, ArrowRight, ArrowLeft, ShieldCheck } from 'lucide-react';
import { buildWhatsAppLink } from '../../utils/whatsapp';

interface FinalCTAProps {
  onOpenOrderModal: (service?: 'invitations' | 'ahd') => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenOrderModal }) => {
  const { t, isRTL, language } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const directWhatsAppLink = buildWhatsAppLink({
    productType: 'general',
    language,
    customMessage:
      language === 'ar'
        ? 'مرحباً وِصال، أود البدء في تصميم تجربتي الرقمية الفاخرة معكم.'
        : 'Hello WISAL, I would like to begin crafting my bespoke digital experience.',
  });

  return (
    <section className="py-24 bg-gradient-to-b from-ivory-100 via-gold-50/40 to-ivory-200 dark:from-[#120307] dark:via-plum-900 dark:to-plum-950 relative overflow-hidden transition-colors duration-300">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gold-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        {/* Official Brand Logo */}
        <div className="flex justify-center mb-6">
          <div className="p-2 rounded-3xl bg-white/90 dark:bg-gradient-to-b dark:from-plum-900/80 dark:to-plum-950/90 border border-gold-400/50 shadow-md dark:shadow-gold-glow-lg inline-block">
            <img
              src="/logo.png"
              alt="WISAL | وِصال"
              className="h-20 w-auto object-contain filter drop-shadow-[0_4px_12px_rgba(197,160,89,0.35)]"
            />
          </div>
        </div>

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-ivory-200/90 dark:bg-plum-900/80 mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
          <span className="text-xs uppercase tracking-widest text-gold-700 dark:text-gold-200 font-semibold font-playfair">
            {t.finalCta.eyebrow}
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-amiri text-4xl sm:text-6xl font-bold text-plum-950 dark:text-ivory-50 mb-6 leading-tight">
          {t.finalCta.headline}
        </h2>

        {/* Description */}
        <p className="text-plum-800 dark:text-ivory-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-tajawal mb-10 font-light">
          {t.finalCta.description}
        </p>

        {/* Dual Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={directWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-plum-950 font-bold text-base sm:text-lg shadow-gold-glow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5"
          >
            <MessageCircle className="w-5 h-5 text-plum-950" />
            <span>{t.finalCta.primaryBtn}</span>
          </a>

          <button
            onClick={() => onOpenOrderModal()}
            className="w-full sm:w-auto px-7 py-4 rounded-full border border-gold-500/40 bg-white/80 dark:bg-plum-950/60 hover:bg-gold-500/10 text-gold-800 dark:text-gold-300 font-semibold text-base transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <span>{language === 'ar' ? 'طلب مخصص عبر النموذج' : 'Custom Inquiry Form'}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Reassurance text */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-plum-700 dark:text-ivory-300 font-tajawal">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>{t.finalCta.reassurance}</span>
        </div>
      </div>
    </section>
  );
};
