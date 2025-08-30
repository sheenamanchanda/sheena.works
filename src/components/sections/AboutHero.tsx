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
    title: 'Unique Background',
    description: 'Marketing + Legal expertise',
    color: 'text-secondary-600 bg-secondary-50'
  },
  {
    icon: Globe,
    title: 'Bilingual Expert',
    description: 'Native Hindi, Professional English',
    color: 'text-green-600 bg-green-50'
  },
  {
    icon: Users,
    title: 'Recent Graduate',
    description: 'Fresh perspective, modern approach',
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
                Recent law graduate with a unique combination of marketing and legal expertise. 
                Specializing in legal research, contract drafting, and content writing services.
              </p>
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