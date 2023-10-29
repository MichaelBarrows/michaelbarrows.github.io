/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./pages/**/*.vue",
    "./layouts/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'pacific-blue': {
          '50': '#f0faff',
          '100': '#e0f5fe',
          '200': '#b9ecfe',
          '300': '#7cdffd',
          '400': '#36d0fa',
          '500': '#0cbaeb',
          '600': '#0099cc',
          '700': '#0178a3',
          '800': '#066586',
          '900': '#0b536f',
          '950': '#07354a',
        },
        'bermuda': {
          '50': '#f0fbfb',
          '100': '#d8f3f5',
          '200': '#b6e7eb',
          '300': '#73cfd7',
          '400': '#4bb9c5',
          '500': '#2f9eab',
          '600': '#2a8090',
          '700': '#286876',
          '800': '#285662',
          '900': '#254954',
          '950': '#142f38',
        },
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
        )
      }),
      require("@tailwindcss/forms"),
    ],
}
