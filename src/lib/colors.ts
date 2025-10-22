// Institutional color system - Graham Capital inspired
// Base: Pure grayscale with minimal, strategic color accents

export const COLORS = {
  // Pure grayscale foundation
  pure: {
    black: '#000000',
    white: '#FFFFFF',
  },
  
  // Neutral surfaces (charcoal foundation)
  neutral: {
    950: '#0A0C10', // charcoal/near-black background
    900: '#171717', // cards
    850: '#262626', // sub-cards/hover
    800: '#404040', // borders
    700: '#525252', // dividers
    600: '#737373', // muted borders
    500: '#a3a3a3', // tertiary text
    400: '#A7B0B8', // quaternary text
    300: '#C8CDD3', // silver accent
    200: '#e5e5e5', // very light
    100: '#EAECEF', // off-white
  },
  
  // Typography (hedge-fund clarity)
  text: {
    primary: '#EAECEF',   // off-white headlines
    secondary: '#A7B0B8', // subtle secondary body
    tertiary: '#737373',  // meta/captions
    muted: '#525252',     // very muted
  },
  
  // Strategic accents (used sparingly)
  accent: {
    cyan: '#24B3C9',      // deep cyan/teal primary accent
    silver: '#C8CDD3',    // silver secondary accent
  },
  
  // Status colors (only for data/feedback, never decoration)
  status: {
    success: '#10B981',   // positive delta text only
    warning: '#F59E0B',   // caution text only
    danger: '#EF4444',    // negative delta text only
  },
} as const;

// Utility classes
export const FOCUS_RING = "outline-none focus-visible:ring-1 focus-visible:ring-neutral-600 focus-visible:ring-inset";
export const BUTTON_PRIMARY = "bg-white text-black hover:bg-neutral-200 transition-colors";
export const BUTTON_SECONDARY = "border border-neutral-700 text-neutral-300 hover:border-neutral-600 hover:bg-neutral-850 transition-colors";
export const BUTTON_ACCENT = "bg-[#24B3C9] text-white hover:bg-[#1a9bb8] transition-colors";
export const BUTTON_TERTIARY = "text-neutral-400 hover:text-neutral-200 hover:underline transition-colors";

