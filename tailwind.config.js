/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['montserrat', 'sans-serif'],
        'poppins': ['poppins', 'sans-serif'],
      },
      backgroundImage: {
        'banner': "url('./public/images/banner.png')",
      },
      height: {
        '720': "45rem",
      },
      letterSpacing: {
        "3": "0.2em",
      },
      colors: {
        "preto": "#333",
        "primaria": "#B88E2F",
        "secundaria": "#FFF3E3",
      },
      backgroundColor: {
        "preto": "#333",
        "primaria": "#B88E2F",
        "secundaria": "#FFF3E3",
      },
      lineHeight: {
        "largo": "4rem",
      },
    },
  },
  plugins: [],
}

