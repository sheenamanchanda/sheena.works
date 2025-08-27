import { Shield, Heart, Target, Users, Award, CheckCircle } from 'lucide-react'
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

const coreValues = [
  {
    title: 'Professional Ethics',
    description: 'Unwavering commitment to legal ethics, client confidentiality, and professional integrity.',
    icon: Shield,
    color: 'text-primary-600 bg-primary-50',
    principles: [
      'Bar Council of India ethical guidelines',
      'Client-attorney privilege protection',
      'Transparent billing and communication',
      'Conflict of interest management'
    ]
  },
  {
    title: 'Client-Centric Service',
    description: 'Every decision and action is guided by what best serves our clients\' interests and needs.',
    icon: Heart,
    color: 'text-red-600 bg-red-50',
    principles: [
      'Personalized attention and service',
      'Regular communication and updates',
      'Flexible approach to client needs',
      'Long-term relationship building'
    ]
  },
  {
    title: 'Quality Excellence',
    description: 'Commitment to delivering exceptional quality in every project, regardless of size or complexity.',
    icon: Target,
    color: 'text-secondary-600 bg-secondary-50',
    principles: [
      'Multiple quality review processes',
      'Continuous improvement mindset',
      'Industry best practices adoption',
      'Measurable quality standards'
    ]
  },
  {
    title: 'Community Impact',
    description: 'Using professional skills to make a positive difference in the community and society.',
    icon: Users,
    color: 'text-green-600 bg-green-50',
    principles: [
      'Pro bono legal services for NGOs',
      'Free educational content creation',
      'Mentoring young professionals',
      'Legal awareness programs'
    ]
  }
]

const workingPrinciples = [
  {
    principle: 'Transparency First',
    description: 'Clear communication about scope, timeline, pricing, and progress at every step.',
    icon: CheckCircle
  },
  {
    principle: 'Deadline Commitment',
    description: 'Reliable delivery within agreed timelines without compromising on quality.',
    icon: Target
  },
  {
    principle: 'Continuous Learning',
    description: 'Staying updated with legal changes, industry trends, and new technologies.',
    icon: Award
  },
  {
    principle: 'Collaborative Approach',
    description: 'Working with clients as partners to achieve the best possible outcomes.',
    icon: Users
  }
]

const communityContributions = [
  {
    area: 'Legal Aid & Pro Bono Work',
    activities: [
      'Free legal consultations for NGOs and startups',
      'Contract template creation for small businesses',
      'Legal awareness workshops in local communities',
      'Pro bono document review for social initiatives'
    ],
    impact: '25+ organizations supported annually'
  },
  {
    area: 'Education & Mentoring',
    activities: [
      'Career guidance for law students',
      'Professional writing workshops',
      'English language support for underprivileged students',
      'Legal career path mentoring'
    ],
    impact: '50+ students mentored'
  },
  {
    area: 'Knowledge Sharing',
    activities: [
      'Free legal explainer content creation',
      'Open-source legal template libraries',
      'Educational blog posts and articles',
      'Social media legal awareness campaigns'
    ],
    impact: '100+ pieces of educational content'
  }
]

export default function ValuesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-legal-dark mb-4">
            Values & Working Principles
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The foundational values and principles that guide every client interaction, 
            project delivery, and professional decision in our practice.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {coreValues.map((value) => {
            const Icon = value.icon
            return (
              <Card key={value.title} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${value.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{value.title}</CardTitle>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <h4 className="font-semibold text-legal-dark mb-3">Key Principles:</h4>
                  <ul className="space-y-2">
                    {value.principles.map((principle) => (
                      <li key={principle} className="flex items-start space-x-2 text-sm text-gray-700">
                        <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                        <span>{principle}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Working Principles */}
        <div className="bg-white rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-legal-dark text-center mb-8">
            Daily Working Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workingPrinciples.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.principle} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h4 className="font-semibold text-legal-dark mb-2">{item.principle}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Community Contributions */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-legal-dark mb-4">
              Community Contributions & Social Impact
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Committed to using professional expertise for social good and community development 
              through various pro bono initiatives and educational programs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {communityContributions.map((contribution) => (
              <Card key={contribution.area} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-center">{contribution.area}</CardTitle>
                  <div className="text-center">
                    <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      {contribution.impact}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {contribution.activities.map((activity) => (
                      <li key={activity} className="flex items-start space-x-2 text-sm text-gray-700">
                        <Heart className="w-3 h-3 text-red-500 mt-1 flex-shrink-0" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Commitment */}
        <div className="mt-12 bg-legal-dark text-white rounded-xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold mb-4">Professional Commitment Statement</h3>
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-lg italic text-gray-300 mb-6">
                "I am committed to providing exceptional legal and professional services while maintaining 
                the highest ethical standards. Every client deserves dedicated attention, transparent communication, 
                and services that genuinely serve their best interests. Beyond individual client success, 
                I believe in using my skills to contribute positively to our community and society."
              </blockquote>
              <div className="text-right">
                <span className="text-primary-300 font-medium">— Sheena Manchanda, Enrolled Advocate</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-sm">
            <div>
              <div className="text-2xl font-bold text-primary-300 mb-2">100%</div>
              <div className="text-gray-300">Ethical Compliance</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary-300 mb-2">24/7</div>
              <div className="text-gray-300">Professional Standards</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-300 mb-2">∞</div>
              <div className="text-gray-300">Commitment to Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}