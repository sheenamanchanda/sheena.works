import { GraduationCap, Award, BookOpen, FileText, Users, Globe } from 'lucide-react'
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

const educationHistory = [
  {
    degree: 'Bachelor of Laws (LLB)',
    specialization: 'Cyber Law & Information Technology',
    institution: 'Accredited Law College',
    location: 'Delhi NCR, India',
    year: '2018-2019',
    grade: 'First Class with Honors',
    highlights: [
      'Specialization in Cyber Law and IT regulations',
      'Contract Law and Commercial Transactions',
      'Legal Research and Writing Excellence',
      'Moot Court Competition Participation'
    ],
    icon: GraduationCap,
    color: 'bg-primary-50 border-primary-200 text-primary-600'
  },
  {
    degree: 'Professional Certifications',
    specialization: 'Cyber Law & Digital Rights',
    institution: 'Bar Council of India & Professional Bodies',
    location: 'India',
    year: 'Ongoing',
    grade: 'Certified Professional',
    highlights: [
      'Bar Council of India Enrollment',
      'Cyber Law Certification',
      'Professional Ethics Compliance',
      'Continuing Legal Education (CLE)'
    ],
    icon: Award,
    color: 'bg-secondary-50 border-secondary-200 text-secondary-600'
  }
]

const skills = [
  {
    category: 'Legal Expertise',
    items: [
      { skill: 'Contract Law', level: 95 },
      { skill: 'Cyber Law', level: 90 },
      { skill: 'Legal Research', level: 98 },
      { skill: 'Policy Analysis', level: 85 },
      { skill: 'Legal Writing', level: 92 }
    ],
    color: 'bg-primary-600'
  },
  {
    category: 'Language Skills',
    items: [
      { skill: 'English (Professional)', level: 95 },
      { skill: 'Hindi (Native)', level: 100 },
      { skill: 'Translation', level: 90 },
      { skill: 'Content Writing', level: 88 },
      { skill: 'Academic Writing', level: 85 }
    ],
    color: 'bg-secondary-600'
  },
  {
    category: 'Digital Skills',
    items: [
      { skill: 'Digital Research', level: 90 },
      { skill: 'Social Media Strategy', level: 80 },
      { skill: 'Content Strategy', level: 85 },
      { skill: 'Voice-over', level: 75 },
      { skill: 'Online Teaching', level: 88 }
    ],
    color: 'bg-green-600'
  },
  {
    category: 'Professional Skills',
    items: [
      { skill: 'Client Communication', level: 95 },
      { skill: 'Project Management', level: 90 },
      { skill: 'Time Management', level: 92 },
      { skill: 'Quality Assurance', level: 95 },
      { skill: 'Ethical Practice', level: 100 }
    ],
    color: 'bg-purple-600'
  }
]

const continuingEducation = [
  {
    title: 'Cyber Law Updates & Regulations',
    provider: 'Legal Education Providers',
    type: 'Annual Certification',
    focus: 'IT Act amendments, data protection laws'
  },
  {
    title: 'Professional Writing & Communication',
    provider: 'Professional Development Institutes',
    type: 'Workshop Series',
    focus: 'Advanced writing techniques, client communication'
  },
  {
    title: 'Digital Marketing & Content Strategy',
    provider: 'Digital Marketing Institutes',
    type: 'Certification Program',
    focus: 'Social media strategy, content marketing'
  },
  {
    title: 'Language Teaching Methodology',
    provider: 'Educational Training Centers',
    type: 'Professional Certificate',
    focus: 'ESL methodology, curriculum development'
  }
]

export default function Education() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-legal-dark mb-4">
            Education & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive legal education with specialized training in cyber law, 
            complemented by continuous professional development and skill enhancement.
          </p>
        </div>

        {/* Education History */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {educationHistory.map((education) => {
            const Icon = education.icon
            return (
              <Card key={education.degree} className={`border-2 ${education.color.split(' ')[1]} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${education.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">{education.degree}</CardTitle>
                      <p className="text-primary-600 font-medium mb-2">{education.specialization}</p>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p className="font-medium">{education.institution}</p>
                        <p>{education.location} • {education.year}</p>
                        <p className="text-legal-gold font-medium">{education.grade}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <h4 className="font-semibold text-legal-dark mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {education.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start space-x-2 text-sm text-gray-700">
                        <Award className="w-3 h-3 text-legal-gold mt-1 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Skills Matrix */}
        <div className="bg-white rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-legal-dark text-center mb-8">
            Professional Skills & Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h4 className="font-semibold text-legal-dark mb-4 flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${skillGroup.color}`}></div>
                  <span>{skillGroup.category}</span>
                </h4>
                <div className="space-y-3">
                  {skillGroup.items.map((item) => (
                    <div key={item.skill}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">{item.skill}</span>
                        <span className="text-xs text-gray-600">{item.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${skillGroup.color}`}
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continuing Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-secondary-600" />
                <span>Continuing Professional Development</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm mb-4">
                Committed to lifelong learning and staying current with industry developments, 
                legal updates, and professional best practices.
              </p>
              <div className="space-y-3">
                {continuingEducation.map((course) => (
                  <div key={course.title} className="p-3 bg-gray-50 rounded-lg">
                    <h5 className="font-medium text-legal-dark mb-1">{course.title}</h5>
                    <div className="text-xs text-gray-600 space-y-1">
                      <p><span className="font-medium">Provider:</span> {course.provider}</p>
                      <p><span className="font-medium">Type:</span> {course.type}</p>
                      <p><span className="font-medium">Focus:</span> {course.focus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-green-600" />
                <span>Professional Development Goals</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm mb-4">
                Actively pursuing advanced certifications and specialized training 
                to enhance service quality and expand expertise areas.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Globe className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-legal-dark text-sm">International Legal Standards</h5>
                    <p className="text-xs text-gray-600">Pursuing certification in international cyber law standards</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <FileText className="w-4 h-4 text-secondary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-legal-dark text-sm">Advanced Translation Certification</h5>
                    <p className="text-xs text-gray-600">Professional translator certification for legal documents</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <BookOpen className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-legal-dark text-sm">Digital Pedagogy</h5>
                    <p className="text-xs text-gray-600">Online teaching methodology and curriculum design</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Award className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-legal-dark text-sm">Content Strategy Certification</h5>
                    <p className="text-xs text-gray-600">Advanced digital marketing and content strategy training</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}