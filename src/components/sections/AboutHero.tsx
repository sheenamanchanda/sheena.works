import { Scale, Award, Users, Globe, BookOpen, Shield } from 'lucide-react'

const highlights = [
  {
    icon: Scale,
    title: 'Enrolled Advocate',
    description: 'Registered with Bar Council of India',
    color: 'text-primary-600 bg-primary-50'
  },
  {
    icon: Award,
    title: '5+ Years Experience',
    description: 'Professional legal and content services',
    color: 'text-secondary-600 bg-secondary-50'
  },
  {
    icon: Globe,
    title: 'Bilingual Expertise',
    description: 'Native Hindi, Professional English',
    color: 'text-green-600 bg-green-50'
  },
  {
    icon: Users,
    title: '200+ Projects',
    description: 'Successful client deliveries',
    color: 'text-purple-600 bg-purple-50'
  }
]

const coreValues = [
  'Professional Ethics & Integrity',
  'Client Confidentiality',
  'Quality Without Compromise',
  'Transparent Communication',
  'Continuous Learning',
  'Community Service'
]

export default function AboutHero() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 rotate-12">
          <BookOpen className="w-32 h-32 text-primary-600" />
        </div>
        <div className="absolute bottom-20 left-20 -rotate-12">
          <Shield className="w-28 h-28 text-legal-gold" />
        </div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3 bg-primary-50 px-4 py-2 rounded-full border border-primary-200">
                <Scale className="w-5 h-5 text-primary-600" />
                <span className="text-primary-700 font-medium">About Sheena Manchanda</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-legal-dark leading-tight">
                Bridging Law, Language, and Digital Excellence
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed">
                An Enrolled Advocate with a passion for making legal knowledge accessible, 
                combining traditional legal expertise with modern digital communication skills.
              </p>

              <div className="prose prose-lg text-gray-600">
                <p>
                  With over 5 years of experience in the legal and content industries, I specialize in 
                  providing comprehensive professional services that bridge the gap between complex legal 
                  concepts and clear, actionable communication.
                </p>
                <p>
                  My practice focuses on making legal services accessible to startups, SMBs, and individuals 
                  while maintaining the highest standards of professional ethics and client confidentiality.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div>
              <h3 className="text-lg font-semibold text-legal-dark mb-4">Core Values & Principles</h3>
              <div className="grid grid-cols-2 gap-3">
                {coreValues.map((value) => (
                  <div key={value} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Philosophy */}
            <div className="bg-legal-dark text-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Professional Philosophy</h3>
              <blockquote className="text-gray-300 italic">
                "Legal expertise should be accessible, ethical, and effective. Every client deserves 
                clear communication, timely delivery, and services that truly serve their best interests."
              </blockquote>
              <div className="mt-3 text-right">
                <span className="text-primary-300">— Sheena Manchanda</span>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight) => {
                const Icon = highlight.icon
                return (
                  <div key={highlight.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${highlight.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-legal-dark mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {highlight.description}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Specializations */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="font-semibold text-legal-dark mb-4 flex items-center space-x-2">
                <Award className="w-5 h-5 text-legal-gold" />
                <span>Areas of Specialization</span>
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-legal-dark">Cyber Law & IT Regulations</span>
                  <span className="text-xs text-primary-600 bg-primary-100 px-2 py-1 rounded-full">Expert</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-legal-dark">Contract Law & Drafting</span>
                  <span className="text-xs text-secondary-600 bg-secondary-100 px-2 py-1 rounded-full">Expert</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-legal-dark">English-Hindi Translation</span>
                  <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">Native</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-legal-dark">Content Strategy & Writing</span>
                  <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded-full">Expert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}