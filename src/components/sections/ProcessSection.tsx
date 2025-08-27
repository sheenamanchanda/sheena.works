import { MessageCircle, FileText, Cog, CheckCircle, Clock, Shield } from 'lucide-react'

const processSteps = [
  {
    step: 1,
    title: 'Initial Consultation',
    description: 'Share your project requirements and receive a detailed proposal with timeline and pricing.',
    icon: MessageCircle,
    details: [
      'Free 15-minute consultation call',
      'Project scope discussion',
      'Custom proposal within 24 hours',
      'Clear timeline and deliverables'
    ],
    duration: '15 mins - 1 hour'
  },
  {
    step: 2,
    title: 'Project Planning',
    description: 'Detailed project plan with milestones, deliverables, and communication schedule.',
    icon: FileText,
    details: [
      'Project roadmap creation',
      'Milestone identification',
      'Communication plan setup',
      'Required documents collection'
    ],
    duration: '1-2 days'
  },
  {
    step: 3,
    title: 'Execution & Updates',
    description: 'Regular progress updates and collaborative working approach with client feedback.',
    icon: Cog,
    details: [
      'Regular progress reports',
      'Draft reviews and feedback',
      'Quality assurance checks',
      'Revision cycles included'
    ],
    duration: 'As per timeline'
  },
  {
    step: 4,
    title: 'Delivery & Support',
    description: 'Final delivery with comprehensive documentation and ongoing support as needed.',
    icon: CheckCircle,
    details: [
      'Final deliverable handover',
      'Complete documentation',
      '30-day support included',
      'Future collaboration options'
    ],
    duration: 'Final day + 30 days support'
  }
]

const qualityPromises = [
  {
    title: 'Confidentiality Guaranteed',
    description: 'All client information protected under advocate-client privilege and NDA agreements.',
    icon: Shield,
    color: 'text-primary-600 bg-primary-50'
  },
  {
    title: 'On-Time Delivery',
    description: 'Committed to meeting agreed deadlines with quality that never compromises speed.',
    icon: Clock,
    color: 'text-secondary-600 bg-secondary-50'
  },
  {
    title: 'Quality Assurance',
    description: 'Multiple review cycles ensuring accuracy, compliance, and professional standards.',
    icon: CheckCircle,
    color: 'text-green-600 bg-green-50'
  }
]

export default function ProcessSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-legal-dark mb-4">
            How We Work Together
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A transparent, collaborative process designed to deliver exceptional results while keeping you 
            informed and involved at every step of your project.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.step} className="relative">
                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-primary-200 z-0">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary-400 rounded-full"></div>
                    </div>
                  )}
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 relative z-10 h-full">
                    {/* Step Number */}
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="flex items-center justify-center w-10 h-10 bg-primary-600 text-white rounded-lg font-bold">
                        {step.step}
                      </div>
                      <div className="flex items-center justify-center w-10 h-10 bg-primary-100 rounded-lg">
                        <Icon className="w-5 h-5 text-primary-600" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold text-legal-dark mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details */}
                    <ul className="space-y-2 mb-4">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start space-x-2 text-xs text-gray-600">
                          <div className="w-1 h-1 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Duration */}
                    <div className="flex items-center space-x-2 text-xs text-gray-500 bg-gray-50 rounded-lg p-2">
                      <Clock className="w-3 h-3" />
                      <span className="font-medium">Duration: {step.duration}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Quality Promises */}
        <div className="bg-white rounded-xl p-8">
          <h3 className="text-2xl font-bold text-legal-dark text-center mb-8">
            Our Quality Commitments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {qualityPromises.map((promise) => {
              const Icon = promise.icon
              return (
                <div key={promise.title} className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${promise.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h4 className="font-semibold text-legal-dark mb-2">
                    {promise.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {promise.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Communication Preferences */}
        <div className="mt-12 bg-legal-dark text-white rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Preferred Communication</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span>Email for detailed project discussions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                  <span>WhatsApp for quick updates and clarifications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Video calls for complex requirement discussions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Shared documents for collaborative editing</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Response Times</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span>Email inquiries:</span>
                  <span className="font-medium text-primary-300">Within 2 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Project updates:</span>
                  <span className="font-medium text-secondary-300">Daily reports</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Urgent matters:</span>
                  <span className="font-medium text-yellow-300">Within 30 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Draft reviews:</span>
                  <span className="font-medium text-green-300">Same day</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}