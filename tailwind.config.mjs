import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#f6f1e8",
        paper: "#fbf7f1",
        ink: "#14211d",
        gold: "#b98645",
        pine: "#2f6654",
        mist: "#d9e4de",
        coral: "#c66c4e"
      },
      fontFamily: {
        sans: ["Satoshi", "Avenir Next", "Segoe UI", "sans-serif"],
        display: ["Clash Display", "Avenir Next Condensed", "Trebuchet MS", "sans-serif"]
      },
      maxWidth: {
        shell: "72rem"
      },
      borderRadius: {
        card: "2rem",
        panel: "2.5rem"
      },
      boxShadow: {
        card: "0 18px 60px rgba(16, 23, 20, 0.08)",
        floating: "0 30px 80px rgba(16, 23, 20, 0.12)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(20, 33, 29, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(20, 33, 29, 0.06) 1px, transparent 1px)",
        "soft-radial":
          "radial-gradient(circle at top left, rgba(198, 108, 78, 0.16), transparent 28%), radial-gradient(circle at top right, rgba(185, 134, 69, 0.16), transparent 24%)"
      }
    }
  },
  plugins: [typography]
};
