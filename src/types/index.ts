export interface Tool {
  id: string
  name: string
  slug: string
  category_id: string
  short_description: string
  long_description?: string
  logo_url?: string
  website_url: string
  affiliate_link?: string
  pricing: {
    type: 'free' | 'freemium' | 'paid' | 'lifetime'
    starting_price?: number
    currency?: string
    billing_cycle?: 'monthly' | 'yearly' | 'one-time'
  }
  features?: string[]
  tags?: string[]
  rating?: number
  reviews_count?: number
  deal?: {
    active: boolean
    discount?: string
    badge?: string
    expires_at?: string
  }
  meta: {
    created_at: string
    updated_at: string
    status: 'draft' | 'published' | 'archived'
  }
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  icon?: string
  color?: string
  sort_order: number
  created_at: string
  updated_at: string
}

export interface Deal {
  id: string
  tool_id: string
  title: string
  description: string
  discount?: string
  original_price?: number
  deal_price?: number
  currency?: string
  badge?: string
  expires_at?: string
  featured: boolean
  sort_order: number
}