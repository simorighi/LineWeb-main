tailwind.config = {
  theme: {
    extend: {
      colors: {
        gold: {
          300: "#EBCB8B",
          400: "#D4AF37", // Classic Gold
          500: "#C5A028",
          600: "#B08D55",
        },
        dark: {
          900: "#050505", // Deep Black
          800: "#121212",
          700: "#1A1A1A",
        },
        deepBlue: "#0F172A",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        display: ['"Cinzel"', "serif"],
        sans: ['"Manrope"', "sans-serif"],
      },
      backgroundImage: {
        "luxury-gradient":
          "linear-gradient(to right, #D4AF37, #F3E5AB, #D4AF37)",
      },
    },
  },
};
