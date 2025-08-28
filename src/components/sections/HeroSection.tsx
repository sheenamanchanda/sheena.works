import Link from 'next/link'
import { ArrowRight, Scale, FileText, Globe, GraduationCap, Shield, Award, Gavel, BookOpen, Building, ScrollText, Users } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* Floating Legal Icons */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 floating-icon floating-icon-1">
          <Scale className="w-24 h-24 text-blue-600" />
        </div>
        <div className="absolute top-40 right-20 floating-icon floating-icon-2">
          <Gavel className="w-20 h-20 text-sky-600" />
        </div>
        <div className="absolute bottom-32 left-1/4 floating-icon floating-icon-3">
          <Building className="w-18 h-18 text-blue-500" />
        </div>
        <div className="absolute bottom-20 right-1/3 floating-icon floating-icon-4">
          <ScrollText className="w-16 h-16 text-sky-500" />
        </div>
        <div className="absolute top-1/2 left-1/5 floating-icon floating-icon-5">
          <BookOpen className="w-14 h-14 text-blue-400" />
        </div>
        <div className="absolute top-3/4 right-1/4 floating-icon floating-icon-1">
          <Users className="w-12 h-12 text-sky-400" />
        </div>
      </div>

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
                Clear Legal Research, Contracts, and Crisp Writing — 
                Professional services bridging law, language, and digital expertise.
              </p>
            </div>

            {/* Key Services Tags */}
            <div className="flex flex-wrap gap-3">
              {[
                'Legal Research',
                'Contract Drafting',
                'Cyber Law',
                'Translation',
                'Content Writing',
                'Academic Support'
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
                <span>Available for projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-legal-gold" />
                <span>5+ years experience</span>
              </div>
            </div>
          </div>

          {/* Professional Illustration/Stats */}
          <div className="hidden lg:block space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {/* Stat Cards */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                <div className="flex items-center space-x-3 mb-2">
                  <Scale className="w-5 h-5 text-primary-600" />
                  <span className="text-sm font-medium text-gray-700">Legal Services</span>
                </div>
                <div className="text-2xl font-bold text-legal-dark">150+</div>
                <div className="text-sm text-gray-600">Cases & Contracts</div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                <div className="flex items-center space-x-3 mb-2">
                  <FileText className="w-5 h-5 text-secondary-600" />
                  <span className="text-sm font-medium text-gray-700">Content Writing</span>
                </div>
                <div className="text-2xl font-bold text-legal-dark">500+</div>
                <div className="text-sm text-gray-600">Articles & Documents</div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                <div className="flex items-center space-x-3 mb-2">
                  <Globe className="w-5 h-5 text-legal-gold" />
                  <span className="text-sm font-medium text-gray-700">Translation</span>
                </div>
                <div className="text-2xl font-bold text-legal-dark">2</div>
                <div className="text-sm text-gray-600">Languages (EN/HI)</div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                <div className="flex items-center space-x-3 mb-2">
                  <GraduationCap className="w-5 h-5 text-primary-600" />
                  <span className="text-sm font-medium text-gray-700">Teaching</span>
                </div>
                <div className="text-2xl font-bold text-legal-dark">100+</div>
                <div className="text-sm text-gray-600">Students Mentored</div>
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