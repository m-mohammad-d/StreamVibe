/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        intro: "url('/background-hero-section.png')",
        header: "url('/header-bg.png')",
      },
      colors: {
        "primary-45": "#E50000",
        "primary-50": "#FF0000",
        "primary-55": "#FF1A1A",
        "primary-60": "#FF3333",
        "primary-80": "#FF9999",
        "primary-90": "#FFCCCC",
        "primary-95": "#FFE5E5",
        "primary-99": "#FFFAFA",
        "dark-06": "#0F0F0F",
        "dark-08": "#141414",
        "dark-10": "#1A1A1A",
        "dark-12": "#1F1F1F",
        "dark-15": "#262626",
        "dark-20": "#333333",
        "dark-25": "#404040",
        "dark-30": "#4C4C4C",
        "grey-60": "#999999",
        "grey-65": "#A6A6A6",
        "grey-70": "#B3B3B3",
        "grey-75": "#BFBFBF",
        "grey-90": "#E4E4E7",
        "grey-95": "#F1F1F3",
        "grey-97": "#F7F7F8",
        "grey-99": "#FCFCFD",
      },
    },
  },
  plugins: [],
};
