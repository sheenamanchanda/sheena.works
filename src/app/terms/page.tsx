import { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import { Scale, FileText, AlertTriangle, Shield, Clock, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service - Professional Service Agreement',
  description: 'Terms of Service for Sheena.Works - Professional service agreements, client responsibilities, and engagement terms for legal and professional services.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <Layout>
      <div className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Scale className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-4xl font-bold text-legal-dark mb-4">Terms of Service</h1>
              <p className="text-lg text-gray-600">
                Professional service agreement governing our client relationships and service delivery
              </p>
              <div className="text-sm text-gray-500 mt-4">
                Last Updated: {new Date().toLocaleDateString()} | Effective Date: January 1, 2024
              </div>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-xl shadow-sm p-8 prose prose-lg max-w-none">
              
              {/* Agreement */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-legal-dark mb-4 flex items-center space-x-2">
                  <FileText className="w-6 h-6 text-primary-600" />
                  <span>Agreement to Terms</span>
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms of Service ("Terms") constitute a legal agreement between you ("Client") and 
                  Sheena Manchanda, Enrolled Advocate ("we," "our," or "Advocate") regarding the use of our 
                  website (sheena.works) and professional services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By accessing our website or engaging our services, you acknowledge that you have read, 
                  understood, and agree to be bound by these Terms and our Privacy Policy.
                </p>
              </div>

              {/* Professional Status */}
              <div className="mb-8 bg-blue-50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center space-x-2">
                  <Shield className="w-6 h-6" />
                  <span>Professional Status & Credentials</span>
                </h2>
                <div className="text-blue-800 space-y-3">
                  <p><strong>Bar Council Registration:</strong> Sheena Manchanda is an Enrolled Advocate registered with the Bar Council of India.</p>
                  <p><strong>Professional Ethics:</strong> All services are provided in accordance with the Bar Council of India's professional conduct rules.</p>
                  <p><strong>Continuing Education:</strong> We maintain current knowledge through continuing legal education and professional development.</p>
                  <p><strong>Specialization:</strong> Particular expertise in cyber law, contract law, content writing, and translation services.</p>
                </div>
              </div>

              {/* Services Offered */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-legal-dark mb-4">Services Offered</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-legal-dark mb-2">Legal Services</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Legal research and analysis</li>
                      <li>• Contract drafting and review</li>
                      <li>• Cyber law consultation</li>
                      <li>• Policy drafts and compliance guidance</li>
                      <li>• Legal document preparation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-legal-dark mb-2">Professional Services</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Content writing and editing</li>
                      <li>• English-Hindi translation</li>
                      <li>• Digital marketing consultation</li>
                      <li>• Academic writing support</li>
                      <li>• Professional tutoring and training</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Engagement Process */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-legal-dark mb-4 flex items-center space-x-2">
                  <Clock className="w-6 h-6 text-secondary-600" />
                  <span>Service Engagement Process</span>
                </h2>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <h3 className="font-semibold text-legal-dark">1. Initial Consultation</h3>
                    <p className="text-gray-700 text-sm">
                      All engagements begin with an initial consultation to understand your needs and determine appropriate services.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-secondary-500 pl-4">
                    <h3 className="font-semibold text-legal-dark">2. Engagement Letter</h3>
                    <p className="text-gray-700 text-sm">
                      For legal services, a formal engagement letter will be executed outlining scope, fees, and terms.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-legal-dark">3. Service Delivery</h3>
                    <p className="text-gray-700 text-sm">
                      Services are delivered according to agreed timelines with regular progress updates and client communication.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-legal-dark">4. Project Completion</h3>
                    <p className="text-gray-700 text-sm">
                      Final deliverables are provided with documentation and ongoing support as specified in the engagement.
                    </p>
                  </div>
                </div>
              </div>

              {/* Fees and Payment */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-legal-dark mb-4">Fees and Payment Terms</h2>
                
                <h3 className="text-xl font-semibold text-legal-dark mb-3">Fee Structure</h3>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li><strong>Hourly Rates:</strong> For consultation and ongoing services, billed in 15-minute increments</li>
                  <li><strong>Fixed Fees:</strong> For defined projects with clear scope and deliverables</li>
                  <li><strong>Retainer Arrangements:</strong> For ongoing legal or professional services</li>
                  <li><strong>Expenses:</strong> Out-of-pocket expenses billed separately with prior approval</li>
                </ul>

                <h3 className="text-xl font-semibold text-legal-dark mb-3">Payment Terms</h3>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li><strong>Payment Due:</strong> Invoices are due within 30 days of issuance</li>
                  <li><strong>Late Payments:</strong> Interest may be charged on overdue amounts at 1.5% per month</li>
                  <li><strong>Advance Payments:</strong> May be required for substantial projects or new clients</li>
                  <li><strong>Currency:</strong> All fees quoted and payable in Indian Rupees (INR)</li>
                </ul>
              </div>

              {/* Client Responsibilities */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-legal-dark mb-4 flex items-center space-x-2">
                  <Users className="w-6 h-6 text-green-600" />
                  <span>Client Responsibilities</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-legal-dark">Information & Cooperation</h3>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Provide accurate and complete information</li>
                      <li>• Respond promptly to requests for clarification</li>
                      <li>• Review drafts and provide timely feedback</li>
                      <li>• Cooperate in service delivery process</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-legal-dark">Payment & Communication</h3>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Make payments according to agreed terms</li>
                      <li>• Maintain appropriate professional communication</li>
                      <li>• Notify of any changes affecting the project</li>
                      <li>• Respect professional boundaries and ethics</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Important Disclaimers */}
              <div className="mb-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-yellow-800 mb-4 flex items-center space-x-2">
                  <AlertTriangle className="w-6 h-6" />
                  <span>Important Legal Disclaimers</span>
                </h2>
                <div className="text-yellow-800 space-y-3">
                  <p><strong>No Attorney-Client Relationship:</strong> Visiting this website or sending an email does not create an attorney-client relationship. Such relationship is created only through a signed engagement letter.</p>
                  <p><strong>No Legal Advice:</strong> Information on this website is for general informational purposes only and does not constitute legal advice for any specific situation.</p>
                  <p><strong>Jurisdiction Limitations:</strong> Legal advice is provided primarily for Indian law. International matters require specific consultation.</p>
                  <p><strong>No Guarantees:</strong> While we strive for excellence, no specific outcomes or results are guaranteed.</p>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-legal-dark mb-4">Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">To the maximum extent permitted by law:</p>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Professional Standards:</strong> Our liability is limited to the standard of care expected of legal and professional service providers</li>
                  <li><strong>Direct Damages Only:</strong> We are not liable for indirect, consequential, or punitive damages</li>
                  <li><strong>Monetary Limitation:</strong> Total liability shall not exceed the fees paid for the specific service</li>
                  <li><strong>Time Limitation:</strong> Claims must be brought within one year of completion of services</li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-legal-dark mb-4">Intellectual Property</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-legal-dark">Our Work Product</h3>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Documents created become client property upon payment</li>
                      <li>• Templates and forms retain our copyright</li>
                      <li>• Legal strategies and approaches may be reused</li>
                      <li>• Client-specific information remains confidential</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-legal-dark">Website Content</h3>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• All website content is our intellectual property</li>
                      <li>• Blog posts and resources are copyrighted</li>
                      <li>• Limited use granted for personal reference</li>
                      <li>• Commercial use requires written permission</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Termination */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-legal-dark mb-4">Service Termination</h2>
                <h3 className="text-xl font-semibold text-legal-dark mb-3">Termination by Client</h3>
                <ul className="text-gray-700 space-y-1 mb-4">
                  <li>• Services may be terminated with written notice</li>
                  <li>• Payment due for services rendered through termination date</li>
                  <li>• Work product delivered as of termination date</li>
                  <li>• Client files returned or destroyed as requested</li>
                </ul>

                <h3 className="text-xl font-semibold text-legal-dark mb-3">Termination by Advocate</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• May withdraw from representation for ethical reasons</li>
                  <li>• Reasonable notice provided when possible</li>
                  <li>• Cooperation in transition of services</li>
                  <li>• Refund of unused advance fees</li>
                </ul>
              </div>

              {/* Dispute Resolution */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-legal-dark mb-4">Dispute Resolution</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-legal-dark mb-2">Step 1: Direct Communication</h3>
                    <p className="text-sm text-gray-700">
                      Any concerns should first be addressed through direct communication with us to seek resolution.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-legal-dark mb-2">Step 2: Mediation</h3>
                    <p className="text-sm text-gray-700">
                      If direct resolution is not possible, disputes may be submitted to mediation through a mutually acceptable mediator.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-legal-dark mb-2">Step 3: Legal Proceedings</h3>
                    <p className="text-sm text-gray-700">
                      Any legal proceedings shall be conducted in the appropriate courts in Delhi, India, under Indian law.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-8 bg-blue-50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">Questions About These Terms?</h2>
                <div className="text-blue-800 space-y-2">
                  <p><strong>Email:</strong> legal@sheena.works</p>
                  <p><strong>Response Time:</strong> We respond to legal inquiries within 24 hours</p>
                  <p><strong>Consultation:</strong> Schedule a consultation to discuss specific terms or service agreements</p>
                </div>
              </div>

              {/* Governing Law */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-legal-dark mb-3">Governing Law & Severability</h2>
                <p className="text-gray-700 text-sm mb-3">
                  These Terms are governed by the laws of India. If any provision is found unenforceable, 
                  the remainder of these Terms shall remain in full force and effect.
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Entire Agreement:</strong> These Terms, together with our Privacy Policy and any 
                  specific engagement letter, constitute the entire agreement between the parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}