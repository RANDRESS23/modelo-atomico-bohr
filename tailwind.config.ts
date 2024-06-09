import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'
import svgToDataUri from 'mini-svg-data-uri'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-white': `url("${svgToDataUri(
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="#202020"><path d="M0 .5H31.5V32"/></svg>'
        )}")`,
        'grid-black': `url("${svgToDataUri(
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="#e6e6e6"><path d="M0 .5H31.5V32"/></svg>'
        )}")`
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
        },
        shimmer: {
          from: {
            backgroundPosition: '0 0',
            transform: 'translateX(0%)'
          },
          to: {
            backgroundPosition: '-200% 0',
            transform: 'translateX(0%)'
          }
        }
      },
      animation: {
        'color-cycle-1': 'animation-title-1 10s ease-in-out infinite',
        'color-cycle-2': 'animation-title-2 10s ease-in-out infinite',
        'color-cycle-3': 'animation-title-3 10s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite'
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui()]
}
export default config
