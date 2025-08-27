import { Calendar, Clock, ArrowRight, Star, Eye, MessageCircle } from 'lucide-react'
import Card, { CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const featuredPosts = [
  {
    id: 1,
    title: 'Essential Cyber Law Updates Every Startup Should Know in 2024',
    excerpt: 'Navigate the latest changes in Indian cyber law with this comprehensive guide covering data protection, digital privacy, and compliance requirements for modern businesses.',
    category: 'Cyber Law',
    author: 'Sheena Manchanda',
    publishDate: '2024-03-15',
    readTime: '8 min read',
    views: '1,200',
    comments: '23',
    featured: true,
    tags: ['Cyber Law', 'Startups', 'Compliance', 'Data Protection']
  },
  {
    id: 2,
    title: 'The Complete Guide to Contract Drafting for Small Businesses',
    excerpt: 'Learn the fundamentals of contract drafting with practical examples, common pitfalls to avoid, and essential clauses that protect your business interests.',
    category: 'Legal Guides',
    author: 'Sheena Manchanda',
    publishDate: '2024-03-10',
    readTime: '12 min read',
    views: '980',
    comments: '31',
    featured: true,
    tags: ['Contracts', 'Small Business', 'Legal Tips', 'Templates']
  },
  {
    id: 3,
    title: 'Professional Writing: From Legal Documents to Marketing Copy',
    excerpt: 'Bridge the gap between legal precision and engaging communication. Discover techniques for writing that is both legally sound and accessible to your audience.',
    category: 'Professional Writing',
    author: 'Sheena Manchanda', 
    publishDate: '2024-03-05',
    readTime: '6 min read',
    views: '750',
    comments: '18',
    featured: true,
    tags: ['Writing Tips', 'Communication', 'Legal Writing', 'Business']
  }
]

const categoryColors = {
  'Cyber Law': 'text-red-600 bg-red-50',
  'Legal Guides': 'text-blue-600 bg-blue-50',
  'Professional Writing': 'text-green-600 bg-green-50',
  'Business Tips': 'text-purple-600 bg-purple-50',
  'Career Development': 'text-orange-600 bg-orange-50'
}

export default function FeaturedPosts() {
  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-legal-dark mb-4">
            Featured Articles
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our most comprehensive and popular articles covering legal insights, business advice, 
            and professional development strategies that drive real results.
          </p>
        </div>

        {/* Featured Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Featured Post */}
          <div className="lg:col-span-2">
            <Card className="h-full border-2 border-yellow-200 relative">
              <div className="absolute -top-3 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                <Star className="w-3 h-3" />
                <span>Editor's Pick</span>
              </div>
              
              <CardHeader className="pt-8">
                <div className="flex items-center space-x-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    categoryColors[featuredPosts[0].category as keyof typeof categoryColors]
                  }`}>
                    {featuredPosts[0].category}
                  </span>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(featuredPosts[0].publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{featuredPosts[0].readTime}</span>
                    </div>
                  </div>
                </div>
                
                <CardTitle className="text-2xl md:text-3xl mb-4 leading-tight">
                  {featuredPosts[0].title}
                </CardTitle>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {featuredPosts[0].excerpt}
                </p>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredPosts[0].tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      #{tag.toLowerCase().replace(/\s+/g, '')}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>By {featuredPosts[0].author}</span>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{featuredPosts[0].views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-3 h-3" />
                      <span>{featuredPosts[0].comments}</span>
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button className="w-full">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Secondary Featured Posts */}
          <div className="space-y-6">
            {featuredPosts.slice(1).map((post) => (
              <Card key={post.id} className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      categoryColors[post.category as keyof typeof categoryColors]
                    }`}>
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg mb-2 leading-tight">
                    {post.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {post.excerpt.substring(0, 120)}...
                  </p>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        #{tag.toLowerCase().replace(/\s+/g, '')}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    Read Article
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Article Highlights */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-legal-dark text-center mb-6">
            Why Read Our Articles?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-legal-dark mb-2">Expert Insights</h4>
              <p className="text-sm text-gray-600">
                Written by a practicing Enrolled Advocate with real-world experience and deep expertise.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-legal-dark mb-2">Time-Efficient</h4>
              <p className="text-sm text-gray-600">
                Concise, well-structured articles that deliver maximum value in minimum time.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                <ArrowRight className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-legal-dark mb-2">Actionable Content</h4>
              <p className="text-sm text-gray-600">
                Practical advice and strategies you can implement immediately in your business or career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}