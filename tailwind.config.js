/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        plum: {
          950: '#120307',
          900: '#1C060D',
          850: '#260913',
          800: '#340D1B',
          700: '#481427',
          600: '#5F1A34',
          500: '#7A2243',
          400: '#9B3258',
        },
        gold: {
          50: '#FCF9F2',
          100: '#F7F0DF',
          200: '#EEDCB7',
          300: '#E4C78F',
          400: '#DAB368',
          500: '#C5A059', // Primary luxury gold
          600: '#A6843E',
          700: '#84672B',
          800: '#624B1B',
          900: '#40300F',
        },
        ivory: {
          50: '#FDFCFB',
          100: '#FAF8F5',
          200: '#F4EFE6',
          300: '#ECE3D4',
          400: '#DFD3BE',
          500: '#CFC0A7',
        },
        champagne: {
          light: '#F8F4EC',
          DEFAULT: '#EBDDC6',
          dark: '#D1BD9A',
        },
      },
      fontFamily: {
        alexandria: ['Alexandria', 'sans-serif'],
        amiri: ['Amiri', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        tajawal: ['Tajawal', 'sans-serif'],
        aref: ['"Aref Ruqaa"', 'serif'],
      },
      backgroundImage: {
        'luxury-radial': 'radial-gradient(circle at 50% 20%, rgba(197, 160, 89, 0.15), rgba(28, 6, 13, 0.95) 70%)',
        'gold-shimmer': 'linear-gradient(135deg, #ECC880 0%, #C5A059 50%, #E8D29F 100%)',
        'gold-border': 'linear-gradient(135deg, rgba(228, 199, 143, 0.6) 0%, rgba(197, 160, 89, 0.2) 50%, rgba(228, 199, 143, 0.6) 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(197, 160, 89, 0.35)',
        'gold-glow-lg': '0 0 45px -5px rgba(197, 160, 89, 0.45)',
        'luxury-card': '0 20px 40px -15px rgba(18, 3, 7, 0.7), 0 0 1px 1px rgba(197, 160, 89, 0.2)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulseGlow 4s ease-in-out infinite',
        shimmer: 'shimmer 8s infinite linear',
      },
    },
  },
  plugins: [],
};
