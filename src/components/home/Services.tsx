import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { siteConfig } from '../../config/site.config';
import { trackProductRedirect } from '../../utils/analytics';
import {
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Heart,
  Mail,
  Calendar,
  PartyPopper,
  GraduationCap,
  Music,
  Share2,
  Lock,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

interface ServicesProps {
  onOpenOrderModal: (service?: 'invitations' | 'ahd') => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenOrderModal }) => {
  const { t, isRTL, language } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="services" className="py-24 bg-plum-950 relative overflow-hidden">
      {/* Decorative luxury background accents */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-gold-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-500/30 bg-plum-900/60 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-xs uppercase tracking-widest text-gold-300 font-semibold font-playfair">
              {t.services.eyebrow}
            </span>
          </div>

          <h2 className="font-amiri text-3xl sm:text-5xl font-bold text-ivory-50 mb-5 leading-tight">
            {t.services.title}
          </h2>

          <p className="text-ivory-300 text-base sm:text-lg font-light leading-relaxed font-tajawal">
            {t.services.subtitle}
          </p>
        </div>

        {/* The Two Flagship Services */}
        <div className="space-y-16">
          {/* SERVICE A: WISAL INVITATIONS */}
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-plum-900/80 via-plum-900/40 to-plum-950 border border-gold-500/30 shadow-luxury-card relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 blur-[90px] rounded-full pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Text & Features */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300 text-xs font-semibold mb-4">
                  <Mail className="w-3.5 h-3.5 text-gold-400" />
                  <span>{t.services.serviceA.badge}</span>
                </div>

                <h3 className="font-amiri text-3xl sm:text-4xl font-bold text-ivory-100 mb-3">
                  {t.services.serviceA.title}
                </h3>

                <p className="text-gold-300 font-playfair italic text-lg sm:text-xl mb-4 font-light">
                  {t.services.serviceA.tagline}
                </p>

                <p className="text-ivory-300 font-tajawal text-sm sm:text-base leading-relaxed mb-6">
                  {t.services.serviceA.description}
                </p>

                {/* Occasion Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 rounded-lg bg-plum-950/80 border border-gold-500/20 text-xs text-ivory-300 flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-gold-400" />
                    {language === 'ar' ? 'دعوات الزفاف الملكية' : 'Royal Weddings'}
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-plum-950/80 border border-gold-500/20 text-xs text-ivory-300 flex items-center gap-1.5">
                    <Heart className="w-3 h-3 text-rose-400" />
                    {language === 'ar' ? 'حفلات الخطوبة' : 'Engagements'}
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-plum-950/80 border border-gold-500/20 text-xs text-ivory-300 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-gold-400" />
                    {language === 'ar' ? 'عقد قران وكتب كتاب' : 'Katb Ketab'}
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-plum-950/80 border border-gold-500/20 text-xs text-ivory-300 flex items-center gap-1.5">
                    <PartyPopper className="w-3 h-3 text-gold-400" />
                    {language === 'ar' ? 'أعياد ميلاد وذكرى سنوية' : 'Birthdays & Anniversaries'}
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-plum-950/80 border border-gold-500/20 text-xs text-ivory-300 flex items-center gap-1.5">
                    <GraduationCap className="w-3 h-3 text-gold-400" />
                    {language === 'ar' ? 'احتفالات التخرج' : 'Graduations'}
                  </span>
                </div>

                {/* Key Features Bullet List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {t.services.serviceA.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-ivory-200 font-tajawal">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={siteConfig.destinations.invitations}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackProductRedirect('invitations', siteConfig.destinations.invitations)}
                    className="px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-plum-950 font-bold text-sm sm:text-base shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 flex items-center gap-2 group/btn"
                  >
                    <span>{t.services.serviceA.cta}</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  </a>

                  <button
                    onClick={() => onOpenOrderModal('invitations')}
                    className="px-6 py-3.5 rounded-full border border-gold-500/40 hover:bg-gold-500/10 text-gold-300 font-semibold text-sm transition-all"
                  >
                    {language === 'ar' ? 'طلب دعوة خاصة' : 'Commission Invitation'}
                  </button>
                </div>
              </div>

              {/* Visual Showcase Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl bg-plum-950 group-hover:border-gold-400/50 transition-colors">
                  <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80"
                    alt="WISAL Invitations Wedding Showcase"
                    className="w-full h-80 object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum-950 via-plum-950/40 to-transparent"></div>

                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-5 inset-x-5 p-4 rounded-xl bg-plum-900/90 backdrop-blur-md border border-gold-500/30 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gold-400 font-semibold font-playfair uppercase">
                        {language === 'ar' ? 'بوابة وِصال للدعوات' : 'WISAL Invitations Gateway'}
                      </div>
                      <div className="text-sm font-bold text-ivory-100 font-amiri mt-0.5">
                        {language === 'ar' ? '14 قالباً تفاعلياً ثلاثي الأبعاد' : '14 3D Interactive Themes'}
                      </div>
                    </div>

                    <a
                      href={siteConfig.destinations.invitations}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-gold-500 text-plum-950 flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                      aria-label="Open WISAL Invitations"
                    >
                      <ArrowIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SERVICE B: WISAL AHD */}
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#2D0A18]/80 via-plum-900/40 to-plum-950 border border-rose-500/30 shadow-luxury-card relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-80 h-80 bg-rose-500/10 blur-[90px] rounded-full pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Visual Showcase Card (On Left for editorial alternate cadence) */}
              <div className="lg:col-span-5 order-2 lg:order-1 relative">
                <div className="relative rounded-2xl overflow-hidden border border-rose-500/30 shadow-2xl bg-plum-950 group-hover:border-rose-400/50 transition-colors">
                  <img
                    src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1000&q=80"
                    alt="WISAL AHD Romantic Digital Gift"
                    className="w-full h-80 object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum-950 via-plum-950/40 to-transparent"></div>

                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-5 inset-x-5 p-4 rounded-xl bg-plum-900/90 backdrop-blur-md border border-rose-500/30 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-rose-400 font-semibold font-playfair uppercase">
                        {language === 'ar' ? 'منصة عَهد للهدايا الرقمية' : 'WISAL AHD Platform'}
                      </div>
                      <div className="text-sm font-bold text-ivory-100 font-amiri mt-0.5">
                        {language === 'ar' ? 'مشغل أسطوانة وألبوم ذكريات' : 'Vinyl Player & Memories'}
                      </div>
                    </div>

                    <a
                      href={siteConfig.destinations.ahd}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-rose-500 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                      aria-label="Open WISAL AHD"
                    >
                      <ArrowIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Text & Features */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-semibold mb-4">
                  <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                  <span>{t.services.serviceB.badge}</span>
                </div>

                <h3 className="font-amiri text-3xl sm:text-4xl font-bold text-ivory-100 mb-3">
                  {t.services.serviceB.title}
                </h3>

                <p className="text-rose-300 font-playfair italic text-lg sm:text-xl mb-4 font-light">
                  {t.services.serviceB.tagline}
                </p>

                <p className="text-ivory-300 font-tajawal text-sm sm:text-base leading-relaxed mb-6">
                  {t.services.serviceB.description}
                </p>

                {/* Romantic Highlights */}
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 rounded-lg bg-plum-950/80 border border-rose-500/20 text-xs text-ivory-300 flex items-center gap-1.5">
                    <Music className="w-3 h-3 text-rose-400" />
                    {language === 'ar' ? 'أغنيتكم الخاصة من YouTube' : 'YouTube Song Player'}
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-plum-950/80 border border-rose-500/20 text-xs text-ivory-300 flex items-center gap-1.5">
                    <Heart className="w-3 h-3 text-rose-400" />
                    {language === 'ar' ? 'معرض صور بولارويد' : 'Polaroid Gallery'}
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-plum-950/80 border border-rose-500/20 text-xs text-ivory-300 flex items-center gap-1.5">
                    <Share2 className="w-3 h-3 text-rose-400" />
                    {language === 'ar' ? 'مفاجأة سريعة عبر واتساب' : 'WhatsApp Surprise'}
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-plum-950/80 border border-rose-500/20 text-xs text-ivory-300 flex items-center gap-1.5">
                    <Lock className="w-3 h-3 text-rose-400" />
                    {language === 'ar' ? 'خصوصية وأمان 100%' : '100% Private & Secure'}
                  </span>
                </div>

                {/* Key Features Bullet List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {t.services.serviceB.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-ivory-200 font-tajawal">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={siteConfig.destinations.ahd}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackProductRedirect('ahd', siteConfig.destinations.ahd)}
                    className="px-7 py-3.5 rounded-full bg-gradient-to-r from-rose-500 via-rose-600 to-rose-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-rose-950/50 hover:brightness-110 transition-all duration-300 flex items-center gap-2 group/btn"
                  >
                    <span>{t.services.serviceB.cta}</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  </a>

                  <button
                    onClick={() => onOpenOrderModal('ahd')}
                    className="px-6 py-3.5 rounded-full border border-rose-500/40 hover:bg-rose-500/10 text-rose-300 font-semibold text-sm transition-all"
                  >
                    {language === 'ar' ? 'طلب موقع رومانسي' : 'Commission Romantic Site'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
