import { TrendingUp, Users, Star, Award, BarChart3, Target, CheckCircle, Calendar } from 'lucide-react'
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

const clientResults = [
  {
    metric: 'Project Success Rate',
    value: '98%',
    description: 'Projects completed successfully meeting all requirements',
    icon: Target,
    color: 'text-green-600 bg-green-50'
  },
  {
    metric: 'On-Time Delivery',
    value: '100%',
    description: 'All projects delivered within agreed timelines',
    icon: Calendar,
    color: 'text-blue-600 bg-blue-50'
  },
  {
    metric: 'Client Retention Rate',
    value: '85%',
    description: 'Clients who return for additional projects',
    icon: Users,
    color: 'text-purple-600 bg-purple-50'
  },
  {
    metric: 'Average Client Rating',
    value: '4.9/5',
    description: 'Based on post-project feedback surveys',
    icon: Star,
    color: 'text-yellow-600 bg-yellow-50'
  }
]

const businessImpacts = [
  {
    title: 'Cost Savings for Clients',
    metrics: [
      { label: 'Legal Process Efficiency', improvement: '70%', description: 'Reduced time spent on contract management' },
      { label: 'Translation Cost Reduction', improvement: '40%', description: 'Compared to traditional translation services' },
      { label: 'Content Creation Speed', improvement: '60%', description: 'Faster turnaround than in-house teams' }
    ],
    icon: TrendingUp,
    color: 'text-primary-600 bg-primary-50'
  },
  {
    title: 'Revenue Growth Impact',
    metrics: [
      { label: 'Social Media Engagement', improvement: '300%', description: 'Average increase across client campaigns' },
      { label: 'Lead Generation', improvement: '150%', description: 'From improved content and SEO' },
      { label: 'Donor Engagement (NGOs)', improvement: '200%', description: 'Increased donations through better communication' }
    ],
    icon: BarChart3,
    color: 'text-secondary-600 bg-secondary-50'
  }
]

const clientSuccessStories = [
  {
    industry: 'Technology Startup',
    challenge: 'Needed complete legal framework for scaling operations',
    result: 'Reduced legal processing time by 70%, enabled growth from 10 to 50 employees',
    timeframe: '3 months',
    services: ['Contract Development', 'Legal Compliance', 'Process Documentation']
  },
  {
    industry: 'Educational Publisher',
    challenge: 'Required localization of educational content for Hindi market',
    result: 'Successfully launched Hindi curriculum reaching 10,000+ students',
    timeframe: '6 weeks',
    services: ['Translation', 'Cultural Adaptation', 'Content Localization']
  },
  {
    industry: 'Non-Profit Organization',
    challenge: 'Needed to modernize digital presence and increase engagement',
    result: 'Exceeded annual fundraising goal by 25% within 6 months',
    timeframe: '8 weeks',
    services: ['Digital Strategy', 'Content Creation', 'Social Media Management']
  },
  {
    industry: 'Corporate Training',
    challenge: 'Required comprehensive English training program for professionals',
    result: 'Achieved 92% completion rate and expanded to 3 additional corporate clients',
    timeframe: '4 months',
    services: ['Curriculum Development', 'Training Materials', 'Assessment Framework']
  }
]

const qualityMetrics = [
  { label: 'Revision Requests', value: 'Less than 5%', description: 'Projects requiring significant revisions' },
  { label: 'Client Referrals', value: '60%', description: 'New clients from existing client referrals' },
  { label: 'Repeat Business', value: '85%', description: 'Clients who engage for multiple projects' },
  { label: 'Quality Score', value: '4.9/5', description: 'Average quality rating from client feedback' }
]

export default function ClientResults() {
  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-legal-dark mb-4">
            Measurable Client Results
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Success is measured not just in completed projects, but in the tangible business 
            impact and long-term value delivered to our clients across all service categories.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {clientResults.map((result) => {
            const Icon = result.icon
            return (
              <Card key={result.metric} className="text-center h-full">
                <CardContent className="p-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${result.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-legal-dark mb-2">
                    {result.value}
                  </div>
                  <div className="font-semibold text-legal-dark mb-2">
                    {result.metric}
                  </div>
                  <div className="text-sm text-gray-600">
                    {result.description}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Business Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {businessImpacts.map((impact) => {
            const Icon = impact.icon
            return (
              <Card key={impact.title} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${impact.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span>{impact.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {impact.metrics.map((metric) => (
                      <div key={metric.label} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <div className="font-medium text-legal-dark text-sm">{metric.label}</div>
                          <div className="text-xs text-gray-600">{metric.description}</div>
                        </div>
                        <div className="text-2xl font-bold text-green-600">
                          {metric.improvement}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Success Stories */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-legal-dark text-center mb-8">
            Client Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clientSuccessStories.map((story, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-3">
                    <CardTitle className="text-lg">{story.industry}</CardTitle>
                    <span className="text-xs bg-primary-100 text-primary-600 px-2 py-1 rounded-full">
                      {story.timeframe}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-legal-dark text-sm mb-1">Challenge</h4>
                    <p className="text-sm text-gray-700">{story.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-legal-dark text-sm mb-1">Result</h4>
                    <p className="text-sm text-green-700 font-medium">{story.result}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-legal-dark text-sm mb-2">Services Provided</h4>
                    <div className="flex flex-wrap gap-1">
                      {story.services.map((service) => (
                        <span key={service} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quality Metrics */}
        <div className="bg-legal-dark text-white rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Quality & Satisfaction Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityMetrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-3xl font-bold text-primary-300 mb-2">
                  {metric.value}
                </div>
                <div className="font-semibold mb-2">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-300">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results Commitment */}
        <div className="text-center bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-legal-dark mb-4">
            Our Commitment to Your Success
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            These results reflect our commitment to delivering not just completed projects, 
            but measurable value that contributes to your business growth and success. 
            Every project begins with clear success metrics and ends with proven results.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex items-center space-x-3 justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-legal-dark font-medium">Measurable Outcomes</span>
            </div>
            <div className="flex items-center space-x-3 justify-center">
              <Award className="w-5 h-5 text-yellow-600" />
              <span className="text-legal-dark font-medium">Quality Guarantee</span>
            </div>
            <div className="flex items-center space-x-3 justify-center">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span className="text-legal-dark font-medium">Continuous Improvement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}