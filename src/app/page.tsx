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
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
            <p className="text-gray-600">Loading AI tools...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero deals={deals} />
      
      <main id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-black mb-4">Discover AI Tools</h2>
          <p className="text-gray-600 text-lg mb-6">
            Find the perfect AI tools for your projects. Compare features, pricing, and user reviews.
          </p>
          
          <SearchBar 
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search AI tools..."
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
        <section id="submit" className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-black mb-4">Submit Your AI Tool</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Have an AI tool you'd like to add to our directory? Submit it for review and help the community discover amazing new tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/bertus37987/ai-tools-directory/issues/new?assignees=&labels=tool-submission&projects=&template=add-tool.md&title=%5BNew+Tool%5D%3A+Tool+Name"
              className="btn-primary"
            >
              Submit Tool via GitHub
            </a>
            <a 
              href="https://github.com/bertus37987/ai-tools-directory/blob/main/README.md#-adding-new-ai-tools-super-easy"
              className="btn-secondary"
            >
              View Instructions
            </a>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-black mb-4">🤖 AI Tools Directory</h3>
              <p className="text-gray-600 mb-4">
                The world's most comprehensive platform for discovering and comparing AI tools.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/bertus37987/ai-tools-directory" 
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  GitHub
                </a>
                <a 
                  href="https://github.com/bertus37987/ai-tools-directory/issues" 
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Issues
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-black mb-4">Categories</h4>
              <div className="space-y-2">
                {categories.slice(0, 4).map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className="block text-gray-600 hover:text-black transition-colors text-left"
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-black mb-4">Quick Stats</h4>
              <div className="space-y-2 text-gray-600">
                <p>🛠️ {tools.length} AI Tools</p>
                <p>🏷️ {categories.length} Categories</p>
                <p>💰 {deals.filter(d => d.featured).length} Featured Deals</p>
                <p>⭐ Updated Daily</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-500">
              © 2025 AI Tools Directory. Open source project on{' '}
              <a href="https://github.com/bertus37987/ai-tools-directory" className="text-black hover:underline">
                GitHub
              </a>
              {' '}| Built with Next.js, React & Tailwind CSS
            </p>
            <p className="text-xs text-gray-400 mt-2">
              ⚠️ This site contains affiliate links. We may earn a commission from purchases made through our links.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}