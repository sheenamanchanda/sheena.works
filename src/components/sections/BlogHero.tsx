import { BookOpen, TrendingUp, Users, Calendar, Tag, Search } from 'lucide-react'

const blogStats = [
  { label: 'Articles Published', value: '50+', icon: BookOpen },
  { label: 'Monthly Readers', value: '2,000+', icon: Users },
  { label: 'Topics Covered', value: '12', icon: Tag },
  { label: 'Years Writing', value: '3+', icon: Calendar }
]

const popularTopics = [
  'Cyber Law Updates',
  'Contract Essentials', 
  'Business Compliance',
  'Professional Writing',
  'Startup Legal Tips',
  'Career Development',
  'Translation Best Practices',
  'Digital Privacy Rights'
]

export default function BlogHero() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 rotate-12">
          <BookOpen className="w-32 h-32 text-blue-600" />
        </div>
        <div className="absolute bottom-16 right-16 -rotate-12">
          <TrendingUp className="w-28 h-28 text-purple-600" />
        </div>
        <div className="absolute top-1/2 right-1/4 rotate-45">
          <Users className="w-24 h-24 text-green-600" />
        </div>
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 mb-6">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-medium">Professional Insights Blog</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-legal-dark mb-6">
            Expert Insights on
            <span className="block text-blue-600">Law, Business & Professional Growth</span>
          </h1>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Stay informed with expert analysis on legal developments, business compliance, 
            professional writing tips, and career advancement strategies from an Enrolled Advocate.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles, topics, or keywords..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Blog Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {blogStats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-200">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-legal-dark mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>

        {/* Popular Topics */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 border border-gray-200 mb-8">
          <h3 className="text-2xl font-bold text-legal-dark text-center mb-6">
            Popular Topics & Categories
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {popularTopics.map((topic) => (
              <a
                key={topic}
                href={`/blog/category/${topic.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
              >
                {topic}
              </a>
            ))}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
            <div className="text-3xl mb-3">⚖️</div>
            <h3 className="font-semibold text-legal-dark mb-2">Legal Expertise</h3>
            <p className="text-sm text-gray-600">
              Insights from a practicing Enrolled Advocate with real-world experience.
            </p>
          </div>

          <div className="text-center p-6 bg-purple-50 rounded-lg border border-purple-200">
            <div className="text-3xl mb-3">💡</div>
            <h3 className="font-semibold text-legal-dark mb-2">Practical Advice</h3>
            <p className="text-sm text-gray-600">
              Actionable tips and strategies you can implement immediately.
            </p>
          </div>

          <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
            <div className="text-3xl mb-3">📈</div>
            <h3 className="font-semibold text-legal-dark mb-2">Regular Updates</h3>
            <p className="text-sm text-gray-600">
              New articles published weekly covering the latest developments.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-legal-dark mb-4">
            Stay Updated with Latest Insights
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for weekly legal insights, business tips, and professional development advice 
            delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#newsletter" className="btn-primary">
              Subscribe to Newsletter
            </a>
            <a href="#recent-posts" className="btn-secondary">
              Browse Recent Posts
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}