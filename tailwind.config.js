module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'code': "url('./bg.png')",
        'yay': "url('./yay.png')",
        'woo': "url('./woo.png')",
        'yeya': "url('./yeya.png')",
        'c1r1': "url('./images/c1r1.png')",
        'demo1': "url('./images/demo1.png')",
        'demo2': "url('./images/demo2.png')",
        'demo3': "url('./images/demo3.png')",
        'demo4': "url('./images/demo4.png')",
        'demo5': "url('./images/demo5.png')"
      }),
      fontFamily: {
        'poppins': ['poppins', 'Arial']
      }
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover', 'focus'],
    },
  },
  plugins: [],
}
