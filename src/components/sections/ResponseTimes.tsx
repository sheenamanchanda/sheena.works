import { Clock, MessageCircle, Calendar, Phone, CheckCircle, AlertCircle } from 'lucide-react'

const responseMetrics = [
  {
    type: 'Initial Response',
    timeframe: '2 hours',
    description: 'Acknowledgment and next steps',
    icon: MessageCircle,
    color: 'text-primary-600 bg-primary-50'
  },
  {
    type: 'Detailed Proposal',
    timeframe: '24-48 hours',
    description: 'Custom quote and project plan',
    icon: Calendar,
    color: 'text-secondary-600 bg-secondary-50'
  },
  {
    type: 'Urgent Matters',
    timeframe: '1 hour',
    description: 'High-priority project response',
    icon: AlertCircle,
    color: 'text-red-600 bg-red-50'
  },
  {
    type: 'Consultation Calls',
    timeframe: '24 hours',
    description: 'Scheduling confirmation',
    icon: Phone,
    color: 'text-green-600 bg-green-50'
  }
]

const responseProcess = [
  {
    step: 1,
    title: 'Inquiry Received',
    description: 'Your message is received and categorized by service type for appropriate routing.',
    time: 'Immediate'
  },
  {
    step: 2,
    title: 'Initial Review',
    description: 'Project requirements are reviewed and initial assessment is completed.',
    time: 'Within 30 minutes'
  },
  {
    step: 3,
    title: 'Response Sent',
    description: 'Personalized response with next steps, questions, or proposal timeline.',
    time: 'Within 2 hours'
  },
  {
    step: 4,
    title: 'Follow-up',
    description: 'Detailed proposal, consultation scheduling, or project kickoff.',
    time: '24-48 hours'
  }
]

const availabilityLevels = [
  {
    level: 'Standard Response',
    hours: 'Mon-Fri, 9 AM - 6 PM IST',
    description: 'Regular business inquiries and project discussions',
    guarantee: '2 hours response time',
    status: 'active'
  },
  {
    level: 'Extended Hours',
    hours: 'Sat, 10 AM - 2 PM IST',
    description: 'Limited availability for urgent matters only',
    guarantee: '4 hours response time',
    status: 'limited'
  },
  {
    level: 'Emergency Support',
    hours: '24/7 (Urgent matters only)',
    description: 'Time-sensitive legal matters requiring immediate attention',
    guarantee: '1 hour response time',
    status: 'urgent'
  }
]

const communicationPreferences = [
  { method: 'Email', best: 'Detailed project discussions', response: 'Most comprehensive' },
  { method: 'Contact Form', best: 'New project inquiries', response: 'Structured response' },
  { method: 'Phone Consultation', best: 'Complex requirement clarification', response: 'Immediate discussion' },
  { method: 'Video Call', best: 'Document review and planning', response: 'Screen sharing available' }
]

export default function ResponseTimes() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-legal-dark mb-4">
            Response Time Commitments
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We understand that your time is valuable. Here are our guaranteed response times 
            and the process you can expect when reaching out for professional services.
          </p>
        </div>

        {/* Response Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {responseMetrics.map((metric) => {
            const Icon = metric.icon
            return (
              <div key={metric.type} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${metric.color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-2xl font-bold text-legal-dark mb-2">
                  {metric.timeframe}
                </div>
                <div className="font-semibold text-legal-dark mb-2">
                  {metric.type}
                </div>
                <div className="text-sm text-gray-600">
                  {metric.description}
                </div>
              </div>
            )
          })}
        </div>

        {/* Response Process */}
        <div className="bg-white rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-legal-dark text-center mb-8">
            Our Response Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {responseProcess.map((process, index) => (
              <div key={process.step} className="relative">
                {/* Connection Line */}
                {index < responseProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-primary-200 z-0">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary-400 rounded-full"></div>
                  </div>
                )}
                
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full font-bold text-lg mb-4">
                    {process.step}
                  </div>
                  <h4 className="font-semibold text-legal-dark mb-2">
                    {process.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    {process.description}
                  </p>
                  <div className="inline-flex items-center space-x-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    <Clock className="w-3 h-3" />
                    <span>{process.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Availability Levels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {availabilityLevels.map((level) => (
            <div 
              key={level.level}
              className={`bg-white rounded-xl p-6 border-2 ${
                level.status === 'active' ? 'border-primary-200' :
                level.status === 'limited' ? 'border-yellow-200' :
                'border-red-200'
              }`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-4 h-4 rounded-full ${
                  level.status === 'active' ? 'bg-green-500' :
                  level.status === 'limited' ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}></div>
                <h3 className="text-lg font-semibold text-legal-dark">
                  {level.level}
                </h3>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-medium text-gray-700">Hours:</div>
                  <div className="text-sm text-gray-600">{level.hours}</div>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-gray-700">Best for:</div>
                  <div className="text-sm text-gray-600">{level.description}</div>
                </div>
                
                <div className={`p-3 rounded-lg ${
                  level.status === 'active' ? 'bg-green-50' :
                  level.status === 'limited' ? 'bg-yellow-50' :
                  'bg-red-50'
                }`}>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className={`w-4 h-4 ${
                      level.status === 'active' ? 'text-green-600' :
                      level.status === 'limited' ? 'text-yellow-600' :
                      'text-red-600'
                    }`} />
                    <span className={`text-sm font-medium ${
                      level.status === 'active' ? 'text-green-800' :
                      level.status === 'limited' ? 'text-yellow-800' :
                      'text-red-800'
                    }`}>
                      {level.guarantee}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Communication Preferences */}
        <div className="bg-white rounded-xl p-8">
          <h3 className="text-2xl font-bold text-legal-dark text-center mb-6">
            Communication Methods & Response Quality
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communicationPreferences.map((pref) => (
              <div key={pref.method} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-semibold text-legal-dark mb-1">
                    {pref.method}
                  </h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div><strong>Best for:</strong> {pref.best}</div>
                    <div><strong>Response style:</strong> {pref.response}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Response Guarantee */}
        <div className="mt-16 bg-legal-dark text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Our Response Guarantee
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto mb-6">
            We commit to these response times and track our performance to ensure consistent, 
            reliable communication. If we don't meet these commitments, we'll make it right.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="text-2xl font-bold text-primary-300 mb-2">99.5%</div>
              <div className="text-gray-300">On-time response rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary-300 mb-2">1.2 hrs</div>
              <div className="text-gray-300">Average response time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-300 mb-2">4.9/5</div>
              <div className="text-gray-300">Communication satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}