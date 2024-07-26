/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "rgb(var(--color-primary))",
      secondary: "rgb(var(--color-secondary))",
      text: "rgb(var(--color-text))",
      white: "rgb(var(--color-white))",
    },
    keyframes: {
      loading: {
        "0%": { backgroundPosition: "0 50%, 50% 50%, 100% 50%" },
        "20%": { backgroundPosition: "0 0%, 50% 50%, 100% 50%" },
        "40%": { backgroundPosition: "0 100%, 50% 0, 100% 50%" },
        "60%": { backgroundPosition: "0 50%, 50% 100%, 100% 0" },
        "80%": { backgroundPosition: "0 50%, 50% 50%, 100% 100%" },
        "100%": { backgroundPosition: "0 50%, 50% 50%, 100% 50%" },
      },
    },
    animation: {
      loading: "loading 1s infinite alternate",
    },
  },
  plugins: [],
};
