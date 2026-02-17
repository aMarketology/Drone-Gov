import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#dc2626',      // Red-600
        primaryHover: '#991b1b', // Red-800 
        dark: '#1f2937',         // Gray-800
        darkAlt: '#111827',      // Gray-900
        light: '#f9fafb',        // Gray-50
      },
    },
  },
  plugins: [],
}
export default config
