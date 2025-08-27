import { Star, Quote } from 'lucide-react'
import Card, { CardContent } from '@/components/ui/Card'

const testimonials = [
  {
    id: 1,
    content: "Sheena's legal research and contract drafting services have been invaluable for our startup. Her attention to detail and clear communication made complex legal matters understandable and manageable.",
    author: "Anonymous Startup Founder",
    role: "Tech Startup, Mumbai",
    rating: 5,
    service: "Legal Services"
  },
  {
    id: 2,
    content: "Exceptional translation quality and cultural sensitivity. Sheena helped us localize our content for the Indian market with perfect accuracy and cultural nuance.",
    author: "Content Manager",
    role: "Publishing House, Delhi",
    rating: 5,
    service: "Translation Services"
  },
  {
    id: 3,
    content: "Professional English tutoring that significantly improved my communication skills. Sheena's teaching approach is patient, structured, and highly effective.",
    author: "Working Professional",
    role: "Banking Sector, Gurgaon",
    rating: 5,
    service: "Teaching & Tutoring"
  },
  {
    id: 4,
    content: "Outstanding content strategy and social media management. Our NGO's digital presence improved dramatically, leading to increased community engagement.",
    author: "Program Director",
    role: "NGO, Delhi NCR",
    rating: 5,
    service: "Digital Services"
  }
]

const stats = [
  { label: "Client Satisfaction", value: "98%", description: "Based on project reviews" },
  { label: "On-Time Delivery", value: "100%", description: "Projects completed on schedule" },
  { label: "Repeat Clients", value: "85%", description: "Return for additional services" },
  { label: "Average Rating", value: "4.9/5", description: "Across all service categories" }
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-legal-dark mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from satisfied clients across legal services, content creation, digital marketing, and education sectors.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-1">
                {stat.value}
              </div>
              <div className="font-medium text-legal-dark text-sm mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary-200 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 mb-4 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author Info */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-legal-dark">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                    <div className="text-xs text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                      {testimonial.service}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gray-50 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold text-legal-dark mb-4">
            Trusted by Professionals Across Industries
          </h3>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
              <span>Technology Startups</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-secondary-600 rounded-full"></div>
              <span>Educational Institutions</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-legal-gold rounded-full"></div>
              <span>Publishing Houses</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <span>Non-Profit Organizations</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span>Individual Professionals</span>
            </div>
          </div>
        </div>

        {/* Privacy Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            <strong>Privacy Notice:</strong> All client testimonials are shared with permission and anonymized to protect client confidentiality. 
            Specific project details are not disclosed in compliance with professional ethics.
          </p>
        </div>
      </div>
    </section>
  )
}