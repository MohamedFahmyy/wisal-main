export type Language = 'ar' | 'en';

export type ProductCategory = 'invitations' | 'ahd';

export type GalleryCategory =
  | 'all'
  | 'wedding'
  | 'engagement'
  | 'romantic'
  | 'katbketab'
  | 'anniversary'
  | 'birthday'
  | 'graduation';

export interface ServiceItem {
  id: string;
  category: ProductCategory;
  title: string;
  titleEn: string;
  tagline: string;
  taglineEn: string;
  description: string;
  descriptionEn: string;
  destinationUrl: string;
  features: string[];
  featuresEn: string[];
  ctaLabel: string;
  ctaLabelEn: string;
  badge?: string;
  badgeEn?: string;
  heroImage: string;
}

export interface ProductItem {
  id: string;
  category: ProductCategory;
  subCategory: string;
  subCategoryEn: string;
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  previewUrl: string;
  tags: string[];
  tagsEn: string[];
  features: string[];
  featuresEn: string[];
  badge?: string;
  badgeEn?: string;
  highlightColor?: string;
}

export interface PricingPlan {
  id: string;
  productCategory: ProductCategory;
  name: string;
  nameEn: string;
  tagline: string;
  taglineEn: string;
  price: string;
  originalPrice?: string;
  currency: string;
  currencyEn: string;
  period: string;
  periodEn: string;
  discountBadge?: string;
  discountBadgeEn?: string;
  popular?: boolean;
  description: string;
  descriptionEn: string;
  features: string[];
  featuresEn: string[];
  ctaText: string;
  ctaTextEn: string;
  whatsappMessageTemplate: string;
}

export interface FAQItem {
  id: string;
  category: 'ordering' | 'customization' | 'delivery' | 'payment' | 'support';
  question: string;
  questionEn: string;
  answer: string;
  answerEn: string;
}

export interface TestimonialPillar {
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
}
