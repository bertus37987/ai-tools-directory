'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CategoryFilter from '@/components/CategoryFilter'
import ToolGrid from '@/components/ToolGrid'
import SearchBar from '@/components/SearchBar'
import { Tool, Category, Deal } from '@/types'

export default function Home() {
  const [tools, setTools] = useState<Tool[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [deals, setDeals] = useState<Deal[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        const baseUrl = process.env.NODE_ENV === 'production' 
          ? 'https://raw.githubusercontent.com/bertus37987/ai-tools-directory/main'
          : ''
        
        const [toolsRes, categoriesRes, dealsRes] = await Promise.all([
          fetch(`${baseUrl}/data/tools.json`),
          fetch(`${baseUrl}/data/categories.json`),
          fetch(`${baseUrl}/data/featured-deals.json`)
        ])
        
        const [toolsData, categoriesData, dealsData] = await Promise.all([
          toolsRes.json(),
          categoriesRes.json(),
          dealsRes.json()
        ])
        
        setTools(toolsData.filter((tool: Tool) => tool.meta.status === 'published'))
        setCategories(categoriesData)
        setDeals(dealsData)
      } catch (error) {
        console.error('Failed to load data:', error)
      } finally {
        setLoading(false)
      }
    }
    
    loadData()
  }, [])

  const filteredTools = tools.filter(tool => {
    const matchesCategory = selectedCategory === 'all' || tool.category_id === selectedCategory
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.short_description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
            <p className="text-gray-600 font-medium">Loading AI tools database...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero deals={deals} />
      
      <main id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-black mb-6 tracking-tight">AI Tools Directory</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl leading-relaxed">
            Discover and compare the most effective AI tools for your business. Each tool is carefully evaluated for quality, features, and value.
          </p>
          
          <SearchBar 
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search by tool name or description..."
          />
        </div>
        
        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          toolCounts={tools.reduce((acc, tool) => {
            acc[tool.category_id] = (acc[tool.category_id] || 0) + 1
            return acc
          }, {} as Record<string, number>)}
        />
        
        <ToolGrid tools={filteredTools} />
        
        {/* Submit Section */}
        <section id="submit" className="mt-24 bg-gray-50 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-black mb-6">Submit Your AI Tool</h3>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Have an AI tool that deserves recognition? Submit it for professional review and help the community discover quality solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/bertus37987/ai-tools-directory/issues/new?assignees=&labels=tool-submission&projects=&template=add-tool.md&title=%5BNew+Tool%5D%3A+Tool+Name"
              className="btn-primary"
            >
              Submit Tool for Review
            </a>
            <a 
              href="https://github.com/bertus37987/ai-tools-directory/blob/main/README.md#adding-new-ai-tools-super-easy"
              className="btn-secondary"
            >
              View Submission Guidelines
            </a>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-50 border-t border-gray-200 py-16 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-black mb-4">AiwithBert</h3>
              <p className="text-gray-600 mb-6 text-base leading-relaxed max-w-md">
                Professional curation of AI tools and products. Transparent reviews, detailed analysis, and expert insights for businesses and developers.
              </p>
              <div className="flex space-x-6">
                <a 
                  href="https://github.com/bertus37987/ai-tools-directory" 
                  className="text-gray-600 hover:text-black transition-colors font-medium"
                >
                  GitHub
                </a>
                <a 
                  href="https://github.com/bertus37987/ai-tools-directory/issues" 
                  className="text-gray-600 hover:text-black transition-colors font-medium"
                >
                  Issues
                </a>
                <a 
                  href="/blog" 
                  className="text-gray-600 hover:text-black transition-colors font-medium"
                >
                  Blog
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-black mb-6">Categories</h4>
              <div className="space-y-3">
                {categories.slice(0, 6).map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className="block text-gray-600 hover:text-black transition-colors text-left font-medium"
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-black mb-6">Platform</h4>
              <div className="space-y-3 text-gray-600">
                <p className="font-medium">Tools: {tools.length}</p>
                <p className="font-medium">Categories: {categories.length}</p>
                <p className="font-medium">Featured Deals: {deals.filter(d => d.featured).length}</p>
                <p className="font-medium">Updated: Daily</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <p className="text-sm text-gray-600 font-medium">
                  © 2025 AiwithBert. Open source project on{' '}
                  <a href="https://github.com/bertus37987/ai-tools-directory" className="text-black hover:underline font-semibold">
                    GitHub
                  </a>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Built with Next.js, React & Tailwind CSS
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <p className="text-xs text-gray-500">
                  Affiliate Disclosure: This site contains affiliate links. We may earn a commission from purchases made through our links.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}