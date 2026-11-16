import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { invitationsPricing, ahdPricing } from '../../config/pricing.config';
import { PricingPlan } from '../../types';
import {
  Sparkles,
  Check,
  MessageCircle,
  HelpCircle,
  Mail,
  Heart,
} from 'lucide-react';
import { buildWhatsAppLink } from '../../utils/whatsapp';

interface PricingSectionProps {
  onOpenOrderModal: (service?: 'invitations' | 'ahd', packageName?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenOrderModal }) => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'invitations' | 'ahd'>('invitations');

  const plans: PricingPlan[] = activeTab === 'invitations' ? invitationsPricing : ahdPricing;

  return (
    <section id="pricing" className="py-24 bg-[#17050B] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gold-500/5 blur-[170px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-500/30 bg-plum-900/60 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-xs uppercase tracking-widest text-gold-300 font-semibold font-playfair">
              {t.pricing.eyebrow}
            </span>
          </div>

          <h2 className="font-amiri text-3xl sm:text-5xl font-bold text-ivory-50 mb-4 leading-tight">
            {t.pricing.title}
          </h2>

          <p className="text-ivory-300 text-sm sm:text-base font-light leading-relaxed font-tajawal">
            {t.pricing.subtitle}
          </p>

          {/* Service Switcher Tabs */}
          <div className="inline-flex p-1.5 rounded-full bg-plum-900/90 border border-gold-500/30 mt-8 shadow-inner">
            <button
              onClick={() => setActiveTab('invitations')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === 'invitations'
                  ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-plum-950 shadow-gold-glow'
                  : 'text-ivory-300 hover:text-gold-300'
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>{t.pricing.tabInvitations}</span>
            </button>

            <button
              onClick={() => setActiveTab('ahd')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === 'ahd'
                  ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-md'
                  : 'text-ivory-300 hover:text-rose-300'
              }`}
            >
              <Heart className="w-4 h-4" />
              <span>{t.pricing.tabAhd}</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const isPopular = plan.popular;
            const isAhd = plan.productCategory === 'ahd';
            const name = language === 'ar' ? plan.name : plan.nameEn;
            const tagline = language === 'ar' ? plan.tagline : plan.taglineEn;
            const desc = language === 'ar' ? plan.description : plan.descriptionEn;
            const features = language === 'ar' ? plan.features : plan.featuresEn;
            const period = language === 'ar' ? plan.period : plan.periodEn;
            const discountBadge = language === 'ar' ? plan.discountBadge : plan.discountBadgeEn;
            const ctaText = language === 'ar' ? plan.ctaText : plan.ctaTextEn;

            const directWhatsAppUrl = buildWhatsAppLink({
              productType: plan.productCategory,
              packageName: name,
              language,
              customMessage: plan.whatsappMessageTemplate,
            });

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 ${
                  isPopular
                    ? isAhd
                      ? 'bg-gradient-to-b from-[#34091A] via-plum-900/90 to-plum-950 border-2 border-rose-400 shadow-2xl scale-105 z-10'
                      : 'bg-gradient-to-b from-plum-900 via-plum-900/90 to-plum-950 border-2 border-gold-400 shadow-gold-glow-lg scale-105 z-10'
                    : 'bg-plum-900/50 border border-gold-500/25 hover:border-gold-400/50 shadow-luxury-card hover:-translate-y-1'
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-md ${
                        isAhd ? 'bg-rose-500 text-white' : 'bg-gold-500 text-plum-950 shadow-gold-glow'
                      }`}
                    >
                      {t.pricing.popularBadge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Header */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-amiri text-2xl sm:text-3xl font-bold text-ivory-50">
                      {name}
                    </h3>
                    {discountBadge && (
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-gold-500/15 border border-gold-500/40 text-gold-300">
                        {discountBadge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-gold-300/90 font-tajawal mb-6 italic">
                    {tagline}
                  </p>

                  {/* Price Display */}
                  <div className="mb-6 p-4 rounded-2xl bg-plum-950/70 border border-gold-500/15">
                    <div className="flex items-baseline gap-2">
                      <span className="font-amiri text-4xl sm:text-5xl font-bold text-ivory-50">
                        {plan.price}
                      </span>
                      {plan.currency && (
                        <span className="text-sm font-semibold text-gold-400">
                          {language === 'ar' ? plan.currency : plan.currencyEn}
                        </span>
                      )}
                      {plan.originalPrice && (
                        <span className="text-xs text-ivory-400 line-through mr-2">
                          {plan.originalPrice} {language === 'ar' ? plan.currency : plan.currencyEn}
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-ivory-400 mt-1 font-tajawal">
                      {period}
                    </div>
                  </div>

                  <p className="text-xs text-ivory-300/90 leading-relaxed font-tajawal mb-6">
                    {desc}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-4 border-t border-gold-500/15 mb-8">
                    {features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            isAhd ? 'bg-rose-500/20 text-rose-400' : 'bg-gold-500/20 text-gold-400'
                          }`}
                        >
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-xs text-ivory-200 font-tajawal leading-snug">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="space-y-3 pt-2">
                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-2 transition-all ${
                      isPopular
                        ? isAhd
                          ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-950/60'
                          : 'bg-gold-500 hover:bg-gold-400 text-plum-950 shadow-gold-glow'
                        : 'bg-plum-800 hover:bg-gold-500/20 text-ivory-100 border border-gold-500/30'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{ctaText}</span>
                  </a>

                  <button
                    onClick={() => onOpenOrderModal(plan.productCategory, name)}
                    className="w-full py-2 text-center text-xs text-gold-300 hover:text-gold-200 transition-colors"
                  >
                    {language === 'ar' ? 'تخصيص الطلب عبر النموذج' : 'Customize via Form'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Centralized config note */}
        <div className="mt-14 text-center">
          <p className="text-xs text-ivory-400 font-tajawal inline-flex items-center gap-1.5 bg-plum-900/50 px-4 py-2 rounded-full border border-gold-500/15">
            <HelpCircle className="w-3.5 h-3.5 text-gold-400" />
            <span>{t.pricing.noteConfigurable}</span>
          </p>
        </div>
      </div>
    </section>
  );
};
