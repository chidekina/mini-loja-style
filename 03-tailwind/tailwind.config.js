/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./03-tailwind/**/*.{js,jsx,ts,tsx}",
    "./shared/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4F46E5',
          dark: '#6366F1',
          hover: {
            light: '#4338CA',
            dark: '#5B21B6'
          }
        },
        surface: {
          light: '#F9FAFB',
          dark: '#1F2937'
        },
        text: {
          primary: {
            light: '#111827',
            dark: '#F9FAFB'
          },
          secondary: {
            light: '#6B7280',
            dark: '#D1D5DB'
          }
        },
        border: {
          light: '#E5E7EB',
          dark: '#374151'
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif']
      },
      spacing: {
        '18': '4.5rem'
      },
      boxShadow: {
        'hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'dark-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)'
      },
      animation: {
        shimmer: 'shimmer 2s infinite'
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      screens: {
        'mobile': {'max': '480px'},
        'tablet': {'min': '481px', 'max': '768px'},
        'desktop': {'min': '769px', 'max': '1024px'},
        'large': {'min': '1025px'}
      }
    },
  },
  plugins: [],
}