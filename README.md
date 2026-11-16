# وِصال | WISAL — Premium Master Landing Page

> **"Every Connection Has a Story"**  
> **"كل حكاية جميلة تستحق أن تُروى"**

A luxury, conversion-focused master brand portal for **WISAL (وِصال)**, uniting two flagship digital experiences under one cohesive identity:
1. **WISAL Invitations (دعوات وِصال الفاخرة):** [https://wisal-app-six.vercel.app/](https://wisal-app-six.vercel.app/)
2. **WISAL AHD – Romantic Digital Gifts (عَهد للهدايا الرقمية الرومانسية):** [https://wisal-habeba.vercel.app/](https://wisal-habeba.vercel.app/)

---

## 💎 Features & Capabilities

- **Luxury Aesthetic:** Deep burgundy, dark plum (`#1C060D`), champagne gold (`#C5A059`), ivory, and soft velvet gradients.
- **Bilingual & Directional:** Native Arabic RTL (default) and English LTR with complete translation strings across every component.
- **Authentic Mockup Visuals:**
  - **WISAL Invitations:** 3D wax seal video intro simulation, interactive live countdown timer, Google Maps location, and RSVP arch.
  - **WISAL AHD:** Rotating vintage vinyl phonograph player streaming YouTube soundtracks, Polaroid memories gallery, and typewriter love letter in a wax-sealed envelope.
- **Centralized Configuration:**
  - Site details & social links: [`src/config/site.config.ts`](file:///d:/laragon/www/wisal/src/config/site.config.ts)
  - Pricing & packages: [`src/config/pricing.config.ts`](file:///d:/laragon/www/wisal/src/config/pricing.config.ts)
- **Conversion & Lead Tracking:**
  - Intelligent WhatsApp Business prefilled message generator with automatic product & package parameter injection.
  - Google Analytics 4 & Meta Pixel hooks.
  - Floating WhatsApp concierge action pill.
- **SEO & Social Sharing:**
  - Full OpenGraph & Twitter Card metadata.
  - Schema.org JSON-LD brand definition.

---

## 🛠️ Project Structure

```text
wisal/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   └── WhatsAppFloatingButton.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── InteractiveShowcase.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── WhyChooseWisal.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── FinalCTA.tsx
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   └── modals/
│   │       ├── OrderModal.tsx
│   │       ├── PreviewModal.tsx
│   │       └── PolicyModal.tsx
│   ├── config/
│   │   ├── site.config.ts       # Central contact, WhatsApp, GA4 & Pixel IDs
│   │   └── pricing.config.ts    # Centralized, editable prices & packages
│   ├── context/
│   │   └── LanguageContext.tsx  # Bilingual RTL/LTR provider
│   ├── data/
│   │   ├── products.ts          # Authentic showcases, templates & FAQs
│   │   └── translations.ts      # Complete AR/EN dictionaries
│   ├── types/
│   │   └── index.ts             # TypeScript interfaces
│   ├── utils/
│   │   ├── analytics.ts         # GA4 & Meta Pixel dispatchers
│   │   └── whatsapp.ts          # WhatsApp click-to-chat URL builder
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 🚀 Development & Build

```bash
# Start local development server
npm run dev

# Compile TypeScript and build production bundle
npm run build

# Preview production build locally
npm run preview
```
