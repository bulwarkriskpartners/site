// Premium color system for institutional-grade appearance
// Gold accent creates association with wealth and premium service
export const PREMIUM_COLORS = {
  // Gold accent for premium tier/important numbers
  gold: {
    50: '#FFFBEB',
    100: '#FEF3C7', 
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#D4AF37', // Primary gold - creates luxury association
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F',
  },
  
  // Success green for risk indicators only
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
  
  // Enhanced text colors for better readability
  text: {
    primary: '#F5F5F5', // Slightly off-white for premium feel
    secondary: '#A0A0A0', // Lighter gray for better readability on dark background
    tertiary: '#737373',
    muted: '#525252',
  }
};

// Premium utility classes
export const PREMIUM_UTILITIES = {
  // Gold accent for premium elements
  goldAccent: 'text-gold-500 border-gold-500/20 bg-gold-500/10',
  
  // Premium button with gold accent on hover
  premiumButton: 'transition-all duration-400 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-gold-500/30',
  
  // Glass morphism effect for cards
  glassCard: 'backdrop-blur-[10px] bg-zinc-900/60 border border-zinc-800/80',
  
  // Premium text with monospaced numbers
  monospaceNumber: 'font-mono tabular-nums',
  
  // Enhanced letter spacing for headers
  premiumHeader: 'tracking-[0.02em]',
};
