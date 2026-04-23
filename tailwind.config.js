/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Variable"', "Inter", "system-ui", "sans-serif"],
        mono: [
          '"JetBrains Mono Variable"',
          '"JetBrains Mono"',
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      colors: {
        accent: {
          DEFAULT: "#10b981",
          muted: "#059669",
        },
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      maxWidth: {
        prose: "68ch",
        page: "56rem",
      },
    },
  },
  plugins: [],
};
