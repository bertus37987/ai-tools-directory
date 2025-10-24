/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark Purple Starlight Theme - Minimalist & Readable
        dark: {
          bg: '#0a0a0f',           // Deep purple-black
          'bg-secondary': '#13131a', // Card background
          'bg-tertiary': '#1a1a24',  // Hover states
          'bg-hover': '#20202e',     // Interactive hover
          border: '#2a2a3e',         // Subtle borders
          'border-subtle': '#1f1f2e',
          text: '#e8e8f0',           // High contrast text
          'text-secondary': '#9d9daa', // Secondary text
          'text-tertiary': '#6e6e7e',  // Tertiary text
          accent: '#8b5cf6',         // Purple accent
          'accent-hover': '#a78bfa', // Lighter purple hover
          'accent-subtle': '#5b21b6', // Dark purple
          success: '#22c55e',
          warning: '#f59e0b',
          danger: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace']
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['0.9375rem', { lineHeight: '1.5rem' }], // Slightly smaller
        'lg': ['1rem', { lineHeight: '1.5rem' }],
        'xl': ['1.125rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '3xl': ['1.5rem', { lineHeight: '2rem' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
