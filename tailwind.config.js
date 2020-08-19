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
    '25':'25%',
    '50':'50%'
  },
  width:{
    '269':'269px',
    '92':'92px',
    '50':'50px',
    '80': '80px',
    '90':'90px',
    '499':'499px',
    '1/4':'25%',
    '25p':'25%',
    '50p':'50%',
    'i':'inherit'
  },
  height:{
    '92':'92px',
    '50':'50px',
    '100vh':'100vh',
    '80': '80px',
    '90':'90px',
    'i':'inherit'
  },
  margin:{
    '25px':'25px',
  },
  fontSize:{
    '32px':'32px',
    '28px': '28px',
    '70px':'70px',
    '34px':'34px'
  },
  borderRadius:{
    '17':'17px'
  },
  translate:{
    '-1/2':"-50%",
    '1/2':"50%",
    '-50':'-50%'
  },
  maxWidth:{
    '30rem':"30rem"
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
