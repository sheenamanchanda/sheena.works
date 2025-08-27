import { Shield, Award, BookOpen, Globe, Users, CheckCircle } from 'lucide-react'
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

const credentials = [
  {
    title: 'Bar Council Enrollment',
    description: 'Registered Advocate with the Bar Council of India',
    icon: Shield,
    details: ['Active enrollment status', 'Professional ethics compliance', 'Continuing legal education'],
    color: 'text-primary-600 bg-primary-50'
  },
  {
    title: 'Legal Education',
    description: 'Law degree with specialization in Cyber Law',
    icon: BookOpen,
    details: ['LLB with honors', 'Cyber law certification', 'Contract law specialization'],
    color: 'text-secondary-600 bg-secondary-50'
  },
  {
    title: 'Professional Experience',
    description: '5+ years in legal research and content creation',
    icon: Award,
    details: ['150+ legal documents', '500+ content pieces', 'Multi-industry experience'],
    color: 'text-legal-gold bg-yellow-50'
  },
  {
    title: 'Language Expertise',
    description: 'Bilingual professional fluency',
    icon: Globe,
    details: ['Native Hindi speaker', 'Professional English', 'Translation certified'],
    color: 'text-green-600 bg-green-50'
  }
]

const skills = [
  {
    category: 'Legal Skills',
    items: ['Contract Drafting', 'Legal Research', 'Case Analysis', 'Cyber Law', 'Policy Review', 'Compliance']
  },
  {
    category: 'Language Skills',
    items: ['English-Hindi Translation', 'Content Writing', 'Copy Editing', 'Proofreading', 'Academic Writing', 'Technical Writing']
  },
  {
    category: 'Digital Skills',
    items: ['Social Media Strategy', 'Content Marketing', 'Voice-over', 'SEO Writing', 'Digital Research', 'Online Teaching']
  },
  {
    category: 'Soft Skills',
    items: ['Client Communication', 'Project Management', 'Attention to Detail', 'Time Management', 'Critical Thinking', 'Ethical Practice']
  }
]

const volunteerWork = [
  'Pro bono legal consultations for NGOs',
  'Free educational content creation',
  'Community legal awareness programs',
  'Student mentoring and career guidance'
]

export default function CredentialsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-legal-dark mb-4">
            Professional Credentials
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Qualified legal professional with comprehensive expertise in law, language, and digital services, 
            committed to maintaining the highest standards of professional excellence.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {credentials.map((credential) => {
            const Icon = credential.icon
            return (
              <Card key={credential.title} className="text-center">
                <CardHeader>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mx-auto mb-4 ${credential.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-lg">{credential.title}</CardTitle>
                  <p className="text-gray-600 text-sm">
                    {credential.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {credential.details.map((detail) => (
                      <li key={detail} className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Skills Matrix */}
        <div className="bg-white rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-legal-dark text-center mb-8">
            Core Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillSet) => (
              <div key={skillSet.category}>
                <h4 className="font-semibold text-legal-dark mb-4 pb-2 border-b border-gray-200">
                  {skillSet.category}
                </h4>
                <ul className="space-y-2">
                  {skillSet.items.map((skill) => (
                    <li key={skill} className="flex items-start space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Values & Community Service */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Professional Values */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-primary-600" />
                <CardTitle>Professional Values</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-legal-dark">Ethical Practice</h5>
                    <p className="text-sm text-gray-600">Strict adherence to Bar Council of India professional ethics and client confidentiality.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-legal-dark">Quality Commitment</h5>
                    <p className="text-sm text-gray-600">Every deliverable is thoroughly reviewed for accuracy, clarity, and professional standards.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-legal-dark">Client-Centric Approach</h5>
                    <p className="text-sm text-gray-600">Personalized service understanding unique client needs and business objectives.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Community Service */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-secondary-600" />
                <CardTitle>Community Service</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm mb-4">
                Committed to giving back to the community through pro bono work and educational initiatives:
              </p>
              <ul className="space-y-3">
                {volunteerWork.map((work) => (
                  <li key={work} className="flex items-start space-x-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-secondary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{work}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}