import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { X, MessageCircle, Heart, Mail, Calendar, User, FileText } from 'lucide-react';
import { buildWhatsAppLink } from '../../utils/whatsapp';
import { trackLeadConversion } from '../../utils/analytics';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: 'invitations' | 'ahd';
  initialPackage?: string;
  initialTemplate?: string;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  initialService = 'invitations',
  initialPackage = '',
  initialTemplate = '',
}) => {
  const { t, language } = useLanguage();

  const [service, setService] = useState<'invitations' | 'ahd'>(initialService);
  const [packageName, setPackageName] = useState(initialPackage);
  const [templateName, setTemplateName] = useState(initialTemplate);
  const [names, setNames] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (initialService) setService(initialService);
    if (initialPackage) setPackageName(initialPackage);
    if (initialTemplate) setTemplateName(initialTemplate);
  }, [initialService, initialPackage, initialTemplate, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Track lead conversion event
    trackLeadConversion({
      leadSource: 'modal_form',
      productCategory: service,
      packageName: packageName || templateName || 'custom',
    });

    const whatsappUrl = buildWhatsAppLink({
      productType: service,
      packageName,
      templateName,
      names,
      eventDate,
      notes,
      language,
    });

    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-plum-900 via-plum-950 to-black border border-gold-500/40 p-6 sm:p-8 shadow-2xl shadow-gold-500/10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-plum-800/80 hover:bg-plum-700 text-ivory-300 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-2">
            <img
              src="/logo.png"
              alt="WISAL"
              className="h-12 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(237,220,183,0.35)]"
            />
          </div>
          <h3 className="font-amiri text-2xl sm:text-3xl font-bold text-ivory-50">
            {t.modal.title}
          </h3>
          <p className="text-xs sm:text-sm text-ivory-300 font-tajawal mt-1">
            {t.modal.subtitle}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Service Selector Tabs */}
          <div>
            <label className="block text-xs font-semibold text-gold-300 mb-1.5 font-tajawal">
              {t.modal.serviceLabel}
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setService('invitations')}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all border ${
                  service === 'invitations'
                    ? 'bg-gold-500 text-plum-950 border-gold-400 shadow-gold-glow'
                    : 'bg-plum-900/50 text-ivory-300 border-gold-500/20 hover:border-gold-500/40'
                }`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? 'دعوة إلكترونية فاخرة' : 'Luxury Invitation'}</span>
              </button>

              <button
                type="button"
                onClick={() => setService('ahd')}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all border ${
                  service === 'ahd'
                    ? 'bg-rose-600 text-white border-rose-400 shadow-md'
                    : 'bg-plum-900/50 text-ivory-300 border-rose-500/20 hover:border-rose-500/40'
                }`}
              >
                <Heart className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? 'موقع هدايا رومانسي (عهد)' : 'Romantic Gift (Ahd)'}</span>
              </button>
            </div>
          </div>

          {/* Package or Template Name (if pre-selected) */}
          {(packageName || templateName) && (
            <div className="p-3 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-between text-xs text-gold-200">
              <span className="font-semibold font-tajawal">
                {language === 'ar' ? 'الباقة / التصميم المحدد:' : 'Selected Package:'}
              </span>
              <span className="font-bold">{packageName || templateName}</span>
            </div>
          )}

          {/* Customer Names Input */}
          <div>
            <label className="block text-xs font-medium text-ivory-300 mb-1 font-tajawal">
              {t.modal.namesLabel}
            </label>
            <div className="relative">
              <User className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-500/60 rtl:right-3.5 ltr:left-3.5 rtl:ltr-left" />
              <input
                type="text"
                value={names}
                onChange={(e) => setNames(e.target.value)}
                placeholder={language === 'ar' ? 'مثال: أحمد وسارة' : 'e.g. Ahmed & Sara'}
                className="w-full py-2.5 px-10 rounded-xl bg-plum-900/50 border border-gold-500/30 text-ivory-100 placeholder-ivory-500 text-xs sm:text-sm focus:outline-none focus:border-gold-400 font-tajawal"
              />
            </div>
          </div>

          {/* Date Input */}
          <div>
            <label className="block text-xs font-medium text-ivory-300 mb-1 font-tajawal">
              {t.modal.dateLabel}
            </label>
            <div className="relative">
              <Calendar className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-500/60 rtl:right-3.5 ltr:left-3.5 rtl:ltr-left" />
              <input
                type="text"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                placeholder={language === 'ar' ? 'مثال: شهر أكتوبر القادم، أو 14-01-2027' : 'e.g. October 2026 or 14-01-2027'}
                className="w-full py-2.5 px-10 rounded-xl bg-plum-900/50 border border-gold-500/30 text-ivory-100 placeholder-ivory-500 text-xs sm:text-sm focus:outline-none focus:border-gold-400 font-tajawal"
              />
            </div>
          </div>

          {/* Custom Notes */}
          <div>
            <label className="block text-xs font-medium text-ivory-300 mb-1 font-tajawal">
              {t.modal.notesLabel}
            </label>
            <div className="relative">
              <FileText className="absolute right-3.5 top-3 w-4 h-4 text-gold-500/60 rtl:right-3.5 ltr:left-3.5 rtl:ltr-left" />
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={t.modal.notesPlaceholder}
                className="w-full py-2.5 px-10 rounded-xl bg-plum-900/50 border border-gold-500/30 text-ivory-100 placeholder-ivory-500 text-xs sm:text-sm focus:outline-none focus:border-gold-400 font-tajawal resize-none"
              ></textarea>
            </div>
          </div>

          {/* Reassurance text */}
          <p className="text-[11px] text-ivory-400 text-center font-tajawal">
            {t.modal.reassuranceText}
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-plum-950 font-bold text-sm shadow-gold-glow hover:shadow-gold-glow-lg transition-all flex items-center justify-center gap-2 mt-2"
          >
            <MessageCircle className="w-4 h-4 text-plum-950" />
            <span>{t.modal.submitBtn}</span>
          </button>
        </form>
      </div>
    </div>
  );
};
