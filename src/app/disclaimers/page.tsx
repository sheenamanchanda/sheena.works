import { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import { AlertTriangle, Scale, Globe, FileText, Shield, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Legal Disclaimers - Important Legal Notices',
  description: 'Important legal disclaimers for Sheena.Works - Professional limitations, scope of services, and legal notices for website visitors and clients.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function DisclaimersPage() {
  return (
    <Layout>
      <div className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <h1 className="text-4xl font-bold text-legal-dark mb-4">Legal Disclaimers</h1>
              <p className="text-lg text-gray-600">
                Important legal notices and limitations regarding our services and website content
              </p>
              <div className="text-sm text-gray-500 mt-4">
                Last Updated: {new Date().toLocaleDateString()} | Please read carefully before using our services
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-bold text-red-800 mb-2">Important Notice</h2>
                  <p className="text-red-700">
                    The information provided on this website and through our services is subject to important 
                    limitations and disclaimers. Please read this entire page carefully before using our services 
                    or relying on any information provided.
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              
              {/* No Attorney-Client Relationship */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-legal-dark mb-4 flex items-center space-x-2">
                  <Scale className="w-6 h-6 text-primary-600" />
                  <span>No Attorney-Client Relationship</span>
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="font-semibold text-legal-dark">
                    Visiting this website, reading our content, or sending an email inquiry does NOT create an attorney-client relationship.
                  </p>
                  <ul className="space-y-2">
                    <li><strong>Formal Engagement Required:</strong> An attorney-client relationship is created only through a signed engagement letter or retainer agreement.</li>
                    <li><strong>No Confidentiality:</strong> Information shared before formal engagement may not be protected by attorney-client privilege.</li>
                    <li><strong>No Representation:</strong> We do not represent you unless explicitly agreed to in writing.</li>
                    <li><strong>Consultation Required:</strong> Any legal matter requires individual consultation and cannot be addressed through general website content.</li>
                  </ul>
                </div>
              </div>

              {/* No Legal Advice */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-legal-dark mb-4 flex items-center space-x-2">
                  <FileText className="w-6 h-6 text-secondary-600" />
                  <span>No Legal Advice Provided</span>
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="font-semibold text-red-600">
                    Information on this website is for general educational purposes only and does not constitute legal advice.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-yellow-50 rounded-lg p-4">
                      <h3 className="font-semibold text-legal-dark mb-2">What This Means:</h3>
                      <ul className="text-sm space-y-1">
                        <li>• Content is general information only</li>
                        <li>• Not tailored to your specific situation</li>
                        <li>• Cannot replace professional legal counsel</li>
                        <li>• May not reflect current legal developments</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h3 className="font-semibold text-legal-dark mb-2">What You Should Do:</h3>
                      <ul className="text-sm space-y-1">
                        <li>• Consult qualified legal professionals</li>
                        <li>• Verify information independently</li>
                        <li>• Consider your specific circumstances</li>
                        <li>• Seek current legal advice</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Jurisdictional Limitations */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-legal-dark mb-4 flex items-center space-x-2">
                  <Globe className="w-6 h-6 text-green-600" />
                  <span>Jurisdictional Limitations</span>
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 mb-2">Practice Jurisdiction</h3>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Enrolled with Bar Council of India</li>
                      <li>• Primary practice jurisdiction: India</li>
                      <li>• Expertise in Indian law and regulations</li>
                      <li>• Familiar with Delhi NCR court procedures</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <p><strong>International Matters:</strong> While we may assist with international transactions involving Indian law, we do not provide legal advice on foreign law without appropriate local counsel.</p>
                    <p><strong>Other Indian States:</strong> While Indian law applies nationwide, local procedures and practices may vary. Specific local counsel may be recommended for certain matters.</p>
                    <p><strong>Cross-Border Issues:</strong> International legal matters require careful consideration of multiple jurisdictions and appropriate legal counsel in each relevant jurisdiction.</p>
                  </div>
                </div>
              </div>

              {/* Service Limitations */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-legal-dark mb-4 flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-purple-600" />
                  <span>Service Limitations</span>
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-legal-dark mb-3">What We Do Provide</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Legal research and analysis</li>
                        <li>• Contract drafting and review</li>
                        <li>• Legal document preparation</li>
                        <li>• Cyber law consultation</li>
                        <li>• Business compliance guidance</li>
                        <li>• Professional writing services</li>
                        <li>• Translation and language services</li>
                        <li>• Educational and tutoring services</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-legal-dark mb-3">What We Do NOT Provide</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Court representation (litigation)</li>
                        <li>• Criminal law services</li>
                        <li>• Family law matters</li>
                        <li>• Real estate transactions</li>
                        <li>• Tax advisory services</li>
                        <li>• Investment or financial advice</li>
                        <li>• Immigration services</li>
                        <li>• Notarization services</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* No Guarantees */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-legal-dark mb-4 flex items-center space-x-2">
                  <Clock className="w-6 h-6 text-orange-600" />
                  <span>No Guarantees or Warranties</span>
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <p className="font-semibold text-orange-800 mb-2">Important: No Specific Outcomes Guaranteed</p>
                    <p className="text-orange-700 text-sm">
                      While we strive to provide excellent service and achieve favorable results for our clients, 
                      the practice of law and professional services involves uncertainty. We cannot guarantee 
                      specific outcomes or results.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-legal-dark">What This Means:</h3>
                    <ul className="space-y-2">
                      <li><strong>Legal Outcomes:</strong> Legal matters involve inherent uncertainty and risks that cannot be eliminated</li>
                      <li><strong>Service Quality:</strong> We guarantee professional standards of care but not specific results</li>
                      <li><strong>Timelines:</strong> While we provide estimated timelines, external factors may cause delays</li>
                      <li><strong>Third-Party Actions:</strong> We cannot control actions of courts, opposing parties, or government agencies</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Website Content Disclaimers */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-legal-dark mb-4">Website Content Disclaimers</h2>
                <div className="space-y-4 text-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-legal-dark mb-2">Content Accuracy</h3>
                      <ul className="text-sm space-y-1">
                        <li>• Information current at time of publication</li>
                        <li>• Laws and regulations change frequently</li>
                        <li>• No warranty of completeness or accuracy</li>
                        <li>• Independent verification recommended</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-legal-dark mb-2">External Links</h3>
                      <ul className="text-sm space-y-1">
                        <li>• Third-party websites not under our control</li>
                        <li>• No endorsement of linked content</li>
                        <li>• External privacy policies apply</li>
                        <li>• Use external links at your own risk</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 mb-2">Templates and Resources</h3>
                    <p className="text-blue-700 text-sm">
                      Free templates and resources are provided as general examples only. They must be customized 
                      for your specific needs and jurisdiction. Professional review is recommended before use in 
                      any legal or business context.
                    </p>
                  </div>
                </div>
              </div>

              {/* Professional Standards */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-legal-dark mb-4">Professional Standards & Ethics</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Despite these disclaimers, we are committed to maintaining the highest professional standards:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <Scale className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <h3 className="font-semibold text-green-800 mb-1">Professional Ethics</h3>
                      <p className="text-green-700 text-sm">Adherence to Bar Council of India professional conduct rules</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <h3 className="font-semibold text-blue-800 mb-1">Client Confidentiality</h3>
                      <p className="text-blue-700 text-sm">Strict protection of client information and communications</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <FileText className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <h3 className="font-semibold text-purple-800 mb-1">Quality Standards</h3>
                      <p className="text-purple-700 text-sm">Commitment to excellence in all professional services</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact for Clarifications */}
              <div className="bg-legal-dark text-white rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4">Questions About These Disclaimers?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Contact Information</h3>
                    <p className="text-gray-300 text-sm mb-2">
                      If you have questions about these disclaimers or need clarification about our services:
                    </p>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li><strong>Email:</strong> legal@sheena.works</li>
                      <li><strong>Response Time:</strong> Within 24 hours</li>
                      <li><strong>Consultation:</strong> Schedule a consultation for specific questions</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Professional Advice</h3>
                    <p className="text-gray-300 text-sm">
                      For any legal matter or professional service need, we strongly recommend scheduling 
                      a consultation to discuss your specific situation and receive appropriate professional guidance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Acknowledgment */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-yellow-800 mb-3">Acknowledgment of Understanding</h3>
                <p className="text-yellow-700">
                  By using this website or engaging our services, you acknowledge that you have read, 
                  understood, and agree to these disclaimers and limitations. If you do not agree with 
                  any part of these disclaimers, please do not use our website or services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}