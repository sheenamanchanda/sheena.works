import Link from 'next/link'
import { ArrowRight, Scale, FileText, Globe, GraduationCap, Shield, Award, Gavel, BookOpen, Building, ScrollText, Users } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200">
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">Enrolled Advocate • Bar Council of India</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                <span className="block">Sheena</span>
                <span className="block bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">Manchanda</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-700 font-medium">
                Enrolled Advocate & Paralegal
              </p>
              <p className="text-lg text-gray-700 max-w-xl leading-relaxed">
                Combining legal expertise with marketing insights to deliver comprehensive 
                legal research, contract drafting, and content writing services.
              </p>
            </div>

            {/* Key Services Tags */}
            <div className="flex flex-wrap gap-3">
              {[
                'Legal Research & Analysis',
                'Contract Drafting & Review',
                'Legal Content Writing',
                'Cyber Law',
                'Online Consultations',
                'Document Review'
              ].map((service) => (
                <span
                  key={service}
                  className="px-3 py-1 bg-white/60 text-gray-700 text-sm font-medium rounded-full border border-gray-200"
                >
                  {service}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button size="lg" className="w-full sm:w-auto">
                  View Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Get Free Quote
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Available for consultations</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-legal-gold" />
                <span>B.A. Marketing + LLB + PGD Cyber Law</span>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="hidden lg:block space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {/* Value Cards */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                <div className="flex items-center space-x-3 mb-3">
                  <Shield className="w-6 h-6 text-primary-600" />
                  <span className="text-lg font-semibold text-gray-800">Integrity</span>
                </div>
                <div className="text-sm text-gray-600">Upholding the highest ethical standards in all professional dealings</div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                <div className="flex items-center space-x-3 mb-3">
                  <Award className="w-6 h-6 text-secondary-600" />
                  <span className="text-lg font-semibold text-gray-800">Excellence</span>
                </div>
                <div className="text-sm text-gray-600">Delivering precision and quality in every legal document and service</div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                <div className="flex items-center space-x-3 mb-3">
                  <Users className="w-6 h-6 text-legal-gold" />
                  <span className="text-lg font-semibold text-gray-800">Client-Focused</span>
                </div>
                <div className="text-sm text-gray-600">Understanding unique needs to provide personalized solutions</div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                <div className="flex items-center space-x-3 mb-3">
                  <BookOpen className="w-6 h-6 text-primary-600" />
                  <span className="text-lg font-semibold text-gray-800">Expertise</span>
                </div>
                <div className="text-sm text-gray-600">Continuous learning and staying current with legal developments</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 text-gray-500">
            <span className="text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}