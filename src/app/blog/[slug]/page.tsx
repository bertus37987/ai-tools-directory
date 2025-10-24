import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import { Calendar, Clock, ExternalLink } from 'lucide-react'
import type { Metadata } from 'next'

interface BlogPost {
  title: string
  description: string
  date: string
  category: string
  tags: string[]
  lead_image: string
  read_time: string
  featured?: boolean
  content: string
}

const blogPosts: { [key: string]: BlogPost } = {
  'ai-news-2025-10-24': {
    title: 'AI News Daily - 24. Oktober 2025',
    description: 'Sora 2.0 revolutioniert Video-KI, Gemini erweitert Workspace-Integration und Claude 3.5 erhält Computer Vision',
    date: '2025-10-24T22:00:00Z',
    category: 'Daily News',
    tags: ['news', 'sora', 'gemini', 'claude', 'video-ai'],
    lead_image: '/ai-tools-directory/blog/sora-2-announcement.jpg',
    read_time: '5 min',
    featured: true,
    content: `
# AI News Daily - 24. Oktober 2025

*Die wichtigsten KI-Entwicklungen des Tages im Überblick*

## Sora 2.0: OpenAI setzt neue Video-KI Standards

OpenAI hat heute Sora 2.0 mit bedeutenden Verbesserungen veröffentlicht, die professionelle Video-Produktion revolutionieren könnten.

### Wichtigste Neuerungen:
- **Verbesserte Physik-Engine**: Realistische Objektinteraktionen und Schwerkraft-Effekte
- **Audio-Synchronisation**: Automatische Ton-Generierung passend zu visuellen Inhalten
- **Cineastische Kontrollen**: Präzise Kamera-Bewegungen und Bildkomposition
- **4K-Export**: Professionelle Auflösung für kommerzielle Nutzung

### Warum es wichtig ist
Sora 2.0 schließt die Lücke zwischen KI-generierten und professionell produzierten Videos. Content-Creator erhalten damit Hollywood-Qualität zu einem Bruchteil der bisherigen Kosten.

**Quelle:** [OpenAI Sora 2.0 Release](https://openai.com/sora-2)

---

## Gemini AI revolutioniert Google Workspace

Google hat die Integration von Gemini AI in alle Workspace-Anwendungen angekündigt.

### Neue Features:
- **Smart Compose**: Kontextbewusste Texterstellung in Gmail und Docs
- **Meeting Intelligence**: Automatische Zusammenfassungen und Action Items
- **Datenanalyse**: KI-gestützte Insights in Google Sheets

**Quelle:** [Google Workspace Blog](https://workspace.google.com/blog)

---

*Täglich neue KI-Updates: Folgen Sie [AiwithBert](https://github.com/bertus37987/ai-tools-directory) für professionelle KI-Insights.*
    `
  },
  'sora-2-complete-guide': {
    title: 'Sora 2.0 Complete Guide: Alles was Sie wissen müssen',
    description: 'Umfassender Guide zu OpenAI\'s Sora 2.0 - Features, Preise, Anwendungsfälle und Vergleich mit Konkurrenz-Tools',
    date: '2025-10-24T20:00:00Z',
    category: 'Guides',
    tags: ['sora', 'video-ai', 'openai', 'guide', 'comparison'],
    lead_image: '/ai-tools-directory/blog/sora-2-guide-header.jpg',
    read_time: '12 min',
    featured: true,
    content: `
# Sora 2.0 Complete Guide

*OpenAI's revolutionäres Text-to-Video Tool im Detail*

OpenAI's Sora 2.0 hat die KI-Video-Landschaft grundlegend verändert. Erfahren Sie alles über Features, Preise und praktische Anwendung.

## Was ist Sora 2.0?

Sora 2.0 ist OpenAI's fortschrittlichstes Text-to-Video-Modell mit bis zu 60 Sekunden Videolänge und 4K-Auflösung.

### Kernfeatures:
- **4K-Auflösung** bei 30fps
- **Physik-Engine**: Realistische Objektinteraktionen  
- **Audio-Sync**: Automatische Ton-Generierung
- **Multi-Shot**: Verschiedene Kamerawinkel

## Preismodell

- **Starter**: $20/Monat (50 Videos)
- **Professional**: $100/Monat (200 Videos + API)
- **Enterprise**: Custom Pricing

**Quellen:**
- [OpenAI Sora 2.0](https://openai.com/sora-2)
- [TechCrunch Analysis](https://techcrunch.com/2025/10/23/sora-update)
    `
  }
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug]
  
  if (!post) {
    return {
      title: 'Post Not Found | AiwithBert',
    }
  }

  return {
    title: `${post.title} | AiwithBert`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.lead_image],
      type: 'article',
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.lead_image],
    },
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]
  
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Image */}
        <div className="mb-12">
          <img
            src={post.lead_image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-2xl"
          />
        </div>
        
        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-black text-white rounded-lg">
              {post.category}
            </span>
            {post.featured && (
              <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-yellow-100 text-yellow-800 rounded-lg">
                Featured
              </span>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {post.description}
          </p>
          
          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(post.date).toLocaleDateString('de-DE', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {post.read_time}
            </div>
          </div>
        </header>
        
        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }} />
        </div>
        
        {/* Tags */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-black mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="inline-flex items-center px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800 rounded-lg">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <a 
            href="/ai-tools-directory/blog"
            className="inline-flex items-center text-black hover:text-gray-700 font-medium"
          >
            ← Zurück zum Blog
          </a>
        </div>
      </article>
    </div>
  )
}