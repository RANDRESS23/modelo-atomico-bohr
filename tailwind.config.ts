import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'color-gradient-1A': '#007cf0',
        'color-gradient-2A': '#00dfd8',
        'color-gradient-1B': '#7928ca',
        'color-gradient-2B': '#ff0080',
        'color-gradient-1C': '#ff4d4d',
        'color-gradient-2C': '#f9cb28'
      },
      keyframes: {
        'animation-title-1': {
          '0%': { opacity: '1' },
          '16.667%': { opacity: '1' },
          '33.333%': { opacity: '0' },
          '83.333%': { opacity: '0' },
          '94%': { opacity: '1' }
        },
        'animation-title-2': {
          '0%': { opacity: '0' },
          '16.667%': { opacity: '0' },
          '30%': { opacity: '1' },
          '50%': { opacity: '1' },
          '66.667%': { opacity: '0' },
          '100%': { opacity: '0' }
        },
        'animation-title-3': {
          '0%': { opacity: '0' },
          '50%': { opacity: '0' },
          '60%': { opacity: '1' },
          '83.333%': { opacity: '1' },
          '100%': { opacity: '0' }
        }
      },
      animation: {
        'color-cycle-1': 'animation-title-1 10s ease-in-out infinite',
        'color-cycle-2': 'animation-title-2 10s ease-in-out infinite',
        'color-cycle-3': 'animation-title-3 10s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
export default config
