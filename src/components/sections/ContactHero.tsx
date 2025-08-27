import { Mail, Calendar, MessageCircle, Phone, Clock, Shield } from 'lucide-react'

const contactMethods = [
  {
    title: 'Email Inquiry',
    description: 'Detailed project discussions and quotes',
    icon: Mail,
    response: '2 hours',
    best: 'Complex projects, detailed requirements'
  },
  {
    title: 'Schedule Call',
    description: '15-30 minute consultation call',
    icon: Calendar,
    response: '24 hours',
    best: 'Project planning, requirement clarification'
  },
  {
    title: 'Quick Message',
    description: 'Brief questions and initial inquiries',
    icon: MessageCircle,
    response: '1 hour',
    best: 'Quick questions, availability checks'
  }
]

const serviceInquiries = [
  'Legal Services (Contracts, Research)',
  'Content & Translation Services',
  'Digital Services & Social Media',
  'Teaching & Tutoring Services',
  'Custom Project Quotes',
  'Consultation & Advisory'
]

export default function ContactHero() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 rotate-12">
          <Mail className="w-24 h-24 text-primary-600" />
        </div>
        <div className="absolute bottom-20 right-20 -rotate-12">
          <Calendar className="w-20 h-20 text-secondary-600" />
        </div>
        <div className="absolute top-1/2 right-1/4 rotate-45">
          <MessageCircle className="w-16 h-16 text-legal-gold" />
        </div>
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-200 mb-6">
            <MessageCircle className="w-4 h-4 text-primary-600" />
            <span className="text-primary-700 font-medium">Get in Touch</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-legal-dark mb-6">
            Let's Discuss Your
            <span className="block text-primary-600">Project Needs</span>
          </h1>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Ready to start your project? Choose your preferred way to connect. 
            All inquiries receive personalized attention and prompt professional responses.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method) => {
            const Icon = method.icon
            return (
              <div key={method.title} className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-gray-200 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-legal-dark mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {method.description}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2 text-green-600">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">Response: {method.response}</span>
                  </div>
                  <div className="text-gray-600">
                    <strong>Best for:</strong> {method.best}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Service Inquiries */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 border border-gray-200 mb-8">
          <h3 className="text-2xl font-bold text-legal-dark text-center mb-6">
            What Can We Help You With?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceInquiries.map((inquiry) => (
              <div key={inquiry} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 font-medium text-sm">{inquiry}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Guarantee */}
        <div className="bg-legal-dark text-white rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-8 h-8 text-legal-gold" />
                <h3 className="text-xl font-semibold">Professional Guarantee</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-primary-400 rounded-full"></div>
                  <span>All inquiries handled with strict confidentiality</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-secondary-400 rounded-full"></div>
                  <span>No obligation consultations and quotes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                  <span>Transparent pricing with detailed proposals</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                  <span>Professional ethics and Bar Council compliance</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-600 rounded-full mb-4">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Immediate Assistance Needed?</h4>
              <p className="text-gray-300 text-sm mb-4">
                For urgent legal matters or time-sensitive projects, 
                mark your inquiry as "urgent" for priority handling.
              </p>
              <div className="text-primary-300 text-sm">
                Emergency consultation available within 2 hours
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-8 text-center text-gray-600">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="font-semibold text-legal-dark">Business Hours</div>
              <div className="text-sm">Monday - Friday: 9:00 AM - 6:00 PM IST</div>
            </div>
            <div>
              <div className="font-semibold text-legal-dark">Weekend Support</div>
              <div className="text-sm">Saturday: 10:00 AM - 2:00 PM IST</div>
            </div>
            <div>
              <div className="font-semibold text-legal-dark">Response Guarantee</div>
              <div className="text-sm">All inquiries acknowledged within 2 hours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}