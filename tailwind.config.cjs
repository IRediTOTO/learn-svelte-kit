

module.exports = {
  purge: ['./app.html', './src/**/*.{svelte,html,js,ts,jsx,tsx}'],
 // prefix: "tw-",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('windicss/plugin/forms'),
  ],


}
