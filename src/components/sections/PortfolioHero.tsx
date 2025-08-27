import { FileText, Users, Award, TrendingUp, Shield, Eye } from 'lucide-react'

const portfolioStats = [
  { label: 'Projects Completed', value: '300+', icon: FileText },
  { label: 'Satisfied Clients', value: '150+', icon: Users },
  { label: 'Success Rate', value: '98%', icon: Award },
  { label: 'Client Retention', value: '85%', icon: TrendingUp }
]

const portfolioCategories = [
  'Legal Research & Contracts',
  'Content Writing & Copywriting', 
  'English-Hindi Translation',
  'Academic & Technical Writing',
  'Social Media & Digital Content',
  'Voice-over & Audio Projects',
  'Educational Materials',
  'Policy & Compliance Documents'
]

export default function PortfolioHero() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 rotate-12">
          <FileText className="w-24 h-24 text-primary-600" />
        </div>
        <div className="absolute bottom-16 right-16 -rotate-12">
          <Award className="w-20 h-20 text-secondary-600" />
        </div>
        <div className="absolute top-1/2 left-1/4 rotate-45">
          <Users className="w-16 h-16 text-legal-gold" />
        </div>
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-200 mb-6">
            <Eye className="w-4 h-4 text-primary-600" />
            <span className="text-primary-700 font-medium">Portfolio & Work Samples</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-legal-dark mb-6">
            Proven Results Across
            <span className="block text-primary-600">Diverse Projects</span>
          </h1>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Explore anonymized case studies and work samples demonstrating expertise across 
            legal services, content creation, translation, and digital marketing projects.
          </p>

          {/* Privacy Notice */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200 max-w-2xl mx-auto">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div className="text-left">
                <h3 className="font-semibold text-legal-dark text-sm">Client Confidentiality Protected</h3>
                <p className="text-xs text-gray-600 mt-1">
                  All case studies and work samples are anonymized to protect client privacy. 
                  Sensitive information has been removed while preserving the essence of the work quality and results.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {portfolioStats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-200">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-3">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-legal-dark mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>

        {/* Portfolio Categories */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-legal-dark text-center mb-6">
            Project Categories & Expertise Areas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {portfolioCategories.map((category) => (
              <div 
                key={category}
                className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg text-sm"
              >
                <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">{category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-primary-50 rounded-lg border border-primary-200">
            <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
            <div className="font-semibold text-legal-dark mb-1">On-Time Delivery</div>
            <div className="text-sm text-gray-600">All projects completed within agreed timelines</div>
          </div>

          <div className="text-center p-6 bg-secondary-50 rounded-lg border border-secondary-200">
            <div className="text-3xl font-bold text-secondary-600 mb-2">Zero</div>
            <div className="font-semibold text-legal-dark mb-1">Confidentiality Breaches</div>
            <div className="text-sm text-gray-600">Strict privacy protection for all clients</div>
          </div>

          <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
            <div className="text-3xl font-bold text-green-600 mb-2">5-Star</div>
            <div className="font-semibold text-legal-dark mb-1">Average Rating</div>
            <div className="text-sm text-gray-600">Consistently high client satisfaction scores</div>
          </div>
        </div>
      </div>
    </section>
  )
}