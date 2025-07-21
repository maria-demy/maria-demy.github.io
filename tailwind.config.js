/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink': {
          50: '#F5EBE9',   // Background - dusty blush pink, warmer/pinker
          100: '#C9B7B4',  // Borders / Dividers - dusty clay-pink
          200: '#D9A6B3',  // Buttons / Highlights - pastel rose, light dusty pink
          300: '#B57281',  // Main Accent - rich dusty rose, pink but muted
          400: '#94596B',  // Secondary Accent - deep mauve-pink, more chroma
          500: '#A34D6D',  // Hover/Active Accent - deep, punchy dusty pink
          600: '#B57281',  // Main accent
          700: '#94596B',  // Secondary accent
          800: '#704A51',  // Muted/Subtle Text - dusty deep mauve
          900: '#232020',  // Text (main) - charcoal brown
        },
        'gray': {
          50: '#F5EBE9',   // Background
          100: '#C9B7B4',  // Borders
          200: '#C9B7B4',  // Light borders
          300: '#C9B7B4',  // Medium borders
          400: '#704A51',  // Subtle Text / Muted
          500: '#704A51',  // Muted text
          600: '#704A51',  // Subtle text
          700: '#704A51',  // Medium text
          800: '#232020',  // Text (main) - charcoal brown
          900: '#232020',  // Main text
        }
      },
      fontFamily: {
        'sans': ['Inter', 'Work Sans', 'DM Sans', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'IBM Plex Mono', 'monospace'],
        'heading': ['JetBrains Mono', 'Fira Code', 'IBM Plex Mono', 'monospace'],
        'body': ['Inter', 'Work Sans', 'DM Sans', 'sans-serif'],
      },
      fontSize: {
        'xl': ['var(--fs-xl)', { lineHeight: '1.2' }],
        'lg': ['var(--fs-lg)', { lineHeight: '1.3' }],
        'md': ['var(--fs-md)', { lineHeight: '1.4' }],
        'base': ['var(--fs-base)', { lineHeight: '1.6' }],
        'sm': ['var(--fs-sm)', { lineHeight: '1.5' }],
      },
      backgroundImage: {
        'flower-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23D9A6B3\" fill-opacity=\"0.3\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"8\"%3E%3C/circle%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      }
    },
  },
  plugins: [],
} 