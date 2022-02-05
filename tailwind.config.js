module.exports = {

  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],

  // OPTIONAL: if you want to use DaisyUI colors everywhere
  theme: {
    extend: {
      colors: require('daisyui/colors'),
    },
  },
  
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'nuxt.config.js',
      'static/*.svg',
    ],
  },

  daisyui: {
    styled: true,
    themes: true,
    rtl: false,
  },

}