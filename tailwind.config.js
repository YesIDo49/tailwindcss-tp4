/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
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
        "light": "#F7F7F7",
        "dark": {
          100: "#414147",
          200: "#232225",
          300: "#282227",
          400: "#171719",
        },
      },
      borderRadius: {
        'none': '0',
        'small': '10px',
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
}
