import { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import BlogHero from '@/components/sections/BlogHero'
import FeaturedPosts from '@/components/sections/FeaturedPosts'
import BlogCategories from '@/components/sections/BlogCategories'
import RecentPosts from '@/components/sections/RecentPosts'
import BlogNewsletter from '@/components/sections/BlogNewsletter'

export const metadata: Metadata = {
  title: 'Legal Insights Blog - Expert Analysis & Professional Tips',
  description: 'Expert insights on legal matters, professional writing, business compliance, and career development by Enrolled Advocate Sheena Manchanda.',
  keywords: ['legal blog', 'cyber law insights', 'professional writing tips', 'business legal advice', 'career development'],
}

export default function BlogPage() {
  return (
    <Layout>
      <BlogHero />
      <FeaturedPosts />
      <BlogCategories />
      <RecentPosts />
      <BlogNewsletter />
    </Layout>
  )
}