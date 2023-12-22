/** @type {import('tailwindcss').Config} */
module.exports = {
	
/** paths to all files used as "templates" for generated CSS:
 * in other words, paths to all html and js files in the project */
  content: ["./**/*.pug"],
  theme: {
    extend: {
      colors: {
	'header': '#d5c19c',
      },
    },
  },
  plugins: [],
}

