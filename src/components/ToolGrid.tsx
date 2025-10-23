'use client'

import { ExternalLink, Star, DollarSign, Tag, Zap } from 'lucide-react'
import { Tool } from '@/types'

interface ToolGridProps {
  tools: Tool[]
}

export default function ToolGrid({ tools }: ToolGridProps) {
  if (tools.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
          <Tag className="h-10 w-10 text-gray-400" />
        </div>
        <h3 className="text-xl font-medium text-gray-900 mb-3">No tools found</h3>
        <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria.</p>
        <button 
          onClick={() => window.location.reload()}
          className="btn-secondary"
        >
          🔄 Reset Filters
        </button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  )
}

function ToolCard({ tool }: { tool: Tool }) {
  const getPriceDisplay = () => {
    if (tool.pricing.type === 'free') return 'Free'
    if (tool.pricing.type === 'freemium') return 'Freemium'
    if (tool.pricing.starting_price) {
      const cycle = tool.pricing.billing_cycle === 'monthly' ? '/mo' : 
                   tool.pricing.billing_cycle === 'yearly' ? '/yr' : ''
      return `$${tool.pricing.starting_price}${cycle}`
    }
    return 'Paid'
  }

  const getPriceColor = () => {
    if (tool.pricing.type === 'free') return 'text-green-600'
    if (tool.pricing.type === 'freemium') return 'text-blue-600'
    return 'text-gray-900'
  }

  return (
    <div className="tool-card relative overflow-hidden">
      {/* Deal Badge */}
      {tool.deal?.active && tool.deal.badge && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
            🔥 {tool.deal.badge}
          </span>
        </div>
      )}
      
      {/* Header */}
      <div className="flex items-start space-x-4 mb-6">
        <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center shadow-sm">
          <span className="text-lg font-bold text-gray-600">
            {tool.name.substring(0, 2).toUpperCase()}
          </span>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-black text-lg group-hover:text-gray-700 transition-colors leading-tight">
            {tool.name}
          </h3>
          {tool.rating && (
            <div className="flex items-center space-x-2 mt-1">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium text-gray-700 ml-1">{tool.rating}</span>
              </div>
              {tool.reviews_count && (
                <span className="text-xs text-gray-500">({tool.reviews_count} reviews)</span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">
        {tool.short_description}
      </p>

      {/* Features */}
      {tool.features && tool.features.length > 0 && (
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {tool.features.slice(0, 3).map((feature, index) => (
              <span key={index} className="category-badge text-xs">
                <Zap className="w-3 h-3 mr-1" />
                {feature}
              </span>
            ))}
            {tool.features.length > 3 && (
              <span className="category-badge text-xs">
                +{tool.features.length - 3} more
              </span>
            )}
          </div>
        </div>
      )}

      {/* Deal Info */}
      {tool.deal?.active && tool.deal.discount && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center text-red-600">
            <Tag className="w-4 h-4 mr-2" />
            <span className="font-semibold text-sm">{tool.deal.discount}</span>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-6 border-t border-gray-100">
        <div className="flex items-center space-x-2">
          <DollarSign className="h-5 w-5 text-gray-400" />
          <span className={`text-sm font-bold ${getPriceColor()}`}>
            {getPriceDisplay()}
          </span>
        </div>
        
        <div className="flex space-x-2">
          <a
            href={tool.website_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <ExternalLink className="h-4 w-4 mr-1" />
            Visit
          </a>
          
          {tool.affiliate_link && (
            <a
              href={tool.affiliate_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors"
            >
              Get Deal
            </a>
          )}
        </div>
      </div>
    </div>
  )
}