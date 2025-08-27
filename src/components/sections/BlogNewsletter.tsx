import { Mail, Bell, Gift, CheckCircle, Star, Users } from 'lucide-react'
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

const newsletterBenefits = [
  'Weekly legal insights and updates',
  'Exclusive business templates and guides', 
  'Early access to new blog content',
  'Free consultation opportunities',
  'Professional development tips',
  'Industry news and trend analysis'
]

const subscriberTestimonials = [
  {
    text: "The weekly insights have been invaluable for staying current with legal developments.",
    author: "Legal Professional, Mumbai",
    rating: 5
  },
  {
    text: "Practical advice that I can immediately apply to my business. Highly recommended!",
    author: "Startup Founder, Bangalore", 
    rating: 5
  },
  {
    text: "Clear, concise, and always relevant. One of the few newsletters I actually read.",
    author: "Content Manager, Delhi",
    rating: 5
  }
]

export default function BlogNewsletter() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50" id="newsletter">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Main Newsletter Card */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="text-center pb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              
              <CardTitle className="text-3xl md:text-4xl mb-4">
                Stay Ahead with Legal Insights
              </CardTitle>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join 500+ professionals who receive weekly expert insights on legal developments, 
                business compliance, and professional growth strategies.
              </p>
            </CardHeader>

            <CardContent className="px-8 pb-8">
              {/* Newsletter Signup Form */}
              <div className="bg-gray-50 rounded-xl p-8 mb-8">
                <div className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3 mb-4">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                      <Bell className="w-4 h-4" />
                      <span>Subscribe</span>
                    </button>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Free forever.</strong> No spam, unsubscribe anytime.
                    </p>
                    <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>500+ subscribers</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3" />
                        <span>4.9/5 rating</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-legal-dark mb-4">What You'll Receive:</h3>
                  <ul className="space-y-3">
                    {newsletterBenefits.map((benefit) => (
                      <li key={benefit} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-legal-dark mb-4">Subscriber Feedback:</h3>
                  <div className="space-y-4">
                    {subscriberTestimonials.map((testimonial, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="flex items-center mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-sm text-gray-700 mb-2 italic">"{testimonial.text}"</p>
                        <p className="text-xs text-gray-500">— {testimonial.author}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Newsletter Preview */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Gift className="w-6 h-6 text-purple-600" />
                  <h3 className="text-xl font-semibold text-legal-dark">
                    Bonus: Exclusive Subscriber Resources
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="bg-white/60 rounded-lg p-4">
                    <div className="text-2xl mb-2">📚</div>
                    <h4 className="font-medium text-legal-dark mb-1">Legal Template Library</h4>
                    <p className="text-sm text-gray-600">Exclusive access to premium contract templates</p>
                  </div>
                  
                  <div className="bg-white/60 rounded-lg p-4">
                    <div className="text-2xl mb-2">💡</div>
                    <h4 className="font-medium text-legal-dark mb-1">Monthly Webinars</h4>
                    <p className="text-sm text-gray-600">Free monthly legal education sessions</p>
                  </div>
                  
                  <div className="bg-white/60 rounded-lg p-4">
                    <div className="text-2xl mb-2">🎯</div>
                    <h4 className="font-medium text-legal-dark mb-1">Q&A Priority</h4>
                    <p className="text-sm text-gray-600">Priority answers to your legal questions</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Newsletter Stats */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-legal-dark mb-6">
              Join a Growing Community of Professionals
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Active Subscribers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">98%</div>
                <div className="text-sm text-gray-600">Delivery Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">4.9/5</div>
                <div className="text-sm text-gray-600">Satisfaction Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600">52</div>
                <div className="text-sm text-gray-600">Weekly Issues Sent</div>
              </div>
            </div>
          </div>

          {/* Privacy Assurance */}
          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-green-800">Your Privacy is Protected</span>
            </div>
            <p className="text-sm text-green-700">
              We respect your privacy and never share your email address. Unsubscribe with one click anytime. 
              Our newsletter is governed by the same professional confidentiality standards as our legal practice.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}