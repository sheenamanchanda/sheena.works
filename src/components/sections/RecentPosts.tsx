import { Calendar, Clock, ArrowRight, Eye, MessageCircle, User } from 'lucide-react'
import Card, { CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const recentPosts = [
  {
    id: 1,
    title: 'Understanding Digital Privacy Rights in the Age of AI',
    excerpt: 'As AI technology advances, understanding your digital privacy rights becomes crucial. This comprehensive guide covers the latest developments in AI regulation.',
    category: 'Cyber Law',
    publishDate: '2024-03-20',
    readTime: '7 min read',
    views: '845',
    comments: '12',
    author: 'Sheena Manchanda'
  },
  {
    id: 2,
    title: '10 Common Contract Mistakes Small Businesses Make',
    excerpt: 'Avoid costly legal issues with this checklist of common contract mistakes and how to prevent them in your business agreements.',
    category: 'Business Compliance',
    publishDate: '2024-03-18',
    readTime: '5 min read',
    views: '672',
    comments: '8',
    author: 'Sheena Manchanda'
  },
  {
    id: 3,
    title: 'Building Your Professional Writing Portfolio: A Step-by-Step Guide',
    excerpt: 'Create a compelling writing portfolio that showcases your skills and attracts clients. Includes templates and real examples.',
    category: 'Professional Writing',
    publishDate: '2024-03-16',
    readTime: '9 min read',
    views: '523',
    comments: '15',
    author: 'Sheena Manchanda'
  },
  {
    id: 4,
    title: 'Legal Technology Tools Every Modern Lawyer Should Use',
    excerpt: 'Discover essential legal tech tools that can streamline your practice and improve client service in the digital age.',
    category: 'Legal Insights',
    publishDate: '2024-03-14',
    readTime: '6 min read',
    views: '789',
    comments: '20',
    author: 'Sheena Manchanda'
  },
  {
    id: 5,
    title: 'Effective Communication Strategies for Legal Professionals',
    excerpt: 'Master the art of clear, persuasive communication in legal contexts. Tips for client meetings, court presentations, and written documents.',
    category: 'Career Development',
    publishDate: '2024-03-12',
    readTime: '8 min read',
    views: '634',
    comments: '11',
    author: 'Sheena Manchanda'
  },
  {
    id: 6,
    title: 'Translation Quality Assurance: Best Practices for Accuracy',
    excerpt: 'Ensure translation accuracy with proven quality assurance methods. Essential reading for translators and businesses using translation services.',
    category: 'Translation & Language',
    publishDate: '2024-03-10',
    readTime: '10 min read',
    views: '445',
    comments: '7',
    author: 'Sheena Manchanda'
  }
]

const categoryColors = {
  'Cyber Law': 'text-red-600 bg-red-50',
  'Legal Insights': 'text-blue-600 bg-blue-50',
  'Business Compliance': 'text-green-600 bg-green-50',
  'Professional Writing': 'text-purple-600 bg-purple-50',
  'Career Development': 'text-orange-600 bg-orange-50',
  'Translation & Language': 'text-teal-600 bg-teal-50'
}

export default function RecentPosts() {
  return (
    <section className="py-16 bg-white" id="recent-posts">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-legal-dark mb-4">
            Recent Articles
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay up-to-date with our latest insights on legal developments, business strategies, 
            and professional growth. New articles published every week.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {recentPosts.map((post) => (
            <Card key={post.id} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    categoryColors[post.category as keyof typeof categoryColors]
                  }`}>
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <CardTitle className="text-xl mb-3 leading-tight hover:text-primary-600 transition-colors">
                  <a href={`/blog/${post.id}`}>
                    {post.title}
                  </a>
                </CardTitle>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </CardHeader>

              <CardContent className="space-y-3">
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{post.views} views</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-3 h-3" />
                      <span>{post.comments} comments</span>
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  <a href={`/blog/${post.id}`} className="flex items-center justify-center space-x-2 w-full">
                    <span>Read More</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Load More / Pagination */}
        <div className="text-center">
          <Button size="lg" className="mb-8">
            Load More Articles
          </Button>
          
          <p className="text-gray-600 text-sm">
            Showing 6 of 50+ articles. <a href="/blog/archive" className="text-blue-600 hover:underline">Browse all articles</a>
          </p>
        </div>

        {/* Blog Statistics */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-legal-dark text-center mb-6">
            Our Blog Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Articles Published</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-600 mb-2">2,000+</div>
              <div className="text-sm text-gray-600">Monthly Readers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
              <div className="text-sm text-gray-600">Comments & Discussions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">Reader Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}