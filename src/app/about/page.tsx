'use client'

import Header from '@/components/Header'
import { Target, Users, Shield, Zap } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            About AiwithBert
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Professional curation and analysis of AI tools for businesses and developers
          </p>
        </div>

        {/* Mission */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-12 text-center">
            <Target className="h-12 w-12 text-black mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-black mb-6">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              To provide the most comprehensive, unbiased, and actionable directory of AI tools available. 
              We focus on practical applications, transparent pricing analysis, and real-world implementation guidance 
              to help businesses and individuals make informed decisions about AI adoption.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-10 w-10 text-black mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-black mb-3">Transparency</h3>
              <p className="text-gray-600 leading-relaxed">
                Clear disclosure of affiliate relationships, honest reviews, and transparent methodology in all evaluations.
              </p>
            </div>
            
            <div className="text-center">
              <Users className="h-10 w-10 text-black mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-black mb-3">Community</h3>
              <p className="text-gray-600 leading-relaxed">
                Open source platform encouraging community contributions, tool submissions, and collaborative improvement.
              </p>
            </div>
            
            <div className="text-center">
              <Zap className="h-10 w-10 text-black mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-black mb-3">Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Rigorous evaluation criteria ensuring only genuinely useful, reliable, and well-supported tools make the directory.
              </p>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-8">Evaluation Methodology</h2>
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-black mb-4">Technical Assessment</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Performance and reliability testing</li>
                  <li>• Feature completeness evaluation</li>
                  <li>• Integration capabilities analysis</li>
                  <li>• Security and privacy review</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-black mb-4">Business Evaluation</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Pricing structure analysis</li>
                  <li>• ROI potential assessment</li>
                  <li>• Support quality evaluation</li>
                  <li>• Market positioning review</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-black text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            Questions about AI tools? Need custom recommendations? Want to discuss partnerships?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/bertus37987/ai-tools-directory/issues/new?assignees=&labels=question&title=Question+or+Feedback"
              className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Ask a Question
            </a>
            <a 
              href="https://github.com/bertus37987/ai-tools-directory/issues/new?assignees=&labels=partnership&title=Partnership+Inquiry"
              className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors"
            >
              Partnership Inquiry
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}