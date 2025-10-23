# AI Tools Directory Frontend

A modern, clean black and white frontend for the AI Tools Directory built with Next.js, React, and Tailwind CSS.

## Features

- **Modern Design**: Clean black and white aesthetic with polished components
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Fast**: Built with Next.js for optimal performance
- **GitHub Integration**: Loads data directly from GitHub repository
- **SEO Optimized**: Static site generation with proper meta tags

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Framer Motion** - Smooth animations

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Build for Production

```bash
npm run build
npm run export
```

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## Project Structure

```
frontend/
├── src/
│   ├── app/           # Next.js app directory
│   ├── components/    # React components
│   └── types/         # TypeScript definitions
├── public/         # Static assets
└── package.json    # Dependencies
```

## Components

- **Header** - Navigation with mobile menu
- **Hero** - Featured deals carousel
- **SearchBar** - Smart search with clear functionality
- **CategoryFilter** - Filter tools by category
- **ToolGrid** - Display tools in responsive grid
- **ToolCard** - Individual tool display with features

## Customization

Colors, fonts, and design tokens can be customized in `tailwind.config.js`.

## License

MIT - See LICENSE file for details.