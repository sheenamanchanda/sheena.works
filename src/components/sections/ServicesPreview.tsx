import Link from 'next/link'
import { Scale, FileText, Globe, GraduationCap, ArrowRight, Clock, Users, Award } from 'lucide-react'
import Card, { CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const services = [
  {
    id: 'legal',
    title: 'Legal Services',
    icon: Scale,
    description: 'Professional legal research, contract drafting, case digests, and cyber law consultation.',
    features: ['Contract Drafting & Review', 'Legal Research & Memos', 'Cyber Law Consultation', 'Policy Briefs'],
    pricing: 'Starting from ₹2,000',
    turnaround: '2-5 business days',
    clientTypes: ['Startups', 'SMBs', 'Individuals'],
    href: '/services/legal',
    color: 'primary'
  },
  {
    id: 'content',
    title: 'Content & Translation',
    icon: FileText,
    description: 'Expert English-Hindi translation, content writing, editing, and academic support.',
    features: ['English ↔ Hindi Translation', 'Content Writing', 'Editing & Proofreading', 'Academic Writing'],
    pricing: 'Starting from ₹500',
    turnaround: '1-3 business days',
    clientTypes: ['Publishers', 'Students', 'Businesses'],
    href: '/services/content',
    color: 'secondary'
  },
  {
    id: 'digital',
    title: 'Digital Services',
    icon: Globe,
    description: 'Social media management, voice-over services, and content strategy for digital growth.',
    features: ['Social Media Management', 'Voice-over Services', 'Content Strategy', 'Digital Marketing'],
    pricing: 'Starting from ₹5,000',
    turnaround: 'Ongoing support',
    clientTypes: ['NGOs', 'SMBs', 'Personal Brands'],
    href: '/services/digital',
    color: 'legal'
  },
  {
    id: 'teaching',
    title: 'Teaching & Tutoring',
    icon: GraduationCap,
    description: 'Professional English tutoring, political science, and law fundamentals education.',
    features: ['English (Spoken/Written)', 'Political Science', 'Law Fundamentals', 'Professional Writing'],
    pricing: 'Starting from ₹800/hour',
    turnaround: 'Flexible scheduling',
    clientTypes: ['Students', 'Professionals', 'Job Seekers'],
    href: '/services/teaching',
    color: 'gold'
  }
]

const colorClasses = {
  primary: 'bg-primary-50 border-primary-200 text-primary-600',
  secondary: 'bg-secondary-50 border-secondary-200 text-secondary-600',
  legal: 'bg-gray-50 border-gray-200 text-gray-700',
  gold: 'bg-yellow-50 border-yellow-200 text-yellow-600'
}

export default function ServicesPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-legal-dark mb-4">
            Professional Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive legal, content, digital, and educational services designed to meet your professional needs 
            with expertise, efficiency, and ethical standards.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.id} className="h-full flex flex-col">
                <CardHeader>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${colorClasses[service.color as keyof typeof colorClasses]}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent className="flex-grow">
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Pricing:</span>
                      <span className="font-medium text-legal-dark">{service.pricing}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Turnaround:</span>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3 text-gray-400" />
                        <span className="text-gray-700">{service.turnaround}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Ideal for:</span>
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3 text-gray-400" />
                        <span className="text-gray-700">{service.clientTypes.join(', ')}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <Link href={service.href} className="w-full">
                    <Button variant="outline" size="sm" className="w-full">
                      Learn More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        {/* Service Highlights */}
        <div className="bg-gray-50 rounded-xl p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center w-12 h-12 bg-primary-600 rounded-lg mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-legal-dark mb-2">Quality Assured</h3>
              <p className="text-gray-600 text-sm">
                Every project is reviewed for accuracy, compliance, and professional standards.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-12 h-12 bg-secondary-600 rounded-lg mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-legal-dark mb-2">Timely Delivery</h3>
              <p className="text-gray-600 text-sm">
                Committed to meeting deadlines while maintaining the highest quality standards.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-12 h-12 bg-legal-gold rounded-lg mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-legal-dark mb-2">Client-Focused</h3>
              <p className="text-gray-600 text-sm">
                Personalized approach understanding your unique needs and requirements.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Ready to get started? Choose a service or get a custom quote for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">
                Get Custom Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="secondary" size="lg">
                View Work Samples
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}