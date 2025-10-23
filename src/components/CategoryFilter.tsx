'use client'

import { Category } from '@/types'

interface CategoryFilterProps {
  categories: Category[]
  selectedCategory: string
  onCategoryChange: (categoryId: string) => void
  toolCounts: Record<string, number>
}

export default function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  toolCounts 
}: CategoryFilterProps) {
  const sortedCategories = [...categories].sort((a, b) => a.sort_order - b.sort_order)
  const totalTools = Object.values(toolCounts).reduce((sum, count) => sum + count, 0)

  return (
    <div className="mb-10">
      <h3 className="text-lg font-semibold text-black mb-4">Filter by Category</h3>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => onCategoryChange('all')}
          className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
            selectedCategory === 'all'
              ? 'bg-black text-white shadow-lg scale-105'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
          }`}
        >
          🎆 All Tools ({totalTools})
        </button>
        
        {sortedCategories.map((category) => {
          const count = toolCounts[category.id] || 0
          const emoji = {
            'video-ai': '🎥',
            'text-ai': '✍️',
            'code-ai': '💻',
            'audio-ai': '🎵',
            'design-ai': '🎨',
            'business-ai': '💼'
          }[category.id] || '🤖'
          
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-black text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              {emoji} {category.name} ({count})
            </button>
          )
        })}
      </div>
    </div>
  )
}