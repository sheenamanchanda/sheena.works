import { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import ContactHero from '@/components/sections/ContactHero'
import ContactForm from '@/components/forms/ContactForm'
import ContactInfo from '@/components/sections/ContactInfo'
import ResponseTimes from '@/components/sections/ResponseTimes'

export const metadata: Metadata = {
  title: 'Contact - Get Professional Legal & Content Services | Sheena Manchanda',
  description: 'Contact Enrolled Advocate Sheena Manchanda for legal services, content writing, translation, and tutoring. Get quotes, schedule consultations, and discuss your project needs.',
  keywords: ['contact sheena manchanda', 'legal consultation', 'get quote', 'legal services contact', 'content writing inquiry'],
}

export default function ContactPage() {
  return (
    <Layout>
      <ContactHero />
      <div className="section-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <ResponseTimes />
    </Layout>
  )
}