/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F6F1E7",
        paper: "#FBF8F1",
        charcoal: "#2A2622",
        charcoal2: "#4A443C",
        terracotta: "#B5603C",
        "terracotta-soft": "#C97B54",
        stone: "#8A8074",
        line: "rgba(42,38,34,0.14)",
      },
      fontFamily: {
        serif: ["var(--font-newsreader)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
