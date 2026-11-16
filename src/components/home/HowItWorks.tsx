import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  Sparkles,
  MousePointerClick,
  Palette,
  SendHorizontal,
  Gift,
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const { t } = useLanguage();

  const stepIcons = [
    MousePointerClick,
    Palette,
    SendHorizontal,
    Gift,
  ];

  return (
    <section id="how-it-works" className="py-24 bg-ivory-100 dark:bg-plum-950 relative overflow-hidden transition-colors duration-300">
      {/* Decorative background lines */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-500/30 bg-ivory-200/80 dark:bg-plum-900/60 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
            <span className="text-xs uppercase tracking-widest text-gold-700 dark:text-gold-300 font-semibold font-playfair">
              {t.howItWorks.eyebrow}
            </span>
          </div>

          <h2 className="font-amiri text-3xl sm:text-5xl font-bold text-plum-950 dark:text-ivory-50 mb-4 leading-tight">
            {t.howItWorks.title}
          </h2>

          <p className="text-plum-800 dark:text-ivory-300 text-sm sm:text-base font-light leading-relaxed font-tajawal">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {t.howItWorks.steps.map((step, idx) => {
            const Icon = stepIcons[idx];
            return (
              <div
                key={idx}
                className="relative rounded-3xl p-7 bg-gradient-to-b from-white to-ivory-50 dark:from-plum-900/70 dark:to-plum-950/90 border border-gold-500/25 dark:border-gold-500/20 shadow-md dark:shadow-luxury-card hover:border-gold-400/50 hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Large Background Step Number */}
                <div className="absolute top-4 right-5 font-playfair font-bold text-5xl text-gold-500/10 group-hover:text-gold-500/25 transition-colors pointer-events-none">
                  {step.number}
                </div>

                <div>
                  {/* Step Icon Badge */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-100 to-ivory-200 dark:from-plum-800 dark:to-plum-900 border border-gold-500/40 flex items-center justify-center text-gold-700 dark:text-gold-300 shadow-sm dark:shadow-gold-glow mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-semibold text-gold-700 dark:text-gold-400 tracking-wider uppercase font-tajawal">
                    {`الخطوة ${step.number}`}
                  </span>

                  <h3 className="font-amiri text-2xl font-bold text-plum-950 dark:text-ivory-100 my-2">
                    {step.title}
                  </h3>

                  <p className="text-plum-800 dark:text-ivory-300 text-xs sm:text-sm font-tajawal leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gold-500/10 flex items-center gap-1.5 text-xs text-gold-700 dark:text-gold-300/80 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                  <span>{idx === 3 ? 'تسليم فوري ومستمر' : 'سهل وبدون تعقيد'}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
