// @/tailwind.config.ts

import type { Config } from 'tailwindcss';
const { nextui } = require('@nextui-org/react');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        myteal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      prefix: 'myapp', // 'nextui' by default
      addCommonColor: false, // false by default
      layout: {
        disabledOpacity: '0.3',
        radius: {
          small: '2px',
          medium: '4px',
          large: '6px',
        },
        borderWidth: {
          small: '1px',
          medium: '1px',
          large: '2px',
        },
      },
      themes: {
        light: {
          colors: {
            default: {
              DEFAULT: '#3f3f46',
              foreground: '#ffffff',
            },
            primary: {
              DEFAULT: '#006fee',
              foreground: '#ffffff',
            },
            secondary: {
              DEFAULT: '#9353d3',
              foreground: '#ffffff',
            },
            success: {
              DEFAULT: '#17c964',
              foreground: '#000000',
            },
            warning: {
              DEFAULT: '#f5a524',
              foreground: '#000000',
            },
            danger: {
              DEFAULT: '#f31260',
              foreground: '#000000',
            },
            focus: '#006fee', // primary color by default
          },
        },
        dark: {},
      },
    }),
  ],
};

export default config;
