import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Heart,
  Music,
  MapPin,
  Calendar,
  Play,
  Pause,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { siteConfig } from '../../config/site.config';
import { trackProductRedirect } from '../../utils/analytics';

interface HeroProps {
  onOpenOrderModal: (service?: 'invitations' | 'ahd') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal }) => {
  const { t, isRTL, language } = useLanguage();
  const [isPlayingSong, setIsPlayingSong] = useState(true);
  const [activeTab, setActiveTab] = useState<'both' | 'invitations' | 'ahd'>('both');

  // Countdown timer mockup logic for Mazen & Farida
  const [countdown, setCountdown] = useState({
    days: 42,
    hours: 18,
    minutes: 35,
    seconds: 40,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden flex flex-col justify-center transition-colors duration-300"
    >
      {/* Background Ambience: Luxury Radial Glow & Deep Plum / Velvet gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory-100 via-ivory-50 to-ivory-200 dark:from-plum-950 dark:via-[#1A050E] dark:to-plum-950 -z-20 transition-colors duration-300"></div>
      
      {/* Subtle Gold Shimmer Spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gold-500/10 blur-[140px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-rose-500/10 dark:bg-rose-900/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      {/* Subtle Golden Grid / Star Accent Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(197,160,89,0.15),rgba(255,255,255,0))] -z-15"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Eyebrow Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/40 bg-ivory-200/90 dark:bg-plum-900/70 backdrop-blur-md shadow-sm dark:shadow-gold-glow animate-float">
            <Sparkles className="w-4 h-4 text-gold-600 dark:text-gold-400 animate-spin-slow" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-plum-900 dark:text-gold-200 font-tajawal">
              {t.hero.badge}
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="font-amiri text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-plum-950 dark:text-ivory-50 leading-[1.25] sm:leading-[1.2]">
            <span className="block">{t.hero.headline}</span>
            <span className="bg-gradient-to-r from-gold-600 via-gold-500 to-gold-700 dark:from-gold-300 dark:via-gold-400 dark:to-gold-200 bg-clip-text text-transparent italic font-playfair font-normal block mt-2 text-3xl sm:text-5xl lg:text-6xl">
              Every Connection Has a Story
            </span>
          </h1>
        </div>

        {/* Description */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-base sm:text-lg lg:text-xl text-plum-800 dark:text-ivory-300 leading-relaxed font-tajawal font-light">
            {t.hero.description}
          </p>
        </div>

        {/* Dual Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => onOpenOrderModal()}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-plum-950 font-bold text-base sm:text-lg shadow-gold-glow hover:shadow-gold-glow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <span>{t.hero.ctaPrimary}</span>
            <ArrowIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
          </button>

          <a
            href="#services"
            className="w-full sm:w-auto px-7 py-4 rounded-full border border-gold-500/40 bg-white/80 dark:bg-plum-900/50 hover:bg-gold-500/10 text-plum-900 dark:text-gold-200 font-medium text-base sm:text-lg backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 group shadow-sm"
          >
            <span>{t.hero.ctaSecondary}</span>
          </a>
        </div>

        {/* Visual Showcase Mockup Section: Both Products Brought to Life */}
        <div className="relative max-w-5xl mx-auto mt-6">
          {/* Mockup switcher pills on small screens */}
          <div className="flex justify-center mb-6 sm:hidden">
            <div className="inline-flex p-1 rounded-full bg-ivory-200/90 dark:bg-plum-900/80 border border-gold-500/30">
              <button
                onClick={() => setActiveTab('both')}
                className={`px-3 py-1 text-xs rounded-full transition-all ${
                  activeTab === 'both' ? 'bg-gold-500 text-plum-950 font-bold' : 'text-plum-800 dark:text-ivory-300'
                }`}
              >
                {language === 'ar' ? 'الكل' : 'All'}
              </button>
              <button
                onClick={() => setActiveTab('invitations')}
                className={`px-3 py-1 text-xs rounded-full transition-all ${
                  activeTab === 'invitations' ? 'bg-gold-500 text-plum-950 font-bold' : 'text-plum-800 dark:text-ivory-300'
                }`}
              >
                {language === 'ar' ? 'الدعوات' : 'Invitations'}
              </button>
              <button
                onClick={() => setActiveTab('ahd')}
                className={`px-3 py-1 text-xs rounded-full transition-all ${
                  activeTab === 'ahd' ? 'bg-gold-500 text-plum-950 font-bold' : 'text-plum-800 dark:text-ivory-300'
                }`}
              >
                {language === 'ar' ? 'عَهد' : 'Ahd'}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* PRODUCT MOCKUP 1: WISAL Invitations (Royal Wax Seal & Live Countdown) */}
            {(activeTab === 'both' || activeTab === 'invitations') && (
              <div className="relative group rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-white/95 via-ivory-100/90 to-ivory-200/80 dark:from-plum-900/90 dark:via-plum-900/60 dark:to-plum-950/90 border border-gold-500/30 shadow-lg dark:shadow-luxury-card hover:border-gold-400/60 transition-all duration-500 flex flex-col justify-between">
                {/* Product Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-gold-500 animate-ping"></span>
                    <span className="text-xs uppercase tracking-wider text-gold-700 dark:text-gold-300 font-semibold font-playfair">
                      WISAL INVITATIONS
                    </span>
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-gold-500/15 text-gold-800 dark:text-gold-300 border border-gold-500/30 font-medium">
                    {language === 'ar' ? 'نموذج حي: مازن & فريدة' : 'Live: Mazen & Farida'}
                  </span>
                </div>

                {/* Simulated Wax Seal Interactive Card */}
                <div className="relative rounded-2xl overflow-hidden border border-gold-500/25 bg-ivory-50/90 dark:bg-plum-950/80 p-5 mb-5 shadow-sm dark:shadow-inner">
                  {/* Decorative corner ornaments */}
                  <div className="absolute top-2 left-2 text-gold-600/50 dark:text-gold-500/40 text-xs">✦</div>
                  <div className="absolute top-2 right-2 text-gold-600/50 dark:text-gold-500/40 text-xs">✦</div>
                  <div className="absolute bottom-2 left-2 text-gold-600/50 dark:text-gold-500/40 text-xs">✦</div>
                  <div className="absolute bottom-2 right-2 text-gold-600/50 dark:text-gold-500/40 text-xs">✦</div>

                  <div className="text-center pt-2 pb-3">
                    <span className="text-xs tracking-widest text-gold-700 dark:text-gold-400 uppercase font-tajawal">
                      {language === 'ar' ? 'عقد قران وحفل زفاف' : 'Wedding Celebration'}
                    </span>
                    <h3 className="font-amiri text-2xl sm:text-3xl font-bold text-plum-950 dark:text-ivory-100 my-1">
                      مازن & فريدة
                    </h3>
                    <p className="text-xs text-plum-700 dark:text-ivory-400 font-tajawal">
                      {language === 'ar'
                        ? 'حكاية حب ولقاء يكتمل بحضوركم الغالي'
                        : 'A story of love made whole by your presence'}
                    </p>
                  </div>

                  {/* 3D Wax Seal Monogram Visual */}
                  <div className="flex justify-center my-3">
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#8A1A2D] via-[#660C1B] to-[#3B050E] border-2 border-gold-400/60 shadow-[0_0_20px_rgba(138,26,45,0.6)] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                      <div className="absolute inset-1 rounded-full border border-gold-400/30"></div>
                      <span className="font-amiri text-3xl font-bold text-gold-200">وِصال</span>
                      <div className="absolute -bottom-1 -right-1 bg-gold-500 text-plum-950 rounded-full p-0.5 text-[9px] font-bold">
                        ✓
                      </div>
                    </div>
                  </div>

                  {/* Live Countdown Simulation */}
                  <div className="grid grid-cols-4 gap-2 text-center my-4">
                    <div className="bg-white dark:bg-plum-900/60 p-2 rounded-lg border border-gold-500/20 shadow-sm">
                      <div className="font-bold text-base sm:text-lg text-gold-700 dark:text-gold-300 font-mono">
                        {countdown.days}
                      </div>
                      <div className="text-[10px] text-plum-700 dark:text-ivory-400">{language === 'ar' ? 'يوم' : 'Days'}</div>
                    </div>
                    <div className="bg-white dark:bg-plum-900/60 p-2 rounded-lg border border-gold-500/20 shadow-sm">
                      <div className="font-bold text-base sm:text-lg text-gold-700 dark:text-gold-300 font-mono">
                        {countdown.hours}
                      </div>
                      <div className="text-[10px] text-plum-700 dark:text-ivory-400">{language === 'ar' ? 'ساعة' : 'Hours'}</div>
                    </div>
                    <div className="bg-white dark:bg-plum-900/60 p-2 rounded-lg border border-gold-500/20 shadow-sm">
                      <div className="font-bold text-base sm:text-lg text-gold-700 dark:text-gold-300 font-mono">
                        {countdown.minutes}
                      </div>
                      <div className="text-[10px] text-plum-700 dark:text-ivory-400">{language === 'ar' ? 'دقيقة' : 'Mins'}</div>
                    </div>
                    <div className="bg-white dark:bg-plum-900/60 p-2 rounded-lg border border-gold-500/20 shadow-sm">
                      <div className="font-bold text-base sm:text-lg text-gold-600 dark:text-gold-400 font-mono animate-pulse">
                        {countdown.seconds}
                      </div>
                      <div className="text-[10px] text-plum-700 dark:text-ivory-400">{language === 'ar' ? 'ثانية' : 'Secs'}</div>
                    </div>
                  </div>

                  {/* Venue snippet */}
                  <div className="flex items-center justify-between text-xs text-plum-800 dark:text-ivory-300 border-t border-gold-500/20 pt-3">
                    <div className="flex items-center gap-1.5 text-gold-700 dark:text-gold-300 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
                      <span>{language === 'ar' ? 'قاعة الياسمين — كورنيش النيل' : 'Al-Yasmine Banquet Hall'}</span>
                    </div>
                    <div className="flex items-center gap-1 text-plum-600 dark:text-ivory-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>14 Jan 2027</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Direct Redirect / Preview */}
                <div className="flex items-center justify-between gap-3 pt-2">
                  <a
                    href={siteConfig.destinations.invitations}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackProductRedirect('invitations', siteConfig.destinations.invitations)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-gold-500/10 hover:bg-gold-500/20 text-gold-700 dark:text-gold-300 border border-gold-500/30 text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>{t.services.serviceA.cta}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => onOpenOrderModal('invitations')}
                    className="py-2.5 px-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-plum-950 text-xs sm:text-sm font-bold transition-all shadow-gold-glow"
                  >
                    {language === 'ar' ? 'طلب دعوة ⚡' : 'Order Invite ⚡'}
                  </button>
                </div>
              </div>
            )}

            {/* PRODUCT MOCKUP 2: WISAL AHD (Romantic Vinyl Player & Memories) */}
            {(activeTab === 'both' || activeTab === 'ahd') && (
              <div className="relative group rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-white/95 via-rose-50/70 to-ivory-200/80 dark:from-plum-900/90 dark:via-[#2E0B19]/70 dark:to-plum-950/90 border border-rose-500/30 shadow-lg dark:shadow-luxury-card hover:border-rose-400/60 transition-all duration-500 flex flex-col justify-between">
                {/* Product Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
                    <span className="text-xs uppercase tracking-wider text-rose-700 dark:text-rose-300 font-semibold font-playfair">
                      WISAL AHD • عَهـد
                    </span>
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-rose-500/15 text-rose-700 dark:text-rose-300 border border-rose-500/30 font-medium">
                    {language === 'ar' ? 'هدايا رقمية رومانسية' : 'Romantic Digital Gift'}
                  </span>
                </div>

                {/* Simulated Vinyl Record & Song Player Card */}
                <div className="relative rounded-2xl overflow-hidden border border-rose-500/20 bg-white/95 dark:bg-plum-950/80 p-5 mb-5 shadow-sm dark:shadow-inner">
                  <div className="flex items-center gap-4">
                    {/* Spinning Vinyl Phonograph Record */}
                    <div className="relative flex-shrink-0">
                      <div
                        className={`w-24 h-24 rounded-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-black border-2 border-neutral-700 shadow-2xl flex items-center justify-center ${
                          isPlayingSong ? 'animate-spin-slow' : ''
                        }`}
                        style={{ animationDuration: '8s' }}
                      >
                        {/* Grooves */}
                        <div className="absolute inset-2 rounded-full border border-neutral-700/50"></div>
                        <div className="absolute inset-4 rounded-full border border-neutral-700/40"></div>
                        <div className="absolute inset-6 rounded-full border border-neutral-700/30"></div>

                        {/* Center Vinyl Label */}
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-600 to-rose-900 border border-gold-400 flex items-center justify-center">
                          <Heart className="w-3.5 h-3.5 text-gold-200 fill-gold-200" />
                        </div>
                      </div>

                      {/* Floating Play/Pause indicator */}
                      <button
                        onClick={() => setIsPlayingSong(!isPlayingSong)}
                        className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                        aria-label="Toggle song"
                      >
                        {isPlayingSong ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                      </button>
                    </div>

                    {/* Story & Song Meta */}
                    <div className="flex-1 min-w-0">
                      <div className="inline-flex items-center gap-1 text-[11px] text-rose-600 dark:text-rose-300 font-semibold mb-1">
                        <Music className="w-3 h-3 text-rose-500" />
                        <span>{language === 'ar' ? 'أغنيتنا المفضلة' : 'Our Special Song'}</span>
                      </div>
                      <h4 className="font-amiri text-lg text-plum-950 dark:text-ivory-100 truncate font-bold">
                        {language === 'ar' ? 'حكايتنا اللي هتفضل عايشة' : 'Our Timeless Love Story'}
                      </h4>
                      <p className="text-xs text-plum-700 dark:text-ivory-400 font-tajawal mt-1 line-clamp-2">
                        {language === 'ar'
                          ? 'صفحة خاصة تجمع صوركم، رسالة حب من القلب، ورابط مفاجأة يُرسل في ثوانٍ.'
                          : 'A secret sanctuary with your photos, love letter, and an instant surprise link.'}
                      </p>
                    </div>
                  </div>

                  {/* Polaroid Memory Preview Snippet */}
                  <div className="mt-4 pt-3 border-t border-rose-500/20 flex items-center justify-between text-xs text-plum-800 dark:text-ivory-300">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                      <span>{language === 'ar' ? 'معرض صور بولارويد غير محدود' : 'Polaroid Memories Gallery'}</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 border border-rose-500/30 font-medium">
                      9 {language === 'ar' ? 'قوالب' : 'Themes'}
                    </span>
                  </div>
                </div>

                {/* Bottom Direct Redirect / Preview */}
                <div className="flex items-center justify-between gap-3 pt-2">
                  <a
                    href={siteConfig.destinations.ahd}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackProductRedirect('ahd', siteConfig.destinations.ahd)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-700 dark:text-rose-300 border border-rose-500/30 text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>{t.services.serviceB.cta}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => onOpenOrderModal('ahd')}
                    className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-400 hover:to-rose-500 text-white text-xs sm:text-sm font-bold transition-all shadow-md"
                  >
                    {language === 'ar' ? 'اصنع هديتك ❤️' : 'Craft Gift ❤️'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Value Proof Badges under Hero */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-16 pt-10 border-t border-gold-500/15">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gold-500/15 flex items-center justify-center text-gold-600 dark:text-gold-400 flex-shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div className="text-xs sm:text-sm text-plum-900 dark:text-ivory-300 font-medium font-tajawal">
              {t.hero.stats.invites}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-rose-500/15 dark:bg-gold-500/15 flex items-center justify-center text-rose-600 dark:text-gold-400 flex-shrink-0">
              <Heart className="w-4 h-4 text-rose-500 dark:text-rose-400" />
            </div>
            <div className="text-xs sm:text-sm text-plum-900 dark:text-ivory-300 font-medium font-tajawal">
              {t.hero.stats.couples}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gold-500/15 flex items-center justify-center text-gold-600 dark:text-gold-400 flex-shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-xs sm:text-sm text-plum-900 dark:text-ivory-300 font-medium font-tajawal">
              {t.hero.stats.speed}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="text-xs sm:text-sm text-plum-900 dark:text-ivory-300 font-medium font-tajawal">
              {t.hero.stats.privacy}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
