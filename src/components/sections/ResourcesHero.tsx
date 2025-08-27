import { Download, BookOpen, FileText, Users, Gift, Star } from 'lucide-react'

const resourceStats = [
  { label: 'Free Resources', value: '50+', icon: Gift },
  { label: 'Downloads', value: '1,000+', icon: Download },
  { label: 'Resource Categories', value: '8', icon: BookOpen },
  { label: 'Users Helped', value: '500+', icon: Users }
]

const resourceTypes = [
  'Legal Contract Templates',
  'Business Formation Guides', 
  'Cyber Law Explainers',
  'Writing & Grammar Resources',
  'Translation Guidelines',
  'Social Media Templates',
  'Academic Writing Guides',
  'Professional Development Tools'
]

export default function ResourcesHero() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 rotate-12">
          <BookOpen className="w-32 h-32 text-green-600" />
        </div>
        <div className="absolute bottom-16 right-16 -rotate-12">
          <FileText className="w-28 h-28 text-blue-600" />
        </div>
        <div className="absolute top-1/2 right-1/4 rotate-45">
          <Download className="w-24 h-24 text-purple-600" />
        </div>
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200 mb-6">
            <Gift className="w-4 h-4 text-green-600" />
            <span className="text-green-700 font-medium">Free Professional Resources</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-legal-dark mb-6">
            Free Resources for
            <span className="block text-green-600">Professional Growth</span>
          </h1>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Access a comprehensive library of free legal templates, business guides, 
            writing resources, and educational content to support your professional journey.
          </p>

          {/* Value Proposition */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-gray-200 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-legal-dark font-medium">Always Free</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Download className="w-5 h-5 text-blue-500" />
                <span className="text-legal-dark font-medium">Instant Access</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <BookOpen className="w-5 h-5 text-green-500" />
                <span className="text-legal-dark font-medium">Expert Created</span>
              </div>
            </div>
          </div>
        </div>

        {/* Resource Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {resourceStats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-200">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-3">
                  <Icon className="w-6 h-6 text-green-600" />
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

        {/* Resource Types */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 border border-gray-200 mb-8">
          <h3 className="text-2xl font-bold text-legal-dark text-center mb-6">
            Available Resource Categories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {resourceTypes.map((type) => (
              <div 
                key={type}
                className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg text-sm"
              >
                <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">{type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-legal-dark text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-300 max-w-3xl mx-auto mb-6">
            Making professional legal and business knowledge accessible to everyone. 
            These resources represent our commitment to empowering individuals and small businesses 
            with the tools they need to succeed while maintaining professional standards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="text-2xl font-bold text-green-300 mb-2">100%</div>
              <div className="text-gray-300">Free Forever</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-300 mb-2">Expert</div>
              <div className="text-gray-300">Reviewed Content</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-300 mb-2">Regular</div>
              <div className="text-gray-300">Updates & Additions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}