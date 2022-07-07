module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {

        "button-gradient": "linear-gradient(112.3deg, #FE2A44 0.22%, #BD0B21 100.27%)"
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
  ]
};
