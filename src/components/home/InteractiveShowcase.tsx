import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { showcaseProducts } from '../../data/products';
import { ProductItem } from '../../types';
import {
  Sparkles,
  Eye,
  Check,
  ShoppingBag,
  Heart,
  Mail,
} from 'lucide-react';
import { trackProductRedirect } from '../../utils/analytics';

interface InteractiveShowcaseProps {
  onSelectProductForPreview: (product: ProductItem) => void;
  onOpenOrderModal: (service?: 'invitations' | 'ahd', templateName?: string) => void;
}

export const InteractiveShowcase: React.FC<InteractiveShowcaseProps> = ({
  onSelectProductForPreview,
  onOpenOrderModal,
}) => {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'invitations' | 'ahd'>('all');

  const filteredProducts = showcaseProducts.filter((product) => {
    if (filter === 'all') return true;
    return product.category === filter;
  });

  return (
    <section id="showcase" className="py-24 bg-ivory-50 dark:bg-[#140409] relative overflow-hidden transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gold-500/5 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-500/30 bg-ivory-200/80 dark:bg-plum-900/60 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
            <span className="text-xs uppercase tracking-widest text-gold-700 dark:text-gold-300 font-semibold font-playfair">
              {t.showcase.eyebrow}
            </span>
          </div>

          <h2 className="font-amiri text-3xl sm:text-5xl font-bold text-plum-950 dark:text-ivory-50 mb-4 leading-tight">
            {t.showcase.title}
          </h2>

          <p className="text-plum-800 dark:text-ivory-300 text-sm sm:text-base font-light leading-relaxed font-tajawal">
            {t.showcase.subtitle}
          </p>

          {/* Filter Tabs */}
          <div className="inline-flex p-1.5 rounded-full bg-ivory-200/90 dark:bg-plum-900/90 border border-gold-500/30 mt-8 shadow-inner">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-plum-950 shadow-gold-glow'
                  : 'text-plum-800 dark:text-ivory-300 hover:text-gold-600 dark:hover:text-gold-300'
              }`}
            >
              {t.showcase.tabAll}
            </button>
            <button
              onClick={() => setFilter('invitations')}
              className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                filter === 'invitations'
                  ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-plum-950 shadow-gold-glow'
                  : 'text-plum-800 dark:text-ivory-300 hover:text-gold-600 dark:hover:text-gold-300'
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{t.showcase.tabInvitations}</span>
            </button>
            <button
              onClick={() => setFilter('ahd')}
              className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                filter === 'ahd'
                  ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-md'
                  : 'text-plum-800 dark:text-ivory-300 hover:text-rose-600 dark:hover:text-rose-300'
              }`}
            >
              <Heart className="w-3.5 h-3.5" />
              <span>{t.showcase.tabAhd}</span>
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const isAhd = product.category === 'ahd';
            const title = language === 'ar' ? product.title : product.titleEn;
            const subtitle = language === 'ar' ? product.subtitle : product.subtitleEn;
            const desc = language === 'ar' ? product.description : product.descriptionEn;
            const badge = language === 'ar' ? product.badge : product.badgeEn;
            const features = language === 'ar' ? product.features : product.featuresEn;
            const subCategory = language === 'ar' ? product.subCategory : product.subCategoryEn;

            return (
              <div
                key={product.id}
                className={`rounded-3xl overflow-hidden bg-white dark:bg-plum-900/60 border ${
                  isAhd ? 'border-rose-500/25 hover:border-rose-400/60' : 'border-gold-500/25 hover:border-gold-400/60'
                } shadow-md dark:shadow-luxury-card hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between group`}
              >
                <div>
                  {/* Card Visual Header with Badge */}
                  <div className="relative h-56 sm:h-64 overflow-hidden bg-plum-950">
                    <img
                      src={product.image}
                      alt={title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-plum-950 via-plum-950/30 to-transparent"></div>

                    {/* Category & Badge */}
                    <div className="absolute top-4 inset-x-4 flex items-center justify-between">
                      <span
                        className={`text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-md ${
                          isAhd
                            ? 'bg-rose-950/80 text-rose-300 border border-rose-500/40'
                            : 'bg-plum-950/80 text-gold-300 border border-gold-500/40'
                        }`}
                      >
                        {subCategory}
                      </span>

                      {badge && (
                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-gold-500 text-plum-950 shadow-sm font-tajawal">
                          {badge}
                        </span>
                      )}
                    </div>

                    {/* Subtitle pill */}
                    <div className="absolute bottom-3 inset-x-4">
                      <span className="text-xs text-gold-200 font-medium bg-plum-950/90 backdrop-blur-sm px-2.5 py-1 rounded-md border border-gold-500/20 inline-block font-tajawal truncate max-w-full">
                        {subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="font-amiri text-2xl font-bold text-plum-950 dark:text-ivory-100 mb-2 group-hover:text-gold-600 dark:group-hover:text-gold-300 transition-colors">
                      {title}
                    </h3>

                    <p className="text-plum-800 dark:text-ivory-300/90 text-xs sm:text-sm font-tajawal line-clamp-2 leading-relaxed mb-5">
                      {desc}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2 mb-6 pt-3 border-t border-gold-500/15">
                      {features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check
                            className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                              isAhd ? 'text-rose-500 dark:text-rose-400' : 'text-gold-600 dark:text-gold-400'
                            }`}
                          />
                          <span className="text-xs text-plum-900 dark:text-ivory-200 font-tajawal leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-6 pt-0 space-y-2.5">
                  <div className="grid grid-cols-2 gap-2">
                    {/* Preview Button */}
                    <button
                      onClick={() => onSelectProductForPreview(product)}
                      className="py-2.5 px-3 rounded-xl border border-gold-500/30 hover:bg-gold-500/15 text-gold-700 dark:text-gold-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{language === 'ar' ? 'معاينة' : 'Preview'}</span>
                    </button>

                    {/* Order Button */}
                    <button
                      onClick={() => onOpenOrderModal(product.category, title)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                        isAhd
                          ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-md'
                          : 'bg-gold-500 hover:bg-gold-400 text-plum-950 shadow-gold-glow'
                      }`}
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>{language === 'ar' ? 'اطلب الآن' : 'Order Now'}</span>
                    </button>
                  </div>

                  {/* External Live Link */}
                  <a
                    href={product.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackProductRedirect(product.category, product.previewUrl)}
                    className="w-full py-1.5 text-center text-[11px] text-plum-700 dark:text-ivory-400 hover:text-gold-700 dark:hover:text-gold-300 flex items-center justify-center gap-1 transition-colors font-medium"
                  >
                    <span>{t.showcase.liveAppBtn}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Authentic Notice */}
        <div className="text-center mt-12">
          <p className="text-xs text-plum-700 dark:text-ivory-400 font-tajawal flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
            <span>{t.showcase.authenticNotice}</span>
          </p>
        </div>
      </div>
    </section>
  );
};
