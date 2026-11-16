import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { X, ShieldCheck, FileCheck } from 'lucide-react';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  const { language } = useLanguage();

  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-gradient-to-b from-plum-900 via-plum-950 to-black border border-gold-500/40 p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-plum-800/80 hover:bg-plum-700 text-ivory-300 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400">
            {isPrivacy ? <ShieldCheck className="w-5 h-5" /> : <FileCheck className="w-5 h-5" />}
          </div>
          <div>
            <h3 className="font-amiri text-2xl font-bold text-ivory-50">
              {isPrivacy
                ? language === 'ar'
                  ? 'سياسة الخصوصية وأمان البيانات'
                  : 'Privacy & Data Protection Policy'
                : language === 'ar'
                ? 'شروط الاستخدام والخدمة'
                : 'Terms of Service'}
            </h3>
            <span className="text-xs text-gold-400 font-tajawal">
              {language === 'ar' ? 'منصة وِصال — تحديث 2026' : 'WISAL Platform — Updated 2026'}
            </span>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-ivory-300 font-tajawal leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                {language === 'ar'
                  ? 'في منصة وِصال (WISAL) ومنتجاتها التابعة (WISAL Invitations و WISAL AHD)، نعتبر خصوصية عملائنا وضيوفهم مقدسة وأولوية قصوى.'
                  : 'At WISAL and its associated products (WISAL Invitations and WISAL AHD), the privacy of our clients and their guests is sacred and our highest priority.'}
              </p>
              <h4 className="font-bold text-gold-300 text-sm mt-3">
                {language === 'ar' ? '1. سرية الصور والذكريات' : '1. Confidentiality of Memories & Photos'}
              </h4>
              <p>
                {language === 'ar'
                  ? 'جميع الصور، الرسائل العاطفية، وقوائم الضيوف التي يتم مشاركتها معنا لتصميم الدعوات أو مواقع عهد، يتم تخزينها وتشفيرها بشكل آمن ولا تتم مشاركتها أو نشرها أو بيعها لأي طرف ثالث على الإطلاق.'
                  : 'All photographs, love letters, and guest lists entrusted to us are encrypted and securely stored. We never publish or disclose them to any third party.'}
              </p>
              <h4 className="font-bold text-gold-300 text-sm mt-3">
                {language === 'ar' ? '2. أمان المدفوعات' : '2. Payment Security'}
              </h4>
              <p>
                {language === 'ar'
                  ? 'نحن لا نقوم بتخزين أو معالجة أي بيانات بطاقات ائتمانية على خوادمنا. تتم جميع المعاملات عبر بوابات مصرفية معتمدة ومشفرة.'
                  : 'We never store payment card credentials. All transactions are handled securely through PCI-DSS compliant payment gateways.'}
              </p>
              <h4 className="font-bold text-gold-300 text-sm mt-3">
                {language === 'ar' ? '3. حذف البيانات بناءً على الطلب' : '3. Data Deletion on Request'}
              </h4>
              <p>
                {language === 'ar'
                  ? 'يحق للعميل طلب إيقاف أو حذف أي رابط أو بيانات تابعة لمناسبته في أي وقت بمجرد مراسلة فريق الدعم الفني عبر واتساب أو البريد الإلكتروني.'
                  : 'Clients hold the right to request deletion or deactivation of any custom link or data at any time by contacting our concierge.'}
              </p>
            </>
          ) : (
            <>
              <p>
                {language === 'ar'
                  ? 'أهلاً بكم في وِصال. باستخدامكم لخدماتنا ومواقعنا، فإنكم توافقون على الشروط والأحكام التالية المنظمة لعملية التصميم والتسليم.'
                  : 'Welcome to WISAL. By commissioning our services, you agree to the following terms and conditions governing craftsmanship and delivery.'}
              </p>
              <h4 className="font-bold text-gold-300 text-sm mt-3">
                {language === 'ar' ? '1. الملكية الفكرية والتصاميم' : '1. Intellectual Property & Craftsmanship'}
              </h4>
              <p>
                {language === 'ar'
                  ? 'تظل جميع الأكواد البرمجية والتأثيرات الحركية والرسوم التوضيحية ملكاً لمنصة وِصال، بينما يمتلك العميل كامل حقوق المحتوى الشخصي والصور الخاصة به.'
                  : 'All interactive code, custom vector illustrations, and animations remain the intellectual property of WISAL, while clients retain full ownership of their personal media.'}
              </p>
              <h4 className="font-bold text-gold-300 text-sm mt-3">
                {language === 'ar' ? '2. مدة استضافة الروابط والتعديلات' : '2. Hosting & Revisions'}
              </h4>
              <p>
                {language === 'ar'
                  ? 'تبقى روابط دعوات وِصال نشطة طوال فترة المناسبة وبعدها لتخليد الذكرى. روابط منصة عهد دائمة وغير محددة بمدة انتهاء. نوفر تعديلات مجانية لتفاصيل الموعد والمكان.'
                  : 'WISAL Invitation links remain live throughout and after your celebration. AHD romantic gift links are permanent. Complimentary revisions for dates and venue adjustments are provided.'}
              </p>
            </>
          )}
        </div>

        <div className="mt-8 pt-4 border-t border-gold-500/20 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-gold-500 text-plum-950 font-bold text-xs shadow-gold-glow hover:bg-gold-400 transition-all"
          >
            {language === 'ar' ? 'فهمت وموافق' : 'I Understand'}
          </button>
        </div>
      </div>
    </div>
  );
};
