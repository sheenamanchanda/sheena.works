import Link from 'next/link'
import { Scale, Mail, Phone, MapPin, FileText, Shield, Clock } from 'lucide-react'

const footerNavigation = {
  services: [
    { name: 'Legal Services', href: '/services/legal' },
    { name: 'Content & Translation', href: '/services/content' },
    { name: 'Digital Services', href: '/services/digital' },
    { name: 'Teaching & Tutoring', href: '/services/teaching' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Resources', href: '/resources' },
    { name: 'Blog', href: '/blog' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Legal Disclaimers', href: '/disclaimers' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
  resources: [
    { name: 'Free Templates', href: '/resources/templates' },
    { name: 'Legal Guides', href: '/resources/guides' },
    { name: 'Writing Tips', href: '/resources/writing' },
    { name: 'FAQ', href: '/faq' },
  ]
}

export default function Footer() {
  return (
    <footer className="bg-legal-dark text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <Scale className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg">Sheena Manchanda</div>
                <div className="text-sm text-gray-400">Enrolled Advocate</div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Professional legal services, content writing, and multilingual expertise. 
              Specializing in cyber law, contract drafting, and academic support.
            </p>
            
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Delhi NCR, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>Mon-Fri: 9 AM - 6 PM IST</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Professional Credentials */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg">
              <Shield className="w-5 h-5 text-legal-gold flex-shrink-0" />
              <div>
                <div className="text-sm font-medium text-white">Bar Enrollment</div>
                <div className="text-xs text-gray-400">Registered Advocate</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg">
              <FileText className="w-5 h-5 text-legal-gold flex-shrink-0" />
              <div>
                <div className="text-sm font-medium text-white">Cyber Law Specialist</div>
                <div className="text-xs text-gray-400">IT & Digital Rights</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg">
              <Scale className="w-5 h-5 text-legal-gold flex-shrink-0" />
              <div>
                <div className="text-sm font-medium text-white">Professional Ethics</div>
                <div className="text-xs text-gray-400">BCI Compliant</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>&copy; {new Date().getFullYear()} Sheena Manchanda. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-6">
              {footerNavigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xs text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-800">
            <p className="text-xs text-gray-500 text-center leading-relaxed">
              <strong>Legal Disclaimer:</strong> The information provided on this website is for general informational purposes only and does not constitute legal advice. 
              Attorney-client relationships are not established through this website. Please consult with a qualified attorney for legal advice specific to your situation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}