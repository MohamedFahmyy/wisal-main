import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { faqList } from '../../data/products';
import {
  Sparkles,
  ChevronDown,
  MessageCircle,
} from 'lucide-react';
import { siteConfig } from '../../config/site.config';

export const FAQ: React.FC = () => {
  const { t, language } = useLanguage();
  const [openId, setOpenId] = useState<string | null>('faq1');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: t.faq.categories.all },
    { key: 'ordering', label: t.faq.categories.ordering },
    { key: 'customization', label: t.faq.categories.customization },
    { key: 'delivery', label: t.faq.categories.delivery },
    { key: 'payment', label: t.faq.categories.payment },
    { key: 'support', label: t.faq.categories.support },
  ];

  const filteredFaqs = faqList.filter((faq) => {
    if (activeCategory === 'all') return true;
    return faq.category === activeCategory;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-ivory-100 dark:bg-plum-950 relative overflow-hidden transition-colors duration-300">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[400px] bg-gold-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-500/30 bg-ivory-200/80 dark:bg-plum-900/60 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
            <span className="text-xs uppercase tracking-widest text-gold-700 dark:text-gold-300 font-semibold font-playfair">
              {t.faq.eyebrow}
            </span>
          </div>

          <h2 className="font-amiri text-3xl sm:text-5xl font-bold text-plum-950 dark:text-ivory-50 mb-4 leading-tight">
            {t.faq.title}
          </h2>

          <p className="text-plum-800 dark:text-ivory-300 text-sm sm:text-base font-light leading-relaxed font-tajawal">
            {t.faq.subtitle}
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                  activeCategory === cat.key
                    ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-plum-950 shadow-gold-glow'
                    : 'bg-ivory-200/90 dark:bg-plum-900/50 text-plum-900 dark:text-ivory-300 border border-gold-500/20 hover:border-gold-500/40 hover:text-gold-700 dark:hover:text-gold-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            const question = language === 'ar' ? faq.question : faq.questionEn;
            const answer = language === 'ar' ? faq.answer : faq.answerEn;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-white dark:bg-plum-900/80 border-gold-500 dark:border-gold-400/60 shadow-md dark:shadow-luxury-card'
                    : 'bg-white/80 dark:bg-plum-900/40 border-gold-500/20 hover:border-gold-500/40 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-start flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-amiri text-lg sm:text-xl font-bold text-plum-950 dark:text-ivory-100 leading-snug">
                    {question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center border border-gold-500/30 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-gold-500 text-plum-950 rotate-180' : 'bg-ivory-100 dark:bg-plum-950 text-gold-700 dark:text-gold-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-plum-800 dark:text-ivory-300 font-tajawal leading-relaxed border-t border-gold-500/10">
                    <p>{answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Direct Assistance Banner */}
        <div className="mt-14 p-6 rounded-3xl bg-gradient-to-r from-white via-ivory-50 to-ivory-100 dark:from-plum-900/90 dark:to-plum-950 border border-gold-500/30 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start">
          <div>
            <h4 className="font-amiri text-xl font-bold text-plum-950 dark:text-ivory-100">
              {language === 'ar' ? 'هل لديك استفسار أو رغبة خاصة؟' : 'Have a custom inquiry?'}
            </h4>
            <p className="text-xs text-plum-700 dark:text-ivory-300 font-tajawal mt-1">
              {language === 'ar'
                ? 'فريق خدمة عملاء وِصال متاح على مدار الساعة للإجابة على جميع تساؤلاتكم.'
                : 'Our concierge team is available to answer all your questions.'}
            </p>
          </div>

          <a
            href={`https://wa.me/${siteConfig.whatsapp.phoneNumber}?text=${encodeURIComponent(
              siteConfig.whatsapp.defaultMessageAr
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-gold-500 hover:bg-gold-400 text-plum-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-gold-glow transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{language === 'ar' ? 'محادثة مباشرة عبر واتساب' : 'Chat on WhatsApp'}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
