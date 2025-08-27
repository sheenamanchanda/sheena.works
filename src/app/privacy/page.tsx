import { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import { Shield, Eye, Lock, UserCheck, FileText, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy - Data Protection & Client Confidentiality',
  description: 'Privacy Policy for Sheena.Works - How we protect your personal information and maintain professional confidentiality in compliance with Indian privacy laws.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <Layout>
      <div className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h1 className="text-4xl font-bold text-legal-dark mb-4">Privacy Policy</h1>
              <p className="text-lg text-gray-600">
                Your privacy and confidentiality are paramount to our professional practice
              </p>
              <div className="text-sm text-gray-500 mt-4">
                Last Updated: {new Date().toLocaleDateString()} | Effective Date: January 1, 2024
              </div>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-xl shadow-sm p-8 prose prose-lg max-w-none">
              
              {/* Introduction */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-legal-dark mb-4 flex items-center space-x-2">
                  <UserCheck className="w-6 h-6 text-primary-600" />
                  <span>Our Commitment to Your Privacy</span>
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Sheena Manchanda ("we," "our," or "us") is committed to protecting your privacy and maintaining the confidentiality of your personal information. As an Enrolled Advocate with the Bar Council of India, we adhere to the highest standards of professional ethics and client confidentiality.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This Privacy Policy explains how we collect, use, protect, and share information when you use our website (sheena.works) or engage our professional services.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-legal-dark mb-4 flex items-center space-x-2">
                  <Eye className="w-6 h-6 text-secondary-600" />
                  <span>Information We Collect</span>
                </h2>
                
                <h3 className="text-xl font-semibold text-legal-dark mb-3">Personal Information</h3>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li><strong>Contact Information:</strong> Name, email address, phone number, company name</li>
                  <li><strong>Project Information:</strong> Service requirements, project details, budget information</li>
                  <li><strong>Communication Records:</strong> Emails, messages, consultation notes, and related correspondence</li>
                  <li><strong>Professional Information:</strong> Industry, role, business needs, and project context</li>
                </ul>

                <h3 className="text-xl font-semibold text-legal-dark mb-3">Technical Information</h3>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li><strong>Website Usage:</strong> IP address, browser type, device information, pages visited</li>
                  <li><strong>Cookies:</strong> Session cookies, preference cookies, and analytics cookies (with consent)</li>
                  <li><strong>Form Data:</strong> Information submitted through contact forms and newsletters</li>
                </ul>
              </div>

              {/* How We Use Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-legal-dark mb-4 flex items-center space-x-2">
                  <FileText className="w-6 h-6 text-green-600" />
                  <span>How We Use Your Information</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-legal-dark mb-2">Service Delivery</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Providing requested legal and professional services</li>
                      <li>• Communication regarding projects and consultations</li>
                      <li>• Document preparation and legal research</li>
                      <li>• Quality assurance and service improvement</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-legal-dark mb-2">Business Operations</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Responding to inquiries and providing quotes</li>
                      <li>• Newsletter delivery (with your consent)</li>
                      <li>• Website analytics and improvement</li>
                      <li>• Compliance with legal and professional obligations</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Professional Confidentiality */}
              <div className="mb-8 bg-blue-50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center space-x-2">
                  <Lock className="w-6 h-6" />
                  <span>Attorney-Client Privilege & Professional Confidentiality</span>
                </h2>
                <div className="text-blue-800 space-y-3">
                  <p><strong>Legal Professional Privilege:</strong> All communications and information shared in the context of legal services are protected under attorney-client privilege as recognized under Indian law.</p>
                  <p><strong>Bar Council Ethics:</strong> We adhere to the Bar Council of India's professional conduct rules, including strict confidentiality requirements.</p>
                  <p><strong>No Disclosure:</strong> Client information is never shared without explicit written consent, except as required by law or court order.</p>
                  <p><strong>Secure Handling:</strong> All client documents and communications are stored securely and handled according to professional standards.</p>
                </div>
              </div>

              {/* Data Protection */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-legal-dark mb-4">Data Protection & Security</h2>
                
                <h3 className="text-xl font-semibold text-legal-dark mb-3">Security Measures</h3>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li><strong>Encryption:</strong> All data transmission is encrypted using industry-standard SSL/TLS protocols</li>
                  <li><strong>Access Controls:</strong> Strict access controls limit who can view your information</li>
                  <li><strong>Secure Storage:</strong> Data is stored on secure servers with regular security updates</li>
                  <li><strong>Professional Standards:</strong> Handling follows Bar Council confidentiality requirements</li>
                </ul>

                <h3 className="text-xl font-semibold text-legal-dark mb-3">Data Retention</h3>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li><strong>Client Files:</strong> Maintained as per legal professional standards (typically 7 years)</li>
                  <li><strong>Website Data:</strong> Analytics data retained for 26 months maximum</li>
                  <li><strong>Marketing Data:</strong> Newsletter data retained until unsubscription</li>
                  <li><strong>Right to Deletion:</strong> You may request deletion of personal data (subject to legal requirements)</li>
                </ul>
              </div>

              {/* Your Rights */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-legal-dark mb-4">Your Privacy Rights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-legal-dark">Data Access & Control</h3>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Request copies of your personal data</li>
                      <li>• Request correction of inaccurate information</li>
                      <li>• Request deletion of your data (where legally permissible)</li>
                      <li>• Object to processing of your data</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-legal-dark">Communication Preferences</h3>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Unsubscribe from newsletters at any time</li>
                      <li>• Opt-out of non-essential communications</li>
                      <li>• Request specific communication methods</li>
                      <li>• Update your contact preferences</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Third Parties */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-legal-dark mb-4">Third-Party Services</h2>
                <p className="text-gray-700 mb-4">We may use trusted third-party services for website functionality:</p>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Web Analytics:</strong> Google Analytics (anonymized data only)</li>
                  <li><strong>Email Services:</strong> Professional email hosting with encryption</li>
                  <li><strong>Form Processing:</strong> Secure form handling services</li>
                  <li><strong>Website Hosting:</strong> Secure cloud hosting with data protection guarantees</li>
                </ul>
                <p className="text-gray-700 mt-4 text-sm">
                  All third-party services are evaluated for privacy compliance and data protection standards.
                </p>
              </div>

              {/* Cookies Policy */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-legal-dark mb-4">Cookies Policy</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left font-semibold">Cookie Type</th>
                        <th className="px-4 py-2 text-left font-semibold">Purpose</th>
                        <th className="px-4 py-2 text-left font-semibold">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-t">
                        <td className="px-4 py-2">Essential</td>
                        <td className="px-4 py-2">Website functionality, security</td>
                        <td className="px-4 py-2">Session/1 year</td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-4 py-2">Analytics</td>
                        <td className="px-4 py-2">Website usage statistics</td>
                        <td className="px-4 py-2">2 years</td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-4 py-2">Preferences</td>
                        <td className="px-4 py-2">User settings, language</td>
                        <td className="px-4 py-2">1 year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Contact & Complaints */}
              <div className="mb-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-yellow-800 mb-4 flex items-center space-x-2">
                  <AlertCircle className="w-6 h-6" />
                  <span>Privacy Concerns & Contact</span>
                </h2>
                <div className="text-yellow-800 space-y-3">
                  <p><strong>Privacy Officer:</strong> Sheena Manchanda, Enrolled Advocate</p>
                  <p><strong>Email:</strong> privacy@sheena.works</p>
                  <p><strong>Response Time:</strong> We respond to privacy inquiries within 72 hours</p>
                  <p><strong>Complaints:</strong> If you're unsatisfied with our privacy practices, you may file a complaint with relevant data protection authorities.</p>
                </div>
              </div>

              {/* Updates */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-legal-dark mb-4">Policy Updates</h2>
                <p className="text-gray-700 mb-4">
                  We may update this Privacy Policy to reflect changes in our practices or applicable laws. 
                  Material changes will be notified through:
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Email notification to registered users</li>
                  <li>• Prominent notice on our website</li>
                  <li>• Updated effective date at the top of this policy</li>
                </ul>
              </div>

              {/* Governing Law */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-legal-dark mb-3">Governing Law & Jurisdiction</h2>
                <p className="text-gray-700 text-sm">
                  This Privacy Policy is governed by the laws of India, including the Information Technology Act, 2000, 
                  and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal 
                  Data or Information) Rules, 2011. Any disputes related to privacy matters will be subject to the 
                  jurisdiction of courts in Delhi, India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}