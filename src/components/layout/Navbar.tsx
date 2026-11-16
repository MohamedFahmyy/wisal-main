import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { Menu, X, Sparkles, MessageCircle, Globe, Sun, Moon } from 'lucide-react';
import { siteConfig } from '../../config/site.config';

interface NavbarProps {
  onOpenOrderModal: (service?: 'invitations' | 'ahd') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const { t, language, toggleLanguage } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.howItWorks, href: '#how-it-works' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.pricing, href: '#pricing' },
    { label: t.nav.whyUs, href: '#why-us' },
    { label: t.nav.faq, href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory-100/90 dark:bg-plum-950/85 backdrop-blur-md border-b border-gold-500/20 py-3 shadow-md dark:shadow-luxury-card'
          : 'bg-gradient-to-b from-ivory-100/90 via-ivory-50/60 to-transparent dark:from-plum-950/90 dark:via-plum-950/50 dark:to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Monogram */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="WISAL Home"
          >
            {/* Official Logo Emblem */}
            <div className="relative p-1 rounded-2xl bg-gradient-to-b from-gold-50/80 to-ivory-200/80 dark:from-plum-900/60 dark:to-plum-950/80 border border-gold-500/30 group-hover:border-gold-400/60 shadow-sm dark:shadow-gold-glow group-hover:scale-105 transition-all duration-300">
              <img
                src={siteConfig.brand.logo}
                alt="WISAL | وِصال"
                className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(197,160,89,0.35)]"
              />
            </div>

            {/* Typography */}
            <div className="hidden sm:flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-amiri text-2xl font-bold tracking-wider text-plum-900 dark:text-ivory-100 group-hover:text-gold-600 dark:group-hover:text-gold-300 transition-colors">
                  وِصَـال
                </span>
                <span className="text-gold-500/60 font-light text-sm">|</span>
                <span className="font-playfair text-sm tracking-widest text-gold-600 dark:text-gold-400 font-semibold uppercase">
                  WISAL
                </span>
              </div>
              <span className="text-[10px] text-plum-700/80 dark:text-ivory-400/80 tracking-tight font-tajawal">
                {language === 'ar' ? siteConfig.brand.taglineAr : siteConfig.brand.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-plum-800 dark:text-ivory-300 hover:text-gold-600 dark:hover:text-gold-300 hover:bg-gold-500/10 rounded-full transition-all duration-200 font-medium font-tajawal"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs, Language & Theme Switcher */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Theme Toggle (Dark / Light) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-gold-500/30 bg-ivory-200/80 dark:bg-plum-900/60 hover:bg-gold-500/15 text-gold-600 dark:text-gold-300 text-xs font-semibold hover:border-gold-400 transition-all duration-200 shadow-sm"
              title={
                isDark
                  ? language === 'ar'
                    ? 'التبديل إلى الوضع النهاري'
                    : 'Switch to Light Mode'
                  : language === 'ar'
                  ? 'التبديل إلى الوضع الليلي'
                  : 'Switch to Dark Mode'
              }
              aria-label="Toggle Theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-gold-300 animate-spin-slow" />
              ) : (
                <Moon className="w-4 h-4 text-plum-800" />
              )}
            </button>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold-500/30 bg-ivory-200/80 dark:bg-plum-900/60 hover:bg-gold-500/15 text-plum-900 dark:text-gold-300 text-xs font-semibold tracking-wider hover:border-gold-400 transition-all duration-200 shadow-sm"
              title="Toggle Language (العربية / English)"
            >
              <Globe className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
              <span>{t.nav.langToggle}</span>
            </button>

            {/* Primary Order CTA */}
            <button
              onClick={() => onOpenOrderModal()}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-plum-950 font-semibold text-sm shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 active:scale-95 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-plum-950 animate-pulse" />
              <span>{t.nav.cta}</span>
              <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-[-100%] transition-transform duration-700 ease-in-out"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full border border-gold-500/40 text-gold-600 dark:text-gold-300"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-gold-300" /> : <Moon className="w-4 h-4 text-plum-800" />}
            </button>

            {/* Quick Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1 rounded-full border border-gold-500/40 text-plum-900 dark:text-gold-300 text-xs font-semibold"
            >
              {t.nav.langToggle}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gold-600 dark:text-gold-400 hover:text-gold-800 dark:hover:text-gold-200 hover:bg-gold-500/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-ivory-50/98 dark:bg-plum-950/98 backdrop-blur-xl border-b border-gold-500/30 px-5 pt-3 pb-6 animate-fadeIn shadow-2xl">
          <nav className="flex flex-col gap-2 mb-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base text-plum-900 dark:text-ivory-200 hover:text-gold-600 dark:hover:text-gold-300 hover:bg-gold-500/10 rounded-xl transition-all font-tajawal font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-3 border-t border-gold-500/20">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-plum-950 font-bold text-center shadow-gold-glow flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-plum-950" />
              <span>{t.nav.cta}</span>
            </button>

            <a
              href={`https://wa.me/${siteConfig.whatsapp.phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-full border border-gold-500/40 text-plum-900 dark:text-gold-300 text-center font-semibold text-sm flex items-center justify-center gap-2 hover:bg-gold-500/10"
            >
              <MessageCircle className="w-4 h-4 text-emerald-500" />
              <span>{language === 'ar' ? 'تواصل عبر واتساب' : 'Chat via WhatsApp'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
