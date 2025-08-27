import { Scale, FileText, Globe, GraduationCap, Users, Briefcase, Lightbulb, TrendingUp } from 'lucide-react'
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

const resourceCategories = [
  {
    title: 'Legal Templates & Contracts',
    icon: Scale,
    color: 'text-primary-600 bg-primary-50',
    count: '15+ Resources',
    description: 'Professional legal templates and contract drafts for businesses and individuals.',
    resources: [
      'Employment Contract Templates',
      'Service Agreement Templates', 
      'Non-Disclosure Agreements',
      'Terms of Service Templates',
      'Privacy Policy Templates',
      'Vendor Agreement Templates'
    ],
    popular: ['Employment Contracts', 'NDAs', 'Service Agreements']
  },
  {
    title: 'Business Formation Guides',
    icon: Briefcase,
    color: 'text-secondary-600 bg-secondary-50',
    count: '10+ Resources',
    description: 'Step-by-step guides for starting and managing businesses in India.',
    resources: [
      'Business Registration Guide',
      'Tax Compliance Checklists',
      'Licensing Requirements',
      'Regulatory Compliance Guides',
      'Business Plan Templates',
      'Financial Planning Tools'
    ],
    popular: ['Registration Process', 'Tax Compliance', 'Licensing']
  },
  {
    title: 'Professional Writing Resources',
    icon: FileText,
    color: 'text-green-600 bg-green-50',
    count: '12+ Resources',
    description: 'Templates, guides, and tools for effective business and academic writing.',
    resources: [
      'Business Proposal Templates',
      'Report Writing Guidelines',
      'Email Templates Library',
      'Grammar Reference Guides',
      'Style Guide Templates',
      'Proofreading Checklists'
    ],
    popular: ['Business Proposals', 'Email Templates', 'Grammar Guides']
  },
  {
    title: 'Educational Materials',
    icon: GraduationCap,
    color: 'text-purple-600 bg-purple-50',
    count: '8+ Resources',
    description: 'Learning materials for English, legal studies, and professional development.',
    resources: [
      'English Grammar Worksheets',
      'Legal Concept Explainers',
      'Vocabulary Building Tools',
      'Study Planning Templates',
      'Presentation Templates',
      'Research Methodology Guides'
    ],
    popular: ['Grammar Worksheets', 'Legal Explainers', 'Study Tools']
  },
  {
    title: 'Digital Marketing Tools',
    icon: TrendingUp,
    color: 'text-blue-600 bg-blue-50',
    count: '6+ Resources',
    description: 'Templates and guides for social media, content marketing, and digital presence.',
    resources: [
      'Social Media Templates',
      'Content Calendar Planners',
      'Hashtag Research Guides',
      'Brand Voice Guidelines',
      'Analytics Tracking Sheets',
      'Campaign Planning Tools'
    ],
    popular: ['Social Templates', 'Content Calendar', 'Brand Guidelines']
  },
  {
    title: 'Translation & Language',
    icon: Globe,
    color: 'text-orange-600 bg-orange-50',
    count: '5+ Resources',
    description: 'Bilingual resources and translation tools for English-Hindi communication.',
    resources: [
      'Translation Guidelines',
      'Bilingual Vocabulary Lists',
      'Cultural Context Guides',
      'Language Learning Aids',
      'Terminology Glossaries',
      'Localization Checklists'
    ],
    popular: ['Translation Guidelines', 'Vocabulary Lists', 'Cultural Guides']
  },
  {
    title: 'Professional Development',
    icon: Users,
    color: 'text-teal-600 bg-teal-50',
    count: '7+ Resources',
    description: 'Career development tools, networking guides, and professional growth resources.',
    resources: [
      'Career Planning Templates',
      'Networking Strategy Guides',
      'Interview Preparation Kits',
      'Skills Assessment Tools',
      'Goal Setting Worksheets',
      'Professional Portfolio Templates'
    ],
    popular: ['Career Planning', 'Interview Prep', 'Skills Assessment']
  },
  {
    title: 'Startup & Innovation',
    icon: Lightbulb,
    color: 'text-yellow-600 bg-yellow-50',
    count: '9+ Resources',
    description: 'Resources specifically designed for startups, entrepreneurs, and innovation projects.',
    resources: [
      'Startup Legal Checklists',
      'Pitch Deck Templates',
      'Market Research Tools',
      'Funding Application Guides',
      'Product Launch Checklists',
      'Innovation Management Tools'
    ],
    popular: ['Legal Checklists', 'Pitch Decks', 'Market Research']
  }
]

export default function ResourceCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-legal-dark mb-4">
            Resource Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library organized by category. Each section contains 
            professionally crafted templates, guides, and tools to support your business and career growth.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {resourceCategories.map((category) => {
            const Icon = category.icon
            return (
              <Card key={category.title} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${category.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-lg">{category.title}</CardTitle>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{category.description}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Popular Resources */}
                  <div>
                    <h4 className="font-semibold text-legal-dark mb-2 text-sm">Most Popular:</h4>
                    <div className="flex flex-wrap gap-1">
                      {category.popular.map((popular) => (
                        <span 
                          key={popular}
                          className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                        >
                          {popular}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* All Resources */}
                  <div>
                    <h4 className="font-semibold text-legal-dark mb-2 text-sm">Available Resources:</h4>
                    <ul className="grid grid-cols-1 gap-1">
                      {category.resources.map((resource) => (
                        <li key={resource} className="flex items-center space-x-2 text-xs text-gray-600">
                          <div className="w-1 h-1 bg-green-500 rounded-full flex-shrink-0"></div>
                          <span>{resource}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-xl p-8">
          <h3 className="text-2xl font-bold text-legal-dark text-center mb-8">
            Resource Library Statistics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">70+</div>
              <div className="text-sm text-gray-600">Total Resources</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-600 mb-2">8</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">2,500+</div>
              <div className="text-sm text-gray-600">Total Downloads</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">Weekly</div>
              <div className="text-sm text-gray-600">New Additions</div>
            </div>
          </div>
        </div>

        {/* Request Resource */}
        <div className="mt-12 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-legal-dark mb-4">
            Don't See What You Need?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            We're constantly adding new resources based on user feedback and industry needs. 
            If there's a specific template, guide, or tool you're looking for, let us know!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact?subject=resource-request" 
              className="btn-primary"
            >
              Request a Resource
            </a>
            <a 
              href="/contact?subject=feedback" 
              className="btn-secondary"
            >
              Provide Feedback
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}