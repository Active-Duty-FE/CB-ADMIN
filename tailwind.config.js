/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      spacing: {
        81: '81px',
        150: '150px',
        200: '200px',
        250: '250px',
        300: '250px',
        500: '550px'
      }
    }
  },
  important: '#root',
  plugins: [],
  important: '#root',
  corePlugins: {
    preflight: false
  },
  corePlugins: {
    preflight: false
  }
}
// spacing: {
//   1065: '1065px',
//   2206: '2206px',
//   81: '81px',
//     200: '200px',
//     500: '500px',
//   150: '150px',
//   200: '200px',
//   250: '250px'
// }
