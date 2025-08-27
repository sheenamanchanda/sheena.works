import { Download, FileText, BookOpen, Lightbulb, Users, Globe, GraduationCap, Scale } from 'lucide-react'
import Card, { CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const freeResources = [
  {
    id: 1,
    title: 'Startup Contract Templates Bundle',
    category: 'Legal Templates',
    description: 'Essential contract templates for startups including employment agreements, vendor contracts, and NDAs.',
    icon: Scale,
    color: 'text-primary-600 bg-primary-50',
    items: [
      'Employment Agreement Template',
      'Vendor Service Contract',
      'Non-Disclosure Agreement',
      'Terms of Service Template',
      'Privacy Policy Template'
    ],
    format: 'DOCX + PDF',
    pages: '25+ pages',
    downloads: '500+',
    featured: true
  },
  {
    id: 2,
    title: 'Small Business Legal Guide',
    category: 'Business Guides',
    description: 'Comprehensive guide covering legal essentials for small business owners in India.',
    icon: BookOpen,
    color: 'text-secondary-600 bg-secondary-50',
    items: [
      'Business Registration Process',
      'Tax Compliance Basics',
      'Employee Rights & Obligations',
      'Contract Law Fundamentals',
      'Dispute Resolution Options'
    ],
    format: 'PDF',
    pages: '40 pages',
    downloads: '350+',
    featured: false
  },
  {
    id: 3,
    title: 'Professional Writing Toolkit',
    category: 'Writing Resources',
    description: 'Templates and guidelines for professional communication, proposals, and business writing.',
    icon: FileText,
    color: 'text-green-600 bg-green-50',
    items: [
      'Business Proposal Template',
      'Professional Email Templates',
      'Report Writing Guidelines',
      'Grammar Quick Reference',
      'Style Guide Checklist'
    ],
    format: 'DOCX + PDF',
    pages: '30 pages',
    downloads: '400+',
    featured: true
  },
  {
    id: 4,
    title: 'Cyber Law Awareness Guide',
    category: 'Legal Education',
    description: 'Essential cyber law concepts explained in plain language for businesses and individuals.',
    icon: Globe,
    color: 'text-purple-600 bg-purple-50',
    items: [
      'Data Protection Basics',
      'Digital Privacy Rights',
      'E-commerce Legal Requirements',
      'Social Media Legal Guidelines',
      'Cybercrime Prevention Tips'
    ],
    format: 'PDF',
    pages: '20 pages',
    downloads: '275+',
    featured: false
  },
  {
    id: 5,
    title: 'English Learning Resources',
    category: 'Educational',
    description: 'Comprehensive English learning materials for professional and academic improvement.',
    icon: GraduationCap,
    color: 'text-blue-600 bg-blue-50',
    items: [
      'Grammar Exercises with Answers',
      'Business English Vocabulary',
      'Pronunciation Guidelines',
      'Writing Practice Sheets',
      'Speaking Confidence Tips'
    ],
    format: 'PDF + Audio',
    pages: '35 pages',
    downloads: '600+',
    featured: true
  },
  {
    id: 6,
    title: 'Social Media Templates Pack',
    category: 'Digital Marketing',
    description: 'Ready-to-use social media templates and content planning resources.',
    icon: Users,
    color: 'text-orange-600 bg-orange-50',
    items: [
      'Content Calendar Template',
      'Post Design Templates',
      'Caption Writing Guidelines',
      'Hashtag Research Tips',
      'Engagement Strategy Guide'
    ],
    format: 'DOCX + Canva',
    pages: '15+ designs',
    downloads: '200+',
    featured: false
  }
]

export default function FreeResources() {
  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-legal-dark mb-4">
            Popular Free Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our most downloaded templates, guides, and educational materials, 
            created by legal and content experts to help you succeed professionally.
          </p>
        </div>

        {/* Featured Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
            <Lightbulb className="w-4 h-4" />
            <span>⭐ indicates most popular downloads</span>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freeResources.map((resource) => {
            const Icon = resource.icon
            return (
              <Card 
                key={resource.id} 
                className={`h-full relative ${
                  resource.featured ? 'border-2 border-yellow-300 shadow-lg' : ''
                }`}
              >
                {resource.featured && (
                  <div className="absolute -top-2 -right-2 bg-yellow-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                    ⭐
                  </div>
                )}

                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${resource.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {resource.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg mb-2">{resource.title}</CardTitle>
                  <p className="text-sm text-gray-600 leading-relaxed">{resource.description}</p>
                </CardHeader>

                <CardContent>
                  {/* Resource Details */}
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                      <div className="flex justify-between">
                        <span>Format:</span>
                        <span className="font-medium">{resource.format}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Size:</span>
                        <span className="font-medium">{resource.pages}</span>
                      </div>
                    </div>
                  </div>

                  {/* What's Included */}
                  <div>
                    <h4 className="font-semibold text-legal-dark mb-2 text-sm">What's Included:</h4>
                    <ul className="space-y-1">
                      {resource.items.slice(0, 3).map((item) => (
                        <li key={item} className="flex items-start space-x-2 text-xs text-gray-600">
                          <div className="w-1 h-1 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                      {resource.items.length > 3 && (
                        <li className="text-xs text-gray-500 italic">
                          +{resource.items.length - 3} more items...
                        </li>
                      )}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-500 w-full">
                    <span>{resource.downloads} downloads</span>
                    <span className="flex items-center space-x-1">
                      <Download className="w-3 h-3" />
                      <span>Free</span>
                    </span>
                  </div>
                  
                  <Button className="w-full" size="sm">
                    <Download className="w-3 h-3 mr-1" />
                    Download Now
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        {/* Download Instructions */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-legal-dark mb-4">
              How to Access Resources
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All resources are completely free. Simply click download and they'll be instantly 
              available. No signup required, though we do appreciate feedback!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-legal-dark mb-2">1. Choose Resource</h4>
              <p className="text-sm text-gray-600">Browse and select the template or guide you need.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3">
                <Download className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-legal-dark mb-2">2. Instant Download</h4>
              <p className="text-sm text-gray-600">Click download for immediate access to your files.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-legal-dark mb-2">3. Customize & Use</h4>
              <p className="text-sm text-gray-600">Edit templates and guides to fit your specific needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}