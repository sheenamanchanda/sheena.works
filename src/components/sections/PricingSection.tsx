import { Check, Star, ArrowRight, Clock, Users, Award } from 'lucide-react'
import Card, { CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Link from 'next/link'

const pricingTiers = [
  {
    name: 'Essential',
    description: 'Perfect for individuals and small projects',
    price: '₹500',
    period: 'Starting from',
    features: [
      'Basic document review',
      'Simple translation (up to 500 words)',
      'Email support',
      '2 revision cycles',
      '3-day turnaround',
      'Standard formatting'
    ],
    idealFor: ['Students', 'Individuals', 'Small businesses'],
    popular: false,
    cta: 'Get Started',
    href: '/contact?plan=essential'
  },
  {
    name: 'Professional',
    description: 'Most popular choice for businesses',
    price: '₹2,500',
    period: 'Starting from',
    features: [
      'Comprehensive legal research',
      'Contract drafting & review',
      'Professional translation',
      'Priority email & phone support',
      'Unlimited revisions',
      '48-hour turnaround',
      'Custom formatting',
      'Progress tracking',
      '30-day support'
    ],
    idealFor: ['SMBs', 'Startups', 'Publishers'],
    popular: true,
    cta: 'Most Popular',
    href: '/contact?plan=professional'
  },
  {
    name: 'Enterprise',
    description: 'Comprehensive solutions for large projects',
    price: '₹10,000',
    period: 'Starting from',
    features: [
      'Complex legal documentation',
      'Multi-document projects',
      'Dedicated project manager',
      '24/7 priority support',
      'Unlimited revisions',
      'Same-day turnaround option',
      'Custom templates',
      'Monthly strategy calls',
      '90-day support',
      'Volume discounts'
    ],
    idealFor: ['Enterprises', 'Law firms', 'Large projects'],
    popular: false,
    cta: 'Contact Sales',
    href: '/contact?plan=enterprise'
  }
]

const addOnServices = [
  { name: 'Rush Delivery (24 hours)', price: '+50% of base price' },
  { name: 'Additional Revision Cycles', price: '₹500 per cycle' },
  { name: 'Video Consultation (30 mins)', price: '₹2,000' },
  { name: 'Document Notarization Support', price: '₹1,500' },
  { name: 'Legal Opinion Letter', price: '₹3,000 - ₹7,500' },
  { name: 'Contract Templates Library', price: '₹5,000' }
]

export default function PricingSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-legal-dark mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Clear, upfront pricing with no hidden fees. Choose the plan that best fits your needs, 
            or get a custom quote for specialized projects.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pricingTiers.map((tier) => (
            <Card 
              key={tier.name} 
              className={`relative h-full ${
                tier.popular ? 'border-2 border-primary-500 shadow-lg' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-3 h-3" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                <p className="text-gray-600 text-sm mb-4">{tier.description}</p>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold text-legal-dark">{tier.price}</div>
                  <div className="text-sm text-gray-500">{tier.period}</div>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  {tier.idealFor.map((type) => (
                    <span 
                      key={type}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-3">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Link href={tier.href} className="w-full">
                  <Button 
                    className={`w-full ${
                      tier.popular 
                        ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Add-on Services */}
        <div className="bg-white rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-legal-dark text-center mb-6">
            Additional Services & Add-ons
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOnServices.map((addon) => (
              <div 
                key={addon.name}
                className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
              >
                <span className="text-sm font-medium text-legal-dark">
                  {addon.name}
                </span>
                <span className="text-sm text-primary-600 font-semibold">
                  {addon.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-primary-50 rounded-lg">
            <Clock className="w-8 h-8 text-primary-600 mx-auto mb-3" />
            <h4 className="font-semibold text-legal-dark mb-2">Fast Turnaround</h4>
            <p className="text-sm text-gray-600">
              Most projects completed within 48 hours without compromising quality.
            </p>
          </div>

          <div className="text-center p-6 bg-secondary-50 rounded-lg">
            <Users className="w-8 h-8 text-secondary-600 mx-auto mb-3" />
            <h4 className="font-semibold text-legal-dark mb-2">Direct Access</h4>
            <p className="text-sm text-gray-600">
              Work directly with the advocate, no middlemen or project coordinators.
            </p>
          </div>

          <div className="text-center p-6 bg-yellow-50 rounded-lg">
            <Award className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
            <h4 className="font-semibold text-legal-dark mb-2">Quality Guarantee</h4>
            <p className="text-sm text-gray-600">
              100% satisfaction guarantee with unlimited revisions included.
            </p>
          </div>
        </div>

        {/* Custom Quote CTA */}
        <div className="bg-legal-dark text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Need a Custom Quote?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            For complex projects, bulk orders, or ongoing retainer arrangements, 
            get a personalized quote tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?type=quote">
              <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
                Get Custom Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/contact?type=consultation">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-legal-dark">
                Schedule Consultation
              </Button>
            </Link>
          </div>
          
          <div className="mt-6 text-sm text-gray-400">
            <p>💡 <strong>Tip:</strong> Bulk projects and retainer clients receive up to 30% discount</p>
          </div>
        </div>
      </div>
    </section>
  )
}