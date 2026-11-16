import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ProductItem } from '../../types';
import { X, ExternalLink, Check, ShoppingBag, Sparkles, Heart } from 'lucide-react';
import { trackProductRedirect } from '../../utils/analytics';

interface PreviewModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onOrder: (service: 'invitations' | 'ahd', templateName: string) => void;
}

export const PreviewModal: React.FC<PreviewModalProps> = ({ product, onClose, onOrder }) => {
  const { language } = useLanguage();

  if (!product) return null;

  const isAhd = product.category === 'ahd';
  const title = language === 'ar' ? product.title : product.titleEn;
  const subtitle = language === 'ar' ? product.subtitle : product.subtitleEn;
  const desc = language === 'ar' ? product.description : product.descriptionEn;
  const features = language === 'ar' ? product.features : product.featuresEn;
  const tags = language === 'ar' ? product.tags : product.tagsEn;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-b from-white via-ivory-50 to-ivory-100 dark:from-plum-900 dark:via-plum-950 dark:to-black border border-gold-500/40 p-6 sm:p-8 shadow-2xl transition-colors duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-ivory-200 dark:bg-plum-800/80 hover:bg-gold-500/20 text-plum-800 dark:text-ivory-300 transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Visual Cover */}
        <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 border border-gold-500/30">
          <img
            src={product.image}
            alt={title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

          <div className="absolute bottom-4 inset-x-4 flex items-center justify-between">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold ${
                isAhd
                  ? 'bg-rose-950/90 text-rose-300 border border-rose-500/40'
                  : 'bg-plum-950/90 text-gold-300 border border-gold-500/40'
              }`}
            >
              {isAhd ? 'WISAL AHD' : 'WISAL INVITATIONS'}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div>
            <span className="text-xs text-gold-700 dark:text-gold-400 font-semibold uppercase tracking-wider font-tajawal">
              {subtitle}
            </span>
            <h3 className="font-amiri text-2xl sm:text-3xl font-bold text-plum-950 dark:text-ivory-50 mt-1">
              {title}
            </h3>
          </div>

          <p className="text-sm text-plum-800 dark:text-ivory-300 font-tajawal leading-relaxed">
            {desc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-ivory-200/90 dark:bg-plum-900/60 border border-gold-500/20 text-xs text-gold-800 dark:text-gold-300 font-tajawal"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Key Features List */}
          <div className="pt-4 border-t border-gold-500/20">
            <h4 className="text-xs uppercase font-bold text-gold-700 dark:text-gold-400 tracking-wider mb-3 font-playfair flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'مميزات هذا التصميم' : 'Design Highlights'}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-gold-500/20 text-gold-700 dark:text-gold-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-xs text-plum-900 dark:text-ivory-200 font-tajawal leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-6 border-t border-gold-500/20 flex flex-col sm:flex-row gap-3">
            <a
              href={product.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackProductRedirect(product.category, product.previewUrl)}
              className="flex-1 py-3 px-4 rounded-full border border-gold-500/40 hover:bg-gold-500/10 text-gold-800 dark:text-gold-300 font-semibold text-xs sm:text-sm text-center flex items-center justify-center gap-2 transition-colors"
            >
              <span>{language === 'ar' ? 'فتح التجربة الحية في الموقع الرسمي ↗' : 'Open in Live Platform ↗'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={() => {
                onClose();
                onOrder(product.category, title);
              }}
              className={`py-3 px-6 rounded-full font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-2 transition-all ${
                isAhd
                  ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-md'
                  : 'bg-gold-500 hover:bg-gold-400 text-plum-950 shadow-gold-glow'
              }`}
            >
              {isAhd ? <Heart className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
              <span>{language === 'ar' ? 'اطلب هذا التصميم الآن' : 'Order This Design'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
