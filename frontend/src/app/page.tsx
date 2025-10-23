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
        const [toolsRes, categoriesRes, dealsRes] = await Promise.all([
          fetch('https://raw.githubusercontent.com/bertus37987/ai-tools-directory/main/data/tools.json'),
          fetch('https://raw.githubusercontent.com/bertus37987/ai-tools-directory/main/data/categories.json'),
          fetch('https://raw.githubusercontent.com/bertus37987/ai-tools-directory/main/data/featured-deals.json')
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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero deals={deals} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
      </main>
      
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-black mb-2">AI Tools Directory</h3>
            <p className="text-gray-600 mb-4">The complete guide to AI tools and software</p>
            <p className="text-sm text-gray-500">
              © 2025 AI Tools Directory. Open source project on{' '}
              <a href="https://github.com/bertus37987/ai-tools-directory" className="text-black hover:underline">
                GitHub
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}