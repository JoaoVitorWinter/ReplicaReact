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
        'banner': "url('./images/banner.png')",
        "quarto": "url('./images/quarto.png')",
      },
      height: {
        '720': "45rem",
      },
      width: {
        "544": "34rem",
      },
      letterSpacing: {
        "3": "0.2em",
      },
      colors: {
        "preto": "#333",
        "preto-escuro": "#242424",
        "cinza-claro": "#898989",
        "cinza": "#616161",
        "cinza-escuro": "#3A3A3A",
        "cinza-transparente": "#B0B0B0",
        "primaria": "#B88E2F",
        "secundaria": "#FFF3E3",
      },
      backgroundColor: {
        "preto": "#333",
        "cinza": "#666",
        "cinza-claro": "#F4F5F7",
        "cinza-palido": "#D8D8D8",
        "primaria": "#B88E2F",
        "secundaria": "#FFF3E3",
        "secundaria-clara": "#FCF8F3",
        "secundaria-media": "#FAF3EA",
      },
      lineHeight: {
        "largo": "4rem",
      },
    },
  },
  plugins: [],
}

