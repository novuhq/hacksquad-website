/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      titles: ['Cal Sans', 'Cal Sans Fallback', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
      36: '36px',
      42: '42px',
      60: '60px',
    },
    lineHeight: {
      none: '100%',
      1.1: '110%',
      1.125: '112.5%',
      snug: '137.5%',
      normal: '150%',
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: '#000000',
      white: '#ffffff',
      yellow: '#ffea00',
      purple: '#cbb2ff',
      grey: {
        1: '#c7ccd1',
        2: '#454d54',
      },
    }),
    extend: {
      backgroundImage: () => ({
        'color-picker-variant-1': 'linear-gradient(135deg, #42E2FE 0%, #4382F9 100%);',
        'color-picker-variant-2': 'linear-gradient(135deg, #D64996 0%, #2B54C7 100%);',
        'color-picker-variant-3': 'linear-gradient(135deg, #FEEDAA 0%, #EAA94F 100%);',
        'color-picker-variant-4': 'linear-gradient(135deg, #00FFFF 0%, #4FEA71 100%);',
        'color-picker-variant-5': 'linear-gradient(135deg, #FF9E75 0%, #F05600 100%);',
        'color-picker-variant-6': 'linear-gradient(135deg, #AAFEF9 0%, #8728FF 99.48%);',
        'ticket-text-variant-1': 'linear-gradient(215.67deg, #ffffff 41.51%, #66ffcc 79.11%)',
        'ticket-text-variant-2': 'linear-gradient(215.67deg, #ffffff 41.51%, #e6ff66 79.11%)',
        'ticket-text-variant-3': 'linear-gradient(215.67deg, #ffffff 41.51%, #ff99dd 79.11%)',
        'ticket-text-variant-4': 'linear-gradient(215.67deg, #ffffff 41.51%, #ccccff 79.11%)',
        'ticket-text-variant-5': 'linear-gradient(215.67deg, #ffffff 41.51%, #ccccff 79.11%)',
        'ticket-text-variant-6': 'linear-gradient(215.67deg, #ffffff 41.51%, #ccccff 79.11%)',
      }),
    },
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
