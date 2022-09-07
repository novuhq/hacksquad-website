/* eslint-disable import/no-extraneous-dependencies, global-require */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      sans: ['Input Mono', ...defaultTheme.fontFamily.sans],
      mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
    },
    fontSize: {
      xs: ['12px'],
      sm: ['14px'],
      base: ['16px'],
      lg: ['20px'],
      xl: ['60px'],
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: '#000000',
      white: '#ffffff',
      primary: {
        1: '#FF0095',
      },
      gray: {
        1: '#C7CCD1',
      },
    }),
    screens: {
      '2xl': { max: '1919px' },
      xl: { max: '1535px' },
      lg: { max: '1279px' },
      md: { max: '1023px' },
      sm: { max: '767px' },
      xs: { max: '359px' },
    },
  },
  plugins: [require('tailwindcss-safe-area')],
};
