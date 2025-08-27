import { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import ResourcesHero from '@/components/sections/ResourcesHero'
import FreeResources from '@/components/sections/FreeResources'
import ResourceCategories from '@/components/sections/ResourceCategories'
import DownloadCenter from '@/components/sections/DownloadCenter'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Free Resources - Legal Templates, Guides & Educational Content',
  description: 'Access free legal templates, business guides, writing tips, and educational resources by Enrolled Advocate Sheena Manchanda. Download contract templates, legal explainers, and professional guides.',
  keywords: ['free legal templates', 'contract templates', 'legal guides', 'business resources', 'writing tips', 'educational content'],
}

export default function ResourcesPage() {
  return (
    <Layout>
      <ResourcesHero />
      <FreeResources />
      <ResourceCategories />
      <DownloadCenter />
      <CTASection />
    </Layout>
  )
}