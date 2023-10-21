export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'helvetica': ['HELVETICA', 'Sans Serif'] 
      },
      backgroundColor:{
        'darkNika' : '#111111',
        'customGray' : '#F7F7F7'
      },
      blur:{
        'navBlur' : '4px '
      },
      colors:{
        'pay' : '#8498BD',
        'pal' : '#7AC9EB'
      }
    },
  },
  plugins: [],
}