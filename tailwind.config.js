/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": {
          100: "#F4D993",
          200: "#FEF189",
        },
        "secondary": {
          100: "#E8F1FA",
          200: "#D9EAFD",
        },
        "text" : "#080808",
        "light": "#F7F7F7",
        "dark": {
          100: "#6c757d",
          200: "#495057",
          300: "#343a40",
          400: "#212529",
        },
        "dark-secondary": "#0C2339",
      },
      borderRadius: {
        'none': '0',
        'small': '10px',
        'medium': '25px',
        'big': '50px',
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      }
    },
  },
  plugins: [],
  darkMode: "class",
}

