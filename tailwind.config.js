/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Gold accent for premium tier/important numbers - creates luxury association
        gold: {
          50: '#FFFBEB',
          100: '#FEF3C7', 
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#D4AF37', // Primary gold - creates wealth and premium service association
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        
        // Enhanced success green for risk indicators only
        success: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#27AE60', // Primary success green
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        
        // Danger red for risk indicators only  
        danger: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#E74C3C', // Primary danger red
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
        },
      },
      
      fontFamily: {
        // Inter font for institutional feel
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'], // Monospaced numbers for precision
      },
      
      letterSpacing: {
        // Premium letter spacing for headers
        premium: '0.02em',
      },
      
      backdropBlur: {
        // Glass morphism effect
        premium: '10px',
      },
      
      animation: {
        // Premium animations
        'premium-pulse': 'premium-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'premium-float': 'premium-float 3s ease-in-out infinite',
      },
      
      keyframes: {
        'premium-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'premium-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
}
