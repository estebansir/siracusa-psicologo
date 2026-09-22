import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          0: '#ffffff',
          50: '#fafaf9',
          100: '#f5f3f0',
          200: '#e8e4e0',
          300: '#dcd8d3',
          400: '#bfb8af',
          500: '#8b7d73',
          600: '#5f544a',
          700: '#423d37',
          800: '#2a2622',
          900: '#1a1815',
        },
        teal: {
          50: '#f0fdf9',
          100: '#d4f8f0',
          600: '#0d8b7f',
          700: '#0a6b64',
          800: '#084f47',
        },
      },
      fontSize: {
        xs: '0.875rem',
        sm: '0.9375rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      lineHeight: {
        tight: '1.2',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '1.75',
      },
      letterSpacing: {
        tight: '-0.01em',
        normal: '0em',
        wide: '0.01em',
      },
      spacing: {
        section: '3.5rem',
        'section-lg': '5rem',
      },
      maxWidth: {
        prose: '65ch',
        'container-sm': '32rem',
        'container-md': '48rem',
        'container-lg': '64rem',
        'container-xl': '80rem',
      },
    },
  },
  plugins: [],
}
export default config
