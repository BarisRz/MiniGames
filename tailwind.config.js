/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#f6f6f7",
        accent: "#1a56db",
        title: "#3c3c43",
        subtitle: "#52525c",
        "dark-primary": "#1b1b1f",
        "dark-secondary": "#161618",
        "dark-title": "#dfdfd6",
        "dark-subtitle": "#98989f",
      },
    },
  },
  plugins: [],
};
