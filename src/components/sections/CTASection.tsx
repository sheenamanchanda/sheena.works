import Link from 'next/link'
import { ArrowRight, Mail, Calendar, FileText, MessageCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card, { CardContent } from '@/components/ui/Card'

const contactOptions = [
  {
    title: 'Get a Free Quote',
    description: 'Share your project details and receive a custom proposal',
    icon: FileText,
    href: '/contact',
    buttonText: 'Request Quote',
    color: 'bg-primary-600 text-white'
  },
  {
    title: 'Schedule Consultation',
    description: 'Book a 15-minute call to discuss your requirements',
    icon: Calendar,
    href: '/contact#consultation',
    buttonText: 'Book Call',
    color: 'bg-secondary-600 text-white'
  },
  {
    title: 'Email Directly',
    description: 'Send your inquiry directly to the appropriate service team',
    icon: Mail,
    href: '/contact#email',
    buttonText: 'Send Email',
    color: 'bg-legal-gold text-white'
  }
]

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="section-container">
        {/* Main CTA */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-legal-dark mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Let's discuss your project requirements and find the perfect solution. 
            Professional legal, content, and educational services are just a click away.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactOptions.map((option) => {
            const Icon = option.icon
            return (
              <Card key={option.title} className="text-center h-full border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${option.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-legal-dark mb-3">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {option.description}
                  </p>
                  <Link href={option.href}>
                    <Button className="w-full">
                      {option.buttonText}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Service Categories Quick Links */}
        <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
          <h3 className="text-xl font-semibold text-legal-dark text-center mb-6">
            Popular Service Categories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/services/legal"
              className="flex flex-col items-center p-4 rounded-lg hover:bg-primary-50 transition-colors duration-200 group"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary-200">
                <FileText className="w-6 h-6 text-primary-600" />
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-primary-600">
                Legal Services
              </span>
            </Link>

            <Link
              href="/services/content"
              className="flex flex-col items-center p-4 rounded-lg hover:bg-secondary-50 transition-colors duration-200 group"
            >
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-secondary-200">
                <MessageCircle className="w-6 h-6 text-secondary-600" />
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-secondary-600">
                Content Writing
              </span>
            </Link>

            <Link
              href="/services/digital"
              className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-200">
                <Mail className="w-6 h-6 text-gray-600" />
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-600">
                Digital Services
              </span>
            </Link>

            <Link
              href="/services/teaching"
              className="flex flex-col items-center p-4 rounded-lg hover:bg-yellow-50 transition-colors duration-200 group"
            >
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-yellow-200">
                <Calendar className="w-6 h-6 text-yellow-600" />
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-yellow-600">
                Teaching
              </span>
            </Link>
          </div>
        </div>

        {/* Response Time Promise */}
        <div className="text-center bg-legal-dark text-white rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-4">Our Response Time Promise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="text-2xl font-bold text-primary-300 mb-2">15 min</div>
              <div className="text-gray-300">Consultation requests</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary-300 mb-2">2 hours</div>
              <div className="text-gray-300">Quote requests</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-300 mb-2">24 hours</div>
              <div className="text-gray-300">Project inquiries</div>
            </div>
          </div>
          <p className="mt-6 text-gray-300 text-sm">
            Business hours: Monday to Friday, 9:00 AM to 6:00 PM IST
          </p>
        </div>
      </div>
    </section>
  )
}