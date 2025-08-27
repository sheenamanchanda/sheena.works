import { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import AboutHero from '@/components/sections/AboutHero'
import ProfessionalJourney from '@/components/sections/ProfessionalJourney'
import Education from '@/components/sections/Education'
import SkillsMatrix from '@/components/sections/SkillsMatrix'
import ValuesSection from '@/components/sections/ValuesSection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'About Sheena Manchanda - Enrolled Advocate & Professional Services',
  description: 'Learn about Sheena Manchanda, an Enrolled Advocate with 5+ years of experience in legal services, content writing, translation, and professional tutoring.',
  keywords: ['about sheena manchanda', 'enrolled advocate', 'legal professional', 'content writer', 'translator', 'tutor'],
}

export default function AboutPage() {
  return (
    <Layout>
      <AboutHero />
      <ProfessionalJourney />
      <Education />
      <SkillsMatrix />
      <ValuesSection />
      <CTASection />
    </Layout>
  )
}