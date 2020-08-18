const styleConfig = {
  zIndex:{
    0:0,
    1:1,
    10:10,
    'auto':'auto'
  },
  inset:{
    '3': '3%',
    '5':'5%',
    '7': '7%',
    '10':'10%',
    '15':'15%',
    '25':'25%'
  },
  width:{
    '269':'269px',
    '92':'92px',
    '50':'50px'
  },
  height:{
    '92':'92px',
    '50':'50px',
    '100vh':'100vh'
  },
  margin:{
    '25px':'25px'
  },
  fontSize:{
    '32px':'32px'
  }
}
module.exports = {
  purge: [],
  theme: {
    extend: styleConfig,
  },
  variants: {},
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
