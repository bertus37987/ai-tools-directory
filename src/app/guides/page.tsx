'use client'

import Header from '@/components/Header'
import { BookOpen, ArrowRight, Users, TrendingUp, Zap } from 'lucide-react'

interface Guide {
  id: string
  title: string
  description: string
  category: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  readTime: string
  popular: boolean
}

const guides: Guide[] = [
  {
    id: '1',
    title: 'How to Choose the Right AI Writing Tool',
    description: 'Complete framework for evaluating AI writing assistants based on your specific needs, budget, and workflow requirements.',
    category: 'Selection',
    difficulty: 'Beginner',
    readTime: '15 min',
    popular: true
  },
  {
    id: '2',
    title: 'AI Tool Integration Strategy for Teams',
    description: 'Step-by-step guide to implementing AI tools across your organization. Change management, training, and ROI measurement.',
    category: 'Strategy',
    difficulty: 'Intermediate', 
    readTime: '25 min',
    popular: true
  },
  {
    id: '3',
    title: 'Cost-Benefit Analysis Framework for AI Tools',
    description: 'Professional methodology for calculating ROI of AI tool investments. Includes spreadsheet templates and case studies.',
    category: 'Business',
    difficulty: 'Advanced',
    readTime: '20 min',
    popular: false
  },
  {
    id: '4', 
    title: 'AI Tool Security and Compliance Checklist',
    description: 'Essential security considerations when adopting AI tools. GDPR compliance, data handling, and risk assessment.',
    category: 'Security',
    difficulty: 'Intermediate',
    readTime: '12 min',
    popular: true
  }
]

export default function GuidesPage() {
  const popularGuides = guides.filter(guide => guide.popular)
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'Advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            AI Implementation Guides
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional guidance for implementing AI tools in your business. Strategic frameworks, best practices, and proven methodologies.
          </p>
        </div>

        {/* Popular Guides */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-8 flex items-center">
            <TrendingUp className="h-6 w-6 mr-3" />
            Most Popular Guides
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {popularGuides.map((guide) => (
              <article key={guide.id} className="bg-white border border-gray-200 rounded-xl p-8 hover:border-gray-300 hover:shadow-lg transition-all duration-200 group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-black text-white rounded-lg">
                    {guide.category}
                  </span>
                  <span className={`inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-lg ${getDifficultyColor(guide.difficulty)}`}>
                    {guide.difficulty}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors leading-tight">
                  {guide.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {guide.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      {guide.readTime}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      Popular
                    </div>
                  </div>
                  
                  <button className="inline-flex items-center text-black hover:text-gray-700 font-medium">
                    Read Guide
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* All Guides */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-8">All Implementation Guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <article key={guide.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 hover:shadow-md transition-all duration-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-md">
                    {guide.category}
                  </span>
                  <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-md ${getDifficultyColor(guide.difficulty)}`}>
                    {guide.difficulty}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-black mb-3 leading-tight">
                  {guide.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {guide.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center">
                    <BookOpen className="h-3 w-3 mr-1" />
                    {guide.readTime}
                  </div>
                  
                  <button className="text-black hover:text-gray-700 font-medium">
                    Read Guide
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
        
        {/* Expert Consultation CTA */}
        <section className="mt-24 bg-gray-50 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-black mb-6">Need Custom AI Strategy?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Get personalized recommendations and implementation guidance tailored to your specific business needs and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/bertus37987/ai-tools-directory/issues/new?assignees=&labels=consultation&title=AI+Strategy+Consultation+Request"
              className="btn-primary"
            >
              Request Consultation
            </a>
            <a 
              href="#categories"
              className="btn-secondary"
            >
              Browse Tools First
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}