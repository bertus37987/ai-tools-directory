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
    <div className="mb-8">
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => onCategoryChange('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === 'all'
              ? 'bg-black text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All Tools ({totalTools})
        </button>
        
        {sortedCategories.map((category) => {
          const count = toolCounts[category.id] || 0
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name} ({count})
            </button>
          )
        })}
      </div>
    </div>
  )
}