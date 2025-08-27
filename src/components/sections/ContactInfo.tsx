import { Mail, Clock, Calendar, Shield, MessageCircle, Phone, MapPin, Award } from 'lucide-react'
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

const contactChannels = [
  {
    type: 'General Inquiries',
    email: 'hi@sheena.works',
    description: 'General questions, initial consultations, and project inquiries',
    icon: Mail,
    color: 'text-primary-600 bg-primary-50'
  },
  {
    type: 'Legal Services',
    email: 'legal@sheena.works',
    description: 'Contract drafting, legal research, cyber law consultation',
    icon: Shield,
    color: 'text-green-600 bg-green-50'
  },
  {
    type: 'Content Services',
    email: 'content@sheena.works',
    description: 'Writing, translation, editing, and content strategy',
    icon: MessageCircle,
    color: 'text-blue-600 bg-blue-50'
  },
  {
    type: 'Teaching Services',
    email: 'teach@sheena.works',
    description: 'Tutoring, training, and educational consultations',
    icon: Award,
    color: 'text-purple-600 bg-purple-50'
  }
]

const responsePromises = [
  {
    type: 'Email Inquiries',
    time: 'Within 2 hours',
    description: 'All email inquiries during business hours',
    icon: Mail
  },
  {
    type: 'Consultation Requests',
    time: 'Within 24 hours',
    description: 'Scheduling and project discussions',
    icon: Calendar
  },
  {
    type: 'Urgent Matters',
    time: 'Within 1 hour',
    description: 'High-priority and time-sensitive projects',
    icon: Clock
  }
]

const businessHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM IST', status: 'Full Service' },
  { day: 'Saturday', hours: '10:00 AM - 2:00 PM IST', status: 'Limited Service' },
  { day: 'Sunday', hours: 'Closed', status: 'Email Only' }
]

const professionalInfo = [
  { label: 'Bar Enrollment', value: 'Active Member, Bar Council of India' },
  { label: 'Specialization', value: 'Cyber Law, Contract Law, Content Services' },
  { label: 'Experience', value: '5+ Years Professional Practice' },
  { label: 'Languages', value: 'English, Hindi (Native)' },
  { label: 'Location', value: 'Delhi NCR, India (Remote Services Available)' }
]

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Contact Channels */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-primary-600" />
            <span>Direct Contact Channels</span>
          </CardTitle>
          <p className="text-gray-600 text-sm">
            Choose the most appropriate email for your inquiry type to ensure faster, 
            more specialized responses.
          </p>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {contactChannels.map((channel) => {
            const Icon = channel.icon
            return (
              <div key={channel.type} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${channel.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-legal-dark">{channel.type}</h4>
                    <a 
                      href={`mailto:${channel.email}`}
                      className="text-primary-600 hover:underline font-medium"
                    >
                      {channel.email}
                    </a>
                    <p className="text-sm text-gray-600 mt-1">{channel.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </CardContent>
      </Card>

      {/* Response Times */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-secondary-600" />
            <span>Response Time Guarantee</span>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-3">
          {responsePromises.map((promise) => {
            const Icon = promise.icon
            return (
              <div key={promise.type} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Icon className="w-4 h-4 text-gray-600" />
                  <div>
                    <div className="font-medium text-legal-dark">{promise.type}</div>
                    <div className="text-xs text-gray-600">{promise.description}</div>
                  </div>
                </div>
                <div className="text-sm font-semibold text-green-600">
                  {promise.time}
                </div>
              </div>
            )
          })}
        </CardContent>
      </Card>

      {/* Business Hours */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-green-600" />
            <span>Business Hours</span>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-3">
          {businessHours.map((schedule) => (
            <div key={schedule.day} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium text-legal-dark">{schedule.day}</div>
                <div className="text-sm text-gray-600">{schedule.hours}</div>
              </div>
              <div className={`text-xs px-2 py-1 rounded-full font-medium ${
                schedule.status === 'Full Service' 
                  ? 'bg-green-100 text-green-700'
                  : schedule.status === 'Limited Service'
                  ? 'bg-yellow-100 text-yellow-700'
                  : 'bg-gray-100 text-gray-700'
              }`}>
                {schedule.status}
              </div>
            </div>
          ))}
          
          <div className="bg-blue-50 rounded-lg p-4 mt-4">
            <div className="flex items-start space-x-2">
              <Phone className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <div className="text-sm text-blue-800">
                <strong>Emergency Consultations:</strong> Available outside business hours for urgent legal matters. 
                Mark your inquiry as "urgent" for priority response within 1-2 hours.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Professional Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-legal-gold" />
            <span>Professional Information</span>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-3">
          {professionalInfo.map((info) => (
            <div key={info.label} className="flex justify-between items-start py-2 border-b border-gray-100 last:border-0">
              <span className="text-sm font-medium text-gray-700">{info.label}:</span>
              <span className="text-sm text-legal-dark text-right max-w-xs">{info.value}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Privacy & Security */}
      <Card className="bg-legal-dark text-white">
        <CardContent className="p-6">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-legal-gold mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Privacy & Confidentiality</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                All communications are protected under attorney-client privilege and professional 
                confidentiality standards. Your information is never shared without explicit consent, 
                and all inquiries are handled with the highest level of discretion.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Location Info */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-red-600" />
            <span>Service Area & Location</span>
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <div className="font-medium text-legal-dark">Primary Location</div>
                <div className="text-sm text-gray-600">Delhi NCR, India</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-secondary-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <div className="font-medium text-legal-dark">Remote Services</div>
                <div className="text-sm text-gray-600">Available globally for all service categories</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <div className="font-medium text-legal-dark">In-Person Meetings</div>
                <div className="text-sm text-gray-600">Available in Delhi NCR by appointment</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}