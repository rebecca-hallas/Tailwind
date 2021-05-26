module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'code': "url('./bg.png')",
        'yay': "url('./yay.png')",
        'woo': "url('./woo.png')",
        'yeya': "url('./yeya.png')"
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover', 'focus'],
    },
  },
  plugins: [],
}
