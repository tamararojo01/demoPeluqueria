import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf6f1',
          100: '#f3e9db',
          200: '#e7d1b5',
          300: '#d4a574',
          400: '#c9935f',
          500: '#b8834d',
          600: '#a77441',
          700: '#8b5e37',
          800: '#714d32',
          900: '#5d402b',
        },
        secondary: {
          50: '#f5f7fa',
          100: '#eaeef4',
          200: '#d1dbe6',
          300: '#a8bcd1',
          400: '#7998b8',
          500: '#567ba0',
          600: '#426185',
          700: '#2c3e50',
          800: '#2d4559',
          900: '#293c4d',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
