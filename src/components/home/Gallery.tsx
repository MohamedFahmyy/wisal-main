import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { galleryItems } from '../../data/products';
import { GalleryCategory } from '../../types';
import {
  Sparkles,
  ExternalLink,
  ShoppingBag,
} from 'lucide-react';
import { trackProductRedirect } from '../../utils/analytics';

interface GalleryProps {
  onOpenOrderModal: (service?: 'invitations' | 'ahd', templateName?: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenOrderModal }) => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');

  const categories: { key: GalleryCategory; label: string }[] = [
    { key: 'all', label: t.gallery.filters.all },
    { key: 'wedding', label: t.gallery.filters.wedding },
    { key: 'engagement', label: t.gallery.filters.engagement },
    { key: 'romantic', label: t.gallery.filters.romantic },
    { key: 'katbketab', label: t.gallery.filters.katbketab },
    { key: 'anniversary', label: t.gallery.filters.anniversary },
    { key: 'birthday', label: t.gallery.filters.birthday },
    { key: 'graduation', label: t.gallery.filters.graduation },
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="gallery" className="py-24 bg-[#120307] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-gold-500/5 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-500/30 bg-plum-900/60 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-xs uppercase tracking-widest text-gold-300 font-semibold font-playfair">
              {t.gallery.eyebrow}
            </span>
          </div>

          <h2 className="font-amiri text-3xl sm:text-5xl font-bold text-ivory-50 mb-4 leading-tight">
            {t.gallery.title}
          </h2>

          <p className="text-ivory-300 text-sm sm:text-base font-light leading-relaxed font-tajawal">
            {t.gallery.subtitle}
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.key
                    ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-plum-950 shadow-gold-glow'
                    : 'bg-plum-900/50 text-ivory-300 border border-gold-500/20 hover:border-gold-500/40 hover:text-gold-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const title = language === 'ar' ? item.title : item.titleEn;
            const tag = language === 'ar' ? item.tag : item.tagEn;
            const isAhd = item.type === 'ahd';

            return (
              <div
                key={item.id}
                className="group relative rounded-3xl overflow-hidden bg-plum-950 border border-gold-500/20 shadow-luxury-card hover:border-gold-400/60 transition-all duration-500 flex flex-col justify-between"
              >
                {/* Image Container with Zoom effect */}
                <div className="relative h-72 sm:h-80 overflow-hidden">
                  <img
                    src={item.image}
                    alt={title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum-950 via-plum-950/40 to-transparent"></div>

                  {/* Tag Pill */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span
                      className={`text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-md ${
                        isAhd
                          ? 'bg-rose-950/80 text-rose-300 border border-rose-500/40'
                          : 'bg-plum-950/80 text-gold-300 border border-gold-500/40'
                      }`}
                    >
                      {tag}
                    </span>

                    <span className="text-[10px] text-ivory-300 bg-plum-950/70 px-2 py-0.5 rounded-full border border-gold-500/20">
                      {isAhd ? 'WISAL AHD' : 'WISAL INVITATIONS'}
                    </span>
                  </div>

                  {/* Title & Overlay Information */}
                  <div className="absolute bottom-4 inset-x-4">
                    <h3 className="font-amiri text-xl sm:text-2xl font-bold text-ivory-100 group-hover:text-gold-300 transition-colors">
                      {title}
                    </h3>
                  </div>
                </div>

                {/* Hover Quick Action Drawer */}
                <div className="p-4 bg-plum-900/70 border-t border-gold-500/15 flex items-center justify-between gap-3">
                  <a
                    href={item.destUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackProductRedirect(item.type as 'invitations' | 'ahd', item.destUrl)}
                    className="text-xs text-gold-300 hover:text-gold-200 flex items-center gap-1.5 transition-colors font-tajawal font-medium"
                  >
                    <span>{t.gallery.openExternal}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => onOpenOrderModal(item.type as 'invitations' | 'ahd', title)}
                    className="px-3.5 py-1.5 rounded-xl bg-gold-500/15 hover:bg-gold-500 text-gold-300 hover:text-plum-950 text-xs font-bold transition-all border border-gold-500/30 flex items-center gap-1"
                  >
                    <ShoppingBag className="w-3 h-3" />
                    <span>{t.gallery.orderSimilar}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
