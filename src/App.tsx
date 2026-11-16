import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { Services } from './components/home/Services';
import { InteractiveShowcase } from './components/home/InteractiveShowcase';
import { HowItWorks } from './components/home/HowItWorks';
import { PricingSection } from './components/home/PricingSection';
import { WhyChooseWisal } from './components/home/WhyChooseWisal';
import { Gallery } from './components/home/Gallery';
import { FAQ } from './components/home/FAQ';
import { FinalCTA } from './components/home/FinalCTA';
import { Footer } from './components/layout/Footer';
import { OrderModal } from './components/modals/OrderModal';
import { PreviewModal } from './components/modals/PreviewModal';
import { PolicyModal } from './components/modals/PolicyModal';
import { WhatsAppFloatingButton } from './components/common/WhatsAppFloatingButton';
import { ProductItem } from './types';

export const App: React.FC = () => {
  // Order Modal State
  const [orderModalState, setOrderModalState] = useState<{
    isOpen: boolean;
    service?: 'invitations' | 'ahd';
    packageName?: string;
    templateName?: string;
  }>({
    isOpen: false,
    service: 'invitations',
    packageName: '',
    templateName: '',
  });

  // Preview Modal State
  const [previewProduct, setPreviewProduct] = useState<ProductItem | null>(null);

  // Policy Modal State
  const [policyType, setPolicyType] = useState<'privacy' | 'terms' | null>(null);

  const handleOpenOrderModal = (
    service?: 'invitations' | 'ahd',
    identifier?: string
  ) => {
    setOrderModalState({
      isOpen: true,
      service: service || 'invitations',
      packageName: identifier,
      templateName: identifier,
    });
  };

  const handleCloseOrderModal = () => {
    setOrderModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-ivory-50 text-plum-900 dark:bg-plum-950 dark:text-ivory-100 flex flex-col selection:bg-gold-500 selection:text-plum-950 transition-colors duration-300">
      {/* Navigation */}
      <Navbar onOpenOrderModal={handleOpenOrderModal} />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenOrderModal={handleOpenOrderModal} />

        {/* The Two Main Products */}
        <Services onOpenOrderModal={handleOpenOrderModal} />

        {/* Interactive Product Showcase */}
        <InteractiveShowcase
          onSelectProductForPreview={(prod) => setPreviewProduct(prod)}
          onOpenOrderModal={handleOpenOrderModal}
        />

        {/* 4-Step Customer Journey */}
        <HowItWorks />

        {/* Pricing & Packages */}
        <PricingSection onOpenOrderModal={handleOpenOrderModal} />

        {/* Why Choose WISAL */}
        <WhyChooseWisal />

        {/* Inspiration & Authentic Gallery */}
        <Gallery onOpenOrderModal={handleOpenOrderModal} />

        {/* FAQ Accordion */}
        <FAQ />

        {/* Final CTA */}
        <FinalCTA onOpenOrderModal={handleOpenOrderModal} />
      </main>

      {/* Footer */}
      <Footer
        onOpenPolicyModal={(type) => setPolicyType(type)}
        onOpenOrderModal={() => handleOpenOrderModal()}
      />

      {/* Floating Concierge Action */}
      <WhatsAppFloatingButton />

      {/* Modals & Dialogs */}
      <OrderModal
        isOpen={orderModalState.isOpen}
        onClose={handleCloseOrderModal}
        initialService={orderModalState.service}
        initialPackage={orderModalState.packageName}
        initialTemplate={orderModalState.templateName}
      />

      <PreviewModal
        product={previewProduct}
        onClose={() => setPreviewProduct(null)}
        onOrder={(service, name) => {
          setPreviewProduct(null);
          handleOpenOrderModal(service, name);
        }}
      />

      <PolicyModal
        type={policyType}
        onClose={() => setPolicyType(null)}
      />
    </div>
  );
};
export default App;
