'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Clock } from 'lucide-react'
import { Deal } from '@/types'

interface HeroProps {
  deals: Deal[]
}

export default function Hero({ deals }: HeroProps) {
  const [currentDeal, setCurrentDeal] = useState(0)
  const featuredDeals = deals.filter(deal => deal.featured).slice(0, 3)

  useEffect(() => {
    if (featuredDeals.length > 1) {
      const interval = setInterval(() => {
        setCurrentDeal((prev) => (prev + 1) % featuredDeals.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [featuredDeals.length])

  const nextDeal = () => {
    setCurrentDeal((prev) => (prev + 1) % featuredDeals.length)
  }

  const prevDeal = () => {
    setCurrentDeal((prev) => (prev - 1 + featuredDeals.length) % featuredDeals.length)
  }

  if (featuredDeals.length === 0) {
    return (
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Discover the Best
            <span className="block">AI Tools</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Find, compare, and choose from hundreds of AI tools to supercharge your workflow.
            From text generation to image creation, we have it all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Explore Tools
            </button>
            <button className="btn-secondary">
              Submit a Tool
            </button>
          </div>
        </div>
      </section>
    )
  }

  const deal = featuredDeals[currentDeal]

  return (
    <section className="bg-black text-white py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover the Best
            <span className="block">AI Tools</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Find, compare, and choose from hundreds of AI tools to supercharge your workflow.
          </p>
        </div>

        {/* Featured Deal Carousel */}
        <div className="relative">
          <div className="bg-white text-black rounded-2xl p-8 md:p-12 max-w-4xl mx-auto relative">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  {deal.badge && (
                    <span className="bg-black text-white px-3 py-1 text-sm font-medium rounded-full">
                      {deal.badge}
                    </span>
                  )}
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">Featured Deal</span>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold mb-4">{deal.title}</h2>
                <p className="text-gray-600 text-lg mb-6">{deal.description}</p>
                
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <button className="btn-primary">
                    Get Deal
                  </button>
                  
                  {deal.discount && (
                    <div className="flex items-center text-green-600">
                      <span className="font-semibold">{deal.discount}</span>
                    </div>
                  )}
                  
                  {deal.expires_at && (
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      Limited time
                    </div>
                  )}
                </div>
              </div>
              
              <div className="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-400">LOGO</span>
              </div>
            </div>
            
            {featuredDeals.length > 1 && (
              <>
                <button
                  onClick={prevDeal}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                
                <button
                  onClick={nextDeal}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                
                <div className="flex justify-center space-x-2 mt-6">
                  {featuredDeals.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentDeal(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentDeal ? 'bg-black' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}