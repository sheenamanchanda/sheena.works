import { Scale, FileText, Globe, GraduationCap, CheckCircle, Award } from 'lucide-react'

const serviceStats = [
  { label: 'Services Offered', value: '15+', icon: Scale },
  { label: 'Client Industries', value: '8+', icon: Globe },
  { label: 'Project Success Rate', value: '98%', icon: Award },
  { label: 'Years Experience', value: '5+', icon: CheckCircle }
]

const keyBenefits = [
  'Enrolled Advocate with Bar Council registration',
  'Multi-disciplinary expertise across law and languages',
  'Personalized service with direct client communication',
  'Transparent pricing with no hidden costs',
  'Fast turnaround times without compromising quality',
  'Ongoing support and revision included'
]

export default function ServicesHero() {
  return (
    <section className="relative py-16 bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 rotate-12">
          <Scale className="w-32 h-32 text-primary-600" />
        </div>
        <div className="absolute bottom-20 right-10 -rotate-12">
          <FileText className="w-28 h-28 text-secondary-600" />
        </div>
        <div className="absolute top-1/2 left-1/4 rotate-45">
          <Globe className="w-24 h-24 text-legal-gold" />
        </div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-legal-dark leading-tight">
                Professional Services for Modern Businesses
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Comprehensive legal, content, digital, and educational services delivered with 
                expertise, ethics, and efficiency by an Enrolled Advocate.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              {keyBenefits.map((benefit) => (
                <div key={benefit} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Service Categories Preview */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-primary-200">
                <Scale className="w-6 h-6 text-primary-600 mb-2" />
                <h3 className="font-medium text-legal-dark">Legal Services</h3>
                <p className="text-sm text-gray-600">Contracts, Research & Cyber Law</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-secondary-200">
                <FileText className="w-6 h-6 text-secondary-600 mb-2" />
                <h3 className="font-medium text-legal-dark">Content & Translation</h3>
                <p className="text-sm text-gray-600">Writing, Editing & EN-HI Translation</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-300">
                <Globe className="w-6 h-6 text-gray-600 mb-2" />
                <h3 className="font-medium text-legal-dark">Digital Services</h3>
                <p className="text-sm text-gray-600">Social Media & Voice-over</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-yellow-300">
                <GraduationCap className="w-6 h-6 text-yellow-600 mb-2" />
                <h3 className="font-medium text-legal-dark">Teaching & Tutoring</h3>
                <p className="text-sm text-gray-600">English, Law & Political Science</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-legal-dark mb-6 text-center">
                Service Excellence
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {serviceStats.map((stat) => {
                  const Icon = stat.icon
                  return (
                    <div key={stat.label} className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-3">
                        <Icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div className="text-2xl font-bold text-legal-dark mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {stat.label}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Professional Notice */}
            <div className="bg-legal-dark text-white rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <Scale className="w-6 h-6 text-legal-gold mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Professional Guarantee</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    All services are provided in compliance with Bar Council of India professional ethics. 
                    Client confidentiality and quality standards are strictly maintained.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}