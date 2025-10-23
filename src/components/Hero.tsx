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
      }, 7000)
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
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 tracking-tight leading-tight">
              Curated AI Tools
              <span className="block text-gray-700 mt-2">
                for Professionals
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Discover, compare, and implement the most effective AI tools for your business.
              Expert curation with transparent pricing and detailed analysis.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#categories" className="btn-primary text-lg px-8 py-4">
              Explore Tools
            </a>
            <a 
              href="https://github.com/bertus37987/ai-tools-directory"
              className="btn-secondary text-lg px-8 py-4 inline-flex items-center"
            >
              <Github className="w-5 h-5 mr-2" />
              Open Source
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">150+</div>
              <div className="text-gray-600 font-medium">AI Tools</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">6</div>
              <div className="text-gray-600 font-medium">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">Daily</div>
              <div className="text-gray-600 font-medium">Updates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">Free</div>
              <div className="text-gray-600 font-medium">Access</div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const deal = featuredDeals[currentDeal]

  return (
    <section id="deals" className="bg-black text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
            Professional AI Tools
            <span className="block text-gray-300 mt-2">
              Expert Curated
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            Access exclusive deals and comprehensive reviews from industry experts.
          </p>
        </div>

        {/* Featured Deal */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white text-black rounded-2xl p-10 md:p-16 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4 flex-wrap">
                  {deal.badge && (
                    <span className="bg-black text-white px-4 py-2 text-sm font-semibold rounded-lg">
                      {deal.badge}
                    </span>
                  )}
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-5 w-5 fill-current" />
                    <span className="ml-2 text-sm font-medium text-gray-600">Featured Deal</span>
                  </div>
                  {deal.expires_at && (
                    <div className="flex items-center text-red-600 text-sm font-medium">
                      <Clock className="h-4 w-4 mr-2" />
                      Limited Time Offer
                    </div>
                  )}
                </div>
                
                <div>
                  <h2 className="text-4xl font-bold mb-6 text-black leading-tight">{deal.title}</h2>
                  <p className="text-gray-600 text-xl leading-relaxed">{deal.description}</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <button className="btn-primary text-lg px-8 py-4 inline-flex items-center">
                    <ExternalLink className="w-5 h-5 mr-3" />
                    Get Deal
                  </button>
                  
                  {deal.discount && (
                    <div className="flex items-center">
                      <span className="text-3xl font-bold text-green-600">{deal.discount}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="lg:w-80">
                <div className="w-60 h-60 lg:w-80 lg:h-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center shadow-lg border border-gray-200">
                  <div className="text-center">
                    <div className="text-6xl mb-4 text-gray-400">AI</div>
                    <div className="text-lg font-semibold text-gray-600">Tool Logo</div>
                  </div>
                </div>
              </div>
            </div>
            
            {featuredDeals.length > 1 && (
              <>
                <button
                  onClick={prevDeal}
                  className="absolute left-8 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black/10 hover:bg-black/20 transition-all duration-200"
                >
                  <ChevronLeft className="h-6 w-6 text-black" />
                </button>
                
                <button
                  onClick={nextDeal}
                  className="absolute right-8 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black/10 hover:bg-black/20 transition-all duration-200"
                >
                  <ChevronRight className="h-6 w-6 text-black" />
                </button>
                
                <div className="flex justify-center space-x-3 mt-10">
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