import Link from 'next/link'
import { Scale, FileText, Globe, GraduationCap, ArrowRight, Clock, Users, Star, CheckCircle } from 'lucide-react'
import Card, { CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const serviceCategories = [
  {
    id: 'legal',
    title: 'Legal Services',
    subtitle: 'Professional legal research and documentation',
    icon: Scale,
    description: 'Comprehensive legal services by an Enrolled Advocate specializing in contract law and cyber regulations.',
    services: [
      { name: 'Contract Drafting & Review', price: '₹2,000 - ₹10,000', turnaround: '2-5 days' },
      { name: 'Legal Research & Memos', price: '₹1,500 - ₹5,000', turnaround: '1-3 days' },
      { name: 'Case Digests & Summaries', price: '₹1,000 - ₹3,000', turnaround: '1-2 days' },
      { name: 'Cyber Law Consultation', price: '₹2,500 - ₹7,500', turnaround: '2-4 days' },
      { name: 'Policy Briefs & Analysis', price: '₹3,000 - ₹8,000', turnaround: '3-5 days' },
    ],
    keyFeatures: [
      'Bar Council registered advocate',
      'Specialized in cyber law',
      'Contract law expertise',
      'Legal compliance review'
    ],
    idealFor: ['Startups', 'SMBs', 'Legal firms', 'Individuals'],
    href: '/services/legal',
    color: 'primary'
  },
  {
    id: 'content',
    title: 'Content & Translation',
    subtitle: 'Expert writing and bilingual translation',
    icon: FileText,
    description: 'Professional content creation, editing, and English-Hindi translation services with cultural sensitivity.',
    services: [
      { name: 'English ↔ Hindi Translation', price: '₹2 - ₹5 per word', turnaround: '1-3 days' },
      { name: 'Content Writing & Copywriting', price: '₹500 - ₹2,000', turnaround: '1-2 days' },
      { name: 'Editing & Proofreading', price: '₹300 - ₹1,500', turnaround: 'Same day' },
      { name: 'Academic Writing Support', price: '₹1,000 - ₹5,000', turnaround: '2-7 days' },
      { name: 'Technical Documentation', price: '₹1,500 - ₹4,000', turnaround: '2-4 days' },
    ],
    keyFeatures: [
      'Native bilingual speaker',
      'Cultural adaptation included',
      'SEO-optimized content',
      'Academic writing experience'
    ],
    idealFor: ['Publishers', 'Students', 'Businesses', 'Authors'],
    href: '/services/content',
    color: 'secondary'
  },
  {
    id: 'digital',
    title: 'Digital Services',
    subtitle: 'Social media and digital content solutions',
    icon: Globe,
    description: 'Strategic digital services including social media management, voice-over, and content strategy.',
    services: [
      { name: 'Social Media Management', price: '₹5,000 - ₹15,000/month', turnaround: 'Ongoing' },
      { name: 'Voice-over Services', price: '₹1,000 - ₹3,000', turnaround: '1-2 days' },
      { name: 'Content Strategy Planning', price: '₹3,000 - ₹8,000', turnaround: '3-5 days' },
      { name: 'Digital Marketing Copy', price: '₹800 - ₹2,500', turnaround: '1-2 days' },
      { name: 'Script Writing', price: '₹1,500 - ₹5,000', turnaround: '2-4 days' },
    ],
    keyFeatures: [
      'Multi-platform expertise',
      'Script-based voice-over',
      'ROI-focused strategies',
      'Brand voice development'
    ],
    idealFor: ['NGOs', 'SMBs', 'Personal brands', 'Startups'],
    href: '/services/digital',
    color: 'gray'
  },
  {
    id: 'teaching',
    title: 'Teaching & Tutoring',
    subtitle: 'Professional education and skill development',
    icon: GraduationCap,
    description: 'Personalized tutoring in English, Political Science, and Law with focus on practical application.',
    services: [
      { name: 'English Tutoring (Spoken/Written)', price: '₹800 - ₹1,500/hour', turnaround: 'Flexible' },
      { name: 'Political Science Tutoring', price: '₹1,000 - ₹2,000/hour', turnaround: 'Flexible' },
      { name: 'Law Fundamentals', price: '₹1,200 - ₹2,500/hour', turnaround: 'Flexible' },
      { name: 'Professional Writing Training', price: '₹1,500 - ₹3,000/session', turnaround: 'Flexible' },
      { name: 'Career Guidance Sessions', price: '₹2,000 - ₹4,000/session', turnaround: '1 hour' },
    ],
    keyFeatures: [
      'Personalized curriculum',
      'Practical skill focus',
      'Flexible scheduling',
      'Progress tracking'
    ],
    idealFor: ['Students', 'Professionals', 'Job seekers', 'Career changers'],
    href: '/services/teaching',
    color: 'yellow'
  }
]

const colorClasses = {
  primary: {
    icon: 'bg-primary-100 text-primary-600 border-primary-200',
    button: 'btn-primary'
  },
  secondary: {
    icon: 'bg-secondary-100 text-secondary-600 border-secondary-200',
    button: 'bg-secondary-600 hover:bg-secondary-700 text-white'
  },
  gray: {
    icon: 'bg-gray-100 text-gray-600 border-gray-200',
    button: 'bg-gray-700 hover:bg-gray-800 text-white'
  },
  yellow: {
    icon: 'bg-yellow-100 text-yellow-600 border-yellow-200',
    button: 'bg-yellow-600 hover:bg-yellow-700 text-white'
  }
}

export default function ServiceCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-legal-dark mb-4">
            Service Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Choose from our comprehensive range of professional services, each designed to deliver 
            exceptional value with transparent pricing and clear timelines.
          </p>
        </div>

        {/* Service Categories Grid */}
        <div className="space-y-12">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon
            const colorClass = colorClasses[category.color as keyof typeof colorClasses]
            
            return (
              <div 
                key={category.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Service Info */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl border-2 ${colorClass.icon}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-legal-dark mb-2">
                        {category.title}
                      </h3>
                      <p className="text-lg text-primary-600 font-medium mb-4">
                        {category.subtitle}
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-legal-dark mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {category.keyFeatures.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div>
                    <h4 className="font-semibold text-legal-dark mb-3">Ideal for:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.idealFor.map((clientType) => (
                        <span 
                          key={clientType}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {clientType}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href={category.href}>
                    <Button className={colorClass.button}>
                      View All Services
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>

                {/* Service List */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-yellow-500" />
                        <span>Popular Services</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {category.services.map((service) => (
                          <div 
                            key={service.name}
                            className="flex justify-between items-start p-3 bg-gray-50 rounded-lg"
                          >
                            <div className="flex-1">
                              <h5 className="font-medium text-legal-dark mb-1">
                                {service.name}
                              </h5>
                              <div className="flex items-center space-x-4 text-sm text-gray-600">
                                <div className="flex items-center space-x-1">
                                  <span className="font-medium">Price:</span>
                                  <span>{service.price}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Clock className="w-3 h-3" />
                                  <span>{service.turnaround}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href={category.href} className="w-full">
                        <Button variant="outline" size="sm" className="w-full">
                          Get Detailed Pricing
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}