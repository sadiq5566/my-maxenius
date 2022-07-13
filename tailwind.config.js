module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "lg": { 'max': '1024px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '500px' },
      'xsm': { 'max': '400px' },
    },
    extend: {
      backgroundImage: {
        'header-bg': "url('/assets/images/headerbg.png')",
      },
      borderRadius: {
        '4xl': '40px',

      },
      colors: {
        main: "#E11C34",
        serviceBg: "#FBFBFB",
        pColor: "#6A6A6A",
        gradient1: "#FE2A44",
        gradient2: "#BD0B21",
        greyClr: "#F0F0F0"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'Lato': ['Lato', 'sans-serif']
      },

      boxShadow: {
        'service': '0px 11px 16px rgba(0, 0, 0, 0.04)',
      }



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
    require("daisyui")
  ]
};
