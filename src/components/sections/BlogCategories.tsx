import { Scale, FileText, Briefcase, GraduationCap, Globe, TrendingUp, Users, Lightbulb } from 'lucide-react'
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

const blogCategories = [
  {
    title: 'Legal Insights',
    icon: Scale,
    color: 'text-primary-600 bg-primary-50',
    count: '15 articles',
    description: 'Latest legal developments, case studies, and regulatory updates.',
    topics: [
      'Cyber Law Updates',
      'Contract Law Explained',
      'Regulatory Compliance', 
      'Legal Case Studies',
      'Rights & Obligations'
    ],
    featured: 'Essential Cyber Law Updates for 2024'
  },
  {
    title: 'Business Compliance',
    icon: Briefcase,
    color: 'text-secondary-600 bg-secondary-50',
    count: '12 articles',
    description: 'Practical guidance for business legal compliance and risk management.',
    topics: [
      'Startup Legal Essentials',
      'Tax Compliance Guide',
      'Employment Law Basics',
      'Data Protection Rules',
      'Business Registration'
    ],
    featured: 'Complete Startup Legal Checklist'
  },
  {
    title: 'Professional Writing',
    icon: FileText,
    color: 'text-green-600 bg-green-50',
    count: '10 articles',
    description: 'Tips and techniques for effective business and legal writing.',
    topics: [
      'Contract Drafting Tips',
      'Business Proposal Writing',
      'Email Etiquette Guide',
      'Report Writing Skills',
      'Grammar & Style Tips'
    ],
    featured: 'The Art of Legal Writing Made Simple'
  },
  {
    title: 'Career Development',
    icon: GraduationCap,
    color: 'text-purple-600 bg-purple-50',
    count: '8 articles',
    description: 'Professional growth strategies and career advancement advice.',
    topics: [
      'Legal Career Paths',
      'Professional Networking',
      'Skill Development',
      'Interview Preparation',
      'Personal Branding'
    ],
    featured: 'Building a Successful Legal Career'
  },
  {
    title: 'Translation & Language',
    icon: Globe,
    color: 'text-blue-600 bg-blue-50',
    count: '6 articles',
    description: 'Bilingual communication, translation best practices, and language tips.',
    topics: [
      'Translation Best Practices',
      'Cultural Communication',
      'Business English Tips',
      'Hindi Legal Terms',
      'Cross-Cultural Writing'
    ],
    featured: 'Professional Translation Guidelines'
  },
  {
    title: 'Digital Marketing',
    icon: TrendingUp,
    color: 'text-orange-600 bg-orange-50',
    count: '5 articles',
    description: 'Digital presence strategies for professionals and small businesses.',
    topics: [
      'Social Media Strategy',
      'Content Marketing Tips',
      'Professional Branding',
      'SEO for Lawyers',
      'Online Reputation'
    ],
    featured: 'Digital Marketing for Legal Professionals'
  }
]

const recentUpdates = [
  {
    category: 'Legal Insights',
    title: 'New Data Protection Amendment 2024',
    date: '2 days ago',
    type: 'Update'
  },
  {
    category: 'Business Compliance',
    title: 'GST Changes for Service Providers',
    date: '5 days ago',
    type: 'Guide'
  },
  {
    category: 'Professional Writing',
    title: 'Email Templates for Client Communication',
    date: '1 week ago',
    type: 'Template'
  }
]

export default function BlogCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-legal-dark mb-4">
            Explore by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dive deep into specific topics with our organized content categories. 
            Each section offers comprehensive coverage of essential professional knowledge areas.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {blogCategories.map((category) => {
            const Icon = category.icon
            return (
              <Card key={category.title} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-3 mb-3">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${category.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{category.title}</CardTitle>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Featured Article */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <Lightbulb className="w-3 h-3 text-yellow-600" />
                      <span className="text-xs font-medium text-yellow-700">Featured</span>
                    </div>
                    <h4 className="text-sm font-medium text-legal-dark">{category.featured}</h4>
                  </div>

                  {/* Topics List */}
                  <div>
                    <h4 className="font-semibold text-legal-dark mb-2 text-sm">Popular Topics:</h4>
                    <ul className="space-y-1">
                      {category.topics.slice(0, 4).map((topic) => (
                        <li key={topic} className="flex items-center space-x-2 text-xs text-gray-600">
                          <div className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0"></div>
                          <span>{topic}</span>
                        </li>
                      ))}
                      <li className="text-xs text-gray-500 italic">+{category.topics.length - 4} more topics...</li>
                    </ul>
                  </div>

                  {/* View Category Link */}
                  <div className="pt-2">
                    <a 
                      href={`/blog/category/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline"
                    >
                      View all articles →
                    </a>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Recent Updates */}
        <div className="bg-white rounded-xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-legal-dark">Recent Updates</h3>
            <a href="/blog/recent" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              View all updates →
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentUpdates.map((update) => (
              <div key={update.title} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    {update.category}
                  </span>
                  <span className="text-xs text-gray-500">{update.date}</span>
                </div>
                <h4 className="font-medium text-legal-dark text-sm mb-1">{update.title}</h4>
                <span className="text-xs text-gray-600">{update.type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe CTA */}
        <div className="bg-legal-dark text-white rounded-xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Never Miss an Update</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter and get the latest legal insights, business tips, 
              and professional development advice delivered to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your.email@example.com"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="btn-primary px-6 py-3 rounded-lg">
                Subscribe Now
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-3">
              Join 500+ professionals who stay ahead with our insights. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Categories Stats */}
        <div className="mt-12 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl font-bold text-primary-600">50+</div>
              <div className="text-sm text-gray-600">Total Articles</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary-600">6</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">2,000+</div>
              <div className="text-sm text-gray-600">Monthly Readers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">Weekly</div>
              <div className="text-sm text-gray-600">New Content</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}