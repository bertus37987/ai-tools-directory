'use client'

import { ExternalLink, Star, DollarSign, Tag } from 'lucide-react'
import { Tool } from '@/types'

interface ToolGridProps {
  tools: Tool[]
}

export default function ToolGrid({ tools }: ToolGridProps) {
  if (tools.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
          <Tag className="h-8 w-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No tools found</h3>
        <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

  return (
    <div className="tool-card">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
            <span className="text-sm font-bold text-gray-600">
              {tool.name.substring(0, 2).toUpperCase()}
            </span>
          </div>
          <div>
            <h3 className="font-semibold text-black group-hover:text-gray-700 transition-colors">
              {tool.name}
            </h3>
            {tool.rating && (
              <div className="flex items-center space-x-1">
                <Star className="h-3 w-3 text-yellow-400 fill-current" />
                <span className="text-xs text-gray-600">{tool.rating}</span>
                {tool.reviews_count && (
                  <span className="text-xs text-gray-500">({tool.reviews_count})</span>
                )}
              </div>
            )}
          </div>
        </div>
        
        {tool.deal?.active && tool.deal.badge && (
          <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
            {tool.deal.badge}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {tool.short_description}
      </p>

      {/* Features */}
      {tool.features && tool.features.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {tool.features.slice(0, 3).map((feature, index) => (
              <span key={index} className="category-badge text-xs">
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

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-2">
          <DollarSign className="h-4 w-4 text-gray-400" />
          <span className="text-sm font-medium text-gray-900">
            {getPriceDisplay()}
          </span>
        </div>
        
        <div className="flex space-x-2">
          <a
            href={tool.website_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
          >
            <ExternalLink className="h-3 w-3 mr-1" />
            Visit
          </a>
          
          {tool.affiliate_link && (
            <a
              href={tool.affiliate_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-white bg-black rounded-md hover:bg-gray-800 transition-colors"
            >
              Get Deal
            </a>
          )}
        </div>
      </div>
    </div>
  )
}