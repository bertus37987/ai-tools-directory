'use client'

import { useState, useEffect } from 'react'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Header from '@/components/Header'

interface BlogPost {
  id: string
  title: string
  description: string
  slug: string
  date: string
  readTime: string
  category: string
  featured: boolean
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Complete Guide to AI Writing Tools in 2025',
    description: 'Compare the top AI writing assistants including ChatGPT, Claude, and Jasper. Learn which tool best fits your content creation needs.',
    slug: 'ai-writing-tools-guide-2025',
    date: '2025-10-23',
    readTime: '8 min read',
    category: 'Guides',
    featured: true
  },
  {
    id: '2',
    title: 'AI Video Generation: Runway vs Pika vs Stable Video',
    description: 'In-depth comparison of leading text-to-video AI platforms. Features, pricing, quality analysis, and use case recommendations.',
    slug: 'ai-video-generation-comparison',
    date: '2025-10-22',
    readTime: '12 min read',
    category: 'Comparison',
    featured: true
  },
  {
    id: '3',
    title: 'Building Your AI Toolkit: Essential Tools for 2025',
    description: 'Curated selection of must-have AI tools for professionals. From automation to content creation, build your competitive advantage.',
    slug: 'essential-ai-tools-2025',
    date: '2025-10-21',
    readTime: '6 min read',
    category: 'Strategy',
    featured: false
  },
  {
    id: '4',
    title: 'AI Code Assistants: GitHub Copilot vs Alternatives',
    description: 'Comprehensive review of AI coding tools. Compare features, pricing, and performance to choose the best development assistant.',
    slug: 'ai-code-assistants-comparison',
    date: '2025-10-20',
    readTime: '10 min read',
    category: 'Development',
    featured: false
  }
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  
  const categories = ['all', 'Guides', 'Comparison', 'Strategy', 'Development']
  const featuredPosts = blogPosts.filter(post => post.featured)
  
  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            AI Insights & Analysis
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert insights on AI tools, strategies, and industry trends. Stay ahead with professional analysis and detailed comparisons.
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-black mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-white border border-gray-200 rounded-xl p-8 hover:border-gray-300 hover:shadow-lg transition-all duration-200 group">
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-black text-white rounded-lg">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <button className="inline-flex items-center text-black hover:text-gray-700 font-medium">
                      Read Article
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const count = category === 'all' 
                ? blogPosts.length 
                : blogPosts.filter(post => post.category === category).length
              
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'All Articles' : category} ({count})
                </button>
              )
            })}
          </div>
        </div>

        {/* All Posts */}
        <section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 hover:shadow-md transition-all duration-200">
                <div className="mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-md">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-black mb-3 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {post.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        
        {/* Newsletter CTA */}
        <section className="mt-24 bg-black text-white rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-6">Stay Updated</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Get weekly insights on new AI tools, industry trends, and expert analysis delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg text-black flex-1"
            />
            <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}