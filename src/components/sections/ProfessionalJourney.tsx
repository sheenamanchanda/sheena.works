import { Calendar, MapPin, Building, Users, Award, TrendingUp } from 'lucide-react'
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

const journeyMilestones = [
  {
    year: '2018-2019',
    title: 'Legal Education & Bar Admission',
    organization: 'Law College & Bar Council of India',
    location: 'Delhi NCR',
    description: 'Completed LLB with specialization in Cyber Law. Successfully enrolled with Bar Council of India.',
    achievements: [
      'LLB degree with honors',
      'Cyber Law specialization certification',
      'Bar Council enrollment',
      'Legal research internships'
    ],
    icon: Award,
    color: 'bg-primary-50 text-primary-600'
  },
  {
    year: '2019-2021',
    title: 'Legal Practice & Research',
    organization: 'Independent Practice & Legal Research',
    location: 'Delhi NCR',
    description: 'Began independent legal practice focusing on contract law, cyber regulations, and legal research services.',
    achievements: [
      '50+ legal research projects',
      'Contract drafting expertise',
      'Cyber law consultation services',
      'SMB legal advisory'
    ],
    icon: Building,
    color: 'bg-secondary-50 text-secondary-600'
  },
  {
    year: '2021-2022',
    title: 'Content & Translation Services',
    organization: 'Freelance & Agency Partnerships',
    location: 'Remote & Delhi NCR',
    description: 'Expanded into content writing and English-Hindi translation, leveraging bilingual expertise.',
    achievements: [
      '200+ translation projects',
      'Academic writing specialization',
      'Publishing industry partnerships',
      'Content strategy development'
    ],
    icon: Users,
    color: 'bg-green-50 text-green-600'
  },
  {
    year: '2022-2024',
    title: 'Digital Services & Teaching',
    organization: 'Multi-disciplinary Practice',
    location: 'Delhi NCR & Online',
    description: 'Integrated digital services and professional tutoring, creating a comprehensive service portfolio.',
    achievements: [
      '100+ students mentored',
      'Social media strategy expertise',
      'Voice-over service launch',
      'Digital content specialization'
    ],
    icon: TrendingUp,
    color: 'bg-purple-50 text-purple-600'
  },
  {
    year: '2024-Present',
    title: 'Integrated Professional Services',
    organization: 'Sheena.Works',
    location: 'Delhi NCR & Global Remote',
    description: 'Launched comprehensive professional services platform combining legal, content, digital, and educational expertise.',
    achievements: [
      'Multi-service platform launch',
      '300+ successful projects',
      'International client base',
      'Professional website launch'
    ],
    icon: Award,
    color: 'bg-legal-gold bg-opacity-20 text-yellow-700'
  }
]

const keyMilestones = [
  { metric: '300+', label: 'Projects Completed', description: 'Across all service categories' },
  { metric: '50+', label: 'Regular Clients', description: 'Recurring project partnerships' },
  { metric: '98%', label: 'Client Satisfaction', description: 'Based on project feedback' },
  { metric: '15+', label: 'Service Offerings', description: 'Comprehensive professional solutions' }
]

export default function ProfessionalJourney() {
  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-legal-dark mb-4">
            Professional Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From legal education to multi-disciplinary professional services, 
            a journey of continuous learning and service excellence.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 to-secondary-300 transform md:-translate-x-0.5"></div>

          <div className="space-y-8">
            {journeyMilestones.map((milestone, index) => {
              const Icon = milestone.icon
              const isEven = index % 2 === 0
              
              return (
                <div key={milestone.year} className={`relative flex ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-white border-4 border-primary-400 rounded-full transform md:-translate-x-1.5 z-10 mt-6"></div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 ${isEven ? 'md:mr-8' : 'md:ml-8'} md:w-1/2`}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-3">
                          <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${milestone.color}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="text-right text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>{milestone.year}</span>
                            </div>
                            <div className="flex items-center space-x-1 mt-1">
                              <MapPin className="w-3 h-3" />
                              <span>{milestone.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        <CardTitle className="text-lg mb-1">{milestone.title}</CardTitle>
                        <p className="text-sm text-primary-600 font-medium mb-3">{milestone.organization}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
                      </CardHeader>

                      <CardContent>
                        <div>
                          <h4 className="font-semibold text-legal-dark mb-2 text-sm">Key Achievements:</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                            {milestone.achievements.map((achievement) => (
                              <li key={achievement} className="flex items-center space-x-2 text-xs text-gray-600">
                                <div className="w-1 h-1 bg-primary-600 rounded-full flex-shrink-0"></div>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-legal-dark text-center mb-8">
            Professional Milestones
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {keyMilestones.map((milestone) => (
              <div key={milestone.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {milestone.metric}
                </div>
                <div className="font-semibold text-legal-dark mb-1">
                  {milestone.label}
                </div>
                <div className="text-xs text-gray-600">
                  {milestone.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <div className="mt-12 bg-legal-dark text-white rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Current Focus Areas</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Expanding cyber law consultation services for startups and SMBs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Developing comprehensive legal template libraries</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Building multilingual content strategy expertise</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Creating professional development and mentoring programs</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center md:text-right">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-600 rounded-full mb-4">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Looking Forward</h4>
              <p className="text-gray-300 text-sm">
                Committed to expanding service offerings while maintaining the personalized, 
                high-quality approach that defines our practice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}