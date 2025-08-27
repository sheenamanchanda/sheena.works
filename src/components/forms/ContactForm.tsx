'use client'

import { useState } from 'react'
import { Send, AlertCircle, CheckCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  serviceType: string
  projectType: string
  budget: string
  timeline: string
  priority: string
  message: string
  hearAbout: string
  newsletter: boolean
  terms: boolean
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  serviceType: '',
  projectType: '',
  budget: '',
  timeline: '',
  priority: 'normal',
  message: '',
  hearAbout: '',
  newsletter: false,
  terms: false
}

const serviceTypes = [
  { value: 'legal', label: 'Legal Services', description: 'Contracts, research, cyber law' },
  { value: 'content', label: 'Content & Translation', description: 'Writing, editing, translation' },
  { value: 'digital', label: 'Digital Services', description: 'Social media, voice-over' },
  { value: 'teaching', label: 'Teaching & Tutoring', description: 'English, law, academic support' },
  { value: 'consultation', label: 'Consultation Only', description: 'Advice and guidance' },
  { value: 'other', label: 'Other/Multiple Services', description: 'Custom or combined services' }
]

const budgetRanges = [
  { value: 'under-5k', label: 'Under ₹5,000' },
  { value: '5k-15k', label: '₹5,000 - ₹15,000' },
  { value: '15k-50k', label: '₹15,000 - ₹50,000' },
  { value: '50k-100k', label: '₹50,000 - ₹1,00,000' },
  { value: 'above-100k', label: 'Above ₹1,00,000' },
  { value: 'discuss', label: 'Let\'s discuss' }
]

const timelines = [
  { value: 'urgent', label: 'Urgent (Within 24-48 hours)' },
  { value: 'week', label: 'Within a week' },
  { value: 'month', label: 'Within a month' },
  { value: '3months', label: 'Within 3 months' },
  { value: 'flexible', label: 'Flexible timeline' }
]

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format'
    
    if (!formData.serviceType) newErrors.serviceType = 'Please select a service type'
    if (!formData.message.trim()) newErrors.message = 'Please describe your project needs'
    if (!formData.terms) (newErrors as any).terms = 'You must agree to the terms and conditions'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    
    try {
      // Simulate API call - replace with actual form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitStatus('success')
      setFormData(initialFormData)
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-green-800 mb-4">
            Thank You for Your Inquiry!
          </h3>
          <p className="text-green-700 mb-6">
            Your message has been received successfully. You can expect a personalized response within 2 hours during business hours.
          </p>
          <div className="space-y-2 text-sm text-green-600">
            <p><strong>What happens next:</strong></p>
            <p>• Initial response within 2 hours</p>
            <p>• Detailed project discussion if needed</p>
            <p>• Custom proposal within 24-48 hours</p>
          </div>
          <Button 
            onClick={() => setSubmitStatus('idle')} 
            className="mt-6"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Get Started Today</CardTitle>
        <p className="text-gray-600">
          Tell us about your project and we'll provide a personalized response with next steps.
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                  errors.name ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Your full name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                  errors.email ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company/Organization
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Your company name"
              />
            </div>
          </div>

          {/* Service Selection */}
          <div>
            <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
              Service Type *
            </label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                errors.serviceType ? 'border-red-300' : 'border-gray-300'
              }`}
            >
              <option value="">Select a service</option>
              {serviceTypes.map((service) => (
                <option key={service.value} value={service.value}>
                  {service.label} - {service.description}
                </option>
              ))}
            </select>
            {errors.serviceType && <p className="mt-1 text-sm text-red-600">{errors.serviceType}</p>}
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Select budget range</option>
                {budgetRanges.map((budget) => (
                  <option key={budget.value} value={budget.value}>
                    {budget.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                Project Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Select timeline</option>
                {timelines.map((timeline) => (
                  <option key={timeline.value} value={timeline.value}>
                    {timeline.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Priority Level */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Priority Level
            </label>
            <div className="flex space-x-4">
              {[
                { value: 'normal', label: 'Normal', color: 'text-green-600' },
                { value: 'high', label: 'High Priority', color: 'text-yellow-600' },
                { value: 'urgent', label: 'Urgent', color: 'text-red-600' }
              ].map((priority) => (
                <label key={priority.value} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="priority"
                    value={priority.value}
                    checked={formData.priority === priority.value}
                    onChange={handleInputChange}
                    className="text-primary-600 focus:ring-primary-500"
                  />
                  <span className={`text-sm font-medium ${priority.color}`}>
                    {priority.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Project Details *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                errors.message ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="Please describe your project needs, specific requirements, deliverables, and any other relevant details..."
            />
            {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
          </div>

          {/* How did you hear about us */}
          <div>
            <label htmlFor="hearAbout" className="block text-sm font-medium text-gray-700 mb-1">
              How did you hear about us?
            </label>
            <select
              id="hearAbout"
              name="hearAbout"
              value={formData.hearAbout}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Select an option</option>
              <option value="google">Google Search</option>
              <option value="referral">Client Referral</option>
              <option value="linkedin">LinkedIn</option>
              <option value="social-media">Other Social Media</option>
              <option value="legal-directory">Legal Directory</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Checkboxes */}
          <div className="space-y-3">
            <label className="flex items-start space-x-2 cursor-pointer">
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleInputChange}
                className="mt-0.5 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-sm text-gray-700">
                I'd like to receive occasional updates about legal insights, new services, and helpful resources.
              </span>
            </label>
            
            <label className="flex items-start space-x-2 cursor-pointer">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleInputChange}
                className="mt-0.5 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-sm text-gray-700">
                I agree to the <a href="/terms" className="text-primary-600 hover:underline">Terms of Service</a> and{' '}
                <a href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</a> *
              </span>
            </label>
            {errors.terms && <p className="text-sm text-red-600">{errors.terms}</p>}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center space-x-2"
              size="lg"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </Button>
          </div>

          {submitStatus === 'error' && (
            <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-md">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm">There was an error sending your message. Please try again.</span>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}