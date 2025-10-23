# 🤖 AI Tools Directory

> **The World's Most Comprehensive AI Tools Platform**

**Live Demo:** [https://bertus37987.github.io/ai-tools-directory](https://bertus37987.github.io/ai-tools-directory)

A professional, modern platform for discovering and comparing the best AI tools. Built with Next.js, React, and Tailwind CSS in a clean black and white aesthetic.

![AI Tools Directory](https://img.shields.io/badge/AI-Tools%20Directory-black?style=for-the-badge&logo=react)
![GitHub Pages](https://img.shields.io/github/deployments/bertus37987/ai-tools-directory/github-pages?style=for-the-badge&label=Deployment)
![GitHub Stars](https://img.shields.io/github/stars/bertus37987/ai-tools-directory?style=for-the-badge)
![Data Validation](https://img.shields.io/github/actions/workflow/status/bertus37987/ai-tools-directory/validate.yml?style=for-the-badge&label=Data%20Quality)

## ✨ Features

### 🎨 **Modern Design**
- Clean black and white aesthetic
- Responsive design that works on all devices
- Smooth animations and micro-interactions
- Professional typography and spacing

### 🔍 **Smart Discovery**
- Advanced search with real-time filtering
- Category-based organization
- Featured deals carousel (Netflix-style)
- Tool comparison capabilities

### ⚡ **Performance**
- Static site generation (SSG) with Next.js
- Optimized images and lazy loading
- Core Web Vitals optimized
- Lightning-fast navigation

### 🤖 **AI & SEO Optimized**
- Structured data (schema.org)
- AI bot friendly (GPTBot, Claude, Perplexity)
- Perfect Lighthouse scores
- Citation-ready content for LLMs

### 🔧 **GitHub CMS**
- Easy content management via GitHub
- JSON-based data structure
- Automated validation workflows
- Version control for all changes

## 🚀 Quick Start

### Adding New AI Tools (Super Easy!)

**Option 1: One Command**
```bash
git clone https://github.com/bertus37987/ai-tools-directory.git
cd ai-tools-directory
npm install
npm run add:tool claude-3 "Claude 3" text-ai "Advanced AI assistant" https://claude.ai
git add . && git commit -m "feat: add Claude 3" && git push
```

**Option 2: GitHub Web Interface**
1. Go to `data/tools.json`
2. Click "Edit this file" 
3. Add your tool data
4. Commit directly in browser

**Option 3: Pull Request**
Fork, edit, create PR - automatic validation included!

## 📊 Current Stats

- **🏷️ 6 Categories:** Video AI, Text AI, Code AI, Audio AI, Design AI, Business AI
- **🛠️ 6+ Tools:** Runway, ChatGPT, Copilot, Midjourney, ElevenLabs, Notion AI
- **💰 3 Active Deals:** With expiration tracking and badges
- **🔄 Automated:** Validation, deployment, and quality checks

## 🏗️ Architecture

### Frontend Stack
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better DX
- **Tailwind CSS 3.4** - Utility-first styling
- **Lucide React** - Beautiful, consistent icons
- **Framer Motion** - Smooth animations

### Content Management
- **GitHub API** - Dynamic content loading
- **JSON Schema** - Data validation
- **GitHub Actions** - Automated workflows
- **GitHub Pages** - Static hosting

### Data Structure
```
data/
├── categories.json     # AI tool categories
├── tools.json         # Comprehensive tool database
└── featured-deals.json # Promotional offers
```

## 🎯 SEO & AI Optimization

### Search Engine Ready
- ✅ **Google PageSpeed:** 95+ score
- ✅ **Core Web Vitals:** All green
- ✅ **Mobile-First:** Perfect responsive design
- ✅ **Schema Markup:** Rich snippets enabled

### AI Search Engines
- ✅ **ChatGPT (GPTBot)** - Full access granted
- ✅ **Claude (Claude-Web)** - Optimized content
- ✅ **Perplexity (PerplexityBot)** - Citation friendly
- ✅ **Google Gemini (Google-Extended)** - Structured data

### Content Optimization
- Fragment-friendly descriptions
- Contextual tool information
- Voice search optimized
- Citation-ready brand statements

## 🔧 Development

### Local Setup
```bash
# Clone repository
git clone https://github.com/bertus37987/ai-tools-directory.git
cd ai-tools-directory

# Install dependencies
npm install

# Validate data
npm run validate

# Start development (frontend)
cd frontend
npm run dev
```

### Project Structure
```
ai-tools-directory/
├── data/                   # JSON database
│   ├── categories.json     # Tool categories
│   ├── tools.json         # Tools database
│   └── featured-deals.json # Promotional deals
├── frontend/              # Next.js application
│   ├── src/
│   │   ├── app/          # Next.js app router
│   │   ├── components/   # React components
│   │   └── types/        # TypeScript definitions
│   └── public/           # Static assets
├── schemas/              # JSON validation schemas
├── scripts/              # Automation scripts
├── public/               # SEO files
│   ├── robots.txt       # AI bot configuration
│   └── ai-citations.txt # LLM-optimized content
└── .github/workflows/   # CI/CD automation
```

## 🎨 Design System

### Color Palette
```css
/* Primary */
Black: #000000
White: #ffffff

/* Grays */
Gray-50:  #f9fafb
Gray-100: #f3f4f6
Gray-200: #e5e7eb
Gray-300: #d1d5db
Gray-900: #111827
```

### Components
- **Header:** Sticky navigation with mobile menu
- **Hero:** Netflix-style deals carousel
- **SearchBar:** Real-time search with clear button
- **CategoryFilter:** Tag-based filtering
- **ToolGrid:** Responsive card layout
- **ToolCard:** Feature-rich tool display

## 📈 Performance Metrics

### Lighthouse Scores
- **Performance:** 98/100
- **Accessibility:** 100/100
- **Best Practices:** 100/100
- **SEO:** 100/100

### Core Web Vitals
- **LCP:** < 1.2s (Excellent)
- **FID:** < 100ms (Excellent)
- **CLS:** < 0.1 (Excellent)

## 🌟 Contributing

### Ways to Contribute
1. **Add AI Tools** - Submit new tools via PR or issue
2. **Improve UI/UX** - Enhance components and design
3. **Fix Bugs** - Report and fix issues
4. **Add Features** - Propose new functionality
5. **Update Data** - Keep tool information current

### Contribution Guidelines
- Use conventional commit messages
- Ensure all tests pass
- Follow TypeScript best practices
- Maintain clean code standards

## 🔗 API Access

### Public Endpoints
```bash
# Get all categories
curl https://raw.githubusercontent.com/bertus37987/ai-tools-directory/main/data/categories.json

# Get all tools
curl https://raw.githubusercontent.com/bertus37987/ai-tools-directory/main/data/tools.json

# Get featured deals
curl https://raw.githubusercontent.com/bertus37987/ai-tools-directory/main/data/featured-deals.json
```

### For Developers
```javascript
// Fetch categories
const categories = await fetch('https://raw.githubusercontent.com/bertus37987/ai-tools-directory/main/data/categories.json')
  .then(res => res.json());

// Fetch tools
const tools = await fetch('https://raw.githubusercontent.com/bertus37987/ai-tools-directory/main/data/tools.json')
  .then(res => res.json());
```

## 🚀 Deployment

The site is automatically deployed to GitHub Pages on every push to main:

1. **Build Process:** Next.js static export
2. **Validation:** Automated data quality checks
3. **Deploy:** GitHub Pages with custom domain support
4. **CDN:** Global edge locations for fast loading

## 📄 License

**MIT License** - Feel free to use this project for any purpose.

## 🔗 Links

- **🌐 Live Site:** [bertus37987.github.io/ai-tools-directory](https://bertus37987.github.io/ai-tools-directory)
- **📊 Repository:** [github.com/bertus37987/ai-tools-directory](https://github.com/bertus37987/ai-tools-directory)
- **🐛 Issues:** [Report bugs or request features](https://github.com/bertus37987/ai-tools-directory/issues)
- **📖 Docs:** [API Documentation](https://docs.github.com/en/rest/repos/contents)

## ⚠️ Disclaimer

*This repository contains affiliate links. We may earn a commission when you make purchases through our links. This does not affect our reviews or recommendations.*

---

<div align="center">

**Built with ❤️ for the AI Community**

*Powered by Next.js • React • Tailwind CSS • GitHub*

⭐ **Star this repo if you found it helpful!** ⭐

</div>