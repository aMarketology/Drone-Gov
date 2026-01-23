import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ee3124',      // Resolute ISR Red
        primaryHover: '#d12b1f', // Darker red on hover
        dark: '#323232',         // Resolute ISR Dark Gray
        darkAlt: '#414042',      // Resolute ISR Alternative Dark
        light: '#f2f2f2',        // Resolute ISR Off-White
      },
    },
  },
  plugins: [],
}
export default config
