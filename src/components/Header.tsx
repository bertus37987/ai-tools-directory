'use client'

import { useState } from 'react'
import { Menu, X, Github, Search } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div className="flex items-center">
            <div className="text-xl font-bold text-black tracking-tight">
              AiwithBert
            </div>
            <div className="hidden sm:block ml-3 text-sm text-gray-600">
              Curated AI Tools
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#categories" className="text-gray-700 hover:text-black transition-colors font-medium">
              Tools
            </a>
            <a href="#deals" className="text-gray-700 hover:text-black transition-colors font-medium">
              Deals
            </a>
            <a href="/blog" className="text-gray-700 hover:text-black transition-colors font-medium">
              Blog
            </a>
            <a href="/guides" className="text-gray-700 hover:text-black transition-colors font-medium">
              Guides
            </a>
            <a href="#submit" className="text-gray-700 hover:text-black transition-colors font-medium">
              Submit
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
            <a 
              href="https://github.com/bertus37987/ai-tools-directory/issues/new?assignees=&labels=tool-submission&projects=&template=add-tool.md&title=%5BNew+Tool%5D%3A+Tool+Name"
              className="btn-primary"
            >
              Submit Tool
            </a>
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
            <a href="#categories" className="block text-gray-700 hover:text-black font-medium">
              Tools
            </a>
            <a href="#deals" className="block text-gray-700 hover:text-black font-medium">
              Deals
            </a>
            <a href="/blog" className="block text-gray-700 hover:text-black font-medium">
              Blog
            </a>
            <a href="/guides" className="block text-gray-700 hover:text-black font-medium">
              Guides
            </a>
            <a href="#submit" className="block text-gray-700 hover:text-black font-medium">
              Submit
            </a>
            <div className="pt-4 border-t border-gray-200">
              <a 
                href="https://github.com/bertus37987/ai-tools-directory/issues/new?assignees=&labels=tool-submission&projects=&template=add-tool.md&title=%5BNew+Tool%5D%3A+Tool+Name"
                className="btn-primary w-full text-center block"
              >
                Submit Tool
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}