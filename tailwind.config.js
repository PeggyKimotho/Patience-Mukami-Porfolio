/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
  forest:  "#0A0A0F",
  moss:    "#111118",
  sage:    "#2563EB",
  gold:    "#2563EB",
  "gold-lt": "#60A5FA",
  cream:   "#F8FAFC",
  sand:    "#E2E8F0",
  ink:     "#F1F5F9",
  muted:   "#94A3B8",
},
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body:    ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
