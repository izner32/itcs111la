module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.tsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'foggy-gray': {
          DEFAULT: '#CDCCBF',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#F1F1ED',
          '400': '#DFDED6',
          '500': '#CDCCBF',
          '600': '#B4B3A0',
          '700': '#9C9A80',
          '800': '#807E64',
          '900': '#605F4B'
        },
        'ironside-gray': {
          DEFAULT: '#65645F',
          '50': '#C0BFBC',
          '100': '#B6B5B1',
          '200': '#A2A19C',
          '300': '#8E8D87',
          '400': '#7A7973',
          '500': '#65645F',
          '600': '#484744',
          '700': '#2B2B29',
          '800': '#0E0E0D',
          '900': '#000000'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
