import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { siteConfig } from '../../config/site.config';
import {
  Heart,
  Mail,
  MessageCircle,
  ExternalLink,
  Instagram,
  Facebook,
} from 'lucide-react';
import { trackProductRedirect } from '../../utils/analytics';

interface FooterProps {
  onOpenPolicyModal: (type: 'privacy' | 'terms') => void;
  onOpenOrderModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicyModal, onOpenOrderModal }) => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-plum-950 border-t border-gold-500/20 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gold-500/15">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-2xl bg-plum-900/80 border border-gold-500/30 shadow-gold-glow">
                <img
                  src={siteConfig.brand.logo}
                  alt="WISAL | وِصال"
                  className="h-14 w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(237,220,183,0.35)]"
                />
              </div>
            </div>

            <p className="text-gold-300 font-playfair italic text-sm font-light">
              "{language === 'ar' ? siteConfig.brand.taglineAr : siteConfig.brand.tagline}"
            </p>

            <p className="text-xs sm:text-sm text-ivory-300 font-tajawal leading-relaxed max-w-sm">
              {t.footer.brandDesc}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-plum-900/80 border border-gold-500/30 flex items-center justify-center text-gold-400 hover:text-gold-200 hover:border-gold-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-plum-900/80 border border-gold-500/30 flex items-center justify-center text-gold-400 hover:text-gold-200 hover:border-gold-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-plum-900/80 border border-gold-500/30 flex items-center justify-center text-gold-400 hover:text-emerald-400 hover:border-emerald-400 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-amiri text-lg font-bold text-ivory-100 border-b border-gold-500/20 pb-2">
              {t.footer.productsTitle}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-ivory-300 font-tajawal">
              <li>
                <a
                  href={siteConfig.destinations.invitations}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackProductRedirect('invitations', siteConfig.destinations.invitations)}
                  className="hover:text-gold-300 transition-colors flex items-center gap-1.5"
                >
                  <span>{t.footer.service1Link}</span>
                  <ExternalLink className="w-3 h-3 text-gold-400" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.destinations.ahd}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackProductRedirect('ahd', siteConfig.destinations.ahd)}
                  className="hover:text-gold-300 transition-colors flex items-center gap-1.5"
                >
                  <span>{t.footer.service2Link}</span>
                  <ExternalLink className="w-3 h-3 text-rose-400" />
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenOrderModal}
                  className="hover:text-gold-300 transition-colors text-start"
                >
                  {language === 'ar' ? 'طلب تصميم حصري' : 'Commission Custom Design'}
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Platform Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-amiri text-lg font-bold text-ivory-100 border-b border-gold-500/20 pb-2">
              {t.footer.linksTitle}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-ivory-300 font-tajawal">
              <li>
                <a href="#services" className="hover:text-gold-300 transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-gold-300 transition-colors">
                  {t.nav.howItWorks}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold-300 transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-gold-300 transition-colors">
                  {t.nav.pricing}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gold-300 transition-colors">
                  {t.nav.faq}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-amiri text-lg font-bold text-ivory-100 border-b border-gold-500/20 pb-2">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-ivory-300 font-tajawal">
              <li className="flex items-center gap-2 text-ivory-300">
                <Mail className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-gold-300 truncate">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-ivory-300">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.phoneNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-300"
                >
                  {siteConfig.whatsapp.displayPhoneNumber}
                </a>
              </li>
              <li className="text-xs text-ivory-400 pt-1">
                {language === 'ar' ? siteConfig.brand.originAr : siteConfig.brand.origin}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Policies */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-400 font-tajawal">
          <div className="flex items-center gap-1 text-center sm:text-start">
            <span>{t.footer.copyright} {siteConfig.brand.established} — 2026.</span>
            <span>•</span>
            <span className="inline-flex items-center gap-1 text-gold-300">
              {t.footer.madeWithLove}
              <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline" />
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenPolicyModal('privacy')}
              className="hover:text-gold-300 transition-colors underline-offset-4 hover:underline"
            >
              {t.footer.privacy}
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenPolicyModal('terms')}
              className="hover:text-gold-300 transition-colors underline-offset-4 hover:underline"
            >
              {t.footer.terms}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
