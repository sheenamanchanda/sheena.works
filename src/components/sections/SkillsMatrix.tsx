import { Scale, FileText, Globe, GraduationCap, Zap, Target, TrendingUp, Users } from 'lucide-react'
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

const skillCategories = [
  {
    title: 'Legal Skills',
    icon: Scale,
    color: 'text-primary-600 bg-primary-50',
    description: 'Professional legal expertise with Bar Council registration',
    skills: [
      { name: 'Contract Drafting & Review', proficiency: 95, experience: '5+ years', projects: '150+' },
      { name: 'Legal Research & Analysis', proficiency: 98, experience: '5+ years', projects: '200+' },
      { name: 'Cyber Law & IT Regulations', proficiency: 90, experience: '4+ years', projects: '75+' },
      { name: 'Policy Analysis & Compliance', proficiency: 85, experience: '3+ years', projects: '50+' },
      { name: 'Case Digests & Summaries', proficiency: 92, experience: '5+ years', projects: '100+' },
    ]
  },
  {
    title: 'Language & Communication',
    icon: FileText,
    color: 'text-secondary-600 bg-secondary-50',
    description: 'Bilingual expertise with professional translation skills',
    skills: [
      { name: 'English Professional Writing', proficiency: 95, experience: '5+ years', projects: '300+' },
      { name: 'Hindi Native Fluency', proficiency: 100, experience: 'Native', projects: '200+' },
      { name: 'English ↔ Hindi Translation', proficiency: 90, experience: '4+ years', projects: '250+' },
      { name: 'Academic & Technical Writing', proficiency: 88, experience: '4+ years', projects: '100+' },
      { name: 'Content Strategy & Copywriting', proficiency: 85, experience: '3+ years', projects: '150+' },
    ]
  },
  {
    title: 'Digital & Technology',
    icon: Globe,
    color: 'text-green-600 bg-green-50',
    description: 'Modern digital services and online content expertise',
    skills: [
      { name: 'Social Media Management', proficiency: 80, experience: '3+ years', projects: '50+' },
      { name: 'Digital Content Strategy', proficiency: 85, experience: '3+ years', projects: '60+' },
      { name: 'Voice-over & Audio Production', proficiency: 75, experience: '2+ years', projects: '40+' },
      { name: 'SEO & Digital Marketing', proficiency: 78, experience: '2+ years', projects: '35+' },
      { name: 'Online Teaching & E-learning', proficiency: 88, experience: '4+ years', projects: '100+' },
    ]
  },
  {
    title: 'Education & Mentoring',
    icon: GraduationCap,
    color: 'text-purple-600 bg-purple-50',
    description: 'Teaching expertise across multiple subjects and skill levels',
    skills: [
      { name: 'English Language Tutoring', proficiency: 92, experience: '5+ years', projects: '200+' },
      { name: 'Political Science Teaching', proficiency: 90, experience: '4+ years', projects: '80+' },
      { name: 'Law Fundamentals Education', proficiency: 88, experience: '3+ years', projects: '60+' },
      { name: 'Professional Skills Training', proficiency: 85, experience: '3+ years', projects: '50+' },
      { name: 'Career Guidance & Mentoring', proficiency: 90, experience: '4+ years', projects: '100+' },
    ]
  }
]

const softSkills = [
  {
    skill: 'Client Communication',
    level: 95,
    description: 'Clear, professional communication with diverse client base',
    icon: Users
  },
  {
    skill: 'Project Management',
    level: 90,
    description: 'Efficient handling of multiple projects with strict deadlines',
    icon: Target
  },
  {
    skill: 'Problem Solving',
    level: 92,
    description: 'Creative solutions for complex legal and content challenges',
    icon: Zap
  },
  {
    skill: 'Adaptability',
    level: 88,
    description: 'Quick adaptation to new technologies and client requirements',
    icon: TrendingUp
  }
]

const industryExperience = [
  { industry: 'Technology Startups', projects: '75+', expertise: 'Contract law, cyber regulations, content strategy' },
  { industry: 'Educational Institutions', projects: '60+', expertise: 'Academic writing, curriculum support, tutoring' },
  { industry: 'Publishing & Media', projects: '50+', expertise: 'Translation, editing, content creation' },
  { industry: 'Non-Profit Organizations', projects: '40+', expertise: 'Policy analysis, grant writing, digital strategy' },
  { industry: 'Legal & Professional Services', projects: '30+', expertise: 'Legal research, document review, compliance' },
  { industry: 'Healthcare & Wellness', projects: '25+', expertise: 'Regulatory compliance, content writing' }
]

export default function SkillsMatrix() {
  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-legal-dark mb-4">
            Skills & Expertise Matrix
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive skill assessment across legal, language, digital, and educational domains 
            with quantified experience and project metrics.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-12 mb-16">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <div key={category.title} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${category.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-legal-dark">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="bg-white rounded-lg p-6 border border-gray-200">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold text-legal-dark">{skill.name}</h4>
                        <span className="text-lg font-bold text-primary-600">{skill.proficiency}%</span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                        <div 
                          className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Experience:</span>
                          <div className="font-medium text-legal-dark">{skill.experience}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Projects:</span>
                          <div className="font-medium text-legal-dark">{skill.projects}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Soft Skills */}
        <div className="bg-legal-dark text-white rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Professional Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill) => {
              const Icon = skill.icon
              return (
                <div key={skill.skill} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">{skill.skill}</h4>
                  <div className="text-2xl font-bold text-primary-300 mb-2">{skill.level}%</div>
                  <p className="text-sm text-gray-300">{skill.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Industry Experience */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Industry Experience & Specializations</CardTitle>
            <p className="text-center text-gray-600">
              Diverse industry experience across multiple sectors with specialized expertise
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industryExperience.map((industry) => (
                <div key={industry.industry} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-legal-dark text-sm">{industry.industry}</h4>
                    <span className="text-xs bg-primary-100 text-primary-600 px-2 py-1 rounded-full">
                      {industry.projects}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{industry.expertise}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skill Development Philosophy */}
        <div className="mt-12 text-center bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-legal-dark mb-4">Continuous Skill Development</h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Committed to lifelong learning and professional development. Regular skill updates through 
            continuing education, industry certifications, and hands-on project experience ensure 
            that services remain current with evolving industry standards and client needs.
          </p>
          <div className="mt-6 flex justify-center space-x-8 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">15+</div>
              <div className="text-gray-600">Skills Developed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary-600">6</div>
              <div className="text-gray-600">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}