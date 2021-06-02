module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'demo1': "url('./images/demo1.png')",
        'demo2': "url('./images/demo2.png')",
        'demo3': "url('./images/demo3.png')",
        'demo4': "url('./images/demo4.png')",
        'demo5': "url('./images/demo5.png')",
        'grid': "url('./images/grid.png')"
      }),
      colors: {
        lilac: '#f2ebf4'
      },
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
