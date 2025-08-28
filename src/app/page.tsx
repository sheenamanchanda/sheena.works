import Layout from '@/components/layout/Layout'
import HeroSection from '@/components/sections/HeroSection'
import ServicesPreview from '@/components/sections/ServicesPreview'
import CredentialsSection from '@/components/sections/CredentialsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <ServicesPreview />
      <CredentialsSection />
{/* <TestimonialsSection /> */}
      <CTASection />
    </Layout>
  )
}