'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Clock, Github, ExternalLink } from 'lucide-react'
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
      }, 6000)
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
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight">
              Discover the Best
              <span className="block bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                AI Tools
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              The world's most comprehensive directory of AI tools. 
              Find, compare, and discover the perfect tools for your projects.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#categories" className="btn-primary text-lg px-8 py-4">
              🚀 Explore Tools
            </a>
            <a 
              href="https://github.com/bertus37987/ai-tools-directory"
              className="btn-secondary text-lg px-8 py-4 inline-flex items-center"
            >
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-black">6+</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black">50+</div>
              <div className="text-gray-600">AI Tools</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black">100%</div>
              <div className="text-gray-600">Free & Open</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black">24/7</div>
              <div className="text-gray-600">Updated</div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const deal = featuredDeals[currentDeal]

  return (
    <section id="deals" className="bg-black text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Discover the Best
            <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              AI Tools
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The world's most comprehensive directory with exclusive deals and expert reviews.
          </p>
        </div>

        {/* Featured Deal Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white text-black rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3 flex-wrap">
                  {deal.badge && (
                    <span className="bg-black text-white px-4 py-2 text-sm font-semibold rounded-full">
                      🎆 {deal.badge}
                    </span>
                  )}
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-5 w-5 fill-current" />
                    <span className="ml-2 text-sm font-medium text-gray-600">Featured Deal</span>
                  </div>
                  {deal.expires_at && (
                    <div className="flex items-center text-red-500 text-sm font-medium">
                      <Clock className="h-4 w-4 mr-1" />
                      Limited Time
                    </div>
                  )}
                </div>
                
                <div>
                  <h2 className="text-4xl font-bold mb-4 text-black">{deal.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">{deal.description}</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <button className="btn-primary text-lg px-8 py-4 inline-flex items-center">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Get Deal Now
                  </button>
                  
                  {deal.discount && (
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-green-600">{deal.discount}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="lg:w-64">
                <div className="w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🤖</div>
                    <div className="text-lg font-bold text-gray-600">AI TOOL</div>
                    <div className="text-sm text-gray-500">LOGO</div>
                  </div>
                </div>
              </div>
            </div>
            
            {featuredDeals.length > 1 && (
              <>
                <button
                  onClick={prevDeal}
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black/10 hover:bg-black/20 transition-all duration-200"
                >
                  <ChevronLeft className="h-6 w-6 text-black" />
                </button>
                
                <button
                  onClick={nextDeal}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black/10 hover:bg-black/20 transition-all duration-200"
                >
                  <ChevronRight className="h-6 w-6 text-black" />
                </button>
                
                <div className="flex justify-center space-x-3 mt-8">
                  {featuredDeals.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentDeal(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentDeal 
                          ? 'bg-black scale-125' 
                          : 'bg-gray-300 hover:bg-gray-400'
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