const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
		extend: {
			colors: {
				rose: colors.emerald,
			}
		},
	},
  variants: {
    extend: {},
  },
  plugins: [
		require('@tailwindcss/forms')
	],
}
