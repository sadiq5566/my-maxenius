module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {

        'header-bg': "url('/assets/images/headerbg.png')",
      },
      borderRadius: {
        '4xl': '40px',

      },
      colors: {
        main: "#E11C34",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'Lato': ['Lato', 'sans-serif']
      },

    }
  },

  variants: {
    extend: {
      fontWeight: ['responsive', 'hover', 'focus', 'group-hover', 'active'],
      fontBold: ['responsive', 'hover', 'focus', 'group-hover', 'active'],
      opacity: ['responsive', 'hover', 'focus', 'disabled', 'active'],
    }
  },

  plugins: [
  ]
};
