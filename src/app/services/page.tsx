import { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import ServicesHero from '@/components/sections/ServicesHero'
import ServiceCategories from '@/components/sections/ServiceCategories'
import PricingSection from '@/components/sections/PricingSection'
import ProcessSection from '@/components/sections/ProcessSection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Professional Services - Legal, Content, Digital & Teaching',
  description: 'Comprehensive professional services including legal research, contract drafting, content writing, translation, digital marketing, and tutoring by Enrolled Advocate Sheena Manchanda.',
  keywords: ['legal services', 'content writing', 'translation services', 'digital marketing', 'tutoring', 'contract drafting', 'legal research'],
}

export default function ServicesPage() {
  return (
    <Layout>
      <ServicesHero />
      <ServiceCategories />
      <ProcessSection />
      <PricingSection />
      <CTASection />
    </Layout>
  )
}