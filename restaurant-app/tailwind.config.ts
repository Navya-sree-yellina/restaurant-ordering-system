import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Restaurant Theme
        'chocolate': {
          DEFAULT: '#8B4513',
          50: '#F5E6D8',
          100: '#E8D0B5',
          200: '#D4A574',
          300: '#B87333',
          400: '#9B5A1C',
          500: '#8B4513',
          600: '#6B3410',
          700: '#4B240B',
          800: '#2B1406',
          900: '#1B0A03',
        },
        'forest': {
          DEFAULT: '#228B22',
          50: '#E6F5E6',
          100: '#B8E2B8',
          200: '#8ACF8A',
          300: '#5CBC5C',
          400: '#2EA92E',
          500: '#228B22',
          600: '#1A6B1A',
          700: '#124B12',
          800: '#0A2B0A',
          900: '#051505',
        },
        'mustard': {
          DEFAULT: '#FFDB58',
          50: '#FFF9E6',
          100: '#FFF2CC',
          200: '#FFE999',
          300: '#FFE066',
          400: '#FFD733',
          500: '#FFDB58',
          600: '#E6C34E',
          700: '#CCAB44',
          800: '#B3933A',
          900: '#807030',
        },
        'saffron': '#F4A460',
        'turmeric': '#E3B505',
        'chili': '#C21807',
        'cream': '#F5F5DC',
        'warm-white': '#FAF0E6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'spice-pattern': "url('/patterns/spices.svg')",
      },
      animation: {
        'slide-up': 'slideUp 0.3s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config