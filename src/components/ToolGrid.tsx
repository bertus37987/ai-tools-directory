'use client'

import { ExternalLink, Star, DollarSign, Tag } from 'lucide-react'
import { Tool } from '@/types'

interface ToolGridProps {
  tools: Tool[]
}

export default function ToolGrid({ tools }: ToolGridProps) {
  if (tools.length === 0) {
    return (
      <div className="text-center py-24">
        <div className="w-24 h-24 mx-auto mb-8 bg-gray-100 rounded-xl flex items-center justify-center">
          <Tag className="h-12 w-12 text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">No tools found</h3>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">Try adjusting your search criteria or browse all categories to discover new tools.</p>
        <button 
          onClick={() => window.location.reload()}
          className="btn-secondary"
        >
          Reset Filters
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
    if (tool.pricing.type === 'free') return 'text-green-600 font-semibold'
    if (tool.pricing.type === 'freemium') return 'text-blue-600 font-semibold'
    return 'text-gray-900 font-semibold'
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-gray-300 hover:shadow-lg transition-all duration-200 group relative">
      {/* Deal Badge */}
      {tool.deal?.active && tool.deal.badge && (
        <div className="absolute top-6 right-6 z-10">
          <span className="bg-red-600 text-white text-xs px-3 py-1.5 rounded-lg font-semibold shadow-sm">
            {tool.deal.badge}
          </span>
        </div>
      )}
      
      {/* Header */}
      <div className="flex items-start space-x-4 mb-6">
        <div className="w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden border border-gray-200 flex-shrink-0">
          {tool.logo_url ? (
            <img
              src={tool.logo_url}
              alt={`${tool.name} logo`}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
                const parent = target.parentElement
                if (parent) {
                  parent.innerHTML = `<span class="text-sm font-bold text-gray-600">${tool.name.substring(0, 2).toUpperCase()}</span>`
                }
              }}
            />
          ) : (
            <span className="text-sm font-bold text-gray-600">
              {tool.name.substring(0, 2).toUpperCase()}
            </span>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-black text-lg group-hover:text-gray-700 transition-colors leading-tight mb-2">
            {tool.name}
          </h3>
          {tool.rating && (
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium text-gray-700 ml-1">{tool.rating}</span>
              </div>
              {tool.reviews_count && (
                <span className="text-xs text-gray-500 font-medium">({tool.reviews_count} reviews)</span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-8 leading-relaxed line-clamp-3">
        {tool.short_description}
      </p>

      {/* Features */}
      {tool.features && tool.features.length > 0 && (
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {tool.features.slice(0, 3).map((feature, index) => (
              <span key={index} className="inline-flex items-center px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-lg">
                {feature}
              </span>
            ))}
            {tool.features.length > 3 && (
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-lg">
                +{tool.features.length - 3} more
              </span>
            )}
          </div>
        </div>
      )}

      {/* Deal Highlight */}
      {tool.deal?.active && tool.deal.discount && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-red-700 font-semibold text-sm">{tool.deal.discount}</span>
            <span className="text-red-600 text-xs font-medium">Special Offer</span>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-6 border-t border-gray-100">
        <div className="flex items-center space-x-2">
          <DollarSign className="h-5 w-5 text-gray-400" />
          <span className={`text-sm ${getPriceColor()}`}>
            {getPriceDisplay()}
          </span>
        </div>
        
        <div className="flex space-x-3">
          <a
            href={tool.website_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
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