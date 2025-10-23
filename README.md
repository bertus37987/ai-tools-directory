# AiwithBert

> **Curated AI Products, Tools & Strategy**

**Live Platform:** [https://bertus37987.github.io/ai-tools-directory](https://bertus37987.github.io/ai-tools-directory)

Professional curation of AI tools and products with transparent reviews, detailed analysis, and expert insights for businesses and developers.

![AiwithBert](https://img.shields.io/badge/AiwithBert-Curated%20AI%20Tools-black?style=for-the-badge&logo=react)
![GitHub Pages](https://img.shields.io/github/deployments/bertus37987/ai-tools-directory/github-pages?style=for-the-badge&label=Live)
![Stars](https://img.shields.io/github/stars/bertus37987/ai-tools-directory?style=for-the-badge)
![Quality](https://img.shields.io/github/actions/workflow/status/bertus37987/ai-tools-directory/validate.yml?style=for-the-badge&label=Quality)

## Platform Features

### Professional Curation
- Expert evaluation of AI tools across 6 major categories
- Transparent pricing analysis and ROI assessment
- Real user reviews and professional ratings
- Regular updates with new tools and market changes

### Modern Technology
- **Next.js 15** with React 18 and TypeScript
- **Tailwind CSS** for clean, responsive design
- **GitHub CMS** for version-controlled content management
- **Automated deployment** with quality validation

### Business Ready
- SEO optimized for search engines and AI bots
- Structured data markup for rich snippets
- Affiliate program integration with transparent disclosure
- Professional API access for developers

## Quick Start

### Adding New AI Tools

**Method 1: Command Line**
```bash
git clone https://github.com/bertus37987/ai-tools-directory.git
cd ai-tools-directory
npm install
npm run add:tool perplexity "Perplexity AI" text-ai "AI-powered search engine" https://perplexity.ai
git add . && git commit -m "feat: add Perplexity AI" && git push
```

**Method 2: GitHub Interface**
1. Edit `data/tools.json` directly on GitHub
2. Add tool data following the schema
3. Commit changes - automatic deployment

**Method 3: Issue Submission**
[Submit Tool via GitHub Issue](https://github.com/bertus37987/ai-tools-directory/issues/new?assignees=&labels=tool-submission&projects=&template=add-tool.md&title=%5BNew+Tool%5D%3A+Tool+Name)

## Platform Statistics

- **150+ AI Tools** across 6 categories
- **Daily Updates** with new tools and reviews
- **Professional Reviews** with detailed analysis
- **Open Source** MIT licensed platform

## Technical Architecture

### Frontend Stack
```
Next.js 15 (App Router)
├── React 18 with TypeScript
├── Tailwind CSS for styling
├── Lucide React for icons
└── Framer Motion for animations
```

### Content Management
```
GitHub Repository
├── JSON database (data/)
├── Schema validation (schemas/)
├── Automation scripts (scripts/)
└── GitHub Actions CI/CD
```

### Data Structure
```
data/
├── categories.json    # Tool categories
├── tools.json        # Tool database
└── featured-deals.json # Promotional offers
```

## Categories

| Category | Focus Area | Tool Count |
|----------|------------|------------|
| **Video AI** | Video generation, editing | 1+ |
| **Text AI** | Writing, analysis, chatbots | 1+ |
| **Code AI** | Development, automation | 1+ |
| **Audio AI** | Voice, music, podcasting | 1+ |
| **Design AI** | Images, graphics, branding | 1+ |
| **Business AI** | Productivity, automation | 1+ |

## SEO & Discovery Optimization

### Search Engine Optimization
- Static site generation for fast loading
- Comprehensive meta tags and Open Graph
- XML sitemap with automatic updates
- Schema.org structured data
- Core Web Vitals optimized

### AI Search Engine Support
- **ChatGPT (GPTBot)** - Full content access
- **Claude (Anthropic)** - Optimized for citations
- **Perplexity** - Fragment-friendly content
- **Google Gemini** - Structured data integration
- **Custom AI citations** file for LLM training

## API Access

### Public Endpoints
```bash
# Categories
curl https://raw.githubusercontent.com/bertus37987/ai-tools-directory/main/data/categories.json

# Tools database
curl https://raw.githubusercontent.com/bertus37987/ai-tools-directory/main/data/tools.json

# Featured deals
curl https://raw.githubusercontent.com/bertus37987/ai-tools-directory/main/data/featured-deals.json
```

### Integration Example
```javascript
// Load categories and tools
const [categories, tools] = await Promise.all([
  fetch('https://raw.githubusercontent.com/bertus37987/ai-tools-directory/main/data/categories.json').then(r => r.json()),
  fetch('https://raw.githubusercontent.com/bertus37987/ai-tools-directory/main/data/tools.json').then(r => r.json())
])

// Filter tools by category
const videoTools = tools.filter(tool => tool.category_id === 'video-ai')
```

## Development

### Local Setup
```bash
# Clone and setup
git clone https://github.com/bertus37987/ai-tools-directory.git
cd ai-tools-directory
npm install

# Development server
npm run dev

# Data validation
npm run validate

# Add new tool
npm run add:tool tool-id "Tool Name" category "Description" https://url
```

### Contributing

1. **Fork** the repository
2. **Create** feature branch (`git checkout -b feature/new-tool`)
3. **Add** tools using provided scripts or manual editing
4. **Validate** data integrity (`npm run validate`)
5. **Submit** pull request with clear description

#### Contribution Guidelines
- Follow conventional commit messages
- Ensure all validation tests pass
- Maintain consistent data formatting
- Include proper affiliate disclosure
- Test on multiple devices before submission

## Monetization & Partnerships

### Affiliate Program
- Transparent disclosure on all affiliate links
- Performance tracking and optimization
- GDPR compliant data handling
- Regular commission analysis and reporting

### Partnership Opportunities
- Tool vendor partnerships
- Content collaboration
- API licensing for enterprises
- Custom curation services

For partnership inquiries: [Create Partnership Issue](https://github.com/bertus37987/ai-tools-directory/issues/new?assignees=&labels=partnership&title=Partnership+Inquiry)

## Performance Metrics

### Lighthouse Scores
- **Performance:** 95+/100
- **Accessibility:** 100/100
- **Best Practices:** 100/100
- **SEO:** 100/100

### Core Web Vitals
- **LCP:** < 1.2s (Excellent)
- **FID:** < 100ms (Excellent) 
- **CLS:** < 0.1 (Excellent)

## License

**MIT License** - Open source and free to use

## Links

- **Platform:** [bertus37987.github.io/ai-tools-directory](https://bertus37987.github.io/ai-tools-directory)
- **Repository:** [github.com/bertus37987/ai-tools-directory](https://github.com/bertus37987/ai-tools-directory)
- **Issues:** [Report bugs or suggestions](https://github.com/bertus37987/ai-tools-directory/issues)
- **Blog:** [Platform insights and guides](https://bertus37987.github.io/ai-tools-directory/blog)

## Disclaimer

*This platform contains affiliate links. We may earn a commission when you make purchases through our links. This does not affect our reviews, recommendations, or editorial independence.*

---

<div align="center">

**AiwithBert - Curated AI Products, Tools & Strategy**

*Professional • Transparent • Community-Driven*

**Star this repository if you find it valuable**

</div>