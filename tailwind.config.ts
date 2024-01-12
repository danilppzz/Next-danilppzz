import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      scale: {
        '90': '0.9',
      },
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      dark: {
        10: '#242424',
        20: '#262626',
        30: '#2C2C2C',
        40: '#444444',
      },
      light: {
        10: '#ffffff',
        20: '#9D9D9D',
        30: '#8F8F8F',
      },
      low: {
        10: '#FF5E5E',
        20: '#FF835E',
        30: '#FFB85E',
        40: '#C2FF5E',
        50: '#63FF5E',
        60: '#5EFFBB',
        70: '#5EFFE4',
        80: '#5EB6FF',
        90: '#5E85FF',
        100: '#635EFF',
        110: '#7B5EFF',
        120: '#995EFF',
        130: '#D35EFF',
        140: '#FF5E5E',
      }
    },
  },
  plugins: [],
}
export default config