/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette
        'white': '#FFFFFF',
        'soft-black': '#2B2B2B',
        'soft-black-alt': '#333333',
        'pa-teal': '#4ECDC4',
        'pa-teal-alt': '#40E0D0',
        'grey-bg': '#F5F5F5',
        'grey-bg-alt': '#E5E5E5',
        
        // Softer variants for button hovering
        'pa-teal-hover': '#3DB8B0', // Darker teal for hover
        'pa-teal-light': '#6ED7CF', // Lighter teal for light hover
        'soft-black-hover': '#1A1A1A', // Darker soft black for hover
        'soft-black-light': '#404040', // Lighter soft black for light hover
        'grey-bg-hover': '#EBEBEB', // Darker grey for hover
        'grey-bg-light': '#FAFAFA', // Lighter grey for light hover
      },
    },
  },
  plugins: [],
} 