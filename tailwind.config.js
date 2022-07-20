module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xl: { max: "1440px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "500px" }
    },
    extend: {
      backgroundImage: {
        "header-bg": "url('/assets/images/headerbg.png')",
        "footer-house": "url('../components/images/footer.png')",
        "red-gradient": "linear-gradient(112.3deg, #FE2A44 0.22%, #BD0B21 100.27%)",
        "button-gradient": "linear-gradient(112.3deg, #FE2A44 0.22%, #BD0B21 100.27%)"
      },
      borderRadius: {
        "4xl": "40px"
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
        poppins: ["Poppins", "sans-serif"],
        Lato: ["Lato", "sans-serif"]
      },
      backgroundSize: {
        "100%": "100%",
        service: "0px 11px 16px rgba(0, 0, 0, 0.04)"
      },
      boxShadow: {
        service: "0px 11px 16px rgba(0, 0, 0, 0.04)",
        contact: "0px 11px 16px rgba(0, 0, 0, 0.04)"
      }
    }
  },

  variants: {
    extend: {
      fontWeight: ["responsive", "hover", "focus", "group-hover", "active"],
      fontBold: ["responsive", "hover", "focus", "group-hover", "active"],
      opacity: ["responsive", "hover", "focus", "disabled", "active"]
    }
  },

  plugins: []
};
