/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#f6f6f7",
        accent: "#1a56db",
        "secondary-accent": "#e2e2e3",
        title: "#3c3c43",
        subtitle: "#52525c",
        "dark-primary": "#1b1b1f",
        "dark-secondary2": "#161618",
        "dark-secondary": "#202127",
        "dark-title": "#dfdfd6",
        "dark-subtitle": "#98989f",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      height: {
        screen: "calc(100vh - 64px)",
      },
    },
  },
  plugins: [],
};
