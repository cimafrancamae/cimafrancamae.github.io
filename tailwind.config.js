/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        beige: "#F9F5EF",       // soft neutral background
        clay: "#836953",        // warm muted brown
        sage: "#DDE2C6",        // gentle green
        terracotta: "#D7745B",  // rich earthy orange
        brown: "#4E3629",       // strong dark base
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], 
      },
    },
  },
  plugins: [],
};
