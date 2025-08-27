import { Download, Eye, FileText, Scale, Globe, BookOpen, Play, Star } from 'lucide-react'
import Card, { CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const workSamples = [
  {
    id: 1,
    title: 'Legal Research Memo Sample',
    category: 'Legal Services',
    type: 'Research Document',
    description: 'Comprehensive legal research memo on data protection compliance for e-commerce platforms.',
    details: {
      pages: '8 pages',
      format: 'PDF',
      wordCount: '2,500 words'
    },
    highlights: [
      'Regulatory analysis framework',
      'Case law citations and precedents',
      'Practical compliance recommendations',
      'Risk assessment matrix'
    ],
    icon: Scale,
    color: 'text-primary-600 bg-primary-50',
    downloadable: true,
    previewable: true
  },
  {
    id: 2,
    title: 'Contract Template: Service Agreement',
    category: 'Legal Services',
    type: 'Contract Template',
    description: 'Professional service agreement template with comprehensive clauses for IT service providers.',
    details: {
      pages: '12 pages',
      format: 'PDF + DOCX',
      wordCount: '3,200 words'
    },
    highlights: [
      'Comprehensive terms and conditions',
      'Intellectual property clauses',
      'Liability and indemnification',
      'Termination and dispute resolution'
    ],
    icon: FileText,
    color: 'text-secondary-600 bg-secondary-50',
    downloadable: true,
    previewable: true
  },
  {
    id: 3,
    title: 'Translation Sample: Technical Manual',
    category: 'Translation',
    type: 'Technical Translation',
    description: 'English to Hindi translation of software user manual with technical terminology.',
    details: {
      pages: '6 pages',
      format: 'PDF (Bilingual)',
      wordCount: '1,800 words'
    },
    highlights: [
      'Technical terminology accuracy',
      'Cultural adaptation for Indian users',
      'Consistent formatting and style',
      'User-friendly language approach'
    ],
    icon: Globe,
    color: 'text-green-600 bg-green-50',
    downloadable: true,
    previewable: true
  },
  {
    id: 4,
    title: 'Content Writing: Blog Series',
    category: 'Content Writing',
    type: 'Blog Content',
    description: 'SEO-optimized blog series on small business legal compliance with engaging, accessible language.',
    details: {
      pages: '4 articles',
      format: 'Web Content',
      wordCount: '2,000 words each'
    },
    highlights: [
      'SEO keyword optimization',
      'Engaging, accessible writing style',
      'Practical actionable advice',
      'Call-to-action integration'
    ],
    icon: BookOpen,
    color: 'text-purple-600 bg-purple-50',
    downloadable: false,
    previewable: true
  },
  {
    id: 5,
    title: 'Voice-over Sample: Educational Content',
    category: 'Digital Services',
    type: 'Audio Content',
    description: 'Professional Hindi voice-over for educational video series on legal awareness.',
    details: {
      duration: '3 minutes',
      format: 'MP3',
      language: 'Hindi'
    },
    highlights: [
      'Clear articulation and pronunciation',
      'Appropriate tone for educational content',
      'Cultural sensitivity in delivery',
      'Professional audio quality'
    ],
    icon: Play,
    color: 'text-orange-600 bg-orange-50',
    downloadable: false,
    previewable: true,
    isAudio: true
  },
  {
    id: 6,
    title: 'Academic Writing: Research Paper',
    category: 'Academic Writing',
    type: 'Research Paper',
    description: 'Academic paper on cyber law evolution in India with proper citations and methodology.',
    details: {
      pages: '15 pages',
      format: 'PDF',
      wordCount: '5,500 words'
    },
    highlights: [
      'Comprehensive literature review',
      'Proper academic citations (APA)',
      'Original research and analysis',
      'Policy recommendations'
    ],
    icon: BookOpen,
    color: 'text-blue-600 bg-blue-50',
    downloadable: true,
    previewable: true
  }
]

const testimonialHighlights = [
  {
    text: "The legal memo was exactly what we needed - thorough, well-researched, and actionable.",
    author: "Legal Department Head",
    category: "Legal Services"
  },
  {
    text: "Translation quality is outstanding. Technical terms were handled with perfect accuracy.",
    author: "Product Manager",
    category: "Translation"
  },
  {
    text: "Content engagement improved significantly after implementing the blog strategy.",
    author: "Marketing Director",
    category: "Content Writing"
  }
]

export default function WorkSamples() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-legal-dark mb-4">
            Work Samples & Examples
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Preview selected work samples across different service categories. 
            All samples are anonymized and shared with client permission to demonstrate quality and approach.
          </p>
        </div>

        {/* Work Samples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {workSamples.map((sample) => {
            const Icon = sample.icon
            return (
              <Card key={sample.id} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${sample.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {sample.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg mb-2">{sample.title}</CardTitle>
                  <p className="text-sm text-gray-600 mb-3">{sample.type}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{sample.description}</p>
                </CardHeader>

                <CardContent>
                  {/* Sample Details */}
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                      {Object.entries(sample.details).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="capitalize">{key}:</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold text-legal-dark mb-2 text-sm">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {sample.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start space-x-2 text-xs text-gray-600">
                          <Star className="w-2 h-2 text-yellow-500 mt-1 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter>
                  <div className="flex space-x-2 w-full">
                    {sample.previewable && (
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="w-3 h-3 mr-1" />
                        {sample.isAudio ? 'Listen' : 'Preview'}
                      </Button>
                    )}
                    {sample.downloadable && (
                      <Button size="sm" className="flex-1">
                        <Download className="w-3 h-3 mr-1" />
                        Download
                      </Button>
                    )}
                    {!sample.downloadable && !sample.previewable && (
                      <Button variant="outline" size="sm" className="w-full">
                        Request Sample
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        {/* Sample Access Notice */}
        <div className="bg-white rounded-xl p-8 mb-8 border border-gray-200">
          <h3 className="text-xl font-bold text-legal-dark text-center mb-4">
            Access Additional Work Samples
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-3">
                <FileText className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="font-semibold text-legal-dark mb-2">Request Specific Samples</h4>
              <p className="text-sm text-gray-600">
                Get work samples relevant to your specific industry or project type.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary-100 rounded-lg mb-3">
                <Eye className="w-6 h-6 text-secondary-600" />
              </div>
              <h4 className="font-semibold text-legal-dark mb-2">Live Portfolio Review</h4>
              <p className="text-sm text-gray-600">
                Schedule a call to review relevant work samples and discuss your project.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-3">
                <Download className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-legal-dark mb-2">Complete Sample Pack</h4>
              <p className="text-sm text-gray-600">
                Download comprehensive sample collection after consultation.
              </p>
            </div>
          </div>
        </div>

        {/* Client Testimonials about Work Quality */}
        <div className="bg-legal-dark text-white rounded-xl p-8">
          <h3 className="text-xl font-semibold text-center mb-6">
            What Clients Say About the Work Quality
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialHighlights.map((testimonial, index) => (
              <div key={index} className="text-center">
                <blockquote className="text-gray-300 italic mb-3 text-sm">
                  "{testimonial.text}"
                </blockquote>
                <div className="text-xs text-gray-400">
                  — {testimonial.author}
                </div>
                <div className="text-xs text-primary-300 mt-1">
                  {testimonial.category}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-legal-dark mb-4">
            Ready to See Quality in Action?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            The best way to understand our work quality is through a personalized consultation. 
            We'll share relevant samples and discuss how our approach can benefit your specific project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact?subject=work-samples" className="btn-primary">
              Request Relevant Samples
            </a>
            <a href="/contact?subject=consultation" className="btn-secondary">
              Schedule Portfolio Review
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}