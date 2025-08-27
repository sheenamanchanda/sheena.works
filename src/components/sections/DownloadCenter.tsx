import { Download, Mail, Bell, Gift, Star, CheckCircle } from 'lucide-react'
import Card, { CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const featuredDownloads = [
  {
    title: 'Complete Legal Startup Kit',
    description: 'Everything a startup needs: contracts, policies, compliance checklists, and legal guides.',
    items: '12 templates + 3 guides',
    size: '2.5 MB',
    downloads: '800+',
    category: 'Legal Bundle',
    featured: true
  },
  {
    title: 'Professional Writing Master Pack',
    description: 'Comprehensive writing resources including templates, style guides, and examples.',
    items: '15 templates + 5 guides',
    size: '3.2 MB', 
    downloads: '650+',
    category: 'Writing Bundle',
    featured: true
  },
  {
    title: 'Small Business Essentials',
    description: 'Essential business formation documents, compliance guides, and planning templates.',
    items: '10 templates + 4 guides',
    size: '1.8 MB',
    downloads: '500+',
    category: 'Business Bundle', 
    featured: true
  }
]

const newsletterBenefits = [
  'Early access to new resources',
  'Exclusive premium templates',
  'Monthly legal updates',
  'Writing tips and tricks',
  'Business growth insights',
  'Free consultation opportunities'
]

const quickAccessLinks = [
  { category: 'Legal Templates', count: '15+', link: '#legal' },
  { category: 'Business Guides', count: '10+', link: '#business' },
  { category: 'Writing Resources', count: '12+', link: '#writing' },
  { category: 'Educational Materials', count: '8+', link: '#education' },
  { category: 'Digital Marketing', count: '6+', link: '#digital' },
  { category: 'Translation Tools', count: '5+', link: '#translation' }
]

export default function DownloadCenter() {
  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-legal-dark mb-4">
            Download Center
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access our most popular resource bundles and get instant downloads of professional templates, 
            guides, and tools curated for maximum value and immediate usability.
          </p>
        </div>

        {/* Featured Downloads */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {featuredDownloads.map((download) => (
            <Card key={download.title} className="h-full border-2 border-yellow-200 relative">
              <div className="absolute -top-3 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                <Star className="w-3 h-3" />
                <span>Featured</span>
              </div>

              <CardHeader className="pt-8">
                <CardTitle className="text-xl mb-2">{download.title}</CardTitle>
                <p className="text-gray-600 text-sm leading-relaxed">{download.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-gray-500">Includes:</span>
                      <div className="font-medium text-legal-dark">{download.items}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Size:</span>
                      <div className="font-medium text-legal-dark">{download.size}</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{download.downloads} downloads</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    {download.category}
                  </span>
                </div>
              </CardContent>

              <CardFooter>
                <Button className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Bundle
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Quick Access Links */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-legal-dark text-center mb-6">
            Quick Access by Category
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickAccessLinks.map((link) => (
              <a
                key={link.category}
                href={link.link}
                className="flex flex-col items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-200 text-center"
              >
                <div className="text-2xl font-bold text-primary-600 mb-1">{link.count}</div>
                <div className="text-sm font-medium text-legal-dark">{link.category}</div>
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <Card className="bg-primary-50 border-primary-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-primary-800">
                <Bell className="w-5 h-5" />
                <span>Resource Newsletter</span>
              </CardTitle>
              <p className="text-primary-700 text-sm">
                Get notified when we release new resources and exclusive content.
              </p>
            </CardHeader>
            
            <CardContent>
              <h4 className="font-semibold text-primary-800 mb-3">What you'll receive:</h4>
              <ul className="space-y-2">
                {newsletterBenefits.slice(0, 4).map((benefit) => (
                  <li key={benefit} className="flex items-center space-x-2 text-sm text-primary-700">
                    <CheckCircle className="w-3 h-3 text-primary-600 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
                <li className="text-sm text-primary-600 italic">+ more exclusive benefits</li>
              </ul>
            </CardContent>
            
            <CardFooter>
              <div className="w-full space-y-3">
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="flex-1 px-3 py-2 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                  />
                  <Button size="sm">
                    <Mail className="w-3 h-3 mr-1" />
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-primary-600">
                  No spam, unsubscribe anytime. Your email is never shared.
                </p>
              </div>
            </CardFooter>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-green-800">
                <Gift className="w-5 h-5" />
                <span>Free Forever Guarantee</span>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm text-green-700">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Always Free:</strong> All basic resources remain free forever</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>No Registration:</strong> Download immediately without creating accounts</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Commercial Use:</strong> Use resources in your business without restrictions</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Regular Updates:</strong> Resources updated to reflect current laws and practices</span>
                </div>
              </div>
              
              <div className="bg-green-100 rounded-lg p-3">
                <p className="text-sm text-green-800">
                  <strong>Our Commitment:</strong> These resources represent our dedication to making 
                  professional knowledge accessible to everyone, regardless of budget.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Usage Guidelines */}
        <div className="mt-12 bg-legal-dark text-white rounded-xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold mb-4">Usage Guidelines & Attribution</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              While our resources are free to use, please follow these simple guidelines to help 
              us continue providing valuable content to the community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="text-center">
              <div className="text-2xl mb-2">✅</div>
              <h4 className="font-semibold mb-2">You May</h4>
              <ul className="text-gray-300 space-y-1">
                <li>Use for commercial projects</li>
                <li>Modify and customize</li>
                <li>Share with your team</li>
                <li>Include in client work</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="text-2xl mb-2">❌</div>
              <h4 className="font-semibold mb-2">Please Don't</h4>
              <ul className="text-gray-300 space-y-1">
                <li>Resell as your own</li>
                <li>Claim authorship</li>
                <li>Distribute in bulk</li>
                <li>Remove attribution</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="text-2xl mb-2">💡</div>
              <h4 className="font-semibold mb-2">Appreciated</h4>
              <ul className="text-gray-300 space-y-1">
                <li>Link back to sheena.works</li>
                <li>Share feedback</li>
                <li>Recommend to others</li>
                <li>Report any issues</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}