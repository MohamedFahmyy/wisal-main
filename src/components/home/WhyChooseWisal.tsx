import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  Sparkles,
  Palette,
  Layers,
  Share2,
  Smartphone,
  Headphones,
  CheckCircle2,
} from 'lucide-react';

export const WhyChooseWisal: React.FC = () => {
  const { t } = useLanguage();

  const pillarIcons = [
    Palette,
    Layers,
    Share2,
    Smartphone,
    Headphones,
  ];

  return (
    <section id="why-us" className="py-24 bg-plum-950 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-1/3 w-[600px] h-[400px] bg-gold-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-500/30 bg-plum-900/60 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-xs uppercase tracking-widest text-gold-300 font-semibold font-playfair">
              {t.whyUs.eyebrow}
            </span>
          </div>

          <h2 className="font-amiri text-3xl sm:text-5xl font-bold text-ivory-50 mb-4 leading-tight">
            {t.whyUs.title}
          </h2>

          <p className="text-ivory-300 text-sm sm:text-base font-light leading-relaxed font-tajawal">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* 5 Pillars Layout: 3 on top row, 2 centered on bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.whyUs.pillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx];
            return (
              <div
                key={idx}
                className="rounded-3xl p-8 bg-gradient-to-b from-plum-900/60 to-plum-950/80 border border-gold-500/20 shadow-luxury-card hover:border-gold-400/50 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Icon Circle */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-plum-800 to-plum-900 border border-gold-500/30 flex items-center justify-center text-gold-400 shadow-gold-glow mb-6 group-hover:scale-110 group-hover:border-gold-400 transition-all">
                    <Icon className="w-6 h-6 text-gold-300" />
                  </div>

                  <h3 className="font-amiri text-2xl font-bold text-ivory-100 mb-3 group-hover:text-gold-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-ivory-300 text-xs sm:text-sm font-tajawal leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gold-500/10 flex items-center gap-2 text-xs text-gold-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-gold-400" />
                  <span>معيار وِصال الذهبي</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
