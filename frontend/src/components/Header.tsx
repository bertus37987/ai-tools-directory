'use client'

import { useState } from 'react'
import { Menu, X, Github, Search } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-xl font-bold text-black">
              AI Tools Directory
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-black transition-colors">
              Categories
            </a>
            <a href="#" className="text-gray-700 hover:text-black transition-colors">
              Deals
            </a>
            <a href="#" className="text-gray-700 hover:text-black transition-colors">
              Submit Tool
            </a>
            <a href="#" className="text-gray-700 hover:text-black transition-colors">
              Blog
            </a>
          </nav>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-black transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <a 
              href="https://github.com/bertus37987/ai-tools-directory"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-black transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <button className="btn-primary">
              Submit Tool
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-600 hover:text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            <a href="#" className="block text-gray-700 hover:text-black">
              Categories
            </a>
            <a href="#" className="block text-gray-700 hover:text-black">
              Deals
            </a>
            <a href="#" className="block text-gray-700 hover:text-black">
              Submit Tool
            </a>
            <a href="#" className="block text-gray-700 hover:text-black">
              Blog
            </a>
            <div className="pt-4 border-t border-gray-200">
              <button className="btn-primary w-full">
                Submit Tool
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}