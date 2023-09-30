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
      mono: ['JetBrains Mono', 'JetBrains Mono Fallback', ...defaultTheme.fontFamily.mono],
      titles: ['Cal Sans', 'Cal Sans Fallback', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      xs: ['12px'],
      sm: ['14px'],
      base: ['16px'],
      lg: ['20px'],
      xl: ['60px'],
      12: '12px',
      13: '13px',
      14: '14px',
      15: '15px',
      16: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
      36: '36px',
      42: '42px',
      48: '48px',
      60: '60px',
      80: '80px',
      92: '92px',
      114: '114px',
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
      primary: {
        1: '#FF0095',
        2: '#00EAFF',
      },
      gray: {
        1: '#c7ccd1',
        2: '#454d54',
      },
    }),
    screens: {
      '2xl': { max: '1919px' },
      xl: { max: '1535px' },
      lg: { max: '1279px' },
      md: { max: '1023px' },
      sm: { max: '767px' },
      xs: { max: '560px' },
      xxs: { max: '359px' },
    },
    extend: {
      backgroundImage: {
        'home-hero-title': 'radial-gradient(rgba(82, 0, 255, 0) 0%, rgba(82, 0, 255, 0.2) 80%);',
        'cta-blur': 'linear-gradient(180deg, rgba(255, 234, 0, 0) 0%, #FFEA00 100%);',
        'cta-hover-blur': 'linear-gradient(180deg, rgba(255, 242, 99, 0.00) 0%, #FFF263 84.05%);',
        'join-us':
          'radial-gradient(110.74% 101.73% at 50% -1.73%, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.08) 60.14%, rgba(255, 255, 255, 0.02) 100%);',
        'join-us-hover':
          'radial-gradient(110.74% 101.73% at 50% -1.73%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.12) 60.14%, rgba(255, 255, 255, 0.03) 100%);',
        'leaderboard-selected':
          'linear-gradient(90deg, rgba(203, 178, 255, 0.12) 27.6%, rgba(203, 178, 255, 0.08) 67.25%, rgba(203, 178, 255, 0.12) 91.15%);',
        'leaderboard-selected-hover':
          'linear-gradient(90deg, rgba(203, 178, 255, 0.20) 27.6%, rgba(203, 178, 255, 0.12) 67.25%, rgba(203, 178, 255, 0.20) 91.15%);',

        'color-picker-variant-1': 'linear-gradient(135deg, #42E2FE 0%, #4382F9 100%);',
        'color-picker-variant-2': 'linear-gradient(135deg, #D64996 0%, #2B54C7 100%);',
        'color-picker-variant-3': 'linear-gradient(135deg, #FEEDAA 0%, #EAA94F 100%);',
        'color-picker-variant-4': 'linear-gradient(135deg, #00FFFF 0%, #4FEA71 100%);',
        'color-picker-variant-5': 'linear-gradient(135deg, #FF9E75 0%, #F05600 100%);',
        'color-picker-variant-6': 'linear-gradient(135deg, #AAFEF9 0%, #8728FF 99.48%);',

        'ticket-heading-variant-1':
          'linear-gradient(90deg, #3260CA 0%, #6BBCF6 42.98%, #BCF0FF 100%);',
        'ticket-heading-variant-2':
          'linear-gradient(90deg, #7645E7 0%, #A969F5 37.88%, #E691FF 67.44%, #EFC0FF 100%);',
        'ticket-heading-variant-3':
          'linear-gradient(90deg, #CF953F 0%, #FFEC5F 23.96%, #FFF494 66.6%, #FFFFBF 100%);',
        'ticket-heading-variant-4':
          'linear-gradient(90deg, #1BE2DB 0%, #5FFAF6 52.49%, #9FF 100%);',
        'ticket-heading-variant-5':
          'linear-gradient(90deg, #DCA9A9 0%, #F1DEB5 24.06%, #FFF4E5 66.87%, #FFFFEC 100%);',
        'ticket-heading-variant-6': 'linear-gradient(90deg, #BFA8F2 0%, #E6E4FF 21%, #FFF 100%);',

        'ticket-number-variant-1':
          'linear-gradient(270deg, #508BFF 0%, #5690FF 25.35%, #5FA2FF 36.75%, #395CC4 54.22%, #234981 84.93%, #1977A7 100%);',
        'ticket-number-variant-2':
          'linear-gradient(270deg, #854DFF 0%, #8A4CFF 20.88%, #A565FF 31.08%, #7144E7 48.19%, #3F267F 73.83%, #2C185F 100%);',
        'ticket-number-variant-3':
          'linear-gradient(271deg, #FFC84C 0.15%, #FFC34C 21.55%, #FFEF5E 39.21%, #F1AD42 46.78%, #705325 95.82%, #A38A6A 99.73%);',
        'ticket-number-variant-4':
          'linear-gradient(271deg, #40FFDE 0.24%, #3DFFE6 20.17%, #31FFEC 44.74%, #23BEAA 53.85%, #17A296 68.86%, #17F5ED 75.85%, #088F8F 93.38%, #07BFC5 99.78%);',
        'ticket-number-variant-5':
          'linear-gradient(270deg, #FFC972 0.1%, #FFD46D 22.79%, #FFFE96 32.63%, #FFC171 48.54%, #FE9557 54.18%, #9B5A37 99.66%);',
        'ticket-number-variant-6':
          'linear-gradient(270deg, #36A7FF 0.1%, #57C8FF 16.49%, #A5FFFF 32.66%, #83BDFF 45.4%, #789EFF 52.68%, #727AC7 71.07%, #675689 99.66%);',
      },
      spacing: {
        26: '6.25rem',
      },
    },
  },
  plugins: [require('tailwindcss-safe-area')],
};
