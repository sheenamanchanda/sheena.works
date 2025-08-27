import { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import PortfolioHero from '@/components/sections/PortfolioHero'
import CaseStudies from '@/components/sections/CaseStudies'
import WorkSamples from '@/components/sections/WorkSamples'
import ClientResults from '@/components/sections/ClientResults'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Portfolio - Case Studies & Work Samples | Sheena Manchanda',
  description: 'Explore anonymized case studies, work samples, and client results from legal services, content writing, translation, and digital marketing projects.',
  keywords: ['portfolio', 'case studies', 'legal work samples', 'content writing samples', 'translation examples', 'client results'],
}

export default function PortfolioPage() {
  return (
    <Layout>
      <PortfolioHero />
      <CaseStudies />
      <WorkSamples />
      <ClientResults />
      <CTASection />
    </Layout>
  )
}