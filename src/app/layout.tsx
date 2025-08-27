import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Sheena Manchanda - Enrolled Advocate & Legal Professional',
    template: '%s | Sheena Manchanda'
  },
  description: 'Enrolled Advocate & Paralegal offering legal research, contract drafting, content writing, translation services, and professional tutoring. Expert in cyber law and multilingual legal services.',
  keywords: ['enrolled advocate', 'legal services', 'contract drafting', 'legal research', 'translation services', 'content writing', 'cyber law', 'paralegal', 'Delhi lawyer'],
  authors: [{ name: 'Sheena Manchanda' }],
  creator: 'Sheena Manchanda',
  metadataBase: new URL(process.env.SITE_URL || 'https://sheena.works'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.SITE_URL || 'https://sheena.works',
    title: 'Sheena Manchanda - Enrolled Advocate & Legal Professional',
    description: 'Expert legal services, content writing, and professional tutoring by an Enrolled Advocate with specialization in cyber law.',
    siteName: 'Sheena Manchanda',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sheena Manchanda - Enrolled Advocate & Legal Professional',
    description: 'Expert legal services, content writing, and professional tutoring by an Enrolled Advocate.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}