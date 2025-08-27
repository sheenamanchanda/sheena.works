import { Scale, FileText, Globe, GraduationCap, Calendar, Clock, TrendingUp, CheckCircle } from 'lucide-react'
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

const caseStudies = [
  {
    id: 1,
    title: 'Startup Contract Framework Development',
    category: 'Legal Services',
    client: 'Tech Startup (Anonymized)',
    industry: 'Technology',
    duration: '3 weeks',
    completed: '2024-Q2',
    icon: Scale,
    color: 'text-primary-600 bg-primary-50',
    challenge: 'A growing tech startup needed a comprehensive contract framework including employment agreements, vendor contracts, and user terms of service compliant with Indian cyber laws.',
    solution: 'Developed a complete contract suite with modular templates, legal compliance checklists, and implementation guidelines tailored to the startup\'s business model.',
    results: [
      'Reduced contract processing time by 70%',
      'Achieved 100% legal compliance across all agreements',
      'Enabled standardized onboarding for employees and vendors',
      'Provided scalable framework for business growth'
    ],
    deliverables: [
      'Employment Agreement Templates',
      'Vendor Service Agreements',
      'Terms of Service & Privacy Policy',
      'Legal Compliance Checklist',
      'Implementation Guidelines'
    ],
    testimonial: 'The contract framework has streamlined our legal processes significantly. The templates are comprehensive yet easy to use.',
    outcome: 'Client successfully scaled from 10 to 50 employees using the framework'
  },
  {
    id: 2,
    title: 'Educational Content Localization Project',
    category: 'Translation & Content',
    client: 'Educational Publisher (Anonymized)',
    industry: 'Education & Publishing',
    duration: '6 weeks',
    completed: '2024-Q1',
    icon: FileText,
    color: 'text-secondary-600 bg-secondary-50',
    challenge: 'An educational publisher needed to localize 50+ educational modules from English to Hindi while maintaining academic accuracy and cultural sensitivity.',
    solution: 'Implemented a systematic translation process with academic terminology research, cultural adaptation, and quality assurance protocols.',
    results: [
      'Successfully localized 52 educational modules',
      'Maintained 98% accuracy in technical terminology',
      'Achieved cultural appropriateness score of 95%',
      'Delivered 2 weeks ahead of schedule'
    ],
    deliverables: [
      'Hindi-translated educational modules',
      'Technical terminology glossary',
      'Cultural adaptation guidelines',
      'Quality assurance reports',
      'Final proofreading documentation'
    ],
    testimonial: 'The translation quality exceeded our expectations. The content feels natural in Hindi while maintaining academic rigor.',
    outcome: 'Publisher successfully launched Hindi curriculum reaching 10,000+ students'
  },
  {
    id: 3,
    title: 'NGO Digital Presence Transformation',
    category: 'Digital Services',
    client: 'Social Impact NGO (Anonymized)',
    industry: 'Non-Profit',
    duration: '8 weeks',
    completed: '2024-Q3',
    icon: Globe,
    color: 'text-green-600 bg-green-50',
    challenge: 'A well-established NGO needed to modernize their digital presence and create compelling content to increase donor engagement and volunteer recruitment.',
    solution: 'Developed comprehensive digital strategy including content calendar, social media optimization, and storytelling framework for impact communication.',
    results: [
      'Increased social media engagement by 300%',
      'Grew follower base by 150% across platforms',
      'Improved donation conversion rate by 45%',
      'Enhanced volunteer applications by 200%'
    ],
    deliverables: [
      '3-month content strategy plan',
      'Brand voice and messaging guidelines',
      'Social media content templates',
      'Impact storytelling framework',
      'Performance tracking dashboard'
    ],
    testimonial: 'Our digital presence has been completely transformed. We\'re reaching more people and creating stronger connections.',
    outcome: 'NGO exceeded annual fundraising goal by 25% within 6 months'
  },
  {
    id: 4,
    title: 'Professional English Training Program',
    category: 'Education & Training',
    client: 'Corporate Training Institute (Anonymized)',
    industry: 'Corporate Training',
    duration: '4 months',
    completed: '2024-Q2',
    icon: GraduationCap,
    color: 'text-purple-600 bg-purple-50',
    challenge: 'A corporate training institute needed to develop a comprehensive English proficiency program for working professionals with focus on business communication.',
    solution: 'Created modular curriculum with practical exercises, assessment frameworks, and industry-specific content tailored to different proficiency levels.',
    results: [
      'Trained 75+ working professionals',
      'Achieved 92% course completion rate',
      'Improved average English proficiency by 40%',
      'Received 4.8/5 student satisfaction rating'
    ],
    deliverables: [
      'Modular curriculum design',
      'Assessment and testing framework',
      'Industry-specific content modules',
      'Progress tracking system',
      'Instructor training materials'
    ],
    testimonial: 'The program structure is excellent and the practical approach has really helped our students improve their confidence.',
    outcome: 'Institute expanded program to 3 additional corporate clients'
  }
]

export default function CaseStudies() {
  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-legal-dark mb-4">
            Featured Case Studies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            In-depth analysis of selected projects showcasing problem-solving approach, 
            implementation process, and measurable results across different service categories.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => {
            const Icon = study.icon
            const isEven = index % 2 === 0
            
            return (
              <div 
                key={study.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Case Study Details */}
                <div className={`space-y-6 ${isEven ? '' : 'lg:col-start-2'}`}>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${study.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm text-primary-600 font-medium">{study.category}</div>
                        <h3 className="text-2xl font-bold text-legal-dark">{study.title}</h3>
                      </div>
                    </div>

                    {/* Project Meta */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">{study.completed}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">{study.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Challenge */}
                  <div>
                    <h4 className="font-semibold text-legal-dark mb-2">Challenge</h4>
                    <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h4 className="font-semibold text-legal-dark mb-2">Solution</h4>
                    <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <blockquote className="text-gray-700 italic mb-2">"{study.testimonial}"</blockquote>
                    <div className="text-sm text-gray-600">— {study.client}, {study.industry}</div>
                  </div>
                </div>

                {/* Results & Deliverables */}
                <div className={isEven ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                        <span>Results & Impact</span>
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      {/* Key Results */}
                      <div>
                        <h4 className="font-semibold text-legal-dark mb-3">Key Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result) => (
                            <li key={result} className="flex items-start space-x-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Deliverables */}
                      <div>
                        <h4 className="font-semibold text-legal-dark mb-3">Key Deliverables</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {study.deliverables.map((deliverable) => (
                            <div key={deliverable} className="flex items-center space-x-2 text-sm p-2 bg-gray-50 rounded">
                              <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></div>
                              <span className="text-gray-700">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Final Outcome */}
                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="font-semibold text-green-800 mb-2">Final Outcome</h4>
                        <p className="text-green-700 text-sm">{study.outcome}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )
          })}
        </div>

        {/* Case Study CTA */}
        <div className="mt-16 text-center bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-legal-dark mb-4">
            Want to See More Case Studies?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            These are just a few examples of successful projects. Each client engagement is unique, 
            and we'd be happy to discuss relevant experience specific to your industry and needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact?subject=case-studies" 
              className="btn-primary"
            >
              Request Relevant Case Studies
            </a>
            <a 
              href="/contact" 
              className="btn-secondary"
            >
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}