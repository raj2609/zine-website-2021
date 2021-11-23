module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        navbar: 'navbar 1s ease-out',
        blob: "blob 7s infinite",
      },
      spacing: {
        '18': "4.4rem",
        '22': "5.8rem",
        '26': "6.6rem",
        '38': "9.8rem",
        '110': "20rem",
        '115': "21rem",
        '120': "30rem",
        '130': "40rem",
        '140': "45rem",
        '145': "48rem",
        '150': "60rem",
        '160': "67.5rem",
      },
      keyframes: {
        navbar: {
          '0%': { transform: 'translateX(20%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
      colors: {
        gray: {
          1000: "#0B0B0B",
          1100: "#252525",
          1200: "#121212",
          1300: "#808080",
          1400: "#353535",
          1500: "#FFFFFF",
        },
      },
      fontFamily: {
        'righteous': ['Righteous', 'cursive'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'roboto': ['Roboto', 'monospace'],
      },
      boxShadow: {
        'button_custom': '4px 4px 8px rgba(255, 255, 255, 0.25)',
        'nav_custom': '30px 0px 30px 30px rgba(255, 255, 255, 0.25)',
        'login_custom': '0px 0px 10px 5px rgba(0, 0, 0, 0.25);',
      },
      backgroundImage: {
        'footer-bg': "url('../images/footer.jpg')",
        'body-bg': "url('../images/bg.jpeg')",
        'bg-a1': "url('../images/project/a1.jpg')",
        'bg-a2': "url('../images/project/a2.jpg')",
        'bg-a3': "url('../images/project/a3.jpg')",
        'bg-a4': "url('../images/project/a4.jpg')",
        'bg-a5': "url('../images/project/a5.jpg')",
        'bg-a6': "url('../images/project/a6.jpg')",
        'bg-a7': "url('../images/project/a7.jpg')",
        'bg-a8': "url('../images/project/a8.jpg')",
        'bg-a9': "url('../images/project/a9.jpg')",
        'bg-a10': "url('../images/project/a10.jpg')",
        'bg-a11': "url('../images/project/a11.jpg')",
        'bg-a12': "url('../images/project/a12.jpg')",
        'bg-a13': "url('../images/project/a13.jpg')",
        'bg-a14': "url('../images/project/a14.jpg')",
        'bg-team': "url('../images/team.png')",
        'about-bg': "url('../images/aboutbg.jpeg')",
      },
      fontSize: {
        base: ['50px', '75px'],
        
      },

      screens: {
        'custom': '900px',
        'xsm': '300px'
      }
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [],
}
